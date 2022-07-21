function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React, { Component } from 'react';
import ChecklistFieldNumeric from './fields/ChecklistFieldNumeric';
import ChecklistFieldCheckbox from './fields/ChecklistFieldCheckbox';
import ChecklistFieldFinding from './fields/ChecklistFieldFinding';
import ChecklistFieldAlphaNumeric from './fields/ChecklistFieldAlphaNumeric';
import EAMDatePicker from "../muiinputs/EAMDatePicker";
import EAMDateTimePicker from "../muiinputs/EAMDateTimePicker";

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
      var _this$props$checklist = this.props.checklistItem,
          result = _this$props$checklist.result,
          finding = _this$props$checklist.finding,
          numericValue = _this$props$checklist.numericValue,
          freeText = _this$props$checklist.freeText,
          date = _this$props$checklist.date,
          dateTime = _this$props$checklist.dateTime;
      var newResult, newFinding, newNumericValue, newAlphaNumericValue, newDate, newDateTime;

      switch (type) {
        case ChecklistItemInput.FIELD.CHECKBOX:
          newResult = value === result ? null : value;
          break;

        case ChecklistItemInput.FIELD.FINDING:
          newFinding = value;
          break;

        case ChecklistItemInput.FIELD.NUMERIC:
          newNumericValue = value;
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
      }

      var newProps = _objectSpread({}, this.props.checklistItem, {
        result: newResult === undefined ? result : newResult,
        finding: newFinding === undefined ? finding : newFinding,
        numericValue: newNumericValue === undefined ? numericValue : newNumericValue,
        freeText: newAlphaNumericValue === undefined ? freeText : newAlphaNumericValue.trim(),
        date: newDate === undefined ? date : newDate,
        dateTime: newDateTime === undefined ? dateTime : newDateTime
      });

      if (this.options.beforeOnChange && typeof this.options.beforeOnChange === 'function') {
        newProps = this.options.beforeOnChange(newProps, type, value);
      }

      this.props.onChange(newProps, onFail);
    }
  }, {
    key: "renderField",
    value: function renderField(field, key) {
      var _this = this;

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
              return _this.handleChange(ChecklistItemInput.FIELD.CHECKBOX, code);
            },
            key: key,
            disabled: disabled
          });

        case ChecklistItemInput.FIELD.FINDING:
          return /*#__PURE__*/React.createElement(ChecklistFieldFinding, {
            dropdown: options.dropdown,
            finding: checklistItem.finding,
            handleChange: function handleChange(code) {
              return _this.handleChange(ChecklistItemInput.FIELD.FINDING, code);
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
              return _this.handleChange(ChecklistItemInput.FIELD.NUMERIC, value, onFail);
            },
            key: key,
            showError: showError,
            disabled: disabled
          });

        case ChecklistItemInput.FIELD.ALPHANUMERIC:
          return /*#__PURE__*/React.createElement(ChecklistFieldAlphaNumeric, {
            value: checklistItem.freeText,
            maxLength: 4000,
            handleChange: function handleChange(value, onFail) {
              return _this.handleChange(ChecklistItemInput.FIELD.ALPHANUMERIC, value, onFail);
            },
            key: key,
            disabled: disabled
          });

        case ChecklistItemInput.FIELD.DATE:
          return /*#__PURE__*/React.createElement(EAMDatePicker, {
            value: checklistItem.date,
            updateProperty: function updateProperty(value, onFail) {
              return _this.handleChange(ChecklistItemInput.FIELD.DATE, value, onFail);
            },
            key: key,
            disabled: disabled
          });

        case ChecklistItemInput.FIELD.DATETIME:
          return /*#__PURE__*/React.createElement(EAMDateTimePicker, {
            value: checklistItem.dateTime,
            updateProperty: function updateProperty(value, onFail) {
              return _this.handleChange(ChecklistItemInput.FIELD.DATETIME, value, onFail);
            },
            key: key,
            disabled: disabled
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
        style: options.style || ChecklistItemInput.STYLE.ROWS
      }, fieldsRender);
    }
  }]);

  return ChecklistItemInput;
}(Component);

export { ChecklistItemInput as default };
ChecklistItemInput.FIELD = {
  CHECKBOX: "CHECKBOX",
  NUMERIC: "NUMERIC",
  FINDING: "FINDING",
  ALPHANUMERIC: "ALPHANUMERIC",
  DATE: "DATE",
  DATETIME: "DATETIME"
};
var SINGLE = {
  flex: "0 0 186px",
  display: "flex",
  marginLeft: "auto"
};
var SINGLE_EXPAND = {
  flex: "1 0 auto",
  marginLeft: "auto",
  display: "flex"
};
var ROWS = {
  flex: "0 0 186px",
  display: "flex",
  position: "relative",
  marginLeft: "auto",
  flexDirection: "column"
};
var SAMELINE = {
  flex: "0 0 186px",
  display: "flex",
  marginLeft: "auto",
  flexWrap: "wrap",
  justifyContent: "space-between"
};
ChecklistItemInput.STYLE = {
  SINGLE: SINGLE,
  ROWS: ROWS,
  SAMELINE: SAMELINE,
  SINGLE_EXPAND: SINGLE_EXPAND
};

ChecklistItemInput.createField = function (type, options) {
  return [type, options];
};