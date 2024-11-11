import React, { useCallback, useContext, useMemo, useState } from "react";
import ChecklistsActivityExpansionPanel from "./ChecklistsActivityExpansionPanel";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import ChecklistSignature from "./ChecklistSignature";
import ChecklistsContext from "./contexts/ChecklistsContext";
import { SIGNATURE_ORDER, SIGNATURE_TYPES } from "./constants/signatures";

const ChecklistsSignature = ({ activity, setSignature }) => {
  const [signaturesCollapsed, setSignaturesCollapsed] = useState({});
  const { showError, disabled } = useContext(ChecklistsContext);

  const signatures = useMemo(() => {
    if (!activity?.signatures) return;
    return Object.values(activity.signatures)
      .sort(
        (signature1, signature2) =>
          SIGNATURE_ORDER[signature1.type] - SIGNATURE_ORDER[signature2.type]
      )
      .filter((signature) => {
        if (!signature) return false;
        if (signature.signer) return true;
        switch (signature.type) {
          case SIGNATURE_TYPES.PERFORMER_1:
            return signature.viewAsPerformer || signature.viewAsReviewer;
          case SIGNATURE_TYPES.PERFORMER_2:
            if (
              !activity.signatures[SIGNATURE_TYPES.PERFORMER_1] ||
              activity.signatures[SIGNATURE_TYPES.PERFORMER_1]
                .responsibilityCode !== signature.responsibilityCode
            )
              return signature.viewAsPerformer || signature.viewAsReviewer;
            else return activity.signatures[SIGNATURE_TYPES.PERFORMER_1].signer;
          case SIGNATURE_TYPES.REVIEWER:
            return signature.viewAsReviewer;
        }
        return true;
      });
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
