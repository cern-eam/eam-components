"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _library = require("@zxing/library");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _mdiMaterialUi = require("mdi-material-ui");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var EAMBarcodeInput = /*#__PURE__*/function (_Component) {
  _inherits(EAMBarcodeInput, _Component);

  var _super = _createSuper(EAMBarcodeInput);

  function EAMBarcodeInput() {
    var _this;

    _classCallCheck(this, EAMBarcodeInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.codeReader = null;
    _this.state = {
      open: false,
      showBarcodeButton: false
    };

    _this.handleClickOpen = function () {
      _this.setState({
        open: true
      });
    };

    _this.handleClose = function () {
      _this.setState({
        open: false
      });

      _this.codeReader.reset();
    };

    _this.startDecoding = function () {
      _this.codeReader.decodeFromInputVideoDevice(undefined, 'video').then(function (result) {
        _this.onDetectedCallback(result.text);

        _this.codeReader.reset();

        _this.handleClose();
      })["catch"](function (err) {
        return console.error(err);
      });
    };

    _this.onChangeHandler = function (value) {
      _this.props.updateProperty(_this.props.valueKey, value);

      if (_this.props.onChangeValue) {
        _this.props.onChangeValue(value);
      }
    };

    return _this;
  }

  _createClass(EAMBarcodeInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var deviceCount;
      return regeneratorRuntime.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(navigator.mediaDevices.enumerateDevices());

            case 2:
              deviceCount = _context.sent;

              if (deviceCount.length > 0 && navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                this.setState({
                  showBarcodeButton: true
                });
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "startScanner",
    value: function startScanner() {
      var _this2 = this;

      this.codeReader = new _library.BrowserMultiFormatReader();
      this.codeReader.listVideoInputDevices().then(function (videoInputDevices) {
        return _this2.startDecoding(videoInputDevices[0].deviceId);
      })["catch"](function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "onDetectedCallback",
    value: function onDetectedCallback(result) {
      this.props.updateProperty(result);
      this.setState({
        open: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var iconButtonStyle = {
        position: 'absolute',
        top: this.props.top || 30,
        right: this.props.right || -2,
        backgroundColor: 'white',
        width: 32,
        height: 32,
        zIndex: 100,
        padding: 0
      }; // Display just the children when no support for user media

      if (!this.state.showBarcodeButton) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            position: 'relative'
          }
        }, this.props.children);
      } // Active quagga when support for user media


      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: 'relative'
        }
      }, this.props.children, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        style: iconButtonStyle,
        onClick: this.handleClickOpen.bind(this)
      }, /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.BarcodeScan, null)), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
        TransitionProps: {
          onEntered: function onEntered() {
            return _this3.startScanner(_this3.onDetectedCallback.bind(_this3), _this3.handleClose.bind(_this3));
          }
        },
        open: this.state.open,
        onClose: this.handleClose,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description"
      }, /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], {
        style: {
          maxWidth: 320,
          maxHeight: 320
        }
      }, /*#__PURE__*/_react["default"].createElement("video", {
        id: "video",
        width: "200",
        height: "200"
      })), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this.handleClose,
        color: "primary",
        autoFocus: true
      }, "Cancel"))));
    }
  }]);

  return EAMBarcodeInput;
}(_react.Component);

var _default = EAMBarcodeInput;
exports["default"] = _default;