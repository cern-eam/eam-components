function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import isEqual from 'lodash/isEqual';
import { Box } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import React from 'react';
export var isRequired = function isRequired(elementInfo) {
  return elementInfo?.attribute === 'R' || elementInfo?.attribute === 'S';
};
export var isHidden = function isHidden(elementInfo) {
  return elementInfo?.attribute === 'H' || elementInfo?.presentInJSP === 'N';
};
export var isUpperCase = function isUpperCase(elementInfo) {
  return elementInfo?.characterCase === 'uppercase';
};
export var areEqual = function areEqual(prevProps, nextProps) {
  return prevProps.value === nextProps.value && prevProps.desc === nextProps.desc && prevProps.disabled === nextProps.disabled && prevProps.readonly === nextProps.readonly && prevProps.required === nextProps.required && prevProps.uppercase === nextProps.uppercase && prevProps.label === nextProps.label && prevProps.hidden === nextProps.hidden && prevProps.errorText === nextProps.errorText && isEqual(prevProps.autocompleteHandlerParams, nextProps.autocompleteHandlerParams) && isEqual(prevProps.options, nextProps.options) && isEqual(prevProps.renderDependencies, nextProps.renderDependencies);
};
export var processElementInfo = function processElementInfo(elementInfo) {
  var data = {
    required: isRequired(elementInfo),
    hidden: isHidden(elementInfo),
    uppercase: isUpperCase(elementInfo),
    label: elementInfo.text,
    disabled: elementInfo.readonly,
    id: getElementKey(elementInfo)
  };
  if (elementInfo.maxLength) {
    data.maxLength = elementInfo.maxLength;
  }
  if (elementInfo.fieldType === 'currency' || elementInfo.fieldType === 'number') {
    data.type = 'number';
  } else {
    data.type = 'text';
  }
  if (elementInfo.characterCase === 'uppercase') {
    data.uppercase = true;
  }
  return data;
};
export var getElementKey = function getElementKey(elementInfo) {
  if (!elementInfo) return null;
  return typeof elementInfo.xpath === 'string' ? elementInfo.xpath : "".concat(elementInfo.text, "_").concat(elementInfo.elementId).replace(/\s+/g, '_');
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
  }

  // { code: "Long Shutdown", desc: null }
  if (!option.desc) {
    return option.code;
  }
  return "".concat(option.code, " - ").concat(option.desc);
};
export var componentsProps = {
  paper: {
    sx: {
      marginTop: "2px",
      marginBottom: "4px",
      '& .MuiAutocomplete-listbox .MuiAutocomplete-option': {
        minHeight: 30
      }
    },
    elevation: 4
  }
};
export var createOnChangeHandler = function createOnChangeHandler(valueKey, descKey, orgKey, updateEntityProperty, onChange) {
  return function (value) {
    if (_typeof(value) === 'object') {
      if (value.code !== undefined) {
        updateEntityProperty?.(valueKey, value.code);
        onChange?.(value.code);
      }
      if (descKey && value.desc !== undefined) {
        updateEntityProperty(descKey, value.desc);
      }
      if (orgKey && value.organization !== undefined) {
        updateEntityProperty(orgKey, value.organization);
      }
    } else {
      updateEntityProperty?.(valueKey, value);
      onChange?.(value);
    }
  };
};