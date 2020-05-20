"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _OpenInNew = _interopRequireDefault(require("mdi-material-ui/OpenInNew"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var typingNumberReg = /^\-?\d*\.?\d*?$/;

var EAMBaseInput =
/*#__PURE__*/
function (_Component) {
  _inherits(EAMBaseInput, _Component);

  function EAMBaseInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EAMBaseInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EAMBaseInput)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.linkButtonStyle = {
      position: "absolute",
      top: 20,
      right: -2,
      backgroundColor: "white",
      width: 32,
      height: 32,
      zIndex: 100,
      padding: 0
    };
    _this.mainDivStyle = {
      position: "relative"
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
          valueKey = props.valueKey,
          transformers = props.transformers;

      if (children && elementInfo) {
        children[elementInfo.xpath] = _assertThisInitialized(_this);
      } // Set the validators


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
      } // Set the transformers        


      if (_this.isUpperCase()) {
        myTransformers.push(_this.toUpperCase);
      }

      _this.setState({
        validators: myValidators,
        transformers: myTransformers
      }, //Subclass init
      function () {
        if (_this.init) _this.init(props);
      });
    };

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
      } //Extra function if needed


      if (executeExtra && _this.props.onChangeValue) {//this.props.onChangeValue(value, valueFound);
      }
    };

    return _this;
  }

  _createClass(EAMBaseInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initBase(this.props); // Fire the onChangeValue callback also on the component mount

      if (this.props.onChangeValue && this.props.value) {
        this.props.onChangeValue(this.props.value, true);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.initBase(nextProps);

      if (this.props.onChangeValue && this.props.value !== nextProps.value) {
        this.props.onChangeValue(nextProps.value, false);
      }
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
        if (this.props.link().startsWith("http")) {
          eamLink = _react["default"].forwardRef(function (props, ref) {
            return _react["default"].createElement("a", _extends({
              href: _this2.props.link(_this2.state.value)
            }, props, {
              target: "_blank"
            }));
          });
        } else {
          eamLink = _react["default"].forwardRef(function (props, ref) {
            return _react["default"].createElement(_reactRouterDom.Link, _extends({
              to: _this2.props.link(_this2.state.value)
            }, props));
          });
        }
      }

      return _react["default"].createElement("div", {
        style: this.mainDivStyle
      }, this.renderComponent(), this.props.link && this.props.link(this.state.value) && _react["default"].createElement(_IconButton["default"], {
        style: this.linkButtonStyle,
        component: eamLink
      }, _react["default"].createElement(_OpenInNew["default"], null)));
    }
  }]);

  return EAMBaseInput;
}(_react.Component);

exports["default"] = EAMBaseInput;
EAMBaseInput.defaultProps = {
  customValidators: []
};