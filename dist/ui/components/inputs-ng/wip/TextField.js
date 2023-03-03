function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    startAdornment: props.InputProps.startAdornment // NOTE: this is not in the non-wip version
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