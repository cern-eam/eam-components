function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
import Icon from '@mui/material/Icon';
import { format } from 'date-fns';
import parse from "date-fns/parse";
import { DatePicker, DateTimePicker } from '@mui/x-date-pickers';
import PropTypes from 'prop-types';
import React from 'react';
import EAMBaseInput from './EAMBaseInput';
import EAMTextField from './EAMTextField';
import EventIcon from '@mui/icons-material/Event';
import { InputAdornment, IconButton } from "@mui/material";
var DefaultEndAdornment = function DefaultEndAdornment(props) {
  return /*#__PURE__*/React.createElement(InputAdornment, {
    position: "end"
  }, props.endAdornment ? props.endAdornment : '', /*#__PURE__*/React.createElement(IconButton, {
    size: "small"
  }, /*#__PURE__*/React.createElement(EventIcon, null)));
};
var EAMDatePicker = /*#__PURE__*/function (_EAMBaseInput) {
  function EAMDatePicker() {
    var _this;
    _classCallCheck(this, EAMDatePicker);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, EAMDatePicker, [].concat(args));
    _this.init = function (props) {
      _this.setValue(_this.convert(props.value));
    };
    /** Always returns a Date from the value provided */
    _this.readValue = function (value) {
      return value instanceof Date ? value : typeof value === "string" && value.length ? parse(value.substring(0, _this.props.dateFormatValue.length), _this.props.dateFormatValue, new Date()) : typeof value === "number" ? new Date(value) : null;
    };
    /* Reads the Date it receives to the format wanted (TIMESTAMP or FORMATTED STRING) */
    _this.readDate = function (date) {
      return !date ? _this.props.timestamp ? null : '' : _this.props.timestamp ? date.getTime() : format(date, _this.props.dateFormatValue);
    };
    _this.convert = function (value) {
      return _this.readDate(_this.readValue(value || ''));
    };
    return _this;
  }
  _inherits(EAMDatePicker, _EAMBaseInput);
  return _createClass(EAMDatePicker, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.value !== nextProps.value || this.state.error !== nextState.error || this.state.helperText !== nextState.helperText || this.state.disabled !== nextState.disabled || JSON.stringify(this.props.elementInfo || {}) !== JSON.stringify(nextProps.elementInfo || {});
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var value = this.props.value;
      if (value instanceof Date || typeof value === 'string' && this.props.timestamp || typeof value === 'number' && !this.props.timestamp) {
        this.onChangeHandler(this.convert(value));
      }
    }
  }, {
    key: "getPickerProps",
    value: function getPickerProps(state, props) {
      var _this2 = this;
      var elementInfo = props.elementInfo,
        dateFormatDisplay = props.dateFormatDisplay,
        value = props.value;
      var helperText = state.helperText,
        error = state.error,
        disabled = state.disabled;
      return {
        inputadornmentprops: {
          style: {
            marginRight: -12
          }
        },
        error: error,
        helperText: helperText,
        disabled: disabled || elementInfo && elementInfo.readonly,
        required: this.isRequired(),
        clearable: true,
        value: this.readValue(value),
        // Always formats the value. In EDGE and IE, the new Date() has a different behavior than in Chrome and Firefox
        onChange: function onChange(str) {
          return _this2.onChangeHandler(_this2.convert(str));
        },
        format: dateFormatDisplay,
        label: elementInfo && elementInfo.text,
        leftArrowIcon: /*#__PURE__*/React.createElement(Icon, null, " keyboard_arrow_left "),
        rightArrowIcon: /*#__PURE__*/React.createElement(Icon, null, " keyboard_arrow_right "),
        renderInput: function renderInput(props) {
          return /*#__PURE__*/React.createElement(EAMTextField, props);
        }
      };
    }
  }, {
    key: "renderComponent",
    value: function renderComponent() {
      var _this$props = this.props,
        showTime = _this$props.showTime,
        endAdornment = _this$props.endAdornment;
      var pickerProps = this.getPickerProps(this.state, this.props);
      return showTime ? /*#__PURE__*/React.createElement(DateTimePicker, _extends({}, pickerProps, {
        ampm: false,
        InputProps: {
          endAdornment: /*#__PURE__*/React.createElement(DefaultEndAdornment, {
            endAdornment: endAdornment
          })
        }
      })) : /*#__PURE__*/React.createElement(DatePicker, _extends({}, pickerProps, {
        InputProps: {
          endAdornment: /*#__PURE__*/React.createElement(DefaultEndAdornment, {
            endAdornment: endAdornment
          })
        }
      }));
    }
  }]);
}(EAMBaseInput);
export { EAMDatePicker as default };
EAMDatePicker.propTypes = {
  dateFormatDisplay: PropTypes.string.isRequired,
  dateFormatValue: PropTypes.string.isRequired,
  showTime: PropTypes.bool.isRequired
};
EAMDatePicker.defaultProps = {
  showTime: false
};