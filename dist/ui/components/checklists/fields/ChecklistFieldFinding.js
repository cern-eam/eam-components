"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _ChecklistFieldCheckbox = _interopRequireDefault(require("./ChecklistFieldCheckbox"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var ChecklistFieldFinding = function ChecklistFieldFinding(props) {
  var finding = props.finding,
      _handleChange = props.handleChange,
      possibleFindings = props.possibleFindings,
      classes = props.classes,
      disabled = props.disabled;
  var dropdown = props.dropdown === undefined ? true : props.dropdown;
  if (dropdown) return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    disabled: disabled,
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
    value: finding || '',
    onChange: function onChange(event) {
      return _handleChange(event.target.value);
    },
    disabled: disabled
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: null
  }, "\u200B"), possibleFindings.map(function (finding) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: finding.code,
      value: finding.code
    }, finding.desc);
  })));else return possibleFindings.map(function (findingElement) {
    return /*#__PURE__*/_react["default"].createElement(_ChecklistFieldCheckbox["default"], {
      code: findingElement.code,
      desc: findingElement.desc,
      checked: finding === findingElement.code,
      handleChange: function handleChange(value) {
        return _handleChange(value === finding ? null : value);
      },
      key: findingElement.code,
      disabled: disabled
    });
  });
};

var _default = (0, _styles.withStyles)(style)(ChecklistFieldFinding);

exports["default"] = _default;