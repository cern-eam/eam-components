"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _quagga = _interopRequireDefault(require("quagga"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _mdiMaterialUi = require("mdi-material-ui");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

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

var EAMBarcodeInput =
/*#__PURE__*/
function (_Component) {
  _inherits(EAMBarcodeInput, _Component);

  function EAMBarcodeInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EAMBarcodeInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EAMBarcodeInput)).call.apply(_getPrototypeOf2, [this].concat(args)));
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

      _quagga["default"].stop();
    };

    _this.onChangeHandler = function (value) {
      _this.props.updateProperty(_this.props.valueKey, value); //Extra function if needed


      if (_this.props.onChangeValue) {
        _this.props.onChangeValue(value);
      }
    };

    return _this;
  }

  _createClass(EAMBarcodeInput, [{
    key: "startScanner",
    value: function startScanner(mydiv, onDetectedCallback, handleClose) {
      _quagga["default"].init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: mydiv,
          constraints: {
            width: {
              min: 640
            },
            height: {
              min: 480
            },
            facingMode: "environment"
          }
        },
        locator: {
          patchSize: "medium",
          halfSample: true
        },
        locate: true,
        numOfWorkers: 4,
        frequency: 10,
        decoder: {
          readers: ['code_128_reader', 'code_39_reader'],
          multiple: false
        }
      }, function (err) {
        if (err) {
          console.log('error: ', err);
          handleClose();
          return;
        }

        _quagga["default"].start();
      });

      _quagga["default"].onProcessed(function (result) {
        var drawingCtx = _quagga["default"].canvas.ctx.overlay,
            drawingCanvas = _quagga["default"].canvas.dom.overlay;

        if (result) {
          if (result.boxes) {
            drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
            result.boxes.filter(function (box) {
              return box !== result.box;
            }).forEach(function (box) {
              _quagga["default"].ImageDebug.drawPath(box, {
                x: 0,
                y: 1
              }, drawingCtx, {
                color: "green",
                lineWidth: 2
              });
            });
          }

          if (result.box) {
            _quagga["default"].ImageDebug.drawPath(result.box, {
              x: 0,
              y: 1
            }, drawingCtx, {
              color: "#00F",
              lineWidth: 2
            });
          }

          if (result.codeResult && result.codeResult.code) {
            _quagga["default"].ImageDebug.drawPath(result.line, {
              x: 'x',
              y: 'y'
            }, drawingCtx, {
              color: 'red',
              lineWidth: 3
            });
          }
        }
      });

      _quagga["default"].onDetected(function (result) {
        if (result.codeResult.startInfo.error > 0.1) {} else {
          _quagga["default"].stop();

          onDetectedCallback(result.codeResult.code);
        }
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
      var _this2 = this;

      if (navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {}

      var style = {
        maxWidth: "320px",
        maxHeight: "320px",
        stretchOnPhone: true
      };
      var iconButtonStyle = {
        position: "absolute",
        top: this.props.top || 30,
        right: this.props.right || -2,
        backgroundColor: "white",
        width: 32,
        height: 32,
        zIndex: 100,
        padding: 0
      };
      return _react["default"].createElement("div", {
        style: {
          position: "relative"
        }
      }, this.props.children, _react["default"].createElement(_IconButton["default"], {
        style: iconButtonStyle,
        onClick: this.handleClickOpen.bind(this)
      }, _react["default"].createElement(_mdiMaterialUi.BarcodeScan, null)), _react["default"].createElement(_Dialog["default"], {
        onEntered: function onEntered() {
          return _this2.startScanner(_this2.mydiv, _this2.onDetectedCallback.bind(_this2), _this2.handleClose.bind(_this2));
        },
        open: this.state.open,
        onClose: this.handleClose,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description"
      }, _react["default"].createElement(_DialogContent["default"], {
        style: {
          maxWidth: 320,
          maxHeight: 320
        }
      }, _react["default"].createElement("div", {
        style: style,
        ref: function ref(mydiv) {
          return _this2.mydiv = mydiv;
        }
      })), _react["default"].createElement(_DialogActions["default"], null, _react["default"].createElement(_Button["default"], {
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