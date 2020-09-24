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

var _require = require("react-table"),
    defaultGroupByFn = _require.defaultGroupByFn;

var modalStyle = {
  // width: '600px',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // position: 'absolute',
  // backgroundColor: 'white',
  // outline: '0',
  padding: '30px',
  textAlign: 'center'
};

var ChecklistSignature = /*#__PURE__*/function (_Component) {
  _inherits(ChecklistSignature, _Component);

  var _super = _createSuper(ChecklistSignature);

  function ChecklistSignature(props) {
    var _this;

    _classCallCheck(this, ChecklistSignature);

    _this = _super.call(this, props);

    _this.openDialogue = function () {
      // console.log("Called");
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
      //call WS with woCode and actCode, signatureType (from props) and credentials then
      var signature = {
        workOrderCode: _this.props.workOrderCode,
        activityCodeValue: _this.props.activityNumber,
        userCode: _this.state.username,
        password: _this.state.password,
        signatureType: _this.props.signature.type
      };

      _WSChecklists["default"].esignChecklist(signature).then(_this.closeDialogue());
    };

    _this.cancel = function () {
      _this.closeDialogue();
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
      switch (type) {
        case 'PB01':
          return 'PERFORMER';

        case 'PB02':
          return 'PERFORMER 2';

        case 'RB01':
          return 'REVIEWER';

        default:
          return 'UNKNOWN SIGNATURE TYPE';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var name;
      if (this.props.signature.name) name = this.props.signature.name;else name = '_____________';

      var dialog = /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        elevation: 3,
        style: modalStyle
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        required: true,
        onChange: this.onUsercodeTextFieldChange,
        id: "standard-required",
        label: "Usercode"
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        required: true,
        onChange: this.onPasswordTextFieldChange,
        id: "standard-password-input",
        label: "Pasword",
        type: "password"
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this.cancel
      }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this.sign
      }, "Sign")));

      return /*#__PURE__*/_react["default"].createElement("div", null, this.signatureTypeSwitch(this.props.signature.type), ": ", name, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        color: "primary",
        onClick: this.openDialogue
      }, "Sign as ", this.signatureTypeSwitch(this.props.signature.type)), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
        open: this.state.open
      }, dialog));
    }
  }]);

  return ChecklistSignature;
}(_react.Component);

exports["default"] = ChecklistSignature;