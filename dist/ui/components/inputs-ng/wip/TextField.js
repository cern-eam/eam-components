function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import EAMBarcodeScanner from '../components/EAMBarcodeScanner';
import EAMLink from '../components/EAMLink';
import TextFieldInput from './TextFieldInput';
import TextFieldTextAdornment from '../components/TextFieldTextAdornment';
import TextFieldDescription from '../components/TextFieldDescription';
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
    type = props.type;
  var onInputUpperCaseHandler = function onInputUpperCaseHandler(event) {
    var input = event.target;
    var start = input.selectionStart;
    var end = input.selectionEnd;
    input.value = input.value.toLocaleUpperCase();
    input.setSelectionRange(start, end);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({}, divRootContainerStyle, {}, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: divInputContainerStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: divInputStyle,
    ref: props.InputProps?.ref
  }, /*#__PURE__*/React.createElement(TextFieldInput, {
    type: type === 'password' ? 'password' : 'text',
    ref: inputRef
    // NOTE: on the non-wip version we would simply need to spread inputProps,
    // but now that we are using an InputBase we have to pass the 'inputProps'
    // prop explicitly. Otherwise, we get the error: "MUI: Unable to find the input element..."
    ,
    inputProps: _objectSpread({}, inputProps),
    readOnly: props.selectOnlyMode,
    disabled: disabled,
    maxLength: maxLength
    //TODO this is not the best solution as we are overriding onInput handler that could be potentially passed from inputProps
    ,
    onInput: uppercase ? onInputUpperCaseHandler : undefined
    // Needed for example for the multi Autocomplete since
    // it relies on startAdornment to render the tags
    ,
    startAdornment: props.InputProps?.startAdornment // NOTE: this is not in the non-wip version
  }), !hideDescription && /*#__PURE__*/React.createElement(TextFieldDescription, {
    description: desc,
    value: value
  }), endTextAdornment && /*#__PURE__*/React.createElement(TextFieldTextAdornment, null, endTextAdornment)), endAdornment, barcodeScanner && !disabled && /*#__PURE__*/React.createElement(EAMBarcodeScanner, {
    onChange: onChange
  }), link && /*#__PURE__*/React.createElement(EAMLink, {
    link: link,
    value: value
  })), errorText && /*#__PURE__*/React.createElement("div", {
    style: divErrorStyle
  }, errorText));
};
export default TextField;