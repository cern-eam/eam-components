function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { useContext } from "react";
import EAMGridMain from "./EAMGridMain";
import EAMGridPagination from "./EAMGridPagination";
import EAMGridFooter from "./EAMGridFooter";
import EAMGridHead from "./EAMGridHead";
import { EAMGridContext } from "./EAMGridContext";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import EAMGridKeyboardHandler from "./EAMGridKeyboardHandler";
import { Box, Button } from "@mui/material";
var EAMGrid = function EAMGrid(props) {
  var getRowProps = props.getRowProps,
    getCellProps = props.getCellProps,
    rowsPerPageOptionsComputed = props.rowsPerPageOptionsComputed,
    customFooterOptions = props.customFooterOptions,
    hideHeader = props.hideHeader,
    hideFooter = props.hideFooter,
    gridContainerStyle = props.gridContainerStyle;
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
    isEmptySearch = _useContext.isEmptySearch;
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
  }), hideHeader ? null : /*#__PURE__*/React.createElement(EAMGridHead, {
    selectedDataspy: selectedDataspy,
    dataspies: dataspies,
    onSearch: handleOnSearch,
    disableFilters: disableFilters,
    toggleFilters: toggleFilters,
    onDataspyChange: handleDataspyChange,
    onResetFilters: handleResetFilters
  }), /*#__PURE__*/React.createElement(BlockUi, {
    tag: "div",
    blocking: loading,
    style: _objectSpread({
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, gridContainerStyle)
  }, /*#__PURE__*/React.createElement(EAMGridMain, {
    loading: loading,
    tableInstance: tableInstance,
    getRowProps: getRowProps,
    getCellProps: getCellProps,
    isEmptySearch: isEmptySearch
  })), hideFooter ? null : /*#__PURE__*/React.createElement(EAMGridFooter, null, /*#__PURE__*/React.createElement(Box, {
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
    onPageChange: handleChangePage,
    onRowsPerPageChange: handleChangeRowsPerPage,
    pageIndex: pageIndex,
    rowsPerPage: rowsPerPage,
    hasUnkownTotalRecords: hasUnkownTotalRecords,
    totalRecords: totalRecords,
    rowsPerPageOptionsComputed: rowsPerPageOptionsComputed
  })));
};
export default EAMGrid;