"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _EDMSUtils = require("../utils/EDMSUtils");

var _DescriptionStrip = _interopRequireDefault(require("./DescriptionStrip"));

var _reactImageGallery = _interopRequireDefault(require("react-image-gallery"));

require("./edmsgalleria.css");

var _ChevronLeft = _interopRequireDefault(require("mdi-material-ui/ChevronLeft"));

var _ChevronRight = _interopRequireDefault(require("mdi-material-ui/ChevronRight"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EDMSGalleria = /*#__PURE__*/function (_React$Component) {
  _inherits(EDMSGalleria, _React$Component);

  function EDMSGalleria() {
    _classCallCheck(this, EDMSGalleria);

    return _possibleConstructorReturn(this, _getPrototypeOf(EDMSGalleria).apply(this, arguments));
  }

  _createClass(EDMSGalleria, [{
    key: "generateImagesList",
    value: function generateImagesList() {
      var documentList = this.props.documentList;
      return documentList.reduce(function (images, document) {
        return images.concat(document.files.map(function (file) {
          return {
            original: (0, _EDMSUtils.getEDMSFileUrl)(file),
            thumbnail: (0, _EDMSUtils.getEDMSFileUrl)(file),
            description: (0, _DescriptionStrip["default"])(file)
          };
        }));
      }, []);
    }
  }, {
    key: "renderLeftNav",
    value: function renderLeftNav(onClick, disabled) {
      return _react["default"].createElement(_ChevronLeft["default"], {
        className: "image-gallery-left-nav",
        onClick: onClick
      });
    }
  }, {
    key: "renderRightNav",
    value: function renderRightNav(onClick, disabled) {
      return _react["default"].createElement(_ChevronRight["default"], {
        className: "image-gallery-right-nav",
        onClick: onClick
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.documentList) return _react["default"].createElement("div", null);
      var images = this.generateImagesList();
      return _react["default"].createElement("div", {
        style: {
          width: "100%",
          marginTop: 0
        }
      }, _react["default"].createElement(_reactImageGallery["default"], {
        showPlayButton: false,
        showFullscreenButton: false,
        items: images,
        renderLeftNav: this.renderLeftNav,
        renderRightNav: this.renderRightNav
      }));
    }
  }]);

  return EDMSGalleria;
}(_react["default"].Component);

exports["default"] = EDMSGalleria;