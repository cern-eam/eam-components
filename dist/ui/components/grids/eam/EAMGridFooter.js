import { Box } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
var EAMGridFooter = withStyles(function (theme) {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      background: theme.palette.grey[100],
      border: "1px solid ".concat(theme.palette.grey[200]),
      borderTop: "none",
      borderRadius: "0 0 4px 4px",
      padding: "0.5rem",
      flexWrap: "wrap"
    }
  };
})(Box);
export default EAMGridFooter;