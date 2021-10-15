function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

import React, { Component } from 'react';

var EAMBaseInput = /*#__PURE__*/function (_Component) {
  _inherits(EAMBaseInput, _Component);

  var _super = _createSuper(EAMBaseInput);

  function EAMBaseInput() {
    var _this;

    _classCallCheck(this, EAMBaseInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      error: false,
      helperText: null,
      disabled: false
    };

    _this.updateFormField = function (elementInfo, formFields) {
      if (!elementInfo || !formFields) return;
      formFields[elementInfo.xpath] = _assertThisInitialized(_this);
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
      var elementInfo = _this.props.elementInfo; //Uppercase field if needed

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
      } // Don't set the value if it is about to (or has already) exceeded the max length


      if (value && value.length && elementInfo && elementInfo.maxLength && value.length > elementInfo.maxLength) {
        return;
      }

      if (_this.props.updateProperty) {
        _this.props.updateProperty(key, value);
      } //Extra function if needed


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

  _createClass(EAMBaseInput, [{
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
      if (!required) return true; //Execute own validation

      if (this.props.validate && this.props.validate(this.props.value) || !this.props.validate && this.props.value) {
        this.markFieldAsValid();
        return true;
      }

      this.markFieldAsInvalid();
      return false;
    }
  }]);

  return EAMBaseInput;
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