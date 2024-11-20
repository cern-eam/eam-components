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
import React, { useCallback, useContext, useMemo, useState } from "react";
import ChecklistsActivityExpansionPanel from "./ChecklistsActivityExpansionPanel";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import ChecklistSignature from "../../../../ChecklistSignature";
import ChecklistsContext from "../../../contexts/ChecklistsContext";
import { getSignatures } from "../../../utils";
var ChecklistsSignature = function ChecklistsSignature(_ref) {
  var activity = _ref.activity,
    setSignature = _ref.setSignature;
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    signaturesCollapsed = _useState2[0],
    setSignaturesCollapsed = _useState2[1];
  var _useContext = useContext(ChecklistsContext),
    showError = _useContext.showError,
    disabled = _useContext.disabled;
  var signatures = useMemo(function () {
    if (!activity?.signatures) return;
    return getSignatures(activity.signatures);
  }, [activity?.signatures]);
  var expandSignature = useCallback(function (activity, expanded) {
    setSignaturesCollapsed(function (prev) {
      var signaturesCollapsed = _objectSpread({}, prev);
      signaturesCollapsed[activity.activityCode] = !expanded;
      return signaturesCollapsed;
    });
  }, []);
  if (!activity.signatures || !signatures?.length) {
    return null;
  }
  return /*#__PURE__*/React.createElement(ChecklistsActivityExpansionPanel, {
    style: {
      outline: "0px",
      marginTop: "0px"
    },
    expanded: !signaturesCollapsed[activity.activityCode],
    onChange: function onChange(_, expanded) {
      return expandSignature(activity, expanded);
    }
  }, /*#__PURE__*/React.createElement(AccordionSummary, {
    style: {
      paddingLeft: "10px",
      minHeight: "20px"
    },
    sx: {
      "& .MuiAccordionSummary-content": {
        justifyContent: "center",
        marginTop: "16px",
        marginBottom: "16px"
      }
    },
    expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "E-SIGNATURES")), /*#__PURE__*/React.createElement(AccordionDetails, {
    style: {
      margin: 0,
      padding: 0,
      minHeight: "50px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%"
    }
  }, signatures.map(function (signature) {
    return /*#__PURE__*/React.createElement(ChecklistSignature, {
      signature: signature,
      workOrderCode: activity.workOrderNumber,
      activityCode: activity.activityCode,
      showError: showError,
      setSignature: setSignature,
      disabled: disabled
    });
  }))));
};
export default ChecklistsSignature;