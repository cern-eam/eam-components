"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ChecklistFieldQuantitative = _interopRequireDefault(require("./fields/ChecklistFieldQuantitative"));

var _ChecklistFieldCheckbox = _interopRequireDefault(require("./fields/ChecklistFieldCheckbox"));

var _ChecklistFieldFinding = _interopRequireDefault(require("./fields/ChecklistFieldFinding"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ChecklistItemInput =
/*#__PURE__*/
function (_Component) {
  _inherits(ChecklistItemInput, _Component);

  function ChecklistItemInput() {
    _classCallCheck(this, ChecklistItemInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChecklistItemInput).apply(this, arguments));
  }

  _createClass(ChecklistItemInput, [{
    key: "handleChange",
    value: function handleChange(type, value) {
      var _this$props$checklist = this.props.checklistItem,
          result = _this$props$checklist.result,
          finding = _this$props$checklist.finding,
          numericValue = _this$props$checklist.numericValue;
      var key;
      var newResult, newFinding, newNumericValue;

      switch (type) {
        case ChecklistItemInput.FIELD.CHECKBOX:
          newResult = value === result ? null : value;
          break;

        case ChecklistItemInput.FIELD.FINDING:
          newFinding = value === finding ? null : value;
          break;

        case ChecklistItemInput.FIELD.QUANTITATIVE:
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
          return _react["default"].createElement(_ChecklistFieldCheckbox["default"], {
            code: options.code,
            desc: options.desc,
            checked: checklistItem.result === options.code,
            handleChange: function handleChange(code) {
              return _this.handleChange(ChecklistItemInput.FIELD.CHECKBOX, code);
            },
            key: key
          });

        case ChecklistItemInput.FIELD.FINDING:
          return _react["default"].createElement(_ChecklistFieldFinding["default"], {
            dropdown: options.dropdown,
            finding: checklistItem.finding || '',
            handleChange: function handleChange(code) {
              return _this.handleChange(ChecklistItemInput.FIELD.FINDING, code);
            },
            possibleFindings: checklistItem.possibleFindings,
            key: key
          });

        case ChecklistItemInput.FIELD.QUANTITATIVE:
          return _react["default"].createElement(_ChecklistFieldQuantitative["default"], {
            value: checklistItem.numericValue || '',
            UOM: checklistItem.UOM,
            handleChange: function handleChange(value) {
              return _this.handleChange(ChecklistItemInput.FIELD.QUANTITATIVE, value);
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;
          fieldsRender.push(this.renderField(field, ++key));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return _react["default"].createElement("div", {
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
  flex: "0 0 240px",
  display: "flex",
  marginLeft: 10
};
var ROWS = {
  flex: "0 0 240px",
  display: "flex",
  position: "relative",
  marginLeft: 10,
  flexDirection: "column"
};
var SAMELINE = {
  flex: "0 0 240px",
  display: "flex",
  marginLeft: 10,
  flexWrap: "wrap",
  justifyContent: "space-between"
};
ChecklistItemInput.STYLE = {
  SINGLE: SINGLE,
  ROWS: ROWS,
  SAMELINE: SAMELINE
};