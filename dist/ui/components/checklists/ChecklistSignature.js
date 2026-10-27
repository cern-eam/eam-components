function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import WSChecklists from '../../../tools/WSChecklists';
import Grid from '@mui/material/Grid';
import { broadcastException, broadcastMessage } from '../../../tools/MessageBroadcast';
var modalStyle = {
  padding: '28px 32px 20px',
  minWidth: 320,
  display: 'flex',
  flexDirection: 'column',
  gap: 16
};
var titleStyle = {
  fontSize: 22,
  fontWeight: 500,
  textAlign: 'center',
  marginBottom: 4
};
var actionsStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 8,
  marginTop: 8
};
var signatureTypes = {
  'PB01': 'Performer',
  'PB02': 'Performer 2 (Optional)',
  'RB01': 'Reviewer'
};
var ChecklistSignature = function ChecklistSignature(_ref) {
  var signature = _ref.signature,
    workOrderCode = _ref.workOrderCode,
    activityCode = _ref.activityCode,
    showError = _ref.showError,
    setSignature = _ref.setSignature,
    disabled = _ref.disabled,
    userCode = _ref.userCode;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    username = _useState4[0],
    setUsername = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    password = _useState6[0],
    setPassword = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    signAsMe = _useState8[0],
    setSignAsMe = _useState8[1];
  var usernameRef = useRef(null);
  var closeDialogue = function closeDialogue() {
    setUsername('');
    setPassword('');
    setSignAsMe(false);
    setOpen(false);
  };
  var sign = function sign() {
    if (!canSign) {
      return;
    }
    var payload = {
      workOrderCode: workOrderCode,
      activityCodeValue: activityCode,
      userCode: username.toUpperCase(),
      password: signAsMe ? null : password,
      signatureType: signature.type
    };
    WSChecklists.esignChecklist(payload).then(function (response) {
      setSignature(activityCode, signature.type, response.body.data.signer, response.body.data.timeStamp);
      broadcastMessage({
        code: 'CHECKLIST_SIGNED',
        data: response
      });
      closeDialogue();
    })["catch"](function (err) {
      showError(err.response.body.errors[0].message);
      broadcastException({
        code: 'CHECKLIST_SIGNED',
        message: err.response.body.errors[0].message
      });
    });
  };
  var onEnter = function onEnter(ev) {
    if (ev.key === 'Enter') {
      sign();
      ev.stopPropagation();
    }
  };
  var onSignAsMeChange = function onSignAsMeChange(event) {
    var checked = event.target.checked;
    setSignAsMe(checked);
    if (checked) {
      setPassword('');
    }
    setTimeout(function () {
      return usernameRef.current?.focus();
    }, 0);
  };
  var label = signature.responsibilityDescription ? signature.responsibilityDescription : signatureTypes[signature.type];
  var loginMatches = Boolean(userCode) && username.trim().toUpperCase() === userCode.toUpperCase();
  var canSign = signAsMe ? loginMatches : Boolean(username && password);
  var dialog = /*#__PURE__*/React.createElement(Paper, {
    elevation: 3,
    style: modalStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: titleStyle
  }, "E-Signature"), /*#__PURE__*/React.createElement(FormControlLabel, {
    sx: {
      ml: 0,
      mr: 0
    },
    control: /*#__PURE__*/React.createElement(Checkbox, {
      color: "primary",
      checked: signAsMe,
      onChange: onSignAsMeChange
    }),
    label: "Use my NICE login"
  }), /*#__PURE__*/React.createElement(TextField, {
    required: true,
    autoFocus: true,
    fullWidth: true,
    inputRef: usernameRef,
    onChange: function onChange(event) {
      return setUsername(event.target.value);
    },
    id: "standard-required",
    label: signAsMe ? 'Confirm your NICE login' : 'Username',
    value: username,
    autoComplete: "off",
    onKeyDown: onEnter
  }), /*#__PURE__*/React.createElement(TextField, {
    required: !signAsMe,
    fullWidth: true,
    onChange: function onChange(event) {
      return setPassword(event.target.value);
    },
    id: "standard-password-input",
    label: "Password",
    type: "password",
    value: password,
    autoComplete: "off",
    disabled: signAsMe,
    onKeyDown: onEnter
  }), /*#__PURE__*/React.createElement("div", {
    style: actionsStyle
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: closeDialogue
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    onClick: sign,
    color: "primary",
    disabled: !canSign
  }, "Sign")));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      borderTop: '1px dashed rgb(209, 211, 212)',
      minHeight: '40px',
      paddingTop: '4px',
      paddingLeft: '8px',
      paddingBottom: '3px'
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 1,
    className: "activityDetails"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 10,
    md: 10,
    lg: 10,
    style: {
      paddingTop: '6px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: '0.84rem',
      color: 'rgb(20, 88, 134)'
    }
  }, label), /*#__PURE__*/React.createElement(Grid, {
    style: {
      display: 'flex',
      paddingTop: '2px'
    },
    item: true,
    xs: 10,
    md: 10,
    lg: 10
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 6,
    md: 6,
    lg: 6
  }, signature.signer), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 4,
    md: 4,
    lg: 4
  }, signature.time))), signature.viewAsPerformer && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 2,
    md: 2,
    lg: 2
  }, /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    onClick: function onClick() {
      return setOpen(true);
    },
    disabled: disabled,
    style: {
      paddingTop: '11px',
      "float": 'right'
    }
  }, "Sign"), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: closeDialogue
  }, dialog))));
};
export default ChecklistSignature;