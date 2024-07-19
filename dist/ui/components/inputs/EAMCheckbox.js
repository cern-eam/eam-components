function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import EAMBaseInput, { formStyles } from "./EAMBaseInput";
import EAMFormLabel from "./EAMFormLabel";
import withStyles from '@mui/styles/withStyles';
var EAMCheckbox = /*#__PURE__*/function (_EAMBaseInput) {
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
  _inherits(EAMCheckbox, _EAMBaseInput);
  return _createClass(EAMCheckbox, [{
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
}(EAMBaseInput);
EAMCheckbox.defaultProps = {
  trueValue: 'true',
  falseValue: 'false'
};
export default withStyles(formStyles)(EAMCheckbox);