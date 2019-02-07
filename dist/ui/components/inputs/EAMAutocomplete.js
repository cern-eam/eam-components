'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _styles = require('@material-ui/core/styles');

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

var _EAMFormLabel = require('./EAMFormLabel');

var _EAMFormLabel2 = _interopRequireDefault(_EAMFormLabel);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('axios/index');

var _index2 = _interopRequireDefault(_index);

require('react-select/dist/react-select.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var autocompleteOptionStyles = function autocompleteOptionStyles() {
    return {
        rowMenuDiv: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline'
        },
        cell: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginRight: 5
        }
    };
};

var AutocompleteOption = function (_Component) {
    _inherits(AutocompleteOption, _Component);

    function AutocompleteOption() {
        _classCallCheck(this, AutocompleteOption);

        return _possibleConstructorReturn(this, (AutocompleteOption.__proto__ || Object.getPrototypeOf(AutocompleteOption)).apply(this, arguments));
    }

    _createClass(AutocompleteOption, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                classes = _props.classes,
                columnsCodes = _props.columnsCodes,
                columnsWidth = _props.columnsWidth;

            return _react2.default.createElement(
                'div',
                { className: this.props.className,
                    title: this.props.option.code },
                _react2.default.createElement(
                    'div',
                    { className: classes.rowMenuDiv },
                    columnsCodes.map(function (columnCode, index) {
                        return _react2.default.createElement(
                            'div',
                            { key: index, className: classes.cell, style: { width: columnsWidth[index] } },
                            _this2.props.option[columnCode]
                        );
                    })
                )
            );
        }
    }]);

    return AutocompleteOption;
}(_react.Component);

AutocompleteOption.propTypes = {
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    isDisabled: _propTypes2.default.bool,
    isFocused: _propTypes2.default.bool,
    isSelected: _propTypes2.default.bool,
    onFocus: _propTypes2.default.func,
    onSelect: _propTypes2.default.func,
    option: _propTypes2.default.object.isRequired
};

AutocompleteOption = (0, _styles.withStyles)(autocompleteOptionStyles)(AutocompleteOption);

var autocompleteValueStyles = function autocompleteValueStyles() {
    return {
        rowMenuDiv: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline'
        },
        cell: {
            marginRight: 5
        },
        cellCode: {},
        cellDesc: {
            color: 'grey',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%'
        }
    };
};

var AutocompleteValue = function (_Component2) {
    _inherits(AutocompleteValue, _Component2);

    function AutocompleteValue() {
        var _ref;

        var _temp, _this3, _ret;

        _classCallCheck(this, AutocompleteValue);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref = AutocompleteValue.__proto__ || Object.getPrototypeOf(AutocompleteValue)).call.apply(_ref, [this].concat(args))), _this3), _this3.removeOption = function () {
            if (_this3.props.onRemove) {
                _this3.props.onRemove(_this3.props.value);
            }
        }, _temp), _possibleConstructorReturn(_this3, _ret);
    }

    _createClass(AutocompleteValue, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            return _react2.default.createElement(
                'div',
                { className: 'Select-value', title: this.props.value.code },
                _react2.default.createElement(
                    'span',
                    { className: 'Select-value-icon', 'aria-hidden': 'true', onClick: this.removeOption },
                    'x'
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'Select-value-label' },
                    _react2.default.createElement(
                        'div',
                        { className: classes.rowMenuDiv },
                        _react2.default.createElement(
                            'div',
                            { className: (0, _classnames2.default)(classes.cell, classes.cellCode) },
                            this.props.value.code
                        ),
                        this.props.value.desc && _react2.default.createElement(
                            'div',
                            { className: (0, _classnames2.default)(classes.cell, classes.cellDesc) },
                            '- ',
                            this.props.value.desc
                        )
                    )
                )
            );
        }
    }]);

    return AutocompleteValue;
}(_react.Component);

AutocompleteValue.propTypes = {
    children: _propTypes2.default.node,
    value: _propTypes2.default.object
};

AutocompleteValue = (0, _styles.withStyles)(autocompleteValueStyles)(AutocompleteValue);

var AutocompleteValueSingle = function (_Component3) {
    _inherits(AutocompleteValueSingle, _Component3);

    function AutocompleteValueSingle() {
        _classCallCheck(this, AutocompleteValueSingle);

        return _possibleConstructorReturn(this, (AutocompleteValueSingle.__proto__ || Object.getPrototypeOf(AutocompleteValueSingle)).apply(this, arguments));
    }

    _createClass(AutocompleteValueSingle, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            return _react2.default.createElement(
                'div',
                { className: 'Select-value', title: this.props.value.code },
                _react2.default.createElement(
                    'span',
                    { className: 'Select-value-label' },
                    _react2.default.createElement(
                        'div',
                        { className: classes.rowMenuDiv },
                        _react2.default.createElement(
                            'div',
                            { className: (0, _classnames2.default)(classes.cell, classes.cellCode) },
                            this.props.value.code
                        ),
                        this.props.value.desc && _react2.default.createElement(
                            'div',
                            { className: (0, _classnames2.default)(classes.cell, classes.cellDesc) },
                            '- ',
                            this.props.value.desc
                        )
                    )
                )
            );
        }
    }]);

    return AutocompleteValueSingle;
}(_react.Component);

