"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactAutosuggest = _interopRequireDefault(require("react-autosuggest"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _styles = require("@material-ui/core/styles");

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _index = _interopRequireDefault(require("axios/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Default input, if none is provided
 */
function getTextWidth(text) {
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  context.font = '16px Roboto';
  var metrics = context.measureText(text);
  return metrics.width;
}

function renderDefaultInput(inputProps) {
  var classes = inputProps.classes,
      autoFocus = inputProps.autoFocus,
      value = inputProps.value,
      label = inputProps.label,
      disabled = inputProps.disabled,
      endAdornment = inputProps.endAdornment,
      error = inputProps.error,
      helperText = inputProps.helperText,
      required = inputProps.required,
      other = _objectWithoutProperties(inputProps, ["classes", "autoFocus", "value", "label", "disabled", "endAdornment", "error", "helperText", "required"]);

  var inputAdornmentStyle = {
    height: 20,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    top: 6,
    left: 5 + getTextWidth(value),
    position: "absolute",
    pointerEvents: "none",
    fontSize: 16,
    color: "#9E9E9E"
  };
  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    required: required,
    error: error,
    helperText: helperText,
    style: {
      overflow: "hidden"
    },
    disabled: disabled,
    margin: "normal",
    label: label,
    autoFocus: autoFocus,
    className: classes.textField,
    value: value,
    InputProps: _objectSpread({
      endAdornment: endAdornment && /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        style: inputAdornmentStyle
      }, " \u2014 ", endAdornment),
      classes: {
        input: classes.input
      }
    }, other)
  });
}
/**
 * Container that will encapsulate every suggestion
 */


function renderSuggestionContainer(child, suggestion, isHighlighted) {
  return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    selected: isHighlighted,
    component: "div"
  }, /*#__PURE__*/_react["default"].createElement("div", null, child));
}
/**
 * Global container containing all suggestions
 */


function renderSuggestionsContainer(options) {
  var containerProps = options.containerProps,
      children = options.children;
  return /*#__PURE__*/_react["default"].createElement(_Paper["default"], _extends({}, containerProps, {
    square: true
  }), children);
}

var styles = function styles(theme) {
  return {
    container: {
      flexGrow: 1,
      position: 'relative'
    },
    suggestionsContainerOpen: {
      position: 'absolute',
      marginBottom: theme.spacing(3),
      left: 0,
      right: 0,
      zIndex: 10
    },
    suggestion: {
      display: 'block'
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none'
    },
    textField: {
      width: '100%'
    }
  };
};
/**
 * Autocomplete component
 * Possible props:
 *  - getSuggestions (required): should return a Promise of an object
 *  - placeholder (not required): Placeholder to display inside the input. Only needed if you use the default input rendering
 *  - getSuggestionValue(suggestion) (not required): return the value to display inside the input once a suggestion is selected
 *  - renderSuggestion (not required): define how you want to render a suggestion.
 *  - label (not required): label of the input
 */


var Autocomplete = /*#__PURE__*/function (_React$Component) {
  _inherits(Autocomplete, _React$Component);

  var _super = _createSuper(Autocomplete);

  function Autocomplete() {
    var _this;

    _classCallCheck(this, Autocomplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      value: '',
      suggestions: []
    };

    _this.renderInput = function (inputProps) {
      return renderDefaultInput(inputProps);
    };

    _this.handleSuggestionsFetchRequested = function (_ref) {
      var value = _ref.value;
      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (!!_this.cancelSource) _this.cancelSource.cancel();
        _this.cancelSource = _index["default"].CancelToken.source();

        _this.props.getSuggestions(value, {
          cancelToken: _this.cancelSource.token
        }).then(function (result) {
          _this.setState({
            suggestions: result.body.data
          });
        })["catch"](function (error) {});
      }, 200);
    };

    _this.handleChange = function (event, _ref2) {
      var newValue = _ref2.newValue;

      // Initially, the onChange only happened on lose focus (onBlur) event. However, both events
      //(onChange and onBlur) are fired at the same time, causing the onBlur() event to not have 
      //the updated state. Therefore, and until a complete redesign is in place, either the parent shall
      //be updated at every key stroke, or thehandleSuggestionsClearRequested must contain a workaround
      // this.setState({
      //     value: newValue,
      //     endAdornment: ''
      // })
      _this.setValue({
        code: value,
        desc: endAdornment
      }); //this.props.onChange(newValue); // This triggers a re-render all parent's child components

    };

    _this.handleSuggestionsClearRequested = function () {
      return _this.setState({
        suggestions: []
      }, function (_) {
        // Not the cleaniest of ways to achieve the parent update on the value: the parent should save 
        //a ref and call getValue for that purpose. However, and to avoid manipulating state directly,
        //we update it as a callback which should have the state updated
        _this.props.onSuggestionChange(_this.getValue().code, _this.getValue().desc);
      });
    };

    _this.onSuggestionSelected = function (event, _ref3) {
      var suggestion = _ref3.suggestion;
      if (suggestion) _this.props.onSuggestionChange(suggestion.code, suggestion.desc);
    };

    _this.renderSuggestion = function (suggestion) {
      return _this.props.renderSuggestion ? _this.props.renderSuggestion(suggestion) : /*#__PURE__*/_react["default"].createElement("div", null, suggestion.code);
    };

    _this.getSuggestionValue = function (suggestion) {
      return suggestion.desc;
    };

    _this.shouldRenderSuggestions = function (value) {
      return !!value;
    };

    return _this;
  }

  _createClass(Autocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setStateFromProps(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setStateFromProps(nextProps);
    }
  }, {
    key: "setStateFromProps",
    value: function setStateFromProps(props) {
      this.setValue({
        code: props.value || '',
        desc: props.valueDesc || ''
      });
    } // Input rendering

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return /*#__PURE__*/_react["default"].createElement(_reactAutosuggest["default"], {
        theme: {
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        },
        focusInputOnSuggestionClick: false,
        onSuggestionSelected: this.onSuggestionSelected.bind(this),
        suggestions: this.state.suggestions,
        onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
        renderSuggestionsContainer: renderSuggestionsContainer,
        getSuggestionValue: function getSuggestionValue(suggestion) {
          return suggestion.desc;
        },
        renderSuggestion: function renderSuggestion(suggestion, _ref4) {
          var isHighlighted = _ref4.isHighlighted;
          return renderSuggestionContainer(_this2.renderSuggestion(suggestion), suggestion, isHighlighted);
        },
        renderInputComponent: this.renderInput.bind(this),
        shouldRenderSuggestions: this.shouldRenderSuggestions.bind(this),
        inputProps: {
          required: this.props.required,
          error: this.props.error,
          helperText: this.props.helperText,
          endAdornment: this.getValue().desc,
          classes: classes,
          placeholder: this.props.placeholder,
          label: this.props.label,
          value: this.getValue().code,
          onChange: this.handleChange,
          disabled: this.props.disabled
        }
      });
    }
  }]);

  return Autocomplete;
}(_react["default"].Component);

var _default = (0, _styles.withStyles)(styles)(Autocomplete);

exports["default"] = _default;