function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

var Input = function Input(props) {
  return /*#__PURE__*/React.createElement("input", _extends({}, props, {
    value: props.value ? props.value : ''
  }));
};

export default Input;