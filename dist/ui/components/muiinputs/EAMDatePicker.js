'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUiPickers = require('material-ui-pickers');

var _Icon = require('@material-ui/core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

var _dateFns = require('@date-io/date-fns');

var _dateFns2 = _interopRequireDefault(_dateFns);

var _dateFns3 = require('date-fns');

var _parse = require('date-fns/parse');

var _parse2 = _interopRequireDefault(_parse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EAMDatePicker = function (_EAMBaseInput) {
    _inherits(EAMDatePicker, _EAMBaseInput);

    function EAMDatePicker() {
        _classCallCheck(this, EAMDatePicker);

        return _possibleConstructorReturn(this, (EAMDatePicker.__proto__ || Object.getPrototypeOf(EAMDatePicker)).apply(this, arguments));
    }

    _createClass(EAMDatePicker, [{
        key: 'readValue',
        value: function readValue(value) {
            if (value) {
                if (value instanceof Date) return value;
                if (value.length > 11) value = value.substring(0, 11);
                return (0, _parse2.default)(value, "dd-MMM-yyyy", new Date());
            } else {
                return null;
            }
        }
    }, {
        key: 'readDate',
        value: function readDate(date) {
            if (date) {
                return (0, _dateFns3.format)(date, 'dd-MMM-yyyy');
            } else {
                return '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var text = this.props.elementInfo.text;


            if (this.isHidden()) {
                return _react2.default.createElement('div', null);
            }

            return _react2.default.createElement(
                _materialUiPickers.MuiPickersUtilsProvider,
                { utils: _dateFns2.default },
                _react2.default.createElement(_materialUiPickers.DatePicker, {
                    InputAdornmentProps: { style: { marginRight: -12 } },
                    keyboard: true,
                    error: this.state.error,
                    helperText: this.state.helperText,
                    disabled: this.state.disabled || this.props.elementInfo.readonly,
                    required: this.isRequired(),
                    clearable: true,
                    value: this.readValue(this.props.value),
                    onChange: function onChange(date) {
                        return _this2.onChangeHandler(_this2.readDate(date));
                    },
                    fullWidth: true,
                    format: 'dd-MMM-yyyy',
                    margin: 'normal',
                    label: text,
                    leftArrowIcon: _react2.default.createElement(
                        _Icon2.default,
                        null,
                        ' keyboard_arrow_left '
                    ),
                    rightArrowIcon: _react2.default.createElement(
                        _Icon2.default,
                        null,
                        ' keyboard_arrow_right '
                    )
                })
            );
        }
    }]);

    return EAMDatePicker;
}(_EAMBaseInput3.default);

exports.default = EAMDatePicker;