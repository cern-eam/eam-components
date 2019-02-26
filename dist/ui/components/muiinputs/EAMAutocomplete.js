'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Autocomplete = require('./Autocomplete');

var _Autocomplete2 = _interopRequireDefault(_Autocomplete);

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EAMAutocomplete = function (_EAMBaseInput) {
    _inherits(EAMAutocomplete, _EAMBaseInput);

    function EAMAutocomplete() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EAMAutocomplete);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EAMAutocomplete.__proto__ || Object.getPrototypeOf(EAMAutocomplete)).call.apply(_ref, [this].concat(args))), _this), _this.onDescChangeHandler = function (value) {
            return _this.props.updateProperty(_this.props.descKey, value);
        }, _this.onValueChangeHandler = function (value) {
            _this.props.updateProperty(_this.props.valueKey, value);
            _this.props.updateProperty(_this.props.descKey, '');
        }, _this.onSuggestionChange = function (code, desc) {
            _this.props.updateProperty(_this.props.valueKey, code);
            _this.props.updateProperty(_this.props.descKey, desc);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EAMAutocomplete, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var autocompleteHandler = this.props.autocompleteHandler;


            if (this.isHidden()) {
                return _react2.default.createElement('div', null);
            }

            return _react2.default.createElement(_Autocomplete2.default, {
                required: this.isRequired(),
                error: this.state.error,
                helperText: this.state.helperText,
                disabled: this.state.disabled || this.props.elementInfo.readonly,
                onChange: function onChange(value) {
                    return _this2.onValueChangeHandler(value);
                },
                onDescChangeHandler: this.onDescChangeHandler.bind(this),
                onSuggestionChange: this.onSuggestionChange.bind(this),
                valueDesc: this.props.valueDesc || '',
                value: this.props.value || '',
                getSuggestions: autocompleteHandler,
                label: this.props.elementInfo.text,
                renderSuggestion: function renderSuggestion(suggestion) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        suggestion.code,
                        ' - ',
                        suggestion.desc
                    );
                },
                getSuggestionValue: function getSuggestionValue(suggestion) {
                    return suggestion.code;
                }
            });
        }
    }]);

    return EAMAutocomplete;
}(_EAMBaseInput3.default);

exports.default = EAMAutocomplete;