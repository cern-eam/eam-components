'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _FormLabel = require('@material-ui/core/FormLabel');

var _FormLabel2 = _interopRequireDefault(_FormLabel);

var _Radio = require('@material-ui/core/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _RadioGroup = require('@material-ui/core/RadioGroup');

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EamlightRadio = function (_EAMBaseInput) {
    _inherits(EamlightRadio, _EAMBaseInput);

    function EamlightRadio() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EamlightRadio);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EamlightRadio.__proto__ || Object.getPrototypeOf(EamlightRadio)).call.apply(_ref, [this].concat(args))), _this), _this.generateRadioButtons = function (values) {
            if (values) {
                return values.map(function (value) {
                    return _react2.default.createElement(_FormControlLabel2.default, { key: value.code, value: value.code, control: _react2.default.createElement(_Radio2.default, { color: 'primary' }),
                        label: value.desc });
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EamlightRadio, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$elementInfo = this.props.elementInfo,
                elementId = _props$elementInfo.elementId,
                text = _props$elementInfo.text,
                nullable = _props$elementInfo.nullable;


            if (this.isHidden()) {
                return _react2.default.createElement('div', null);
            }

            return _react2.default.createElement(
                _FormControl2.default,
                { fullWidth: true, margin: 'normal', required: this.isRequired(), style: { marginBottom: '0px' } },
                _react2.default.createElement(
                    _FormLabel2.default,
                    { component: 'legend' },
                    text
                ),
                _react2.default.createElement(
                    _RadioGroup2.default,
                    {
                        'aria-label': elementId,
                        name: elementId,
                        value: this.props.value || '',
                        onChange: function onChange(event) {
                            return _this2.onChangeHandler(event.target.value);
                        },
                        style: { flexDirection: 'row' } },
                    this.generateRadioButtons(this.props.values)
                )
            );
        }
    }]);

    return EamlightRadio;
}(_EAMBaseInput3.default);

exports.default = EamlightRadio;