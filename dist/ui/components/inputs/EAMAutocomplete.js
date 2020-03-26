"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _styles = require("@material-ui/core/styles");

var _EAMBaseInput2 = _interopRequireWildcard(require("./EAMBaseInput"));

var _EAMFormLabel = _interopRequireDefault(require("./EAMFormLabel"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = _interopRequireDefault(require("axios/index"));

require("react-select/dist/react-select.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var AutocompleteOption =
/*#__PURE__*/
function (_Component) {
  _inherits(AutocompleteOption, _Component);

  function AutocompleteOption() {
    _classCallCheck(this, AutocompleteOption);

    return _possibleConstructorReturn(this, _getPrototypeOf(AutocompleteOption).apply(this, arguments));
  }

  _createClass(AutocompleteOption, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          columnsCodes = _this$props.columnsCodes,
          columnsWidth = _this$props.columnsWidth;
      return _react["default"].createElement("div", {
        className: this.props.className,
        title: this.props.option.code
      }, _react["default"].createElement("div", {
        className: classes.rowMenuDiv
      }, columnsCodes.map(function (columnCode, index) {
        return _react["default"].createElement("div", {
          key: index,
          className: classes.cell,
          style: {
            width: columnsWidth[index]
          }
        }, _this.props.option[columnCode]);
      })));
    }
  }]);

  return AutocompleteOption;
}(_react.Component);

AutocompleteOption.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  isDisabled: _propTypes["default"].bool,
  isFocused: _propTypes["default"].bool,
  isSelected: _propTypes["default"].bool,
  onFocus: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  option: _propTypes["default"].object.isRequired
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

var AutocompleteValue =
/*#__PURE__*/
function (_Component2) {
  _inherits(AutocompleteValue, _Component2);

  function AutocompleteValue() {
    var _getPrototypeOf2;

    var _this2;

    _classCallCheck(this, AutocompleteValue);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AutocompleteValue)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this2.removeOption = function () {
      if (_this2.props.onRemove) {
        _this2.props.onRemove(_this2.props.value);
      }
    };

    return _this2;
  }

  _createClass(AutocompleteValue, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react["default"].createElement("div", {
        className: "Select-value",
        title: this.props.value.code
      }, _react["default"].createElement("span", {
        className: "Select-value-icon",
        "aria-hidden": "true",
        onClick: this.removeOption
      }, "x"), _react["default"].createElement("span", {
        className: "Select-value-label"
      }, _react["default"].createElement("div", {
        className: classes.rowMenuDiv
      }, _react["default"].createElement("div", {
        className: (0, _classnames["default"])(classes.cell, classes.cellCode)
      }, this.props.value.code), this.props.value.desc && _react["default"].createElement("div", {
        className: (0, _classnames["default"])(classes.cell, classes.cellDesc)
      }, "- ", this.props.value.desc))));
    }
  }]);

  return AutocompleteValue;
}(_react.Component);

AutocompleteValue.propTypes = {
  children: _propTypes["default"].node,
  value: _propTypes["default"].object
};
AutocompleteValue = (0, _styles.withStyles)(autocompleteValueStyles)(AutocompleteValue);

var AutocompleteValueSingle =
/*#__PURE__*/
function (_Component3) {
  _inherits(AutocompleteValueSingle, _Component3);

  function AutocompleteValueSingle() {
    _classCallCheck(this, AutocompleteValueSingle);

    return _possibleConstructorReturn(this, _getPrototypeOf(AutocompleteValueSingle).apply(this, arguments));
  }

  _createClass(AutocompleteValueSingle, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react["default"].createElement("div", {
        className: "Select-value",
        title: this.props.value.code
      }, _react["default"].createElement("span", {
        className: "Select-value-label"
      }, _react["default"].createElement("div", {
        className: classes.rowMenuDiv
      }, _react["default"].createElement("div", {
        className: (0, _classnames["default"])(classes.cell, classes.cellCode)
      }, this.props.value.code), this.props.value.desc && _react["default"].createElement("div", {
        className: (0, _classnames["default"])(classes.cell, classes.cellDesc)
      }, "- ", this.props.value.desc))));
    }
  }]);

  return AutocompleteValueSingle;
}(_react.Component);

