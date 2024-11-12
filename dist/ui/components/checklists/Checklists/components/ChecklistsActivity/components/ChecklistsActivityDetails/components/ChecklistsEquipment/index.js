import React, { useContext, useMemo } from "react";
import ChecklistEquipment from "./components/ChecklistEquipment";
import ChecklistItem from "../../../../../../../ChecklistItem";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import ChecklistsEquipmentExpansionPanel from "./components/ChecklistsEquipmentExpansionPanel";
import ChecklistsContext from "../../../../../../contexts/ChecklistsContext";
var ChecklistsEquipment = function ChecklistsEquipment(_ref) {
  var key = _ref.key,
    checklists = _ref.checklists,
    activity = _ref.activity,
    _ref$isDisabled = _ref.isDisabled,
    isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
    onResetSignatures = _ref.onResetSignatures,
    onUpdateChecklistItem = _ref.onUpdateChecklistItem,
    showError = _ref.showError,
    showChecklistOptions = _ref.showChecklistOptions,
    onCollapseEquipment = _ref.onCollapseEquipment;
  var _useContext = useContext(ChecklistsContext),
    hideFollowUpProp = _useContext.hideFollowUpProp,
    updateChecklistItem = _useContext.updateChecklistItem,
    minFindingsDropdown = _useContext.minFindingsDropdown,
    handleError = _useContext.handleError,
    getWoLink = _useContext.getWoLink,
    eqpToOtherId = _useContext.eqpToOtherId,
    register = _useContext.register;
  var firstChecklist = useMemo(function () {
    return checklists[0];
  }, [checklists]);
  if (firstChecklist === undefined) {
    console.error("renderChecklistsForEquipment MUST be passed at least 1 checklist");
    return null;
  }
  var equipmentCode = useMemo(function () {
    return firstChecklist.equipmentCode;
  }, [firstChecklist]);
  var collapsed = useMemo(function () {
    return activity.equipments[equipmentCode].collapsed;
  }, [activity.equipments, equipmentCode]);
  var equipmentChecklistDesc = useMemo(function () {
    return "".concat(equipmentCode, " \u2014 ").concat(firstChecklist.equipmentDesc) + (eqpToOtherId?.[equipmentCode] ? " \u2014 ".concat(eqpToOtherId[equipmentCode]) : "");
  }, [equipmentCode, firstChecklist.equipmentDesc, eqpToOtherId]);
  return /*#__PURE__*/React.createElement(ChecklistsEquipmentExpansionPanel, {
    style: {
      width: "100%",
      outline: "1px solid #e0e0e0",
      borderRadius: "5px"
    },
    key: key,
    expanded: !collapsed,
    TransitionProps: {
      unmountOnExit: true,
      timeout: 0
    },
    onChange: function onChange(_, expanded) {
      return onCollapseEquipment(!expanded, activity.index, equipmentCode);
    }
  }, /*#__PURE__*/React.createElement(AccordionSummary, {
    style: {
      outline: "1px solid #e0e0e0",
      borderRadius: "5px",
      marginTop: "5px"
    },
    expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null)
  }, /*#__PURE__*/React.createElement(ChecklistEquipment, {
    key: firstChecklist.checkListCode + "_equipment",
    description: equipmentChecklistDesc
  })), /*#__PURE__*/React.createElement(AccordionDetails, {
    style: {
      padding: "0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%"
    }
  }, checklists.map(function (checklist, index) {
    return /*#__PURE__*/React.createElement(ChecklistItem, {
      key: "checklistItem$" + checklist.checkListCode,
      updateChecklistItem: updateChecklistItem,
      onUpdateChecklistItem: onUpdateChecklistItem,
      checklistItem: checklist,
      taskCode: activity.taskCode,
      handleError: handleError,
      showError: showError,
      minFindingsDropdown: minFindingsDropdown,
      getWoLink: getWoLink,
      resetSignatures: onResetSignatures,
      disabled: isDisabled,
      isLastItem: index === checklists.length - 1,
      hideFollowUpProp: hideFollowUpProp,
      showChecklistOptions: showChecklistOptions,
      register: register
    });
  }))));
};
export default ChecklistsEquipment;