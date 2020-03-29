"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _DataGridContext = require("../..//DataGridContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultCellRenderer = function defaultCellRenderer(_ref) {
  var columnMetadata = _ref.columnMetadata,
      getDisplayValue = _ref.getDisplayValue,
      CellComponent = _ref.CellComponent;
  return _react["default"].createElement(CellComponent, {
    align: "left",
    key: columnMetadata.id
  }, getDisplayValue());
};

var MUITableBody = function MUITableBody(props) {
  var _props$CellComponent = props.CellComponent,
      CellComponent = _props$CellComponent === void 0 ? _TableCell["default"] : _props$CellComponent,
      _props$cellRenderer = props.cellRenderer,
      cellRenderer = _props$cellRenderer === void 0 ? defaultCellRenderer : _props$cellRenderer;

  var _React$useContext = _react["default"].useContext(_DataGridContext.DataGridContext),
      rows = _React$useContext.rows,
      columnsMetadata = _React$useContext.columnsMetadata,
      _getDisplayValue = _React$useContext.getDisplayValue;

  return _react["default"].createElement(_TableBody["default"], null, rows && rows.map(function (row, rowIndex) {
    return _react["default"].createElement(_TableRow["default"], {
      key: rowIndex
    }, columnsMetadata && columnsMetadata.map(function (columnMetadata) {
      return columnMetadata && columnMetadata.id && _react["default"].createElement(_react["default"].Fragment, {
        key: columnMetadata.id + rowIndex
      }, cellRenderer({
        row: row,
        columnMetadata: columnMetadata,
        type: columnMetadata.type || {},
        getDisplayValue: function getDisplayValue() {
          return _getDisplayValue({
            row: row,
            columnMetadata: columnMetadata
          });
        },
        CellComponent: CellComponent
      }));
    }));
  }));
};

var _default = MUITableBody;
exports["default"] = _default;