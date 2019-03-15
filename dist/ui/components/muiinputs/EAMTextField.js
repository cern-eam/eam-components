'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULTS = {
    fullWidth: true,
    margin: 'dense'
};

var DEFAULT_NESTED_OBJECTS = {
    FormHelperTextProps: {},
    InputLabelProps: {
        shrink: true,
        style: {
            fontSize: '1.125rem',
            color: '#145886'
        }
    },
    InputProps: {},
    inputProps: {},
    SelectProps: {}
};

var generateCustomProps = function generateCustomProps(props) {
    return _extends({}, DEFAULTS, props, generateCustomNestedObjectProps(props));
};

var generateCustomNestedObjectProps = function generateCustomNestedObjectProps(props) {
    return Object.keys(DEFAULT_NESTED_OBJECTS).reduce(function (customObjectProps, defaultObjectKey) {
        customObjectProps[defaultObjectKey] = _extends({}, DEFAULT_NESTED_OBJECTS[defaultObjectKey], props[defaultObjectKey]);
        return customObjectProps;
    }, {});
};

var EAMTextField = function (_Component) {
    _inherits(EAMTextField, _Component);

    function EAMTextField() {
        _classCallCheck(this, EAMTextField);

        return _possibleConstructorReturn(this, (EAMTextField.__proto__ || Object.getPrototypeOf(EAMTextField)).apply(this, arguments));
    }

    _createClass(EAMTextField, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_TextField2.default, generateCustomProps(this.props));
        }
    }]);

    return EAMTextField;
}(_react.Component);

exports.default = EAMTextField;