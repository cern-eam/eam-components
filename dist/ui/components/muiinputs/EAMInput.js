'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EAMInput = function (_EAMBaseInput) {
    _inherits(EAMInput, _EAMBaseInput);

    function EAMInput() {
        _classCallCheck(this, EAMInput);

        return _possibleConstructorReturn(this, (EAMInput.__proto__ || Object.getPrototypeOf(EAMInput)).apply(this, arguments));
    }

    _createClass(EAMInput, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.isHidden()) {
                return _react2.default.createElement('div', null);
            }

            return _react2.default.createElement(_TextField2.default, {
                disabled: this.state.disabled || this.props.elementInfo.readonly,
                error: this.state.error,
                helperText: this.state.helperText,
                required: this.isRequired(),
                label: this.props.elementInfo.text,
                value: this.props.value || '',
                onChange: function onChange(event) {
                    return _this2.onChangeHandler(event.target.value);
                },
                fullWidth: true,
                margin: 'normal' });
        }
    }]);

    return EAMInput;
}(_EAMBaseInput3.default);

exports.default = EAMInput;