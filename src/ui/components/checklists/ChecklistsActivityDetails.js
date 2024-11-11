import React, { useContext, useMemo } from "react";
import ChecklistsEquipment from "./ChecklistsEquipment";
import ChecklistsContext from "./contexts/ChecklistsContext";

const ChecklistsActivityDetails = ({
  activity,
  onResetSignatures,
  onUpdateChecklistItem,
  onCollapseEquipment,
  checklistsEquipmentDisabled,
}) => {
  const {
    filteredEquipment,
    checklistsHidden,
    showChecklistOptions,
    showError,
  } = useContext(ChecklistsContext);

  const checklists = useMemo(
    () =>
      activity.checklists.filter(
        ({ equipmentCode, checkListCode }) =>
          (!filteredEquipment || equipmentCode === filteredEquipment) &&
          !checklistsHidden[checkListCode]
      ),
    [activity.checklists, checklistsHidden, filteredEquipment]
  );

  if (checklists.length === 0) {
    return (
      <p style={{ textAlign: "center" }}>
        All checklists in this activity are hidden.
      </p>
    );
  }

  const equipmentBoundaries = useMemo(() => {
    // this stores the index of the checklists that are related to a different equipment than the one before them
    // this includes the first checklist item since it has no equipment before it
    const boundaries = [];

    let equipmentCode;
    checklists.forEach((checklist, i) => {
      if (equipmentCode === checklist.equipmentCode) return;

      equipmentCode = checklist.equipmentCode;
      boundaries.push(i);
    });

    // include the index after the last checklist as a boundary
    // this makes the next section of the code much simpler, since we can loop over pairs of boundaries
    boundaries.push(checklists.length);

    return boundaries;
  }, [checklists]);

  const result = [];

  // now that we have the equipment boundaries, we can make arrays of checklists
  // for each equipment in the activity, and render a collapsible menu

  for (let i = 1; i < equipmentBoundaries.length; ++i) {
    const start = equipmentBoundaries[i - 1];
    const end = equipmentBoundaries[i];
    const equipmentCode = checklists[start].equipmentCode;

    result.push(
      <ChecklistsEquipment
        key={equipmentCode + start}
        checklists={checklists.slice(start, end)}
        activity={activity}
        isDisabled={checklistsEquipmentDisabled}
        onResetSignatures={onResetSignatures}
        onUpdateChecklistItem={onUpdateChecklistItem}
        showError={showError}
        showChecklistOptions={showChecklistOptions}
        onCollapseEquipment={onCollapseEquipment}
      />
    );
  }

  return result;
};
export default ChecklistsActivityDetails;
