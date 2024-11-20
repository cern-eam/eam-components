import React, { useContext } from "react";
import DocumentsInstructionsDialog from "../../../../../dialogs/DocumentsInstructionsDialog";
import ChecklistsFollowUpWoButton from "./components/ChecklistsFollowUpWoButton";
import ChecklistsContext from "../../../../contexts/ChecklistsContext";
import { isCernMode } from "../../../../../../../../tools/CERNMode";
var ChecklistsActivitySummary = function ChecklistsActivitySummary(_ref) {
  var activity = _ref.activity,
    setCreateFollowUpActivity = _ref.setCreateFollowUpActivity;
  var _useContext = useContext(ChecklistsContext),
    taskPlansMetadata = _useContext.taskPlansMetadata,
    hideFollowUpProp = _useContext.hideFollowUpProp;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 0,
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "bold",
      flexBasis: "66%",
      fontSize: 14,
      color: "#333"
    }
  }, activity.activityCode, " \u2014 ", activity.activityNote || activity.tradeCode), !hideFollowUpProp && activity.checklists.some(function (checklist) {
    return !checklist.hideFollowUp;
  }) && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      flexDirection: "row",
      display: "flex",
      cursor: "default"
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, isCernMode && /*#__PURE__*/React.createElement(DocumentsInstructionsDialog, {
    title: activity.taskCode,
    subtitle: activity.activityNote || activity.tradeCode,
    taskPlanMetadata: taskPlansMetadata?.[activity.taskCode]
  }), /*#__PURE__*/React.createElement(ChecklistsFollowUpWoButton, {
    activity: activity,
    setCreateFollowUpActivity: setCreateFollowUpActivity
  })));
};
export default ChecklistsActivitySummary;