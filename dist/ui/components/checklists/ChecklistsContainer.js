'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _Checklists = require('./Checklists');

var _Checklists2 = _interopRequireDefault(_Checklists);

var _uiActions = require('../../../actions/uiActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        applicationData: state.application.applicationData
    };
};

var ChecklistsContainer = (0, _reactRedux.connect)(mapStateToProps, {
    showSuccess: _uiActions.showSuccess,
    handleError: _uiActions.handleError
}, null, { withRef: true })(_Checklists2.default);

exports.default = ChecklistsContainer;