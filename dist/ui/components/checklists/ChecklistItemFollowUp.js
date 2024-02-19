function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
import React, { Component } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
var ChecklistItemFollowUp = /*#__PURE__*/function (_Component) {
  _inherits(ChecklistItemFollowUp, _Component);
  function ChecklistItemFollowUp() {
    var _this;
    _classCallCheck(this, ChecklistItemFollowUp);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ChecklistItemFollowUp, [].concat(args));
    _this.mainStyle = {
      flex: "1",
      display: "flex",
      marginLeft: 10
    };
    _this.followUpWOCodeStyle = {
      paddingLeft: '8px',
      paddingRight: '16px',
      fontSize: '12px'
    };
    _this.handleChange = function (event) {
      // invert the input since we are using an onMouseDown/onTouchStart handler, before the input is changed
      _this.props.onChange(_objectSpread({}, _this.props.checklistItem, {
        followUp: !event.target.checked
      }));
    };
    return _this;
  }
  _createClass(ChecklistItemFollowUp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        checklistItem = _this$props.checklistItem,
        getWoLink = _this$props.getWoLink;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 2
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: this.mainStyle
      }, /*#__PURE__*/React.createElement(FormControlLabel, {
        control: checklistItem.followUpWorkOrder ? /*#__PURE__*/React.createElement("div", {
          style: this.followUpWOCodeStyle
        }, /*#__PURE__*/React.createElement(Link, {
          to: getWoLink(checklistItem.followUpWorkOrder),
          target: "_blank"
        }, checklistItem.followUpWorkOrder)) : /*#__PURE__*/React.createElement(Checkbox, {
          color: "primary",
          checked: checklistItem.followUp === '+' || checklistItem.followUp === true,
          disabled: Boolean(checklistItem.followUpWorkOrder) || this.props.disabled,
          onMouseDown: this.handleChange,
          onTouchStart: this.handleChange
        }),
        labelPlacement: "start",
        label: "Follow-up"
      })));
    }
  }]);
  return ChecklistItemFollowUp;
}(Component);
export { ChecklistItemFollowUp as default };