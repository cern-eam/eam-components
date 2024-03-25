function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["elementInfo", "classes", "label", "labelStyle", "disabled", "valueKey", "updateProperty", "formFields", "validate", "rightAddon", "startAdornment", "endAdornment"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
import React from 'react';
import TextField from '@mui/material/TextField';
import EAMBaseInput, { formStyles } from './EAMBaseInput';
import withStyles from '@mui/styles/withStyles';
import EAMFormLabel from "./EAMFormLabel";
import InputAdornment from '@mui/material/InputAdornment';
var EAMInput = /*#__PURE__*/function (_EAMBaseInput) {
  _inherits(EAMInput, _EAMBaseInput);
  function EAMInput() {
    _classCallCheck(this, EAMInput);
    return _callSuper(this, EAMInput, arguments);
  }
  _createClass(EAMInput, [{
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
  return EAMInput;
}(EAMBaseInput);
export default withStyles(formStyles)(EAMInput);