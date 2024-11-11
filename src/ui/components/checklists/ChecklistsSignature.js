import React from "react";
import ChecklistsActivityExpansionPanel from "./ChecklistsActivityExpansionPanel";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import ChecklistSignature from "./ChecklistSignature";

const ChecklistsSignature = ({
  activity,
  signatures,
  signaturesCollapsed,
  expandSignature,
  setSignature,
  showError,
  disabled,
}) => {
  if (!activity.signatures || !signatures?.length) {
    return null;
  }

  return (
    <ChecklistsActivityExpansionPanel
      style={{ outline: "0px", marginTop: "0px" }}
      expanded={!signaturesCollapsed[activity.activityCode]}
      onChange={(_, expanded) => expandSignature(activity, expanded)}
    >
      <AccordionSummary
        style={{ paddingLeft: "10px", minHeight: "20px" }}
        sx={{
          "& .MuiAccordionSummary-content": {
            justifyContent: "center",
            marginTop: "16px",
            marginBottom: "16px",
          },
        }}
        expandIcon={<ExpandMoreIcon />}
      >
        <span style={{ fontWeight: 500 }}>E-SIGNATURES</span>
      </AccordionSummary>
      <AccordionDetails style={{ margin: 0, padding: 0, minHeight: "50px" }}>
        <div style={{ width: "100%" }}>
          {signatures.map((signature) => (
            <ChecklistSignature
              signature={signature}
              workOrderCode={activity.workOrderNumber}
              activityCode={activity.activityCode}
              showError={showError}
              setSignature={setSignature}
              disabled={disabled}
            />
          ))}
        </div>
      </AccordionDetails>
    </ChecklistsActivityExpansionPanel>
  );
};

export default ChecklistsSignature;
