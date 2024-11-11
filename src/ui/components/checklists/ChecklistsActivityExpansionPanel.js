import withStyles from "@mui/styles/withStyles";
import MuiExpansionPanel from "@mui/material/Accordion";

const ChecklistsActivityExpansionPanel = withStyles({
  root: {
    backgroundColor: "#fafafa",
    marginTop: "10px",
    outline: "1px solid #e0e0e0",
    borderRadius: "5px",
    boxShadow: "none",
    "&:last-child:not(:only-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

export default ChecklistsActivityExpansionPanel;
