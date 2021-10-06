function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { CircularProgress, TextField, withStyles } from "@material-ui/core";
import React from "react";
var Progress = withStyles({
  root: {
    marginLeft: 4
  }
})(CircularProgress);

var DataspyAutocompleteInput = function DataspyAutocompleteInput(loading, params) {
  return /*#__PURE__*/React.createElement(TextField, _extends({}, params, {
    label: "Dataspy",
    margin: "dense",
    variant: "outlined",
    size: "small",
    InputLabelProps: {
      shrink: true
    },
    InputProps: _objectSpread({}, params.InputProps, {
      startAdornment: /*#__PURE__*/React.createElement(React.Fragment, null, loading && /*#__PURE__*/React.createElement(Progress, {
        size: 20
      }), params.InputProps.startAdornment)
    })
  }));
};

export default DataspyAutocompleteInput;