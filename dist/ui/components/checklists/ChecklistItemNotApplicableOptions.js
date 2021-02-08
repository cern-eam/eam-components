"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(props) {
  var notApplicableOptions = props.notApplicableOptions,
      checklistItem = props.checklistItem,
      _onChange = props.onChange;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 2
    }
  }, "Not Applicable Option: ", /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: checklistItem.notApplicableOption || '',
    onChange: function onChange(event) {
      return _onChange(_objectSpread({}, checklistItem, {
        notApplicableOption: event.target.value
      }));
    },
    style: {
      width: '227px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: ''
  }, "\u200B"), notApplicableOptions.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: option.code,
      value: option.code
    }, option.desc);
  })));
};

exports["default"] = _default;