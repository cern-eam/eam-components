import React from "react";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
var FollowUpActivityDialog = function FollowUpActivityDialog(_ref) {
  var createFollowUpActivity = _ref.createFollowUpActivity,
    hideCreateFollowUpWODialog = _ref.hideCreateFollowUpWODialog,
    createFollowUpWOs = _ref.createFollowUpWOs;
  return /*#__PURE__*/React.createElement(Dialog, {
    open: createFollowUpActivity !== null
  }, createFollowUpActivity && /*#__PURE__*/React.createElement(Paper, {
    elevation: 3,
    style: {
      padding: "30px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "25px",
      marginBottom: "15px"
    }
  }, "Create follow-up work orders?"), /*#__PURE__*/React.createElement("p", null, "Activity ", createFollowUpActivity.activityCode, " \u2014", " ", createFollowUpActivity.activityNote), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    onClick: hideCreateFollowUpWODialog
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    onClick: createFollowUpWOs,
    color: "primary"
  }, "Confirm"))));
};
export default FollowUpActivityDialog;