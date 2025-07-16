var _excluded = ["elementInfo", "classes", "label", "labelStyle", "valueKey", "updateProperty", "formFields", "value", "validate"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
  function EAMDatePicker() {
    _classCallCheck(this, EAMDatePicker);
    return _callSuper(this, EAMDatePicker, arguments);
  }
  _inherits(EAMDatePicker, _EAMBaseInput);
  return _createClass(EAMDatePicker, [{
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
}(EAMBaseInput);
export default withStyles(styles)(EAMDatePicker);