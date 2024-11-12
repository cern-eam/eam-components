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
import React, { useCallback, useContext, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ChecklistsContext from "../../../../components/checklists/Checklists/contexts/ChecklistsContext";
import GridTools from "../../../../components/grids/GridTools";
import { parseToBoolean } from "../utils/index";
var ChecklistsOptions = function ChecklistsOptions(_ref) {
  var blocking = _ref.blocking,
    showChecklistOptions = _ref.showChecklistOptions,
    setShowChecklistOptions = _ref.setShowChecklistOptions,
    toggleFilledFilter = _ref.toggleFilledFilter;
  var _useState = useState(parseToBoolean(GridTools.getURLParameterByName("expandActivities"), false)),
    _useState2 = _slicedToArray(_useState, 2),
    expandActivities = _useState2[0],
    setExpandActivities = _useState2[1];
  var _useState3 = useState(parseToBoolean(GridTools.getURLParameterByName("expandChecklists"), false)),
    _useState4 = _slicedToArray(_useState3, 2),
    expandChecklists = _useState4[0],
    setExpandChecklists = _useState4[1];
  var _useContext = useContext(ChecklistsContext),
    setActivities = _useContext.setActivities,
    checklistsHidden = _useContext.checklistsHidden;
  var toggleExpandActivities = useCallback(function () {
    setExpandActivities(function (prev) {
      return !prev;
    });
    setActivities(function (prev) {
      return prev.map(function (activity) {
        return _objectSpread({}, activity, {
          collapsed: expandActivities
        });
      });
    });
  }, [expandActivities]);
  var toggleExpandChecklists = useCallback(function () {
    setExpandChecklists(function (prev) {
      return !prev;
    });
    setActivities(function (prev) {
      return prev.map(function (activity) {
        return _objectSpread({}, activity, {
          equipments: Object.fromEntries(Object.entries(activity.equipments).map(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
              equipmentCode = _ref3[0],
              equipment = _ref3[1];
            return [equipmentCode, _objectSpread({}, equipment, {
              collapsed: expandChecklists
            })];
          }))
        });
      });
    });
  }, [expandChecklists]);
  var toggleShowChecklistOptions = useCallback(function () {
    setShowChecklistOptions(function (prev) {
      return !prev;
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      flexWrap: "wrap",
      paddingRight: 8
    }
  }, !blocking && /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      color: "primary",
      checked: expandActivities
    }),
    label: "Expand Activities",
    labelPlacement: "start",
    onMouseDown: toggleExpandActivities,
    onTouchStart: toggleExpandActivities
  }), !blocking && /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      color: "primary",
      checked: expandChecklists
    }),
    label: "Expand Checklists",
    labelPlacement: "start",
    onMouseDown: toggleExpandChecklists,
    onTouchStart: toggleExpandChecklists
  }), !blocking && /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      color: "primary",
      checked: showChecklistOptions
    }),
    label: "Show Checklist Options",
    labelPlacement: "start",
    onMouseDown: toggleShowChecklistOptions,
    onTouchStart: toggleShowChecklistOptions
  }), !blocking && /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      color: "primary",
      checked: Object.keys(checklistsHidden).length == 0
    }),
    label: "Show filled items",
    labelPlacement: "start",
    onMouseDown: toggleFilledFilter,
    onTouchStart: toggleFilledFilter
  }));
};
export default ChecklistsOptions;