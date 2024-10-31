function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
  margin: "5px 1px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center"
});
var LabelDiv = styled('div')({
  flex: "1 1 140px",
  fontSize: 15,
  margin: "5px 10px 2px 0px",
  color: "#1a237e"
  //fontWeight: "bold"
});
var EAMBaseInput = function EAMBaseInput(props) {
  var hidden = props.hidden,
    required = props.required,
    label = props.label;

  // Hide 
  if (hidden) {
    return React.Fragment;
  }
  return /*#__PURE__*/React.createElement(RootDiv, {
    style: props.rootStyle
  }, label && /*#__PURE__*/React.createElement(LabelDiv, {
    style: props.labelStyle
  }, /*#__PURE__*/React.createElement("span", null, label), required && /*#__PURE__*/React.createElement("span", {
    style: requiredStyle
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({}, componentStyle, {}, props.componentStyle)
  }, props.children));
};
export default EAMBaseInput;