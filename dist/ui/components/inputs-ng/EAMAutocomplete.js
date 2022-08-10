function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import useFetchAutocompleteOptions from './hooks/useFetchAutocompleteOptions';
import { areEqual, componentsProps, renderOptionHandler, updateCodeDesc } from './tools/input-tools';
import EAMBaseInput from './components/EAMBaseInput';
import TextField from './components/TextField';
import { saveHistory } from './tools/history-tools';

var EAMAutocomplete = function EAMAutocomplete(props) {
  var autocompleteHandler = props.autocompleteHandler,
      autocompleteHandlerParams = props.autocompleteHandlerParams,
      value = props.value,
      valueKey = props.valueKey,
      descKey = props.descKey,
      updateProperty = props.updateProperty,
      id = props.id,
      renderValue = props.renderValue,
      onChangeValue = props.onChangeValue;

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useFetchAutocomplete = useFetchAutocompleteOptions(autocompleteHandler, autocompleteHandlerParams, inputValue, value, open, id),
      _useFetchAutocomplete2 = _slicedToArray(_useFetchAutocomplete, 2),
      fetchedOptions = _useFetchAutocomplete2[0],
      loading = _useFetchAutocomplete2[1];

  var getOptionLabelHandler = function getOptionLabelHandler(option) {
    return option.code ?? option;
  };

  var onInputChangeHandler = function onInputChangeHandler(event, newInputValue) {
    setInputValue(newInputValue);

    if (newInputValue !== value && descKey) {
      updateProperty(descKey, '');
    }
  };

  var onChangeHandler = function onChangeHandler(event, newValue, reason) {
    console.log('change', reason);

    if (reason === 'clear') {
      // Case handled by the onCloseHandler as we don't want to fire the change event before blurying 
      return;
    }

    saveHistory(id, newValue.code, newValue.desc);
    updateCodeDesc(updateProperty, valueKey, newValue.code, descKey, newValue.desc, onChangeValue); // Don't bubble up any events (won't trigger a save when we select something by pressing enter)

    event.stopPropagation();
    event.preventDefault();
  };

  var onCloseHandler = function onCloseHandler(event, reason) {
    setOpen(false); // Only to be fired when we blur or press ESC and the inputValue is different than the original value

    if ((reason === 'blur' || reason === 'escape') && inputValue !== value) {
      // TODO: validation if inputValue is not empty 
      updateCodeDesc(updateProperty, valueKey, inputValue, descKey, '', onChangeValue);
    }
  };

  return /*#__PURE__*/React.createElement(EAMBaseInput, props, /*#__PURE__*/React.createElement(Autocomplete // Options
  , {
    options: fetchedOptions,
    getOptionLabel: getOptionLabelHandler,
    renderOption: renderOptionHandler.bind(null, renderValue) // Open props
    ,
    open: open,
    onOpen: function onOpen() {
      return setOpen(true);
    },
    onClose: onCloseHandler // On change 
    ,
    onChange: onChangeHandler,
    onInputChange: onInputChangeHandler // Misc
    ,
    filterOptions: function filterOptions(x) {
      return x;
    },
    id: id,
    freeSolo: true,
    value: value ? value : '' // Visuals 
    ,
    openOnFocus: true // Very important, otherwise onCloseHandler won't be fired for example when we focus a field with a tab and delete its value.
    // Funningly without this prop it still works correctly when we manually gain focus using the mouse.
    ,
    componentsProps: componentsProps,
    includeInputInList: true,
    loading: loading,
    size: "small",
    fullWidth: true,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement(TextField, _extends({}, params, props));
    }
  }));
};

EAMAutocomplete.defaultProps = {};
export default React.memo(EAMAutocomplete, areEqual);