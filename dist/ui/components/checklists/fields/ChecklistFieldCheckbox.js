"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var labelStyle = {
  root: {
    margin: 5
  },
  label: {
    fontSize: "0.95rem"
  }
};

var ChecklistFieldCheckbox = function ChecklistFieldCheckbox(props) {
  var code = props.code,
      desc = props.desc,
      checked = props.checked,
      handleChange = props.handleChange,
      classes = props.classes,
      disabled = props.disabled;
  return /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    classes: {
      root: classes.root,
      label: classes.label
    },
    control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
      color: "primary",
      checked: checked,
      onMouseDown: function onMouseDown() {
        return handleChange(code);
      },
      onTouchStart: function onTouchStart() {
        return handleChange(code);
      },
      disabled: disabled
    }),
    label: desc
  });
};

var _default = (0, _styles.withStyles)(labelStyle)(ChecklistFieldCheckbox);

exports["default"] = _default;