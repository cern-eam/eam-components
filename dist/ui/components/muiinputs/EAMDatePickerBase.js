'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dateFns = require('@date-io/date-fns');

var _dateFns2 = _interopRequireDefault(_dateFns);

var _Icon = require('@material-ui/core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _dateFns3 = require('date-fns');

var _parse = require('date-fns/parse');

var _parse2 = _interopRequireDefault(_parse);

var _materialUiPickers = require('material-ui-pickers');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

var _EAMTextField = require('./EAMTextField');

var _EAMTextField2 = _interopRequireDefault(_EAMTextField);

var _locale = require('date-fns/locale');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EAMDatePicker = function (_EAMBaseInput) {
    _inherits(EAMDatePicker, _EAMBaseInput);

    function EAMDatePicker() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EAMDatePicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EAMDatePicker.__proto__ || Object.getPrototypeOf(EAMDatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.init = function (props) {
            _this.setValue(_this.convert(props.value));
        }, _this.readValue = function (value) {
            return value instanceof Date ? value : typeof value === "string" && value.length ? (0, _parse2.default)(value.substring(0, _this.props.dateFormatValue.length), _this.props.dateFormatValue, new Date()) : typeof value === "number" ? new Date(value) : null;
        }, _this.readDate = function (date) {
            return !date ? null : _this.props.timestamp ? date.getTime() : (0, _dateFns3.format)(date, _this.props.dateFormatValue);
        }, _this.convert = function (value) {
            return _this.readDate(_this.readValue(value || ''));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /** Always returns a Date from the value provided */


    /* Reads the Date it receives to the format wanted (TIMESTAMP or FORMATTED STRING) */


    _createClass(EAMDatePicker, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props && this.props.value !== nextProps.value;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var value = this.props.value;

            if (value instanceof Date || typeof value === 'string' && this.props.timestamp || typeof value === 'number' && !this.props.timestamp) {
                this.onChangeHandler(this.props.valueKey, this.convert(value));
            }
        }
    }, {
        key: 'getPickerProps',
        value: function getPickerProps(state, props) {
            var _this2 = this;

            var elementInfo = props.elementInfo,
                dateFormatDisplay = props.dateFormatDisplay,
                value = props.value;
            var helperText = state.helperText,
                error = state.error,
                disabled = state.disabled;

            return {
                InputAdornmentProps: { style: { marginRight: -12 } },
                keyboard: true,
                error: error,
                helperText: helperText,
                disabled: disabled || elementInfo && elementInfo.readonly,
                required: this.isRequired(),
                clearable: true,
                value: this.readValue(value), // Always formats the value. In EDGE and IE, the new Date() has a different behavior than in Chrome and Firefox
                onChange: function onChange(str) {
                    return _this2.onChangeHandler(_this2.convert(str));
                },
                format: dateFormatDisplay,
                label: elementInfo && elementInfo.text,
                leftArrowIcon: _react2.default.createElement(
                    _Icon2.default,
                    null,
                    ' keyboard_arrow_left '
                ),
                rightArrowIcon: _react2.default.createElement(
                    _Icon2.default,
                    null,
                    ' keyboard_arrow_right '
                ),
                TextFieldComponent: _EAMTextField2.default
            };
        }
    }, {
        key: 'renderComponent',
        value: function renderComponent() {
            var showTime = this.props.showTime;


            return _react2.default.createElement(
                _materialUiPickers.MuiPickersUtilsProvider,
                { utils: _dateFns2.default },
                showTime ? _react2.default.createElement(_materialUiPickers.DateTimePicker, _extends({}, this.getPickerProps(this.state, this.props), {
                    ampm: false
                })) : _react2.default.createElement(_materialUiPickers.DatePicker, this.getPickerProps(this.state, this.props))
            );
        }
    }]);

    return EAMDatePicker;
}(_EAMBaseInput3.default);

exports.default = EAMDatePicker;


EAMDatePicker.propTypes = {
    dateFormatDisplay: _propTypes2.default.string.isRequired,
    dateFormatValue: _propTypes2.default.string.isRequired,
    showTime: _propTypes2.default.bool.isRequired
};

EAMDatePicker.defaultProps = {
    showTime: false
};