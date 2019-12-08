'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusBox = function StatusBox(_ref) {
    var color = _ref.color;


    var style = {
        float: 'left',
        width: '100%',
        maxWidth: 15,
        height: 15,
        marginRight: 5,
        borderRadius: 5,
        backgroundColor: color
    };

    return _react2.default.createElement('div', { style: style });
};

exports.default = StatusBox;