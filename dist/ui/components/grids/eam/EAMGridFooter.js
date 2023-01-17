import React from "react";
import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
var theme = createTheme();
var EAMGridFooter = function EAMGridFooter(props) {
  return /*#__PURE__*/React.createElement(Box, {
    sx: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      background: theme.palette.grey[100],
      border: "1px solid ".concat(theme.palette.grey[200]),
      borderTop: "none",
      borderRadius: "0 0 4px 4px",
      padding: "0.2rem 0.5rem 0.2rem 0.5rem",
      flexWrap: "wrap"
    }
  }, props.children);
};
export default EAMGridFooter;