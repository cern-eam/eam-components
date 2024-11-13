import React, { useCallback, useContext, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ChecklistsContext from "../../../../components/checklists/Checklists/contexts/ChecklistsContext";
import {
  parseToBoolean,
  getExpandActivitiesUrlParam,
  getExpandChecklistsUrlParam,
} from "../utils/index";

const ChecklistsOptions = ({
  blocking,
  setShowChecklistOptions,
  toggleFilledFilter,
}) => {
  const [expandActivities, setExpandActivities] = useState(
    parseToBoolean(getExpandActivitiesUrlParam(), false)
  );
  const [expandChecklists, setExpandChecklists] = useState(
    parseToBoolean(getExpandChecklistsUrlParam(), false)
  );

  const { setActivities, checklistsHidden, showChecklistOptions } =
    useContext(ChecklistsContext);

  const toggleExpandActivities = useCallback(() => {
    setExpandActivities((prev) => !prev);
    setActivities((prev) =>
      prev.map((activity) => ({
        ...activity,
        collapsed: expandActivities,
      }))
    );
  }, [expandActivities]);

  const toggleExpandChecklists = useCallback(() => {
    setExpandChecklists((prev) => !prev);
    setActivities((prev) =>
      prev.map((activity) => ({
        ...activity,
        equipments: Object.fromEntries(
          Object.entries(activity.equipments).map(
            ([equipmentCode, equipment]) => {
              return [
                equipmentCode,
                { ...equipment, collapsed: expandChecklists },
              ];
            }
          )
        ),
      }))
    );
  }, [expandChecklists]);

  const toggleShowChecklistOptions = useCallback(() => {
    setShowChecklistOptions((prev) => !prev);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        paddingRight: 8,
      }}
    >
      {!blocking && (
        <FormControlLabel
          control={<Checkbox color="primary" checked={expandActivities} />}
          label={"Expand Activities"}
          labelPlacement="start"
          onMouseDown={toggleExpandActivities}
          onTouchStart={toggleExpandActivities}
        />
      )}
      {!blocking && (
        <FormControlLabel
          control={<Checkbox color="primary" checked={expandChecklists} />}
          label={"Expand Checklists"}
          labelPlacement="start"
          onMouseDown={toggleExpandChecklists}
          onTouchStart={toggleExpandChecklists}
        />
      )}
      {!blocking && (
        <FormControlLabel
          control={<Checkbox color="primary" checked={showChecklistOptions} />}
          label={"Show Checklist Options"}
          labelPlacement="start"
          onMouseDown={toggleShowChecklistOptions}
          onTouchStart={toggleShowChecklistOptions}
        />
      )}
      {!blocking && (
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={Object.keys(checklistsHidden).length == 0}
            />
          }
          label={"Show filled items"}
          labelPlacement="start"
          onMouseDown={toggleFilledFilter}
          onTouchStart={toggleFilledFilter}
        />
      )}
    </div>
  );
};

export default ChecklistsOptions;
