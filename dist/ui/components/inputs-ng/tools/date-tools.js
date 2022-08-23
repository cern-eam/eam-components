function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import TextField from "../components/TextField";
import React from 'react';
export var renderDatePickerInput = function renderDatePickerInput(_ref, isInvalidDate, style, errorText, disabled) {
  var inputRef = _ref.inputRef,
      inputProps = _ref.inputProps,
      InputProps = _ref.InputProps;

  if (isInvalidDate) {
    errorText = "Wrong Date format";
  }

  var endAdornment = /*#__PURE__*/React.createElement("div", {
    style: {
      marginRight: 12,
      marginLeft: -8
    }
  }, InputProps?.endAdornment);
  return /*#__PURE__*/React.createElement(TextField, {
    style: style,
    inputRef: inputRef,
    inputProps: disabled ? _objectSpread({}, inputProps, {
      placeholder: ""
    }) : _objectSpread({}, inputProps),
    endAdornment: disabled ? null : endAdornment,
    errorText: errorText,
    disabled: disabled
  });
};
export var onChangeHandler = function onChangeHandler(updateProperty, setIsInvalidDate, valueKey, newValue) {
  try {
    if (newValue) {
      updateProperty(valueKey, newValue.toISOString());
    } else {
      updateProperty(valueKey, '');
    }

    setIsInvalidDate(false);
  } catch (_unused) {
    setIsInvalidDate(true);
  }
};