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

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

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
        value = inputProps.value,
        label = inputProps.label,
        disabled = inputProps.disabled,
        error = inputProps.error,
        helperText = inputProps.helperText,
        required = inputProps.required,
        other = _objectWithoutProperties(inputProps, ['classes', 'value', 'label', 'disabled', 'error', 'helperText', 'required']);

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
        label: label,
        className: classes.textField,
        value: value,
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
        },
        textField: {
            width: '100%'
        }
    };
};

var Select = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Select);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            suggestions: []
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

            _this.setState({
                suggestions: suggestions
            });
        }, _this.handleSuggestionsClearRequested = function () {
            _this.setState({
                suggestions: []
            }, _this.propagateChange);
        }, _this.handleSuggestionSelected = function (event, _ref3) {
            var suggestionValue = _ref3.suggestionValue;

            _this.setState({ value: suggestionValue });
        }, _this.handleChange = function (event, _ref4) {
            var newValue = _ref4.newValue;

            _this.setState({ value: newValue });
        }, _this.propagateChange = function () {
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
        }, _this.getSuggestionValue = function (suggestion) {
            return suggestion.desc;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Select, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.find(this.props.value, this.props.values);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.find(nextProps.value, nextProps.values);
        }
    }, {
        key: 'find',
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
        key: 'shouldRenderSuggestions',
        value: function shouldRenderSuggestions() {
            // Returning true causes the suggestions to be
            // rendered when the input is blank and focused
            return true;
        }
    }, {
        key: 'renderSuggestion',
        value: function renderSuggestion(suggestion) {
            return _react2.default.createElement(
                'div',
                null,
                suggestion.desc
            );
        }
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
                shouldRenderSuggestions: this.shouldRenderSuggestions,
                onSuggestionSelected: this.handleSuggestionSelected,
                suggestions: this.state.suggestions,
                focusInputOnSuggestionClick: false,
                onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
                onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
                renderSuggestionsContainer: renderSuggestionsContainer,
                getSuggestionValue: this.getSuggestionValue,
                renderSuggestion: function renderSuggestion(suggestion, _ref5) {
                    var isHighlighted = _ref5.isHighlighted;
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
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles)(Select);