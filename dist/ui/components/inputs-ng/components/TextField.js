function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import EAMBarcodeScanner from './EAMBarcodeScanner';
import EAMLink from './EAMLink';
import TextFieldInput from './TextFieldInput';
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
    style: _objectSpread({}, divInputStyle, {}, errorText ? fieldInvalid : {}),
    ref: props.InputProps?.ref
  }, /*#__PURE__*/React.createElement(TextFieldInput, _extends({
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
    onChange: onChange
  }), link && /*#__PURE__*/React.createElement(EAMLink, {
    link: link,
    value: value
  }))), errorText && /*#__PURE__*/React.createElement("div", {
    style: divErrorStyle
  }, errorText));
};
export default TextField;