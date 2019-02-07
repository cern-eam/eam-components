'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EAMBaseInput = function (_Component) {
    _inherits(EAMBaseInput, _Component);

    function EAMBaseInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EAMBaseInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EAMBaseInput.__proto__ || Object.getPrototypeOf(EAMBaseInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            error: false,
            helperText: null,
            disabled: false
        }, _this.onChangeHandler = function (value) {
            // TODO: uppercased fields
            //if (this.props.elementInfo.characterCase === 'uppercase') {
            //    value = value.toUpperCase()
            //}

            // Don't set the value if it is about to (or has already) exceeded the max length
            if (value && value.length && _this.props.elementInfo.maxLength && value.length > _this.props.elementInfo.maxLength) {
                return;
            }

            _this.props.updateProperty(_this.props.valueKey, value);
            //Extra function if needed
            if (_this.props.onChangeValue) {
                _this.props.onChangeValue(value);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EAMBaseInput, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.children) {
                this.props.children[this.props.elementInfo.xpath] = this;
            }
        }
    }, {
        key: 'enable',
        value: function enable() {
            this.setState(function () {
                return {
                    disabled: false
                };
            });
        }
    }, {
        key: 'disable',
        value: function disable() {
            this.setState(function () {
                return {
                    disabled: true
                };
            });
        }
    }, {
        key: 'isHidden',
        value: function isHidden() {
            return this.props.elementInfo.attribute === 'H';
        }
    }, {
        key: 'isRequired',
        value: function isRequired() {
            return this.props.elementInfo.attribute === 'R' || this.props.elementInfo.attribute === 'S';
        }
    }, {
        key: 'validate',
        value: function validate() {
            var _this2 = this;

            if (!this.props.value && this.isRequired()) {
                this.setState(function () {
                    return {
                        error: true,
                        helperText: _this2.props.elementInfo.text + ' is a required field'
                    };
                });
                return false;
            } else {
                this.setState(function () {
                    return {
                        error: false,
                        helperText: null
                    };
                });
                return true;
            }
        }
    }]);

    return EAMBaseInput;
}(_react.Component);

exports.default = EAMBaseInput;