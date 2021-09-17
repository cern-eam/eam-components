"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _reactVirtualized = require("react-virtualized");

var _reactScrollSync = require("react-scroll-sync");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DefaultBodyCellComponent = (0, _core.withStyles)(function (theme) {
  return {
    root: {
      overflow: 'hidden',
      borderRight: "1px solid ".concat(theme.palette.grey[200]),
      borderTop: "1px solid ".concat(theme.palette.grey[200]),
      borderBottom: 'none',
      padding: theme.spacing(1),
      wordBreak: 'break-word'
    }
  };
})(_core.TableCell);
var DefaultHeadCellComponent = (0, _core.withStyles)(function (theme) {
  return {
    root: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      background: theme.palette.grey[100]
    }
  };
})(DefaultBodyCellComponent);
var DefaultTableComponent = (0, _core.withStyles)(function (theme) {
  return {
    root: {
      borderLeft: "1px solid ".concat(theme.palette.grey[200]),
      borderBottom: "1px solid ".concat(theme.palette.grey[200])
    }
  };
})(_core.Table);
var DefaultTableSortLabel = (0, _core.withStyles)(function (theme) {
  return {
    root: {
      position: "absolute",
      right: 0,
      '&:hover': {
        backgroundColor: theme.palette.grey[100]
      }
    },
    active: {
      backgroundColor: theme.palette.grey[100]
    }
  };
})(_core.TableSortLabel);

var defaultPropsGetter = function defaultPropsGetter() {
  return {};
};

var _cache;

var _list;

