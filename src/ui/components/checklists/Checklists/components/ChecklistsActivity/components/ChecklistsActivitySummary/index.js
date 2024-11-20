import React, { useContext } from "react";
import DocumentsInstructionsDialog from "../../../../../dialogs/DocumentsInstructionsDialog";
import ChecklistsFollowUpWoButton from "./components/ChecklistsFollowUpWoButton";
import ChecklistsContext from "../../../../contexts/ChecklistsContext";
import { isCernMode } from "../../../../../../../../tools/CERNMode";

const ChecklistsActivitySummary = ({ activity, setCreateFollowUpActivity }) => {
  const { taskPlansMetadata, hideFollowUpProp } = useContext(ChecklistsContext);

  return (
    <div
      style={{
        padding: 0,
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          fontWeight: "bold",
          flexBasis: "66%",
          fontSize: 14,
          color: "#333",
        }}
      >
        {activity.activityCode} — {activity.activityNote || activity.tradeCode}
      </span>
      {!hideFollowUpProp &&
        activity.checklists.some((checklist) => !checklist.hideFollowUp) && (
          <div
            style={{
              flexShrink: 0,
              flexDirection: "row",
              display: "flex",
              cursor: "default",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {isCernMode && (
              <DocumentsInstructionsDialog
                title={activity.taskCode}
                subtitle={activity.activityNote || activity.tradeCode}
                taskPlanMetadata={taskPlansMetadata?.[activity.taskCode]}
              />
            )}
            <ChecklistsFollowUpWoButton
              activity={activity}
              setCreateFollowUpActivity={setCreateFollowUpActivity}
            />
          </div>
        )}
    </div>
  );
};

export default ChecklistsActivitySummary;
