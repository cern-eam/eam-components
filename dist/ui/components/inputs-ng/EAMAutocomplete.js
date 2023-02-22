function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import useFetchAutocompleteOptions from './hooks/useFetchAutocompleteOptions';
import { areEqual, componentsProps, renderOptionHandler, updateCodeDesc } from './tools/input-tools';
import EAMBaseInput from './components/EAMBaseInput';
import TextField from './components/TextField';
import { saveHistory, HISTORY_ID_PREFIX } from './tools/history-tools';
var EAMAutocomplete = function EAMAutocomplete(props) {
  var autocompleteHandler = props.autocompleteHandler,
    _props$autocompleteHa = props.autocompleteHandlerParams,
    autocompleteHandlerParams = _props$autocompleteHa === void 0 ? [] : _props$autocompleteHa,
    value = props.value,
    desc = props.desc,
    id = props.id,
    renderValue = props.renderValue,
    onChange = props.onChange,
    validate = props.validate;
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
  var _useState5 = useState(true),
    _useState6 = _slicedToArray(_useState5, 2),
    valid = _useState6[0],
    setValid = _useState6[1];
  useEffect(function () {
    setValid(true);
  }, [value]);
  var getOptionLabelHandler = function getOptionLabelHandler(option) {
    return option.code ?? option;
  };
  var onInputChangeHandler = function onInputChangeHandler(event, newInputValue) {
    setInputValue(newInputValue);
    if (newInputValue !== value && desc) {
      onChange({
        desc: ''
      });
    }
  };
  var onChangeHandler = function onChangeHandler(event, newValue, reason) {
    if (reason === 'clear' || reason === 'createOption') {
      // Cases handled by the onCloseHandler 
      return;
    }
    saveHistory(HISTORY_ID_PREFIX + id, newValue.code, newValue.desc);
    onChange(newValue, newValue);

    // Don't bubble up any events (won't trigger a save when we select something by pressing enter)
    event.stopPropagation();
    event.preventDefault();
  };
  var onCloseHandler = function onCloseHandler(event, reason) {
    setOpen(false);
    // Only to be fired when we blur, press ESC or hit enter and the inputValue is different than the original value
    if ((reason === 'blur' || reason === 'escape' || reason === 'createOption') && inputValue !== value) {
      onChange({
        code: inputValue,
        desc: ''
      });
      autocompleteHandler.apply(void 0, _toConsumableArray(autocompleteHandlerParams).concat([inputValue])).then(function (result) {
        var option = result.body.data.find(function (o) {
          return o.code === inputValue;
        });
        if (option) {
          onChange({
            desc: option.desc
          });
        } else {
          setValid(!validate || false);
        }
      })["catch"](console.error);
    }
  };
  return /*#__PURE__*/React.createElement(EAMBaseInput, props, /*#__PURE__*/React.createElement(Autocomplete
  // Options
  , {
    options: fetchedOptions,
    getOptionLabel: getOptionLabelHandler,
    renderOption: renderOptionHandler.bind(null, renderValue)
    // Open props
    ,
    open: open,
    onOpen: function onOpen() {
      return setOpen(true);
    },
    onClose: onCloseHandler
    // On change 
    ,
    onChange: onChangeHandler,
    onInputChange: onInputChangeHandler
    // Misc
    ,
    filterOptions: function filterOptions(x) {
      return x;
    },
    id: id,
    freeSolo: true,
    value: value ? value : ''
    // Visuals 
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
      return /*#__PURE__*/React.createElement(TextField, _extends({}, params, props, {
        errorText: valid ? props.errorText : "Wrong entry"
      }));
    }
  }));
};
EAMAutocomplete.defaultProps = {};
export default React.memo(EAMAutocomplete, areEqual);