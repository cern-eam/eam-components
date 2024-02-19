function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { useCallback, useEffect, useRef } from "react";
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Table, TableSortLabel, Typography } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import { CellMeasurer, CellMeasurerCache, List, AutoSizer } from "react-virtualized";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import './grid.css';
var DefaultBodyCellComponent = withStyles(function (theme) {
  return {
    root: {
      overflow: 'hidden',
      borderRight: "1px solid ".concat(theme.palette.grey[300]),
      borderTop: "1px solid ".concat(theme.palette.grey[300]),
      borderBottom: 'none',
      padding: theme.spacing(1),
      wordBreak: 'break-word',
      color: 'unset'
    }
  };
})(TableCell);
var DefaultHeadCellComponent = withStyles(function (theme) {
  return {
    root: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      background: theme.palette.grey[100],
      overflow: 'hidden',
      borderRight: "1px solid ".concat(theme.palette.grey[300]),
      borderTop: "1px solid ".concat(theme.palette.grey[300]),
      borderBottom: 'none',
      padding: theme.spacing(1),
      wordBreak: 'break-word',
      color: theme.palette.grey[500]
    }
  };
})(TableCell);
var DefaultTableComponent = withStyles(function (theme) {
  return {
    root: {
      borderLeft: "1px solid ".concat(theme.palette.grey[200]),
      borderBottom: "1px solid ".concat(theme.palette.grey[200])
    }
  };
})(Table);
var DefaultTableSortLabel = withStyles(function (theme) {
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
})(TableSortLabel);
var defaultPropsGetter = function defaultPropsGetter() {
  return {};
};
var _cache;
var _list;
var MIN_CELL_WIDTH = 130;
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
    HeadCellComponent = _props$HeadCellCompon === void 0 ? DefaultHeadCellComponent : _props$HeadCellCompon,
    isEmptySearch = props.isEmptySearch;
  var getTableProps = tableInstance.getTableProps,
    getTableBodyProps = tableInstance.getTableBodyProps,
    headerGroups = tableInstance.headerGroups,
    rows = tableInstance.rows,
    prepareRow = tableInstance.prepareRow,
    selectedFlatRows = tableInstance.selectedFlatRows;
  useEffect(function () {
    _cache = new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 41,
      keyMapper: function keyMapper(index) {
        return index;
      }
    });
  }, []);
  useEffect(function () {
    rows.forEach(function (_, i) {
      return _cache.clear(i);
    });
    if (_list) {
      _list && _list.recomputeRowHeights();
      _list.scrollToRow(0);
    }
  }, [rows]);
  var RenderRow = React.useCallback(function (_ref) {
    var index = _ref.index,
      key = _ref.key,
      parent = _ref.parent,
      style = _ref.style,
      isScrolling = _ref.isScrolling;
    var row = rows[index];
    prepareRow(row);
    var customRowProps = getRowProps(row);
    var tableRowProps = row.getRowProps(_objectSpread({}, customRowProps, {
      style: _objectSpread({}, style, {
        width: 'unset',
        minWidth: '100%'
      }, customRowProps.style)
    }));
    return /*#__PURE__*/React.createElement(CellMeasurer, {
      cache: _cache,
      columnIndex: 0,
      key: key,
      rowIndex: index,
      parent: parent
    }, function (_ref2) {
      var measure = _ref2.measure;
      return /*#__PURE__*/React.createElement(TableRow, _extends({
        className: "tr",
        component: "div"
      }, tableRowProps), row.cells.map(function (cell) {
        var cellProps = [{
          style: {
            maxWidth: cell.column.maxWidth,
            minWidth: cell.column.minWidth ?? MIN_CELL_WIDTH,
            width: cell.column.width,
            display: 'flex',
            alignItems: 'center'
          }
        }, getCellProps(cell)].filter(Boolean);
        return /*#__PURE__*/React.createElement(BodyCellComponent, _extends({}, cell.getCellProps(cellProps), {
          className: "td",
          component: "div"
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
          }
        }, cell.render("Cell")));
      }));
    });
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [getCellProps, getRowProps, prepareRow, rows, selectedFlatRows, _cache]);
  var noResults = !rows.length && !loading;
  return /*#__PURE__*/React.createElement(TableContainer, {
    style: {
      height: '100%',
      overflowY: 'hidden',
      overflowX: noResults ? 'auto' : 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ScrollSync, null, /*#__PURE__*/React.createElement(TableComponent, _extends({
    stickyHeader: true
  }, getTableProps({
    style: {
      height: '100%'
    }
  }), {
    component: "div"
  }), /*#__PURE__*/React.createElement(ScrollSyncPane, {
    group: "horizontal"
  }, /*#__PURE__*/React.createElement(TableHead, {
    style: {
      display: noResults ? 'flex' : 'grid',
      overflow: 'hidden',
      overflowY: 'scroll'
    },
    component: "div"
  }, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/React.createElement(TableRow, _extends({}, headerGroup.getHeaderGroupProps(), {
      component: "div"
    }), headerGroup.headers.map(function (column) {
      var headerProps = [{
        style: {
          maxWidth: column.maxWidth,
          minWidth: column.minWidth ?? MIN_CELL_WIDTH,
          width: column.width
        }
      }, getColumnProps(column)].filter(Boolean);
      return /*#__PURE__*/React.createElement(HeadCellComponent, _extends({
        key: column.id
      }, column.getHeaderProps(headerProps), {
        component: "div"
      }), /*#__PURE__*/React.createElement("div", column.getSortByToggleProps({
        title: 'Toggle Sort By'
      }), column.render("Header"), column._canSort ? /*#__PURE__*/React.createElement(DefaultTableSortLabel, {
        active: column.isSorted,
        direction: column.isSortedDesc ? 'desc' : 'asc'
      }) : null), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      }, column.canFilter && column._canFilter ? column.render('Filter') : null));
    }));
  }))), /*#__PURE__*/React.createElement(TableBody, _extends({}, getTableBodyProps(), {
    style: {
      height: '100%',
      display: 'table-row'
    },
    component: "div"
  }), noResults ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      padding: "1rem"
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    color: "textSecondary"
  }, isEmptySearch ? 'Perform a search to display values' : 'No records to show')) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'block',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(AutoSizer, null, function (_ref3) {
    var height = _ref3.height,
      width = _ref3.width;
    return /*#__PURE__*/React.createElement(ScrollSyncPane, {
      group: "horizontal"
    }, /*#__PURE__*/React.createElement(List, {
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
      rowHeight: _cache?.rowHeight,
      rowRenderer: RenderRow,
      width: width,
      height: height
    }));
  }))))));
};
export default EAMGridMain;