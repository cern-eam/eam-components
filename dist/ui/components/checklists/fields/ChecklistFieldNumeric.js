function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
    numericError = _useState6[0],
    setNumericError = _useState6[1];
  useEffect(function () {
    if (stringValue !== inputValue) {
      setInputValue(stringValue);
    }
  }, [stringValue]);
  var changed = lastUpdatedValue !== inputValue;
  useEffect(function () {
    if (!isNaN(inputValue)) {
      var floatValue = parseFloat(inputValue);
      var numericErrorDetected = true;
      if (typeof minimumValue === 'number' && floatValue < minimumValue) {
        setNumericError("Minimum value is ".concat(minimumValue).concat(UOM));
      } else if (typeof maximumValue === 'number' && floatValue > maximumValue) {
        setNumericError("Maximum value is ".concat(maximumValue).concat(UOM));
      } else {
        setNumericError(false);
        numericErrorDetected = false;
      }
      if (changed && numericErrorDetected) {
        showError(numericError);
      }
    } else {
      setNumericError("Not a valid number");
    }
  }, [inputValue, numericError, changed, showError]);
  var inputProps = {
    onChange: function onChange(event) {
      return setInputValue(event.target.value);
    },
    value: inputValue,
    onBlur: function onBlur() {
      if (!changed) {
        return;
      }
      if (!isNaN(inputValue) || inputValue === '') {
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
    endTextAdornment: UOM,
    errorText: numericError
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
  })))));
};
export default ChecklistFieldNumeric;