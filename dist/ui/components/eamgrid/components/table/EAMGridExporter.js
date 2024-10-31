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
import React, { Component } from 'react';
import withStyles from '@mui/styles/withStyles';
import DownloadLink from "react-download-link";
import BlockUi from 'react-block-ui';
var styles = {
  button: {
    background: 'rgba(0, 0, 0, 0)',
    border: '10px',
    cursor: 'pointer',
    fontFamily: 'Roboto, sans-serif',
    height: '36px',
    '&:hover': {
      background: 'rgba(153,153,153,0.2)',
      border: '10px'
    },
    '&:focus': {
      border: 'none',
      outline: 'none'
    }
  }
};
var EAMGridExporter = /*#__PURE__*/function (_Component) {
  function EAMGridExporter() {
    _classCallCheck(this, EAMGridExporter);
    return _callSuper(this, EAMGridExporter, arguments);
  }
  _inherits(EAMGridExporter, _Component);
  return _createClass(EAMGridExporter, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return /*#__PURE__*/React.createElement(BlockUi, {
        tag: "div",
        blocking: this.props.exporterBlocked
      }, /*#__PURE__*/React.createElement(DownloadLink, {
        color: "primary",
        className: classes.button,
        filename: "exported_data.csv",
        label: "Export to CSV",
        exportFile: this.props.exportData,
        style: {
          textDecoration: 'none'
        },
        tagName: "button"
      }));
    }
  }]);
}(Component);
export default withStyles(styles)(EAMGridExporter);