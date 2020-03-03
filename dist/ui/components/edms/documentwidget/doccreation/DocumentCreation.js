"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _Tune = _interopRequireDefault(require("mdi-material-ui/Tune"));

var _ContentSaveOutline = _interopRequireDefault(require("mdi-material-ui/ContentSaveOutline"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _FilePlus = _interopRequireDefault(require("mdi-material-ui/FilePlus"));

var _DocumentCreationOptions = _interopRequireDefault(require("./DocumentCreationOptions"));

var _FileList = _interopRequireDefault(require("../../FileList"));

var _EAMInput = _interopRequireDefault(require("../../../inputs/EAMInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DocumentCreation = /*#__PURE__*/function (_Component) {
  _inherits(DocumentCreation, _Component);

  function DocumentCreation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DocumentCreation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DocumentCreation)).call.apply(_getPrototypeOf2, [this].concat(args)));
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
    //
    // RENDER
    //
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("div", {
        style: this.mainDivStyle
      }, _react["default"].createElement(_reactDropzone["default"], {
        style: this.dropZoneStyle,
        activeStyle: this.dropZoneActiveStyle,
        disableClick: true,
        onDrop: this.onFileDrop,
        ref: function ref(dropzone) {
          return _this2.dropzone = dropzone;
        }
      }, _react["default"].createElement("div", {
        style: this.newDocStyle
      }, _react["default"].createElement("div", {
        style: this.titleStyle
      }, _react["default"].createElement(_EAMInput["default"], {
        label: "New Document:",
        placeholder: "Title",
        value: this.state.title,
        valueKey: "title",
        updateProperty: function updateProperty(key, value) {
          return _this2.setStateProperty(key, value);
        }
      })), _react["default"].createElement("div", null, _react["default"].createElement(_IconButton["default"], {
        onClick: function onClick() {
          return _this2.dropzone.open();
        }
      }, _react["default"].createElement(_FilePlus["default"], null))), _react["default"].createElement("div", null, _react["default"].createElement(_IconButton["default"], {
        onClick: this.createDocumentHandler,
        disabled: this.state.files.length === 0
      }, _react["default"].createElement(_ContentSaveOutline["default"], null)))), this.state.files.length > 0 && _react["default"].createElement(_FileList["default"], {
        files: this.state.files
      }), this.state.optionsVisible && _react["default"].createElement(_DocumentCreationOptions["default"], {
        onPropertyChange: this.setStateProperty,
        type: this.state.type,
        description: this.state.description
      })));
    }
  }]);

  return DocumentCreation;
}(_react.Component);

var _default = DocumentCreation;
exports["default"] = _default;