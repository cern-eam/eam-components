'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

var _styles = require('@material-ui/core/styles');

var _EAMFormLabel = require('./EAMFormLabel');

var _EAMFormLabel2 = _interopRequireDefault(_EAMFormLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EAMInput = function (_EAMBaseInput) {
    _inherits(EAMInput, _EAMBaseInput);

    function EAMInput() {
        _classCallCheck(this, EAMInput);

        return _possibleConstructorReturn(this, (EAMInput.__proto__ || Object.getPrototypeOf(EAMInput)).apply(this, arguments));
    }

    _createClass(EAMInput, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            // valueKey, updateProperty, rightAddon and formFields are destructured to not be included in the 'other' object
            // if we don't do this they will be passed to the html input and browser will complain about unknown attributes
            var _props = this.props,
                elementInfo = _props.elementInfo,
                classes = _props.classes,
                label = _props.label,
                labelStyle = _props.labelStyle,
                disabled = _props.disabled,
                valueKey = _props.valueKey,
                updateProperty = _props.updateProperty,
                formFields = _props.formFields,
                validate = _props.validate,
                rightAddon = _props.rightAddon,
                other = _objectWithoutProperties(_props, ['elementInfo', 'classes', 'label', 'labelStyle', 'disabled', 'valueKey', 'updateProperty', 'formFields', 'validate', 'rightAddon']);
            //Input props


            var inputProps = _extends({ style: { width: '100%' } }, this.props.inputProps);
            //Type
            var inputType = this.props.type || 'string';

            if (this.isHidden()) {
                return _react2.default.createElement('div', null);
            }
            //Numeric
            if (elementInfo && (elementInfo.fieldType === 'number' || elementInfo.fieldType === 'currency')) {
                inputType = 'number';
            }
            //Classes
            var textClasses = '';
            if (this.props.rightAddon) {
                textClasses += classes.rightAddon + ' ';
            }
            if (this.state.error) {
                textClasses += classes.fieldInvalidInput;
            }

            // Right Addon. May come from elementInfo, and we can override with rightAddon property
            var rightAddonToDisplay = void 0;
            if (rightAddon) {
                rightAddonToDisplay = rightAddon;
            } else if (elementInfo) {
                rightAddonToDisplay = elementInfo.udfUom;
            }

            return _react2.default.createElement(
                'div',
                { className: this.props.classes.fieldContainer },
                _react2.default.createElement(_EAMFormLabel2.default, { required: this.isRequired(), label: label || elementInfo && elementInfo.text,
                    labelStyle: labelStyle, error: this.state.error }),
                _react2.default.createElement(_TextField2.default, _extends({
                    className: textClasses,
                    disabled: this.state.disabled || disabled || elementInfo && elementInfo.readonly,
                    error: this.state.error,
                    helperText: this.state.helperText,
                    required: this.isRequired(),
                    onChange: function onChange(event) {
                        return _this2.onChangeHandler(_this2.props.valueKey, event.target.value);
                    },
                    fullWidth: true,
                    margin: 'none'
                }, other, {
                    value: this.props.value !== undefined ? this.props.value : '',
                    classes: {
                        root: classes.formControlRoot
                    },
                    inputProps: inputProps,
                    InputProps: {
                        disableUnderline: true,
                        classes: {
                            root: classes.textFieldRoot,
                            input: classes.textFieldInput
                        }
                    },
                    InputLabelProps: {
                        shrink: true,
                        className: classes.textFieldFormLabel
                    },
                    type: inputType
                })),
                rightAddonToDisplay && _react2.default.createElement(
                    'span',
                    { className: classes.addon },
                    rightAddonToDisplay
                )
            );
        }
    }]);

    return EAMInput;
}(_EAMBaseInput3.default);

exports.default = (0, _styles.withStyles)(_EAMBaseInput2.formStyles)(EAMInput);