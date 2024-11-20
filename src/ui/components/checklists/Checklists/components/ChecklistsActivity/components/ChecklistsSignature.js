import React, { useCallback, useContext, useMemo, useState } from "react";
import ChecklistsActivityExpansionPanel from "./ChecklistsActivityExpansionPanel";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import ChecklistSignature from "../../../../ChecklistSignature";
import ChecklistsContext from "../../../contexts/ChecklistsContext";
import { getSignatures } from "../../../utils";

const ChecklistsSignature = ({ activity, setSignature }) => {
  const [signaturesCollapsed, setSignaturesCollapsed] = useState({});
  const { showError, disabled } = useContext(ChecklistsContext);

  const signatures = useMemo(() => {
    if (!activity?.signatures) return;
    return getSignatures(activity.signatures);
  }, [activity?.signatures]);

  const expandSignature = useCallback((activity, expanded) => {
    setSignaturesCollapsed((prev) => {
      const signaturesCollapsed = { ...prev };
      signaturesCollapsed[activity.activityCode] = !expanded;
      return signaturesCollapsed;
    });
  }, []);

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
