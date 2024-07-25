function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["elementInfo", "classes", "values", "value", "label", "labelStyle", "loadOptions", "valueKey", "columnsCodes", "columnsWidth", "validate"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import EAMBaseInput, { formStyles } from "./EAMBaseInput";
import EAMFormLabel from "./EAMFormLabel";
import classNames from 'classnames';
import axios from "axios/index";
import 'react-select/dist/react-select.css';
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
var AutocompleteOption = /*#__PURE__*/function (_Component) {
  _inherits(AutocompleteOption, _Component);
  var _super = _createSuper(AutocompleteOption);
  function AutocompleteOption() {
    _classCallCheck(this, AutocompleteOption);
    return _super.apply(this, arguments);
  }
  _createClass(AutocompleteOption, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        classes = _this$props.classes,
        columnsCodes = _this$props.columnsCodes,
        columnsWidth = _this$props.columnsWidth;
      return /*#__PURE__*/React.createElement("div", {
        className: this.props.className,
        title: this.props.option.code
      }, /*#__PURE__*/React.createElement("div", {
        className: classes.rowMenuDiv
      }, columnsCodes.map(function (columnCode, index) {
        return /*#__PURE__*/React.createElement("div", {
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
}(Component);
AutocompleteOption.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
  onFocus: PropTypes.func,
  onSelect: PropTypes.func,
  option: PropTypes.object.isRequired
};
AutocompleteOption = withStyles(autocompleteOptionStyles)(AutocompleteOption);
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
var AutocompleteValue = /*#__PURE__*/function (_Component2) {
  _inherits(AutocompleteValue, _Component2);
  var _super2 = _createSuper(AutocompleteValue);
  function AutocompleteValue() {
    var _this2;
    _classCallCheck(this, AutocompleteValue);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
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
      return /*#__PURE__*/React.createElement("div", {
        className: "Select-value",
        title: this.props.value.code
      }, /*#__PURE__*/React.createElement("span", {
        className: "Select-value-icon",
        "aria-hidden": "true",
        onClick: this.removeOption
      }, "x"), /*#__PURE__*/React.createElement("span", {
        className: "Select-value-label"
      }, /*#__PURE__*/React.createElement("div", {
        className: classes.rowMenuDiv
      }, /*#__PURE__*/React.createElement("div", {
        className: classNames(classes.cell, classes.cellCode)
      }, this.props.value.code), this.props.value.desc && /*#__PURE__*/React.createElement("div", {
        className: classNames(classes.cell, classes.cellDesc)
      }, "- ", this.props.value.desc))));
    }
  }]);
  return AutocompleteValue;
}(Component);
AutocompleteValue.propTypes = {
  children: PropTypes.node,
  value: PropTypes.object
};
AutocompleteValue = withStyles(autocompleteValueStyles)(AutocompleteValue);
var AutocompleteValueSingle = /*#__PURE__*/function (_Component3) {
  _inherits(AutocompleteValueSingle, _Component3);
  var _super3 = _createSuper(AutocompleteValueSingle);
  function AutocompleteValueSingle() {
    _classCallCheck(this, AutocompleteValueSingle);
    return _super3.apply(this, arguments);
  }
  _createClass(AutocompleteValueSingle, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return /*#__PURE__*/React.createElement("div", {
        className: "Select-value",
        title: this.props.value.code
      }, /*#__PURE__*/React.createElement("span", {
        className: "Select-value-label"
      }, /*#__PURE__*/React.createElement("div", {
        className: classes.rowMenuDiv
      }, /*#__PURE__*/React.createElement("div", {
        className: classNames(classes.cell, classes.cellCode)
      }, this.props.value.code), this.props.value.desc && /*#__PURE__*/React.createElement("div", {
        className: classNames(classes.cell, classes.cellDesc)
      }, "- ", this.props.value.desc))));
    }
  }]);
  return AutocompleteValueSingle;
}(Component);
AutocompleteValueSingle.propTypes = {
  children: PropTypes.node,
  value: PropTypes.object
};
AutocompleteValueSingle = withStyles(autocompleteValueStyles)(AutocompleteValueSingle);

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
var EAMAutocomplete = /*#__PURE__*/function (_EAMBaseInput) {
  _inherits(EAMAutocomplete, _EAMBaseInput);
  var _super4 = _createSuper(EAMAutocomplete);
  function EAMAutocomplete(props) {
    var _this3;
    _classCallCheck(this, EAMAutocomplete);
    _this3 = _super4.call(this, props);
    //To know if we are fetching desc
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
          var data = response.body.data;
          //Set desc if possible
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
      }

      //Clear timeout
      clearTimeout(_this3.timeout);
      return _this3.makeDelay(_this3.props.delay).then(function () {
        //Cancel if there was request
        if (!!_this3.cancelSource) {
          _this3.cancelSource.cancel();
        }
        _this3.cancelSource = axios.CancelToken.source();
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
  }
  _createClass(EAMAutocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.refToReactSelect) {
        this.props.refToReactSelect(this.asyncComponent);
      }
      //If there is code, but not desc, fetch the desc if possible
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
        return /*#__PURE__*/React.createElement("div", null);
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
        otherProps = _objectWithoutProperties(_this$props2, _excluded);
      var AsyncComponent = this.props.creatable ? Select.AsyncCreatable : Select.Async;
      var selectClasses = this.props.selectStyle ? classNames(classes.select, this.props.selectStyle) : classes.select;
      return /*#__PURE__*/React.createElement("div", {
        className: classes.fieldContainer
      }, /*#__PURE__*/React.createElement(EAMFormLabel, {
        required: this.isRequired(),
        label: label || elementInfo && elementInfo.text,
        labelStyle: labelStyle,
        error: this.state.error
      }), /*#__PURE__*/React.createElement(AsyncComponent, _extends({
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
          return /*#__PURE__*/React.createElement(AutocompleteOption, {
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
          return /*#__PURE__*/React.createElement("span", null);
        },
        filterOptions: function filterOptions(options, label) {
          return options.filter(function (option) {
            return !_this4.props.creatable || option !== _this4.props.promptTextCreator(label);
          });
        },
        clearable: true
      }, otherProps)), this.state.helperText && this.renderHelperText());
    }
  }]);
  return EAMAutocomplete;
}(EAMBaseInput);
EAMAutocomplete.propTypes = {
  columnsCodes: PropTypes.array,
  columnsWidth: PropTypes.array,
  autoSelectSingleElement: PropTypes.bool,
  backspaceRemoves: PropTypes.bool
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
export default withStyles(formStyles)(EAMAutocomplete);