AutocompleteValueSingle.propTypes = {
  children: _propTypes["default"].node,
  value: _propTypes["default"].object
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

var EAMAutocomplete =
/*#__PURE__*/
function (_EAMBaseInput) {
  _inherits(EAMAutocomplete, _EAMBaseInput);

  function EAMAutocomplete(props) {
    var _this3;

    _classCallCheck(this, EAMAutocomplete);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(EAMAutocomplete).call(this, props));
    _this3.fetchingDesc = false;

    _this3.fetchAutocompleteDescription = function () {
      var _this3$props = _this3.props,
          value = _this3$props.value,
          valueDesc = _this3$props.valueDesc,
          descKey = _this3$props.descKey,
          loadOptions = _this3$props.loadOptions;

      if (!_this3.fetchingDesc && value && descKey && loadOptions && !valueDesc) {
        _this3.fetchingDesc = true;
        loadOptions(value).then(function (response) {
          //The response is
          var data = response.body.data; //Set desc if possible

          if (data && data.length > 0) {
            _this3.onChange(data[0]);
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    };

    _this3.onChange = function (selectedObject) {
      _this3.setState({
        value: selectedObject
      }, function () {
        _this3.onChangeHandler(_this3.props.valueKey, selectedObject && selectedObject.code ? selectedObject.code : selectedObject, selectedObject);

        if (_this3.props.descKey) {
          _this3.onChangeHandler(_this3.props.descKey, selectedObject && selectedObject.desc ? selectedObject.desc : selectedObject, selectedObject, false);
        }

        if (_this3.props.autoSelectSingleElement && _this3.props.multi) {
          _this3.asyncComponent.select.focus();
        }
      });
    };

    _this3._adaptStringToArray = function (string) {
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

    _this3._getAutocompleteSuggestions = function (code, autocompleteFunction) {
      if (!code) {
        return Promise.resolve({
          options: []
        });
      } //Clear timeout


      clearTimeout(_this3.timeout);
      return _this3.makeDelay(_this3.props.delay).then(function () {
        //Cancel if there was request
        if (!!_this3.cancelSource) {
          _this3.cancelSource.cancel();
        }

        _this3.cancelSource = _index["default"].CancelToken.source();
        return autocompleteFunction(code, {
          cancelToken: _this3.cancelSource.token
        });
      }).then(function (response) {
        // if there is only one result then select it automatically
        if (_this3.props.autoSelectSingleElement) {
          if (response.body.data && response.body.data.length === 1 && (!_this3.props.value || _this3.props.value.indexOf(response.body.data[0].code) < 0)) {
            _this3.asyncComponent.select.selectValue(response.body.data[0]);

            if (_this3.props.multi) _this3.asyncComponent.select.focus();
          }
        }

        return response.body.data;
      }).then(function (json) {
        return {
          options: json
        };
      })["catch"](function (error) {
        /*Nothing*/
      });
    };

    _this3.makeDelay = function (t, v) {
      return new Promise(function (resolve) {
        _this3.timeout = setTimeout(resolve.bind(null, v), t);
      });
    };

    _this3.componentWillReceiveProps = function (nextProps) {
      if (!nextProps.value) {
        _this3.setState({
          value: undefined
        });
      } else {
        _this3.setState(function (prevState) {
          var newvalue = '';

          if (nextProps.multi) {
            newvalue = _this3._adaptStringToArray(nextProps.value);
          } else {
            newvalue = _objectSpread({}, prevState.value, {
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

    _this3.onFocusHandler = function () {
      //If no multi, set the value to be able to select it
      if (!_this3.props.multi && _this3.asyncComponent) _this3.asyncComponent.select.setState({
        inputValue: _this3.props.value
      });
    };

    var _newvalue = '';

    if (_this3.props.multi) {
      _newvalue = _this3._adaptStringToArray(_this3.props.value);
    } else {
      _newvalue = {
        code: _this3.props.value,
        desc: _this3.props.valueDesc
      };
    }

    _this3.state = {
      value: _newvalue
    };
    return _this3;
  } //To know if we are fetching desc


  _createClass(EAMAutocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.refToReactSelect) {
        this.props.refToReactSelect(this.asyncComponent);
      } //If there is code, but not desc, fetch the desc if possible


      this.fetchAutocompleteDescription();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      //If there is code, but not desc, fetch the desc if possible
      this.fetchAutocompleteDescription();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.isHidden()) {
        return _react["default"].createElement("div", null);
      }

      var _this$props2 = this.props,
          elementInfo = _this$props2.elementInfo,
          classes = _this$props2.classes,
          values = _this$props2.values,
          value = _this$props2.value,
          label = _this$props2.label,
          labelStyle = _this$props2.labelStyle,
          _loadOptions = _this$props2.loadOptions,
          valueKey = _this$props2.valueKey,
          columnsCodes = _this$props2.columnsCodes,
          columnsWidth = _this$props2.columnsWidth,
          validate = _this$props2.validate,
          otherProps = _objectWithoutProperties(_this$props2, ["elementInfo", "classes", "values", "value", "label", "labelStyle", "loadOptions", "valueKey", "columnsCodes", "columnsWidth", "validate"]);

      var AsyncComponent = this.props.creatable ? _reactSelect["default"].AsyncCreatable : _reactSelect["default"].Async;
      var selectClasses = this.props.selectStyle ? (0, _classnames["default"])(classes.select, this.props.selectStyle) : classes.select;
      return _react["default"].createElement("div", {
        className: classes.fieldContainer
      }, _react["default"].createElement(_EAMFormLabel["default"], {
        required: this.isRequired(),
        label: label || elementInfo && elementInfo.text,
        labelStyle: labelStyle,
        error: this.state.error
      }), _react["default"].createElement(AsyncComponent, _extends({
        ref: function ref(_ref) {
          return _this4.asyncComponent = _ref;
        },
        multi: this.props.multi,
        value: this.state.value,
        onChange: this.onChange,
        onFocus: this.onFocusHandler,
        disabled: this.state.disabled || elementInfo && elementInfo.readonly,
        className: !this.state.error ? selectClasses : "".concat(selectClasses, " ").concat(classes.fieldInvalid),
        valueKey: "code",
        labelKey: "desc",
        loadOptions: function loadOptions(code) {
          return _this4._getAutocompleteSuggestions(code, _loadOptions);
        },
        backspaceRemoves: this.props.backspaceRemoves,
        optionRenderer: function optionRenderer(option) {
          return _react["default"].createElement(AutocompleteOption, {
            option: option,
            columnsCodes: columnsCodes,
            columnsWidth: columnsWidth
          });
        },
        valueComponent: this.props.multi ? AutocompleteValue : AutocompleteValueSingle,
        cache: false,
        openOnFocus: true,
        placeholder: this.props.placeholder,
        searchPromptText: this.props.searchPromptText,
        promptTextCreator: this.props.promptTextCreator,
        arrowRenderer: function arrowRenderer() {
          return _react["default"].createElement("span", null);
        },
        filterOptions: this.props.creatable ? undefined : function (options) {
          return options;
        },
        clearable: true
      }, otherProps)), this.state.helperText && this.renderHelperText());
    }
  }]);

  return EAMAutocomplete;
}(_EAMBaseInput2["default"]);

EAMAutocomplete.propTypes = {
  columnsCodes: _propTypes["default"].array,
  columnsWidth: _propTypes["default"].array,
  autoSelectSingleElement: _propTypes["default"].bool,
  backspaceRemoves: _propTypes["default"].bool
};
EAMAutocomplete.defaultProps = {
  columnsCodes: ['code', 'desc'],
  columnsWidth: ['30%', '70%'],
  delay: 200,
  searchPromptText: '',
  promptTextCreator: function promptTextCreator(label) {
    return "Insert Code: ".concat(label);
  },
  autoSelectSingleElement: false,
  backspaceRemoves: true,
  placeholder: ''
};

var _default = (0, _styles.withStyles)(_EAMBaseInput2.formStyles)(EAMAutocomplete);

exports["default"] = _default;