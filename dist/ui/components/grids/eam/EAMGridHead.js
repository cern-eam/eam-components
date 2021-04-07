"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var _FilterList = _interopRequireDefault(require("@material-ui/icons/FilterList"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _react = _interopRequireWildcard(require("react"));

var _DataspyAutocompleteInput = _interopRequireDefault(require("./DataspyAutocompleteInput"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ContainerGrid = (0, _core.withStyles)(function (theme) {
  return {
    root: {
      padding: "8px",
      background: theme.palette.grey[100],
      border: "1px solid ".concat(theme.palette.grey[200]),
      borderBottom: "none",
      borderRadius: "4px 4px 0px 0px"
    }
  };
})(_core.Grid);
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    dataspyChip: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5)
      }
    }
  };
});

var EAMGridHead = function EAMGridHead(_ref) {
  var loading = _ref.loading,
      selectedDataspy = _ref.selectedDataspy,
      dataspies = _ref.dataspies,
      onSearch = _ref.onSearch,
      disableFilters = _ref.disableFilters,
      toggleFilters = _ref.toggleFilters,
      onDataspyChange = _ref.onDataspyChange,
      onResetFilters = _ref.onResetFilters;
  var classes = useStyles();
  var showDataspyChips = (0, _react.useMemo)(function () {
    return dataspies.length < 4;
  }, [dataspies]);
  return /*#__PURE__*/_react["default"].createElement(_core.Box, {
    padding: "0.5rem"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    spacing: 1,
    direction: "row",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    sm: 12,
    md: showDataspyChips ? 7 : 5
  }, showDataspyChips ? /*#__PURE__*/_react["default"].createElement(_core.Box, {
    display: "flex",
    alignItems: "center"
  }, dataspies.length ? /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, "Dataspy:") : null, /*#__PURE__*/_react["default"].createElement(_core.Box, {
    className: classes.dataspyChip
  }, dataspies.filter(Boolean).map(function (dataspy, i) {
    return /*#__PURE__*/_react["default"].createElement(_core.Chip, {
      key: dataspy.code,
      size: "small",
      label: dataspy.label,
      color: dataspy.code === selectedDataspy?.code ? "primary" : "default",
      onClick: function onClick() {
        return onDataspyChange(dataspy);
      }
    });
  }))) : /*#__PURE__*/_react["default"].createElement(_core.Box, null, /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    autoHighlight: true,
    filterSelectedOptions: true,
    loading: loading,
    value: selectedDataspy || {},
    options: [selectedDataspy || {}].concat(_toConsumableArray(dataspies)).filter(Boolean),
    disableClearable: true,
    getOptionSelected: function getOptionSelected(option, value) {
      return value.code === option.code;
    },
    getOptionLabel: function getOptionLabel(dataspy) {
      return dataspy.label || "";
    },
    renderInput: function renderInput(params) {
      return (0, _DataspyAutocompleteInput["default"])(loading, params);
    },
    onChange: function onChange(e, newDataspy) {
      return onDataspyChange(newDataspy);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    sm: 12,
    md: showDataspyChips ? 5 : 7
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    spacing: 1,
    direction: "row",
    justify: "flex-end",
    alignItems: "center",
    wrap: "nowrap"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    size: "small",
    variant: "outlined",
    onClick: toggleFilters,
    startIcon: /*#__PURE__*/_react["default"].createElement(_FilterList["default"], null)
  }, disableFilters ? "Show Filters" : "Hide Filters")), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    size: "small",
    variant: "outlined",
    onClick: onResetFilters
  }, "Reset Filters")), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    size: "small",
    color: "primary",
    variant: "outlined",
    onClick: onSearch
  }, /*#__PURE__*/_react["default"].createElement(_Search["default"], null)))))));
};

var _default = EAMGridHead;
exports["default"] = _default;