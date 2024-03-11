function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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

/**
 * Use this function when the passed updating function expects a key and a
 * value as the first two arguments.
 * @param additionalFunctionArgs is an array of arguments that will be spread
 * and passed to the end of the updating function's arguments. This enables
 * passing more arguments to the updating function than just the key and value.
 */
export var createOnChangeHandler = function createOnChangeHandler(valueKey, descKey, orgKey, updatingFunction, onChange) {
  var additionalArgs = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
  return function (value) {
    // When receiving an object value, we run the updating function for each
    // key that was passed.
    if (_typeof(value) === 'object') {
      if (value.code !== undefined) {
        updatingFunction?.(valueKey, value.code, ...additionalArgs);
        onChange?.(value.code);
      }
      if (descKey && value.desc !== undefined) {
        updatingFunction.apply(void 0, [descKey, value.desc].concat(_toConsumableArray(additionalArgs)));
      }
      if (orgKey && value.organization !== undefined) {
        updatingFunction.apply(void 0, [orgKey, value.organization].concat(_toConsumableArray(additionalArgs)));
      }
    } else {
      // When receiving a non-object value, we assume it corresponds to
      // the value key.
      updatingFunction?.(valueKey, value, ...additionalArgs);
      onChange?.(value);

      // Reset the description and org if the respective key was passed to
      // the function, thus clearing the field of previous values that do
      // not match the value picked.
      if (descKey) {
        updatingFunction.apply(void 0, [descKey, ''].concat(_toConsumableArray(additionalArgs)));
      }
      if (orgKey) {
        updatingFunction.apply(void 0, [orgKey, ''].concat(_toConsumableArray(additionalArgs)));
      }
    }
  };
};

/**
 * Use this function when the passed updating function expects an object as its
 * first argument (as opposed to a key and a value arguments). Note that, in
 * this function we check the values against undefined so that empty string
 * values are not ignored, thus allowing for fields to be cleared.
 * @param additionalFunctionArgs is an array of arguments that will be spread
 * and passed to the end of the updating function's arguments. This enables
 * passing more arguments to the updating function than just the object
 * containing all key-value pairs.
 * */
export var createOnChangeHandlerObjectUpdate = function createOnChangeHandlerObjectUpdate(valueKey, descKey, orgKey, updatingFunction, onChange) {
  var additionalArgs = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
  return function (value) {
    if (_typeof(value) === 'object') {
      var updateObject = _objectSpread({}, value.code !== undefined && _defineProperty({}, valueKey, value.code), {}, descKey && value.desc !== undefined && _defineProperty({}, descKey, value.desc), {}, orgKey && value.organization !== undefined && _defineProperty({}, orgKey, value.organization));
      updatingFunction?.(updateObject, ...additionalArgs);
      onChange?.(updateObject);
    } else {
      // If we are expecting an object update, but we get a non-object
      // value (can happen on a barcode scan), we set the value key to the
      // value received since that is expected to be the selected option.
      // Additionally, we reset the description and org if the respective
      // key was passed to the function, thus clearing the field of
      // previous values that do not match the value selected.
      var _updateObject = _objectSpread(_defineProperty({}, valueKey, value), descKey && _defineProperty({}, descKey, ''), {}, orgKey && _defineProperty({}, orgKey, ''));
      updatingFunction?.(_updateObject, ...additionalArgs);
      onChange?.(_updateObject);
    }
  };
};