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
import React, { useState, useEffect } from 'react';
import TextField from '../../inputs-ng/components/TextField';
import Slider from '@mui/material/Slider';
var outerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  marginLeft: "auto",
  marginBottom: "auto"
};
var outerSliderStyle = {
  padding: '0 15px',
  marginBottom: '-14px'
};
var sliderStyle = {
  height: 5,
  padding: '11px 0',
  '& .MuiSlider-thumb': {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: '0px 0px 3px 2px rgba(0, 0, 0, 0.1)'
    },
    '&:before': {
      boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)'
    }
  },
  '& .MuiSlider-markLabel': {
    top: '85%',
    fontSize: '12px'
  },
  '& .MuiSlider-mark': {
    visibility: 'hidden'
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    boxShadow: 'inset 0px 0px 4px -2px #000',
    backgroundColor: '#d0d0d0'
  }
};
var getSliderMark = function getSliderMark(value, UOM) {
  return {
    value: value,
    label: value
  };
};
var ChecklistFieldNumeric = function ChecklistFieldNumeric(props) {
  var value = props.value,
    UOM = props.UOM,
    handleChange = props.handleChange,
    minimumValue = props.minimumValue,
    maximumValue = props.maximumValue,
    showError = props.showError,
    disabled = props.disabled,
    slider = props.slider,
    customSliderStyle = props.customSliderStyle,
    sliderRange = props.sliderRange;
  var stringValue = value === null ? '' : '' + value;
  var _useState = useState(stringValue),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = useState(stringValue),
    _useState4 = _slicedToArray(_useState3, 2),
    lastUpdatedValue = _useState4[0],
    setUpdatedValue = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    numericLimitError = _useState6[0],
    setNumericLimitError = _useState6[1];
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
  var inputProps = {
    onChange: function onChange(event) {
      return setInputValue(event.target.value);
    },
    value: inputValue,
    onBlur: function onBlur() {
      if (!changed) {
        return;
      }
      if (!isNaN(inputValue)) {
        setUpdatedValue(inputValue);
        handleChange(inputValue, function () {
          return setUpdatedValue(lastUpdatedValue);
        });
      }
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: outerStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "177px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      marginTop: 5,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    disabled: disabled,
    inputProps: inputProps,
    endTextAdornment: UOM
  }), slider && minimumValue != null && maximumValue != null && /*#__PURE__*/React.createElement("div", {
    style: outerSliderStyle
  }, /*#__PURE__*/React.createElement(Slider, {
    min: minimumValue,
    max: maximumValue,
    size: "small",
    sx: _objectSpread({}, sliderStyle, {}, customSliderStyle),
    marks: sliderRange && [getSliderMark(minimumValue), getSliderMark(maximumValue)],
    value: parseFloat(inputValue),
    onChange: function onChange(event, newValue) {
      return setInputValue(newValue);
    },
    onChangeCommitted: function onChangeCommitted(event, newValue) {
      return handleChange(newValue, function () {
        setUpdatedValue(lastUpdatedValue);
      });
    }
  })))), numericLimitError && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'red',
      marginLeft: '20px'
    }
  }, numericLimitError));
};
export default ChecklistFieldNumeric;