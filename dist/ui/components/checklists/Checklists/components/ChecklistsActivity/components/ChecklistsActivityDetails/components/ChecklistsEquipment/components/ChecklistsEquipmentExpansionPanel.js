import withStyles from "@mui/styles/withStyles";
import MuiExpansionPanel from "@mui/material/Accordion";
var ChecklistsEquipmentExpansionPanel = withStyles({
  root: {
    boxShadow: "none",
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);
export default ChecklistsEquipmentExpansionPanel;