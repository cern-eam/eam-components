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
  _inherits(ChecklistSignature, _Component);
  var _super = _createSuper(ChecklistSignature);
  function ChecklistSignature(props) {
    var _this;
    _classCallCheck(this, ChecklistSignature);
    _this = _super.call(this, props);
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
  _createClass(ChecklistSignature, [{
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
  return ChecklistSignature;
}(Component);
export { ChecklistSignature as default };