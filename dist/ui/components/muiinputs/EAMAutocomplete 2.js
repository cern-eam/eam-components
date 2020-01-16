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

var _EAMTextField = require('./EAMTextField');

var _EAMTextField2 = _interopRequireDefault(_EAMTextField);

var _index = require('axios/index');

var _index2 = _interopRequireDefault(_index);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
        other = _objectWithoutProperties(inputProps, ['classes', 'autoFocus', 'value', 'label', 'disabled', 'endAdornment', 'error', 'helperText', 'required']);

    var inputAdornmentStyle = {
        top: 2,
        height: 20,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        left: 5 + getTextWidth(value),
        position: "absolute",
        pointerEvents: "none",
        fontSize: 16,
        color: "#9E9E9E"
    };

    return _react2.default.createElement(_EAMTextField2.default, {
        required: required,
        error: error,
        helperText: helperText,
        style: { overflow: "hidden" },
        disabled: disabled,
        label: label,
        autoFocus: autoFocus,
        className: classes.textField,
        value: value,
        InputProps: _extends({
            endAdornment: endAdornment && _react2.default.createElement(
                _InputAdornment2.default,
                { style: inputAdornmentStyle },
                ' \u2014 ',
                endAdornment
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
function renderSuggestionContainer(suggestion, isHighlighted) {
    return _react2.default.createElement(
        _MenuItem2.default,
        { selected: isHighlighted, component: 'div' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                null,
                suggestion.code,
                ' - ',
                suggestion.desc
            )
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

var EAMAutocomplete = function (_EAMBaseInput) {
    _inherits(EAMAutocomplete, _EAMBaseInput);

    function EAMAutocomplete() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EAMAutocomplete);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EAMAutocomplete.__proto__ || Object.getPrototypeOf(EAMAutocomplete)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            suggestions: []
        }, _this.init = function (props) {
            return _this.setValue({ code: props.value || '', desc: props.valueDesc || '' }, false);
        }, _this.onSuggestionChange = function (code, desc) {
            _this.props.updateProperty(_this.props.valueKey, code);
            _this.props.updateProperty(_this.props.descKey, desc);
        }, _this.renderInput = function (inputProps) {
            return renderDefaultInput(inputProps);
        }, _this.handleSuggestionsFetchRequested = function (_ref2) {
            var value = _ref2.value;

            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {

                if (!!_this.cancelSource) _this.cancelSource.cancel();

                _this.cancelSource = _index2.default.CancelToken.source();

                _this.props.autocompleteHandler(value, { cancelToken: _this.cancelSource.token }).then(function (result) {
                    _this.setState({
                        suggestions: result.body.data
                    });
                }).catch(function (error) {});
            }, 200);
        }, _this.handleChange = function (event, _ref3) {
            var newValue = _ref3.newValue;

            // Initially, the onChange only happened on lose focus (onBlur) event. However, both events
            //(onChange and onBlur) are fired at the same time, causing the onBlur() event to not have 
            //the updated state. Therefore, and until a complete redesign is in place, either the parent shall
            //be updated at every key stroke, or thehandleSuggestionsClearRequested must contain a workaround
            var valueFound = _this.findValueInSuggestions(newValue, _this.state.suggestions);
            if (valueFound) {
                _this.onChangeHandler(valueFound.code, valueFound);
                _this.setValue({ code: valueFound.code, desc: valueFound.desc });
            } else {
                _this.setValue({ code: newValue, desc: '' });
            }
        }, _this.findValueInSuggestions = function (value, suggestions) {
            var processedValue = value.trim();
            return suggestions.find(function (v) {
                return v.code.toUpperCase().trim() === processedValue.toUpperCase() || v.desc.toUpperCase().trim() === processedValue.toUpperCase();
            });
        }, _this.handleSuggestionsClearRequested = function () {
            return _this.setState({ suggestions: [] }, function (_) {
                // Not the cleaniest of ways to achieve the parent update on the value: the parent should save 
                //a ref and call getValue for that purpose. However, and to avoid manipulating state directly,
                //we update it as a callback which should have the state updated
                (function (_ref4) {
                    var value = _ref4.value;
                    return value && _this.onSuggestionChange(value.code, value.desc);
                })(_this.state);
            });
        }, _this.getSuggestionValue = function (suggestion) {
            return suggestion.desc;
        }, _this.shouldRenderSuggestions = function (value) {
            return !!value;
        }, _this.onSuggestionSelected = function (event, _ref5) {
            var suggestion = _ref5.suggestion;

            if (suggestion) _this.onSuggestionChange(suggestion.code, suggestion.desc);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // Input rendering


    // Fetch suggestions


    // Clear suggestions


    _createClass(EAMAutocomplete, [{
        key: 'renderComponent',
        value: function renderComponent() {
            var _props = this.props,
                classes = _props.classes,
                elementInfo = _props.elementInfo;
            var value = this.state.value;

            // Value should always be an object with code and desc

            if (!value) return null;

            return _react2.default.createElement(_reactAutosuggest2.default, {
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
                renderSuggestion: function renderSuggestion(suggestion, _ref6) {
                    var isHighlighted = _ref6.isHighlighted;
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
                    disabled: this.state.disabled || elementInfo && elementInfo.readonly
                }
            });
        }
    }]);

    return EAMAutocomplete;
}(_EAMBaseInput3.default);

exports.default = (0, _styles.withStyles)(styles)(EAMAutocomplete);