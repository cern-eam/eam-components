function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var getComparator = function getComparator(_ref5) {
  var columnMetadata = _ref5.columnMetadata,
    isSortEnabled = _ref5.isSortEnabled,
    direction = _ref5.direction;
  if (!isSortEnabled || !isSortEnabled(columnMetadata)) return;
  if (columnMetadata.comparator) {
    return columnMetadata.comparator({
      direction: direction,
      property: columnMetadata.id
    });
  }
  switch (columnMetadata.sortType) {
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