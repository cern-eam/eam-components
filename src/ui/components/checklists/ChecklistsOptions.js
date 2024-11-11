import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const ChecklistsOptions = ({
  blocking,
  expandActivities,
  expandChecklists,
  showChecklistOptions,
  checklistsHidden,
  toggleExpandActivities,
  toggleExpandChecklists,
  toggleShowChecklistOptions,
  toggleFilledFilter,
}) => {
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
