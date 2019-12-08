"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _mdiMaterialUi = require("mdi-material-ui");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _FileList = _interopRequireDefault(require("./FileList"));

var _MoreDetailsList = _interopRequireDefault(require("./MoreDetailsList"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _StatusBox = _interopRequireDefault(require("./StatusBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DocumentRow =
/*#__PURE__*/
function (_Component) {
  _inherits(DocumentRow, _Component);

  function DocumentRow() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DocumentRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DocumentRow)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      filesVisible: false
    };
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

      return _react["default"].createElement(_StatusBox["default"], {
        color: statusColor
      });
    };

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
    } //
    // DropZone handling
    //

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_reactDropzone["default"], {
        style: this.computeDropZoneStyle(),
        activeStyle: this.computeDropZoneActiveStyle(),
        onDrop: this.onFileDrop,
        disableClick: true,
        ref: function ref(dropzone) {
          return _this2.dropzone = dropzone;
        }
      }, _react["default"].createElement("div", null, _react["default"].createElement("div", {
        style: this.docStyle
      }, _react["default"].createElement("div", null, _react["default"].createElement(_IconButton["default"], {
        onClick: function onClick() {
          return _this2.setState({
            filesVisible: !_this2.state.filesVisible
          });
        },
        style: this.computeFilesButtonStyle()
      }, this.state.filesVisible ? _react["default"].createElement(_mdiMaterialUi.ChevronDown, null) : _react["default"].createElement(_mdiMaterialUi.ChevronRight, null))), _react["default"].createElement("div", {
        style: this.idStyle
      }, _react["default"].createElement("a", {
        style: this.idLinkStyle,
        href: this.props.document.url,
        target: "_blank",
        onClick: this.stopPropagation
      }, " ", this.props.document.edmsId + ' v.' + this.props.document.version, " ")), _react["default"].createElement("div", {
        style: this.titleStyle
      }, this.props.document.title), _react["default"].createElement("div", {
        style: this.statusStyle
      }, this.computeStatusBox(this.props.document.status), this.props.document.status)), this.state.filesVisible && _react["default"].createElement("div", {
        style: this.morePanelStyle
      }, this.props.document.properties.edms_property && _react["default"].createElement(_MoreDetailsList["default"], {
        details: this.props.document.properties.edms_property
      }), _react["default"].createElement(_FileList["default"], {
        files: this.props.document.files,
        dropzone: this.dropzone
      }))));
    }
  }]);

  return DocumentRow;
}(_react.Component);

var _default = DocumentRow;
exports["default"] = _default;