function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import { areEqual } from './tools/input-tools';
import EAMBaseInput from './components/EAMBaseInput';
import TextField from './components/TextField';

var EAMTextField = function EAMTextField(props) {
  var value = props.value,
      valueKey = props.valueKey,
      updateProperty = props.updateProperty;
  var inputProps = {
    onChange: function onChange(event) {
      return updateProperty(valueKey, event.target.value);
    },
    value: value
  };
  return /*#__PURE__*/React.createElement(EAMBaseInput, props, /*#__PURE__*/React.createElement(TextField, _extends({}, props, {
    inputProps: inputProps
  })));
};

export default React.memo(EAMTextField, areEqual);