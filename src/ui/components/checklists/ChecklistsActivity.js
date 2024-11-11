import React, { useCallback, useEffect, useState } from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import ChecklistsSignature from "./ChecklistsSignature";
import ChecklistsActivityExpansionPanel from "./ChecklistsActivityExpansionPanel";
import ChecklistsActivityDetails from "./ChecklistsActivityDetails";
import ChecklistsActivitySummary from "./ChecklistsActivitySummary";

const ChecklistsActivity = ({
  activity,
  activities,
  setActivities,
  setCreateFollowUpActivity,
  onUpdateChecklistItem,
  checklistsEquipmentDisabled,
}) => {
  const [collapsedActivity, setCollapsedActivity] = useState(null);

  const collapseActivity = useCallback((collapsed, index) => {
    setCollapsedActivity({ index, collapsed });
    setActivities((prev) => {
      const activities = [...prev];
      activities[index].collapsed = collapsed;
      return activities;
    });
  }, []);

  const collapseEquipment = useCallback(
    (collapsed, activityIndex, equipmentCode) => {
      setActivities((prev) => {
        const activities = [...prev];
        const activity = { ...activities[activityIndex] };
        const equipments = { ...activity.equipments };
        const equipment = {
          ...equipments[equipmentCode],
          collapsed,
        };
        equipments[equipmentCode] = equipment;
        activity.equipments = equipments;
        activities[activityIndex] = activity;
        return activities;
      });
    },
    []
  );

  const setSignature = useCallback((activityCode, type, signer, time) => {
    setActivities((prev) => {
      const activities = [...prev];
      const activityIndex = activities.findIndex(
        (activity) => activityCode === activity.activityCode
      );
      const activity = { ...activities[activityIndex] };
      activities[activityIndex] = activity;
      if (activity.signatures && activity.signatures[type]) {
        activity.signatures = { ...activity.signatures };
        activity.signatures[type] = {
          ...activity.signatures[type],
          signer,
          time,
        };
      }
      return activities;
    });
  }, []);

  const resetSignatures = useCallback(
    (activityCode) => {
      const types = ["PB01", "PB02", "RB01"];
      types.forEach((type) => setSignature(activityCode, type, null, null));
    },
    [setSignature]
  );

  useEffect(() => {
    if (!collapsedActivity) return;
    const { index, collapsed } = collapsedActivity;
    const activity = activities[index];
    const equipmentKeys = Object.keys(activity.equipments);
    if (equipmentKeys.length === 1) {
      // also do the same to the equipment if there's only a single one
      collapseEquipment(collapsed, activity.index, equipmentKeys[0]);
    }
  }, [collapsedActivity?.index, collapsedActivity?.collapsed, activities]);

  return (
    <ChecklistsActivityExpansionPanel
      expanded={!activity.collapsed}
      TransitionProps={{ unmountOnExit: true, timeout: 0 }}
      onChange={(_, expanded) => collapseActivity(!expanded, activity.index)}
      style={{ marginTop: "10px" }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <ChecklistsActivitySummary
          activity={activity}
          setCreateFollowUpActivity={setCreateFollowUpActivity}
        />
      </AccordionSummary>
      <AccordionDetails style={{ marginTop: "-5px", padding: "0px" }}>
        <div style={{ width: "100%" }}>
          <ChecklistsActivityDetails
            activity={activity}
            onResetSignatures={resetSignatures}
            onUpdateChecklistItem={onUpdateChecklistItem}
            onCollapseEquipment={collapseEquipment}
            checklistsEquipmentDisabled={checklistsEquipmentDisabled}
          />
        </div>
      </AccordionDetails>
      <ChecklistsSignature activity={activity} setSignature={setSignature} />
    </ChecklistsActivityExpansionPanel>
  );
};

export default ChecklistsActivity;
