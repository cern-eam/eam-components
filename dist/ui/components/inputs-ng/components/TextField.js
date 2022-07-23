function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import AutocompleteDescription from './AutocompleteDescription';
import EAMBarcodeScanner from './EAMBarcodeScanner';
import EAMLink from './EAMLink';
import './TextField.css';
var inputStyle = {
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  padding: "7px 8px",
  fontSize: "15px",
  lineHeight: 1.5,
  color: "#495057",
  backgroundClip: "padding-box",
  border: "1px solid #ced4da",
  borderRadius: "4px",
  transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
  backgroundColor: "#fdfdfd" //backgroundColor: "#fefefe"

};
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
  flex: "999 1 auto",
  display: "flex",
  flexDirection: "column",
  minWidth: "320px"
};
var divErrorStyle = {
  margin: 3,
  color: "red",
  fontSize: 12
};

var TextField = function TextField(props) {
  var desc = props.desc,
      value = props.value,
      valueKey = props.valueKey,
      barcodeScanner = props.barcodeScanner,
      link = props.link,
      updateProperty = props.updateProperty,
      inputProps = props.inputProps,
      inputRef = props.inputRef,
      endTextAdornment = props.endTextAdornment,
      endAdornment = props.endAdornment,
      hideDescription = props.hideDescription,
      disabled = props.disabled,
      errorText = props.errorText,
      style = props.style;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({}, divRootContainerStyle, {}, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: divInputContainerStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: divInputStyle,
    ref: props.InputProps?.ref
  }, /*#__PURE__*/React.createElement("input", _extends({
    style: inputStyle,
    type: "text",
    ref: inputRef
  }, inputProps)), !hideDescription && /*#__PURE__*/React.createElement(AutocompleteDescription, {
    description: desc,
    value: value
  }), endTextAdornment && /*#__PURE__*/React.createElement("div", {
    className: "divTextAdornmentStyle"
  }, endTextAdornment)), endAdornment, barcodeScanner && !disabled && /*#__PURE__*/React.createElement(EAMBarcodeScanner, {
    updateProperty: updateProperty,
    valueKey: valueKey
  }), link && /*#__PURE__*/React.createElement(EAMLink, {
    link: link,
    value: value
  })), errorText && /*#__PURE__*/React.createElement("div", {
    style: divErrorStyle
  }, errorText));
};

export default TextField;