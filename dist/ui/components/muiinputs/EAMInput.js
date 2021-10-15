function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React from 'react';
import EAMBaseInput from './EAMBaseInput';
import EAMTextField from './EAMTextField';
import InputAdornment from '@material-ui/core/InputAdornment';

var EAMInput = /*#__PURE__*/function (_EAMBaseInput) {
  _inherits(EAMInput, _EAMBaseInput);

  var _super = _createSuper(EAMInput);

  function EAMInput() {
    var _this;

    _classCallCheck(this, EAMInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.init = function (props) {
      return _this.setValue(props.value || '');
    };

    _this.onLoseFocus = function () {
      //TODO prep input (e.g. uppercase)
      _this.onChangeHandler(_this.state.value);
    };

    _this.generateInputProps = function (props) {
      var InputProps = {};

      if (props.startAdornment) {
        InputProps["startAdornment"] = /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, props.startAdornment);
      }

      if (props.endAdornment) {
        InputProps["endAdornment"] = /*#__PURE__*/React.createElement(InputAdornment, {
          position: "end"
        }, props.endAdornment);
      }

      return {
        InputProps: InputProps
      };
    };

    return _this;
  }

  _createClass(EAMInput, [{
    key: "renderComponent",
    value: function renderComponent() {
      var _this2 = this;

      var elementInfo = this.props.elementInfo;
      return /*#__PURE__*/React.createElement(EAMTextField, _extends({
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
      }, this.generateInputProps(this.props)));
    }
  }]);

  return EAMInput;
}(EAMBaseInput);

export default EAMInput;