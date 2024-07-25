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
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import EAMBaseInput from "./EAMBaseInput";
var EAMRadio = /*#__PURE__*/function (_EAMBaseInput) {
  function EAMRadio() {
    var _this;
    _classCallCheck(this, EAMRadio);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, EAMRadio, [].concat(args));
    _this.generateRadioButtons = function (values) {
      if (values) {
        return values.map(function (value) {
          return /*#__PURE__*/React.createElement(FormControlLabel, {
            key: value.code,
            value: value.code,
            control: /*#__PURE__*/React.createElement(Radio, {
              color: "primary"
            }),
            label: value.desc
          });
        });
      }
    };
    return _this;
  }
  _inherits(EAMRadio, _EAMBaseInput);
  return _createClass(EAMRadio, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props$elementIn = this.props.elementInfo,
        elementId = _this$props$elementIn.elementId,
        text = _this$props$elementIn.text,
        nullable = _this$props$elementIn.nullable;
      if (this.isHidden()) {
        return /*#__PURE__*/React.createElement("div", null);
      }
      return /*#__PURE__*/React.createElement(FormControl, {
        fullWidth: true,
        margin: "normal",
        required: this.isRequired(),
        style: {
          marginBottom: '0px'
        }
      }, /*#__PURE__*/React.createElement(FormLabel, {
        component: "legend"
      }, text), /*#__PURE__*/React.createElement(RadioGroup, {
        "aria-label": elementId,
        name: elementId,
        value: this.props.value || '',
        onChange: function onChange(event) {
          return _this2.onChangeHandler(_this2.props.valueKey, event.target.value);
        },
        style: {
          flexDirection: 'row'
        }
      }, this.generateRadioButtons(this.props.values)));
    }
  }]);
}(EAMBaseInput);
export { EAMRadio as default };