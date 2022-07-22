function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
  _inherits(DocumentCreation, _Component);

  var _super = _createSuper(DocumentCreation);

  function DocumentCreation() {
    var _this;

    _classCallCheck(this, DocumentCreation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      optionsVisible: false,
      files: [],
      title: "",
      type: "",
      description: ""
    };
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

  _createClass(DocumentCreation, [{
    key: "computeOptionsButtonStyle",
    value: function computeOptionsButtonStyle() {
      return {
        color: this.state.optionsVisible ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
      };
    } //
    // HANDLERS
    //

  }, {
    key: "render",
    value: //
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

  return DocumentCreation;
}(Component);

export default DocumentCreation;