"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _EDMSWidget = _interopRequireDefault(require("./EDMSWidget"));

var _uiActions = require("../../../actions/uiActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function mapStateToProps(state) {
  return {};
}

var EDMSWidgetContainer = (0, _reactRedux.connect)(mapStateToProps, {
  showSuccess: _uiActions.showSuccess,
  showError: _uiActions.showError,
  handleError: _uiActions.handleError
})(_EDMSWidget["default"]);
var _default = EDMSWidgetContainer; // upgrade npm dependencies
// deployment to the cloud

exports["default"] = _default;