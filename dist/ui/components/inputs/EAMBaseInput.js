function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
import React, { Component } from 'react';
var EAMBaseInput = /*#__PURE__*/function (_Component) {
  function EAMBaseInput() {
    var _this;
    _classCallCheck(this, EAMBaseInput);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, EAMBaseInput, [].concat(args));
    _this.state = {
      error: false,
      helperText: null,
      disabled: false
    };
    _this.updateFormField = function (elementInfo, formFields) {
      if (!elementInfo || !formFields) return;
      formFields[elementInfo.xpath] = _this;
    };
    _this.enable = function () {
      return _this.setState({
        disabled: false
      });
    };
    _this.disable = function () {
      return _this.setState({
        disabled: true
      });
    };
    _this.isRequired = function () {
      return _this.props.elementInfo && (_this.props.elementInfo.attribute === 'R' || _this.props.elementInfo.attribute === 'S');
    };
    _this.isHidden = function () {
      return _this.props.elementInfo && _this.props.elementInfo.attribute === 'H';
    };
    _this.markFieldAsValid = function () {
      return _this.setState({
        error: false,
        helperText: null
      });
    };
    _this.markFieldAsInvalid = function () {
      return _this.setState({
        error: true
      });
    };
    _this.onChangeHandler = function (key, value) {
      var selectedObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var executeExtra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var elementInfo = _this.props.elementInfo;
      //Uppercase field if needed
      if (elementInfo && elementInfo.characterCase === 'uppercase' && value) {
        //If normal value
        if (value.toUpperCase) {
          value = value.toUpperCase();
        } else if (value.code && value.code.toUpperCase) {
          //code, desc Pair object
          value.code = value.code.toUpperCase();
        } else if (Array.isArray(value)) {
          //For arrays
          value = value.map(function (elem) {
            if (elem.code) {
              return _objectSpread({}, elem, {
                code: elem.code.toUpperCase()
              });
            } else if (elem.toUpperCase) {
              return elem.toUpperCase();
            }
            return elem;
          });
        }
      }

      // Don't set the value if it is about to (or has already) exceeded the max length
      if (value && value.length && elementInfo && elementInfo.maxLength && value.length > elementInfo.maxLength) {
        return;
      }
      if (_this.props.updateProperty) {
        _this.props.updateProperty(key, value);
      }
      //Extra function if needed
      if (executeExtra && _this.props.onChangeValue) {
        _this.props.onChangeValue(value, selectedObject);
      }
    };
    _this.renderHelperText = function () {
      //left: this.props.labelStyle.width
      var labelStyle = _this.props.labelStyle;
      var left = labelStyle && labelStyle.width ? labelStyle.width + 35 : 165;
      var helperTextStyle = {
        margin: 0,
        fontSize: '0.75rem',
        textAlign: 'right',
        marginTop: '8px',
        minHeight: '1em',
        lineHeight: '1em',
        color: '#f44336',
        bottom: '12px',
        position: 'absolute',
        left: left
      };
      return /*#__PURE__*/React.createElement("p", {
        style: helperTextStyle
      }, _this.state.helperText);
    };
    return _this;
  }
  _inherits(EAMBaseInput, _Component);
  return _createClass(EAMBaseInput, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props = this.props,
        elementInfo = _this$props.elementInfo,
        formFields = _this$props.formFields;
      this.updateFormField(elementInfo, formFields);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var elementInfo = nextProps.elementInfo,
        formFields = nextProps.formFields;
      this.updateFormField(elementInfo, formFields);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props2 = this.props,
        elementInfo = _this$props2.elementInfo,
        formFields = _this$props2.formFields;
      if (elementInfo && formFields) formFields[elementInfo.xpath] = null;
    }
  }, {
    key: "validate",
    value: function validate() {
      var required = this.state.required;
      if (!required) return true;

      //Execute own validation
      if (this.props.validate && this.props.validate(this.props.value) || !this.props.validate && this.props.value) {
        this.markFieldAsValid();
        return true;
      }
      this.markFieldAsInvalid();
      return false;
    }
  }]);
}(Component);
EAMBaseInput.defaultProps = {
  validate: function validate(value) {
    return !!value;
  }
};
export default EAMBaseInput;
export var formStyles = function formStyles(theme) {
  return {
    fieldContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
      flex: 1
    },
    formControlRoot: {
      margin: 0,
      flexGrow: 1
    },
    textFieldRoot: {
      padding: 0,
      'label + &': {
        marginTop: theme.spacing(3)
      }
    },
    textFieldInput: {
      borderRadius: 4,
      backgroundColor: '#fafafa',
      //theme.palette.common.white,
      color: "#333",
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '6px 9px',
      marginTop: '8px',
      marginBottom: '8px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
      }
    },
    select: {
      flexGrow: 1,
      marginTop: '8px',
      marginBottom: '8px',
      borderRadius: 4,
      '& > div': {
        borderRadius: 4,
        backgroundColor: '#fafafa',
        //theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        transition: theme.transitions.create(['border-color', 'box-shadow'])
      },
      '& .Select-menu-outer': {
        zIndex: 2
      }
    },
    textFieldFormLabel: {
      fontSize: 18
    },
    addon: {
      padding: '6px 9px',
      marginTop: '8px',
      marginBottom: '8px',
      fontSize: "1rem",
      fontWeight: "400",
      color: "#464a4c",
      textAlign: "center",
      backgroundColor: "#eceeef",
      border: "1px solid rgba(0,0,0,.15)",
      borderLeft: "0px",
      borderBottomRightRadius: ".25rem",
      borderTopRightRadius: ".25rem"
    },
    rightAddon: {
      '& input': {
        borderBottomRightRadius: "0",
        borderTopRightRadius: "0"
      }
    },
    fieldInvalid: {
      border: '1px solid #f03369 !important'
    },
    fieldInvalidInput: {
      '& input': {
        border: '1px solid #f03369 !important'
      }
    }
  };
};