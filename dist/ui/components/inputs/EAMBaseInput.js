'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formStyles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        }, _this.updateFormField = function (elementInfo, formFields) {
            if (!elementInfo || !formFields) return;
            formFields[elementInfo.xpath] = _this;
        }, _this.enable = function () {
            return _this.setState({ disabled: false });
        }, _this.disable = function () {
            return _this.setState({ disabled: true });
        }, _this.isRequired = function () {
            return _this.props.elementInfo && (_this.props.elementInfo.attribute === 'R' || _this.props.elementInfo.attribute === 'S');
        }, _this.isHidden = function () {
            return _this.props.elementInfo && _this.props.elementInfo.attribute === 'H';
        }, _this.markFieldAsValid = function () {
            return _this.setState({ error: false, helperText: null });
        }, _this.markFieldAsInvalid = function () {
            return _this.setState({ error: true });
        }, _this.onChangeHandler = function (key, value) {
            var selectedObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
            var executeExtra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
            var elementInfo = _this.props.elementInfo;
            //Uppercase field if needed

            if (elementInfo && elementInfo.characterCase === 'uppercase' && value) {
                //If normal value
                if (value.toUpperCase) {
                    value = value.toUpperCase();
                } else if (value.code && value.code.toUpperCase) {
                    //code, desc Pair object
                    value.code = value.code.toUpperCase();
                } else if (Array.isArray(value)) {
                    //For arrays
                    value = value.map(function (elem) {
                        if (elem.code) {
                            return _extends({}, elem, {
                                code: elem.code.toUpperCase()
                            });
                        } else if (elem.toUpperCase) {
                            return elem.toUpperCase();
                        }
                        return elem;
                    });
                }
            }

            // Don't set the value if it is about to (or has already) exceeded the max length
            if (value && value.length && elementInfo && elementInfo.maxLength && value.length > elementInfo.maxLength) {
                return;
            }

            if (_this.props.updateProperty) {
                _this.props.updateProperty(key, value);
            }
            //Extra function if needed
            if (executeExtra && _this.props.onChangeValue) {
                _this.props.onChangeValue(value, selectedObject);
            }
        }, _this.renderHelperText = function () {
            //left: this.props.labelStyle.width
            var labelStyle = _this.props.labelStyle;

            var left = labelStyle && labelStyle.width ? labelStyle.width + 35 : 165;

            var helperTextStyle = {
                margin: 0,
                fontSize: '0.75rem',
                textAlign: 'right',
                marginTop: '8px',
                minHeight: '1em',
                lineHeight: '1em',
                color: '#f44336',
                bottom: '12px',
                position: 'absolute',
                left: left
            };
            return _react2.default.createElement(
                'p',
                { style: helperTextStyle },
                _this.state.helperText
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EAMBaseInput, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                elementInfo = _props.elementInfo,
                formFields = _props.formFields;

            updateFormField(elementInfo, formFields);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var elementInfo = nextProps.elementInfo,
                formFields = nextProps.formFields;

            updateFormField(elementInfo, formFields);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var _props2 = this.props,
                elementInfo = _props2.elementInfo,
                formFields = _props2.formFields;

            if (elementInfo && formFields) formFields[elementInfo.xpath] = null;
        }
    }, {
        key: 'validate',
        value: function validate() {
            var required = this.state.required;


            if (!required) return true;

            //Execute own validation
            if (this.props.validate && this.props.validate(this.props.value) || !this.props.validate && this.props.value) {
                this.markFieldAsValid();
                return true;
            }
            this.markFieldAsInvalid();
            return false;
        }
    }]);

    return EAMBaseInput;
}(_react.Component);

EAMBaseInput.defaultProps = {
    validate: function validate(value) {
        return !!value;
    }
};

exports.default = EAMBaseInput;
var formStyles = exports.formStyles = function formStyles(theme) {
    return {
        fieldContainer: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
            flex: 1
        },
        formControlRoot: {
            margin: 0,
            flexGrow: 1
        },
        textFieldRoot: {
            padding: 0,
            'label + &': {
                marginTop: theme.spacing.unit * 3
            }
        },
        textFieldInput: {
            borderRadius: 4,
            backgroundColor: '#fafafa', //theme.palette.common.white,
            color: "#333",
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '6px 9px',
            marginTop: '8px',
            marginBottom: '8px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            '&:focus': {
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
            }
        },
        select: {
            flexGrow: 1,
            marginTop: '8px',
            marginBottom: '8px',
            borderRadius: 4,
            '& > div': {
                borderRadius: 4,
                backgroundColor: '#fafafa', //theme.palette.common.white,
                border: '1px solid #ced4da',
                fontSize: 16,
                transition: theme.transitions.create(['border-color', 'box-shadow'])
            },
            '& .Select-menu-outer': {
                zIndex: 2
            }
        },
        textFieldFormLabel: {
            fontSize: 18
        },
        addon: {
            padding: '6px 9px',
            marginTop: '8px',
            marginBottom: '8px',
            fontSize: "1rem",
            fontWeight: "400",
            color: "#464a4c",
            textAlign: "center",
            backgroundColor: "#eceeef",
            border: "1px solid rgba(0,0,0,.15)",
            borderLeft: "0px",
            borderBottomRightRadius: ".25rem",
            borderTopRightRadius: ".25rem"
        },
        rightAddon: {
            '& input': {
                borderBottomRightRadius: "0",
                borderTopRightRadius: "0"
            }
        },
        fieldInvalid: {
            border: '1px solid #f03369 !important'
        },
        fieldInvalidInput: {
            '& input': {
                border: '1px solid #f03369 !important'
            }
        }
    };
};