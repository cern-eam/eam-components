import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataGridResultTable from './components/table/EAMGridTable';
import DataGridSelectDataspy from './components/EAMGridSelectDataspy';
import GridWS from "./lib/GridWS";
import {toggleSortField} from './lib/sorting';
import {clearFilters, saveGridRequestInLocalStorage, loadGridRequestFromLocalStorage, setFilter, getFilters} from './lib/filtering';
import ErrorTypes from "./lib/GridErrorTypes";
import axios from "axios/index";
import {withStyles} from "@material-ui/core/styles/index";
import KeyCode from "./enums/KeyCode";
import HttpStatus from "./enums/HttpStatus";

const styles = (theme) => ({
    ...theme,
    dataGridMainContainer: {
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        "-moz-box-sizing": "border-box",
        "-webkit-box-sizing": "border-box",
        margin: "10px"
    }
});

const initialState = {
    hasMore: true,
    totalRecords: 0,
    rows: [],
    selectedRows: {},
    filterVisible: false,
    isloading: false,
    gridRequest: {
        rowCount: 50,
        cursorPosition: 1,
        dataspyID: "",
        gridSort: [],
        gridFilter: [],
        useNative: false
    },
    exporterBlocked: false
};

class EAMGrid extends Component {

    /*
    Map containing all filters
    filterMap is updated on every keystroke. Filters are applied when the user actually executes the search.
    */
    filterMap = {};

    constructor(props) {
        super(props);

        // get cached version of grid request
        this.loadGridRequestFromLocalStorage = loadGridRequestFromLocalStorage.bind(this);
        let cachedGridRequest = this.props.cache ? this.loadGridRequestFromLocalStorage() : undefined;
        
        if (cachedGridRequest) {
            this.filterMap = cachedGridRequest.gridFilter ? cachedGridRequest.gridFilter : {};
        }

        // init the state
        this.state = cachedGridRequest ?
            {
                ...initialState,
                filterVisible: this.props.filterVisible,
                gridRequest: {
                    ...initialState.gridRequest,
                    ...JSON.parse(cachedGridRequest),
                    gridID: this.props.gridId,
                    gridSort: this.props.gridSort ? this.props.gridSort : JSON.parse(cachedGridRequest).gridSort,
                    cursorPosition: 1
                }
            }
            :
            {
                ...initialState,
                filterVisible: this.props.filterVisible,
                gridRequest: {
                    ...initialState.gridRequest,
                    gridID: this.props.gridId,
                    gridSort: this.props.gridSort ? this.props.gridSort : []
                }
            };

        this.fieldsWidthInfo = new Map();

        // toggleSortField method from sorting
        this.toggleSortField = toggleSortField.bind(this);

        // setFilter method from filtering
        this.setFilter = setFilter.bind(this);

        this.getFilters = getFilters.bind(this);

        // clearFilter method from filtering
        this.clearFilters = clearFilters.bind(this);

        // saveGridRequestInLocalStorage form filtering
        this.saveGridRequestInLocalStorage = saveGridRequestInLocalStorage.bind(this);
    }

    _doesDataspyIDExistInAvailableDataspies(dataspyid, dataspies) {
        const filteredDataspies = dataspies.filter(d => d.code === dataspyid);
        if (filteredDataspies && filteredDataspies.length === 1) {
            return true;
        } else {
            return false;
        }
    }

