function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _ChecklistItemInput$F;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
import ChecklistFieldNumeric from './fields/ChecklistFieldNumeric';
import ChecklistFieldCheckbox from './fields/ChecklistFieldCheckbox';
import ChecklistFieldFinding from './fields/ChecklistFieldFinding';
import ChecklistFieldAlphaNumeric from './fields/ChecklistFieldAlphaNumeric';
import EAMDatePicker from "../inputs-ng/EAMDatePicker";
import EAMDateTimePicker from "../inputs-ng/EAMDateTimePicker";
import EAMAutocomplete from "../inputs-ng/EAMAutocomplete";
import WSChecklists from '../../../tools/WSChecklists';
import ChecklistFieldRadio from './fields/ChecklistFieldRadio';
var ChecklistItemInput = /*#__PURE__*/function (_Component) {
  _inherits(ChecklistItemInput, _Component);
  var _super = _createSuper(ChecklistItemInput);
  function ChecklistItemInput() {
    _classCallCheck(this, ChecklistItemInput);
    return _super.apply(this, arguments);
  }
  _createClass(ChecklistItemInput, [{
    key: "handleChange",
    value: function handleChange(type, value, onFail) {
      var _objectSpread2,
        _this = this;
      var _this$props$checklist = this.props.checklistItem,
        result = _this$props$checklist.result,
        finding = _this$props$checklist.finding,
        numericValue = _this$props$checklist.numericValue,
        numericValue2 = _this$props$checklist.numericValue2,
        freeText = _this$props$checklist.freeText,
        date = _this$props$checklist.date,
        dateTime = _this$props$checklist.dateTime,
        entityCode = _this$props$checklist.entityCode;
      var newResult, newFinding, newNumericValue, newNumericValue2, newAlphaNumericValue, newDate, newDateTime, newEntityCode;
      switch (type) {
        case ChecklistItemInput.FIELD.CHECKBOX:
        case ChecklistItemInput.FIELD.RADIO:
          newResult = value === result ? null : value;
          break;
        case ChecklistItemInput.FIELD.FINDING:
          newFinding = value;
          break;
        case ChecklistItemInput.FIELD.NUMERIC:
          newNumericValue = value;
          break;
        case ChecklistItemInput.FIELD.NUMERIC2:
          newNumericValue2 = value;
          break;
        case ChecklistItemInput.FIELD.NUMERIC2:
          newNumericValue2 = value;
          break;
        case ChecklistItemInput.FIELD.ALPHANUMERIC:
          newAlphaNumericValue = value;
          break;
        case ChecklistItemInput.FIELD.DATE:
          newDate = value;
          break;
        case ChecklistItemInput.FIELD.DATETIME:
          newDateTime = value;
          break;
        case ChecklistItemInput.FIELD.ENTITY:
          newEntityCode = value;
          break;
      }
      var newProps = _objectSpread({}, this.props.checklistItem, (_objectSpread2 = {
        result: newResult === undefined ? result : newResult,
        finding: newFinding === undefined ? finding : newFinding,
        numericValue: newNumericValue === undefined ? numericValue : newNumericValue,
        numericValue2: newNumericValue2 === undefined ? numericValue2 : newNumericValue2
      }, _defineProperty(_objectSpread2, "numericValue2", newNumericValue2 === undefined ? numericValue2 : newNumericValue2), _defineProperty(_objectSpread2, "freeText", newAlphaNumericValue === undefined ? freeText : newAlphaNumericValue.trim()), _defineProperty(_objectSpread2, "date", newDate === undefined ? date : newDate), _defineProperty(_objectSpread2, "dateTime", newDateTime === undefined ? dateTime : newDateTime), _defineProperty(_objectSpread2, "entityCode", newEntityCode === undefined ? entityCode : newEntityCode), _objectSpread2));
      if (this.options.beforeOnChange && typeof this.options.beforeOnChange === 'function') {
        newProps = this.options.beforeOnChange(newProps, type, value);
      }
      var hasChanged = Object.keys(newProps).some(function (key) {
        return newProps[key] !== _this.props.checklistItem[key];
      });
      if (!hasChanged) {
        return;
      }
      this.props.onChange(newProps, onFail);
    }
  }, {
    key: "renderField",
    value: function renderField(field, key) {
      var _this2 = this;
      var _this$props = this.props,
        checklistItem = _this$props.checklistItem,
        showError = _this$props.showError,
        disabled = _this$props.disabled;
      var type = field[0];
      var options = field[1] || {};
      switch (type) {
        case ChecklistItemInput.FIELD.CHECKBOX:
          return /*#__PURE__*/React.createElement(ChecklistFieldCheckbox, {
            code: options.code,
            desc: options.desc,
            checked: checklistItem.result === options.code,
            handleChange: function handleChange(code) {
              return _this2.handleChange(ChecklistItemInput.FIELD.CHECKBOX, code);
            },
            key: key,
            disabled: disabled
          });
        case ChecklistItemInput.FIELD.RADIO:
          return /*#__PURE__*/React.createElement(ChecklistFieldRadio, {
            code: options.code,
            desc: options.desc,
            checked: checklistItem.result === options.code,
            handleChange: function handleChange(code) {
              return _this2.handleChange(ChecklistItemInput.FIELD.RADIO, code);
            },
            key: key,
            disabled: disabled
          });
        case ChecklistItemInput.FIELD.FINDING:
          return /*#__PURE__*/React.createElement(ChecklistFieldFinding, {
            dropdown: options.dropdown,
            label: this.options.label,
            finding: checklistItem.finding,
            handleChange: function handleChange(code) {
              return _this2.handleChange(ChecklistItemInput.FIELD.FINDING, code);
            },
            possibleFindings: checklistItem.possibleFindings,
            key: key,
            disabled: disabled
          });
        case ChecklistItemInput.FIELD.NUMERIC:
          return /*#__PURE__*/React.createElement(ChecklistFieldNumeric, {
            value: checklistItem.numericValue,
            UOM: checklistItem.UOM,
            minimumValue: checklistItem.minimumValue,
            maximumValue: checklistItem.maximumValue,
            handleChange: function handleChange(value, onFail) {
              return _this2.handleChange(ChecklistItemInput.FIELD.NUMERIC, value, onFail);
            },
            key: key,
            showError: showError,
            disabled: disabled,
            slider: this.options.slider,
            sliderRange: true
          });
        case ChecklistItemInput.FIELD.NUMERIC2:
          return /*#__PURE__*/React.createElement(ChecklistFieldNumeric, {
            value: checklistItem.numericValue2,
            UOM: checklistItem.UOM2,
            minimumValue: checklistItem.minimumValue2,
            maximumValue: checklistItem.maximumValue2,
            handleChange: function handleChange(value, onFail) {
              return _this2.handleChange(ChecklistItemInput.FIELD.NUMERIC2, value, onFail);
            },
            key: key,
            showError: showError,
            disabled: disabled,
            slider: this.options.slider,
            sliderRange: true
          });
        case ChecklistItemInput.FIELD.ALPHANUMERIC:
          return /*#__PURE__*/React.createElement(ChecklistFieldAlphaNumeric, {
            value: checklistItem.freeText,
            maxLength: 4000,
            handleChange: function handleChange(value, onFail) {
              return _this2.handleChange(ChecklistItemInput.FIELD.ALPHANUMERIC, value, onFail);
            },
            key: key,
            disabled: disabled
          });
        case ChecklistItemInput.FIELD.DATE:
          return /*#__PURE__*/React.createElement(EAMDatePicker, {
            value: checklistItem.date,
            onChange: function onChange(value) {
              return _this2.handleChange(ChecklistItemInput.FIELD.DATE, value, null);
            },
            key: key,
            disabled: disabled,
            endAdornmentStyle: {
              marginRight: "1px"
            },
            style: {
              marginRight: "0px"
            }
          });
        case ChecklistItemInput.FIELD.DATETIME:
          return /*#__PURE__*/React.createElement(EAMDateTimePicker, {
            value: checklistItem.dateTime,
            onChange: function onChange(value) {
              return _this2.handleChange(ChecklistItemInput.FIELD.DATETIME, value, null);
            },
            key: key,
            disabled: disabled,
            endAdornmentStyle: {
              marginRight: "1px"
            },
            style: {
              marginRight: "0px"
            }
          });
        case ChecklistItemInput.FIELD.ENTITY:
          return /*#__PURE__*/React.createElement(EAMAutocomplete, {
            style: {
              minWidth: '240px',
              marginLeft: '10px'
            },
            barcodeScanner: true,
            value: checklistItem.entityCode,
            onChange: function onChange(entity) {
              return _this2.handleChange(ChecklistItemInput.FIELD.ENTITY, entity.code, function () {
                entity.desc = '';
              });
            },
            rightAlign: true,
            autocompleteHandler: WSChecklists.autocompleteEntity,
            autocompleteHandlerParams: [checklistItem.entityType, checklistItem.entityClass]
          });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        fields = _this$props2.fields,
        options = _this$props2.options;
      this.options = options;
      var fieldsRender = [];
      var key = 0;
      var _iterator = _createForOfIteratorHelper(fields),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var field = _step.value;
          fieldsRender.push(this.renderField(field, ++key));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return /*#__PURE__*/React.createElement("div", {
        onClick: function onClick(event) {
          return event.stopPropagation();
        },
        style: options.style || ChecklistItemInput.STYLE.ROWS
      }, fieldsRender);
    }
  }]);
  return ChecklistItemInput;
}(Component);
export { ChecklistItemInput as default };
ChecklistItemInput.FIELD = (_ChecklistItemInput$F = {
  CHECKBOX: "CHECKBOX",
  RADIO: "RADIO",
  NUMERIC: "NUMERIC",
  NUMERIC2: "NUMERIC2"
}, _defineProperty(_ChecklistItemInput$F, "NUMERIC2", "NUMERIC2"), _defineProperty(_ChecklistItemInput$F, "FINDING", "FINDING"), _defineProperty(_ChecklistItemInput$F, "ALPHANUMERIC", "ALPHANUMERIC"), _defineProperty(_ChecklistItemInput$F, "DATE", "DATE"), _defineProperty(_ChecklistItemInput$F, "DATETIME", "DATETIME"), _defineProperty(_ChecklistItemInput$F, "ENTITY", "ENTITY"), _ChecklistItemInput$F);
var SINGLE_EXPAND = {
  flex: "1",
  display: "flex",
  justifyContent: "flex-end"
};
var SAMELINE = {
  display: "flex",
  marginLeft: "auto",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "flex-end",
  flexDirection: "row"
};
ChecklistItemInput.STYLE = {
  SAMELINE: SAMELINE,
  SINGLE_EXPAND: SINGLE_EXPAND
};
ChecklistItemInput.createField = function (type, options) {
  return [type, options];
};