"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StatusBox = function StatusBox(_ref) {
  var color = _ref.color;
  var style = {
    "float": 'left',
    width: '100%',
    maxWidth: 15,
    height: 15,
    marginRight: 5,
    borderRadius: 5,
    backgroundColor: color
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: style
  });
};

var _default = StatusBox;
exports["default"] = _default;