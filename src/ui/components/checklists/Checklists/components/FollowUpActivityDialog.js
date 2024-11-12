import React from "react";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const FollowUpActivityDialog = ({
  createFollowUpActivity,
  hideCreateFollowUpWODialog,
  createFollowUpWOs,
}) => {
  return (
    <Dialog open={createFollowUpActivity !== null}>
      {createFollowUpActivity && (
        <Paper
          elevation={3}
          style={{
            padding: "30px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "25px", marginBottom: "15px" }}>
            Create follow-up work orders?
          </div>
          <p>
            Activity {createFollowUpActivity.activityCode} —{" "}
            {createFollowUpActivity.activityNote}
          </p>
          <div>
            {
              <Button type="submit" onClick={hideCreateFollowUpWODialog}>
                Cancel
              </Button>
            }
            {
              <Button onClick={createFollowUpWOs} color="primary">
                Confirm
              </Button>
            }
          </div>
        </Paper>
      )}
    </Dialog>
  );
};

export default FollowUpActivityDialog;
