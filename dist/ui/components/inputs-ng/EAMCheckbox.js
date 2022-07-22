function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import EAMBaseInput from './components/EAMBaseInput';
import { areEqual } from './tools/input-tools';
var rootStyle = {
  //width: "calc(50% - 20px)",
  //boxSizing: "border-box",
  //float: "left",
  width: "auto",
  flex: "1 1 170px",
  flexFlow: "row nowrap"
};

var EAMCheckbox = function EAMCheckbox(props) {
  var value = props.value,
      valueKey = props.valueKey,
      updateProperty = props.updateProperty;

  var isChecked = function isChecked(value) {
    var checkedTextValue = value || '';
    return checkedTextValue.toLowerCase() === true.toString();
  };

  var handleChange = function handleChange(event, checked) {
    updateProperty(valueKey, checked.toString());
  };

  return /*#__PURE__*/React.createElement(EAMBaseInput, _extends({}, props, {
    rootStyle: rootStyle
  }), /*#__PURE__*/React.createElement(Checkbox, {
    style: {
      boxSizing: "border-box"
    },
    color: "primary",
    checked: isChecked(value),
    onChange: handleChange
  }));
};

export default React.memo(EAMCheckbox, areEqual);