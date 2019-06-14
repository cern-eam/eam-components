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
        "-webkit-box-sizing": "border-box"
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
        gridSort: [],
        gridFilter: [],
        useNative: true,
        includeMetadata: true
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

        // init the state
        this.state =
            {
                ...initialState,
                filterVisible: this.props.filterVisible
            };

        this.fieldsWidthInfo = new Map();

        // toggleSortField method from sorting
        this.toggleSortField = toggleSortField.bind(this);

        // setFilter method from filtering
        this.setFilter = setFilter.bind(this);

        this.getFilters = getFilters.bind(this);

        // clearFilter method from filtering
        this.clearFilters = clearFilters.bind(this);

    }

    _initGrid = () => {
        GridWS.getGridData(this.state.gridRequest)
            .then(data => {
                const metadata = data.body.data;

                this._resetFieldWidthInfo(metadata.gridField)

                // sort field based on their order
                this._orderGridFieldsBasedOnTheirOrderProperty(metadata.gridField);

                // set metadata info in state
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        fields: metadata.gridField,
                        listOfDataSpy: metadata.gridDataspy,
                        hasMore: metadata.moreRowsPresent === 'TRUE',
                        totalRecords: metadata.records,
                        rows: metadata.row,
                        isloading: false,
                        gridRequest: {
                            ...prevState.gridRequest,
                            "gridID": metadata.gridCode,
                            "dataspyID": metadata.dataSpyId,
                            "gridName": metadata.gridName,
                            cursorPosition: metadata.cursorPosition + 1
                        }
                    }
                });
            }).catch(error => {
                this.setState({
                    isloading: false
                })
            if (error.status === HttpStatus.NOT_FOUND) {
                alert("Metadata for this grid does not exist");
            }
        });
    };

    init = screenCode => {
        if (screenCode) {
            this.setState({
                gridRequest: {
                    ...initialState.gridRequest,
                    gridName: screenCode,
                }
            }, () => {this._initGrid()})
        }
    }

    componentDidMount() {
        if (this.props.onRef) {
            this.props.onRef(this);
        }
        this.init(this.props.screenCode)
        document.body.onkeydown = e => this.handleKeyDown(e);
    }

    componentWillReceiveProps(nextProps) {
        this.init(nextProps.screenCode)
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

    getCellWidth = cellTagname => this.fieldsWidthInfo.get(cellTagname)

    handleChangeDataSpy = (event) => {
            this.setState((prevState) => ({
                ...prevState,
                rows: [],
                totalRecords: 0,
                isloading: true,
                hasMore: true,
                gridRequest: {
                    ...prevState.gridRequest,
                    cursorPosition: 1,
                    dataspyID: event.target.value,
                    gridSort: [],
                    gridFilter: []
                }
            }), () => {
                this._initGrid();
            });

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
            this.loadMoreData();
        })
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

                GridWS.getGridData(this.state.gridRequest, {
                    cancelToken: this.cancelSource.token
                }).then(data => {
                    // nullify info of current transaction
                    this.cancelSource = null;

                    // set state with data and grid fields info
                    this.setState(prevState => {
                        // true if it has more results
                        let hasMore = data.body.data.moreRowsPresent === 'TRUE';

                        return {
                            ...prevState,
                            'isloading': false,
                            'data': data.body.data,
                            'hasMore': data.body.data.moreRowsPresent === 'TRUE',
                            'totalRecords': data.body.data.records,
                            'rows': prevState.rows.concat(data.body.data.row),
                            'gridRequest': {
                                ...prevState.gridRequest,
                                cursorPosition: data.body.data.cursorPosition,
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

    _resetFieldWidthInfo(fields) {
        this.fieldsWidthInfo = new Map();
        fields.map(field => this.fieldsWidthInfo.set(field.name, {
            width: field.width,
            dataType: field.dataType
        }));
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
    heightFilterVisible: '250px',
    heightFilterNotVisible: '210px',
    width: '100%',
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