import React from 'react';
import withStyles from '@mui/styles/withStyles';
var styles = {
  headerCellContainer: {
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid #d3d3d3",
    boxSizing: "border-box",
    "-moz-box-sizing": "border-box",
    "-webkit-box-sizing": "border-box",
    overflow: "hidden"
  },
  headerCell: {
    width: "100%",
    minHeight: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#a5a5a5",
    paddingLeft: "5px",
    boxSizing: "border-box",
    "-moz-box-sizing": "border-box",
    "-webkit-box-sizing": "border-box"
  }
};

var EAMGridHeaderCell = function EAMGridHeaderCell(props) {
  var classes = props.classes,
      children = props.children,
      _props$style = props.style,
      style = _props$style === void 0 ? {
    'width': '80px',
    'minWidth': '80px'
  } : _props$style;
  return /*#__PURE__*/React.createElement("div", {
    className: classes.headerCellContainer,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.headerCell
  }, children));
};

export default withStyles(styles)(EAMGridHeaderCell);