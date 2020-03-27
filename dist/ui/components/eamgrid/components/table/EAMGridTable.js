"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _EAMGridHeader = _interopRequireDefault(require("./EAMGridHeader"));

var _EAMGridBody = _interopRequireDefault(require("./EAMGridBody"));

var _EAMGridLoadingSpinner = _interopRequireDefault(require("../EAMGridLoadingSpinner"));

var _EAMGridFooter = _interopRequireDefault(require("./EAMGridFooter"));

var _index = require("@material-ui/core/styles/index");

var _EAMGridActions = _interopRequireDefault(require("./EAMGridActions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  searchresults: {
    height: '100%',
    backgroundColor: 'white',
    overflowY: 'auto',
    border: '1px solid lightGray'
  },
  tableHeaderWrapper: {
    overflowX: 'hidden',
    borderLeft: '1px solid #d3d3d3',
    borderRight: '1px solid #d3d3d3',
    backgroundColor: '#fafafa'
  },
  headerStyle: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }
};

var DataGridResultTable =
/*#__PURE__*/
function (_Component) {
  _inherits(DataGridResultTable, _Component);

  function DataGridResultTable() {
    _classCallCheck(this, DataGridResultTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(DataGridResultTable).apply(this, arguments));
  }

  _createClass(DataGridResultTable, [{
    key: "_handleScroll",
    value: function _handleScroll(event) {
      if (event.target.id === 'searchresults') {
        this.tableHeader.scrollLeft = event.target.scrollLeft; // add scroll bar in header if the results have a scroll bar
        // in order to keep the irght margin to right

        if (event.target.clientHeight < event.target.scrollHeight) {
          this.tableHeader.style.overflowY = 'scroll';
        } else {
          this.tableHeader.style.overflowY = 'visible';
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var classes = this.props.classes;
      return _react["default"].createElement("div", {
        style: {
          flexGrow: 1,
          minHeight: 0
        }
      }, _react["default"].createElement(_EAMGridActions["default"], {
        selectButtons: this.props.allowRowSelection,
        onUnselectAll: function onUnselectAll() {
          _this.tableBody.unselectAll();
        },
        onSelectAll: function onSelectAll() {
          _this.tableBody.selectAll();
        }
      }), this.props.fields && _react["default"].createElement("div", {
        id: "tableHeaderWrapper",
        className: classes.tableHeaderWrapper,
        ref: function ref(tableHeader) {
          _this.tableHeader = tableHeader;
        }
      }, _react["default"].createElement(_EAMGridHeader["default"], {
        fields: this.props.fields,
        toggleSortField: this.props.toggleSortField,
        filterVisible: this.props.filterVisible,
        filters: this.props.filters,
        sortFields: this.props.sortFields,
        setFilter: this.props.setFilter,
        runSearch: this.props.runSearch,
        isHiddenField: this.props.isHiddenField,
        selectColumn: this.props.allowRowSelection,
        editColumn: this.props.onEditRow !== undefined,
        extraColumns: this.props.extraColumns,
        headerStyle: classes.headerStyle
      })), _react["default"].createElement("div", {
        id: "searchresults",
        className: classes.searchresults,
        style: {
          'display': 'flex',
          'flexDirection': 'column'
        },
        ref: function ref(searchresults) {
          _this.searchresults = searchresults;
        },
        onScroll: this._handleScroll.bind(this)
      }, this.props.rows.length > 0 ? _react["default"].createElement(_EAMGridBody["default"], {
        fields: this.props.fields,
        rows: this.props.rows,
        refCallback: function refCallback(tableBody) {
          _this.tableBody = tableBody;
        },
        getCellWidth: this.props.getCellWidth,
        loadMoreData: this.props.loadMoreData.bind(this),
        hasMore: this.props.hasMore,
        parentScroll: this.searchresults,
        isloading: this.props.isloading,
        cellRenderer: this.props.cellRenderer,
        isHiddenField: this.props.isHiddenField,
        onSelectRow: this.props.onSelectRow,
        onEditRow: this.props.onEditRow,
        isRowSelectable: this.props.isRowSelectable,
        extraColumns: this.props.extraColumns,
        onRowClick: this.props.onRowClick,
        allowRowSelection: this.props.allowRowSelection,
        handleSelectRow: this.props.handleSelectRow,
        selectedRows: this.props.selectedRows,
        rowStyler: this.props.rowStyler
      }) : this.props.hasMore ? _react["default"].createElement(_EAMGridLoadingSpinner["default"], {
        isloading: this.props.isloading
      }) : _react["default"].createElement("div", {
        style: {
          width: "100%",
          padding: "20px",
          fontWeight: "bold",
          textAlign: "center"
        }
      }, "No result found")), this.props.fields && _react["default"].createElement(_EAMGridFooter["default"], {
        rows: this.props.rows,
        totalRecords: this.props.totalRecords,
        exportData: this.props.exportData,
        exporterBlocked: this.props.exporterBlocked
      }));
    }
  }]);

  return DataGridResultTable;
}(_react.Component);

var _default = (0, _index.withStyles)(styles)(DataGridResultTable);

exports["default"] = _default;