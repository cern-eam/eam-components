"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ChecklistFieldFinding;

var _react = _interopRequireDefault(require("react"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _ChecklistFieldCheckbox = _interopRequireDefault(require("./ChecklistFieldCheckbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var selectStyle = {
  margin: 5,
  marginLeft: 17,
  width: "100%"
};

function ChecklistFieldFinding(props) {
  var finding = props.finding,
      handleChange = props.handleChange,
      possibleFindings = props.possibleFindings;
  var dropdown = props.dropdown === undefined ? true : props.dropdown;
  if (dropdown) return _react["default"].createElement(_FormControl["default"], {
    style: selectStyle
  }, _react["default"].createElement(_Select["default"], {
    disableUnderline: true,
    value: finding,
    onChange: function onChange(event) {
      return handleChange(event.target.value);
    }
  }, _react["default"].createElement(_MenuItem["default"], {
    value: null
  }, "\u200B"), possibleFindings.map(function (finding) {
    return _react["default"].createElement(_MenuItem["default"], {
      key: finding.code,
      value: finding.code
    }, finding.desc);
  })));else return possibleFindings.map(function (findingElement) {
    return _react["default"].createElement(_ChecklistFieldCheckbox["default"], {
      code: findingElement.code,
      desc: findingElement.desc,
      checked: finding === findingElement.code,
      handleChange: handleChange,
      key: findingElement.code
    });
  });
}