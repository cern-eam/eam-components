"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _pickers = require("@material-ui/pickers");

var _core = require("@material-ui/core");

var _EAMBaseInput2 = _interopRequireWildcard(require("./EAMBaseInput"));

var _dateFns = require("date-fns");

var _dateFns2 = _interopRequireDefault(require("@date-io/date-fns"));

var _parse = _interopRequireDefault(require("date-fns/parse"));

var _EAMFormLabel = _interopRequireDefault(require("./EAMFormLabel"));

var _index = require("@material-ui/core/styles/index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var defaultStyles = (0, _EAMBaseInput2.formStyles)(theme);
  return _objectSpread({}, defaultStyles, {
    textFieldInput: _objectSpread({}, defaultStyles.textFieldInput, {
      padding: '0px 9px'
    })
  });
};
/**
 * DateTimePicker form field
 */


var EAMDateTimePicker =
/*#__PURE__*/
function (_EAMBaseInput) {
  _inherits(EAMDateTimePicker, _EAMBaseInput);

  function EAMDateTimePicker() {
    _classCallCheck(this, EAMDateTimePicker);

    return _possibleConstructorReturn(this, _getPrototypeOf(EAMDateTimePicker).apply(this, arguments));
  }

  _createClass(EAMDateTimePicker, [{
    key: "readValue",
    value: function readValue(value) {
      if (value) {
        if (value instanceof Date) {
          return value;
        }

        return (0, _parse["default"])(value, Constants.DATETIME_FORMAT_VALUE, new Date());
      } else {
        return null;
      }
    }
  }, {
    key: "readDate",
    value: function readDate(date) {
      if (date) {
        return (0, _dateFns.format)(date, Constants.DATETIME_FORMAT_VALUE);
      } else {
        return '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var text = this.props.elementInfo.text;

      if (this.isHidden()) {
        return _react["default"].createElement("div", null);
      }

      var _this$props = this.props,
          labelStyle = _this$props.labelStyle,
          elementInfo = _this$props.elementInfo,
          label = _this$props.label,
          validate = _this$props.validate;
      return _react["default"].createElement("div", {
        className: this.props.classes.fieldContainer
      }, _react["default"].createElement(_EAMFormLabel["default"], {
        required: this.isRequired(),
        label: label || elementInfo && elementInfo.text,
        labelStyle: labelStyle,
        error: this.state.error
      }), _react["default"].createElement(_pickers.MuiPickersUtilsProvider, {
        utils: _dateFns2["default"]
      }, _react["default"].createElement(_pickers.DateTimePicker, {
        inputadornmentprops: {
          style: {
            marginRight: -12
          }
        },
        keyboard: "true",
        error: this.state.error,
        helperText: this.state.helperText,
        disabled: this.state.disabled || this.props.elementInfo.readonly,
        required: this.isRequired(),
        clearable: true,
        value: this.readValue(this.props.value),
        onChange: function onChange(date) {
          return _this.onChangeHandler(_this.props.valueKey, _this.readDate(date));
        },
        fullWidth: true,
        className: this.props.classes.textFieldInput,
        InputProps: {
          disableUnderline: true
        },
        format: Constants.DATETIME_FORMAT_DISPLAY,
        margin: "normal",
        leftArrowIcon: _react["default"].createElement(_core.Icon, null, " keyboard_arrow_left "),
        rightArrowIcon: _react["default"].createElement(_core.Icon, null, " keyboard_arrow_right ")
      })));
    }
  }]);

  return EAMDateTimePicker;
}(_EAMBaseInput2["default"]);

var _default = (0, _index.withStyles)(styles)(EAMDateTimePicker);

exports["default"] = _default;