"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DataGridContext = require("../../DataGridContext");

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableSortLabel = _interopRequireDefault(require("@material-ui/core/TableSortLabel"));

var _Constants = require("../../Constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createSortHandler = function createSortHandler(_ref) {
  var columnID = _ref.columnID,
      sortState = _ref.sortState;
  return function (event) {
    var isAsc = sortState.columnID === columnID && sortState.direction === _Constants.DATA_GRID_SORT_DIRECTIONS.ASC;
    sortState.setColumnID(columnID);
    sortState.setDirection(isAsc ? _Constants.DATA_GRID_SORT_DIRECTIONS.DESC : _Constants.DATA_GRID_SORT_DIRECTIONS.ASC);
  };
};

var defaultCellRender = function defaultCellRender(_ref2) {
  var columnMetadata = _ref2.columnMetadata,
      getHeader = _ref2.getHeader,
      key = _ref2.key,
      sortState = _ref2.sortState,
      CellComponent = _ref2.CellComponent;
  return /*#__PURE__*/_react["default"].createElement(CellComponent, {
    sortDirection: sortState.columnID === columnMetadata.id ? sortState.direction : false,
    key: key
  }, sortState.isSortEnabled && sortState.isSortEnabled(columnMetadata) ? /*#__PURE__*/_react["default"].createElement(_TableSortLabel["default"], {
    active: sortState.columnID === columnMetadata.id,
    direction: sortState.columnID === columnMetadata.id ? sortState.direction : _Constants.DATA_GRID_SORT_DIRECTIONS.ASC,
    onClick: createSortHandler({
      columnID: columnMetadata.id,
      sortState: sortState
    })
  }, getHeader()) : getHeader());
};

var MUITableHeader = function MUITableHeader(props) {
  var _props$CellComponent = props.CellComponent,
      CellComponent = _props$CellComponent === void 0 ? _TableCell["default"] : _props$CellComponent,
      _props$customCellRend = props.customCellRender,
      customCellRender = _props$customCellRend === void 0 ? defaultCellRender : _props$customCellRend;

  var _React$useContext = _react["default"].useContext(_DataGridContext.DataGridContext),
      columnsMetadata = _React$useContext.columnsMetadata,
      sortState = _React$useContext.sortState;

  return /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, columnsMetadata.map(function (columnMetadata) {
    return customCellRender({
      columnMetadata: columnMetadata,
      sortState: sortState,
      key: columnMetadata.id,
      getHeader: function getHeader() {
        return columnMetadata.header;
      },
      CellComponent: CellComponent
    });
  })));
};

var _default = MUITableHeader;
exports["default"] = _default;