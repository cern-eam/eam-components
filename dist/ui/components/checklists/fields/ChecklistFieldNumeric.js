function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
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
    errorText: numericError,
    style: {
      flex: "0 0 177px",
      marginTop: 5,
      marginBottom: 5
    }
  })));
};
export default ChecklistFieldNumeric;