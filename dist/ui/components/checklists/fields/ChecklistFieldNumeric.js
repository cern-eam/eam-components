function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect } from 'react';
import TextField from '../../inputs-ng/components/TextField';
var outerStyle = {
  display: "flex"
};
var ChecklistFieldNumeric = function ChecklistFieldNumeric(props) {
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
  }, /*#__PURE__*/React.createElement(TextField, {
    disabled: disabled,
    inputProps: inputProps,
    endTextAdornment: UOM,
    style: {
      flex: "0 0 177px",
      marginTop: 5,
      marginBottom: 5
    }
  })), numericLimitError && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'red',
      marginLeft: '20px'
    }
  }, numericLimitError));
};
export default ChecklistFieldNumeric;