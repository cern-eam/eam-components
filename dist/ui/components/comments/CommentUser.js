"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CommentUser = function CommentUser(props) {
  return _react["default"].createElement("div", {
    className: "commentUserContainer"
  }, props.icon, _react["default"].createElement("label", null, " ", props.userDate), " by", _react["default"].createElement("label", null, " ", props.userDesc));
};

var _default = CommentUser;
exports["default"] = _default;