    _initGrid = () => {
        GridWS.getGridMetadata(this.state.gridRequest.gridID, this.props.language)
            .then(data => {
                const metadata = data.body.data;

                // sort field based on their order
                this._orderGridFieldsBasedOnTheirOrderProperty(metadata.gridField);

                // set metadata info in state
                this.setState((prevState) => {
                    const dataspyID = (
                        prevState.gridRequest.dataspyID.length !== 0 &&
                        this._doesDataspyIDExistInAvailableDataspies(prevState.gridRequest.dataspyID, metadata.gridDataspy)
                    ) ?
                        prevState.gridRequest.dataspyID :
                        metadata.dataSpyId;
                    return {
                        ...prevState,
                        fields: metadata.gridField,
                        listOfDataSpy: metadata.gridDataspy,
                        gridRequest: {
                            ...prevState.gridRequest,
                            "gridID": metadata.gridCode,
                            "dataspyID": dataspyID,
                            "gridName": metadata.gridName
                        }
                    }
                }, () => {
                    // if the dataspy id is not the default we reload information about fields
                    if (metadata.dataSpyId !== this.state.gridRequest.dataspyID) {
                        this._readFieldInfo();
                    } else {
                        this._resetFieldWidthInfo();

                        // execute the grid request if the dataspy has autorun enabled
                        if (this.props.autorun) {
                            this.loadMoreData();
                        }
                    }
                });
            }).catch(error => {
            if (error.status === HttpStatus.NOT_FOUND) {
                alert("Metadata for this grid does not exist");
            }
        });
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        // if gridID changed, then we need to re-init the grid
        // and reload the grid metadata
        if (nextProps.gridId !== prevState.gridRequest.gridID) {
            return {
                ...initialState,
                gridRequest: {
                    ...initialState.gridRequest,
                    gridID: nextProps.gridId,
                    gridSort: nextProps.gridSort ? nextProps.gridSort : []
                }
            }
        }
        if (nextProps.dataspyId && nextProps.dataspyId !== prevState.gridRequest.dataspyID) {
            return {
                ...initialState,
                gridRequest: {
                    ...initialState.gridRequest,
                    gridID: nextProps.gridId,
                    dataspyID: nextProps.dataspyId,
                    gridSort: nextProps.gridSort ? nextProps.gridSort : []
                }
            }
        }

        // No state update necessary
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        // re-init grid if gridID changed
        if (prevState.gridRequest.gridID !== this.state.gridRequest.gridID
            || prevState.gridRequest.dataspyID !== this.state.gridRequest.dataspyID) {
            this._initGrid();
        }
    }

    componentDidMount() {
        if (this.props.onRef) {
            this.props.onRef(this);
        }

        this._initGrid();

        document.body.onkeydown = e => this.handleKeyDown(e);
    }

    componentWillUnmount() {
        // cancel current transaction if any
        if (!!this.cancelSource) {
            this.cancelSource.cancel();
        }

        //
        if (this.props.onRef) {
            this.props.onRef(undefined);
        }
    }

    getCellWidth = (cellTagname) => {
        return this.fieldsWidthInfo.get(cellTagname);
    };

    handleChangeDataSpy = (event) => {
        if (this.props.handleChangeDataSpy) {
            this.props.handleChangeDataSpy(event.target.value);
        } else {
            this.setState((prevState) => ({
                ...prevState,
                rows: [],
                totalRecords: 0,
                hasMore: true,
                gridRequest: {
                    ...prevState.gridRequest,
                    cursorPosition: 1,
                    dataspyID: event.target.value,
                    gridSort: [],
                    gridFilter: []
                }
            }), () => {
                this.saveGridRequestInLocalStorage();
                this._readFieldInfo();
            });
        }
    };

    toggleFilter = () => {
        this.setState(prevState => ({
            ...prevState,
            filterVisible: !prevState.filterVisible
        }))
    };

    // Execute search
    runSearch = () => {
        // Run search, update state with latest state of filters
        let filters = this.getFilters();

        this.setState(prevState => ({
            hasMore: true,
            rows: [],
            totalRecords: 0,
            gridRequest: {
                ...prevState.gridRequest,
                gridFilter: filters,
                cursorPosition: 1
            },
            selectedRows: {}
        }), () => {
            this.saveGridRequestInLocalStorage();
            this.loadMoreData();
        })
    };

    _cleanFilters = () => {
        // clean filter by removing filters without value
        let request = {
            ...this.state.gridRequest,
            gridFilter: [
                ...this.state.gridRequest.gridFilter
            ]
        };
        request.gridFilter = request.gridFilter.filter(f => f.operator !== 'INDETERMINATE' && ((f.fieldValue && f.fieldValue !== "") || f.operator === 'SELECTED' || f.operator === 'NOT_SELECTED'));
        return request;
    };

