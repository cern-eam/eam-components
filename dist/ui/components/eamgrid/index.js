function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataGridResultTable from './components/table/EAMGridTable';
import DataGridSelectDataspy from './components/EAMGridSelectDataspy';
import GridWS from "./lib/GridWS";
import { toggleSortField } from './lib/sorting';
import { clearFilters, saveGridRequestInLocalStorage, loadGridRequestFromLocalStorage, setFilter, getFilters } from './lib/filtering';
import ErrorTypes from "./lib/GridErrorTypes";
import axios from "axios/index";
import withStyles from '@mui/styles/withStyles';
import KeyCode from "./enums/KeyCode";
import HttpStatus from "./enums/HttpStatus";
var styles = {
  dataGridMainContainer: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    "-moz-box-sizing": "border-box",
    "-webkit-box-sizing": "border-box"
  }
};
export var initialGridRequest = {
  rowCount: 50,
  cursorPosition: 1,
  gridSort: [],
  gridFilter: [],
  useNative: true,
  includeMetadata: true
};
var EAMGrid = /*#__PURE__*/function (_Component) {
  function EAMGrid() {
    var _this;
    _classCallCheck(this, EAMGrid);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, EAMGrid, [].concat(args));
    /*
    Map containing all filters
    filterMap is updated on every keystroke. Filters are applied when the user actually executes the search.
    */
    _this.state = {
      hasMore: true,
      totalRecords: 0,
      rows: [],
      selectedRows: {},
      isloading: true,
      gridRequest: {},
      exporterBlocked: false,
      filterVisible: _this.props.filterVisible
    };
    _this.filterMap = null;
    _this.fieldsWidthInfo = new Map();
    _this.toggleSortField = toggleSortField.bind(_this);
    _this.setFilter = setFilter.bind(_this);
    _this.getFilters = getFilters.bind(_this);
    _this.clearFilters = clearFilters.bind(_this);
    _this.init = function (props) {
      if (props.gridId || props.screenCode) {
        _this._initGrid(_objectSpread({}, initialGridRequest, {
          rowCount: props.searchOnMount ? initialGridRequest.rowCount : 0,
          gridID: props.gridId,
          dataspyID: props.dataspyId || null,
          gridName: props.screenCode,
          userFunctionName: props.screenCode,
          gridSort: props.gridSort || []
        }, props.initialGridFilters ? {
          gridFilter: props.initialGridFilters
        } : {}));
      }
    };
    /**
     * To be called only when the Grid changes (GRID ID)
     */
    _this._initGrid = function (gridRequest) {
      // clean filter by removing filters without value
      var request = _this.props.gridRequestAdapter(gridRequest);
      if (!_this.filterMap) {
        _this.filterMap = _this.props.initialGridFilters ? _this.props.initialGridFilters.reduce(function (acc, filter) {
          acc[filter.fieldName] = filter;
          return acc;
        }, {}) : {};
      }
      _this.setState({
        isloading: true,
        rows: []
      }, function () {
        return GridWS.getGridData(request).then(function (data) {
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
            gridRequest: _objectSpread({}, gridRequest, {
              gridID: metadata.gridCode,
              dataspyID: metadata.dataSpyId,
              gridName: metadata.gridName,
              userFunctionName: metadata.gridName,
              cursorPosition: metadata.cursorPosition + 1,
              includeMetadata: false
            })
          });
        })["catch"](function (error) {
          _this.setState({
            isloading: false,
            gridRequest: _objectSpread({}, gridRequest)
          });
          if (error.status === HttpStatus.NOT_FOUND) {
            alert("Metadata for this grid does not exist");
          }
        });
      });
    };
    _this.getCellWidth = function (cellTagname) {
      return _this.fieldsWidthInfo.get(cellTagname);
    };
    _this._cleanFilters = function () {
      // clean filter by removing filters without value
      var request = _objectSpread({}, _this.state.gridRequest, {
        gridFilter: Object.values(_this.filterMap)
      });
      request.gridFilter = request.gridFilter.filter(function (f) {
        return f.operator !== 'INDETERMINATE' && (f.fieldValue && f.fieldValue !== "" || f.operator === 'SELECTED' || f.operator === 'NOT_SELECTED' || f.operator === 'IS EMPTY' || f.operator === 'NOT EMPTY');
      });
      return request;
    };
    _this.handleSelectRow = function (row, checked) {
      _this.setState(function (prevState) {
        var selectedRows = _objectSpread({}, prevState.selectedRows);
        if (checked && _this.props.isRowSelectable(row, selectedRows)) {
          selectedRows[row.id] = row;
        } else {
          delete selectedRows[row.id];
        }
        //If the row is selected and there is the function
        if (_this.props.onSelectRow) _this.props.onSelectRow(row, checked, selectedRows);
        return {
          selectedRows: selectedRows
        };
      });
    };
    return _this;
  }
  _inherits(EAMGrid, _Component);
  return _createClass(EAMGrid, [{
    key: "componentDidMount",
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
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.gridId && nextProps.gridId !== this.props.gridId || nextProps.screenCode && nextProps.screenCode !== this.props.screenCode) {
        this.init(nextProps);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.gridId !== prevProps.gridId || this.props.screenCode !== prevProps.screenCode || this.props.dataspyId !== prevProps.dataspyId) {
        this.init(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      !!this.cancelSource && this.cancelSource.cancel && this.cancelSource.cancel();
      this.props.onRef && this.props.onRef(undefined);
    }
  }, {
    key: "handleChangeDataSpy",
    value: function handleChangeDataSpy(event) {
      this._initGrid(_objectSpread({}, this.state.gridRequest, {
        includeMetadata: true,
        cursorPosition: 1,
        dataspyID: event.target.value,
        gridSort: [],
        gridFilter: []
      }));
    }
  }, {
    key: "toggleFilter",
    value: function toggleFilter() {
      this.setState(function (prevState) {
        return {
          filterVisible: !prevState.filterVisible
        };
      });
    }
  }, {
    key: "runSearch",
    value:
    // Execute search
    function runSearch() {
      var _this3 = this;
      // Run search, update state with latest state of filters
      var filters = this.getFilters();
      if (this.props.setSearchFilters) {
        this.props.setSearchFilters(filters);
      }
      this.setState(function (prevState) {
        return {
          hasMore: true,
          rows: [],
          totalRecords: 0,
          gridRequest: _objectSpread({}, prevState.gridRequest, {
            rowCount: initialGridRequest.rowCount,
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
    key: "loadMoreData",
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
      this.cancelSource = axios.CancelToken.source();
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          isloading: true
        });
      }, function () {
        // clean filter by removing filters without value
        var request = _this4.props.gridRequestAdapter(_this4._cleanFilters());
        GridWS.getGridData(request, {
          cancelToken: _this4.cancelSource.token
        }).then(function (data) {
          // nullify info of current transaction
          _this4.cancelSource = null;

          // set state with data and grid fields info
          _this4.setState(function (prevState) {
            return _objectSpread({}, prevState, {
              isloading: false,
              data: data.body.data,
              hasMore: data.body.data.moreRowsPresent === 'TRUE',
              totalRecords: data.body.data.records,
              rows: prevState.rows.concat(data.body.data.row),
              gridRequest: _objectSpread({}, prevState.gridRequest, {
                cursorPosition: data.body.data.cursorPosition + 1
              })
            });
          });
        })["catch"](function (error) {
          if (error.type !== ErrorTypes.REQUEST_CANCELLED) {
            _this4.setState({
              isloading: false
            });
            _this4.props.handleError(error);
          }
        });
      });
    }
  }, {
    key: "exportDataToCSV",
    value: function exportDataToCSV() {
      var _this5 = this;
      this.setState({
        exporterBlocked: true
      });

      // get axios token to allow transaction cancellation
      this.cancelSource = axios.CancelToken.source();

      // clean filter by removing filters without value
      var request = this.props.gridRequestAdapter(this._cleanFilters());
      return GridWS.exportDataToCSV(request, {
        cancelToken: this.cancelSource.token
      }).then(function (data) {
        // nullify info of current transaction
        _this5.cancelSource = null;
        _this5.setState({
          exporterBlocked: false
        });
        return data.body;
      })["catch"](function (error) {
        if (error.type !== ErrorTypes.REQUEST_CANCELLED) {
          _this5.setState({
            exporterBlocked: false
          });
          _this5.props.handleError(error);
        }
      });
    }
  }, {
    key: "_orderGridFieldsBasedOnTheirOrderProperty",
    value: function _orderGridFieldsBasedOnTheirOrderProperty(fields) {
      fields.sort(function (a, b) {
        return +a.order - +b.order;
      });
    }
  }, {
    key: "_isHidden",
    value: function _isHidden(tagName) {
      var hiddenTags = this.props.hiddenTags;
      return hiddenTags && hiddenTags.some(function (f) {
        return f === tagName;
      });
    }
  }, {
    key: "_resetFieldWidthInfo",
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
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (event.key === KeyCode.F7) {
        this.toggleFilter();
      } else if (event.key === KeyCode.F8) {
        this.runSearch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return /*#__PURE__*/React.createElement("div", {
        className: classes.dataGridMainContainer,
        style: {
          height: "calc(100% - ".concat(this.state.filterVisible ? this.props.heightFilterVisible : this.props.heightFilterNotVisible, ")"),
          width: "".concat(this.props.width)
        }
      }, this.props.showDataspySelection && /*#__PURE__*/React.createElement(DataGridSelectDataspy, {
        dataSpy: this.state.gridRequest.dataspyID || '',
        listOfDataSpy: this.state.listOfDataSpy,
        handleChangeDataSpy: this.handleChangeDataSpy.bind(this),
        toggleFilter: this.toggleFilter.bind(this),
        filterVisible: this.state.filterVisible,
        runSearch: this.runSearch.bind(this),
        clearFilters: this.clearFilters.bind(this)
      }), /*#__PURE__*/React.createElement(DataGridResultTable, {
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
      }));
    }
  }]);
}(Component);
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
  gridRequestAdapter: function gridRequestAdapter(gridRequest) {
    return gridRequest;
  },
  heightFilterVisible: '128px',
  heightFilterNotVisible: '97px',
  width: '100%',
  extraColumns: [],
  language: 'EN',
  allowRowSelection: false,
  headerStyle: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  },
  filterVisible: true,
  searchOnMount: true
};
export default withStyles(styles)(EAMGrid);