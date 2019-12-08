'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _Comments = require('./Comments');

var _Comments2 = _interopRequireDefault(_Comments);

var _uiActions = require('../../../actions/uiActions');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps() {
    return {};
}

var CommentsContainer = (0, _reactRedux.connect)(mapStateToProps, {
    showSuccess: _uiActions.showSuccess,
    showError: _uiActions.showError,
    handleError: _uiActions.handleError
}, null)(_Comments2.default);

CommentsContainer.propTypes = {
    entityCode: _propTypes2.default.string,
    entityKeyCode: _propTypes2.default.string,
    userDesc: _propTypes2.default.string.isRequired,
    onCommentAdded: _propTypes2.default.func,
    onCommentUpdated: _propTypes2.default.func,
    title: _propTypes2.default.string,
    readComments: _propTypes2.default.func,
    updateComment: _propTypes2.default.func,
    createComment: _propTypes2.default.func
};

exports.default = CommentsContainer;