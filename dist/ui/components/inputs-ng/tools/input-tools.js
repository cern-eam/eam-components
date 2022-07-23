function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import isEqual from 'lodash/isEqual';
import { Box } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import React from 'react';
export var isRequired = function isRequired(elementInfo) {
  return elementInfo && (elementInfo.attribute === 'R' || elementInfo.attribute === 'S');
};
export var isHidden = function isHidden(elementInfo) {
  return elementInfo && elementInfo.attribute === 'H';
};
export var isUpperCase = function isUpperCase(elementInfo) {
  return elementInfo && elementInfo.characterCase === 'uppercase';
};
export var areEqual = function areEqual(prevProps, nextProps) {
  return prevProps.value === nextProps.value && prevProps.desc === nextProps.desc && prevProps.disabled === nextProps.disabled && prevProps.elementInfo?.readonly === nextProps.elementInfo?.readonly && isEqual(prevProps.autocompleteHandlerParams, nextProps.autocompleteHandlerParams) && isEqual(prevProps.options, nextProps.options) && isEqual(prevProps.renderDependencies, nextProps.renderDependencies);
};
export var getElementKey = function getElementKey(elementInfo) {
  if (!elementInfo) return null;
  return typeof elementInfo.xpath === 'string' ? elementInfo.xpath : elementInfo.text + elementInfo.elementId;
};
export var renderOptionHandler = function renderOptionHandler(renderValue, props, option) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: "li"
  }, props), option.type === 'H' && /*#__PURE__*/React.createElement(HistoryIcon, {
    style: {
      color: "#cfcfcf",
      margin: "0px 6px 0px -10px",
      fontSize: 17,
      alignItems: "center"
    }
  }), formatLabel(renderValue, option));
};
export var formatLabel = function formatLabel(renderValue, option) {
  if (renderValue) {
    return renderValue(option);
  }

  if (option.code === option.desc) {
    return option.code;
  } // { code: "Long Shutdown", desc: null }


  if (!option.desc) {
    return option.code;
  }

  return "".concat(option.code, " - ").concat(option.desc);
};
export var updateCodeDesc = function updateCodeDesc(updateProperty, valueKey, value, descKey, desc, onChangeValue) {
  updateProperty(valueKey, value);

  if (descKey) {
    updateProperty(descKey, desc);
  }

  onChangeValue?.(value);
};