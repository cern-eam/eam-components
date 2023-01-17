function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { areEqual, getElementKey, isRequired, renderOptionHandler, formatLabel, updateCodeDesc, componentsProps } from './tools/input-tools';
import EAMBaseInput from './components/EAMBaseInput';
import TextField from './components/TextField';
import useFetchSelectOptions from './hooks/useFetchSelectOptions';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
var EAMSelect = function EAMSelect(props) {
  var autocompleteHandler = props.autocompleteHandler,
    autocompleteHandlerParams = props.autocompleteHandlerParams,
    value = props.value,
    desc = props.desc,
    onChange = props.onChange,
    options = props.options,
    optionsTransformer = props.optionsTransformer,
    required = props.required,
    id = props.id,
    disabled = props.disabled,
    renderValue = props.renderValue,
    endTextAdornment = props.endTextAdornment,
    selectOnlyMode = props.selectOnlyMode;
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
    var optionsTemp = options ?? fetchedOptions ?? [];
    if (selectOnlyMode && !required) {
      return [{
        code: "",
        desc: ""
      }].concat(optionsTemp);
    }
    return optionsTemp;
  };
  var onInputChangeHandler = function onInputChangeHandler(event, newInputValue) {
    setInputValue(newInputValue);
    if (newInputValue !== value && desc) {
      onChange({
        desc: ''
      });
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
      if (required) {
        return;
      }
      onChange({
        code: '',
        desc: ''
      });
      return;
    }
    onChange(newValue);

    // Don't bubble up any events (won't trigger a save when we select something by pressing enter)
    event.stopPropagation();
    event.preventDefault();
  };
  var onCloseHandler = function onCloseHandler(event, reason) {
    if ((reason === 'blur' || reason === 'escape') && inputValue) {
      if (getOptions().some(function (o) {
        return o.code === inputValue;
      })) {
        var option = getOptions().find(function (o) {
          return o.code === inputValue;
        });
        onChange(option);
      }
    }
  };
  return /*#__PURE__*/React.createElement(EAMBaseInput, props, /*#__PURE__*/React.createElement(Autocomplete
  // Options
  , {
    options: getOptions(),
    getOptionLabel: getOptionLabelHandler,
    renderOption: renderOptionHandler.bind(null, renderValue)
    // On change 
    ,
    onChange: onChangeHandler,
    onInputChange: onInputChangeHandler
    // Misc
    ,
    id: id,
    value: value ? value : '',
    isOptionEqualToValue: isOptionEqualToValueHandler,
    onClose: onCloseHandler
    // Visuals 
    ,
    openOnFocus: true,
    componentsProps: componentsProps,
    loading: loading,
    size: "small",
    fullWidth: true,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement(TextField, _extends({
        hideDescription: true
      }, params, props, {
        endAdornment: !disabled && /*#__PURE__*/React.createElement(KeyboardArrowDownIcon, {
          style: {
            marginRight: endTextAdornment ? 76 : 6,
            marginLeft: endTextAdornment ? -100 : -30,
            zIndex: 999,
            color: "#cbcbcb",
            pointerEvents: "none"
          }
        })
      }));
    }
  }));
};
EAMSelect.defaultProps = {};
export default React.memo(EAMSelect, areEqual);