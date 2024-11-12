function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import React, { useContext, useMemo } from "react";
import ChecklistsEquipment from "./components/ChecklistsEquipment";
import ChecklistsContext from "../../../../contexts/ChecklistsContext";
var ChecklistsActivityDetails = function ChecklistsActivityDetails(_ref) {
  var activity = _ref.activity,
    onResetSignatures = _ref.onResetSignatures,
    onUpdateChecklistItem = _ref.onUpdateChecklistItem,
    onCollapseEquipment = _ref.onCollapseEquipment,
    checklistsEquipmentDisabled = _ref.checklistsEquipmentDisabled;
  var _useContext = useContext(ChecklistsContext),
    filteredEquipment = _useContext.filteredEquipment,
    checklistsHidden = _useContext.checklistsHidden,
    showChecklistOptions = _useContext.showChecklistOptions,
    showError = _useContext.showError;
  var checklists = useMemo(function () {
    return activity.checklists.filter(function (_ref2) {
      var equipmentCode = _ref2.equipmentCode,
        checkListCode = _ref2.checkListCode;
      return (!filteredEquipment || equipmentCode === filteredEquipment) && !checklistsHidden[checkListCode];
    });
  }, [activity.checklists, checklistsHidden, filteredEquipment]);
  var equipmentBoundaries = useMemo(function () {
    // this stores the index of the checklists that are related to a different equipment than the one before them
    // this includes the first checklist item since it has no equipment before it
    var equipmentCode;
    var boundaries = checklists.reduce(function (acc, checklist, i) {
      if (equipmentCode === checklist.equipmentCode) return acc;
      equipmentCode = checklist.equipmentCode;
      return [].concat(_toConsumableArray(acc), [i]);
    }, []);

    // include the index after the last checklist as a boundary
    // this makes the next section of the code much simpler, since we can loop over pairs of boundaries
    boundaries.push(checklists.length);
    return boundaries;
  }, [checklists]);
  if (checklists.length === 0) {
    return /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: "center"
      }
    }, "All checklists in this activity are hidden.");
  }
  return equipmentBoundaries.slice(1).map(function (end, i) {
    var start = equipmentBoundaries[i];
    var equipmentCode = checklists[start].equipmentCode;
    return /*#__PURE__*/React.createElement(ChecklistsEquipment, {
      key: equipmentCode + start,
      checklists: checklists.slice(start, end),
      activity: activity,
      isDisabled: checklistsEquipmentDisabled,
      onResetSignatures: onResetSignatures,
      onUpdateChecklistItem: onUpdateChecklistItem,
      showError: showError,
      showChecklistOptions: showChecklistOptions,
      onCollapseEquipment: onCollapseEquipment
    });
  });
};
export default ChecklistsActivityDetails;