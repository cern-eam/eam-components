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
import { ChevronDown, ChevronRight } from 'mdi-material-ui';
import IconButton from '@mui/material/IconButton';
import FileList from './FileList';
import MoreDetailsList from './MoreDetailsList';
import Dropzone from 'react-dropzone';
import StatusBox from "./StatusBox";
var DocumentRow = /*#__PURE__*/function (_Component) {
  function DocumentRow() {
    var _this;
    _classCallCheck(this, DocumentRow);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DocumentRow, [].concat(args));
    _this.state = {
      filesVisible: false
    };
    //
    // STYLES
    //
    _this.docStyle = {
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid #e0e0e0"
    };
    _this.idStyle = {
      margin: 7,
      marginLeft: 10,
      width: 100,
      flex: "0 0 auto"
    };
    _this.idLinkStyle = {
      textDecoration: 'none'
    };
    _this.titleStyle = {
      margin: 5,
      flexGrow: 1
    };
    _this.statusStyle = {
      margin: 5,
      width: 110,
      flex: "0 0 auto",
      display: 'flex',
      alignItems: "center"
    };
    _this.morePanelStyle = {
      backgroundColor: 'transparent',
      borderTop: '1px solid #e0e0e0',
      borderBottom: '2px solid #e0e0e0'
    };
    _this.computeDropZoneStyle = function () {
      return {
        border: "1px solid transparent",
        backgroundColor: _this.props.index % 2 ? 'rgb(250, 250, 250)' : 'white'
      };
    };
    _this.computeDropZoneActiveStyle = function () {
      return {
        border: "1px dashed #a7a7a7",
        backgroundColor: _this.props.index % 2 ? 'rgb(250, 250, 250)' : 'white'
      };
    };
    _this.computeStatusBox = function (status) {
      var statusColor = '';
      switch (status) {
        case 'In Work':
          statusColor = 'rgb(204, 0, 0)';
          break;
        case 'Draft For Discussion':
          statusColor = 'rgb(255, 240, 0)';
          break;
        case 'Released':
          statusColor = 'rgb(0, 204, 0)';
          break;
        default:
          statusColor = 'rgb(119, 119, 119)';
      }
      return /*#__PURE__*/React.createElement(StatusBox, {
        color: statusColor
      });
    };
    //
    // DropZone handling
    //
    _this.stopPropagation = function (event) {
      event.stopPropagation();
    };
    _this.onFileDrop = function (acceptedFiles, rejectedFiles) {
      if (acceptedFiles.length > 0) _this.props.filesUploadHandler(_this.props.document.edmsId, _this.props.document.version, acceptedFiles);
    };
    return _this;
  }
  _inherits(DocumentRow, _Component);
  return _createClass(DocumentRow, [{
    key: "computeFilesButtonStyle",
    value: function computeFilesButtonStyle() {
      if (this.props.document.files.length === 0) return {
        color: 'rgba(0, 0, 0, 0.20)'
      };else return {
        color: this.state.filesVisible ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React.createElement(Dropzone, {
        style: this.computeDropZoneStyle(),
        activeStyle: this.computeDropZoneActiveStyle(),
        onDrop: this.onFileDrop,
        disableClick: true,
        ref: function ref(dropzone) {
          return _this2.dropzone = dropzone;
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: this.docStyle
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IconButton, {
        onClick: function onClick() {
          return _this2.setState({
            filesVisible: !_this2.state.filesVisible
          });
        },
        style: this.computeFilesButtonStyle()
      }, this.state.filesVisible ? /*#__PURE__*/React.createElement(ChevronDown, null) : /*#__PURE__*/React.createElement(ChevronRight, null))), /*#__PURE__*/React.createElement("div", {
        style: this.idStyle
      }, /*#__PURE__*/React.createElement("a", {
        style: this.idLinkStyle,
        href: this.props.document.url,
        target: "_blank",
        onClick: this.stopPropagation
      }, " ", this.props.document.edmsId + ' v.' + this.props.document.version, " ")), /*#__PURE__*/React.createElement("div", {
        style: this.titleStyle
      }, this.props.document.title), /*#__PURE__*/React.createElement("div", {
        style: this.statusStyle
      }, this.computeStatusBox(this.props.document.status), this.props.document.status)), this.state.filesVisible && /*#__PURE__*/React.createElement("div", {
        style: this.morePanelStyle
      }, this.props.document.properties && this.props.document.properties.edms_property && /*#__PURE__*/React.createElement(MoreDetailsList, {
        details: this.props.document.properties.edms_property
      }), /*#__PURE__*/React.createElement(FileList, {
        files: this.props.document.files,
        dropzone: this.dropzone
      }))));
    }
  }]);
}(Component);
export default DocumentRow;