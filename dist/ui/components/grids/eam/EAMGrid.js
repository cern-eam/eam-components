function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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