"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataGridProvider = exports.DataGridContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _Constants = require("./Constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DataGridContext = _react["default"].createContext();

exports.DataGridContext = DataGridContext;

var getValue = function getValue(_ref) {
  var row = _ref.row,
      column = _ref.column;
  return column.getValue ? column.getValue({
    row: row,
    column: column
  }) : row[column.id];
};

var isColumnSortable = function isColumnSortable(_ref2) {
  var _ref2$sortableColumns = _ref2.sortableColumns,
      sortableColumns = _ref2$sortableColumns === void 0 ? [] : _ref2$sortableColumns,
      enableSorting = _ref2.enableSorting;
  return function (_ref3) {
    var columnID = _ref3.columnID;
    return enableSorting && sortableColumns.map(function (e) {
      return e.id;
    }).includes(columnID);
  };
};

var DataGridProvider = function DataGridProvider(props) {
  var rows = props.rows,
      columns = props.columns,
      _props$sortableColumn = props.sortableColumns,
      sortableColumns = _props$sortableColumn === void 0 ? [] : _props$sortableColumn,
      enableSorting = props.enableSorting;

  var _React$useState = _react["default"].useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      columnID = _React$useState2[0],
      setColumnID = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      direction = _React$useState4[0],
      setDirection = _React$useState4[1];

  var sortedRows = rows;

  if (sortableColumns && sortableColumns.length && columnID) {
    sortedRows = stableSort(rows, getComparator({
      sortableColumn: sortableColumns.find(function (e) {
        return e.id === columnID;
      }),
      direction: direction
    }));
  }

  var context = _objectSpread({
    headers: columns.map(function (column) {
      return column.header;
    }),
    getValue: getValue,
    sortState: {
      columnID: columnID,
      setColumnID: setColumnID,
      direction: direction,
      setDirection: setDirection,
      isColumnSortable: isColumnSortable({
        sortableColumns: sortableColumns,
        enableSorting: enableSorting
      })
    }
  }, props, {
    rows: sortedRows
  });

  return _react["default"].createElement(DataGridContext.Provider, {
    value: context
  }, props.children);
};

exports.DataGridProvider = DataGridProvider;

var descendingComparator = function descendingComparator(_ref4) {
  var a = _ref4.a,
      b = _ref4.b,
      property = _ref4.property;

  if (b[property] < a[property]) {
    return -1;
  }

  if (b[property] > a[property]) {
    return 1;
  }

  return 0;
};

var getDefaultComparator = function getDefaultComparator(_ref5) {
  var direction = _ref5.direction,
      property = _ref5.property;
  return function (a, b) {
    return (direction === _Constants.DATA_GRID_SORT_DIRECTIONS.DESC ? 1 : -1) * descendingComparator({
      a: a,
      b: b,
      property: property
    });
  };
};

var getNumericComparator = function getNumericComparator(_ref6) {
  var direction = _ref6.direction,
      property = _ref6.property;
  var collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base"
  });
  return function (a, b) {
    return (direction === _Constants.DATA_GRID_SORT_DIRECTIONS.DESC ? -1 : 1) * collator.compare(a[property], b[property]);
  };
};

var getComparator = function getComparator(_ref7) {
  var sortableColumn = _ref7.sortableColumn,
      direction = _ref7.direction;
  if (!sortableColumn) return;

  if (sortableColumn.comparator) {
    return sortableColumn.comparator({
      direction: direction,
      property: property
    });
  }

  switch (sortableColumn.sortType) {
    case _Constants.DATA_GRID_SORT_TYPES.NUMERIC:
      return getNumericComparator({
        direction: direction,
        property: sortableColumn.id
      });

    case _Constants.DATA_GRID_SORT_TYPES.DEFAULT:
    default:
      return getDefaultComparator({
        direction: direction,
        property: sortableColumn.id
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