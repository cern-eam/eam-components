function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      extraBodyRender = props.extraBodyRender;

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
    }) || /*#__PURE__*/React.createElement(CellComponent, null, getDisplayValue());
  };

  var computedColumnsMetadata = columnsMetadata;

  if (selectRowsEnabled) {
    var extraColumnsMetadata = [{
      id: '__checkbox__'
    }];
    computedColumnsMetadata = [].concat(extraColumnsMetadata, _toConsumableArray(columnsMetadata));
  }

  return loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(Fade, {
    "in": loading,
    style: {
      transitionDelay: loading ? "200ms" : "0ms"
    },
    unmountOnExit: true
  }, /*#__PURE__*/React.createElement(BlockUi, {
    blocking: loading
  }))) : /*#__PURE__*/React.createElement(DataGrid, {
    rows: rows,
    columnsMetadata: computedColumnsMetadata,
    isSortEnabled: isSortEnabled,
    sortBy: sortBy
  }, /*#__PURE__*/React.createElement(TableContainer, null, /*#__PURE__*/React.createElement(Table, {
    size: "small"
  }, /*#__PURE__*/React.createElement(MUITableHeader, {
    CellComponent: CustomCellComponent
  }), /*#__PURE__*/React.createElement(MUITableBody, {
    cellRenderer: defaultCellRenderer
  }), extraBodyRender && extraBodyRender())));
};

export default EAMTable;