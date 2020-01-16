"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _Comments = _interopRequireDefault(require("./Comments"));

var _uiActions = require("../../../actions/uiActions");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function mapStateToProps() {
  return {};
}

var CommentsContainer = (0, _reactRedux.connect)(mapStateToProps, {
  showSuccess: _uiActions.showSuccess,
  showError: _uiActions.showError,
  handleError: _uiActions.handleError
}, null)(_Comments["default"]);
CommentsContainer.propTypes = {
  entityCode: _propTypes["default"].string,
  entityKeyCode: _propTypes["default"].string,
  userDesc: _propTypes["default"].string.isRequired,
  onCommentAdded: _propTypes["default"].func,
  onCommentUpdated: _propTypes["default"].func,
  title: _propTypes["default"].string,
  readComments: _propTypes["default"].func,
  updateComment: _propTypes["default"].func,
  createComment: _propTypes["default"].func
};
var _default = CommentsContainer;
exports["default"] = _default;