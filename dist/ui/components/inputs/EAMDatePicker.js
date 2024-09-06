var _excluded = ["elementInfo", "classes", "label", "labelStyle", "valueKey", "updateProperty", "formFields", "value", "validate"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Icon } from '@mui/material';
import EAMBaseInput, { formStyles } from './EAMBaseInput';
import DateFnsUtils from '@date-io/date-fns';
import EAMFormLabel from "./EAMFormLabel";
import withStyles from '@mui/styles/withStyles';
import { format } from "date-fns";
import parse from "date-fns/parse";
import Constants from '../../../enums/Constants';
var styles = function styles(theme) {
  var defaultStyles = formStyles(theme);
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
  var _super = _createSuper(EAMDatePicker);
  function EAMDatePicker() {
    _classCallCheck(this, EAMDatePicker);
    return _super.apply(this, arguments);
  }
  _createClass(EAMDatePicker, [{
    key: "readValue",
    value: function readValue(value) {
      if (value) {
        if (value instanceof Date) return value;
        if (value.length > 11) value = value.substring(0, 11);
        return parse(value, Constants.DATE_FORMAT_VALUE, new Date());
      } else {
        return null;
      }
    }
  }, {
    key: "readDate",
    value: function readDate(date) {
      if (date) {
        return format(date, Constants.DATE_FORMAT_VALUE);
      } else {
        return '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      if (this.isHidden()) {
        return /*#__PURE__*/React.createElement("div", null);
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
        other = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/React.createElement("div", {
        className: this.props.classes.fieldContainer
      }, /*#__PURE__*/React.createElement(EAMFormLabel, {
        required: this.isRequired(),
        label: label || elementInfo && elementInfo.text,
        labelStyle: labelStyle,
        error: this.state.error
      }), /*#__PURE__*/React.createElement(MuiPickersUtilsProvider, {
        utils: DateFnsUtils
      }, /*#__PURE__*/React.createElement(DatePicker, _extends({
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
        format: Constants.DATE_FORMAT_DISPLAY,
        margin: "normal",
        className: this.props.classes.textFieldInput,
        InputProps: {
          disableUnderline: true
        },
        leftArrowIcon: /*#__PURE__*/React.createElement(Icon, null, " keyboard_arrow_left "),
        rightArrowIcon: /*#__PURE__*/React.createElement(Icon, null, " keyboard_arrow_right ")
      }, other))));
    }
  }]);
  return EAMDatePicker;
}(EAMBaseInput);
export default withStyles(styles)(EAMDatePicker);