function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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