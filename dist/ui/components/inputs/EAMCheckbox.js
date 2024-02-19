function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import EAMBaseInput, { formStyles } from "./EAMBaseInput";
import EAMFormLabel from "./EAMFormLabel";
import withStyles from '@mui/styles/withStyles';
var EAMCheckbox = /*#__PURE__*/function (_EAMBaseInput) {
  _inherits(EAMCheckbox, _EAMBaseInput);
  function EAMCheckbox() {
    var _this;
    _classCallCheck(this, EAMCheckbox);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, EAMCheckbox, [].concat(args));
    _this.onChangeHandler = function (event, checked) {
      var value = checked ? _this.props.trueValue : _this.props.falseValue;
      _this.props.updateProperty(_this.props.valueKey, value);
      //Extra function if needed
      if (_this.props.onChangeValue) {
        _this.props.onChangeValue(value);
      }
    };
    return _this;
  }
  _createClass(EAMCheckbox, [{
    key: "renderComponent",
    value: function renderComponent() {
      var _this2 = this;
      var _this$props = this.props,
        labelStyle = _this$props.labelStyle,
        elementInfo = _this$props.elementInfo,
        label = _this$props.label;
      return /*#__PURE__*/React.createElement("div", {
        className: this.props.classes.fieldContainer
      }, /*#__PURE__*/React.createElement(EAMFormLabel, {
        required: this.isRequired(),
        label: label || elementInfo && elementInfo.text,
        labelStyle: labelStyle,
        error: this.state.error
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/React.createElement(Checkbox, {
        color: "primary",
        checked: this.props.value === this.props.trueValue,
        value: '' + this.props.value,
        onChange: function onChange(event, checked) {
          return _this2.onChangeHandler(event, checked);
        },
        disabled: this.state.disabled || elementInfo && elementInfo.readonly
      })));
    }
  }]);
  return EAMCheckbox;
}(EAMBaseInput);
EAMCheckbox.defaultProps = {
  trueValue: 'true',
  falseValue: 'false'
};
export default withStyles(formStyles)(EAMCheckbox);