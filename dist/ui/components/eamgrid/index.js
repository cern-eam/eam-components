'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EAMGridTable = require('./components/table/EAMGridTable');

var _EAMGridTable2 = _interopRequireDefault(_EAMGridTable);

var _EAMGridSelectDataspy = require('./components/EAMGridSelectDataspy');

var _EAMGridSelectDataspy2 = _interopRequireDefault(_EAMGridSelectDataspy);

var _GridWS = require('./lib/GridWS');

var _GridWS2 = _interopRequireDefault(_GridWS);

var _sorting = require('./lib/sorting');

var _filtering = require('./lib/filtering');

var _GridErrorTypes = require('./lib/GridErrorTypes');

var _GridErrorTypes2 = _interopRequireDefault(_GridErrorTypes);

var _index = require('axios/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('@material-ui/core/styles/index');

var _KeyCode = require('./enums/KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _HttpStatus = require('./enums/HttpStatus');

var _HttpStatus2 = _interopRequireDefault(_HttpStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return _extends({}, theme, {
        dataGridMainContainer: {
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            "-moz-box-sizing": "border-box",
            "-webkit-box-sizing": "border-box",
            margin: "10px"
        }
    });
};

var initialState = {
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

var EAMGrid = function (_Component) {
    _inherits(EAMGrid, _Component);

    function EAMGrid(props) {
        _classCallCheck(this, EAMGrid);

        // get cached version of grid request
        var _this = _possibleConstructorReturn(this, (EAMGrid.__proto__ || Object.getPrototypeOf(EAMGrid)).call(this, props));

        _this.filterMap = {};

        _this._initGrid = function () {
            _GridWS2.default.getGridMetadata(_this.state.gridRequest.gridID, _this.props.language).then(function (data) {
                var metadata = data.body.data;

                // sort field based on their order
                _this._orderGridFieldsBasedOnTheirOrderProperty(metadata.gridField);

                // set metadata info in state
                _this.setState(function (prevState) {
                    var dataspyID = prevState.gridRequest.dataspyID.length !== 0 && _this._doesDataspyIDExistInAvailableDataspies(prevState.gridRequest.dataspyID, metadata.gridDataspy) ? prevState.gridRequest.dataspyID : metadata.dataSpyId;
                    return _extends({}, prevState, {
                        fields: metadata.gridField,
                        listOfDataSpy: metadata.gridDataspy,
                        gridRequest: _extends({}, prevState.gridRequest, {
                            "gridID": metadata.gridCode,
                            "dataspyID": dataspyID,
                            "gridName": metadata.gridName
                        })
                    });
                }, function () {
                    // if the dataspy id is not the default we reload information about fields
                    if (metadata.dataSpyId !== _this.state.gridRequest.dataspyID) {
                        _this._readFieldInfo();
                    } else {
                        _this._resetFieldWidthInfo();

                        // execute the grid request if the dataspy has autorun enabled
                        if (_this.props.autorun) {
                            _this.loadMoreData();
                        }
                    }
                });
            }).catch(function (error) {
                if (error.status === _HttpStatus2.default.NOT_FOUND) {
                    alert("Metadata for this grid does not exist");
                }
            });
        };

        _this.getCellWidth = function (cellTagname) {
            return _this.fieldsWidthInfo.get(cellTagname);
        };

        _this.handleChangeDataSpy = function (event) {
            if (_this.props.handleChangeDataSpy) {
                _this.props.handleChangeDataSpy(event.target.value);
            } else {
                _this.setState(function (prevState) {
                    return _extends({}, prevState, {
                        rows: [],
                        totalRecords: 0,
                        hasMore: true,
                        gridRequest: _extends({}, prevState.gridRequest, {
                            cursorPosition: 1,
                            dataspyID: event.target.value,
                            gridSort: [],
                            gridFilter: []
                        })
                    });
                }, function () {
                    _this.saveGridRequestInLocalStorage();
                    _this._readFieldInfo();
                });
            }
        };

        _this.toggleFilter = function () {
            _this.setState(function (prevState) {
                return _extends({}, prevState, {
                    filterVisible: !prevState.filterVisible
                });
            });
        };

        _this.runSearch = function () {
            // Run search, update state with latest state of filters
            var filters = _this.getFilters();

            _this.setState(function (prevState) {
                return {
                    hasMore: true,
                    rows: [],
                    totalRecords: 0,
                    gridRequest: _extends({}, prevState.gridRequest, {
                        gridFilter: filters,
                        cursorPosition: 1
                    }),
                    selectedRows: {}
                };
            }, function () {
                _this.saveGridRequestInLocalStorage();
                _this.loadMoreData();
            });
        };

        _this._cleanFilters = function () {
            // clean filter by removing filters without value
            var request = _extends({}, _this.state.gridRequest, {
                gridFilter: [].concat(_toConsumableArray(_this.state.gridRequest.gridFilter))
            });
            request.gridFilter = request.gridFilter.filter(function (f) {
                return f.operator !== 'INDETERMINATE' && (f.fieldValue && f.fieldValue !== "" || f.operator === 'SELECTED' || f.operator === 'NOT_SELECTED');
            });
            return request;
        };

        _this.loadMoreData = function () {
            // cancel current transaction if any
            if (!!_this.cancelSource) {
                _this.cancelSource.cancel();
            }

            // return if no results have to be returned
            if (!_this.state.hasMore) {
                return;
            }

            // get axios token to allow transaction cancellation
            _this.cancelSource = _index2.default.CancelToken.source();

            _this.setState(function (prevState) {
                return _extends({}, prevState, {
                    isloading: true
                });
            }, function () {

                // clean filter by removing filters without value
                var request = _this.props.gridRequestAdapter(_this._cleanFilters());

                _GridWS2.default.getGridData(request, {
                    cancelToken: _this.cancelSource.token
                }).then(function (data) {

                    // nullify info of current transaction
                    _this.cancelSource = null;

                    // set state with data and grid fields info
                    _this.setState(function (prevState) {
                        // true if it has more results
                        var hasMore = data.body.data.moreRowsPresent === 'TRUE';

                        // calculate new cursor
                        var newcursor = hasMore ? +data.body.data.row[data.body.data.row.length - 1].id + 1 : prevState.gridRequest.cursorPosition;

                        return _extends({}, prevState, {
                            'isloading': false,
                            'data': data.body.data,
                            'hasMore': data.body.data.moreRowsPresent === 'TRUE',
                            'totalRecords': data.body.data.records,
                            'rows': prevState.rows.concat(data.body.data.row),
                            'gridRequest': _extends({}, prevState.gridRequest, {
                                "cursorPosition": newcursor
                            })
                        });
                    });
                }).catch(function (error) {
                    if (error.type !== _GridErrorTypes2.default.REQUEST_CANCELLED) {
                        _this.setState({
                            isloading: false
                        });

                        _this.props.handleError(error);
                    }
                });
            });
        };

        _this.exportDataToCSV = function () {
            _this.setState({ exporterBlocked: true });

            // get axios token to allow transaction cancellation
            _this.cancelSource = _index2.default.CancelToken.source();

            // clean filter by removing filters without value
            var request = _this.props.gridRequestAdapter(_this._cleanFilters());

            return _GridWS2.default.exportDataToCSV(request, {
                cancelToken: _this.cancelSource.token
            }).then(function (data) {
                // nullify info of current transaction
                _this.cancelSource = null;

                _this.setState({ exporterBlocked: false });

                return data.body;
            }).catch(function (error) {
                if (error.type !== _GridErrorTypes2.default.REQUEST_CANCELLED) {
                    _this.setState({
                        isloading: false
                    });

                    _this.props.handleError(error);
                }
            });
        };

        _this.handleSelectRow = function (row, checked) {
            _this.setState(function (prevState) {
                var selectedRows = _extends({}, prevState.selectedRows);
                if (checked && _this.props.isRowSelectable(row, selectedRows)) {
                    selectedRows[row.id] = row;
                } else {
                    delete selectedRows[row.id];
                }
                //If the row is selected and there is the function
                if (_this.props.onSelectRow) _this.props.onSelectRow(row, checked, selectedRows);
                return { selectedRows: selectedRows };
            });
        };

        _this.loadGridRequestFromLocalStorage = _filtering.loadGridRequestFromLocalStorage.bind(_this);
        var cachedGridRequest = _this.props.cache ? _this.loadGridRequestFromLocalStorage() : undefined;

        if (cachedGridRequest) {
            _this.filterMap = cachedGridRequest.gridFilter ? cachedGridRequest.gridFilter : {};
        }

        // init the state
        _this.state = cachedGridRequest ? _extends({}, initialState, {
            filterVisible: _this.props.filterVisible,
            gridRequest: _extends({}, initialState.gridRequest, JSON.parse(cachedGridRequest), {
                gridID: _this.props.gridId,
                gridSort: _this.props.gridSort ? _this.props.gridSort : JSON.parse(cachedGridRequest).gridSort,
                cursorPosition: 1
            })
        }) : _extends({}, initialState, {
            filterVisible: _this.props.filterVisible,
            gridRequest: _extends({}, initialState.gridRequest, {
                gridID: _this.props.gridId,
                gridSort: _this.props.gridSort ? _this.props.gridSort : []
            })
        });

        _this.fieldsWidthInfo = new Map();

        // toggleSortField method from sorting
        _this.toggleSortField = _sorting.toggleSortField.bind(_this);

        // setFilter method from filtering
        _this.setFilter = _filtering.setFilter.bind(_this);

        _this.getFilters = _filtering.getFilters.bind(_this);

        // clearFilter method from filtering
        _this.clearFilters = _filtering.clearFilters.bind(_this);

        // saveGridRequestInLocalStorage form filtering
        _this.saveGridRequestInLocalStorage = _filtering.saveGridRequestInLocalStorage.bind(_this);
        return _this;
    }

    /*
    Map containing all filters
    filterMap is updated on every keystroke. Filters are applied when the user actually executes the search.
    */


    _createClass(EAMGrid, [{
        key: '_doesDataspyIDExistInAvailableDataspies',
        value: function _doesDataspyIDExistInAvailableDataspies(dataspyid, dataspies) {
            var filteredDataspies = dataspies.filter(function (d) {
                return d.code === dataspyid;
            });
            if (filteredDataspies && filteredDataspies.length === 1) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            // re-init grid if gridID changed
            if (prevState.gridRequest.gridID !== this.state.gridRequest.gridID || prevState.gridRequest.dataspyID !== this.state.gridRequest.dataspyID) {
                this._initGrid();
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.props.onRef) {
                this.props.onRef(this);
            }

            this._initGrid();

            document.body.onkeydown = function (e) {
                return _this2.handleKeyDown(e);
            };
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // cancel current transaction if any
            if (!!this.cancelSource) {
                this.cancelSource.cancel();
            }

            //
            if (this.props.onRef) {
                this.props.onRef(undefined);
            }
        }

        // Execute search

    }, {
        key: '_orderGridFieldsBasedOnTheirOrderProperty',
        value: function _orderGridFieldsBasedOnTheirOrderProperty(fields) {
            fields.sort(function (a, b) {
                return a.order - b.order;
            });
        }
    }, {
        key: '_isHidden',
        value: function _isHidden(tagName) {
            var hiddenTags = this.props.hiddenTags;

            if (hiddenTags && hiddenTags.filter(function (f) {
                return f === tagName;
            }).length > 0) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: '_resetFieldWidthInfo',
        value: function _resetFieldWidthInfo() {
            var _this3 = this;

            this.fieldsWidthInfo = new Map();
            this.state.fields.map(function (field) {
                return _this3.fieldsWidthInfo.set(field.name, {
                    width: field.width,
                    dataType: field.dataType
                });
            });
        }
    }, {
        key: '_readFieldInfo',
        value: function _readFieldInfo() {
            var _this4 = this;

            _GridWS2.default.getGridFieldsInfo(this.state.gridRequest.gridID, this.state.gridRequest.dataspyID).then(function (data) {

                // sort field based on their order
                _this4._orderGridFieldsBasedOnTheirOrderProperty(data.body.data.gridField);

                // set state
                _this4.setState(function (prevState) {
                    return _extends({}, prevState, {
                        fields: data.body.data.gridField
                    });
                }, function () {
                    _this4._resetFieldWidthInfo();
                    _this4.loadMoreData();
                });
            }).catch(function (error) {
                if (error.status === _HttpStatus2.default.NOT_FOUND) {
                    alert("This grid does not exist");
                }
            });
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            if (event.key === _KeyCode2.default.F7) {
                this.toggleFilter();
            }

            if (event.key === _KeyCode2.default.F8) {
                this.runSearch();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            return _react2.default.createElement(
                'div',
                { className: classes.dataGridMainContainer,
                    style: {
                        height: 'calc(100% - ' + (this.state.filterVisible ? this.props.heightFilterVisible : this.props.heightFilterNotVisible) + ')',
                        width: '' + this.props.width
                    } },
                this.props.showDataspySelection && _react2.default.createElement(_EAMGridSelectDataspy2.default, {
                    dataSpy: this.state.gridRequest.dataspyID,
                    listOfDataSpy: this.state.listOfDataSpy,
                    handleChangeDataSpy: this.handleChangeDataSpy.bind(this),
                    toggleFilter: this.toggleFilter.bind(this),
                    filterVisible: this.state.filterVisible,
                    runSearch: this.runSearch.bind(this),
                    clearFilters: this.clearFilters.bind(this)
                }),
                _react2.default.createElement(_EAMGridTable2.default, {
                    toggleSortField: this.toggleSortField.bind(this),
                    getCellWidth: this.getCellWidth.bind(this),
                    fields: this.state.fields,
                    rows: this.state.rows,
                    loadMoreData: this.loadMoreData.bind(this),
                    exportData: this.exportDataToCSV.bind(this),
                    hasMore: this.state.hasMore,
                    isloading: this.state.isloading,
                    filterVisible: this.state.filterVisible,
                    filters: this.state.gridRequest.gridFilter,
                    sortFields: this.state.gridRequest.gridSort,
                    setFilter: this.setFilter.bind(this),
                    runSearch: this.runSearch.bind(this),
                    totalRecords: this.state.totalRecords,
                    cellRenderer: this.props.cellRenderer,
                    exporterBlocked: this.state.exporterBlocked,
                    isHiddenField: this._isHidden.bind(this),
                    onSelectRow: this.props.onSelectRow,
                    onEditRow: this.props.onEditRow,
                    onUnselectAll: this.props.onUnselectAll,
                    isRowSelectable: this.props.isRowSelectable,
                    extraColumns: this.props.extraColumns,
                    onRowClick: this.props.onRowClick,
                    allowRowSelection: this.props.allowRowSelection,
                    handleSelectRow: this.handleSelectRow,
                    selectedRows: this.state.selectedRows,
                    headerStyle: this.props.headerStyle,
                    rowStyler: this.props.rowStyler
                })
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, prevState) {
            // if gridID changed, then we need to re-init the grid
            // and reload the grid metadata
            if (nextProps.gridId !== prevState.gridRequest.gridID) {
                return _extends({}, initialState, {
                    gridRequest: _extends({}, initialState.gridRequest, {
                        gridID: nextProps.gridId,
                        gridSort: nextProps.gridSort ? nextProps.gridSort : []
                    })
                });
            }
            if (nextProps.dataspyId && nextProps.dataspyId !== prevState.gridRequest.dataspyID) {
                return _extends({}, initialState, {
                    gridRequest: _extends({}, initialState.gridRequest, {
                        gridID: nextProps.gridId,
                        dataspyID: nextProps.dataspyId,
                        gridSort: nextProps.gridSort ? nextProps.gridSort : []
                    })
                });
            }

            // No state update necessary
            return null;
        }
    }]);

    return EAMGrid;
}(_react.Component);

EAMGrid.propTypes = {
    gridId: _propTypes2.default.string.isRequired,
    showDataspySelection: _propTypes2.default.bool,
    cache: _propTypes2.default.bool,
    selectColumn: _propTypes2.default.bool,
    autorun: _propTypes2.default.bool,
    editColumn: _propTypes2.default.bool,
    gridRequestAdapter: _propTypes2.default.func,
    extraColumns: _propTypes2.default.array,
    language: _propTypes2.default.string,
    onRowClick: _propTypes2.default.func,
    allowRowSelection: _propTypes2.default.bool,
    rowStyler: _propTypes2.default.func,
    filterVisible: _propTypes2.default.bool
};

EAMGrid.defaultProps = {
    cache: true,
    showDataspySelection: true,
    selectColumn: false,
    editColumn: false,
    autorun: true,
    gridRequestAdapter: function gridRequestAdapter(gridRequest) {
        return gridRequest;
    },
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

exports.default = (0, _index3.withStyles)(styles)(EAMGrid);