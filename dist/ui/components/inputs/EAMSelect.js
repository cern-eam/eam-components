function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["elementInfo", "classes", "values", "value", "valueKey", "label", "labelStyle", "validate", "forceSearchable"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import EAMBaseInput, { formStyles } from './EAMBaseInput';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import EAMFormLabel from "./EAMFormLabel";
import classNames from 'classnames';
var EAMSelect = /*#__PURE__*/function (_EAMBaseInput) {
  _inherits(EAMSelect, _EAMBaseInput);
  var _super = _createSuper(EAMSelect);
  function EAMSelect(props) {
    var _this;
    _classCallCheck(this, EAMSelect);
    _this = _super.call(this, props);
    _this.onChange = function (selectedObject) {
      _this.setState({
        value: selectedObject
      }, function () {
        _this.onChangeHandler(_this.props.valueKey, selectedObject ? selectedObject.code : '', selectedObject);
      });
    };
    _this.componentWillReceiveProps = function (nextProps) {
      if (!nextProps.value) {
        _this.setState({
          value: undefined
        });
      } else {
        var selectedObject = _this._getSelectedObjectFromValue(nextProps.value, nextProps.values);
        _this.setState({
          value: selectedObject
        });
      }
    };
    _this._getSelectedObjectFromValue = function (value, options) {
      if (options) {
        var selectedObjects = options.filter(function (f) {
          return f.code === value;
        });
        if (selectedObjects && selectedObjects.length === 1) {
          return selectedObjects[0];
        }
      }
      //If it is creatable, then return the value (if there is any)
      if (_this.props.creatable && value) {
        return {
          code: value,
          desc: value
        };
      }
      return undefined;
    };
    _this.onInputChange = function (input) {
      if (!_this.props.autoSelectSingleResult) {
        return input;
      }
      var values = _this.props.values;
      if (!values) {
        return input;
      }
      var filteredOptions = values.filter(function (option) {
        var valueTest = option.code;
        var labelTest = option.desc;
        if (!valueTest && !labelTest) {
          return false;
        }
        return valueTest && valueTest.indexOf(input) >= 0 || labelTest && labelTest.indexOf(input) >= 0;
      });
      if (filteredOptions.length === 1) {
        _this.onChange(filteredOptions[0]);
      }
      return input;
    };
    var _selectedObject = _this._getSelectedObjectFromValue(props.value, props.values);
    _this.state = {
      value: _selectedObject
    };
    return _this;
  }
  _createClass(EAMSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //Set the reference
      if (this.props.refToReactSelect) {
        this.props.refToReactSelect(this.selectComponent);
      }
      //If there is only one value and the select is mandatory, then set the value
      var _this$props = this.props,
        elementInfo = _this$props.elementInfo,
        values = _this$props.values,
        value = _this$props.value;
      if (values && values.length === 1 && this.isRequired() && !value) {
        //Execute onChange with the first selection
        this.onChange(values[0]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        elementInfo = _this$props2.elementInfo,
        classes = _this$props2.classes,
        values = _this$props2.values,
        value = _this$props2.value,
        valueKey = _this$props2.valueKey,
        label = _this$props2.label,
        labelStyle = _this$props2.labelStyle,
        validate = _this$props2.validate,
        forceSearchable = _this$props2.forceSearchable,
        otherProps = _objectWithoutProperties(_this$props2, _excluded);
      var searchable = window.innerWidth > 1000;
      var iOS = /iPad|iPhone/.test(navigator.userAgent) && !window.MSStream;
      if (this.isHidden()) {
        return /*#__PURE__*/React.createElement("div", null);
      }
      var SelectComponent = this.props.creatable ? Select.Creatable : Select;
      var selectClasses = this.props.selectStyle ? classNames(classes.select, this.props.selectStyle) : classes.select;
      return /*#__PURE__*/React.createElement("div", {
        className: classes.fieldContainer
      }, /*#__PURE__*/React.createElement(EAMFormLabel, {
        required: this.isRequired(),
        label: label || elementInfo && elementInfo.text,
        labelStyle: labelStyle,
        error: this.state.error
      }), /*#__PURE__*/React.createElement(SelectComponent, _extends({
        ref: !this.props.creatable ? function (ref) {
          return _this2.selectComponent = ref;
        } : undefined,
        required: this.isRequired(),
        disabled: this.state.disabled || elementInfo && elementInfo.readonly,
        value: this.state.value,
        onChange: this.onChange,
        onInputChange: this.onInputChange,
        options: values,
        valueKey: "code",
        labelKey: "desc",
        className: !this.state.error ? selectClasses : "".concat(selectClasses, " ").concat(classes.fieldInvalid),
        placeholder: this.props.placeholder,
        clearable: true,
        resetValue: "",
        searchable: forceSearchable || !iOS && searchable,
        autoBlur: true
      }, otherProps)), this.state.helperText && this.renderHelperText());
    }
  }]);
  return EAMSelect;
}(EAMBaseInput);
EAMSelect.propTypes = {
  labelStyle: PropTypes.object,
  creatable: PropTypes.bool,
  forceSearchable: PropTypes.bool,
  autoSelectSingleResult: PropTypes.bool
};
EAMSelect.defaultProps = {
  autoSelectSingleResult: false,
  placeholder: ''
};
export default withStyles(formStyles)(EAMSelect);