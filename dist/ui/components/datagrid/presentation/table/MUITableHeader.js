import React from "react";
import { DataGridContext } from "../../DataGridContext";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { DATA_GRID_SORT_DIRECTIONS } from "../../Constants";

var createSortHandler = function createSortHandler(_ref) {
  var columnID = _ref.columnID,
      sortState = _ref.sortState;
  return function (event) {
    var isAsc = sortState.columnID === columnID && sortState.direction === DATA_GRID_SORT_DIRECTIONS.ASC;
    sortState.setColumnID(columnID);
    sortState.setDirection(isAsc ? DATA_GRID_SORT_DIRECTIONS.DESC : DATA_GRID_SORT_DIRECTIONS.ASC);
  };
};

var defaultCellRender = function defaultCellRender(_ref2) {
  var columnMetadata = _ref2.columnMetadata,
      getHeader = _ref2.getHeader,
      key = _ref2.key,
      sortState = _ref2.sortState,
      CellComponent = _ref2.CellComponent;
  return /*#__PURE__*/React.createElement(CellComponent, {
    sortDirection: sortState.columnID === columnMetadata.id ? sortState.direction : false,
    key: key
  }, sortState.isSortEnabled && sortState.isSortEnabled(columnMetadata) ? /*#__PURE__*/React.createElement(TableSortLabel, {
    active: sortState.columnID === columnMetadata.id,
    direction: sortState.columnID === columnMetadata.id ? sortState.direction : DATA_GRID_SORT_DIRECTIONS.ASC,
    onClick: createSortHandler({
      columnID: columnMetadata.id,
      sortState: sortState
    })
  }, getHeader()) : getHeader());
};

var MUITableHeader = function MUITableHeader(props) {
  var _props$CellComponent = props.CellComponent,
      CellComponent = _props$CellComponent === void 0 ? TableCell : _props$CellComponent,
      _props$customCellRend = props.customCellRender,
      customCellRender = _props$customCellRend === void 0 ? defaultCellRender : _props$customCellRend;

  var _React$useContext = React.useContext(DataGridContext),
      columnsMetadata = _React$useContext.columnsMetadata,
      sortState = _React$useContext.sortState;

  return /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, null, columnsMetadata.map(function (columnMetadata) {
    return customCellRender({
      columnMetadata: columnMetadata,
      sortState: sortState,
      key: columnMetadata.id,
      getHeader: function getHeader() {
        return columnMetadata.header;
      },
      CellComponent: CellComponent
    });
  })));
};

export default MUITableHeader;