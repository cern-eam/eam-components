function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["classes", "autoFocus", "value", "label", "disabled", "endAdornment", "error", "helperText", "required"];
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import withStyles from '@mui/styles/withStyles';
import EAMTextField from './EAMTextField';
import axios from 'axios/index';
import React from 'react';
import Autosuggest from 'react-autosuggest';
import EAMBaseInput from './EAMBaseInput';
function getTextWidth(text) {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
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
    other = _objectWithoutProperties(inputProps, _excluded);
  var inputAdornmentStyle = {
    top: 2,
    height: 20,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    left: 5 + getTextWidth(value),
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: 16,
    color: '#9E9E9E'
  };
  return /*#__PURE__*/React.createElement(EAMTextField, {
    required: required,
    error: error,
    helperText: helperText,
    disabled: disabled,
    label: label,
    autoFocus: autoFocus,
    className: classes.textField,
    value: value,
    InputProps: _objectSpread({
      endAdornment: endAdornment && /*#__PURE__*/React.createElement(InputAdornment, {
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
function renderSuggestionContainer(suggestion, isHighlighted) {
  return /*#__PURE__*/React.createElement(MenuItem, {
    selected: isHighlighted,
    component: "div"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, suggestion.code, " - ", suggestion.desc)));
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
      position: 'absolute',
      marginBottom: theme.spacing(3),
      width: '100%',
      zIndex: 10
    },
    suggestion: {
      display: 'block'
    },
    suggestionsList: function suggestionsList(_ref) {
      var maxHeight = _ref.maxHeight;
      return _objectSpread({
        margin: 0,
        padding: 0,
        listStyleType: 'none'
      }, maxHeight && {
        maxHeight: maxHeight,
        overflowY: 'scroll'
      });
    },
    textField: {
      width: '100%'
    }
  };
};
var EAMAutocomplete = /*#__PURE__*/function (_EAMBaseInput) {
  _inherits(EAMAutocomplete, _EAMBaseInput);
  function EAMAutocomplete() {
    var _this;
    _classCallCheck(this, EAMAutocomplete);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, EAMAutocomplete, [].concat(args));
    _this.state = {
      suggestions: []
    };
    _this.init = function (props) {
      return _this.setValue({
        code: props.value || '',
        desc: props.valueDesc || ''
      }, false);
    };
    _this.onSuggestionChange = function (code, desc) {
      // this.props.updateProperty(this.props.valueKey, code);
      // this.props.updateProperty(this.props.descKey, desc);
      _this.setValue({
        code: code,
        desc: desc
      });
      _this.onChangeHandler(code, {
        code: code,
        desc: desc
      });
    };
    // Input rendering
    _this.renderInput = function (inputProps) {
      return renderDefaultInput(inputProps);
    };
    // Fetch suggestions
    _this.handleSuggestionsFetchRequested = function (_ref2) {
      var value = _ref2.value;
      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (!!_this.cancelSource) _this.cancelSource.cancel();
        _this.cancelSource = axios.CancelToken.source();
        if (value === _this.state.suggestionsValue) {
          return;
        }
        _this.props.autocompleteHandler(value, {
          cancelToken: _this.cancelSource.token
        }).then(function (result) {
          _this.setState({
            suggestions: result.body.data,
            suggestionsValue: value
          }, function () {
            var valueFound = _this.findValueInSuggestions(value, result.body.data);
            if (valueFound && (_this.props.autoSelectSingleElement === undefined || _this.props.autoSelectSingleElement)) {
              _this.onChangeHandler(valueFound.code, valueFound);
            }
          });
        })["catch"](function (error) {});
      }, 200);
    };
    _this.handleChange = function (event, _ref3) {
      var newValue = _ref3.newValue;
      // Initially, the onChange only happened on lose focus (onBlur) event. However, both events
      //(onChange and onBlur) are fired at the same time, causing the onBlur() event to not have
      //the updated state. Therefore, and until a complete redesign is in place, either the parent shall
      //be updated at every key stroke, or thehandleSuggestionsClearRequested must contain a workaround
      // const valueFound = this.findValueInSuggestions(newValue, this.state.suggestions)
      // if (valueFound) {
      //     this.onChangeHandler(valueFound.code, valueFound)
      //     this.setValue({code: valueFound.code, desc: valueFound.desc});
      // } else {
      //     this.setValue({code: newValue, desc: ''});
      // }
      _this.setValue({
        code: newValue,
        desc: ''
      });
    };
    _this.findValueInSuggestions = function (value, suggestions) {
      var processedValue = value.trim();
      return suggestions.find(function (v) {
        return processedValue === _this.getSuggestionValue(v);
      });
    };
    // Clear suggestions
    _this.handleSuggestionsClearRequested = function () {};
    _this.getSuggestionValue = function (suggestion) {
      return suggestion.code;
    };
    _this.shouldRenderSuggestions = function (value) {
      return !!value;
    };
    _this.onSuggestionSelected = function (event, _ref4) {
      var suggestion = _ref4.suggestion;
      if (suggestion) _this.onSuggestionChange(suggestion.code, suggestion.desc);
    };
    return _this;
  }
  _createClass(EAMAutocomplete, [{
    key: "renderComponent",
    value: function renderComponent() {
      var _this2 = this;
      var _this$props = this.props,
        classes = _this$props.classes,
        elementInfo = _this$props.elementInfo;
      var _this$state = this.state,
        value = _this$state.value,
        suggestions = _this$state.suggestions;

      // Value should always be an object with code and desc
      if (!value) return null;
      return /*#__PURE__*/React.createElement(Autosuggest, {
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
        getSuggestionValue: this.getSuggestionValue,
        renderSuggestionsContainer: renderSuggestionsContainer,
        renderSuggestion: function renderSuggestion(suggestion, _ref5) {
          var isHighlighted = _ref5.isHighlighted;
          return renderSuggestionContainer(suggestion, isHighlighted);
        },
        renderInputComponent: this.renderInput.bind(this),
        shouldRenderSuggestions: this.shouldRenderSuggestions.bind(this),
        inputProps: {
          required: this.isRequired(),
          error: this.state.error,
          helperText: this.state.helperText,
          endAdornment: value.desc,
          classes: classes,
          placeholder: this.props.placeholder,
          label: elementInfo && elementInfo.text,
          value: value.code,
          onChange: this.handleChange,
          disabled: this.state.disabled || elementInfo && elementInfo.readonly,
          onBlur: function onBlur() {
            setTimeout(function () {
              var valueFound = _this2.findValueInSuggestions(_this2.state.value ? _this2.state.value.code : '', suggestions);
              if (!valueFound) _this2.onSuggestionChange('', '');
            }, 100);
          }
        }
      });
    }
  }]);
  return EAMAutocomplete;
}(EAMBaseInput);
export default withStyles(styles)(EAMAutocomplete);