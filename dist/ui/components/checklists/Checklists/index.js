function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { forwardRef, useCallback, useEffect, useMemo, useState } from "react";
import SimpleEmptyState from "../../emptystates/SimpleEmptyState";
import BlockUi from "react-block-ui";
import Collapse from "@mui/material/Collapse";
import { isCernMode } from "../../../../tools/CERNMode";
import WSChecklists from "../../../../tools/WSChecklists";
import FollowUpActivityDialog from "./components/FollowUpActivityDialog";
import ChecklistsOptions from "./components/ChecklistsOptions";
import ChecklistsSelectors from "./components/ChecklistsSelectors";
import ChecklistsActivity from "./components/ChecklistsActivity";
import ChecklistsContext from "./contexts/ChecklistsContext";
import { concatActivityChecklistsToChecklists, filterActivitiesWithChecklists, getActivityCodeUrlParam, getChecklistsEquipmentDisabled, getCollapseFunction, getEffectiveActivityCode, getEffectiveEquipmentCode, getExpandedActivities, getFilledFilterChecklistsHidden, getFilteredActivities, getNewFilteredActivities, getShowChecklistOptsUrlParam, getShowFilledItemsUrlParam, getTaskPlansMetadata, getUpdatedChecklistsActivities, parseToBoolean } from "./utils";
import { FOLLOW_UP_WO_ERROR_MESSAGE, FOLLOW_UP_WO_SUCCESS_MESSAGE } from "./constants/followUpDialog";
var Checklists = function Checklists(_ref) {
  var workorder = _ref.workorder,
    version = _ref.version,
    _ref$readonly = _ref.readonly,
    readonly = _ref$readonly === void 0 ? false : _ref$readonly,
    expandChecklistsOptions = _ref.expandChecklistsOptions,
    _ref$maxExpandedCheck = _ref.maxExpandedChecklistItems,
    maxExpandedChecklistItems = _ref$maxExpandedCheck === void 0 ? 50 : _ref$maxExpandedCheck,
    collapseHeuristic = _ref.collapseHeuristic,
    bottomSlot = _ref.bottomSlot,
    edmsLoginServletLink = _ref.edmsLoginServletLink,
    showError = _ref.showError,
    showSuccess = _ref.showSuccess,
    _ref$getWorkOrderActi = _ref.getWorkOrderActivities,
    getWorkOrderActivities = _ref$getWorkOrderActi === void 0 ? WSChecklists.getWorkOrderActivities : _ref$getWorkOrderActi,
    _ref$getTaskPlanInstr = _ref.getTaskPlanInstructions,
    getTaskPlanInstructions = _ref$getTaskPlanInstr === void 0 ? WSChecklists.getTaskPlanInstructions : _ref$getTaskPlanInstr,
    activity = _ref.activity,
    disabled = _ref.disabled,
    hideFollowUpProp = _ref.hideFollowUpProp,
    _ref$updateChecklistI = _ref.updateChecklistItem,
    updateChecklistItem = _ref$updateChecklistI === void 0 ? WSChecklists.updateChecklistItem : _ref$updateChecklistI,
    _ref$minFindingsDropd = _ref.minFindingsDropdown,
    minFindingsDropdown = _ref$minFindingsDropd === void 0 ? 3 : _ref$minFindingsDropd,
    handleError = _ref.handleError,
    getWoLink = _ref.getWoLink,
    eqpToOtherId = _ref.eqpToOtherId,
    register = _ref.register;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    activities = _useState2[0],
    setActivities = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    taskPlansMetadata = _useState4[0],
    setTaskPlansMetadata = _useState4[1];
  var _useState5 = useState(true),
    _useState6 = _slicedToArray(_useState5, 2),
    blocking = _useState6[0],
    setBlocking = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    createFollowUpActivity = _useState8[0],
    setCreateFollowUpActivity = _useState8[1];
  var _useState9 = useState(getActivityCodeUrlParam()),
    _useState10 = _slicedToArray(_useState9, 2),
    filteredActivity = _useState10[0],
    setFilteredActivity = _useState10[1];
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    filteredEquipment = _useState12[0],
    setFilteredEquipment = _useState12[1];
  var _useState13 = useState({}),
    _useState14 = _slicedToArray(_useState13, 2),
    checklistsHidden = _useState14[0],
    setChecklistsHidden = _useState14[1];
  var _useState15 = useState(parseToBoolean(getShowChecklistOptsUrlParam(), false)),
    _useState16 = _slicedToArray(_useState15, 2),
    showChecklistOptions = _useState16[0],
    setShowChecklistOptions = _useState16[1];
  var showFilledItems = useMemo(function () {
    return parseToBoolean(getShowFilledItemsUrlParam(), true);
  }, []);
  var activitiesWithChecklists = useMemo(function () {
    return filterActivitiesWithChecklists(activities);
  }, [activities]);
  var filteredActivities = useMemo(function () {
    return getFilteredActivities(activities, filteredEquipment, filteredActivity);
  }, [activities]);
  var setNewFilter = useCallback(function (_ref2) {
    var activity = _ref2.activity,
      equipmentCode = _ref2.equipmentCode;
    var effectiveActivityCode = getEffectiveActivityCode(filteredActivity, activity?.code);
    var effectiveEquipmentCode = getEffectiveEquipmentCode(filteredEquipment, equipmentCode);
    var newActivities = getNewFilteredActivities(activities, effectiveActivityCode, effectiveEquipmentCode);
    if (!effectiveActivityCode && !effectiveEquipmentCode) {
      var checklists = concatActivityChecklistsToChecklists(activities);
      collapse(checklists, newActivities);
    }
    setActivities(newActivities);
    setFilteredActivity(effectiveActivityCode);
    setFilteredEquipment(effectiveEquipmentCode);
  }, [activities, filteredActivity, filteredEquipment, collapse]);
  var collapse = useCallback(function (checklists, activities) {
    var functionToRun = getCollapseFunction(collapseHeuristic, maxExpandedChecklistItems);
    var filteredChecklists = checklists.filter(function (_ref3) {
      var checkListCode = _ref3.checkListCode;
      return !checklistsHidden[checkListCode];
    });
    functionToRun(filteredChecklists, activities);
  }, [collapseHeuristic, checklistsHidden, maxExpandedChecklistItems]);
  var hideCreateFollowUpWODialog = useCallback(function () {
    setCreateFollowUpActivity(null);
  }, []);
  var toggleFilledFilter = useCallback(function () {
    setChecklistsHidden(function (prev) {
      return getFilledFilterChecklistsHidden(prev, activities);
    });
  }, [activities]);
  var readActivities = useCallback(function (workorder) {
    var refreshCollapse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    getWorkOrderActivities(workorder).then(function (response) {
      var expActivities = getExpandedActivities(response.body.data);
      if (isCernMode) {
        getTaskPlansMetadata(expActivities, getTaskPlanInstructions).then(function (taskPlansMetadata) {
          setTaskPlansMetadata(taskPlansMetadata);
        });
      }
      if (refreshCollapse) {
        var checklists = expActivities.reduce(function (checklists, activity) {
          return checklists.concat(activity.checklists);
        }, []);
        collapse(checklists, expActivities);
      } else {
        expActivities = expActivities.map(function (activity, index) {
          return _objectSpread({}, activities[index], {
            checklists: activity.checklists
          });
        });
      }
      if (!showFilledItems) toggleFilledFilter();
      if (activity) setNewFilter({
        activity: {
          code: activity
        }
      });
      setActivities(expActivities);
      setBlocking(false);
    });
  }, [getWorkOrderActivities, getTaskPlanInstructions, activity, collapse, toggleFilledFilter, setNewFilter, showFilledItems, isCernMode, activities]);
  var createFollowUpWOs = useCallback(function () {
    hideCreateFollowUpWODialog();
    var activity = {
      workOrderNumber: createFollowUpActivity.workOrderNumber,
      activityCode: createFollowUpActivity.activityCode
    };
    setBlocking(true);
    WSChecklists.createFolowUpWorkOrders(activity).then(function () {
      readActivities(activity.workOrderNumber);
      showSuccess(FOLLOW_UP_WO_SUCCESS_MESSAGE);
    })["catch"](function () {
      showError(FOLLOW_UP_WO_ERROR_MESSAGE);
    });
  }, [createFollowUpActivity, readActivities, showError, showSuccess]);
  var onUpdateChecklistItem = useCallback(function (checklistItem) {
    if (checklistItem.conditional) {
      readActivities(checklistItem.workOrderCode, false);
    }
    setActivities(function (prev) {
      return getUpdatedChecklistsActivities(prev, checklistItem);
    });
  }, [readActivities]);
  var handleChecklistsEquipmentDisabled = useCallback(function (_ref4) {
    var signatures = _ref4.signatures;
    return getChecklistsEquipmentDisabled(disabled, signatures);
  }, [disabled]);
  useEffect(function () {
    return readActivities(workorder);
  }, [workorder, version]);
  useEffect(function () {
    if (Object.keys(checklistsHidden).length === 0) {
      setNewFilter({
        activity: {
          code: filteredActivity
        },
        equipment: {
          code: filteredEquipment
        }
      });
    }
  }, [checklistsHidden, filteredActivity, filteredEquipment]);
  if (!blocking && activitiesWithChecklists.length === 0) {
    return /*#__PURE__*/React.createElement(SimpleEmptyState, {
      message: "No Checklists to show."
    });
  }
  return /*#__PURE__*/React.createElement(ChecklistsContext.Provider, {
    value: {
      activities: activities,
      setActivities: setActivities,
      checklistsHidden: checklistsHidden,
      taskPlansMetadata: taskPlansMetadata,
      filteredEquipment: filteredEquipment,
      showChecklistOptions: showChecklistOptions,
      showError: showError,
      disabled: disabled,
      hideFollowUpProp: hideFollowUpProp,
      updateChecklistItem: updateChecklistItem,
      minFindingsDropdown: minFindingsDropdown,
      handleError: handleError,
      getWoLink: getWoLink,
      eqpToOtherId: eqpToOtherId,
      register: register
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: readonly ? {
      width: "100%",
      pointerEvents: "none"
    } : {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(BlockUi, {
    blocking: blocking
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "20px",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Collapse, {
    "in": expandChecklistsOptions
  }, /*#__PURE__*/React.createElement(ChecklistsOptions, {
    blocking: blocking,
    setChecklistsHidden: setChecklistsHidden,
    setShowChecklistOptions: setShowChecklistOptions,
    toggleFilledFilter: toggleFilledFilter
  }))), /*#__PURE__*/React.createElement(ChecklistsSelectors, {
    filteredActivity: filteredActivity,
    filteredActivities: activitiesWithChecklists,
    setNewFilter: setNewFilter
  }), filteredActivities.map(function (activity) {
    return /*#__PURE__*/React.createElement(ChecklistsActivity, {
      key: activity.activityCode,
      activity: activity,
      setCreateFollowUpActivity: setCreateFollowUpActivity,
      onUpdateChecklistItem: onUpdateChecklistItem,
      checklistsEquipmentDisabled: handleChecklistsEquipmentDisabled(activity)
    });
  }), bottomSlot), /*#__PURE__*/React.createElement(FollowUpActivityDialog, {
    createFollowUpActivity: createFollowUpActivity,
    hideCreateFollowUpWODialog: hideCreateFollowUpWODialog,
    createFollowUpWOs: createFollowUpWOs
  }), isCernMode && /*#__PURE__*/React.createElement("iframe", {
    src: edmsLoginServletLink,
    style: {
      width: 0,
      height: 0,
      display: "none"
    }
  })));
};
export default forwardRef(Checklists);