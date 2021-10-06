function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import Checkbox from '@material-ui/core/Checkbox';
import EAMBaseInput, { formStyles } from "./EAMBaseInput";
import EAMFormLabel from "./EAMFormLabel";
import { withStyles } from "@material-ui/core/styles/index";

var EAMCheckbox = /*#__PURE__*/function (_EAMBaseInput) {
  _inherits(EAMCheckbox, _EAMBaseInput);

  var _super = _createSuper(EAMCheckbox);

  function EAMCheckbox() {
    var _this;

    _classCallCheck(this, EAMCheckbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.onChangeHandler = function (event, checked) {
      var value = checked ? _this.props.trueValue : _this.props.falseValue;

      _this.props.updateProperty(_this.props.valueKey, value); //Extra function if needed


      if (_this.props.onChangeValue) {
        _this.props.onChangeValue(value);
      }
    };

    return _this;
  }

  _createClass(EAMCheckbox, [{
    key: "renderComponent",
    value: function renderComponent() {
      var _this2 = this;

      var _this$props = this.props,
          labelStyle = _this$props.labelStyle,
          elementInfo = _this$props.elementInfo,
          label = _this$props.label;
      return /*#__PURE__*/React.createElement("div", {
        className: this.props.classes.fieldContainer
      }, /*#__PURE__*/React.createElement(EAMFormLabel, {
        required: this.isRequired(),
        label: label || elementInfo && elementInfo.text,
        labelStyle: labelStyle,
        error: this.state.error
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/React.createElement(Checkbox, {
        color: "primary",
        checked: this.props.value === this.props.trueValue,
        value: '' + this.props.value,
        onChange: function onChange(event, checked) {
          return _this2.onChangeHandler(event, checked);
        },
        disabled: this.state.disabled || elementInfo && elementInfo.readonly
      })));
    }
  }]);

  return EAMCheckbox;
}(EAMBaseInput);

EAMCheckbox.defaultProps = {
  trueValue: 'true',
  falseValue: 'false'
};
export default withStyles(formStyles)(EAMCheckbox);