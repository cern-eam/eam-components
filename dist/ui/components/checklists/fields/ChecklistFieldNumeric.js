var _labelUOMStyle;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useState, useEffect } from 'react';
var inputStyle = {
  width: "1%",
  flex: "1 1 auto",
  padding: "5px 10px",
  fontSize: 16,
  transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  borderRadius: 4,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  zIndex: 20,
  backgroundColor: "#fff",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif"
};
var labelUOMStyle = (_labelUOMStyle = {
  color: "black",
  fontSize: 15
}, _defineProperty(_labelUOMStyle, "color", "#495057"), _defineProperty(_labelUOMStyle, "textAlign", "center"), _defineProperty(_labelUOMStyle, "whiteSpace", "nowrap"), _defineProperty(_labelUOMStyle, "backgroundColor", "#e9ecef"), _defineProperty(_labelUOMStyle, "border", "1px solid #ced4da"), _defineProperty(_labelUOMStyle, "paddingLeft", 4), _defineProperty(_labelUOMStyle, "paddingRight", 4), _defineProperty(_labelUOMStyle, "borderTopRightRadius", 4), _defineProperty(_labelUOMStyle, "borderBottomRightRadius", 4), _defineProperty(_labelUOMStyle, "marginLeft", -1), _defineProperty(_labelUOMStyle, "zIndex", 10), _defineProperty(_labelUOMStyle, "display", "flex"), _defineProperty(_labelUOMStyle, "alignItems", "center"), _labelUOMStyle);
var outerStyle = {
  margin: 5,
  marginLeft: 17,
  display: "flex"
};
var OK_BORDER = "solid 1px #ced4da";
var ERROR_BORDER = "solid 1px #f44336";

var ChecklistFieldNumeric = function ChecklistFieldNumeric(props) {
  var _React$createElement;

  var value = props.value,
      UOM = props.UOM,
      handleChange = props.handleChange,
      minimumValue = props.minimumValue,
      maximumValue = props.maximumValue,
      showError = props.showError,
      disabled = props.disabled;
  var stringValue = value === null ? '' : '' + value;

  var _useState = useState(stringValue),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = useState(stringValue),
      _useState4 = _slicedToArray(_useState3, 2),
      lastUpdatedValue = _useState4[0],
      setUpdatedValue = _useState4[1];

  var _useState5 = useState(OK_BORDER),
      _useState6 = _slicedToArray(_useState5, 2),
      border = _useState6[0],
      setBorder = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      numericLimitError = _useState8[0],
      setNumericLimitError = _useState8[1];

  useEffect(function () {
    if (stringValue !== inputValue) {
      setInputValue(stringValue);
    }
  }, [stringValue]);
  var changed = lastUpdatedValue !== inputValue;
  useEffect(function () {
    if (!isNaN(inputValue)) {
      var floatValue = parseFloat(inputValue);
      var numericLimitErrorDetected = true;

      if (typeof minimumValue === 'number' && floatValue < minimumValue) {
        setNumericLimitError("Minimum value is ".concat(minimumValue).concat(UOM));
      } else if (typeof maximumValue === 'number' && floatValue > maximumValue) {
        setNumericLimitError("Maximum value is ".concat(maximumValue).concat(UOM));
      } else {
        setNumericLimitError(false);
        numericLimitErrorDetected = false;
      }

      if (changed && numericLimitErrorDetected) {
        showError(numericLimitError);
      }
    }
  }, [inputValue, numericLimitError, changed, showError]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: outerStyle
  }, /*#__PURE__*/React.createElement("input", (_React$createElement = {
    style: _objectSpread({}, inputStyle, {
      border: border
    }),
    disabled: disabled,
    onChange: function onChange(event) {
      return setInputValue(event.target.value);
    },
    value: inputValue
  }, _defineProperty(_React$createElement, "disabled", disabled), _defineProperty(_React$createElement, "onBlur", function onBlur() {
    if (!changed) {
      return;
    }

    if (!isNaN(inputValue)) {
      setBorder(OK_BORDER);
      setUpdatedValue(inputValue);
      handleChange(inputValue, function () {
        return setUpdatedValue(lastUpdatedValue);
      });
    } else setBorder(ERROR_BORDER);
  }), _React$createElement)), /*#__PURE__*/React.createElement("div", {
    style: labelUOMStyle
  }, UOM)), numericLimitError && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'red',
      marginLeft: '20px'
    }
  }, numericLimitError));
};

export default ChecklistFieldNumeric;