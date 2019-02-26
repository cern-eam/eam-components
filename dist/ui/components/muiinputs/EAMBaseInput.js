'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

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
            disabled: false,
            value: undefined, // [{validator: function(){}, errorText: ''}]
            validators: []
        }, _this.getValue = function () {
            return _this.state.value;
        }, _this.setValue = function (value) {
            return _this.setState({ value: value });
        }, _this.runValidators = function () {
            return _this.setState({ error: false }, function () {
                return !_this.props.validators.some(function (_ref2) {
                    var getResult = _ref2.getResult,
                        errorText = _ref2.errorText;

                    var failed = getResult && !getResult(_this.state.value);
                    if (failed) _this.setState({ error: true, helperText: errorText });
                    return failed;
                });
            });
        }, _this.isNumber = function (value, label) {
            return {
                getResult: function getResult(value) {
                    return value && !isNaN(value);
                },
                errorText: '\'' + (label || 'This field') + '\' should be a valid number.'
            };
        }, _this.enable = function () {
            return _this.setState({ disabled: false });
        }, _this.disable = function () {
            return _this.setState({ disabled: true });
        }, _this.isRequired = function () {
            return _this.props.elementInfo && (_this.props.elementInfo.attribute === 'R' || _this.props.elementInfo.attribute === 'S');
        }, _this.isHidden = function () {
            return _this.props.elementInfo && _this.props.elementInfo.attribute === 'H';
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

    //PROPS
    // VALIDATORS (list not required) default([])
    // DEFAULT HELPER TEXT (string not required)
    // SHOW HELPER TEXT (function not required)
    // 

    _createClass(EAMBaseInput, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                children = _props.children,
                elementInfo = _props.elementInfo;

            if (children && elementInfo) {
                children[elementInfo.xpath] = this;
            }
            //TODO default validators
            // if (elementInfo.isNumber) {
            //     validators.push(this.isNumber)
            // }
        }

        // getValues({code: , codeDesc})

    }, {
        key: 'validate',
        value: function validate() {
            var _props2 = this.props,
                value = _props2.value,
                elementInfo = _props2.elementInfo;

            if (!value && this.isRequired()) {
                this.setState({ error: true, helperText: elementInfo.text + ' is a required field' });
                return false;
            }
            this.setState({ error: false, helperText: null });
            return true;
        }
    }]);

    return EAMBaseInput;
}(_react.Component);

exports.default = EAMBaseInput;