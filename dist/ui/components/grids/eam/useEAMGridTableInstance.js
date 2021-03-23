"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _reactTable = require("react-table");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DefaultCheckbox = (0, _core.withStyles)(function () {
  return {
    root: {
      padding: 0
    }
  };
})(_core.Checkbox);

var useSelectionCheckboxHook = function useSelectionCheckboxHook(selectable) {
  return function (hooks) {
    return hooks.visibleColumns.push(function (columns) {
      if (!selectable) return columns;
      return columns.length ? [{
        id: "selection",
        Header: function Header(_ref) {
          var getToggleAllRowsSelectedProps = _ref.getToggleAllRowsSelectedProps;
          return /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              display: 'flex',
              alignItems: 'center'
            }
          }, /*#__PURE__*/_react["default"].createElement(DefaultCheckbox, _extends({
            color: "primary",
            style: {
              display: 'table-cell'
            }
          }, getToggleAllRowsSelectedProps())));
        },
        Cell: function Cell(_ref2) {
          var row = _ref2.row;
          return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(DefaultCheckbox, _extends({
            color: "primary"
          }, row.getToggleRowSelectedProps())));
        },
        Filter: null,
        filter: null,
        disableSortBy: true,
        width: '',
        minWidth: 0,
        maxWidth: 150
      }].concat(_toConsumableArray(columns)) : columns;
    });
  };
};

var useEAMGridTableInstance = function useEAMGridTableInstance(settings) {
  var _settings$selectable = settings.selectable,
      selectable = _settings$selectable === void 0 ? false : _settings$selectable,
      useTableSettings = _objectWithoutProperties(settings, ["selectable"]);

  var tableInstance = (0, _reactTable.useTable)(useTableSettings, _reactTable.useFilters, _reactTable.useSortBy, _reactTable.useRowSelect, _reactTable.useFlexLayout, useSelectionCheckboxHook(selectable));
  return tableInstance;
};

var _default = useEAMGridTableInstance;
exports["default"] = _default;