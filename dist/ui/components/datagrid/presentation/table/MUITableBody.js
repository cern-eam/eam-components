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

var defaultCellRender = function defaultCellRender(_ref) {
  var key = _ref.key,
      getValue = _ref.getValue,
      CustomTableCell = _ref.CustomTableCell;
  return _react["default"].createElement(CustomTableCell, {
    align: "left",
    key: key
  }, getValue());
};

var MUITableBody = function MUITableBody(props) {
  var _props$CustomTableCel = props.CustomTableCell,
      CustomTableCell = _props$CustomTableCel === void 0 ? _TableCell["default"] : _props$CustomTableCel,
      _props$customCellRend = props.customCellRender,
      customCellRender = _props$customCellRend === void 0 ? defaultCellRender : _props$customCellRend;

  var _React$useContext = _react["default"].useContext(_DataGridContext.DataGridContext),
      rows = _React$useContext.rows,
      columns = _React$useContext.columns,
      primaryColumn = _React$useContext.primaryColumn,
      _getValue = _React$useContext.getValue;

  return _react["default"].createElement(_TableBody["default"], null, rows && rows.map(function (row, rowIndex) {
    return _react["default"].createElement(_TableRow["default"], {
      key: primaryColumn ? _getValue({
        row: row,
        column: columns[primaryColumn]
      }) : rowIndex
    }, columns && columns.map(function (column) {
      return column && column.id && customCellRender({
        row: row,
        column: column,
        key: column.id,
        type: column.type || {},
        getValue: function getValue() {
          return _getValue({
            row: row,
            column: column
          });
        },
        CustomTableCell: CustomTableCell
      });
    }));
  }));
};

var _default = MUITableBody;
exports["default"] = _default;