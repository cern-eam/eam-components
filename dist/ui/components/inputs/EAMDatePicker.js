'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUiPickers = require('material-ui-pickers');

var _core = require('@material-ui/core');

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

var _dateFns = require('@date-io/date-fns');

var _dateFns2 = _interopRequireDefault(_dateFns);

var _EAMFormLabel = require('./EAMFormLabel');

var _EAMFormLabel2 = _interopRequireDefault(_EAMFormLabel);

var _index = require('@material-ui/core/styles/index');

var _dateFns3 = require('date-fns');

var _parse = require('date-fns/parse');

var _parse2 = _interopRequireDefault(_parse);

var _Constants = require('../../../enums/Constants');

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    var defaultStyles = (0, _EAMBaseInput2.formStyles)(theme);
    return _extends({}, defaultStyles, {
        textFieldInput: _extends({}, defaultStyles.textFieldInput, { padding: '0px 9px' })
    });
};

/**
 * DatePicker form field
 */

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
                return (0, _parse2.default)(value, _Constants2.default.DATE_FORMAT_VALUE, new Date());
            } else {
                return null;
            }
        }
    }, {
        key: 'readDate',
        value: function readDate(date) {
            if (date) {
                return (0, _dateFns3.format)(date, _Constants2.default.DATE_FORMAT_VALUE);
            } else {
                return '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.isHidden()) {
                return _react2.default.createElement('div', null);
            }

            var _props = this.props,
                elementInfo = _props.elementInfo,
                classes = _props.classes,
                label = _props.label,
                labelStyle = _props.labelStyle,
                valueKey = _props.valueKey,
                updateProperty = _props.updateProperty,
                formFields = _props.formFields,
                value = _props.value,
                validate = _props.validate,
                other = _objectWithoutProperties(_props, ['elementInfo', 'classes', 'label', 'labelStyle', 'valueKey', 'updateProperty', 'formFields', 'value', 'validate']);

            return _react2.default.createElement(
                'div',
                { className: this.props.classes.fieldContainer },
                _react2.default.createElement(_EAMFormLabel2.default, { required: this.isRequired(),
                    label: label || elementInfo && elementInfo.text,
                    labelStyle: labelStyle, error: this.state.error }),
                _react2.default.createElement(
                    _materialUiPickers.MuiPickersUtilsProvider,
                    { utils: _dateFns2.default },
                    _react2.default.createElement(_materialUiPickers.DatePicker, _extends({
                        InputAdornmentProps: { style: { marginRight: -12 } },
                        keyboard: true,
                        error: this.state.error,
                        helperText: this.state.helperText,
                        disabled: this.state.disabled || elementInfo && elementInfo.readonly,
                        required: this.isRequired(),
                        clearable: true,
                        value: this.readValue(this.props.value),
                        onChange: function onChange(date) {
                            return _this2.onChangeHandler(valueKey, _this2.readDate(date));
                        },
                        fullWidth: true,
                        format: _Constants2.default.DATE_FORMAT_DISPLAY,
                        margin: 'normal',
                        className: this.props.classes.textFieldInput,
                        InputProps: {
                            disableUnderline: true
                        },
                        leftArrowIcon: _react2.default.createElement(
                            _core.Icon,
                            null,
                            ' keyboard_arrow_left '
                        ),
                        rightArrowIcon: _react2.default.createElement(
                            _core.Icon,
                            null,
                            ' keyboard_arrow_right '
                        )
                    }, other))
                )
            );
        }
    }]);

    return EAMDatePicker;
}(_EAMBaseInput3.default);

exports.default = (0, _index.withStyles)(styles)(EAMDatePicker);