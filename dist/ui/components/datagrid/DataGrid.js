"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DataGridContext = require("./DataGridContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DataGrid = function DataGrid(props) {
  return /*#__PURE__*/_react["default"].createElement(_DataGridContext.DataGridProvider, props, props.children);
};

var _default = DataGrid;
exports["default"] = _default;