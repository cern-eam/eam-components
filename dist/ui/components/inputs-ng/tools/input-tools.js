function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
      }
      if (descKey && value.desc !== undefined) {
        updatingFunction.apply(void 0, [descKey, value.desc].concat(_toConsumableArray(additionalArgs)));
      }
      if (orgKey && value.organization !== undefined) {
        updatingFunction.apply(void 0, [orgKey, value.organization].concat(_toConsumableArray(additionalArgs)));
      }

      // Fire the onChange only at the end
      if (value.code !== undefined) {
        onChange?.(value.code, value);
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