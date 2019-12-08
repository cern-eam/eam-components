'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Label displayed at the left of a form field
 */
var EAMFormLabel = function (_Component) {
    _inherits(EAMFormLabel, _Component);

    function EAMFormLabel() {
        _classCallCheck(this, EAMFormLabel);

        return _possibleConstructorReturn(this, (EAMFormLabel.__proto__ || Object.getPrototypeOf(EAMFormLabel)).apply(this, arguments));
    }

    _createClass(EAMFormLabel, [{
        key: 'render',
        value: function render() {
            if (!this.props.label) return null;
            //Check error
            var labelStyle = _extends({}, EAMFormLabel.defaultProps.labelStyle, this.props.labelStyle);
            if (this.props.error) {
                labelStyle = _extends({}, labelStyle, { color: '#f03369' });
            }
            //Render
            return _react2.default.createElement(
                'div',
                { className: this.props.required ? 'fieldRequired' : '',
                    style: labelStyle },
                this.props.label
            );
        }
    }]);

    return EAMFormLabel;
}(_react.Component);

exports.default = EAMFormLabel;


EAMFormLabel.propTypes = {
    labelStyle: _propTypes2.default.object
};

EAMFormLabel.defaultProps = {
    labelStyle: {
        width: 130,
        minWidth: 130,
        marginRight: 10,
        textAlign: 'left',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#006598',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center'
    }
};