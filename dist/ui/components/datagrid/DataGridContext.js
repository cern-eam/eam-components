"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataGridProvider = exports.DataGridContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _Constants = require("./Constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DataGridContext = _react["default"].createContext();

exports.DataGridContext = DataGridContext;

var getDisplayValue = function getDisplayValue(_ref) {
  var row = _ref.row,
      columnMetadata = _ref.columnMetadata;
  return columnMetadata.getDisplayValue ? columnMetadata.getDisplayValue({
    row: row,
    columnMetadata: columnMetadata
  }) : row[columnMetadata.id];
};

var DataGridProvider = function DataGridProvider(props) {
  var rows = props.rows,
      columnsMetadata = props.columnsMetadata,
      isSortEnabled = props.isSortEnabled,
      _props$sortBy = props.sortBy,
      sortBy = _props$sortBy === void 0 ? {} : _props$sortBy;

  var _React$useState = _react["default"].useState(sortBy.columnID),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      columnID = _React$useState2[0],
      setColumnID = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(sortBy.direction || _Constants.DATA_GRID_SORT_DIRECTIONS.ASC),
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
  return _react["default"].createElement(DataGridContext.Provider, {
    value: context
  }, props.children);
};

exports.DataGridProvider = DataGridProvider;

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
    return (direction === _Constants.DATA_GRID_SORT_DIRECTIONS.DESC ? 1 : -1) * descendingComparator({
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
    return (direction === _Constants.DATA_GRID_SORT_DIRECTIONS.DESC ? -1 : 1) * collator.compare(a[property], b[property]);
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
    case _Constants.DATA_GRID_SORT_TYPES.NUMERIC:
      return getNumericComparator({
        direction: direction,
        property: columnMetadata.id
      });

    case _Constants.DATA_GRID_SORT_TYPES.DEFAULT:
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