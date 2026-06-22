var _excluded = ["selectable", "modifyColumns", "isRowSelectable"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import React from "react";
import { Checkbox } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import { useFilters, useFlexLayout, useRowSelect, useSortBy, useTable } from "react-table";
var DefaultCheckbox = withStyles(function () {
  return {
    root: {
      padding: 0
    }
  };
})(Checkbox);
var useModifyColumns = function useModifyColumns(modifyColumns) {
  return function (hooks) {
    return hooks.visibleColumns.push(function (columns) {
      return columns.length ? modifyColumns?.(columns) ?? columns : columns;
    });
  };
};
var useSelectionCheckboxHook = function useSelectionCheckboxHook(selectable) {
  var isRowSelectable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return true;
  };
  return function (hooks) {
    return hooks.visibleColumns.push(function (columns) {
      if (!selectable) return columns;
      return columns.length ? [{
        id: "__selection",
        Header: function Header(_ref) {
          var getToggleAllRowsSelectedProps = _ref.getToggleAllRowsSelectedProps;
          return /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              minWidth: 42,
              maxWidth: 42
            }
          }, /*#__PURE__*/React.createElement(DefaultCheckbox, _extends({
            color: "primary",
            style: {
              display: 'table-cell'
            }
          }, getToggleAllRowsSelectedProps())));
        },
        Cell: function Cell(_ref2) {
          var row = _ref2.row;
          return isRowSelectable(row?.values) ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DefaultCheckbox, _extends({
            color: "primary"
          }, row.getToggleRowSelectedProps()))) : null;
        },
        Filter: null,
        filter: null,
        width: '',
        minWidth: 42,
        maxWidth: 42,
        _canSort: false,
        _canFilter: false
      }].concat(_toConsumableArray(columns)) : columns;
    });
  };
};
var useEAMGridTableInstance = function useEAMGridTableInstance(settings) {
  var _settings$selectable = settings.selectable,
    selectable = _settings$selectable === void 0 ? false : _settings$selectable,
    modifyColumns = settings.modifyColumns,
    isRowSelectable = settings.isRowSelectable,
    useTableSettings = _objectWithoutProperties(settings, _excluded);
  var tableInstance = useTable(useTableSettings, useFilters, useSortBy, useRowSelect, useFlexLayout, useSelectionCheckboxHook(selectable, isRowSelectable), useModifyColumns(modifyColumns));
  return tableInstance;
};
export default useEAMGridTableInstance;