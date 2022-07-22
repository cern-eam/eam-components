import { TablePagination } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import React from "react";
var defaultOptions = [50, 100, 250, 500, 1000];

var getCount = function getCount(hasUnknownCount, count) {
  return hasUnknownCount ? "".concat(count, "+") : count;
};

var CustomTablePagination = withStyles(function () {
  return {
    toolbar: {
      padding: 0
    }
  };
})(TablePagination);

var EAMGridPagination = function EAMGridPagination(_ref) {
  var pageIndex = _ref.pageIndex,
      rowsPerPage = _ref.rowsPerPage,
      totalRecords = _ref.totalRecords,
      hasUnkownTotalRecords = _ref.hasUnkownTotalRecords,
      onChangePage = _ref.onChangePage,
      onChangeRowsPerPage = _ref.onChangeRowsPerPage,
      rowsPerPageOptionsComputed = _ref.rowsPerPageOptionsComputed,
      labelRowsPerPage = _ref.labelRowsPerPage,
      _ref$rowsPerPageOptio = _ref.rowsPerPageOptions,
      rowsPerPageOptions = _ref$rowsPerPageOptio === void 0 ? rowsPerPageOptionsComputed ? rowsPerPageOptionsComputed(defaultOptions) : defaultOptions : _ref$rowsPerPageOptio;

  var handleChangePage = function handleChangePage(event, newPage) {
    event.stopPropagation();
    onChangePage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    event.stopPropagation();
    onChangeRowsPerPage(Number(event.target.value));
  };

  var label = function label(_ref2) {
    var from = _ref2.from,
        to = _ref2.to,
        count = _ref2.count;
    return "".concat(from, "-").concat(to, " of ").concat(getCount(hasUnkownTotalRecords, count));
  };

  return /*#__PURE__*/React.createElement(CustomTablePagination, {
    component: "div",
    page: pageIndex,
    count: totalRecords,
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: rowsPerPageOptions,
    labelRowsPerPage: labelRowsPerPage,
    labelDisplayedRows: label,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  });
};

export default EAMGridPagination;