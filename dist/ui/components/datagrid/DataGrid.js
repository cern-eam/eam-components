import React from "react";
import { DataGridProvider } from "./DataGridContext";

var DataGrid = function DataGrid(props) {
  return /*#__PURE__*/React.createElement(DataGridProvider, props, props.children);
};

export default DataGrid;