AutocompleteValueSingle.propTypes = {
    children: _propTypes2.default.node,
    value: _propTypes2.default.object
};

AutocompleteValueSingle = (0, _styles.withStyles)(autocompleteValueStyles)(AutocompleteValueSingle);

/**
 * Use the following property to override the width style
 * menuContainerStyle={{width: '400px'}}
 *
 * To make it a COMBO use
 * creatable={true}
 *
 * To make a multiple selection use
 * multi={false}
 * To avoid to delete selections with the backspace when multi is true use
 * backspaceRemoves={false}
 */

var EAMAutocomplete = function (_EAMBaseInput) {
    _inherits(EAMAutocomplete, _EAMBaseInput);

    function EAMAutocomplete(props) {
        _classCallCheck(this, EAMAutocomplete);

        var _this5 = _possibleConstructorReturn(this, (EAMAutocomplete.__proto__ || Object.getPrototypeOf(EAMAutocomplete)).call(this, props));

        _initialiseProps.call(_this5);

        var newvalue = '';
        if (_this5.props.multi) {
            newvalue = _this5._adaptStringToArray(_this5.props.value);
        } else {
            newvalue = {
                code: _this5.props.value,
                desc: _this5.props.valueDesc
            };
        }

        _this5.state = {
            value: newvalue
        };
        return _this5;
    }

    //To know if we are fetching desc


    _createClass(EAMAutocomplete, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.refToReactSelect) {
                this.props.refToReactSelect(this.asyncComponent);
            }
            //If there is code, but not desc, fetch the desc if possible
            this.fetchAutocompleteDescription();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            //If there is code, but not desc, fetch the desc if possible
            this.fetchAutocompleteDescription();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            if (this.isHidden()) {
                return _react2.default.createElement('div', null);
            }

            var _props2 = this.props,
                elementInfo = _props2.elementInfo,
                classes = _props2.classes,
                values = _props2.values,
                value = _props2.value,
                label = _props2.label,
                labelStyle = _props2.labelStyle,
                _loadOptions = _props2.loadOptions,
                valueKey = _props2.valueKey,
                columnsCodes = _props2.columnsCodes,
                columnsWidth = _props2.columnsWidth,
                validate = _props2.validate,
                otherProps = _objectWithoutProperties(_props2, ['elementInfo', 'classes', 'values', 'value', 'label', 'labelStyle', 'loadOptions', 'valueKey', 'columnsCodes', 'columnsWidth', 'validate']);

            var AsyncComponent = this.props.creatable ? _reactSelect2.default.AsyncCreatable : _reactSelect2.default.Async;

            var selectClasses = this.props.selectStyle ? (0, _classnames2.default)(classes.select, this.props.selectStyle) : classes.select;

            return _react2.default.createElement(
                'div',
                { className: classes.fieldContainer },
                _react2.default.createElement(_EAMFormLabel2.default, { required: this.isRequired(), label: label || elementInfo && elementInfo.text,
                    labelStyle: labelStyle, error: this.state.error }),
                _react2.default.createElement(AsyncComponent, _extends({ ref: function ref(_ref2) {
                        return _this6.asyncComponent = _ref2;
                    },
                    multi: this.props.multi,
                    value: this.state.value,
                    onChange: this.onChange,
                    onFocus: this.onFocusHandler,
                    disabled: this.state.disabled || elementInfo && elementInfo.readonly,
                    className: !this.state.error ? selectClasses : selectClasses + ' ' + classes.fieldInvalid,
                    valueKey: 'code',
                    labelKey: 'desc',
                    loadOptions: function loadOptions(code) {
                        return _this6._getAutocompleteSuggestions(code, _loadOptions);
                    },
                    backspaceRemoves: this.props.backspaceRemoves,
                    optionRenderer: function optionRenderer(option) {
                        return _react2.default.createElement(AutocompleteOption, { option: option,
                            columnsCodes: columnsCodes,
                            columnsWidth: columnsWidth });
                    },
                    valueComponent: this.props.multi ? AutocompleteValue : AutocompleteValueSingle,
                    cache: false,
                    openOnFocus: true,
                    placeholder: this.props.placeholder,
                    searchPromptText: this.props.searchPromptText,
                    promptTextCreator: this.props.promptTextCreator,
                    arrowRenderer: function arrowRenderer() {
                        return _react2.default.createElement('span', null);
                    },
                    filterOptions: this.props.creatable ? undefined : function (options) {
                        return options;
                    },
                    clearable: true
                }, otherProps)),
                this.state.helperText && this.renderHelperText()
            );
        }
    }]);

    return EAMAutocomplete;
}(_EAMBaseInput3.default);

