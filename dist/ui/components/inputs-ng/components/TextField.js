function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import EAMBarcodeScanner from './EAMBarcodeScanner';
import EAMLink from './EAMLink';
import TextFieldInput from './TextFieldInput';
import TextAreaInput from './TextAreaInput';
import TextFieldTextAdornment from './TextFieldTextAdornment';
import TextFieldDescription from './TextFieldDescription';
var divInputStyle = {
  flex: "1 1 auto",
  position: "relative"
};
var divInputContainerStyle = {
  flex: "1 1 auto",
  display: "flex",
  alignItems: "center"
};
var divRootContainerStyle = {
  flex: "1 1 auto",
  display: "flex",
  flexDirection: "column"
};
var divErrorStyle = {
  margin: 3,
  color: "red",
  fontSize: 12
};
var fieldInvalid = {
  border: '1px solid #f03369',
  borderRadius: '5px'
};
var TextField = function TextField(props) {
  var desc = props.desc,
    value = props.value,
    barcodeScanner = props.barcodeScanner,
    link = props.link,
    onChange = props.onChange,
    inputProps = props.inputProps,
    inputRef = props.inputRef,
    endTextAdornment = props.endTextAdornment,
    endAdornment = props.endAdornment,
    hideDescription = props.hideDescription,
    disabled = props.disabled,
    maxLength = props.maxLength,
    uppercase = props.uppercase,
    errorText = props.errorText,
    style = props.style,
    type = props.type,
    rightAlign = props.rightAlign,
    _props$valid = props.valid,
    valid = _props$valid === void 0 ? true : _props$valid,
    _props$textarea = props.textarea,
    textarea = _props$textarea === void 0 ? false : _props$textarea;
  var onInputUpperCaseHandler = function onInputUpperCaseHandler(event) {
    var input = event.target;
    var start = input.selectionStart;
    var end = input.selectionEnd;
    input.value = input.value.toLocaleUpperCase();
    input.setSelectionRange(start, end);
  };
  var InputComponent = textarea ? TextAreaInput : TextFieldInput;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({}, divRootContainerStyle, {}, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: divInputContainerStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({}, divInputStyle, {}, errorText || !valid ? fieldInvalid : {}),
    ref: props.InputProps?.ref
  }, /*#__PURE__*/React.createElement(InputComponent, _extends({
    type: type === 'password' ? 'password' : 'text',
    ref: inputRef
  }, inputProps, {
    readOnly: props.selectOnlyMode,
    disabled: disabled,
    maxLength: maxLength
    //TODO this is not the best solution as we are overriding onInput handler that could be potentially passed from inputProps
    ,
    onInput: uppercase ? onInputUpperCaseHandler : undefined
  })), !hideDescription && /*#__PURE__*/React.createElement(TextFieldDescription, {
    description: desc,
    value: value
  }), endTextAdornment && /*#__PURE__*/React.createElement(TextFieldTextAdornment, null, endTextAdornment)), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(event) {
      return event.stopPropagation();
    } /* If we don't stop the propagation the input focuses on clicking in this area */,
    style: {
      display: "flex"
    }
  }, endAdornment, barcodeScanner && !disabled && /*#__PURE__*/React.createElement(EAMBarcodeScanner, {
    rightAlign: rightAlign,
    onChange: onChange
  }), link && /*#__PURE__*/React.createElement(EAMLink, {
    link: link,
    value: value
  }))), errorText && /*#__PURE__*/React.createElement("div", {
    style: divErrorStyle
  }, errorText));
};
export default TextField;