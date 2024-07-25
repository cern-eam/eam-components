function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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
  function ChecklistItemInput() {
    _classCallCheck(this, ChecklistItemInput);
    return _callSuper(this, ChecklistItemInput, arguments);
  }
  _inherits(ChecklistItemInput, _Component);
  return _createClass(ChecklistItemInput, [{
    key: "handleChange",
    value: function handleChange(type, value, onFail) {
      var _this = this;
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
      var newProps = _objectSpread({}, this.props.checklistItem, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        result: newResult === undefined ? result : newResult,
        finding: newFinding === undefined ? finding : newFinding,
        numericValue: newNumericValue === undefined ? numericValue : newNumericValue,
        numericValue2: newNumericValue2 === undefined ? numericValue2 : newNumericValue2
      }, "numericValue2", newNumericValue2 === undefined ? numericValue2 : newNumericValue2), "freeText", newAlphaNumericValue === undefined ? freeText : newAlphaNumericValue.trim()), "date", newDate === undefined ? date : newDate), "dateTime", newDateTime === undefined ? dateTime : newDateTime), "entityCode", newEntityCode === undefined ? entityCode : newEntityCode));
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
}(Component);
export { ChecklistItemInput as default };
ChecklistItemInput.FIELD = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
  CHECKBOX: "CHECKBOX",
  RADIO: "RADIO",
  NUMERIC: "NUMERIC",
  NUMERIC2: "NUMERIC2"
}, "NUMERIC2", "NUMERIC2"), "FINDING", "FINDING"), "ALPHANUMERIC", "ALPHANUMERIC"), "DATE", "DATE"), "DATETIME", "DATETIME"), "ENTITY", "ENTITY");
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