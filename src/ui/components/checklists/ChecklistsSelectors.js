import React from "react";
import EAMSelect from "../inputs-ng/EAMSelect";

const ChecklistsSelectors = ({
  activityCode,
  activities,
  equipments,
  filteredActivity,
  filteredEquipment,
  filteredActivities,
  setNewFilter,
  filteredActivityObject,
}) => {
  if (activityCode) return null;

  return (
    <div>
      {activities.length > 1 && (
        <EAMSelect
          selectOnlyMode
          label={"Activity"}
          renderSuggestion={(suggestion) => suggestion.desc}
          renderValue={(value) => value.desc || value.code}
          options={filteredActivities
            .filter((activity) =>
              filteredEquipment
                ? activity.equipments[filteredEquipment] !== undefined
                : true
            )
            .map((activity) => ({
              code: activity.activityCode,
              desc: activity.activityCode + " — " + activity.activityNote,
            }))}
          value={filteredActivity}
          onChange={(activity) =>
            setNewFilter({ activity: { code: activity.code } })
          }
          menuContainerStyle={{ zIndex: 999 }}
        />
      )}

      {Object.keys(equipments).length > 1 && (
        <EAMSelect
          selectOnlyMode
          label={"Equipment"}
          options={Object.keys(equipments)
            .filter((key) =>
              filteredActivity
                ? filteredActivityObject.equipments[key] !== undefined
                : true
            )
            .map((key) => equipments[key])
            .map((equipment) => ({
              ...equipment,
              desc: equipment.code + " — " + equipment.desc,
            }))}
          value={filteredEquipment ? filteredEquipment : undefined}
          onChange={(equipment) =>
            setNewFilter({ equipmentCode: equipment.code })
          }
          menuContainerStyle={{ zIndex: 999 }}
        />
      )}
    </div>
  );
};

export default ChecklistsSelectors;
