function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useState, useRef } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';
import IconButton from '@mui/material/IconButton';
import { BarcodeScan } from 'mdi-material-ui';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

var EAMBarcodeScanner = function EAMBarcodeScanner(props) {
  var onChange = props.onChange;
  var codeReader = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showBarcodeButton = _useState4[0],
      setShowBarcodeButton = _useState4[1];

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
    codeReader.current = new BrowserMultiFormatReader();
    codeReader.current.listVideoInputDevices().then(function (videoInputDevices) {
      return startDecoding(videoInputDevices[0].deviceId);
    })["catch"](function (err) {
      return console.error(err);
    });
  };

  var startDecoding = function startDecoding() {
    codeReader.current.decodeFromInputVideoDevice(undefined, 'video').then(function (result) {
      onDetectedCallback(result.text);
      codeReader.current.reset();
      handleClose();
    })["catch"](function (err) {
      return console.error(err);
    });
  };

  var onDetectedCallback = function onDetectedCallback(result) {
    onChange(result);
    setOpen(false);
  }; // Display just the children when no support for user media


  if (!showBarcodeButton) {
    return React.Fragment;
  } // Active quagga when support for user media


  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IconButton, {
    onClick: handleClickOpen
  }, /*#__PURE__*/React.createElement(BarcodeScan, null)), /*#__PURE__*/React.createElement(Dialog, {
    TransitionProps: {
      onEntered: function onEntered() {
        return startScanner(onDetectedCallback, handleClose);
      }
    },
    open: open,
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React.createElement(DialogContent, {
    style: {
      maxWidth: 320,
      maxHeight: 320
    }
  }, /*#__PURE__*/React.createElement("video", {
    id: "video",
    width: "200",
    height: "200"
  })), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleClose,
    color: "primary",
    autoFocus: true
  }, "Cancel"))));
};

export default EAMBarcodeScanner;