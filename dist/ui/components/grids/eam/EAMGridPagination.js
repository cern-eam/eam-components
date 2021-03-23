"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultOptions = [50, 100, 250, 500, 1000];

var getCount = function getCount(hasUnknownCount, count) {
  return hasUnknownCount ? "".concat(count, "+") : count;
};

var CustomTablePagination = (0, _core.withStyles)(function () {
  return {
    toolbar: {
      padding: 0
    }
  };
})(_core.TablePagination);

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

  return /*#__PURE__*/_react["default"].createElement(CustomTablePagination, {
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

var _default = EAMGridPagination;
exports["default"] = _default;