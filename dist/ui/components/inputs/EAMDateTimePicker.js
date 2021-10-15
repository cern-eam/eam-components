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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Icon } from '@material-ui/core';
import EAMBaseInput, { formStyles } from './EAMBaseInput';
import { format } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import parse from 'date-fns/parse';
import EAMFormLabel from "./EAMFormLabel";
import { withStyles } from "@material-ui/core/styles/index";

var styles = function styles(theme) {
  var defaultStyles = formStyles(theme);
  return _objectSpread({}, defaultStyles, {
    textFieldInput: _objectSpread({}, defaultStyles.textFieldInput, {
      padding: '0px 9px'
    })
  });
};
/**
 * DateTimePicker form field
 */


var EAMDateTimePicker = /*#__PURE__*/function (_EAMBaseInput) {
  _inherits(EAMDateTimePicker, _EAMBaseInput);

  var _super = _createSuper(EAMDateTimePicker);

  function EAMDateTimePicker() {
    _classCallCheck(this, EAMDateTimePicker);

    return _super.apply(this, arguments);
  }

  _createClass(EAMDateTimePicker, [{
    key: "readValue",
    value: function readValue(value) {
      if (value) {
        if (value instanceof Date) {
          return value;
        }

        return parse(value, Constants.DATETIME_FORMAT_VALUE, new Date());
      } else {
        return null;
      }
    }
  }, {
    key: "readDate",
    value: function readDate(date) {
      if (date) {
        return format(date, Constants.DATETIME_FORMAT_VALUE);
      } else {
        return '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var text = this.props.elementInfo.text;

      if (this.isHidden()) {
        return /*#__PURE__*/React.createElement("div", null);
      }

      var _this$props = this.props,
          labelStyle = _this$props.labelStyle,
          elementInfo = _this$props.elementInfo,
          label = _this$props.label,
          validate = _this$props.validate;
      return /*#__PURE__*/React.createElement("div", {
        className: this.props.classes.fieldContainer
      }, /*#__PURE__*/React.createElement(EAMFormLabel, {
        required: this.isRequired(),
        label: label || elementInfo && elementInfo.text,
        labelStyle: labelStyle,
        error: this.state.error
      }), /*#__PURE__*/React.createElement(MuiPickersUtilsProvider, {
        utils: DateFnsUtils
      }, /*#__PURE__*/React.createElement(DateTimePicker, {
        inputadornmentprops: {
          style: {
            marginRight: -12
          }
        },
        keyboard: "true",
        error: this.state.error,
        helperText: this.state.helperText,
        disabled: this.state.disabled || this.props.elementInfo.readonly,
        required: this.isRequired(),
        clearable: true,
        value: this.readValue(this.props.value),
        onChange: function onChange(date) {
          return _this.onChangeHandler(_this.props.valueKey, _this.readDate(date));
        },
        fullWidth: true,
        className: this.props.classes.textFieldInput,
        InputProps: {
          disableUnderline: true
        },
        format: Constants.DATETIME_FORMAT_DISPLAY,
        margin: "normal",
        leftArrowIcon: /*#__PURE__*/React.createElement(Icon, null, " keyboard_arrow_left "),
        rightArrowIcon: /*#__PURE__*/React.createElement(Icon, null, " keyboard_arrow_right ")
      })));
    }
  }]);

  return EAMDateTimePicker;
}(EAMBaseInput);

export default withStyles(styles)(EAMDateTimePicker);