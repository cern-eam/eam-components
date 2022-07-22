function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { areEqual, getElementKey, isRequired, renderOptionHandler, formatLabel, updateCodeDesc } from './tools/input-tools';
import EAMBaseInput from './components/EAMBaseInput';
import TextField from './components/TextField';
import useFetchSelectOptions from './hooks/useFetchSelectOptions';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
var autocompleteDivStyle = {
  flex: "999 1 auto",
  display: "flex"
};

var EAMSelect = function EAMSelect(props) {
  var autocompleteHandler = props.autocompleteHandler,
      autocompleteHandlerParams = props.autocompleteHandlerParams,
      value = props.value,
      valueKey = props.valueKey,
      descKey = props.descKey,
      desc = props.desc,
      updateProperty = props.updateProperty,
      onChangeValue = props.onChangeValue,
      options = props.options,
      optionsTransformer = props.optionsTransformer,
      elementInfo = props.elementInfo,
      renderValue = props.renderValue,
      endTextAdornment = props.endTextAdornment;

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useFetchSelectOption = useFetchSelectOptions(autocompleteHandler, autocompleteHandlerParams, value, desc, options, optionsTransformer),
      _useFetchSelectOption2 = _slicedToArray(_useFetchSelectOption, 2),
      fetchedOptions = _useFetchSelectOption2[0],
      loading = _useFetchSelectOption2[1];

  var getOptionLabelHandler = function getOptionLabelHandler(option) {
    if (_typeof(option) === 'object') {
      return formatLabel(renderValue, option);
    }

    if (typeof option === 'string') {
      if (getOptions().some(function (o) {
        return o.code === option;
      })) {
        return formatLabel(renderValue, getOptions().find(function (o) {
          return o.code === option;
        }));
      } else {
        return option;
      }
    }
  };

  var getOptions = function getOptions() {
    return options ?? fetchedOptions;
  };

  var onInputChangeHandler = function onInputChangeHandler(event, newInputValue) {
    setInputValue(newInputValue);

    if (newInputValue !== value && descKey) {
      updateProperty(descKey, '');
    }
  };

  var isOptionEqualToValueHandler = function isOptionEqualToValueHandler(option, value) {
    if (value) {
      return option.code === value;
    } else {
      return false;
    }
  };

  var onChangeHandler = function onChangeHandler(event, newValue, reason) {
    if (reason === 'clear') {
      // Don't allow clearing the value if mandatory
      if (isRequired(elementInfo)) {
        return;
      }

      updateCodeDesc(updateProperty, valueKey, '', descKey, '', onChangeValue);
      return;
    }

    updateCodeDesc(updateProperty, valueKey, newValue.code, descKey, newValue.desc, onChangeValue); // Don't bubble up any events (won't trigger a save when we select something by pressing enter)

    event.stopPropagation();
    event.preventDefault();
  };

  var onCloseHandler = function onCloseHandler(event, reason) {
    if (reason === 'blur' && inputValue) {
      if (getOptions().some(function (o) {
        return o.code === inputValue;
      })) {
        var option = getOptions().find(function (o) {
          return o.code === inputValue;
        });
        updateCodeDesc(updateProperty, valueKey, option.code, descKey, option.desc, onChangeValue);
      }
    }
  };

  return /*#__PURE__*/React.createElement(EAMBaseInput, props, /*#__PURE__*/React.createElement("div", {
    style: autocompleteDivStyle
  }, /*#__PURE__*/React.createElement(Autocomplete // Options
  , {
    options: options || fetchedOptions,
    getOptionLabel: getOptionLabelHandler,
    renderOption: renderOptionHandler.bind(null, renderValue) // On change 
    ,
    onChange: onChangeHandler,
    onInputChange: onInputChangeHandler // Misc
    ,
    id: getElementKey(elementInfo),
    value: value === undefined ? '' : value,
    isOptionEqualToValue: isOptionEqualToValueHandler,
    onClose: onCloseHandler // Visuals 
    ,
    loading: loading,
    size: "small",
    fullWidth: true,
    componentsProps: {
      paper: {
        sx: {
          marginTop: "2px"
        }
      }
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement(TextField, _extends({
        hideDescription: true
      }, params, props, {
        endAdornment: /*#__PURE__*/React.createElement(KeyboardArrowDownIcon, {
          style: {
            marginRight: endTextAdornment ? 76 : 6,
            marginLeft: endTextAdornment ? -100 : -30,
            zIndex: 999,
            color: "#acacac",
            pointerEvents: "none"
          }
        })
      }));
    }
  })));
};

EAMSelect.defaultProps = {};
export default React.memo(EAMSelect, areEqual);