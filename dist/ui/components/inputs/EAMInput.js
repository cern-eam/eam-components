"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _EAMBaseInput2 = _interopRequireWildcard(require("./EAMBaseInput"));

var _styles = require("@material-ui/core/styles");

var _EAMFormLabel = _interopRequireDefault(require("./EAMFormLabel"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EAMInput =
/*#__PURE__*/
function (_EAMBaseInput) {
  _inherits(EAMInput, _EAMBaseInput);

  function EAMInput() {
    _classCallCheck(this, EAMInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(EAMInput).apply(this, arguments));
  }

  _createClass(EAMInput, [{
    key: "render",
    value: function render() {
      var _this = this;

      // valueKey, updateProperty, rightAddon and formFields are destructured to not be included in the 'other' object
      // if we don't do this they will be passed to the html input and browser will complain about unknown attributes
      var _this$props = this.props,
          elementInfo = _this$props.elementInfo,
          classes = _this$props.classes,
          label = _this$props.label,
          labelStyle = _this$props.labelStyle,
          disabled = _this$props.disabled,
          valueKey = _this$props.valueKey,
          updateProperty = _this$props.updateProperty,
          formFields = _this$props.formFields,
          validate = _this$props.validate,
          rightAddon = _this$props.rightAddon,
          other = _objectWithoutProperties(_this$props, ["elementInfo", "classes", "label", "labelStyle", "disabled", "valueKey", "updateProperty", "formFields", "validate", "rightAddon"]); //Input props


      var inputProps = _objectSpread({
        style: {
          width: '100%'
        }
      }, this.props.inputProps); //Type


      var inputType = this.props.type || 'string';

      if (this.isHidden()) {
        return _react["default"].createElement("div", null);
      } //Numeric


      if (elementInfo && (elementInfo.fieldType === 'number' || elementInfo.fieldType === 'currency')) {
        inputType = 'number';
      } //Classes


      var textClasses = '';

      if (this.props.rightAddon) {
        textClasses += classes.rightAddon + ' ';
      }

      if (this.state.error) {
        textClasses += classes.fieldInvalidInput;
      } // Right Addon. May come from elementInfo, and we can override with rightAddon property


      var rightAddonToDisplay;

      if (rightAddon) {
        rightAddonToDisplay = rightAddon;
      } else if (elementInfo) {
        rightAddonToDisplay = elementInfo.udfUom;
      }

      return _react["default"].createElement("div", {
        className: this.props.classes.fieldContainer
      }, _react["default"].createElement(_EAMFormLabel["default"], {
        required: this.isRequired(),
        label: label || elementInfo && elementInfo.text,
        labelStyle: labelStyle,
        error: this.state.error
      }), _react["default"].createElement(_TextField["default"], _extends({
        className: textClasses,
        disabled: this.state.disabled || disabled || elementInfo && elementInfo.readonly,
        error: this.state.error,
        helperText: this.state.helperText,
        required: this.isRequired(),
        onChange: function onChange(event) {
          return _this.onChangeHandler(_this.props.valueKey, event.target.value);
        },
        fullWidth: true,
        margin: "none"
      }, other, {
        value: this.props.value !== undefined ? this.props.value : '',
        classes: {
          root: classes.formControlRoot
        },
        inputProps: inputProps,
        InputProps: {
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput
          }
        },
        InputLabelProps: {
          shrink: true,
          className: classes.textFieldFormLabel
        },
        type: inputType
      })), rightAddonToDisplay && _react["default"].createElement("span", {
        className: classes.addon
      }, rightAddonToDisplay));
    }
  }]);

  return EAMInput;
}(_EAMBaseInput2["default"]);

var _default = (0, _styles.withStyles)(_EAMBaseInput2.formStyles)(EAMInput);

exports["default"] = _default;