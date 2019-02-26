'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EAMInput = function (_EAMBaseInput) {
    _inherits(EAMInput, _EAMBaseInput);

    function EAMInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EAMInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EAMInput.__proto__ || Object.getPrototypeOf(EAMInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.setStateFromProps = function (props) {
            _this.setValue(props && props.value || '');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EAMInput, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _get(EAMInput.prototype.__proto__ || Object.getPrototypeOf(EAMInput.prototype), 'componentDidMount', this).apply(this, this.props);
            this.setStateFromProps(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            _get(EAMInput.prototype.__proto__ || Object.getPrototypeOf(EAMInput.prototype), 'componentDidMount', this).apply(this, nextProps);
            this.setStateFromProps(nextProps);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.isHidden()) {
                return _react2.default.createElement('div', null);
            }

            return _react2.default.createElement(_TextField2.default, {
                disabled: this.state.disabled || this.props.elementInfo.readonly,
                error: this.state.error,
                helperText: this.state.helperText,
                required: this.isRequired(),
                label: this.props.elementInfo.text,
                value: this.props.value || '',
                onChange: function onChange(event) {
                    return _this2.onChangeHandler(event.target.value);
                },
                fullWidth: true,
                margin: 'normal' });
        }
    }]);

    return EAMInput;
}(_EAMBaseInput3.default);

exports.default = EAMInput;