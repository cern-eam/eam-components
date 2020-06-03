"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ImageFilter = _interopRequireDefault(require("mdi-material-ui/ImageFilter"));

var _FormatListBulleted = _interopRequireDefault(require("mdi-material-ui/FormatListBulleted"));

var _PlusBox = _interopRequireDefault(require("mdi-material-ui/PlusBox"));

var _OpenInNew = _interopRequireDefault(require("mdi-material-ui/OpenInNew"));

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

var EDMSWidgetToolbar =
/*#__PURE__*/
function (_Component) {
  _inherits(EDMSWidgetToolbar, _Component);

  function EDMSWidgetToolbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EDMSWidgetToolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EDMSWidgetToolbar)).call.apply(_getPrototypeOf2, [this].concat(args)));
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

  _createClass(EDMSWidgetToolbar, [{
    key: "linkClickHandler",
    value: function linkClickHandler() {
      window.open(this.props.link, '_blank');
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        style: this.mainDivStyle
      }, this.props.link && _react["default"].createElement(_IconButton["default"], {
        onClick: this.linkClickHandler.bind(this),
        style: {
          color: "#00aaff"
        }
      }, _react["default"].createElement(_OpenInNew["default"], null)), !this.props.documentCreationDisabled && _react["default"].createElement(_IconButton["default"], {
        onClick: this.props.documentCreationHandler,
        style: this.computeDocumentCreationStyle()
      }, _react["default"].createElement(_PlusBox["default"], null)), _react["default"].createElement("div", {
        style: this.separatorStyle
      }), _react["default"].createElement(_IconButton["default"], {
        onClick: this.props.doclistClickHandler,
        style: this.computeDoclistButtonStyle()
      }, _react["default"].createElement(_FormatListBulleted["default"], null)), _react["default"].createElement(_IconButton["default"], {
        onClick: this.props.galleriaClickHandler,
        style: this.computeGalleriaButtonStyle()
      }, _react["default"].createElement(_ImageFilter["default"], null)));
    }
  }]);

  return EDMSWidgetToolbar;
}(_react.Component);

var _default = EDMSWidgetToolbar;
exports["default"] = _default;