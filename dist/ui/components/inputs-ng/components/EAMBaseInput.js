function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { styled } from '@mui/material/styles';
var requiredStyle = {
  color: "red",
  fontWeight: "bold"
};
var componentStyle = {
  flex: "999 1 320px",
  display: "flex"
};
var RootDiv = styled('div')({
  width: "100%",
  margin: "5px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center"
});
var LabelDiv = styled('div')({
  flex: "1 1 140px",
  fontSize: 14,
  margin: "5px 10px 2px 0px",
  color: "#1a237e" //fontWeight: "bold"

});

var EAMBaseInput = function EAMBaseInput(props) {
  var hidden = props.hidden,
      required = props.required,
      label = props.label; // Hide 

  if (hidden) {
    return React.Fragment;
  }

  return /*#__PURE__*/React.createElement(RootDiv, {
    style: props.rootStyle
  }, label && /*#__PURE__*/React.createElement(LabelDiv, null, /*#__PURE__*/React.createElement("span", null, label), required && /*#__PURE__*/React.createElement("span", {
    style: requiredStyle
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({}, componentStyle, {}, props.componentStyle)
  }, props.children));
};

export default EAMBaseInput;