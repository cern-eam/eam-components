"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _styles = require("@material-ui/core/styles");

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

var _react = _interopRequireDefault(require("react"));

var _reactAutosuggest = _interopRequireDefault(require("react-autosuggest"));

var _EAMBaseInput2 = _interopRequireDefault(require("./EAMBaseInput"));

var _EAMTextField = _interopRequireDefault(require("./EAMTextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
function renderInput(inputProps) {
  var classes = inputProps.classes,
      autoFocus = inputProps.autoFocus,
      value = inputProps.value,
      label = inputProps.label,
      disabled = inputProps.disabled,
      error = inputProps.error,
      helperText = inputProps.helperText,
      required = inputProps.required,
      other = _objectWithoutProperties(inputProps, ["classes", "autoFocus", "value", "label", "disabled", "error", "helperText", "required"]);

  var arrowIconStyle = {
    color: "rgba(0, 0, 0, 0.54)",
    pointerEvents: 'none',
    position: "absolute",
    right: 0
  };
  return /*#__PURE__*/_react["default"].createElement(_EAMTextField["default"], {
    required: required,
    error: error,
    helperText: helperText,
    disabled: disabled,
    autoFocus: autoFocus,
    label: label,
    value: value,
    className: classes.textField,
    InputProps: _objectSpread({
      endAdornment: !disabled && /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "end"
      }, /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], {
        style: arrowIconStyle
      }, /*#__PURE__*/_react["default"].createElement("path", {
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

var useStyles = (0, _styles.makeStyles)(function (theme) {
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
  _inherits(EAMSelect, _EAMBaseInput);

  var _super = _createSuper(EAMSelect);

  function EAMSelect() {
    var _this;

    _classCallCheck(this, EAMSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
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

    _this.findValueInValues = function (value) {
      var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var processedValue = value.trim();
      return values.find(function (v) {
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

  _createClass(EAMSelect, [{
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
      return /*#__PURE__*/_react["default"].createElement(_reactAutosuggest["default"], {
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

  return EAMSelect;
}(_EAMBaseInput2["default"]);

var ClassComponentStyler = function ClassComponentStyler(props) {
  var classes = useStyles(props);
  var Component = props.component;
  return /*#__PURE__*/_react["default"].createElement(Component, _extends({
    classes: classes
  }, props));
};

var _default = function _default(props) {
  return /*#__PURE__*/_react["default"].createElement(ClassComponentStyler, _extends({
    component: EAMSelect
  }, props));
};

exports["default"] = _default;