var EAMGridMain = function EAMGridMain(props) {
  var loading = props.loading,
      tableInstance = props.tableInstance,
      _props$getRowProps = props.getRowProps,
      getRowProps = _props$getRowProps === void 0 ? defaultPropsGetter : _props$getRowProps,
      _props$getCellProps = props.getCellProps,
      getCellProps = _props$getCellProps === void 0 ? defaultPropsGetter : _props$getCellProps,
      _props$getColumnProps = props.getColumnProps,
      getColumnProps = _props$getColumnProps === void 0 ? defaultPropsGetter : _props$getColumnProps,
      _props$TableComponent = props.TableComponent,
      TableComponent = _props$TableComponent === void 0 ? DefaultTableComponent : _props$TableComponent,
      _props$BodyCellCompon = props.BodyCellComponent,
      BodyCellComponent = _props$BodyCellCompon === void 0 ? DefaultBodyCellComponent : _props$BodyCellCompon,
      _props$HeadCellCompon = props.HeadCellComponent,
      HeadCellComponent = _props$HeadCellCompon === void 0 ? DefaultHeadCellComponent : _props$HeadCellCompon;
  var getTableProps = tableInstance.getTableProps,
      getTableBodyProps = tableInstance.getTableBodyProps,
      headerGroups = tableInstance.headerGroups,
      rows = tableInstance.rows,
      prepareRow = tableInstance.prepareRow,
      selectedFlatRows = tableInstance.selectedFlatRows;
  (0, _react.useEffect)(function () {
    _cache = new _reactVirtualized.CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 41,
      keyMapper: function keyMapper(index) {
        return index;
      }
    });
  }, []);
  (0, _react.useEffect)(function () {
    rows.forEach(function (_, i) {
      return _cache.clear(i);
    });

    if (_list) {
      _list && _list.recomputeRowHeights();

      _list.scrollToRow(0);
    }
  }, [rows]);

  var RenderRow = _react["default"].useCallback(function (_ref) {
    var index = _ref.index,
        key = _ref.key,
        parent = _ref.parent,
        style = _ref.style,
        isScrolling = _ref.isScrolling;
    var row = rows[index];
    prepareRow(row);
    var customRowProps = getRowProps(row);
    var tableRowProps = row.getRowProps(_objectSpread({}, customRowProps, {
      style: _objectSpread({}, style, {}, customRowProps.style)
    }));
    return /*#__PURE__*/_react["default"].createElement(_reactVirtualized.CellMeasurer, {
      cache: _cache,
      columnIndex: 0,
      key: key,
      rowIndex: index,
      parent: parent
    }, function (_ref2) {
      var measure = _ref2.measure;
      return /*#__PURE__*/_react["default"].createElement(_core.TableRow, _extends({
        className: "tr",
        component: "div"
      }, tableRowProps), row.cells.map(function (cell) {
        var cellProps = [{
          style: {
            maxWidth: cell.column.maxWidth,
            width: cell.column.width
          }
        }, getCellProps(cell)].filter(Boolean);
        return /*#__PURE__*/_react["default"].createElement(BodyCellComponent, _extends({}, cell.getCellProps(cellProps), {
          className: "td",
          component: "div"
        }), cell.render("Cell"));
      }));
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [getCellProps, getRowProps, prepareRow, rows, selectedFlatRows, _cache]);

  var noResults = !rows.length && !loading;
  return /*#__PURE__*/_react["default"].createElement(_core.TableContainer, {
    style: {
      height: '100%',
      overflowY: 'hidden',
      padding: '1px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactScrollSync.ScrollSync, null, /*#__PURE__*/_react["default"].createElement(TableComponent, _extends({
    stickyHeader: true
  }, getTableProps({
    style: {
      height: '100%'
    }
  }), {
    component: "div"
  }), /*#__PURE__*/_react["default"].createElement(_reactScrollSync.ScrollSyncPane, {
    group: "horizontal"
  }, /*#__PURE__*/_react["default"].createElement(_core.TableHead, {
    style: {
      display: noResults ? 'flex' : 'grid',
      overflow: 'hidden',
      overflowY: 'scroll'
    },
    component: "div"
  }, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/_react["default"].createElement(_core.TableRow, _extends({}, headerGroup.getHeaderGroupProps(), {
      component: "div"
    }), headerGroup.headers.map(function (column) {
      var headerProps = [{
        style: {
          maxWidth: column.maxWidth,
          width: column.width
        }
      }, getColumnProps(column)].filter(Boolean);
      return /*#__PURE__*/_react["default"].createElement(HeadCellComponent, _extends({
        key: column.id
      }, column.getHeaderProps(headerProps), {
        component: "div"
      }), /*#__PURE__*/_react["default"].createElement("div", column.getSortByToggleProps(), column.render("Header"), column.id !== 'selection' ? /*#__PURE__*/_react["default"].createElement(DefaultTableSortLabel, {
        active: column.isSorted,
        direction: column.isSortedDesc ? 'desc' : 'asc'
      }) : null), column.id !== 'selection' && /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      }, column.canFilter ? column.render('Filter') : null));
    }));
  }))), /*#__PURE__*/_react["default"].createElement(_core.TableBody, _extends({}, getTableBodyProps(), {
    style: {
      height: '100%',
      display: 'table-row'
    },
    component: "div"
  }), !rows.length && !loading ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "100%",
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      padding: "1rem"
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, "No records to show")) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'block',
      height: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactVirtualized.AutoSizer, null, function (_ref3) {
    var height = _ref3.height,
        width = _ref3.width;
    return /*#__PURE__*/_react["default"].createElement(_reactScrollSync.ScrollSyncPane, {
      group: "horizontal"
    }, /*#__PURE__*/_react["default"].createElement(_reactVirtualized.List, {
      ref: function ref(element) {
        _list = element;
      },
      style: {
        overflowX: 'scroll',
        overflowY: 'scroll',
        willChange: 'scroll-position'
      },
      deferredMeasurementCache: _cache,
      overscanRowCount: 10,
      rowCount: rows.length,
      rowHeight: _cache.rowHeight,
      rowRenderer: RenderRow,
      width: width,
      height: height
    }));
  }))))));
};

var _default = EAMGridMain;
exports["default"] = _default;