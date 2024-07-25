import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
var filterSetStyle = {
  display: 'grid',
  fontSize: '0.8125rem',
  gridAutoFlow: 'column',
  marginLeft: '0.5rem',
  gridColumnGap: '0.5rem'
};
var EISTableFilter = function EISTableFilter(props) {
  var filters = props.filters,
    handleFilterChange = props.handleFilterChange,
    activeFilter = props.activeFilter;
  return filters && Object.keys(filters).length && /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    color: "textSecondary"
  }, "Filter:"), /*#__PURE__*/React.createElement(Box, {
    style: filterSetStyle
  }, Object.keys(filters).map(function (key) {
    return /*#__PURE__*/React.createElement(Chip, {
      size: "small",
      label: key,
      color: activeFilter === key ? 'primary' : 'default',
      onClick: function onClick() {
        handleFilterChange(key);
        activeFilter;
      }
    });
  })));
};
export default EISTableFilter;