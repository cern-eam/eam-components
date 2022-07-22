import React from "react";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { DataGridContext } from "../..//DataGridContext";

var defaultCellRenderer = function defaultCellRenderer(_ref) {
  var columnMetadata = _ref.columnMetadata,
      getDisplayValue = _ref.getDisplayValue,
      CellComponent = _ref.CellComponent;
  return /*#__PURE__*/React.createElement(CellComponent, {
    align: "left",
    key: columnMetadata.id
  }, getDisplayValue());
};

var MUITableBody = function MUITableBody(props) {
  var _props$CellComponent = props.CellComponent,
      CellComponent = _props$CellComponent === void 0 ? TableCell : _props$CellComponent,
      _props$cellRenderer = props.cellRenderer,
      cellRenderer = _props$cellRenderer === void 0 ? defaultCellRenderer : _props$cellRenderer;

  var _React$useContext = React.useContext(DataGridContext),
      rows = _React$useContext.rows,
      columnsMetadata = _React$useContext.columnsMetadata,
      _getDisplayValue = _React$useContext.getDisplayValue;

  return /*#__PURE__*/React.createElement(TableBody, null, rows && rows.map(function (row, rowIndex) {
    return /*#__PURE__*/React.createElement(TableRow, {
      key: rowIndex
    }, columnsMetadata && columnsMetadata.map(function (columnMetadata) {
      return columnMetadata && columnMetadata.id && /*#__PURE__*/React.createElement(React.Fragment, {
        key: columnMetadata.id + rowIndex
      }, cellRenderer({
        row: row,
        columnMetadata: columnMetadata,
        type: columnMetadata.type || {},
        getDisplayValue: function getDisplayValue() {
          return _getDisplayValue({
            row: row,
            columnMetadata: columnMetadata
          });
        },
        CellComponent: CellComponent
      }));
    }));
  }));
};

export default MUITableBody;