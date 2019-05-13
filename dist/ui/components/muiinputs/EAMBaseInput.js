'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var numberReg = /^\-?(0|([1-9]\d*))(\.\d+)?$/;
var typingNumberReg = /^\-?\d*\.?\d*?$/;

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
            value: '',
            validators: [], // [{validator: function(){}, errorText: ''}]
            transformers: [] // To transform the value while typing, ex: uppercase
        }, _this.initBase = function (props) {
            // Register as children
            var children = props.children,
                elementInfo = props.elementInfo,
                customValidators = props.customValidators,
                valueKey = props.valueKey,
                transformers = props.transformers;

            if (children && elementInfo) {
                children[elementInfo.xpath] = _this;
            }

            // Set the validators
            var myValidators = [].concat(_toConsumableArray(customValidators || []));
            var myTransformers = [].concat(_toConsumableArray(transformers || []));

            if (elementInfo) {
                var label = elementInfo.text;
                if (_this.isRequired()) {
                    myValidators.push(_this.hasValue(label));
                }
                if (elementInfo.fieldType === 'number') {
                    myValidators.push(_this.isNumber(label));
                }
            }
            // Set the transformers        
            if (_this.isUpperCase()) {
                myTransformers.push(_this.toUpperCase);
            }

            _this.setState({ validators: myValidators, transformers: myTransformers },
            //Subclass init
            function () {
                if (_this.init) _this.init(props);
            });
        }, _this.setValue = function (value) {
            var applyTransformers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return _this.setState({ value: applyTransformers ? _this.applyTransformers(value) : value });
        }, _this.applyTransformers = function (value) {
            return _this.state.transformers.reduce(function (acc, transformer) {
                return transformer(acc);
            }, value);
        }, _this.toUpperCase = function (value) {
            return !value ? value : (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? _extends({}, value, { code: value.code ? value.code.toUpperCase() : value.code }) : value.toUpperCase ? value.toUpperCase() : value;
        }, _this.hasValue = function (label) {
            return {
                getResult: function getResult(value) {
                    return !!(value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.code || value.length > 0 : value);
                },
                errorText: '*Required field'
            };
        }, _this.isNumber = function (label) {
            return {
                getResult: function getResult(value) {
                    return !value || numberReg.test(value);
                },
                errorText: '*Number expected'
            };
        }, _this.enable = function () {
            return _this.setState({ disabled: false });
        }, _this.disable = function () {
            return _this.setState({ disabled: true });
        }, _this.isRequired = function () {
            return _this.props.elementInfo && (_this.props.elementInfo.attribute === 'R' || _this.props.elementInfo.attribute === 'S');
        }, _this.isHidden = function () {
            return _this.props.elementInfo && _this.props.elementInfo.attribute === 'H';
        }, _this.isUpperCase = function () {
            return _this.props.elementInfo && _this.props.elementInfo.characterCase === 'uppercase';
        }, _this.onChangeHandler = function (value) {
            // TODO: uppercased fields
            //if (this.props.elementInfo.characterCase === 'uppercase') {
            //    value = value.toUpperCase()
            //}

            // Don't set the value if it is about to (or has already) exceeded the max length
            if (value && value.length && _this.props.elementInfo && _this.props.elementInfo.maxLength && value.length > _this.props.elementInfo.maxLength) {
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

    _createClass(EAMBaseInput, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.initBase(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.initBase(nextProps);
        }

        // TODO apply modifiers e.g. uppercasing, number


        // getValues({code: , codeDesc})

    }, {
        key: 'validate',
        value: function validate() {
            var _state = this.state,
                validators = _state.validators,
                value = _state.value;

            var helperText = '';
            var valid = !validators.some(function (_ref2) {
                var getResult = _ref2.getResult,
                    errorText = _ref2.errorText;

                var failed = getResult && !getResult(value);
                if (failed) helperText = errorText;
                return failed;
            });
            this.setState({ error: !valid, helperText: helperText });
            return valid;
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.isHidden() || !this.renderComponent) {
                return null;
            }
            return this.renderComponent();
        }
    }]);

    return EAMBaseInput;
}(_react.Component);

exports.default = EAMBaseInput;


EAMBaseInput.defaultProps = {
    customValidators: []
};