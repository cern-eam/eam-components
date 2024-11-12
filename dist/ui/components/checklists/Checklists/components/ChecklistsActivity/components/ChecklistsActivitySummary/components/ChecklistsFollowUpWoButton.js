import React, { useContext } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ChecklistsContext from "../../../../../contexts/ChecklistsContext";
var ChecklistsFollowUpWoButton = function ChecklistsFollowUpWoButton(_ref) {
  var activity = _ref.activity,
    setCreateFollowUpActivity = _ref.setCreateFollowUpActivity;
  var _useContext = useContext(ChecklistsContext),
    disabled = _useContext.disabled;
  return /*#__PURE__*/React.createElement(Button, {
    key: "".concat(activity.activityCode, "$createfuwo"),
    onClick: function onClick(evt) {
      evt.stopPropagation();
      setCreateFollowUpActivity(activity);
    },
    color: "primary",
    variant: "outlined",
    size: "small",
    style: {
      fontSize: "10px",
      marginRight: "8px"
    },
    disabled: disabled || activity.checklists.every(function (checklist) {
      return typeof checklist.followUpWorkOrder === "string" || checklist.followUp === false;
    })
  }, /*#__PURE__*/React.createElement(AddIcon, {
    style: {
      marginLeft: "-8px"
    }
  }), "Follow-up WO");
};
export default ChecklistsFollowUpWoButton;