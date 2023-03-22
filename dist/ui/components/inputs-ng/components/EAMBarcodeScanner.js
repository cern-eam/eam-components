function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useState, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";
import IconButton from "@mui/material/IconButton";
import { BarcodeScan, Devices } from "mdi-material-ui";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EAMSelect from '../EAMSelect';
var EAMBarcodeScanner = function EAMBarcodeScanner(props) {
  var onChange = props.onChange;
  var codeReader = useRef(new BrowserMultiFormatReader());
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showBarcodeButton = _useState4[0],
    setShowBarcodeButton = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    videoInputDevices = _useState6[0],
    setVideoInputDevices = _useState6[1];
  var _useState7 = useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    currentDevice = _useState8[0],
    setCurrentDevice = _useState8[1];
  useEffect(function () {
    navigator.mediaDevices?.enumerateDevices().then(function (deviceCount) {
      if (deviceCount.length > 0 && navigator.mediaDevices.getUserMedia) {
        setShowBarcodeButton(true);
      }
    });
  }, []);
  var handleClickOpen = function handleClickOpen() {
    setOpen(true);
  };
  var handleClose = function handleClose() {
    setOpen(false);
    codeReader.current.reset();
  };
  var startScanner = function startScanner() {
    navigator.mediaDevices.getUserMedia({
      video: true
    }).then(function (data) {
      navigator.mediaDevices.enumerateDevices().then(function (devices) {
        if (devices.length > 0) {
          var videoDevices = devices.filter(function (d) {
            return d.kind === 'videoinput';
          });
          var device = localStorage.getItem("videoInputDevice");
          var selectedDevice = videoDevices.find(function (d) {
            return d?.deviceId === device;
          })?.deviceId ?? videoDevices[0].deviceId;
          setVideoInputDevices(videoDevices);
          setCurrentDevice(selectedDevice);
          startDecoding(selectedDevice);
        }
      })["catch"](function (error) {
        console.error(error);
        handleClose();
      });
    })["catch"](function (error) {
      console.error(error);
      handleClose();
    });
  };
  var startDecoding = function startDecoding(device) {
    codeReader.current.decodeFromInputVideoDevice(device, "video").then(function (result) {
      onDetectedCallback(result.text);
      codeReader.current.reset();
      handleClose();
    })["catch"](function (err) {
      return console.error(err);
    });
  };
  var handleDeviceChange = function handleDeviceChange(device) {
    codeReader.current.reset();
    setCurrentDevice(device);
    startDecoding(device);
    localStorage.setItem("videoInputDevice", device);
  };
  var onDetectedCallback = function onDetectedCallback(result) {
    onChange(result);
    setOpen(false);
  };

  // Display just the children when no support for user media
  if (!showBarcodeButton) {
    return React.Fragment;
  }

  // Active quagga when support for user media
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IconButton, {
    onClick: handleClickOpen
  }, /*#__PURE__*/React.createElement(BarcodeScan, null)), /*#__PURE__*/React.createElement(Dialog, {
    TransitionProps: {
      onEntered: function onEntered() {
        return startScanner(onDetectedCallback, handleClose);
      }
    },
    fullScreen: true,
    open: open,
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, videoInputDevices?.length > 1 ? /*#__PURE__*/React.createElement(DialogTitle, null, /*#__PURE__*/React.createElement(EAMSelect, {
    label: "Choose the camera",
    value: currentDevice,
    required: true,
    onChange: function onChange(value) {
      return handleDeviceChange(value.code);
    },
    renderValue: function renderValue(value) {
      return value.desc || value.code;
    },
    selectOnlyMode: true,
    options: videoInputDevices.map(function (videoInputDevice) {
      return {
        code: videoInputDevice.deviceId,
        desc: videoInputDevice.label
      };
    })
  })) : null, /*#__PURE__*/React.createElement(DialogContent, {
    sx: {
      display: "flex",
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
      flex: 1
    }
  })), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleClose,
    color: "primary",
    autoFocus: true
  }, "Cancel"))));
};
export default EAMBarcodeScanner;