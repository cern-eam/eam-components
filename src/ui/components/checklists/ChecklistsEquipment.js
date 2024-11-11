import React, { useContext, useMemo } from "react";
import ChecklistEquipment from "./ChecklistEquipment";
import ChecklistItem from "./ChecklistItem";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import ChecklistsEquipmentExpansionPanel from "./ChecklistsEquipmentExpansionPanel";
import ChecklistsContext from "./contexts/ChecklistsContext";

const ChecklistsEquipment = ({
  key,
  checklists,
  activity,
  isDisabled = false,
  onResetSignatures,
  onUpdateChecklistItem,
  showError,
  showChecklistOptions,
  onCollapseEquipment,
}) => {
  const {
    hideFollowUpProp,
    updateChecklistItem,
    minFindingsDropdown,
    handleError,
    getWoLink,
    eqpToOtherId,
    register,
  } = useContext(ChecklistsContext);

  const firstChecklist = useMemo(() => checklists[0], [checklists]);

  if (firstChecklist === undefined) {
    console.error(
      "renderChecklistsForEquipment MUST be passed at least 1 checklist"
    );
    return null;
  }

  const equipmentCode = useMemo(
    () => firstChecklist.equipmentCode,
    [firstChecklist]
  );

  const collapsed = useMemo(
    () => activity.equipments[equipmentCode].collapsed,
    [activity.equipments, equipmentCode]
  );

  const equipmentChecklistDesc = useMemo(
    () =>
      `${equipmentCode} — ${firstChecklist.equipmentDesc}` +
      (eqpToOtherId?.[equipmentCode]
        ? ` — ${eqpToOtherId[equipmentCode]}`
        : ""),
    [equipmentCode, firstChecklist.equipmentDesc, eqpToOtherId]
  );

  return (
    <ChecklistsEquipmentExpansionPanel
      style={{
        width: "100%",
        outline: "1px solid #e0e0e0",
        borderRadius: "5px",
      }}
      key={key}
      expanded={!collapsed}
      TransitionProps={{ unmountOnExit: true, timeout: 0 }}
      onChange={(_, expanded) =>
        onCollapseEquipment(!expanded, activity.index, equipmentCode)
      }
    >
      <AccordionSummary
        style={{
          outline: "1px solid #e0e0e0",
          borderRadius: "5px",
          marginTop: "5px",
        }}
        expandIcon={<ExpandMoreIcon />}
      >
        <ChecklistEquipment
          key={firstChecklist.checkListCode + "_equipment"}
          description={equipmentChecklistDesc}
        />
      </AccordionSummary>
      <AccordionDetails style={{ padding: "0" }}>
        <div style={{ width: "100%" }}>
          {checklists.map((checklist, index) => (
            <ChecklistItem
              key={"checklistItem$" + checklist.checkListCode}
              updateChecklistItem={updateChecklistItem}
              onUpdateChecklistItem={onUpdateChecklistItem}
              checklistItem={checklist}
              taskCode={activity.taskCode}
              handleError={handleError}
              showError={showError}
              minFindingsDropdown={minFindingsDropdown}
              getWoLink={getWoLink}
              resetSignatures={onResetSignatures}
              disabled={isDisabled}
              isLastItem={index === checklists.length - 1}
              hideFollowUpProp={hideFollowUpProp}
              showChecklistOptions={showChecklistOptions}
              register={register}
            />
          ))}
        </div>
      </AccordionDetails>
    </ChecklistsEquipmentExpansionPanel>
  );
};

export default ChecklistsEquipment;
