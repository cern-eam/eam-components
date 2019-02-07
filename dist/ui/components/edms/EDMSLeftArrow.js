'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('@material-ui/icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EDMSLeftArrow = function EDMSLeftArrow(props) {
    return _react2.default.createElement(
        'div',
        { onClick: props.onClick },
        _react2.default.createElement(_icons.KeyboardArrowLeft, { style: {
                height: "30px",
                width: "30px",
                color: "black",
                cursor: "pointer"
            } })
    );
};

exports.default = EDMSLeftArrow;