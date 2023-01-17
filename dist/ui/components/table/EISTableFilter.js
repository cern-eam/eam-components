import React from 'react';
import Select from '@mui/material/Select';
import FilterListIcon from '@mui/icons-material/FilterList';
import MenuItem from '@mui/material/MenuItem';
var filterSelectStyle = {
  fontSize: '0.8125rem'
};
var EISTableFilter = function EISTableFilter(props) {
  var filters = props.filters,
    handleFilterChange = props.handleFilterChange,
    activeFilter = props.activeFilter;
  var propagateFilterChange = function propagateFilterChange(e) {
    handleFilterChange(e.target.value);
  };
  return filters && Object.keys(filters).length && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(FilterListIcon, {
    style: {
      marginLeft: 'auto'
    }
  }), /*#__PURE__*/React.createElement(Select, {
    style: filterSelectStyle,
    value: filters[activeFilter].text,
    onChange: propagateFilterChange,
    renderValue: function renderValue(value) {
      return /*#__PURE__*/React.createElement("span", null, value);
    }
  }, Object.keys(filters).map(function (key) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: key,
      value: key
    }, filters[key].text);
  })));
};
export default EISTableFilter;