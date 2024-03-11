function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from "react";
var textAreaStyle = {
  flex: "1 1 auto",
  padding: "7px 8px",
  fontSize: "15px",
  lineHeight: 1.5,
  color: "#495057",
  backgroundClip: "padding-box",
  border: "1px solid #ced4da",
  borderRadius: "4px",
  backgroundColor: "#fdfdfd",
  fontFamily: 'Roboto, sans-serif'
};
var outerStyle = {
  margin: 5,
  marginLeft: 17,
  display: "flex",
  flex: "1 1 auto"
};
var ChecklistFieldAlphaNumeric = function ChecklistFieldAlphaNumeric(props) {
  var value = props.value,
    handleChange = props.handleChange,
    maxLength = props.maxLength,
    disabled = props.disabled;
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    typedValue = _useState2[0],
    setTypedValue = _useState2[1];
  var _useState3 = useState(value),
    _useState4 = _slicedToArray(_useState3, 2),
    lastOnBlurValue = _useState4[0],
    setLastOnBlurValue = _useState4[1];
  return /*#__PURE__*/React.createElement("div", {
    style: outerStyle
  }, /*#__PURE__*/React.createElement("textarea", {
    style: _objectSpread({}, textAreaStyle),
    disabled: disabled,
    onChange: function onChange(e) {
      return setTypedValue(e.target.value);
    },
    value: typedValue,
    maxLength: maxLength,
    onBlur: function onBlur() {
      if (lastOnBlurValue !== typedValue) {
        setLastOnBlurValue(typedValue);
        handleChange(typedValue, function () {
          return setLastOnBlurValue(lastOnBlurValue);
        });
      }
    },
    onKeyDown: function onKeyDown(e) {
      e.key === "Enter" && e.stopPropagation();
    }
  }));
};
export default ChecklistFieldAlphaNumeric;