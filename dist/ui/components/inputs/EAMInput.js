function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["elementInfo", "classes", "label", "labelStyle", "disabled", "valueKey", "updateProperty", "formFields", "validate", "rightAddon", "startAdornment", "endAdornment"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React from 'react';
import TextField from '@mui/material/TextField';
import EAMBaseInput, { formStyles } from './EAMBaseInput';
import withStyles from '@mui/styles/withStyles';
import EAMFormLabel from "./EAMFormLabel";
import InputAdornment from '@mui/material/InputAdornment';
var EAMInput = /*#__PURE__*/function (_EAMBaseInput) {
  function EAMInput() {
    _classCallCheck(this, EAMInput);
    return _callSuper(this, EAMInput, arguments);
  }
  _inherits(EAMInput, _EAMBaseInput);
  return _createClass(EAMInput, [{
    key: "render",
    value: function render() {
      var _this = this;
      // valueKey, updateProperty, rightAddon and formFields are destructured to not be included in the 'other' object
      // if we don't do this they will be passed to the html input and browser will complain about unknown attributes
      var _this$props = this.props,
        elementInfo = _this$props.elementInfo,
        classes = _this$props.classes,
        label = _this$props.label,
        labelStyle = _this$props.labelStyle,
        disabled = _this$props.disabled,
        valueKey = _this$props.valueKey,
        updateProperty = _this$props.updateProperty,
        formFields = _this$props.formFields,
        validate = _this$props.validate,
        rightAddon = _this$props.rightAddon,
        startAdornment = _this$props.startAdornment,
        endAdornment = _this$props.endAdornment,
        other = _objectWithoutProperties(_this$props, _excluded);
      //Input props
      var inputProps = _objectSpread({
        style: {
          width: '100%'
        }
      }, this.props.inputProps);
      //Type
      var inputType = this.props.type || 'string';
      if (this.isHidden()) {
        return /*#__PURE__*/React.createElement("div", null);
      }
      //Numeric
      if (elementInfo && (elementInfo.fieldType === 'number' || elementInfo.fieldType === 'currency')) {
        inputType = 'number';
      }
      //Classes
      var textClasses = '';
      if (this.props.rightAddon) {
        textClasses += classes.rightAddon + ' ';
      }
      if (this.state.error) {
        textClasses += classes.fieldInvalidInput;
      }

      // Right Addon. May come from elementInfo, and we can override with rightAddon property
      var rightAddonToDisplay;
      if (rightAddon) {
        rightAddonToDisplay = rightAddon;
      } else if (elementInfo) {
        rightAddonToDisplay = elementInfo.udfUom;
      }
      return /*#__PURE__*/React.createElement("div", {
        className: this.props.classes.fieldContainer
      }, /*#__PURE__*/React.createElement(EAMFormLabel, {
        required: this.isRequired(),
        label: label || elementInfo && elementInfo.text,
        labelStyle: labelStyle,
        error: this.state.error
      }), /*#__PURE__*/React.createElement(TextField, _extends({
        className: textClasses,
        disabled: this.state.disabled || disabled || elementInfo && elementInfo.readonly,
        error: this.state.error,
        helperText: this.state.helperText,
        required: this.isRequired(),
        onChange: function onChange(event) {
          return _this.onChangeHandler(_this.props.valueKey, event.target.value);
        },
        fullWidth: true,
        margin: "none"
      }, other, {
        value: this.props.value !== undefined ? this.props.value : '',
        classes: {
          root: classes.formControlRoot
        },
        inputProps: inputProps,
        InputProps: _objectSpread({
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput
          }
        }, startAdornment ? {
          startAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
            position: "start"
          }, startAdornment)
        } : {}, {}, endAdornment ? {
          endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
            position: "end"
          }, endAdornment)
        } : {}),
        InputLabelProps: {
          shrink: true,
          className: classes.textFieldFormLabel
        },
        type: inputType
      })), rightAddonToDisplay && /*#__PURE__*/React.createElement("span", {
        className: classes.addon
      }, rightAddonToDisplay));
    }
  }]);
}(EAMBaseInput);
export default withStyles(formStyles)(EAMInput);