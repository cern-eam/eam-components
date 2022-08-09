function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import AutocompleteDescription from './AutocompleteDescription';
import EAMBarcodeScanner from './EAMBarcodeScanner';
import EAMLink from './EAMLink';
import './TextField.css';
import { styled } from '@mui/material/styles';
var StyledInput = styled('input')(function (_ref) {
  var theme = _ref.theme;
  return {
    '&': {
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
      backgroundColor: "#fdfdfd"
    },
    '&:focus': {
      outline: "2px solid ".concat(theme.palette.primary.main),
      backgroundColor: "#fff" //boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"

    }
  };
});
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
      style = props.style,
      type = props.type;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({}, divRootContainerStyle, {}, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: divInputContainerStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: divInputStyle,
    ref: props.InputProps?.ref
  }, /*#__PURE__*/React.createElement(StyledInput, _extends({
    type: type ?? 'text',
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