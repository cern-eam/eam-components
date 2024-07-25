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
import DocumentRow from "./DocumentRow";
var DocumentList = /*#__PURE__*/function (_Component) {
  function DocumentList() {
    var _this;
    _classCallCheck(this, DocumentList);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DocumentList, [].concat(args));
    _this.listStyle = {
      width: "100%",
      marginTop: 10
    };
    _this.headerStyle = {
      display: "flex",
      height: 40,
      alignItems: "center",
      color: "rgba(0, 0, 0, 0.54)",
      fontWeight: 500,
      borderBottom: "1px solid #e0e0e0"
    };
    _this.idStyle = {
      margin: 7,
      marginLeft: 10,
      width: 100,
      flex: "0 0 auto",
      fontWeight: 500
    };
    _this.titleStyle = {
      margin: 5,
      flexGrow: 1
    };
    _this.statusStyle = {
      margin: 5,
      width: 110,
      flex: "0 0 auto",
      display: 'flex'
    };
    _this.moreStyle = {
      width: 48,
      flex: "0 0 auto",
      display: 'flex'
    };
    return _this;
  }
  _inherits(DocumentList, _Component);
  return _createClass(DocumentList, [{
    key: "generateDocumentList",
    value: function generateDocumentList() {
      var _this2 = this;
      if (this.props.documents) {
        return this.props.documents.map(function (document, index) {
          return /*#__PURE__*/React.createElement(DocumentRow, {
            document: document,
            index: index,
            key: index,
            filesUploadHandler: _this2.props.filesUploadHandler
          });
        });
      } else {
        return /*#__PURE__*/React.createElement("div", null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        style: this.listStyle
      }, /*#__PURE__*/React.createElement("div", {
        style: this.headerStyle
      }, /*#__PURE__*/React.createElement("div", {
        style: this.moreStyle
      }), /*#__PURE__*/React.createElement("div", {
        style: this.idStyle
      }, "ID"), /*#__PURE__*/React.createElement("div", {
        style: this.titleStyle
      }, "Title"), /*#__PURE__*/React.createElement("div", {
        style: this.statusStyle
      }, "Status")), this.generateDocumentList());
    }
  }]);
}(Component);
export default DocumentList;