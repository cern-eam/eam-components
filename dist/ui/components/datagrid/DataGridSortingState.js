"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DataGridContext = require("./DataGridContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GridSorting = function GridSorting(props) {
  var columnID = props.columnID,
      direction = props.direction;

  var _React$useContext = _react["default"].useContext(_DataGridContext.DataGridContext),
      sortState = _React$useContext.sortState;

  _react["default"].useEffect(function () {
    columnID && sortState.setColumnID(columnID);
    direction && sortState.setDirection(direction);
  }, [columnID, direction]);

  return null;
};

var _default = GridSorting;
exports["default"] = _default;