function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
import Dropzone from 'react-dropzone';
import Tune from 'mdi-material-ui/Tune';
import ContentSaveOutline from 'mdi-material-ui/ContentSaveOutline';
import IconButton from '@mui/material/IconButton';
import FilePlus from 'mdi-material-ui/FilePlus';
import DocumentCreationOptions from "./DocumentCreationOptions";
import FileList from "../../FileList";
import EAMInput from "../../../inputs/EAMInput";
var DocumentCreation = /*#__PURE__*/function (_Component) {
  function DocumentCreation() {
    var _this;
    _classCallCheck(this, DocumentCreation);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DocumentCreation, [].concat(args));
    _this.state = {
      optionsVisible: false,
      files: [],
      title: "",
      type: "",
      description: ""
    };
    //
    // STYLES
    //
    _this.mainDivStyle = {
      borderBottom: "3px solid rgb(238, 238, 238)",
      borderTop: "2px solid rgb(238, 238, 238)"
    };
    _this.newDocStyle = {
      display: "flex",
      alignItems: "center"
    };
    _this.idStyle = {
      margin: 5,
      marginLeft: 10,
      width: 100,
      flex: "0 0 auto",
      fontWeight: 500
    };
    _this.titleStyle = {
      margin: 5,
      flexGrow: 1,
      display: "flex"
    };
    _this.dropZoneStyle = {
      border: "1px solid white"
    };
    _this.dropZoneActiveStyle = {
      border: "1px dashed #a7a7a7"
    };
    _this.inputStyle = {
      flex: "1 1 auto",
      border: "1px solid #ced4da",
      padding: "5px 10px",
      fontSize: 16,
      transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      borderRadius: 4,
      backgroundColor: "#fff"
    };
    //
    // HANDLERS
    //
    _this.optionsClickerHandler = function (event) {
      event.stopPropagation();
      _this.setState({
        optionsVisible: !_this.state.optionsVisible
      });
    };
    _this.createDocumentHandler = function (event) {
      var document = {
        title: _this.state.title,
        type: 'Report',
        description: _this.state.description
      };
      _this.props.createDocument(document, _this.state.files);
    };
    _this.onFileDrop = function (acceptedFiles, rejectedFiles) {
      _this.setState({
        files: acceptedFiles
      });
    };
    _this.setStateProperty = function (key, value) {
      _this.setState(_defineProperty({}, key, value));
    };
    return _this;
  }
  _inherits(DocumentCreation, _Component);
  return _createClass(DocumentCreation, [{
    key: "computeOptionsButtonStyle",
    value: function computeOptionsButtonStyle() {
      return {
        color: this.state.optionsVisible ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
      };
    }
  }, {
    key: "render",
    value:
    //
    // RENDER
    //
    function render() {
      var _this2 = this;
      return /*#__PURE__*/React.createElement("div", {
        style: this.mainDivStyle
      }, /*#__PURE__*/React.createElement(Dropzone, {
        style: this.dropZoneStyle,
        activeStyle: this.dropZoneActiveStyle,
        disableClick: true,
        onDrop: this.onFileDrop,
        ref: function ref(dropzone) {
          return _this2.dropzone = dropzone;
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: this.newDocStyle
      }, /*#__PURE__*/React.createElement("div", {
        style: this.titleStyle
      }, /*#__PURE__*/React.createElement(EAMInput, {
        label: "New Document:",
        placeholder: "Title",
        value: this.state.title,
        valueKey: "title",
        updateProperty: function updateProperty(key, value) {
          return _this2.setStateProperty(key, value);
        }
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IconButton, {
        onClick: function onClick() {
          return _this2.dropzone.open();
        }
      }, /*#__PURE__*/React.createElement(FilePlus, null))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IconButton, {
        onClick: this.createDocumentHandler,
        disabled: this.state.files.length === 0
      }, /*#__PURE__*/React.createElement(ContentSaveOutline, null)))), this.state.files.length > 0 && /*#__PURE__*/React.createElement(FileList, {
        files: this.state.files
      }), this.state.optionsVisible && /*#__PURE__*/React.createElement(DocumentCreationOptions, {
        onPropertyChange: this.setStateProperty,
        type: this.state.type,
        description: this.state.description
      })));
    }
  }]);
}(Component);
export default DocumentCreation;