function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import React from "react";
import { DataGrid } from "../datagrid";
import { MUITableHeader, MUITableBody } from "../datagrid/presentation/table";
import { Table, TableCell, TableContainer, Checkbox, Fade } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import BlockUi from 'react-block-ui';
var CustomCellComponent = withStyles(function (theme) {
  return {
    head: {
      padding: theme.spacing(0.5)
    },
    body: {
      padding: theme.spacing(0.5)
    }
  };
})(TableCell);
var CustomCheckbox = withStyles({
  root: {
    padding: "0 !important",
    margin: "0 !important"
  }
})(Checkbox);
var EAMTable = function EAMTable(props) {
  var loading = props.loading,
    rows = props.rows,
    columnsMetadata = props.columnsMetadata,
    isSortEnabled = props.isSortEnabled,
    sortBy = props.sortBy,
    selectRowsEnabled = props.selectRowsEnabled,
    isRowSelectable = props.isRowSelectable,
    isRowSelected = props.isRowSelected,
    onSelectRow = props.onSelectRow,
    cellRenderer = props.cellRenderer,
    cellStyle = props.cellStyle,
    extraBodyRender = props.extraBodyRender,
    tableContainerProps = props.tableContainerProps,
    tableProps = props.tableProps;
  var defaultCellRenderer = function defaultCellRenderer(_ref) {
    var row = _ref.row,
      columnMetadata = _ref.columnMetadata,
      getDisplayValue = _ref.getDisplayValue,
      CellComponent = _ref.CellComponent;
    if (columnMetadata.id === "__checkbox__") {
      return isRowSelectable && isRowSelectable({
        row: row,
        columnMetadata: columnMetadata
      }) ? /*#__PURE__*/React.createElement(CellComponent, null, /*#__PURE__*/React.createElement(CustomCheckbox, {
        checked: isRowSelected({
          row: row,
          columnMetadata: columnMetadata
        }),
        color: "primary",
        onChange: function onChange(_ref2) {
          var row = _ref2.row,
            columnMetadata = _ref2.columnMetadata;
          return onSelectRow({
            row: row,
            columnMetadata: columnMetadata
          });
        }
      })) : null;
    }
    return cellRenderer && cellRenderer({
      row: row,
      columnMetadata: columnMetadata,
      getDisplayValue: getDisplayValue,
      CellComponent: CellComponent
    }) || /*#__PURE__*/React.createElement(CellComponent, {
      style: cellStyle
    }, getDisplayValue());
  };
  var computedColumnsMetadata = columnsMetadata;
  if (selectRowsEnabled) {
    var extraColumnsMetadata = [{
      id: '__checkbox__'
    }];
    computedColumnsMetadata = [].concat(extraColumnsMetadata, _toConsumableArray(columnsMetadata));
  }
  return loading ? /*#__PURE__*/React.createElement(Fade, {
    "in": loading,
    style: {
      transitionDelay: loading ? "200ms" : "0ms"
    },
    unmountOnExit: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(BlockUi, {
    blocking: loading
  }))) : /*#__PURE__*/React.createElement(DataGrid, {
    rows: rows,
    columnsMetadata: computedColumnsMetadata,
    isSortEnabled: isSortEnabled,
    sortBy: sortBy
  }, /*#__PURE__*/React.createElement(TableContainer, tableContainerProps, /*#__PURE__*/React.createElement(Table, _extends({}, tableProps, {
    size: "small"
  }), /*#__PURE__*/React.createElement(MUITableHeader, {
    CellComponent: CustomCellComponent
  }), /*#__PURE__*/React.createElement(MUITableBody, {
    cellRenderer: defaultCellRenderer
  }), extraBodyRender && extraBodyRender())));
};
export default EAMTable;