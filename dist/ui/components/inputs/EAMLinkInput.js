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
import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from 'mdi-material-ui/OpenInNew';
import { Link } from 'react-router-dom';
var EAMLinkInput = /*#__PURE__*/function (_Component) {
  function EAMLinkInput() {
    _classCallCheck(this, EAMLinkInput);
    return _callSuper(this, EAMLinkInput, arguments);
  }
  _inherits(EAMLinkInput, _Component);
  return _createClass(EAMLinkInput, [{
    key: "render",
    value: function render() {
      var _this = this;
      // No value, no link
      if (!this.props.value) {
        return this.props.children;
      }
      var iconButtonStyle = {
        position: "absolute",
        top: this.props.top || 30,
        right: this.props.right || -2,
        backgroundColor: "transparent",
        width: 32,
        height: 32,
        zIndex: 100,
        padding: 0
      };
      var EAMLink;
      if (!this.props.isExternalLink) {
        EAMLink = function EAMLink(props) {
          return /*#__PURE__*/React.createElement(Link, _extends({
            to: _this.props.link + _this.props.value
          }, props));
        };
      } else {
        EAMLink = function EAMLink(props) {
          return /*#__PURE__*/React.createElement("a", _extends({
            href: _this.props.link + _this.props.value,
            target: '_blank'
          }, props));
        };
      }
      return /*#__PURE__*/React.createElement("div", {
        style: {
          position: "relative"
        }
      }, this.props.children, /*#__PURE__*/React.createElement(IconButton, {
        style: iconButtonStyle,
        component: EAMLink
      }, this.props.icon));
    }
  }]);
}(Component);
EAMLinkInput.defaultProps = {
  isExternalLink: false,
  icon: /*#__PURE__*/React.createElement(OpenInNewIcon, null)
};
export default EAMLinkInput;