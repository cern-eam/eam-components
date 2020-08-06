"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialGridRequest = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _EAMGridTable = _interopRequireDefault(require("./components/table/EAMGridTable"));

var _EAMGridSelectDataspy = _interopRequireDefault(require("./components/EAMGridSelectDataspy"));

var _GridWS = _interopRequireDefault(require("./lib/GridWS"));

var _sorting = require("./lib/sorting");

var _filtering = require("./lib/filtering");

var _GridErrorTypes = _interopRequireDefault(require("./lib/GridErrorTypes"));

var _index = _interopRequireDefault(require("axios/index"));

var _index2 = require("@material-ui/core/styles/index");

var _KeyCode = _interopRequireDefault(require("./enums/KeyCode"));

var _HttpStatus = _interopRequireDefault(require("./enums/HttpStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var styles = {
  dataGridMainContainer: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    "-moz-box-sizing": "border-box",
    "-webkit-box-sizing": "border-box"
  }
};
var initialGridRequest = {
  rowCount: 50,
  cursorPosition: 1,
  gridSort: [],
  gridFilter: [],
  useNative: true,
  includeMetadata: true
};
exports.initialGridRequest = initialGridRequest;

var EAMGrid = /*#__PURE__*/function (_Component) {
  _inherits(EAMGrid, _Component);

  var _super = _createSuper(EAMGrid);

  function EAMGrid() {
    var _this;

    _classCallCheck(this, EAMGrid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
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
    _this.filterMap = {};
    _this.fieldsWidthInfo = new Map();
    _this.toggleSortField = _sorting.toggleSortField.bind(_assertThisInitialized(_this));
    _this.setFilter = _filtering.setFilter.bind(_assertThisInitialized(_this));
    _this.getFilters = _filtering.getFilters.bind(_assertThisInitialized(_this));
    _this.clearFilters = _filtering.clearFilters.bind(_assertThisInitialized(_this));

    _this.init = function (props) {
      if (props.gridId || props.screenCode) {
        _this._initGrid(_objectSpread({}, initialGridRequest, {
          gridID: props.gridId,
          dataspyID: props.dataspyId || null,
          gridName: props.screenCode,
          userFunctionName: props.screenCode,
          gridSort: props.gridSort || []
        }));
      }
    };

    _this._initGrid = function (gridRequest) {
      // clean filter by removing filters without value
      var request = _this.props.gridRequestAdapter(gridRequest);

      _this.setState({
        isloading: true,
        rows: []
      }, function () {
        return _GridWS["default"].getGridData(request).then(function (data) {
          var metadata = data.body.data;

          if (gridRequest.includeMetadata) {
            _this._resetFieldWidthInfo(metadata.gridField); // sort field based on their order


            _this._orderGridFieldsBasedOnTheirOrderProperty(metadata.gridField);
          } // set metadata info in state


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

          if (error.status === _HttpStatus["default"].NOT_FOUND) {
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
        return f.operator !== 'INDETERMINATE' && (f.fieldValue && f.fieldValue !== "" || f.operator === 'SELECTED' || f.operator === 'NOT_SELECTED' || f.operator === 'IS_EMPTY' || f.operator === 'NOT_EMPTY');
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
        } //If the row is selected and there is the function


        if (_this.props.onSelectRow) _this.props.onSelectRow(row, checked, selectedRows);
        return {
          selectedRows: selectedRows
        };
      });
    };

    return _this;
  }

  _createClass(EAMGrid, [{
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
          gridRequest: _objectSpread({}, prevState.gridRequest, {
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
      } // return if no results have to be returned


      if (!this.state.hasMore) {
        return;
      } // get axios token to allow transaction cancellation


      this.cancelSource = _index["default"].CancelToken.source();
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          isloading: true
        });
      }, function () {
        // clean filter by removing filters without value
        var request = _this4.props.gridRequestAdapter(_this4._cleanFilters());

        _GridWS["default"].getGridData(request, {
          cancelToken: _this4.cancelSource.token
        }).then(function (data) {
          // nullify info of current transaction
          _this4.cancelSource = null; // set state with data and grid fields info

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
          if (error.type !== _GridErrorTypes["default"].REQUEST_CANCELLED) {
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
      }); // get axios token to allow transaction cancellation

      this.cancelSource = _index["default"].CancelToken.source(); // clean filter by removing filters without value

      var request = this.props.gridRequestAdapter(this._cleanFilters());
      return _GridWS["default"].exportDataToCSV(request, {
        cancelToken: this.cancelSource.token
      }).then(function (data) {
        // nullify info of current transaction
        _this5.cancelSource = null;

        _this5.setState({
          exporterBlocked: false
        });

        return data.body;
      })["catch"](function (error) {
        if (error.type !== _GridErrorTypes["default"].REQUEST_CANCELLED) {
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
      if (event.key === _KeyCode["default"].F7) {
        this.toggleFilter();
      } else if (event.key === _KeyCode["default"].F8) {
        this.runSearch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.dataGridMainContainer,
        style: {
          height: "calc(100% - ".concat(this.state.filterVisible ? this.props.heightFilterVisible : this.props.heightFilterNotVisible, ")"),
          width: "".concat(this.props.width)
        }
      }, this.props.showDataspySelection && /*#__PURE__*/_react["default"].createElement(_EAMGridSelectDataspy["default"], {
        dataSpy: this.state.gridRequest.dataspyID || '',
        listOfDataSpy: this.state.listOfDataSpy,
        handleChangeDataSpy: this.handleChangeDataSpy.bind(this),
        toggleFilter: this.toggleFilter.bind(this),
        filterVisible: this.state.filterVisible,
        runSearch: this.runSearch.bind(this),
        clearFilters: this.clearFilters.bind(this)
      }), /*#__PURE__*/_react["default"].createElement(_EAMGridTable["default"], {
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

  return EAMGrid;
}(_react.Component);

EAMGrid.propTypes = {
  gridId: _propTypes["default"].string.isRequired,
  showDataspySelection: _propTypes["default"].bool,
  cache: _propTypes["default"].bool,
  selectColumn: _propTypes["default"].bool,
  autorun: _propTypes["default"].bool,
  editColumn: _propTypes["default"].bool,
  gridRequestAdapter: _propTypes["default"].func,
  extraColumns: _propTypes["default"].array,
  language: _propTypes["default"].string,
  onRowClick: _propTypes["default"].func,
  allowRowSelection: _propTypes["default"].bool,
  rowStyler: _propTypes["default"].func,
  filterVisible: _propTypes["default"].bool
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
  filterVisible: false
};

var _default = (0, _index2.withStyles)(styles)(EAMGrid);

exports["default"] = _default;