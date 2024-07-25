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
import { BrowserMultiFormatReader } from '@zxing/library';
import IconButton from '@material-ui/core/IconButton';
import { BarcodeScan } from 'mdi-material-ui';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
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
      showBarcodeButton: false,
      videoInputDevices: [],
      currentCamera: ""
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
      var camera = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.currentCamera;
      _this.codeReader.decodeFromInputVideoDevice(camera, 'video').then(function (result) {
        _this.onDetectedCallback(result.text);
        _this.codeReader.reset();
        _this.handleClose();
      })["catch"](function (err) {
        return console.error(err);
      });
    };
    _this.handleCameraChange = function (camera) {
      _this.codeReader.reset();
      _this.setState({
        currentCamera: camera
      }, function () {
        return _this.startDecoding(camera);
      });
      localStorage.setItem("camera", camera);
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
      var _this2 = this;
      this.codeReader = new BrowserMultiFormatReader();
      this.codeReader.listVideoInputDevices().then(function (devices) {
        if (devices.length > 0) {
          var camera = localStorage.getItem("camera");
          var currentCamera = devices.find(function (device) {
            return device.deviceId === camera;
          })?.deviceId || devices[0].deviceId;
          _this2.setState({
            currentCamera: currentCamera,
            showBarcodeButton: true,
            videoInputDevices: devices
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.codeReader.reset();
    }
  }, {
    key: "startScanner",
    value: function startScanner() {
      this.startDecoding();
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
      };
      var _this$state = this.state,
        currentCamera = _this$state.currentCamera,
        videoInputDevices = _this$state.videoInputDevices;

      // Display just the children when no support for user media
      if (!this.state.showBarcodeButton) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative'
          }
        }, this.props.children);
      }

      // Active quagga when support for user media
      return /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative'
        }
      }, this.props.children, /*#__PURE__*/React.createElement(IconButton, {
        style: iconButtonStyle,
        onClick: this.handleClickOpen.bind(this)
      }, /*#__PURE__*/React.createElement(BarcodeScan, null)), /*#__PURE__*/React.createElement(Dialog, {
        TransitionProps: {
          onEntered: function onEntered() {
            return _this3.startScanner(_this3.onDetectedCallback.bind(_this3), _this3.handleClose.bind(_this3));
          }
        },
        open: this.state.open,
        fullScreen: true,
        onClose: this.handleClose,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description"
      }, videoInputDevices?.length > 1 && /*#__PURE__*/React.createElement(DialogTitle, null, /*#__PURE__*/React.createElement(TextField, {
        value: currentCamera,
        onChange: function onChange(e) {
          return _this3.handleCameraChange(e.target.value);
        },
        select: true,
        label: "Choose the camera",
        style: {
          minWidth: 250
        }
      }, videoInputDevices.map(function (videoInputDevice) {
        return /*#__PURE__*/React.createElement(MenuItem, {
          key: videoInputDevice.deviceId,
          value: videoInputDevice.deviceId
        }, videoInputDevice.label);
      }))), /*#__PURE__*/React.createElement(DialogContent, {
        style: {
          padding: 0
        }
      }, /*#__PURE__*/React.createElement("video", {
        autoPlay: true,
        muted: true,
        playsInline: true,
        id: "video",
        style: {
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          height: "100%"
        }
      })), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
        onClick: this.handleClose,
        color: "primary",
        autoFocus: true
      }, "Cancel"))));
    }
  }]);
  return EAMBarcodeInput;
}(Component);
export default EAMBarcodeInput;