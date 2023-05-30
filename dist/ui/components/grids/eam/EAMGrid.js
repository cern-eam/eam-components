import React, { useContext } from "react";
import EAMGridMain from "./EAMGridMain";
import EAMGridPagination from "./EAMGridPagination";
import EAMGridFooter from "./EAMGridFooter";
import EAMGridHead from "./EAMGridHead";
import { EAMGridContext } from "./EAMGridContext";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import EAMGridKeyboardHandler from "./EAMGridKeyboardHandler";
import { Box, Button } from "@material-ui/core";

var EAMGrid = function EAMGrid(props) {
  var getRowProps = props.getRowProps,
      getCellProps = props.getCellProps,
      rowsPerPageOptionsComputed = props.rowsPerPageOptionsComputed,
      customFooterOptions = props.customFooterOptions,
      disableScrollUp = props.disableScrollUp;

  var _useContext = useContext(EAMGridContext),
      dataspies = _useContext.dataspies,
      selectedDataspy = _useContext.selectedDataspy,
      disableFilters = _useContext.disableFilters,
      pageIndex = _useContext.pageIndex,
      rowsPerPage = _useContext.rowsPerPage,
      toggleFilters = _useContext.toggleFilters,
      handleOnSearch = _useContext.handleOnSearch,
      handleChangePage = _useContext.handleChangePage,
      handleChangeRowsPerPage = _useContext.handleChangeRowsPerPage,
      handleDataspyChange = _useContext.handleDataspyChange,
      handleResetFilters = _useContext.handleResetFilters,
      handleExportToCSV = _useContext.handleExportToCSV,
      hasUnkownTotalRecords = _useContext.hasUnkownTotalRecords,
      totalRecords = _useContext.totalRecords,
      tableInstance = _useContext.tableInstance,
      loading = _useContext.loading,
      loadingExportToCSV = _useContext.loadingExportToCSV,
      blockGrid = _useContext.blockGrid;

  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      background: "white"
    }
  }, /*#__PURE__*/React.createElement(EAMGridKeyboardHandler, {
    tableInstance: tableInstance,
    onSearch: handleOnSearch,
    toggleFilters: toggleFilters
  }), /*#__PURE__*/React.createElement(EAMGridHead, {
    selectedDataspy: selectedDataspy,
    dataspies: dataspies,
    onSearch: handleOnSearch,
    disableFilters: disableFilters,
    toggleFilters: toggleFilters,
    onDataspyChange: handleDataspyChange,
    onResetFilters: handleResetFilters
  }), /*#__PURE__*/React.createElement(BlockUi, {
    tag: "div",
    blocking: loading || blockGrid,
    style: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(EAMGridMain, {
    loading: loading,
    tableInstance: tableInstance,
    getRowProps: getRowProps,
    getCellProps: getCellProps,
    disableScrollUp: disableScrollUp
  })), /*#__PURE__*/React.createElement(EAMGridFooter, null, /*#__PURE__*/React.createElement(Box, {
    flex: "1",
    display: "flex"
  }, customFooterOptions ? customFooterOptions() : /*#__PURE__*/React.createElement(BlockUi, {
    tag: "div",
    blocking: loadingExportToCSV,
    style: {
      minHeight: "auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    size: "small",
    onClick: handleExportToCSV
  }, "Export to CSV"))), /*#__PURE__*/React.createElement(EAMGridPagination, {
    labelRowsPerPage: "Per Page",
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    pageIndex: pageIndex,
    rowsPerPage: rowsPerPage,
    hasUnkownTotalRecords: hasUnkownTotalRecords,
    totalRecords: totalRecords,
    rowsPerPageOptionsComputed: rowsPerPageOptionsComputed
  })));
};

export default EAMGrid;