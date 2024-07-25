function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import React, { Component } from 'react';
import { ChevronDown, ChevronRight } from 'mdi-material-ui';
import IconButton from '@material-ui/core/IconButton';
import FileList from './FileList';
import MoreDetailsList from './MoreDetailsList';
import Dropzone from 'react-dropzone';
import StatusBox from "./StatusBox";
var DocumentRow = /*#__PURE__*/function (_Component) {
  _inherits(DocumentRow, _Component);
  var _super = _createSuper(DocumentRow);
  function DocumentRow() {
    var _this;
    _classCallCheck(this, DocumentRow);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
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
  _createClass(DocumentRow, [{
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
  return DocumentRow;
}(Component);
export default DocumentRow;