function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { isRequired, isHidden } from '../tools/input-tools';
var divLabelStyle = {
  flex: "1 1 140px",
  fontSize: 14,
  margin: "5px 10px 5px 0px",
  //color: "rgb(0, 101, 152)",
  color: "#1a237e" //fontWeight: "bold"

};
var requiredStyle = {
  color: "red",
  fontWeight: "bold"
};

var EAMBaseInput = function EAMBaseInput(props) {
  var elementInfo = props.elementInfo,
      disabled = props.disabled; // Hide 

  if (isHidden(elementInfo)) {
    return React.Fragment;
  }

  var rootStyle = {
    width: "100%",
    margin: "5px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
  }; // Disable

  if (disabled || elementInfo && elementInfo.readonly) {
    rootStyle.opacity = "0.8";
    rootStyle.pointerEvents = "none";
  }

  console.log("render", elementInfo?.text);
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({}, rootStyle, {}, props.rootStyle)
  }, elementInfo?.text && /*#__PURE__*/React.createElement("div", {
    style: divLabelStyle
  }, /*#__PURE__*/React.createElement("span", null, elementInfo.text), isRequired(elementInfo) && /*#__PURE__*/React.createElement("span", {
    style: requiredStyle
  }, "*")), props.children);
};

export default EAMBaseInput;