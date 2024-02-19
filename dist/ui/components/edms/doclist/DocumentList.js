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
import React, { Component } from 'react';
import DocumentRow from "./DocumentRow";
var DocumentList = /*#__PURE__*/function (_Component) {
  _inherits(DocumentList, _Component);
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
  _createClass(DocumentList, [{
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
  return DocumentList;
}(Component);
export default DocumentList;