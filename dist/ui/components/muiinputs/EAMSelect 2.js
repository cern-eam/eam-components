'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _InputAdornment = require('@material-ui/core/InputAdornment');

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _styles = require('@material-ui/core/styles');

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

var _EAMTextField = require('./EAMTextField');

var _EAMTextField2 = _interopRequireDefault(_EAMTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
        other = _objectWithoutProperties(inputProps, ['classes', 'autoFocus', 'value', 'label', 'disabled', 'error', 'helperText', 'required']);

    var arrowIconStyle = {
        color: "rgba(0, 0, 0, 0.54)",
        pointerEvents: 'none',
        position: "absolute",
        right: 0
    };

    return _react2.default.createElement(_EAMTextField2.default, {
        required: required,
        error: error,
        helperText: helperText,
        disabled: disabled,
        autoFocus: autoFocus,
        label: label,
        value: value,
        className: classes.textField,
        InputProps: _extends({
            endAdornment: !disabled && _react2.default.createElement(
                _InputAdornment2.default,
                { position: 'end' },
                _react2.default.createElement(
                    _SvgIcon2.default,
                    { style: arrowIconStyle },
                    _react2.default.createElement('path', { d: 'M7 10l5 5 5-5z' })
                )
            ),
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
    return _react2.default.createElement(
        _MenuItem2.default,
        { selected: isHighlighted, component: 'div' },
        _react2.default.createElement(
            'div',
            null,
            child
        )
    );
}

/**
 * Global container containing all suggestions
 */
function renderSuggestionsContainer(options) {
    var containerProps = options.containerProps,
        children = options.children;

    return _react2.default.createElement(
        _Paper2.default,
        _extends({}, containerProps, { square: true }),
        children
    );
}

var styles = function styles(theme) {
    return {
        container: {
            flexGrow: 1,
            position: 'relative'
        },
        suggestionsContainerOpen: {
            position: 'absolute',
            marginTop: theme.spacing.unit,
            marginBottom: theme.spacing.unit * 3,
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
        }
    };
};

var EAMSelect = function (_EAMBaseInput) {
    _inherits(EAMSelect, _EAMBaseInput);

    function EAMSelect() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EAMSelect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EAMSelect.__proto__ || Object.getPrototypeOf(EAMSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            suggestions: []
        }, _this.init = function (props) {
            var value = props.value || '';
            var values = props.values || [];
            var valueFound = _this.findValueInValues(value, values);
            _this.setValue({
                code: valueFound && valueFound.code || value,
                desc: valueFound && valueFound.desc || value
            }, false);
        }, _this.onSuggestionChange = function (code, desc) {
            _this.props.updateProperty(_this.props.valueKey, code);
            if (_this.props && _this.props.valueDesc) {
                _this.props.updateProperty(_this.props.valueDesc, desc);
            }
        }, _this.findValueInValues = function (value, values) {
            var processedValue = value.trim();
            return values.find(function (v) {
                return v.code.toUpperCase() === processedValue.toUpperCase() || v.desc.toUpperCase() === processedValue.toUpperCase();
            });
        }, _this.handleSuggestionsFetchRequested = function (_ref2) {
            var value = _ref2.value,
                reason = _ref2.reason;

            var suggestions = _this.props.values;
            if (!suggestions) {
                return;
            }

            if (value && reason !== 'input-focused') {
                suggestions = suggestions.filter(function (suggestion) {
                    return suggestion.code.toUpperCase().startsWith(value.toUpperCase()) || suggestion.desc.toUpperCase().startsWith(value.toUpperCase());
                });
            }

            _this.setState({ suggestions: suggestions });
        }, _this.handleSuggestionsClearRequested = function () {
            _this.setState({
                suggestions: []
            }, function () {
                var value = _this.state.value;

                value && _this.onSuggestionChange(value.code, value.desc);
            });
        }, _this.handleSuggestionSelected = function (event, _ref3) {
            var suggestion = _ref3.suggestion;

            if (suggestion) _this.onSuggestionChange(suggestion.code, suggestion.desc);
        }, _this.handleChange = function (event, _ref4) {
            var newValue = _ref4.newValue;

            _this.setValue({ code: newValue, desc: newValue });
        }, _this.getSuggestionValue = function (suggestion) {
            return suggestion.code;
        }, _this.shouldRenderSuggestions = function (value) {
            // Returning true causes the suggestions to be
            // rendered when the input is blank and focused
            return true;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EAMSelect, [{
        key: 'renderSuggestion',
        value: function renderSuggestion(suggestion) {
            return _react2.default.createElement(
                'div',
                null,
                suggestion.desc
            );
        }
    }, {
        key: 'renderComponent',
        value: function renderComponent() {
            var _this2 = this;

            var _props = this.props,
                classes = _props.classes,
                elementInfo = _props.elementInfo;
            var _state = this.state,
                value = _state.value,
                error = _state.error,
                helperText = _state.helperText,
                disabled = _state.disabled;


            if (!value) return null;

            return _react2.default.createElement(_reactAutosuggest2.default, {
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
                renderSuggestion: function renderSuggestion(suggestion, _ref5) {
                    var isHighlighted = _ref5.isHighlighted;
                    return renderSuggestionContainer(_this2.renderSuggestion(suggestion), suggestion, isHighlighted);
                },
                renderInputComponent: renderInput.bind(this),
                shouldRenderSuggestions: this.shouldRenderSuggestions,
                inputProps: {
                    required: this.isRequired(),
                    error: error,
                    helperText: helperText,
                    classes: classes,
                    value: value.desc,
                    label: elementInfo && elementInfo.text,
                    disabled: disabled || elementInfo && elementInfo.readonly,
                    onChange: this.handleChange
                }
            });
        }
    }]);

    return EAMSelect;
}(_EAMBaseInput3.default);

exports.default = (0, _styles.withStyles)(styles)(EAMSelect);