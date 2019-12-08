'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initialGridRequest = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    dataGridMainContainer: {
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        "-moz-box-sizing": "border-box",
        "-webkit-box-sizing": "border-box"
    }
};

var initialGridRequest = exports.initialGridRequest = {
    rowCount: 50,
    cursorPosition: 1,
    gridSort: [],
    gridFilter: [],
    useNative: true,
    includeMetadata: true
};

var EAMGrid = function (_Component) {
    _inherits(EAMGrid, _Component);

    function EAMGrid() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EAMGrid);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EAMGrid.__proto__ || Object.getPrototypeOf(EAMGrid)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            hasMore: true,
            totalRecords: 0,
            rows: [],
            selectedRows: {},
            isloading: true,
            gridRequest: {},
            exporterBlocked: false,
            filterVisible: _this.props.filterVisible
        }, _this.filterMap = {}, _this.fieldsWidthInfo = new Map(), _this.toggleSortField = _sorting.toggleSortField.bind(_this), _this.setFilter = _filtering.setFilter.bind(_this), _this.getFilters = _filtering.getFilters.bind(_this), _this.clearFilters = _filtering.clearFilters.bind(_this), _this.init = function (props) {
            if (props.gridId || props.screenCode) {
                _this._initGrid(_extends({}, initialGridRequest, {
                    gridID: props.gridId,
                    dataspyID: props.dataspyId || null,
                    gridName: props.screenCode,
                    userFunctionName: props.screenCode,
                    gridSort: props.gridSort || []
                }));
            }
        }, _this._initGrid = function (gridRequest) {
            _this.setState({
                isloading: true,
                rows: []
            }, function () {
                return _GridWS2.default.getGridData(gridRequest).then(function (data) {
                    var metadata = data.body.data;

                    if (gridRequest.includeMetadata) {
                        _this._resetFieldWidthInfo(metadata.gridField);

                        // sort field based on their order
                        _this._orderGridFieldsBasedOnTheirOrderProperty(metadata.gridField);
                    }

                    // set metadata info in state
                    _this.setState({
                        fields: metadata.gridField,
                        listOfDataSpy: metadata.gridDataspy,
                        hasMore: metadata.moreRowsPresent === 'TRUE',
                        totalRecords: metadata.records,
                        rows: metadata.row,
                        isloading: false,
                        gridRequest: _extends({}, gridRequest, {
                            gridID: metadata.gridCode,
                            dataspyID: metadata.dataSpyId,
                            gridName: metadata.gridName,
                            userFunctionName: metadata.gridName,
                            cursorPosition: 1,
                            includeMetadata: false
                        })
                    });
                }).catch(function (error) {
                    _this.setState({
                        isloading: false,
                        gridRequest: _extends({}, gridRequest)
                    });
                    if (error.status === _HttpStatus2.default.NOT_FOUND) {
                        alert("Metadata for this grid does not exist");
                    }
                });
            });
        }, _this.getCellWidth = function (cellTagname) {
            return _this.fieldsWidthInfo.get(cellTagname);
        }, _this.handleSelectRow = function (row, checked) {
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
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /*
    Map containing all filters
    filterMap is updated on every keystroke. Filters are applied when the user actually executes the search.
    */


    _createClass(EAMGrid, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.props.onRef) {
                this.props.onRef(this);
            }
            document.body.onkeydown = function (e) {
                return _this2.handleKeyDown(e);
            };
            this.init(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.gridId && nextProps.gridId !== this.props.gridId || nextProps.screenCode && nextProps.screenCode !== this.props.screenCode) {
                this.init(nextProps);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.gridId !== prevProps.gridId || this.props.screenCode !== prevProps.screenCode || this.props.dataspyId !== prevProps.dataspyId) {
                this.init(this.props);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            !!this.cancelSource && this.cancelSource.cancel && this.cancelSource.cancel();
            this.props.onRef && this.props.onRef(undefined);
        }

        /**
         * To be called only when the Grid changes (GRID ID)
         */

    }, {
        key: 'handleChangeDataSpy',
        value: function handleChangeDataSpy(event) {
            this._initGrid(_extends({}, this.state.gridRequest, {
                includeMetadata: true,
                cursorPosition: 1,
                dataspyID: event.target.value,
                gridSort: [],
                gridFilter: []
            }));
        }
    }, {
        key: 'toggleFilter',
        value: function toggleFilter() {
            this.setState(function (prevState) {
                return {
                    filterVisible: !prevState.filterVisible
                };
            });
        }
    }, {
        key: 'runSearch',


        // Execute search
        value: function runSearch() {
            var _this3 = this;

            // Run search, update state with latest state of filters
            var filters = this.getFilters();

            this.setState(function (prevState) {
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
                _this3.loadMoreData();
            });
        }
    }, {
        key: 'loadMoreData',
        value: function loadMoreData() {
            var _this4 = this;

            // cancel current transaction if any
            if (!!this.cancelSource) {
                this.cancelSource.cancel();
            }

            // return if no results have to be returned
            if (!this.state.hasMore) {
                return;
            }

            // get axios token to allow transaction cancellation
            this.cancelSource = _index2.default.CancelToken.source();

            this.setState(function (prevState) {
                return _extends({}, prevState, {
                    isloading: true
                });
            }, function () {

                _GridWS2.default.getGridData(_this4.state.gridRequest, {
                    cancelToken: _this4.cancelSource.token
                }).then(function (data) {
                    // nullify info of current transaction
                    _this4.cancelSource = null;

                    // set state with data and grid fields info
                    _this4.setState(function (prevState) {
                        return _extends({}, prevState, {
                            isloading: false,
                            data: data.body.data,
                            hasMore: data.body.data.moreRowsPresent === 'TRUE',
                            totalRecords: data.body.data.records,
                            rows: prevState.rows.concat(data.body.data.row),
                            gridRequest: _extends({}, prevState.gridRequest, {
                                cursorPosition: data.body.data.cursorPosition + 1
                            })
                        });
                    });
                }).catch(function (error) {
                    if (error.type !== _GridErrorTypes2.default.REQUEST_CANCELLED) {
                        _this4.setState({
                            isloading: false
                        });

                        _this4.props.handleError(error);
                    }
                });
            });
        }
    }, {
        key: 'exportDataToCSV',
        value: function exportDataToCSV() {
            var _this5 = this;

            this.setState({ exporterBlocked: true });

            // get axios token to allow transaction cancellation
            this.cancelSource = _index2.default.CancelToken.source();

            return _GridWS2.default.exportDataToCSV(request, {
                cancelToken: this.cancelSource.token
            }).then(function (data) {
                // nullify info of current transaction
                _this5.cancelSource = null;

                _this5.setState({ exporterBlocked: false });

                return data.body;
            }).catch(function (error) {
                if (error.type !== _GridErrorTypes2.default.REQUEST_CANCELLED) {
                    _this5.setState({
                        exporterBlocked: false
                    });
                    _this5.props.handleError(error);
                }
            });
        }
    }, {
        key: '_orderGridFieldsBasedOnTheirOrderProperty',
        value: function _orderGridFieldsBasedOnTheirOrderProperty(fields) {
            fields.sort(function (a, b) {
                return +a.order - +b.order;
            });
        }
    }, {
        key: '_isHidden',
        value: function _isHidden(tagName) {
            var hiddenTags = this.props.hiddenTags;

            return hiddenTags && hiddenTags.some(function (f) {
                return f === tagName;
            });
        }
    }, {
        key: '_resetFieldWidthInfo',
        value: function _resetFieldWidthInfo(fields) {
            var _this6 = this;

            this.fieldsWidthInfo = new Map();
            fields.map(function (field) {
                return _this6.fieldsWidthInfo.set(field.name, {
                    width: field.width,
                    dataType: field.dataType
                });
            });
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            if (event.key === _KeyCode2.default.F7) {
                this.toggleFilter();
            } else if (event.key === _KeyCode2.default.F8) {
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
                    dataSpy: this.state.gridRequest.dataspyID || '',
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
                    setFilter: this.setFilter,
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
    heightFilterVisible: '175px',
    heightFilterNotVisible: '145px',
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

exports.default = (0, _index3.withStyles)(styles)(EAMGrid);