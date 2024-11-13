import React, { useContext, useMemo } from "react";
import EAMSelect from "../../../../components/inputs-ng/EAMSelect";
import GridTools from "../../../../components/grids/GridTools";
import ChecklistsContext from "../contexts/ChecklistsContext";

const ChecklistsSelectors = ({
  filteredActivity,
  filteredActivities,
  setNewFilter,
}) => {
  const { activities, filteredEquipment } = useContext(ChecklistsContext);

  const activityCode = useMemo(
    () => GridTools.getURLParameterByName("activityCode"),
    []
  );

  if (activityCode) return null;

  const equipments = useMemo(
    () =>
      activities.reduce((prev, activity) => {
        Object.keys(activity.equipments).forEach(
          (key) => (prev[key] = activity.equipments[key])
        );
        return prev;
      }, {}),
    [activities]
  );

  const filteredActivityObject = useMemo(
    () =>
      activities.find((activity) => activity.activityCode === filteredActivity),
    [activities, filteredActivity]
  );

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
