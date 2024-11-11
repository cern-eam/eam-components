import React, { useContext } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ChecklistsContext from "./contexts/ChecklistsContext";

const ChecklistsFollowUpWoButton = ({
  activity,
  setCreateFollowUpActivity,
}) => {
  const { disabled } = useContext(ChecklistsContext);

  return (
    <Button
      key={`${activity.activityCode}$createfuwo`}
      onClick={(evt) => {
        evt.stopPropagation();
        setCreateFollowUpActivity(activity);
      }}
      color="primary"
      variant="outlined"
      size="small"
      style={{ fontSize: "10px", marginRight: "8px" }}
      disabled={
        disabled ||
        activity.checklists.every(
          (checklist) =>
            typeof checklist.followUpWorkOrder === "string" ||
            checklist.followUp === false
        )
      }
    >
      <AddIcon style={{ marginLeft: "-8px" }}></AddIcon>
      Follow-up WO
    </Button>
  );
};

export default ChecklistsFollowUpWoButton;
