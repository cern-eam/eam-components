function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useCallback, useContext, useEffect, useState } from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import ChecklistsSignature from "./components/ChecklistsSignature";
import ChecklistsActivityExpansionPanel from "./components/ChecklistsActivityExpansionPanel";
import ChecklistsActivityDetails from "./components/ChecklistsActivityDetails";
import ChecklistsActivitySummary from "./components/ChecklistsActivitySummary";
import ChecklistsContext from "../../contexts/ChecklistsContext";
var ChecklistsActivity = function ChecklistsActivity(_ref) {
  var activity = _ref.activity,
    setCreateFollowUpActivity = _ref.setCreateFollowUpActivity,
    onUpdateChecklistItem = _ref.onUpdateChecklistItem,
    checklistsEquipmentDisabled = _ref.checklistsEquipmentDisabled;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    collapsedActivity = _useState2[0],
    setCollapsedActivity = _useState2[1];
  var _useContext = useContext(ChecklistsContext),
    activities = _useContext.activities,
    setActivities = _useContext.setActivities;
  var collapseActivity = useCallback(function (collapsed, index) {
    setCollapsedActivity({
      index: index,
      collapsed: collapsed
    });
    setActivities(function (prev) {
      var activities = _toConsumableArray(prev);
      activities[index].collapsed = collapsed;
      return activities;
    });
  }, []);
  var collapseEquipment = useCallback(function (collapsed, activityIndex, equipmentCode) {
    setActivities(function (prev) {
      var activities = _toConsumableArray(prev);
      var activity = _objectSpread({}, activities[activityIndex]);
      var equipments = _objectSpread({}, activity.equipments);
      var equipment = _objectSpread({}, equipments[equipmentCode], {
        collapsed: collapsed
      });
      equipments[equipmentCode] = equipment;
      activity.equipments = equipments;
      activities[activityIndex] = activity;
      return activities;
    });
  }, []);
  var setSignature = useCallback(function (activityCode, type, signer, time) {
    setActivities(function (prev) {
      var activities = _toConsumableArray(prev);
      var activityIndex = activities.findIndex(function (activity) {
        return activityCode === activity.activityCode;
      });
      var activity = _objectSpread({}, activities[activityIndex]);
      activities[activityIndex] = activity;
      if (activity.signatures && activity.signatures[type]) {
        activity.signatures = _objectSpread({}, activity.signatures);
        activity.signatures[type] = _objectSpread({}, activity.signatures[type], {
          signer: signer,
          time: time
        });
      }
      return activities;
    });
  }, []);
  var resetSignatures = useCallback(function (activityCode) {
    var types = ["PB01", "PB02", "RB01"];
    types.forEach(function (type) {
      return setSignature(activityCode, type, null, null);
    });
  }, [setSignature]);
  useEffect(function () {
    if (!collapsedActivity) return;
    var index = collapsedActivity.index,
      collapsed = collapsedActivity.collapsed;
    var activity = activities[index];
    var equipmentKeys = Object.keys(activity.equipments);
    if (equipmentKeys.length === 1) {
      // also do the same to the equipment if there's only a single one
      collapseEquipment(collapsed, activity.index, equipmentKeys[0]);
    }
  }, [collapsedActivity?.index, collapsedActivity?.collapsed, activities]);
  return /*#__PURE__*/React.createElement(ChecklistsActivityExpansionPanel, {
    expanded: !activity.collapsed,
    TransitionProps: {
      unmountOnExit: true,
      timeout: 0
    },
    onChange: function onChange(_, expanded) {
      return collapseActivity(!expanded, activity.index);
    },
    style: {
      marginTop: "10px"
    }
  }, /*#__PURE__*/React.createElement(AccordionSummary, {
    expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null)
  }, /*#__PURE__*/React.createElement(ChecklistsActivitySummary, {
    activity: activity,
    setCreateFollowUpActivity: setCreateFollowUpActivity
  })), /*#__PURE__*/React.createElement(AccordionDetails, {
    style: {
      marginTop: "-5px",
      padding: "0px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(ChecklistsActivityDetails, {
    activity: activity,
    onResetSignatures: resetSignatures,
    onUpdateChecklistItem: onUpdateChecklistItem,
    onCollapseEquipment: collapseEquipment,
    checklistsEquipmentDisabled: checklistsEquipmentDisabled
  }))), /*#__PURE__*/React.createElement(ChecklistsSignature, {
    activity: activity,
    setSignature: setSignature
  }));
};
export default ChecklistsActivity;