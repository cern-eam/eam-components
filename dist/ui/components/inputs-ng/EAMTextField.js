function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useEffect } from 'react';
import { areEqual } from './tools/input-tools';
import EAMBaseInput from './components/EAMBaseInput';
import TextField from './components/TextField';

var EAMTextField = function EAMTextField(props) {
  var value = props.value,
      valueKey = props.valueKey,
      updateProperty = props.updateProperty,
      onChangeValue = props.onChangeValue,
      onChangeInput = props.onChangeInput;

  var _useState = useState(value || ''),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  useEffect(function () {
    return setInputValue(value || '');
  }, [value]); // TODO: to be reviewed

  var inputProps = {
    onChange: function onChange(event) {
      setInputValue(event.target.value);
      onChangeInput?.(event.target.value);
    },
    onBlur: function onBlur() {
      if (inputValue !== value) {
        updateProperty?.(valueKey, inputValue);
        onChangeValue?.(inputValue);
      }
    },
    value: inputValue
  };
  return /*#__PURE__*/React.createElement(EAMBaseInput, props, /*#__PURE__*/React.createElement(TextField, _extends({}, props, {
    inputProps: inputProps
  })));
};

export default React.memo(EAMTextField, areEqual);