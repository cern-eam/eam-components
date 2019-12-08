"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _EDMSUtils = _interopRequireDefault(require("./EDMSUtils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DescriptionStrip = function DescriptionStrip(file) {
  return _react["default"].createElement("div", {
    className: "filmStripContainer"
  }, _react["default"].createElement("h4", {
    className: "edmsContentHeader"
  }, "EDMS: ", _react["default"].createElement("a", {
    href: file.docUrl,
    target: "_blank",
    className: "edmsLink"
  }, file.edmsId), "\xA0\xA0\xA0\xA0 File: ", _react["default"].createElement("a", {
    href: file.fullPath,
    target: "_blank",
    className: "edmsLink"
  }, file.fileName)), _react["default"].createElement("p", {
    className: "edmsTitle"
  }, "Title: ", _react["default"].createElement("a", {
    href: file.docUrl,
    target: "_blank",
    className: "edmsLink"
  }, file.description)));
};

var _default = DescriptionStrip;
exports["default"] = _default;