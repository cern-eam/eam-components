function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import EAMBaseInput from './components/EAMBaseInput';
import { areEqual } from './tools/input-tools';
var rootStyle = {
  width: "auto",
  flex: "0 1 180px",
  flexFlow: "row nowrap"
};

var EAMCheckbox = function EAMCheckbox(props) {
  var value = props.value,
      disabled = props.disabled,
      onChange = props.onChange;

  var isChecked = function isChecked(value) {
    var checkedTextValue = value || '';
    return "".concat(checkedTextValue).toLowerCase() === true.toString();
  };

  var handleChange = function handleChange(event, checked) {
    onChange(checked.toString());
  };

  return /*#__PURE__*/React.createElement(EAMBaseInput, _extends({}, props, {
    rootStyle: _objectSpread({}, rootStyle, {}, props.rootStyle),
    componentStyle: {
      flex: "unset"
    }
  }), /*#__PURE__*/React.createElement(Checkbox, {
    color: "primary",
    checked: isChecked(value),
    onChange: handleChange,
    disabled: disabled
  }));
};

export default React.memo(EAMCheckbox, areEqual);