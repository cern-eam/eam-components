function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import withStyles from '@mui/styles/withStyles';
import CancelIcon from '@mui/icons-material/Cancel';
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