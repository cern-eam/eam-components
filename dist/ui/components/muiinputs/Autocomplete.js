'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _styles = require('@material-ui/core/styles');

var _InputAdornment = require('@material-ui/core/InputAdornment');

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _index = require('axios/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
        other = _objectWithoutProperties(inputProps, ['classes', 'autoFocus', 'value', 'label', 'disabled', 'endAdornment', 'error', 'helperText', 'required']);

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

    return _react2.default.createElement(_TextField2.default, {
        required: required,
        error: error,
        helperText: helperText,
        style: { overflow: "hidden" },
        disabled: disabled,
        margin: 'normal',
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

var Autocomplete = function (_React$Component) {
    _inherits(Autocomplete, _React$Component);

    function Autocomplete() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Autocomplete);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            suggestions: []
        }, _this.renderInput = function (inputProps) {
            return renderDefaultInput(inputProps);
        }, _this.handleSuggestionsFetchRequested = function (_ref2) {
            var value = _ref2.value;

            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {

                if (!!_this.cancelSource) _this.cancelSource.cancel();

                _this.cancelSource = _index2.default.CancelToken.source();

                _this.props.getSuggestions(value, { cancelToken: _this.cancelSource.token }).then(function (result) {
                    _this.setState({
                        suggestions: result.body.data
                    });
                }).catch(function (error) {});
            }, 200);
        }, _this.handleSuggestionsClearRequested = function () {
            console.log('[handleSuggestionsClearRequested]: fired ' + _this.state.value + ':' + _this.state.endAdornment);
            _this.setState({ suggestions: [] }, function (_) {
                console.log('[handleSuggestionsClearRequested]: fired AFTER ' + _this.state.value + ':' + _this.state.endAdornment);
                _this.props.onSuggestionChange(_this.state.value, _this.state.endAdornment);
            });
        }, _this.handleChange = function (event, _ref3) {
            var newValue = _ref3.newValue;

            console.log('[handleChange]: fired ' + _this.state.value + ':' + _this.state.endAdornment);
            //this.props.onChange(newValue);
            // Initially, the onChange only happened on lose focus (onBlur) event. However, both events
            //(onChange and onBlur) are fired at the same time, causing the onBlur() event to not have 
            //the updated state. Therefore, and until a complete redesign is in place, the parent shall
            //be updated at every key stroke.
            _this.setState({
                value: newValue,
                endAdornment: ''
            });
        }, _this.onSuggestionSelected = function (event, _ref4) {
            var suggestion = _ref4.suggestion;

            console.log('[handleConSuggestionSelectedhange]: fired ' + _this.state.value + ':' + _this.state.endAdornment);
            if (suggestion) _this.props.onSuggestionChange(suggestion.code, suggestion.desc);
        }, _this.renderSuggestion = function (suggestion) {
            return _this.props.renderSuggestion ? _this.props.renderSuggestion(suggestion) : _react2.default.createElement(
                'div',
                null,
                suggestion.code
            );
        }, _this.getSuggestionValue = function (suggestion) {
            return suggestion.desc;
        }, _this.shouldRenderSuggestions = function (value) {
            return !!value;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Autocomplete, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setStateFromProps(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setStateFromProps(nextProps);
        }
    }, {
        key: 'setStateFromProps',
        value: function setStateFromProps(props) {
            this.setState({
                value: props.value || '',
                endAdornment: props.valueDesc || ''
            });
        }

        // Input rendering


        // Fetch suggestions


        // Clear suggestions


        // On change, set the state


        // Render

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var classes = this.props.classes;

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
                renderSuggestionsContainer: renderSuggestionsContainer,
                getSuggestionValue: this.getSuggestionValue.bind(this),
                renderSuggestion: function renderSuggestion(suggestion, _ref5) {
                    var isHighlighted = _ref5.isHighlighted;
                    return renderSuggestionContainer(_this2.renderSuggestion(suggestion), suggestion, isHighlighted);
                },
                renderInputComponent: this.renderInput.bind(this),
                shouldRenderSuggestions: this.shouldRenderSuggestions.bind(this),
                inputProps: {
                    required: this.props.required,
                    error: this.props.error,
                    helperText: this.props.helperText,
                    endAdornment: this.state.endAdornment,
                    classes: classes,
                    placeholder: this.props.placeholder,
                    label: this.props.label,
                    value: this.state.value,
                    onChange: this.handleChange,
                    disabled: this.props.disabled
                }
            });
        }
    }]);

    return Autocomplete;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles)(Autocomplete);