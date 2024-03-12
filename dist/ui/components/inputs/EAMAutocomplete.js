function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["elementInfo", "classes", "values", "value", "label", "labelStyle", "loadOptions", "valueKey", "columnsCodes", "columnsWidth", "validate"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import withStyles from '@mui/styles/withStyles';
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
  function AutocompleteOption() {
    _classCallCheck(this, AutocompleteOption);
    return _callSuper(this, AutocompleteOption, arguments);
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
  function AutocompleteValue() {
    var _this2;
    _classCallCheck(this, AutocompleteValue);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _callSuper(this, AutocompleteValue, [].concat(args));
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
  function AutocompleteValueSingle() {
    _classCallCheck(this, AutocompleteValueSingle);
    return _callSuper(this, AutocompleteValueSingle, arguments);
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
  function EAMAutocomplete(props) {
    var _this3;
    _classCallCheck(this, EAMAutocomplete);
    _this3 = _callSuper(this, EAMAutocomplete, [props]);
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