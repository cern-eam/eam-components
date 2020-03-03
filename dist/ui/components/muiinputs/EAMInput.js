"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _EAMBaseInput2 = _interopRequireDefault(require("./EAMBaseInput"));

var _EAMTextField = _interopRequireDefault(require("./EAMTextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EAMInput = /*#__PURE__*/function (_EAMBaseInput) {
  _inherits(EAMInput, _EAMBaseInput);

  function EAMInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EAMInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EAMInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.init = function (props) {
      return _this.setValue(props.value || '');
    };

    _this.onLoseFocus = function () {
      //TODO prep input (e.g. uppercase)
      _this.onChangeHandler(_this.state.value);
    };

    return _this;
  }

  _createClass(EAMInput, [{
    key: "renderComponent",
    value: function renderComponent() {
      var _this2 = this;

      var elementInfo = this.props.elementInfo;
      return _react["default"].createElement(_EAMTextField["default"], {
        disabled: this.state.disabled || elementInfo && elementInfo.readonly,
        error: this.state.error,
        helperText: this.state.helperText,
        required: this.isRequired(),
        label: elementInfo && elementInfo.text,
        value: this.state.value,
        onChange: function onChange(event) {
          return _this2.setValue(event.target.value);
        },
        onBlur: this.onLoseFocus,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }]);

  return EAMInput;
}(_EAMBaseInput2["default"]);

var _default = EAMInput;
exports["default"] = _default;