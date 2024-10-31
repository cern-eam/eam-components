function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["classes", "autoFocus", "value", "label", "disabled", "error", "helperText", "required"];
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import makeStyles from '@mui/styles/makeStyles';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';
import Autosuggest from 'react-autosuggest';
import EAMBaseInput from './EAMBaseInput';
import EAMTextField from './EAMTextField';

/**
 * Default input, if none is provided
 */
function renderInput(inputProps) {
  var classes = inputProps.classes,
    autoFocus = inputProps.autoFocus,
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
    autoFocus: autoFocus,
    label: label,
    value: value,
    className: classes.textField,
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
var useStyles = makeStyles(function (theme) {
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
      maxHeight: function maxHeight(props) {
        return (props.suggestionsPixelHeight || 400) + 'px';
      }
    }
  };
});
var EAMSelect = /*#__PURE__*/function (_EAMBaseInput) {
  function EAMSelect() {
    var _this;
    _classCallCheck(this, EAMSelect);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, EAMSelect, [].concat(args));
    _this.state = {
      suggestions: []
    };
    _this.init = function (props) {
      var value = props.value || '';
      var values = props.values;
      var valueFound = _this.findValueInValues(value, values);
      _this.setValue({
        code: valueFound && valueFound.code || value,
        desc: valueFound && valueFound.desc || value
      }, false);
    };
    _this.onSuggestionChange = function (code, desc) {
      _this.props.updateProperty(_this.props.valueKey, code || '');
      if (_this.props && _this.props.valueDesc) {
        _this.props.updateProperty(_this.props.valueDesc, desc);
      }
    };
    _this.findValueInValues = function (value, values) {
      var processedValue = value.trim();
      return (values || []).find(function (v) {
        return v.code.toUpperCase() === processedValue.toUpperCase() || v.desc && v.desc.toUpperCase() === processedValue.toUpperCase();
      });
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
          var codeParts = suggestion.code.toUpperCase().split(' ').filter(function (p) {
            return p.length > 1;
          });
          return codeParts.some(function (p) {
            return p.startsWith(value.toUpperCase());
          }) || suggestion.desc && suggestion.desc.toUpperCase().startsWith(value.toUpperCase());
        });
      }
      _this.setState({
        suggestions: suggestions
      });
    };
    _this.handleSuggestionsClearRequested = function () {
      _this.setState({
        suggestions: []
      }, function () {
        var dropdownValue = _this.state.value && _this.findValueInValues(_this.state.value.code, _this.props.values);
        var value = dropdownValue || _this.state.value;
        value && _this.onSuggestionChange(value.code, value.desc);
      });
    };
    _this.handleSuggestionSelected = function (event, _ref2) {
      var suggestion = _ref2.suggestion;
      if (suggestion) _this.onSuggestionChange(suggestion.code, suggestion.desc);
    };
    _this.handleChange = function (event, _ref3) {
      var newValue = _ref3.newValue;
      _this.setValue({
        code: newValue,
        desc: ''
      });
    };
    _this.getSuggestionValue = function (suggestion) {
      return suggestion.code;
    };
    _this.shouldRenderSuggestions = function (value) {
      // Returning true causes the suggestions to be
      // rendered when the input is blank and focused
      return true;
    };
    return _this;
  }
  _inherits(EAMSelect, _EAMBaseInput);
  return _createClass(EAMSelect, [{
    key: "renderValue",
    value: function renderValue(value) {
      return _toConsumableArray(new Set([value.code, value.desc])).filter(Boolean).join(' - ');
    }
  }, {
    key: "renderComponent",
    value: function renderComponent() {
      var _this$props = this.props,
        classes = _this$props.classes,
        elementInfo = _this$props.elementInfo,
        renderSuggestion = _this$props.renderSuggestion,
        renderValue = _this$props.renderValue;
      var _this$state = this.state,
        value = _this$state.value,
        error = _this$state.error,
        helperText = _this$state.helperText,
        disabled = _this$state.disabled;
      var suggestionRenderer = renderSuggestion || this.renderValue;
      var valueRenderer = renderValue || this.renderValue;
      if (!value) return null;
      return /*#__PURE__*/React.createElement(Autosuggest, {
        theme: {
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        },
        focusInputOnSuggestionClick: false,
        onSuggestionSelected: this.handleSuggestionSelected,
        suggestions: this.state.suggestions,
        onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
        getSuggestionValue: this.getSuggestionValue,
        renderSuggestionsContainer: renderSuggestionsContainer,
        renderSuggestion: function renderSuggestion(suggestion, _ref4) {
          var isHighlighted = _ref4.isHighlighted;
          return renderSuggestionContainer(suggestionRenderer(suggestion), suggestion, isHighlighted);
        },
        renderInputComponent: renderInput.bind(this),
        shouldRenderSuggestions: this.shouldRenderSuggestions,
        inputProps: {
          required: this.isRequired(),
          error: error,
          helperText: helperText,
          classes: classes,
          value: valueRenderer(value),
          label: elementInfo && elementInfo.text,
          disabled: disabled || elementInfo && elementInfo.readonly,
          onChange: this.handleChange
        }
      });
    }
  }]);
}(EAMBaseInput);
var ClassComponentStyler = function ClassComponentStyler(props) {
  var classes = useStyles(props);
  var Component = props.component;
  return /*#__PURE__*/React.createElement(Component, _extends({
    classes: classes
  }, props));
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(ClassComponentStyler, _extends({
    component: EAMSelect
  }, props));
});