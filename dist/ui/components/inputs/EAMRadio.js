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
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import EAMBaseInput from "./EAMBaseInput";
var EAMRadio = /*#__PURE__*/function (_EAMBaseInput) {
  _inherits(EAMRadio, _EAMBaseInput);
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
  _createClass(EAMRadio, [{
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
  return EAMRadio;
}(EAMBaseInput);
export { EAMRadio as default };