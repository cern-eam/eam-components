"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _pickers = require("@material-ui/pickers");

var _core = require("@material-ui/core");

var _EAMBaseInput2 = _interopRequireWildcard(require("./EAMBaseInput"));

var _dateFns = _interopRequireDefault(require("@date-io/date-fns"));

var _EAMFormLabel = _interopRequireDefault(require("./EAMFormLabel"));

var _index = require("@material-ui/core/styles/index");

var _dateFns2 = require("date-fns");

var _parse = _interopRequireDefault(require("date-fns/parse"));

var _Constants = _interopRequireDefault(require("../../../enums/Constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
 * DatePicker form field
 */


var EAMDatePicker = /*#__PURE__*/function (_EAMBaseInput) {
  _inherits(EAMDatePicker, _EAMBaseInput);

  function EAMDatePicker() {
    _classCallCheck(this, EAMDatePicker);

    return _possibleConstructorReturn(this, _getPrototypeOf(EAMDatePicker).apply(this, arguments));
  }

  _createClass(EAMDatePicker, [{
    key: "readValue",
    value: function readValue(value) {
      if (value) {
        if (value instanceof Date) return value;
        if (value.length > 11) value = value.substring(0, 11);
        return (0, _parse["default"])(value, _Constants["default"].DATE_FORMAT_VALUE, new Date());
      } else {
        return null;
      }
    }
  }, {
    key: "readDate",
    value: function readDate(date) {
      if (date) {
        return (0, _dateFns2.format)(date, _Constants["default"].DATE_FORMAT_VALUE);
      } else {
        return '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      if (this.isHidden()) {
        return _react["default"].createElement("div", null);
      }

      var _this$props = this.props,
          elementInfo = _this$props.elementInfo,
          classes = _this$props.classes,
          label = _this$props.label,
          labelStyle = _this$props.labelStyle,
          valueKey = _this$props.valueKey,
          updateProperty = _this$props.updateProperty,
          formFields = _this$props.formFields,
          value = _this$props.value,
          validate = _this$props.validate,
          other = _objectWithoutProperties(_this$props, ["elementInfo", "classes", "label", "labelStyle", "valueKey", "updateProperty", "formFields", "value", "validate"]);

      return _react["default"].createElement("div", {
        className: this.props.classes.fieldContainer
      }, _react["default"].createElement(_EAMFormLabel["default"], {
        required: this.isRequired(),
        label: label || elementInfo && elementInfo.text,
        labelStyle: labelStyle,
        error: this.state.error
      }), _react["default"].createElement(_pickers.MuiPickersUtilsProvider, {
        utils: _dateFns["default"]
      }, _react["default"].createElement(_pickers.DatePicker, _extends({
        inputadornmentprops: {
          style: {
            marginRight: -12
          }
        },
        keyboard: "true",
        error: this.state.error,
        helperText: this.state.helperText,
        disabled: this.state.disabled || elementInfo && elementInfo.readonly,
        required: this.isRequired(),
        clearable: true,
        value: this.readValue(this.props.value),
        onChange: function onChange(date) {
          return _this.onChangeHandler(valueKey, _this.readDate(date));
        },
        fullWidth: true,
        format: _Constants["default"].DATE_FORMAT_DISPLAY,
        margin: "normal",
        className: this.props.classes.textFieldInput,
        InputProps: {
          disableUnderline: true
        },
        leftArrowIcon: _react["default"].createElement(_core.Icon, null, " keyboard_arrow_left "),
        rightArrowIcon: _react["default"].createElement(_core.Icon, null, " keyboard_arrow_right ")
      }, other))));
    }
  }]);

  return EAMDatePicker;
}(_EAMBaseInput2["default"]);

var _default = (0, _index.withStyles)(styles)(EAMDatePicker);

exports["default"] = _default;