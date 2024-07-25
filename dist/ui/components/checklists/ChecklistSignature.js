function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import WSChecklists from '../../../tools/WSChecklists';
import Grid from '@mui/material/Grid';
var modalStyle = {
  padding: '30px',
  textAlign: 'center'
};
var textStyle = {
  paddingTop: '6px'
};
var signatureTypes = {
  'PB01': 'Performer',
  'PB02': 'Performer 2 (Optional)',
  'RB01': 'Reviewer'
};
var ChecklistSignature = /*#__PURE__*/function (_Component) {
  function ChecklistSignature(props) {
    var _this;
    _classCallCheck(this, ChecklistSignature);
    _this = _callSuper(this, ChecklistSignature, [props]);
    _this.onEnter = function (ev) {
      if (ev.key === 'Enter') {
        _this.sign();
        ev.stopPropagation();
      }
    };
    _this.openDialogue = function () {
      _this.setState({
        open: true
      });
    };
    _this.onUsercodeTextFieldChange = function (textField) {
      _this.setState({
        username: textField.target.value
      });
    };
    _this.onPasswordTextFieldChange = function (textField) {
      _this.setState({
        password: textField.target.value
      });
    };
    _this.closeDialogue = function () {
      _this.setState({
        username: '',
        password: '',
        open: false
      });
    };
    _this.sign = function () {
      var signature = {
        workOrderCode: _this.props.workOrderCode,
        activityCodeValue: _this.props.activityCode,
        userCode: _this.state.username ? _this.state.username.toUpperCase() : null,
        password: _this.state.password,
        signatureType: _this.props.signature.type
      };
      WSChecklists.esignChecklist(signature).then(function (response) {
        _this.props.setSignature(_this.props.activityCode, _this.props.signature.type, response.body.data.signer, response.body.data.timeStamp);
      })["catch"](function (err) {
        _this.props.showError(err.response.body.errors[0].message);
      })["finally"](_this.closeDialogue);
    };
    _this.state = {
      open: false,
      username: null,
      password: null
    };
    return _this;
  }
  _inherits(ChecklistSignature, _Component);
  return _createClass(ChecklistSignature, [{
    key: "signatureTypeSwitch",
    value: function signatureTypeSwitch(type) {
      return signatureTypes[type];
    }
  }, {
    key: "render",
    value: function render() {
      var signature = this.props.signature;
      var label = signature.responsibilityDescription ? signature.responsibilityDescription : signatureTypes[signature.type];
      var dialog = /*#__PURE__*/React.createElement(Paper, {
        elevation: 3,
        style: modalStyle
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '25px'
        }
      }, "E-Signature"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextField, {
        required: true,
        autoFocus: true,
        onChange: this.onUsercodeTextFieldChange,
        id: "standard-required",
        label: "Username",
        autoComplete: "off",
        onKeyDown: this.onEnter
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextField, {
        required: true,
        onChange: this.onPasswordTextFieldChange,
        id: "standard-password-input",
        label: "Pasword",
        type: "password",
        autoComplete: "off",
        onKeyDown: this.onEnter
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
        type: "submit",
        onClick: this.closeDialogue
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        onClick: this.sign,
        color: "primary"
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
        onClick: this.openDialogue,
        disabled: this.props.disabled,
        style: {
          paddingTop: '11px',
          "float": 'right'
        }
      }, "Sign"), /*#__PURE__*/React.createElement(Dialog, {
        open: this.state.open
      }, dialog))));
    }
  }]);
}(Component);
export { ChecklistSignature as default };