var _initialiseProps = function _initialiseProps() {
    var _this7 = this;

    this.fetchingDesc = false;

    this.fetchAutocompleteDescription = function () {
        var _props3 = _this7.props,
            value = _props3.value,
            valueDesc = _props3.valueDesc,
            descKey = _props3.descKey,
            loadOptions = _props3.loadOptions;

        if (!_this7.fetchingDesc && value && descKey && loadOptions && !valueDesc) {
            _this7.fetchingDesc = true;
            loadOptions(value).then(function (response) {
                //The response is
                var data = response.body.data;
                //Set desc if possible
                if (data && data.length > 0) {
                    _this7.onChange(data[0]);
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    };

    this.onChange = function (selectedObject) {
        _this7.setState({
            value: selectedObject
        }, function () {
            _this7.onChangeHandler(_this7.props.valueKey, selectedObject && selectedObject.code ? selectedObject.code : selectedObject, selectedObject);
            if (_this7.props.descKey) {
                _this7.onChangeHandler(_this7.props.descKey, selectedObject && selectedObject.desc ? selectedObject.desc : selectedObject, selectedObject, false);
            }
            if (_this7.props.autoSelectSingleElement && _this7.props.multi) {
                _this7.asyncComponent.select.focus();
            }
        });
    };

    this._adaptStringToArray = function (string) {
        if (string) {
            return string.split(',').map(function (s) {
                return {
                    code: s
                };
            });
        } else {
            return [];
        }
    };

    this._getAutocompleteSuggestions = function (code, autocompleteFunction) {
        if (!code) {
            return Promise.resolve({ options: [] });
        }

        //Clear timeout
        clearTimeout(_this7.timeout);

        return _this7.makeDelay(_this7.props.delay).then(function () {
            //Cancel if there was request
            if (!!_this7.cancelSource) {
                _this7.cancelSource.cancel();
            }
            _this7.cancelSource = _index2.default.CancelToken.source();
            return autocompleteFunction(code, { cancelToken: _this7.cancelSource.token });
        }).then(function (response) {
            // if there is only one result then select it automatically
            if (_this7.props.autoSelectSingleElement) {
                if (response.body.data && response.body.data.length === 1 && (!_this7.props.value || _this7.props.value.indexOf(response.body.data[0].code) < 0)) {
                    _this7.asyncComponent.select.selectValue(response.body.data[0]);
                    if (_this7.props.multi) _this7.asyncComponent.select.focus();
                }
            }
            return response.body.data;
        }).then(function (json) {
            return { options: json };
        }).catch(function (error) {
            /*Nothing*/
        });
    };

    this.makeDelay = function (t, v) {
        return new Promise(function (resolve) {
            _this7.timeout = setTimeout(resolve.bind(null, v), t);
        });
    };

    this.componentWillReceiveProps = function (nextProps) {
        if (!nextProps.value) {
            _this7.setState({
                value: undefined
            });
        } else {
            _this7.setState(function (prevState) {
                var newvalue = '';
                if (nextProps.multi) {
                    newvalue = _this7._adaptStringToArray(nextProps.value);
                } else {
                    newvalue = _extends({}, prevState.value, {
                        code: nextProps.value,
                        desc: nextProps.valueDesc
                    });
                }
                return {
                    value: newvalue
                };
            });
        }
    };

    this.onFocusHandler = function () {
        //If no multi, set the value to be able to select it
        if (!_this7.props.multi) _this7.asyncComponent.select.setState({ inputValue: _this7.props.value });
    };
};

EAMAutocomplete.propTypes = {
    columnsCodes: _propTypes2.default.array,
    columnsWidth: _propTypes2.default.array,
    autoSelectSingleElement: _propTypes2.default.bool,
    backspaceRemoves: _propTypes2.default.bool
};

EAMAutocomplete.defaultProps = {
    columnsCodes: ['code', 'desc'],
    columnsWidth: ['30%', '70%'],
    delay: 200,
    searchPromptText: '',
    promptTextCreator: function promptTextCreator(label) {
        return 'Insert Code: ' + label;
    },
    autoSelectSingleElement: false,
    backspaceRemoves: true,
    placeholder: ''
};

exports.default = (0, _styles.withStyles)(_EAMBaseInput2.formStyles)(EAMAutocomplete);