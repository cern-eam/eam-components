import TextField from "../components/TextField";
import React from 'react';
export var renderDatePickerInput = function renderDatePickerInput(_ref, isInvalidDate, style, errorText) {
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
    inputProps: inputProps,
    endAdornment: endAdornment,
    errorText: errorText
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