'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

var _EAMFormLabel = require('./EAMFormLabel');

var _EAMFormLabel2 = _interopRequireDefault(_EAMFormLabel);

var _index = require('@material-ui/core/styles/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EAMCheckbox = function (_EAMBaseInput) {
    _inherits(EAMCheckbox, _EAMBaseInput);

    function EAMCheckbox() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EAMCheckbox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EAMCheckbox.__proto__ || Object.getPrototypeOf(EAMCheckbox)).call.apply(_ref, [this].concat(args))), _this), _this.onChangeHandler = function (event, checked) {
            var value = checked ? _this.props.trueValue : _this.props.falseValue;
            _this.props.updateProperty(_this.props.valueKey, value);
            //Extra function if needed
            if (_this.props.onChangeValue) {
                _this.props.onChangeValue(value);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EAMCheckbox, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.isHidden()) {
                return _react2.default.createElement('div', null);
            }
            var _props = this.props,
                labelStyle = _props.labelStyle,
                elementInfo = _props.elementInfo,
                label = _props.label;

            return _react2.default.createElement(
                'div',
                { className: this.props.classes.fieldContainer },
                _react2.default.createElement(_EAMFormLabel2.default, { required: this.isRequired(), label: label || elementInfo && elementInfo.text,
                    labelStyle: labelStyle, error: this.state.error }),
                _react2.default.createElement(
                    'div',
                    { style: { width: "100%" } },
                    _react2.default.createElement(_Checkbox2.default, { color: 'primary',
                        checked: this.props.value === this.props.trueValue,
                        value: '' + this.props.value,
                        onChange: function onChange(event, checked) {
                            return _this2.onChangeHandler(event, checked);
                        },
                        disabled: this.state.disabled || elementInfo && elementInfo.readonly
                    })
                )
            );
        }
    }]);

    return EAMCheckbox;
}(_EAMBaseInput3.default);

EAMCheckbox.defaultProps = {
    trueValue: 'true',
    falseValue: 'false'
};

exports.default = (0, _index.withStyles)(_EAMBaseInput2.formStyles)(EAMCheckbox);