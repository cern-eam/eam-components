"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dateFns = _interopRequireDefault(require("@date-io/date-fns"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _dateFns2 = require("date-fns");

var _parse = _interopRequireDefault(require("date-fns/parse"));

var _pickers = require("@material-ui/pickers");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _EAMBaseInput2 = _interopRequireDefault(require("./EAMBaseInput"));

var _EAMTextField = _interopRequireDefault(require("./EAMTextField"));

var _locale = require("date-fns/locale");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EAMDatePicker = /*#__PURE__*/function (_EAMBaseInput) {
  _inherits(EAMDatePicker, _EAMBaseInput);

  function EAMDatePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EAMDatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EAMDatePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.init = function (props) {
      _this.setValue(_this.convert(props.value));
    };

    _this.readValue = function (value) {
      return value instanceof Date ? value : typeof value === "string" && value.length ? (0, _parse["default"])(value.substring(0, _this.props.dateFormatValue.length), _this.props.dateFormatValue, new Date()) : typeof value === "number" ? new Date(value) : null;
    };

    _this.readDate = function (date) {
      return !date ? null : _this.props.timestamp ? date.getTime() : (0, _dateFns2.format)(date, _this.props.dateFormatValue);
    };

    _this.convert = function (value) {
      return _this.readDate(_this.readValue(value || ''));
    };

    return _this;
  }

  _createClass(EAMDatePicker, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props && this.props.value !== nextProps.value;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var value = this.props.value;

      if (value instanceof Date || typeof value === 'string' && this.props.timestamp || typeof value === 'number' && !this.props.timestamp) {
        this.onChangeHandler(this.props.valueKey, this.convert(value));
      }
    }
  }, {
    key: "getPickerProps",
    value: function getPickerProps(state, props) {
      var _this2 = this;

      var elementInfo = props.elementInfo,
          dateFormatDisplay = props.dateFormatDisplay,
          value = props.value;
      var helperText = state.helperText,
          error = state.error,
          disabled = state.disabled;
      return {
        inputadornmentprops: {
          style: {
            marginRight: -12
          }
        },
        error: error,
        helperText: helperText,
        disabled: disabled || elementInfo && elementInfo.readonly,
        required: this.isRequired(),
        clearable: true,
        value: this.readValue(value),
        // Always formats the value. In EDGE and IE, the new Date() has a different behavior than in Chrome and Firefox
        onChange: function onChange(str) {
          return _this2.onChangeHandler(_this2.convert(str));
        },
        format: dateFormatDisplay,
        label: elementInfo && elementInfo.text,
        leftArrowIcon: _react["default"].createElement(_Icon["default"], null, " keyboard_arrow_left "),
        rightArrowIcon: _react["default"].createElement(_Icon["default"], null, " keyboard_arrow_right "),
        TextFieldComponent: _EAMTextField["default"],
        KeyboardButtonProps: {
          style: {
            paddingRight: 2
          }
        }
      };
    }
  }, {
    key: "renderComponent",
    value: function renderComponent() {
      var showTime = this.props.showTime;
      return _react["default"].createElement(_pickers.MuiPickersUtilsProvider, {
        utils: _dateFns["default"]
      }, showTime ? _react["default"].createElement(_pickers.KeyboardDateTimePicker, _extends({}, this.getPickerProps(this.state, this.props), {
        ampm: false
      })) : _react["default"].createElement(_pickers.KeyboardDatePicker, this.getPickerProps(this.state, this.props)));
    }
  }]);

  return EAMDatePicker;
}(_EAMBaseInput2["default"]);

exports["default"] = EAMDatePicker;
EAMDatePicker.propTypes = {
  dateFormatDisplay: _propTypes["default"].string.isRequired,
  dateFormatValue: _propTypes["default"].string.isRequired,
  showTime: _propTypes["default"].bool.isRequired
};
EAMDatePicker.defaultProps = {
  showTime: false
};