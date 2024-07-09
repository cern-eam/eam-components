function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
import FilterIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from '@mui/material/Autocomplete';
import React, { createRef, useCallback, useEffect, useMemo, useState } from "react";
import DataspyAutocompleteInput from "./DataspyAutocompleteInput";
var ContainerGrid = withStyles(function (theme) {
  return {
    root: {
      padding: "8px",
      background: theme.palette.grey[100],
      border: "1px solid ".concat(theme.palette.grey[200]),
      borderBottom: "none",
      borderRadius: "4px 4px 0px 0px"
    }
  };
})(Grid);
var useStyles = makeStyles(function (theme) {
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
  var showDataspyChips = useMemo(function () {
    return dataspies.length < 4;
  }, [dataspies]);
  return /*#__PURE__*/React.createElement(Box, {
    component: ContainerGrid
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 1,
    direction: "row",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    sm: 12,
    md: showDataspyChips ? 7 : 5
  }, showDataspyChips ? /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    alignItems: "center"
  }, dataspies.length ? /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    color: "textSecondary"
  }, "Dataspy:") : null, /*#__PURE__*/React.createElement(Box, {
    className: classes.dataspyChip
  }, dataspies.filter(Boolean).map(function (dataspy, i) {
    return /*#__PURE__*/React.createElement(Chip, {
      key: dataspy.code,
      size: "small",
      label: dataspy.label,
      color: dataspy.code === selectedDataspy?.code ? "primary" : "default",
      onClick: function onClick() {
        return onDataspyChange(dataspy);
      }
    });
  }))) : /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Autocomplete, {
    autoHighlight: true,
    filterSelectedOptions: true,
    loading: loading,
    value: selectedDataspy || {},
    options: [selectedDataspy || {}].concat(_toConsumableArray(dataspies)).filter(Boolean),
    disableClearable: true,
    isOptionEqualToValue: function isOptionEqualToValue(option, value) {
      return value.code === option.code;
    },
    getOptionLabel: function getOptionLabel(dataspy) {
      return dataspy.label || "";
    },
    renderInput: function renderInput(params) {
      return DataspyAutocompleteInput(loading, params);
    },
    onChange: function onChange(e, newDataspy) {
      return onDataspyChange(newDataspy);
    }
  }))), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    sm: 12,
    md: showDataspyChips ? 5 : 7
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 1,
    direction: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    wrap: "nowrap"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Button, {
    size: "small",
    variant: "outlined",
    onClick: toggleFilters,
    startIcon: /*#__PURE__*/React.createElement(FilterIcon, null)
  }, disableFilters ? "Show Filters" : "Hide Filters")), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Button, {
    size: "small",
    variant: "outlined",
    onClick: onResetFilters
  }, "Reset Filters")), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Button, {
    size: "small",
    color: "primary",
    variant: "outlined",
    onClick: onSearch
  }, /*#__PURE__*/React.createElement(SearchIcon, null)))))));
};
export default EAMGridHead;