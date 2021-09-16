"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _EAMGridMain = _interopRequireDefault(require("./EAMGridMain"));

var _EAMGridPagination = _interopRequireDefault(require("./EAMGridPagination"));

var _EAMGridFooter = _interopRequireDefault(require("./EAMGridFooter"));

var _EAMGridHead = _interopRequireDefault(require("./EAMGridHead"));

var _EAMGridContext = require("./EAMGridContext");

var _reactBlockUi = _interopRequireDefault(require("react-block-ui"));

require("react-block-ui/style.css");

var _EAMGridKeyboardHandler = _interopRequireDefault(require("./EAMGridKeyboardHandler"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var EAMGrid = function EAMGrid(props) {
  var getRowProps = props.getRowProps,
      getCellProps = props.getCellProps,
      rowsPerPageOptionsComputed = props.rowsPerPageOptionsComputed;

  var _useContext = (0, _react.useContext)(_EAMGridContext.EAMGridContext),
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
      loadingExportToCSV = _useContext.loadingExportToCSV;

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      background: "white"
    }
  }, /*#__PURE__*/_react["default"].createElement(_EAMGridKeyboardHandler["default"], {
    tableInstance: tableInstance,
    onSearch: handleOnSearch,
    toggleFilters: toggleFilters
  }), /*#__PURE__*/_react["default"].createElement(_EAMGridHead["default"], {
    selectedDataspy: selectedDataspy,
    dataspies: dataspies,
    onSearch: handleOnSearch,
    disableFilters: disableFilters,
    toggleFilters: toggleFilters,
    onDataspyChange: handleDataspyChange,
    onResetFilters: handleResetFilters
  }), /*#__PURE__*/_react["default"].createElement(_reactBlockUi["default"], {
    tag: "div",
    blocking: loading,
    style: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement(_EAMGridMain["default"], {
    loading: loading,
    tableInstance: tableInstance,
    getRowProps: getRowProps,
    getCellProps: getCellProps
  })), /*#__PURE__*/_react["default"].createElement(_EAMGridFooter["default"], null, /*#__PURE__*/_react["default"].createElement(_core.Box, {
    flex: "1",
    display: "flex"
  }, /*#__PURE__*/_react["default"].createElement(_reactBlockUi["default"], {
    tag: "div",
    blocking: loadingExportToCSV,
    style: {
      minHeight: "auto"
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    variant: "outlined",
    size: "small",
    onClick: handleExportToCSV
  }, "Export to CSV"))), /*#__PURE__*/_react["default"].createElement(_EAMGridPagination["default"], {
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

var _default = EAMGrid;
exports["default"] = _default;