"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ChecklistFieldCheckbox;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ChecklistFieldCheckbox(props) {
  var code = props.code,
      desc = props.desc,
      checked = props.checked,
      handleChange = props.handleChange;
  return _react["default"].createElement(_FormControlLabel["default"], {
    control: _react["default"].createElement(_Checkbox["default"], {
      color: "primary",
      checked: checked,
      onChange: function onChange() {
        return handleChange(code);
      }
    }),
    label: desc
  });
}