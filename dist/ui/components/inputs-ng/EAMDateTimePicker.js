function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { areEqual } from './tools/input-tools';
import { renderDatePickerInput, onChangeHandler } from './tools/date-tools';
import EAMBaseInput from './components/EAMBaseInput';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import enLocale from 'date-fns/locale/en-GB';

var EAMDateTimePicker = function EAMDateTimePicker(props) {
  var value = props.value,
      valueKey = props.valueKey,
      updateProperty = props.updateProperty,
      style = props.style;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isInvalidDate = _useState2[0],
      setIsInvalidDate = _useState2[1];

  return /*#__PURE__*/React.createElement(EAMBaseInput, props, /*#__PURE__*/React.createElement(LocalizationProvider, {
    dateAdapter: AdapterDateFns,
    adapterLocale: enLocale
  }, /*#__PURE__*/React.createElement(DateTimePicker, {
    renderInput: function renderInput(props) {
      return renderDatePickerInput(props, isInvalidDate, style);
    },
    value: value,
    disableMaskedInput: true,
    inputFormat: "dd-MMM-yyyy HH:mm" //TODO shouldn't be hardcoded 
    ,
    onChange: onChangeHandler.bind(null, updateProperty, setIsInvalidDate, valueKey),
    ampm: false
  })));
};

export default React.memo(EAMDateTimePicker, areEqual);