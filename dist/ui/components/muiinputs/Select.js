function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["classes", "value", "label", "disabled", "error", "helperText", "required"];
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import Autosuggest from 'react-autosuggest';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import SvgIcon from '@material-ui/core/SvgIcon';
import EAMTextField from './EAMTextField';
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
    other = _objectWithoutProperties(inputProps, _excluded);
  var arrowIconStyle = {
    color: "rgba(0, 0, 0, 0.54)",
    pointerEvents: 'none',
    position: "absolute",
    right: 0
  };
  return /*#__PURE__*/React.createElement(EAMTextField, {
    required: required,
    error: error,
    helperText: helperText,
    disabled: disabled,
    label: label,
    className: classes.textField,
    value: value,
    InputProps: _objectSpread({
      endAdornment: !disabled && /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(SvgIcon, {
        style: arrowIconStyle
      }, /*#__PURE__*/React.createElement("path", {
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
  return /*#__PURE__*/React.createElement(MenuItem, {
    selected: isHighlighted,
    component: "div"
  }, /*#__PURE__*/React.createElement("div", null, child));
}

/**
 * Global container containing all suggestions
 */
function renderSuggestionsContainer(options) {
  var containerProps = options.containerProps,
    children = options.children;
  return /*#__PURE__*/React.createElement(Paper, _extends({}, containerProps, {
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
  var _super = _createSuper(Select);
  function Select() {
    var _this;
    _classCallCheck(this, Select);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
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
      }
      // Try to lookup the value in values
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
      return /*#__PURE__*/React.createElement("div", null, suggestion.desc);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var classes = this.props.classes;
      return /*#__PURE__*/React.createElement(Autosuggest, {
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
}(React.Component);
export default withStyles(styles)(Select);