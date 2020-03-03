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

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

var _EAMTextField = _interopRequireDefault(require("./EAMTextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Default input, if none is provided
 */
function renderInput(inputProps) {
  var classes = inputProps.classes,
      value = inputProps.value,
      label = inputProps.label,
      disabled = inputProps.disabled,
      error = inputProps.error,
      helperText = inputProps.helperText,
      required = inputProps.required,
      other = _objectWithoutProperties(inputProps, ["classes", "value", "label", "disabled", "error", "helperText", "required"]);

  var arrowIconStyle = {
    color: "rgba(0, 0, 0, 0.54)",
    pointerEvents: 'none',
    position: "absolute",
    right: 0
  };
  return _react["default"].createElement(_EAMTextField["default"], {
    required: required,
    error: error,
    helperText: helperText,
    disabled: disabled,
    label: label,
    className: classes.textField,
    value: value,
    InputProps: _objectSpread({
      endAdornment: !disabled && _react["default"].createElement(_InputAdornment["default"], {
        position: "end"
      }, _react["default"].createElement(_SvgIcon["default"], {
        style: arrowIconStyle
      }, _react["default"].createElement("path", {
        d: "M7 10l5 5 5-5z"
      }))),
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
  return _react["default"].createElement(_MenuItem["default"], {
    selected: isHighlighted,
    component: "div"
  }, _react["default"].createElement("div", null, child));
}
/**
 * Global container containing all suggestions
 */


function renderSuggestionsContainer(options) {
  var containerProps = options.containerProps,
      children = options.children;
  return _react["default"].createElement(_Paper["default"], _extends({}, containerProps, {
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
      marginBottom: theme.spacing(3),
      left: 0,
      right: 0,
      zIndex: 9999
    },
    suggestion: {
      display: 'block'
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
      overflowY: "auto",
      overflowX: "hidden",
      maxHeight: "400px"
    },
    textField: {
      width: '100%'
    }
  };
};

var Select = /*#__PURE__*/function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      value: '',
      suggestions: []
    };

    _this.handleSuggestionsFetchRequested = function (_ref) {
      var value = _ref.value,
          reason = _ref.reason;
      var suggestions = _this.props.values;

      if (!suggestions) {
        return;
      }

      if (value && reason !== 'input-focused') {
        suggestions = suggestions.filter(function (suggestion) {
          return suggestion.code.toUpperCase().startsWith(value.toUpperCase()) || suggestion.desc.toUpperCase().startsWith(value.toUpperCase());
        });
      }

      _this.setState({
        suggestions: suggestions
      });
    };

    _this.handleSuggestionsClearRequested = function () {
      _this.setState({
        suggestions: []
      }, _this.propagateChange);
    };

    _this.handleSuggestionSelected = function (event, _ref2) {
      var suggestionValue = _ref2.suggestionValue;

      _this.setState({
        value: suggestionValue
      });
    };

    _this.handleChange = function (event, _ref3) {
      var newValue = _ref3.newValue;

      _this.setState({
        value: newValue
      });
    };

    _this.propagateChange = function () {
      if (!_this.props.values) {
        _this.props.onChange(_this.state.value);

        return;
      }

      var temp = _this.props.values.find(function (v) {
        return v.desc === _this.state.value;
      });

      if (temp) {
        _this.props.onChange(temp.code);
      } else {
        _this.props.onChange(_this.state.value);
      }
    };

    _this.getSuggestionValue = function (suggestion) {
      return suggestion.desc;
    };

    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.find(this.props.value, this.props.values);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.find(nextProps.value, nextProps.values);
    }
  }, {
    key: "find",
    value: function find(value, values) {
      // If values are no there (yet) just set the value
      if (!values || values && !value) {
        this.setState(function () {
          return {
            value: value
          };
        });
      } // Try to lookup the value in values
      else if (value && values) {
          var test = values.find(function (v) {
            return v.code.toUpperCase() === value.toUpperCase() || v.desc.toUpperCase() === value.toUpperCase();
          });
          this.setState(function () {
            return {
              value: test ? test.desc : value
            };
          });
        }
    }
  }, {
    key: "shouldRenderSuggestions",
    value: function shouldRenderSuggestions() {
      // Returning true causes the suggestions to be
      // rendered when the input is blank and focused
      return true;
    }
  }, {
    key: "renderSuggestion",
    value: function renderSuggestion(suggestion) {
      return _react["default"].createElement("div", null, suggestion.desc);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return _react["default"].createElement(_reactAutosuggest["default"], {
        theme: {
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        },
        shouldRenderSuggestions: this.shouldRenderSuggestions,
        onSuggestionSelected: this.handleSuggestionSelected,
        suggestions: this.state.suggestions,
        focusInputOnSuggestionClick: false,
        onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
        renderSuggestionsContainer: renderSuggestionsContainer,
        getSuggestionValue: this.getSuggestionValue,
        renderSuggestion: function renderSuggestion(suggestion, _ref4) {
          var isHighlighted = _ref4.isHighlighted;
          return renderSuggestionContainer(_this2.renderSuggestion(suggestion), suggestion, isHighlighted);
        },
        renderInputComponent: renderInput.bind(this),
        inputProps: {
          required: this.props.required,
          error: this.props.error,
          helperText: this.props.helperText,
          classes: classes,
          label: this.props.label,
          value: this.state.value,
          onChange: this.handleChange,
          disabled: this.props.disabled
        }
      });
    }
  }]);

  return Select;
}(_react["default"].Component);

var _default = (0, _styles.withStyles)(styles)(Select);

exports["default"] = _default;