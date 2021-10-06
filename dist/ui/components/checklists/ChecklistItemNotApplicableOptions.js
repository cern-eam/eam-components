function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
var style = {
  root: {
    margin: 5,
    marginLeft: 17,
    border: "1px solid #ced4da",
    borderRadius: 4
  },
  selectRoot: {
    fontSize: "0.95rem"
  },
  select: {
    paddingLeft: 10,
    width: 128,
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  icon: {
    paddingRight: 3
  }
};
var firstLine = {
  display: "flex",
  alignItems: "stretch",
  minHeight: 48,
  justifyContent: 'space-between',
  flexWrap: 'wrap'
};
var firstLineDesc = {
  "float": "left",
  display: "flex",
  alignItems: "center",
  pointerEvents: "initial",
  color: "rgba(0, 0, 0, 0.87)"
};
var rowStyle = {
  flex: "0 0 186px",
  display: "flex",
  position: "relative",
  marginLeft: "auto",
  flexDirection: "column"
};

var ChecklistItemNotApplicableOptions = function ChecklistItemNotApplicableOptions(props) {
  var notApplicableOptions = props.notApplicableOptions,
      checklistItem = props.checklistItem,
      _onChange = props.onChange,
      classes = props.classes,
      disabled = props.disabled;
  return /*#__PURE__*/React.createElement("div", {
    style: firstLine
  }, /*#__PURE__*/React.createElement("div", {
    style: firstLineDesc
  }, /*#__PURE__*/React.createElement(CancelIcon, {
    style: {
      marginRight: '5px',
      color: 'rgb(206, 206, 206)'
    }
  }), /*#__PURE__*/React.createElement("label", null, "Not Applicable Option")), /*#__PURE__*/React.createElement("div", {
    style: rowStyle
  }, /*#__PURE__*/React.createElement(FormControl, {
    classes: {
      root: classes.root
    }
  }, /*#__PURE__*/React.createElement(Select, {
    classes: {
      root: classes.selectRoot,
      select: classes.select,
      icon: classes.icon
    },
    disableUnderline: true,
    value: checklistItem.notApplicableOption || '',
    disabled: disabled,
    onChange: function onChange(event) {
      return _onChange(_objectSpread({}, checklistItem, {
        notApplicableOption: event.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement(MenuItem, {
    value: ''
  }, "\u200B"), notApplicableOptions.map(function (option) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: option.code,
      value: option.code
    }, option.desc);
  })))));
};

export default withStyles(style)(ChecklistItemNotApplicableOptions);