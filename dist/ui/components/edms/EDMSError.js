'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _error = require('./img/error.png');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EDMSError = function EDMSError(props) {
    return _react2.default.createElement(
        'div',
        { style: {
                backgroundImage: 'url(\'' + _error2.default + '\')',
                backgroundPosition: '50% 40%',
                cursor: 'pointer'
            }, className: 'galleriaDisplayedFile' },
        _react2.default.createElement(
            'div',
            { className: 'filmStripContainer', style: {
                    display: 'flex',
                    justifyContent: 'space-around',
                    position: "relative"
                } },
            _react2.default.createElement(
                'h4',
                { className: 'edmsContentHeader', style: { position: 'initial' } },
                props.errorMessage
            )
        )
    );
};

exports.default = EDMSError;