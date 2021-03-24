"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _styles = require("@material-ui/core/styles");

var _Cancel = _interopRequireDefault(require("@material-ui/icons/Cancel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: firstLine
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: firstLineDesc
  }, /*#__PURE__*/_react["default"].createElement(_Cancel["default"], {
    style: {
      marginRight: '5px',
      color: 'rgb(206, 206, 206)'
    }
  }), /*#__PURE__*/_react["default"].createElement("label", null, "Not Applicable Option")), /*#__PURE__*/_react["default"].createElement("div", {
    style: rowStyle
  }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    classes: {
      root: classes.root
    }
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
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
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: ''
  }, "\u200B"), notApplicableOptions.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: option.code,
      value: option.code
    }, option.desc);
  })))));
};

var _default = (0, _styles.withStyles)(style)(ChecklistItemNotApplicableOptions);

exports["default"] = _default;