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
import IconButton from '@mui/material/IconButton';
import ImageFilter from 'mdi-material-ui/ImageFilter';
import FormatListBulleted from 'mdi-material-ui/FormatListBulleted';
import PlusBox from 'mdi-material-ui/PlusBox';
import OpenInNewIcon from 'mdi-material-ui/OpenInNew';
var EDMSWidgetToolbar = /*#__PURE__*/function (_Component) {
  function EDMSWidgetToolbar() {
    var _this;
    _classCallCheck(this, EDMSWidgetToolbar);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, EDMSWidgetToolbar, [].concat(args));
    _this.mainDivStyle = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid rgb(238, 238, 238)"
    };
    _this.separatorStyle = {
      flex: "1 1 auto"
    };
    _this.computeDocumentCreationStyle = function () {
      return {
        color: _this.props.documentCreationVisible ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
      };
    };
    _this.computeGalleriaButtonStyle = function () {
      return {
        color: _this.props.currentView === 'GALLERIA' ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
      };
    };
    _this.computeDoclistButtonStyle = function () {
      return {
        color: _this.props.currentView === 'DOCLIST' ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
      };
    };
    return _this;
  }
  _inherits(EDMSWidgetToolbar, _Component);
  return _createClass(EDMSWidgetToolbar, [{
    key: "linkClickHandler",
    value: function linkClickHandler() {
      window.open(this.props.link, '_blank');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        style: this.mainDivStyle
      }, this.props.link && /*#__PURE__*/React.createElement(IconButton, {
        onClick: this.linkClickHandler.bind(this),
        style: {
          color: "#00aaff"
        }
      }, /*#__PURE__*/React.createElement(OpenInNewIcon, null)), !this.props.documentCreationDisabled && /*#__PURE__*/React.createElement(IconButton, {
        onClick: this.props.documentCreationHandler,
        style: this.computeDocumentCreationStyle()
      }, /*#__PURE__*/React.createElement(PlusBox, null)), /*#__PURE__*/React.createElement("div", {
        style: this.separatorStyle
      }), /*#__PURE__*/React.createElement(IconButton, {
        onClick: this.props.doclistClickHandler,
        style: this.computeDoclistButtonStyle()
      }, /*#__PURE__*/React.createElement(FormatListBulleted, null)), /*#__PURE__*/React.createElement(IconButton, {
        onClick: this.props.galleriaClickHandler,
        style: this.computeGalleriaButtonStyle()
      }, /*#__PURE__*/React.createElement(ImageFilter, null)));
    }
  }]);
}(Component);
export default EDMSWidgetToolbar;