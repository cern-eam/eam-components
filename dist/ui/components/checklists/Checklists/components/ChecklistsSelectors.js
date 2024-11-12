function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { useMemo } from "react";
import EAMSelect from "../../../../components/inputs-ng/EAMSelect";
import GridTools from "../../../../components/grids/GridTools";
var ChecklistsSelectors = function ChecklistsSelectors(_ref) {
  var activities = _ref.activities,
    filteredActivity = _ref.filteredActivity,
    filteredEquipment = _ref.filteredEquipment,
    filteredActivities = _ref.filteredActivities,
    setNewFilter = _ref.setNewFilter;
  var activityCode = useMemo(function () {
    return GridTools.getURLParameterByName("activityCode");
  }, []);
  if (activityCode) return null;
  var equipments = useMemo(function () {
    return activities.reduce(function (prev, activity) {
      Object.keys(activity.equipments).forEach(function (key) {
        return prev[key] = activity.equipments[key];
      });
      return prev;
    }, {});
  }, [activities]);
  var filteredActivityObject = useMemo(function () {
    return activities.find(function (activity) {
      return activity.activityCode === filteredActivity;
    });
  }, [activities, filteredActivity]);
  return /*#__PURE__*/React.createElement("div", null, activities.length > 1 && /*#__PURE__*/React.createElement(EAMSelect, {
    selectOnlyMode: true,
    label: "Activity",
    renderSuggestion: function renderSuggestion(suggestion) {
      return suggestion.desc;
    },
    renderValue: function renderValue(value) {
      return value.desc || value.code;
    },
    options: filteredActivities.filter(function (activity) {
      return filteredEquipment ? activity.equipments[filteredEquipment] !== undefined : true;
    }).map(function (activity) {
      return {
        code: activity.activityCode,
        desc: activity.activityCode + " — " + activity.activityNote
      };
    }),
    value: filteredActivity,
    onChange: function onChange(activity) {
      return setNewFilter({
        activity: {
          code: activity.code
        }
      });
    },
    menuContainerStyle: {
      zIndex: 999
    }
  }), Object.keys(equipments).length > 1 && /*#__PURE__*/React.createElement(EAMSelect, {
    selectOnlyMode: true,
    label: "Equipment",
    options: Object.keys(equipments).filter(function (key) {
      return filteredActivity ? filteredActivityObject.equipments[key] !== undefined : true;
    }).map(function (key) {
      return equipments[key];
    }).map(function (equipment) {
      return _objectSpread({}, equipment, {
        desc: equipment.code + " — " + equipment.desc
      });
    }),
    value: filteredEquipment ? filteredEquipment : undefined,
    onChange: function onChange(equipment) {
      return setNewFilter({
        equipmentCode: equipment.code
      });
    },
    menuContainerStyle: {
      zIndex: 999
    }
  }));
};
export default ChecklistsSelectors;