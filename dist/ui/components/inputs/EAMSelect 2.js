'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

require('react-select/dist/react-select.css');

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _EAMFormLabel = require('./EAMFormLabel');

var _EAMFormLabel2 = _interopRequireDefault(_EAMFormLabel);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EAMSelect = function (_EAMBaseInput) {
    _inherits(EAMSelect, _EAMBaseInput);

    function EAMSelect(props) {
        _classCallCheck(this, EAMSelect);

        var _this = _possibleConstructorReturn(this, (EAMSelect.__proto__ || Object.getPrototypeOf(EAMSelect)).call(this, props));

        _initialiseProps.call(_this);

        var selectedObject = _this._getSelectedObjectFromValue(props.value, props.values);
        _this.state = {
            value: selectedObject
        };
        return _this;
    }

    _createClass(EAMSelect, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //Set the reference
            if (this.props.refToReactSelect) {
                this.props.refToReactSelect(this.selectComponent);
            }
            //If there is only one value and the select is mandatory, then set the value
            var _props = this.props,
                elementInfo = _props.elementInfo,
                values = _props.values,
                value = _props.value;

            if (values && values.length === 1 && this.isRequired() && !value) {
                //Execute onChange with the first selection
                this.onChange(values[0]);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                elementInfo = _props2.elementInfo,
                classes = _props2.classes,
                values = _props2.values,
                value = _props2.value,
                valueKey = _props2.valueKey,
                label = _props2.label,
                labelStyle = _props2.labelStyle,
                validate = _props2.validate,
                forceSearchable = _props2.forceSearchable,
                otherProps = _objectWithoutProperties(_props2, ['elementInfo', 'classes', 'values', 'value', 'valueKey', 'label', 'labelStyle', 'validate', 'forceSearchable']);

            var searchable = window.innerWidth > 1000;
            var iOS = /iPad|iPhone/.test(navigator.userAgent) && !window.MSStream;

            if (this.isHidden()) {
                return _react2.default.createElement('div', null);
            }

            var SelectComponent = this.props.creatable ? _reactSelect2.default.Creatable : _reactSelect2.default;

            var selectClasses = this.props.selectStyle ? (0, _classnames2.default)(classes.select, this.props.selectStyle) : classes.select;

            return _react2.default.createElement(
                'div',
                { className: classes.fieldContainer },
                _react2.default.createElement(_EAMFormLabel2.default, { required: this.isRequired(), label: label || elementInfo && elementInfo.text,
                    labelStyle: labelStyle, error: this.state.error }),
                _react2.default.createElement(SelectComponent, _extends({
                    ref: !this.props.creatable ? function (ref) {
                        return _this2.selectComponent = ref;
                    } : undefined,
                    required: this.isRequired(),
                    disabled: this.state.disabled || elementInfo && elementInfo.readonly,
                    value: this.state.value,
                    onChange: this.onChange,
                    onInputChange: this.onInputChange,
                    options: values,
                    valueKey: 'code',
                    labelKey: 'desc',
                    className: !this.state.error ? selectClasses : selectClasses + ' ' + classes.fieldInvalid,
                    placeholder: this.props.placeholder,
                    clearable: true,
                    resetValue: '',
                    searchable: forceSearchable || !iOS && searchable,
                    autoBlur: true
                }, otherProps)),
                this.state.helperText && this.renderHelperText()
            );
        }
    }]);

    return EAMSelect;
}(_EAMBaseInput3.default);

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.onChange = function (selectedObject) {
        _this3.setState({
            value: selectedObject
        }, function () {
            _this3.onChangeHandler(_this3.props.valueKey, selectedObject ? selectedObject.code : '', selectedObject);
        });
    };

    this.componentWillReceiveProps = function (nextProps) {
        if (!nextProps.value) {
            _this3.setState({
                value: undefined
            });
        } else {

            var selectedObject = _this3._getSelectedObjectFromValue(nextProps.value, nextProps.values);

            _this3.setState({
                value: selectedObject
            });
        }
    };

    this._getSelectedObjectFromValue = function (value, options) {
        if (options) {
            var selectedObjects = options.filter(function (f) {
                return f.code === value;
            });
            if (selectedObjects && selectedObjects.length === 1) {
                return selectedObjects[0];
            }
        }
        //If it is creatable, then return the value (if there is any)
        if (_this3.props.creatable && value) {
            return { code: value, desc: value };
        }
        return undefined;
    };

    this.onInputChange = function (input) {
        if (!_this3.props.autoSelectSingleResult) {
            return input;
        }

        var values = _this3.props.values;

        if (!values) {
            return input;
        }

        var filteredOptions = values.filter(function (option) {
            var valueTest = option.code;
            var labelTest = option.desc;

            if (!valueTest && !labelTest) {
                return false;
            }

            return valueTest && valueTest.indexOf(input) >= 0 || labelTest && labelTest.indexOf(input) >= 0;
        });

        if (filteredOptions.length === 1) {
            _this3.onChange(filteredOptions[0]);
        }
        return input;
    };
};

EAMSelect.propTypes = {
    labelStyle: _propTypes2.default.object,
    creatable: _propTypes2.default.bool,
    forceSearchable: _propTypes2.default.bool,
    autoSelectSingleResult: _propTypes2.default.bool
};

EAMSelect.defaultProps = {
    autoSelectSingleResult: false,
    placeholder: ''
};

exports.default = (0, _styles.withStyles)(_EAMBaseInput2.formStyles)(EAMSelect);