    loadMoreData = () => {
        // cancel current transaction if any
        if (!!this.cancelSource) {
            this.cancelSource.cancel();
        }

        // return if no results have to be returned
        if (!this.state.hasMore) {
            return;
        }

        // get axios token to allow transaction cancellation
        this.cancelSource = axios.CancelToken.source();

        this.setState(prevState => ({
                ...prevState,
                isloading: true
            }), () => {

                // clean filter by removing filters without value
                let request = this.props.gridRequestAdapter(this._cleanFilters());

                GridWS.getGridData(request, {
                    cancelToken: this.cancelSource.token
                }).then(data => {

                    // nullify info of current transaction
                    this.cancelSource = null;

                    // set state with data and grid fields info
                    this.setState(prevState => {
                        // true if it has more results
                        let hasMore = data.body.data.moreRowsPresent === 'TRUE';

                        // calculate new cursor
                        let newcursor = hasMore ?
                            +data.body.data.row[data.body.data.row.length - 1].id + 1 :
                            prevState.gridRequest.cursorPosition
                        ;

                        return {
                            ...prevState,
                            'isloading': false,
                            'data': data.body.data,
                            'hasMore': data.body.data.moreRowsPresent === 'TRUE',
                            'totalRecords': data.body.data.records,
                            'rows': prevState.rows.concat(data.body.data.row),
                            'gridRequest': {
                                ...prevState.gridRequest,
                                "cursorPosition": newcursor,
                            }
                        }
                    });
                }).catch(error => {
                    if (error.type !== ErrorTypes.REQUEST_CANCELLED) {
                        this.setState({
                            isloading: false
                        });

                        this.props.handleError(error);
                    }
                });
            }
        )
    };

    exportDataToCSV = () => {
        this.setState({exporterBlocked: true});

        // get axios token to allow transaction cancellation
        this.cancelSource = axios.CancelToken.source();

        // clean filter by removing filters without value
        let request = this.props.gridRequestAdapter(this._cleanFilters());

        return GridWS.exportDataToCSV(request, {
            cancelToken: this.cancelSource.token
        }).then(data => {
            // nullify info of current transaction
            this.cancelSource = null;

            this.setState({exporterBlocked: false});

            return data.body;
        }).catch(error => {
            if (error.type !== ErrorTypes.REQUEST_CANCELLED) {
                this.setState({
                    isloading: false
                });

                this.props.handleError(error);
            }
        });
    };

    handleSelectRow = (row, checked) => {
        this.setState((prevState) => {
            const selectedRows = {...prevState.selectedRows};
            if (checked && this.props.isRowSelectable(row, selectedRows)) {
                selectedRows[row.id] = row;
            } else {
                delete selectedRows[row.id];
            }
            //If the row is selected and there is the function
            if (this.props.onSelectRow)
                this.props.onSelectRow(row, checked, selectedRows);
            return {selectedRows};
        });
    };


    _orderGridFieldsBasedOnTheirOrderProperty(fields) {
        fields.sort(function (a, b) {
            return a.order - b.order;
        });
    }

    _isHidden(tagName) {
        const {hiddenTags} = this.props;
        if (hiddenTags && hiddenTags.filter(f => f === tagName).length > 0) {
            return true;
        } else {
            return false;
        }
    }

    _resetFieldWidthInfo() {
        this.fieldsWidthInfo = new Map();
        this.state.fields.map(field => this.fieldsWidthInfo.set(field.name, {
            width: field.width,
            dataType: field.dataType
        }));
    }

