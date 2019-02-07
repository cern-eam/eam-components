'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _EDMSWidget = require('./EDMSWidget');

var _EDMSWidget2 = _interopRequireDefault(_EDMSWidget);

var _uiActions = require('../../../actions/uiActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
    return {};
}

var EDMSWidgetContainer = (0, _reactRedux.connect)(mapStateToProps, {
    showSuccess: _uiActions.showSuccess,
    showError: _uiActions.showError,
    handleError: _uiActions.handleError
}, null, { withRef: true })(_EDMSWidget2.default);

exports.default = EDMSWidgetContainer;