import React from 'react';
import { withStyles } from "@material-ui/core/styles/index";
var styles = {
  searchRowCell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    borderRight: "1px solid #d3d3d3",
    boxSizing: "border-box",
    "-moz-box-sizing": "border-box",
    "-webkit-box-sizing": "border-box",
    width: "100px",
    minWidth: "100px"
  },
  searchRowCellContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left"
  }
};

var EAMGridCell = function EAMGridCell(props) {
  var classes = props.classes,
      children = props.children,
      _props$style = props.style,
      style = _props$style === void 0 ? {
    'width': '80px',
    'minWidth': '80px'
  } : _props$style;
  return /*#__PURE__*/React.createElement("div", {
    className: classes.searchRowCell,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.searchRowCellContent
  }, children));
};

export default withStyles(styles)(EAMGridCell);