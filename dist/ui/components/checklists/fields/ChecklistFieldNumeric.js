"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ChecklistFieldNumeric;

var _react = _interopRequireWildcard(require("react"));

var _labelUOMStyle;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var inputStyle = {
  width: "1%",
  flex: "1 1 auto",
  border: "1px solid #ced4da",
  padding: "5px 10px",
  fontSize: 16,
  transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  borderRadius: 4,
  backgroundColor: "#fff",
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  zIndex: 20
};
var labelUOMStyle = (_labelUOMStyle = {
  color: "black",
  fontSize: 15
}, _defineProperty(_labelUOMStyle, "color", "#495057"), _defineProperty(_labelUOMStyle, "textAlign", "center"), _defineProperty(_labelUOMStyle, "whiteSpace", "nowrap"), _defineProperty(_labelUOMStyle, "backgroundColor", "#e9ecef"), _defineProperty(_labelUOMStyle, "border", "1px solid #ced4da"), _defineProperty(_labelUOMStyle, "paddingLeft", 4), _defineProperty(_labelUOMStyle, "paddingRight", 4), _defineProperty(_labelUOMStyle, "borderTopRightRadius", 4), _defineProperty(_labelUOMStyle, "borderBottomRightRadius", 4), _defineProperty(_labelUOMStyle, "marginLeft", -1), _defineProperty(_labelUOMStyle, "zIndex", 10), _defineProperty(_labelUOMStyle, "display", "flex"), _defineProperty(_labelUOMStyle, "alignItems", "center"), _labelUOMStyle);
var outerStyle = {
  margin: 5,
  marginLeft: 17,
  width: "100%",
  display: "flex"
};

function ChecklistFieldNumeric(props) {
  var value = props.value,
      UOM = props.UOM,
      handleChange = props.handleChange;

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  return _react["default"].createElement("div", {
    style: outerStyle
  }, _react["default"].createElement("input", {
    style: inputStyle,
    onChange: function onChange(event) {
      return setInputValue(event.target.value);
    },
    value: inputValue,
    onBlur: function onBlur(event) {
      return value === event.target.value && handleChange(event.target.value);
    }
  }), _react["default"].createElement("div", {
    style: labelUOMStyle
  }, UOM));
}