function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["elementInfo", "classes", "values", "value", "valueKey", "label", "labelStyle", "validate", "forceSearchable"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import EAMBaseInput, { formStyles } from './EAMBaseInput';
import PropTypes from 'prop-types';
import withStyles from '@mui/styles/withStyles';
import EAMFormLabel from "./EAMFormLabel";
import classNames from 'classnames';
var EAMSelect = /*#__PURE__*/function (_EAMBaseInput) {
  function EAMSelect(props) {
    var _this;
    _classCallCheck(this, EAMSelect);
    _this = _callSuper(this, EAMSelect, [props]);
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
  _inherits(EAMSelect, _EAMBaseInput);
  return _createClass(EAMSelect, [{
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