    _readFieldInfo() {
        GridWS.getGridFieldsInfo(this.state.gridRequest.gridID, this.state.gridRequest.dataspyID).then(data => {

            // sort field based on their order
            this._orderGridFieldsBasedOnTheirOrderProperty(data.body.data.gridField);

            // set state
            this.setState((prevState) => {
                return {
                    ...prevState,
                    fields: data.body.data.gridField
                }
            }, () => {
                this._resetFieldWidthInfo();
                this.loadMoreData();
            });

        }).catch(error => {
            if (error.status === HttpStatus.NOT_FOUND) {
                alert("This grid does not exist");
            }
        });
    }

    handleKeyDown(event) {
        if (event.key === KeyCode.F7) {
            this.toggleFilter();
        }

        if (event.key === KeyCode.F8) {
            this.runSearch();
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.dataGridMainContainer}
                 style={{
                     height: `calc(100% - ${this.state.filterVisible ? this.props.heightFilterVisible : this.props.heightFilterNotVisible})`,
                     width: `${this.props.width}`
                 }}>
                {
                    this.props.showDataspySelection &&
                    <DataGridSelectDataspy
                        dataSpy={this.state.gridRequest.dataspyID}
                        listOfDataSpy={this.state.listOfDataSpy}
                        handleChangeDataSpy={this.handleChangeDataSpy.bind(this)}
                        toggleFilter={this.toggleFilter.bind(this)}
                        filterVisible={this.state.filterVisible}
                        runSearch={this.runSearch.bind(this)}
                        clearFilters={this.clearFilters.bind(this)}
                    />
                }
                <DataGridResultTable
                    toggleSortField={this.toggleSortField.bind(this)}
                    getCellWidth={this.getCellWidth.bind(this)}
                    fields={this.state.fields}
                    rows={this.state.rows}
                    loadMoreData={this.loadMoreData.bind(this)}
                    exportData={this.exportDataToCSV.bind(this)}
                    hasMore={this.state.hasMore}
                    isloading={this.state.isloading}
                    filterVisible={this.state.filterVisible}
                    filters={this.state.gridRequest.gridFilter}
                    sortFields={this.state.gridRequest.gridSort}
                    setFilter={this.setFilter.bind(this)}
                    runSearch={this.runSearch.bind(this)}
                    totalRecords={this.state.totalRecords}
                    cellRenderer={this.props.cellRenderer}
                    exporterBlocked={this.state.exporterBlocked}
                    isHiddenField={this._isHidden.bind(this)}
                    onSelectRow={this.props.onSelectRow}
                    onEditRow={this.props.onEditRow}
                    onUnselectAll={this.props.onUnselectAll}
                    isRowSelectable={this.props.isRowSelectable}
                    extraColumns={this.props.extraColumns}
                    onRowClick={this.props.onRowClick}
                    allowRowSelection={this.props.allowRowSelection}
                    handleSelectRow={this.handleSelectRow}
                    selectedRows={this.state.selectedRows}
                    headerStyle={this.props.headerStyle}
                    rowStyler={this.props.rowStyler}
                />
            </div>
        );
    }
}

EAMGrid.propTypes = {
    gridId: PropTypes.string.isRequired,
    showDataspySelection: PropTypes.bool,
    cache: PropTypes.bool,
    selectColumn: PropTypes.bool,
    autorun: PropTypes.bool,
    editColumn: PropTypes.bool,
    gridRequestAdapter: PropTypes.func,
    extraColumns: PropTypes.array,
    language: PropTypes.string,
    onRowClick: PropTypes.func,
    allowRowSelection: PropTypes.bool,
    rowStyler: PropTypes.func,
    filterVisible: PropTypes.bool
};

EAMGrid.defaultProps = {
    cache: true,
    showDataspySelection: true,
    selectColumn: false,
    editColumn: false,
    autorun: true,
    gridRequestAdapter: gridRequest => gridRequest,
    heightFilterVisible: '270px',
    heightFilterNotVisible: '230px',
    width: 'calc(100% - 20px)',
    extraColumns: [],
    language: 'EN',
    allowRowSelection: false,
    headerStyle: {
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap"
    },
    filterVisible: false
};

export default withStyles(styles)(EAMGrid);