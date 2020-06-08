"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ChecklistFieldNumeric = _interopRequireDefault(require("./fields/ChecklistFieldNumeric"));

var _ChecklistFieldCheckbox = _interopRequireDefault(require("./fields/ChecklistFieldCheckbox"));

var _ChecklistFieldFinding = _interopRequireDefault(require("./fields/ChecklistFieldFinding"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ChecklistItemInput = /*#__PURE__*/function (_Component) {
  _inherits(ChecklistItemInput, _Component);

  var _super = _createSuper(ChecklistItemInput);

  function ChecklistItemInput() {
    _classCallCheck(this, ChecklistItemInput);

    return _super.apply(this, arguments);
  }

  _createClass(ChecklistItemInput, [{
    key: "handleChange",
    value: function handleChange(type, value) {
      var _this$props$checklist = this.props.checklistItem,
          result = _this$props$checklist.result,
          finding = _this$props$checklist.finding,
          numericValue = _this$props$checklist.numericValue;
      var newResult, newFinding, newNumericValue;

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
      }

      var newProps = _objectSpread({}, this.props.checklistItem, {
        result: newResult === undefined ? result : newResult,
        finding: newFinding === undefined ? finding : newFinding,
        numericValue: newNumericValue === undefined ? numericValue : newNumericValue
      });

      if (this.options.beforeOnChange && typeof this.options.beforeOnChange === 'function') {
        newProps = this.options.beforeOnChange(newProps, type, value);
      }

      this.props.onChange(newProps);
    }
  }, {
    key: "renderField",
    value: function renderField(field, key) {
      var _this = this;

      var checklistItem = this.props.checklistItem;
      var type = field[0];
      var options = field[1] || {};

      switch (type) {
        case ChecklistItemInput.FIELD.CHECKBOX:
          return /*#__PURE__*/_react["default"].createElement(_ChecklistFieldCheckbox["default"], {
            code: options.code,
            desc: options.desc,
            checked: checklistItem.result === options.code,
            handleChange: function handleChange(code) {
              return _this.handleChange(ChecklistItemInput.FIELD.CHECKBOX, code);
            },
            key: key
          });

        case ChecklistItemInput.FIELD.FINDING:
          return /*#__PURE__*/_react["default"].createElement(_ChecklistFieldFinding["default"], {
            dropdown: options.dropdown,
            finding: checklistItem.finding,
            handleChange: function handleChange(code) {
              return _this.handleChange(ChecklistItemInput.FIELD.FINDING, code);
            },
            possibleFindings: checklistItem.possibleFindings,
            key: key
          });

        case ChecklistItemInput.FIELD.NUMERIC:
          return /*#__PURE__*/_react["default"].createElement(_ChecklistFieldNumeric["default"], {
            value: checklistItem.numericValue,
            UOM: checklistItem.UOM,
            handleChange: function handleChange(value) {
              return _this.handleChange(ChecklistItemInput.FIELD.NUMERIC, value);
            },
            key: key
          });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fields = _this$props.fields,
          options = _this$props.options;
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

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: options.style || ChecklistItemInput.STYLE.ROWS
      }, fieldsRender);
    }
  }]);

  return ChecklistItemInput;
}(_react.Component);

exports["default"] = ChecklistItemInput;
ChecklistItemInput.FIELD = {
  CHECKBOX: "CHECKBOX",
  NUMERIC: "NUMERIC",
  FINDING: "FINDING"
};
var SINGLE = {
  flex: "0 0 186px",
  display: "flex",
  marginLeft: "auto"
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
  SAMELINE: SAMELINE
};

ChecklistItemInput.createField = function (type, options) {
  return [type, options];
};