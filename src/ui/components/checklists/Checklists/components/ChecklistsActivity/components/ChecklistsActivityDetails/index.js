import React, { useContext, useMemo } from "react";
import ChecklistsEquipment from "./components/ChecklistsEquipment";
import ChecklistsContext from "../../../../contexts/ChecklistsContext";

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

  const equipmentBoundaries = useMemo(() => {
    // this stores the index of the checklists that are related to a different equipment than the one before them
    // this includes the first checklist item since it has no equipment before it
    let equipmentCode;

    const boundaries = checklists.reduce((acc, checklist, i) => {
      if (equipmentCode === checklist.equipmentCode) return acc;
      equipmentCode = checklist.equipmentCode;
      return [...acc, i];
    }, []);

    // include the index after the last checklist as a boundary
    // this makes the next section of the code much simpler, since we can loop over pairs of boundaries
    boundaries.push(checklists.length);

    return boundaries;
  }, [checklists]);

  if (checklists.length === 0) {
    return (
      <p style={{ textAlign: "center" }}>
        All checklists in this activity are hidden.
      </p>
    );
  }

  return equipmentBoundaries.slice(1).map((end, i) => {
    const start = equipmentBoundaries[i];
    const equipmentCode = checklists[start].equipmentCode;

    return (
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
  });
};

export default ChecklistsActivityDetails;
