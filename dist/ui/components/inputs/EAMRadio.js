"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _EAMBaseInput2 = _interopRequireDefault(require("./EAMBaseInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var EAMRadio = /*#__PURE__*/function (_EAMBaseInput) {
  _inherits(EAMRadio, _EAMBaseInput);

  var _super = _createSuper(EAMRadio);

  function EAMRadio() {
    var _this;

    _classCallCheck(this, EAMRadio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.generateRadioButtons = function (values) {
      if (values) {
        return values.map(function (value) {
          return /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
            key: value.code,
            value: value.code,
            control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], {
              color: "primary"
            }),
            label: value.desc
          });
        });
      }
    };

    return _this;
  }

  _createClass(EAMRadio, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$elementIn = this.props.elementInfo,
          elementId = _this$props$elementIn.elementId,
          text = _this$props$elementIn.text,
          nullable = _this$props$elementIn.nullable;

      if (this.isHidden()) {
        return /*#__PURE__*/_react["default"].createElement("div", null);
      }

      return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
        fullWidth: true,
        margin: "normal",
        required: this.isRequired(),
        style: {
          marginBottom: '0px'
        }
      }, /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], {
        component: "legend"
      }, text), /*#__PURE__*/_react["default"].createElement(_RadioGroup["default"], {
        "aria-label": elementId,
        name: elementId,
        value: this.props.value || '',
        onChange: function onChange(event) {
          return _this2.onChangeHandler(_this2.props.valueKey, event.target.value);
        },
        style: {
          flexDirection: 'row'
        }
      }, this.generateRadioButtons(this.props.values)));
    }
  }]);

  return EAMRadio;
}(_EAMBaseInput2["default"]);

exports["default"] = EAMRadio;