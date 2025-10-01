function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React from "react";
import { DATA_GRID_SORT_TYPES, DATA_GRID_SORT_DIRECTIONS } from "./Constants";
export var DataGridContext = React.createContext();
var getDisplayValue = function getDisplayValue(_ref) {
  var row = _ref.row,
    columnMetadata = _ref.columnMetadata;
  return columnMetadata.getDisplayValue ? columnMetadata.getDisplayValue({
    row: row,
    columnMetadata: columnMetadata
  }) : row[columnMetadata.id];
};
export var DataGridProvider = function DataGridProvider(props) {
  var rows = props.rows,
    columnsMetadata = props.columnsMetadata,
    isSortEnabled = props.isSortEnabled,
    _props$sortBy = props.sortBy,
    sortBy = _props$sortBy === void 0 ? {} : _props$sortBy;
  var _React$useState = React.useState(sortBy.columnID),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    columnID = _React$useState2[0],
    setColumnID = _React$useState2[1];
  var _React$useState3 = React.useState(sortBy.direction || DATA_GRID_SORT_DIRECTIONS.ASC),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    direction = _React$useState4[0],
    setDirection = _React$useState4[1];
  var computedRows = rows;
  if (isSortEnabled && columnID) {
    computedRows = stableSort(rows, getComparator({
      columnMetadata: columnsMetadata.find(function (c) {
        return c.id === columnID;
      }),
      isSortEnabled: isSortEnabled,
      direction: direction
    }));
  }
  var context = {
    getDisplayValue: getDisplayValue,
    sortState: {
      columnID: columnID,
      setColumnID: setColumnID,
      direction: direction,
      setDirection: setDirection,
      isSortEnabled: isSortEnabled
    },
    rows: computedRows,
    columnsMetadata: columnsMetadata
  };
  return /*#__PURE__*/React.createElement(DataGridContext.Provider, {
    value: context
  }, props.children);
};
var descendingComparator = function descendingComparator(_ref2) {
  var a = _ref2.a,
    b = _ref2.b,
    property = _ref2.property;
  if (b[property] < a[property]) {
    return -1;
  }
  if (b[property] > a[property]) {
    return 1;
  }
  return 0;
};
var getDefaultComparator = function getDefaultComparator(_ref3) {
  var direction = _ref3.direction,
    property = _ref3.property;
  return function (a, b) {
    return (direction === DATA_GRID_SORT_DIRECTIONS.DESC ? 1 : -1) * descendingComparator({
      a: a,
      b: b,
      property: property
    });
  };
};
var getNumericComparator = function getNumericComparator(_ref4) {
  var direction = _ref4.direction,
    property = _ref4.property;
  var collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base"
  });
  return function (a, b) {
    return (direction === DATA_GRID_SORT_DIRECTIONS.DESC ? -1 : 1) * collator.compare(a[property], b[property]);
  };
};
var getDateTimeComparator = function getDateTimeComparator(_ref5) {
  var direction = _ref5.direction,
    property = _ref5.property;
  return function (a, b) {
    var valA = a?.[property];
    var valB = b?.[property];
    var dateA = valA instanceof Date ? valA.getTime() : new Date(valA).getTime();
    var dateB = valB instanceof Date ? valB.getTime() : new Date(valB).getTime();
    if (isNaN(dateA) && isNaN(dateB)) return 0;
    if (isNaN(dateA)) return direction === DATA_GRID_SORT_DIRECTIONS.DESC ? 1 : -1;
    if (isNaN(dateB)) return direction === DATA_GRID_SORT_DIRECTIONS.DESC ? -1 : 1;
    var result = dateA - dateB;
    return direction === DATA_GRID_SORT_DIRECTIONS.DESC ? -result : result;
  };
};
var getComparator = function getComparator(_ref6) {
  var columnMetadata = _ref6.columnMetadata,
    isSortEnabled = _ref6.isSortEnabled,
    direction = _ref6.direction;
  if (!isSortEnabled || !isSortEnabled(columnMetadata)) return;
  if (columnMetadata.comparator) {
    return columnMetadata.comparator({
      direction: direction,
      property: columnMetadata.id
    });
  }
  switch (columnMetadata.sortType) {
    case DATA_GRID_SORT_TYPES.DATETIME:
      return getDateTimeComparator({
        direction: direction,
        property: columnMetadata.id
      });
    case DATA_GRID_SORT_TYPES.NUMERIC:
      return getNumericComparator({
        direction: direction,
        property: columnMetadata.id
      });
    case DATA_GRID_SORT_TYPES.DEFAULT:
    default:
      return getDefaultComparator({
        direction: direction,
        property: columnMetadata.id
      });
  }
};
var stableSort = function stableSort(array, comparator) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
};