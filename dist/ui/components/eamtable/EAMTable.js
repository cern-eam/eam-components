"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _datagrid = require("../datagrid");

var _table = require("../datagrid/presentation/table");

var _core = require("@material-ui/core");

var _reactBlockUi = _interopRequireDefault(require("react-block-ui"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var CustomCellComponent = (0, _core.withStyles)(function (theme) {
  return {
    head: {
      padding: theme.spacing(0.5)
    },
    body: {
      padding: theme.spacing(0.5)
    }
  };
})(_core.TableCell);
var CustomCheckbox = (0, _core.withStyles)({
  root: {
    padding: "0 !important",
    margin: "0 !important"
  }
})(_core.Checkbox);

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
      }) ? /*#__PURE__*/_react["default"].createElement(CellComponent, null, /*#__PURE__*/_react["default"].createElement(CustomCheckbox, {
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
    }) || /*#__PURE__*/_react["default"].createElement(CellComponent, null, getDisplayValue());
  };

  var computedColumnsMetadata = columnsMetadata;

  if (selectRowsEnabled) {
    var extraColumnsMetadata = [{
      id: '__checkbox__'
    }];
    computedColumnsMetadata = [].concat(extraColumnsMetadata, _toConsumableArray(columnsMetadata));
  }

  return loading ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: "center",
      padding: 14
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Fade, {
    "in": loading,
    style: {
      transitionDelay: loading ? "200ms" : "0ms"
    },
    unmountOnExit: true
  }, /*#__PURE__*/_react["default"].createElement(_reactBlockUi["default"], {
    blocking: loading
  }))) : /*#__PURE__*/_react["default"].createElement(_datagrid.DataGrid, {
    rows: rows,
    columnsMetadata: computedColumnsMetadata,
    isSortEnabled: isSortEnabled,
    sortBy: sortBy
  }, /*#__PURE__*/_react["default"].createElement(_core.TableContainer, null, /*#__PURE__*/_react["default"].createElement(_core.Table, {
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement(_table.MUITableHeader, {
    CellComponent: CustomCellComponent
  }), /*#__PURE__*/_react["default"].createElement(_table.MUITableBody, {
    cellRenderer: defaultCellRenderer
  }), extraBodyRender && extraBodyRender())));
};

var _default = EAMTable;
exports["default"] = _default;