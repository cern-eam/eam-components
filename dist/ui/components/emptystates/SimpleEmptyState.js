import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import { Typography, withStyles } from '@material-ui/core';

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      color: '#737373'
    },
    icon: {
      padding: theme.spacing()
    }
  };
};

var SimpleEmptyState = function SimpleEmptyState(props) {
  var message = props.message,
      style = props.style,
      iconStyle = props.iconStyle,
      classes = props.classes;
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root,
    style: style
  }, /*#__PURE__*/React.createElement(InfoIcon, {
    className: classes.icon,
    style: iconStyle
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "caption"
  }, message));
};

export default withStyles(styles)(SimpleEmptyState);