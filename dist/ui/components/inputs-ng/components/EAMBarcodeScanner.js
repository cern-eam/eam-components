function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _awaitAsyncGenerator(e) { return new _OverloadYield(e, 0); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
  var onChange = props.onChange,
    rightAlign = props.rightAlign,
    applyExtraInformation = props.applyExtraInformation;
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
  var streamRef = useRef(null);
  var permisionStreamRef = useRef(null);
  var openRef = useRef(false);
  useEffect(function () {
    navigator.mediaDevices?.enumerateDevices().then(function (deviceCount) {
      if (deviceCount.length > 0 && navigator.mediaDevices.getUserMedia) {
        setShowBarcodeButton(true);
      }
    });
  }, []);
  var handleClickOpen = function handleClickOpen() {
    setOpen(true);
    openRef.current = true;
  };
  var handleClose = function handleClose() {
    setOpen(false);
    openRef.current = false;
    resetStreams();
  };
  var startScanner = function startScanner() {
    var devices, videoDevices, device, selectedDevice, _t;
    return _regeneratorAsync(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.n = 1;
          return _awaitAsyncGenerator(navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
          }));
        case 1:
          permisionStreamRef.current = _context.v;
          _context.p = 2;
          _context.n = 3;
          return _awaitAsyncGenerator(navigator.mediaDevices.enumerateDevices());
        case 3:
          devices = _context.v;
          resetStreams();
          if (!(devices.length > 0)) {
            _context.n = 4;
            break;
          }
          videoDevices = devices.filter(function (d) {
            return d.kind === 'videoinput';
          });
          device = localStorage.getItem("videoInputDevice");
          selectedDevice = videoDevices.find(function (d) {
            return d?.deviceId === device;
          })?.deviceId ?? videoDevices[0].deviceId;
          setVideoInputDevices(videoDevices);
          setCurrentDevice(selectedDevice);
          _context.n = 4;
          return _awaitAsyncGenerator(startDecoding(selectedDevice));
        case 4:
          _context.n = 6;
          break;
        case 5:
          _context.p = 5;
          _t = _context.v;
          console.error(_t);
        case 6:
          return _context.a(2);
      }
    }, null, null, [[2, 5]], Promise);
  };
  var startDecoding = function startDecoding(device) {
    var result, _t2;
    return _regeneratorAsync(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return _awaitAsyncGenerator(navigator.mediaDevices.getUserMedia({
            video: {
              deviceId: {
                exact: device
              }
            }
          }));
        case 1:
          streamRef.current = _context2.v;
          _context2.n = 2;
          return _awaitAsyncGenerator(codeReader.current.decodeOnceFromStream(streamRef.current, "video"));
        case 2:
          result = _context2.v;
          onDetectedCallback(result.text);
          handleClose();
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          console.error(_t2);
        case 4:
          _context2.p = 4;
          if (!openRef.current) resetStreams();
          return _context2.f(4);
        case 5:
          ;
        case 6:
          return _context2.a(2);
      }
    }, null, null, [[0, 3, 4, 5]], Promise);
  };
  var handleDeviceChange = function handleDeviceChange(device) {
    codeReader.current.reset();
    setCurrentDevice(device);
    startDecoding(device);
    localStorage.setItem("videoInputDevice", device);
  };
  var onDetectedCallback = function onDetectedCallback(result) {
    if (applyExtraInformation) {
      applyExtraInformation(result, true);
    } else {
      onChange(result);
    }
    setOpen(false);
  };

  // Display just the children when no support for user media
  if (!showBarcodeButton) {
    return React.Fragment;
  }
  var resetStreams = function resetStreams() {
    codeReader.current.reset();
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(function (track) {
        return track.stop();
      });
    }
    if (permisionStreamRef.current) {
      permisionStreamRef.current.getTracks().forEach(function (track) {
        return track.stop();
      });
    }
  };

  // Active quagga when support for user media
  return /*#__PURE__*/React.createElement("div", {
    style: {
      widght: 38,
      height: 38
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    sx: rightAlign ? {
      marginRight: '-8px'
    } : {},
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