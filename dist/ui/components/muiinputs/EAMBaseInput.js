function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from 'mdi-material-ui/OpenInNew';
import { Link } from 'react-router-dom';
var EAMBaseInput = /*#__PURE__*/function (_Component) {
  _inherits(EAMBaseInput, _Component);
  function EAMBaseInput() {
    var _this;
    _classCallCheck(this, EAMBaseInput);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, EAMBaseInput, [].concat(args));
    //PROPS
    // VALIDATORS (list not required) default([])
    // DEFAULT HELPER TEXT (string not required)
    // SHOW HELPER TEXT (function not required)
    _this.linkButtonStyle = {
      position: 'absolute',
      top: 20,
      right: -2,
      backgroundColor: 'white',
      width: 32,
      height: 32,
      zIndex: 100,
      padding: 0
    };
    _this.mainDivStyle = {
      position: 'relative'
    };
    _this.state = {
      error: false,
      helperText: null,
      disabled: false,
      value: '',
      validators: [],
      // [{validator: function(){}, errorText: ''}]
      transformers: [] // To transform the value while typing, ex: uppercase
    };
    _this.initBase = function (props) {
      // Register as children
      var children = props.children,
        elementInfo = props.elementInfo,
        customValidators = props.customValidators,
        transformers = props.transformers;
      if (children && elementInfo) {
        var key = typeof elementInfo.xpath === 'string' ? elementInfo.xpath : elementInfo.text + elementInfo.elementId;
        children[key] = _assertThisInitialized(_this);
        _this.setState({
          key: key
        });
      }

      // Set the validators
      var myValidators = _toConsumableArray(customValidators || []);
      var myTransformers = _toConsumableArray(transformers || []);
      if (elementInfo) {
        var label = elementInfo.text;
        if (_this.isRequired()) {
          myValidators.push(_this.hasValue(label));
        }
        if (elementInfo.fieldType === 'number') {
          myValidators.push(_this.isNumber(label));
        }
      }
      // Set the transformers
      if (_this.isUpperCase()) {
        myTransformers.push(_this.toUpperCase);
      }
      _this.setState({
        validators: myValidators,
        transformers: myTransformers
      },
      //Subclass init
      function () {
        if (_this.init) _this.init(props);
      });
    };
    // TODO apply modifiers e.g. uppercasing, number
    _this.setValue = function (value) {
      var applyTransformers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return _this.setState({
        value: applyTransformers ? _this.applyTransformers(value) : value
      });
    };
    _this.applyTransformers = function (value) {
      return _this.state.transformers.reduce(function (acc, transformer) {
        return transformer(acc);
      }, value);
    };
    _this.toUpperCase = function (value) {
      return !value ? value : _typeof(value) === 'object' ? _objectSpread({}, value, {
        code: value.code ? value.code.toUpperCase() : value.code
      }) : value.toUpperCase ? value.toUpperCase() : value;
    };
    _this.hasValue = function (label) {
      return {
        getResult: function getResult(value) {
          return !!(value !== null && _typeof(value) === 'object' ? value.code || value.length > 0 : value);
        },
        errorText: "*Required field"
      };
    };
    _this.isNumber = function (label) {
      return {
        getResult: function getResult(value) {
          // Convert if value is a {code, desc} object
          if (value && _typeof(value) === 'object' && value.hasOwnProperty('code')) {
            value = value.code;
          }
          return !isNaN(value);
        },
        errorText: "*Number expected"
      };
    };
    // getValues({code: , codeDesc})
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
    _this.isUpperCase = function () {
      return _this.props.elementInfo && _this.props.elementInfo.characterCase === 'uppercase';
    };
    _this.onChangeHandler = function (value) {
      var valueFound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var executeExtra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      // TODO: uppercased fields
      //if (this.props.elementInfo.characterCase === 'uppercase') {
      //    value = value.toUpperCase()
      //}

      // Don't set the value if it is about to (or has already) exceeded the max length
      if (value && value.length && _this.props.elementInfo && _this.props.elementInfo.maxLength && value.length > _this.props.elementInfo.maxLength) {
        return;
      }
      if (_this.props.updateProperty) {
        if (_this.props.valueKey) {
          _this.props.updateProperty(_this.props.valueKey, value);
        } else {
          _this.props.updateProperty(value);
        }
      }

      //Extra function if needed
      if (executeExtra && _this.props.onChangeValue) {
        _this.props.onChangeValue(value, valueFound);
      }
    };
    return _this;
  }
  _createClass(EAMBaseInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initBase(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.initBase(nextProps);
    }
  }, {
    key: "validate",
    value: function validate() {
      var _this$state = this.state,
        validators = _this$state.validators,
        value = _this$state.value;
      var helperText = '';
      var valid = !validators.some(function (_ref) {
        var getResult = _ref.getResult,
          errorText = _ref.errorText;
        var failed = getResult && !getResult(value);
        if (failed) helperText = errorText;
        return failed;
      });
      this.setState({
        error: !valid,
        helperText: helperText
      });
      return valid;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      if (this.isHidden() || !this.renderComponent) {
        return null;
      }
      var eamLink = null;
      if (this.props.link && this.props.link(this.state.value)) {
        if (this.props.link().startsWith('http')) {
          eamLink = React.forwardRef(function (props, ref) {
            return /*#__PURE__*/React.createElement("a", _extends({
              href: _this2.props.link(_this2.state.value)
            }, props, {
              target: "_blank",
              rel: "noopener noreferrer"
            }));
          });
        } else {
          eamLink = React.forwardRef(function (props, ref) {
            return /*#__PURE__*/React.createElement(Link, _extends({
              to: _this2.props.link(_this2.state.value)
            }, props));
          });
        }
      }
      return /*#__PURE__*/React.createElement("div", {
        style: this.mainDivStyle
      }, this.renderComponent(), this.props.link && this.props.link(this.state.value) && /*#__PURE__*/React.createElement(IconButton, {
        style: this.linkButtonStyle,
        component: eamLink,
        size: "large"
      }, this.props.icon));
    }
  }]);
  return EAMBaseInput;
}(Component);
export { EAMBaseInput as default };
EAMBaseInput.defaultProps = {
  customValidators: [],
  icon: /*#__PURE__*/React.createElement(OpenInNewIcon, null)
};