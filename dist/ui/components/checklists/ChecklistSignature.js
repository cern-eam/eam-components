"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _WSChecklists = _interopRequireDefault(require("../../../tools/WSChecklists"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

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

var modalStyle = {
  padding: '30px',
  textAlign: 'center'
};
var textStyle = {
  paddingTop: '6px'
};
var signatureTypes = {
  'PB01': 'Performer',
  'PB02': 'Performer (Optional)',
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

      _WSChecklists["default"].esignChecklist(signature).then(function (response) {
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

      var dialog = /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        elevation: 3,
        style: modalStyle
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          fontSize: '25px'
        }
      }, "E-Signature"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        required: true,
        autoFocus: true,
        onChange: this.onUsercodeTextFieldChange,
        id: "standard-required",
        label: "Username",
        autoComplete: "off",
        onKeyDown: this.onEnter
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        required: true,
        onChange: this.onPasswordTextFieldChange,
        id: "standard-password-input",
        label: "Pasword",
        type: "password",
        autoComplete: "off",
        onKeyDown: this.onEnter
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        type: "submit",
        onClick: this.closeDialogue
      }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this.sign,
        color: "primary"
      }, "Sign")));

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          borderTop: '1px dashed rgb(209, 211, 212)',
          minHeight: '40px',
          paddingTop: '4px',
          paddingBottom: '3px'
        }
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 1,
        className: "activityDetails"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 10,
        md: 10,
        lg: 10,
        style: {
          paddingTop: '6px'
        }
      }, /*#__PURE__*/_react["default"].createElement("label", {
        style: {
          fontSize: '0.84rem',
          color: 'rgb(20, 88, 134)'
        }
      }, label), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        style: {
          display: 'flex',
          paddingTop: '2px'
        },
        item: true,
        xs: 10,
        md: 10,
        lg: 10
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 6,
        md: 6,
        lg: 6
      }, signature.signer), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 4,
        md: 4,
        lg: 4
      }, signature.time))), signature.viewAsPerformer && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 2,
        md: 2,
        lg: 2
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        color: "primary",
        onClick: this.openDialogue,
        disabled: this.props.disabled,
        style: {
          paddingTop: '11px',
          "float": 'right'
        }
      }, "Sign"), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
        open: this.state.open
      }, dialog))));
    }
  }]);

  return ChecklistSignature;
}(_react.Component);

exports["default"] = ChecklistSignature;