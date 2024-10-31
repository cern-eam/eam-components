function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import MuiExpansionPanel from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import WSChecklists from '../../../tools/WSChecklists';
import ChecklistEquipment from "./ChecklistEquipment";
import ChecklistItem from './ChecklistItem';
import ChecklistSignature from './ChecklistSignature';
import BlockUi from 'react-block-ui';
import EAMSelect from '../inputs-ng/EAMSelect';
import SimpleEmptyState from '../../components/emptystates/SimpleEmptyState';
import withStyles from '@mui/styles/withStyles';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Collapse from '@mui/material/Collapse';
import GridTools from '../grids/GridTools';
import DocumentsInstructionsDialog from './dialogs/DocumentsInstructionsDialog';
import { isCernMode } from '../../../tools/CERNMode';
var SIGNATURE_TYPES = {
  PERFORMER_1: 'PB01',
  PERFORMER_2: 'PB02',
  REVIEWER: 'RB01'
};
var SIGNATURE_ORDER = _defineProperty(_defineProperty(_defineProperty({}, SIGNATURE_TYPES.PERFORMER_1, 1), SIGNATURE_TYPES.PERFORMER_2, 2), SIGNATURE_TYPES.REVIEWER, 3);
var ActivityExpansionPanel = withStyles({
  root: {
    backgroundColor: '#fafafa',
    marginTop: '10px',
    outline: '1px solid #e0e0e0',
    borderRadius: '5px',
    boxShadow: 'none',
    '&:last-child:not(:only-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiExpansionPanel);
var EquipmentExpansionPanel = withStyles({
  root: {
    boxShadow: 'none',
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiExpansionPanel);
function getExpandedActivities(activities) {
  var makeEquipmentsFromActivity = function makeEquipmentsFromActivity(activity) {
    return activity.checklists.reduce(function (equipments, checklist) {
      if (equipments[checklist.equipmentCode] === undefined) {
        equipments[checklist.equipmentCode] = {
          code: checklist.equipmentCode,
          desc: checklist.equipmentDesc,
          collapse: function collapse() {
            this.collapsed = true;
          },
          collapsed: false
        };
      }
      return equipments;
    }, {});
  };
  return activities.map(function (activity, index) {
    return _objectSpread({}, activity, {
      index: index,
      equipments: makeEquipmentsFromActivity(activity),
      collapse: function collapse() {
        this.collapsed = true;
      },
      collapsed: false
    });
  });
}

// External updates on the activities will not be reflected in this component
// For instance, if the description of an activity is changed
// in "Activities and Booked Labor", it will not be reflected here
var Checklists = /*#__PURE__*/function (_Component) {
  function Checklists(props) {
    var _this;
    _classCallCheck(this, Checklists);
    _this = _callSuper(this, Checklists, [props]);
    _this.collapse = function (checklists, activities) {
      var maxExpandedChecklistItems = _this.props.maxExpandedChecklistItems;
      var defaultCollapse = function defaultCollapse(checklists, activities) {
        // if there are less than this.props.maxExpandedChecklistItems checklists, do not collapse anything
        if (checklists.length < maxExpandedChecklistItems) return;

        // otherwise, collapse every activity and every equipment within each activity
        activities.forEach(function (activity) {
          if (!activity.forceActivityExpansion) {
            activity.collapse();
            Object.values(activity.equipments).forEach(function (equipment) {
              return equipment.collapse();
            });
          }
        });
      };
      var functionToRun = typeof _this.props.collapseHeuristic === "function" ? _this.props.collapseHeuristic : defaultCollapse;
      var filteredChecklists = checklists.filter(function (_ref) {
        var checkListCode = _ref.checkListCode;
        return !_this.state.checklistsHidden[checkListCode];
      });
      functionToRun(filteredChecklists, activities);
    };
    _this.expansionDetailsStyle = {
      marginRight: -24,
      marginLeft: -24,
      marginTop: -8,
      marginBottom: -24
    };
    _this.resetSignatures = function (activityCode) {
      var types = ["PB01", "PB02", "RB01"];
      types.forEach(function (type) {
        return _this.setSignature(activityCode, type, null, null);
      });
    };
    _this.setSignature = function (activityCode, type, signer, time) {
      _this.setState(function (state) {
        var activities = _toConsumableArray(state.activities);
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
        return {
          activities: activities
        };
      });
    };
    _this.onUpdateChecklistItem = function (checklistItem) {
      if (checklistItem.conditional) {
        _this.readActivities(checklistItem.workOrderCode, false);
      }
      var activityCode = checklistItem.activityCode;
      var checkListCode = checklistItem.checkListCode;
      _this.setState(function (state) {
        var activities = _toConsumableArray(state.activities);
        var activityIndex = activities.findIndex(function (activity) {
          return activity.activityCode === activityCode;
        });
        var activity = _objectSpread({}, activities[activityIndex]);
        activities[activityIndex] = activity;
        var checklists = _toConsumableArray(activity.checklists);
        var checklistIndex = checklists.findIndex(function (checklistItem) {
          return checklistItem.checkListCode === checkListCode;
        });
        checklists[checklistIndex] = _objectSpread({}, checklistItem);
        activity.checklists = checklists;
        return {
          activities: activities
        };
      });
    };
    _this.createFollowUpWOs = function (checklistActivity) {
      _this.hideCreateFollowUpWODialog();
      var activity = {
        workOrderNumber: checklistActivity.workOrderNumber,
        activityCode: checklistActivity.activityCode
      };
      _this.setState({
        blocking: true
      });
      WSChecklists.createFolowUpWorkOrders(activity).then(function (resp) {
        _this.readActivities(activity.workOrderNumber);
        _this.props.showSuccess('Follow-up workorders successfully created.');
      })["catch"](function (error) {
        _this.props.showError('Could not create follow-up workorders.');
      });
    };
    _this.showCreateFollowUpWODialog = function (activity) {
      _this.setState({
        createFollowUpActivity: activity
      });
    };
    _this.hideCreateFollowUpWODialog = function () {
      _this.setState({
        createFollowUpActivity: null
      });
    };
    _this.expandSignature = function (activity, expanded) {
      var signaturesCollapsed = _objectSpread({}, _this.state.signaturesCollapsed);
      signaturesCollapsed[activity.activityCode] = !expanded;
      _this.setState({
        signaturesCollapsed: signaturesCollapsed
      });
    };
    _this.shouldRenderSignature = function (signatures, signature) {
      if (!signature) return false;
      if (signature.signer) return true;
      switch (signature.type) {
        case SIGNATURE_TYPES.PERFORMER_1:
          return signature.viewAsPerformer || signature.viewAsReviewer;
        case SIGNATURE_TYPES.PERFORMER_2:
          if (!signatures[SIGNATURE_TYPES.PERFORMER_1] || signatures[SIGNATURE_TYPES.PERFORMER_1].responsibilityCode !== signature.responsibilityCode) return signature.viewAsPerformer || signature.viewAsReviewer;else return signatures[SIGNATURE_TYPES.PERFORMER_1].signer;
        case SIGNATURE_TYPES.REVIEWER:
          return signature.viewAsReviewer;
      }
      return true;
    };
    _this.toggleFilledFilter = function () {
      _this.setState(function (prevState) {
        return {
          checklistsHidden: Object.keys(prevState.checklistsHidden).length > 0 ? {} : Object.fromEntries(prevState.activities.map(function (activity) {
            return activity.checklists;
          }).flat(1).map(function (_ref2) {
            var checkListCode = _ref2.checkListCode,
              result = _ref2.result,
              finding = _ref2.finding,
              numericValue = _ref2.numericValue,
              freeText = _ref2.freeText,
              date = _ref2.date,
              dateTime = _ref2.dateTime,
              entityCode = _ref2.entityCode;
            return [checkListCode, result || finding || numericValue || date || dateTime || entityCode || freeText];
          }))
        };
      }, function () {
        return Object.keys(_this.state.checklistsHidden).length === 0 && _this.setNewFilter({
          activity: {
            code: _this.state.filteredActivity
          },
          equipment: {
            code: _this.state.filteredEquipment
          }
        });
      });
    };
    _this.toggleShowChecklistOptions = function () {
      _this.setState(function (prevState) {
        return {
          showChecklistOptions: !prevState.showChecklistOptions
        };
      });
    };
    _this.toggleExpandActivities = function () {
      _this.setState(function (prevState) {
        return {
          expandActivities: !prevState.expandActivities,
          activities: prevState.activities.map(function (activity) {
            return _objectSpread({}, activity, {
              collapsed: prevState.expandActivities
            });
          })
        };
      });
    };
    _this.toggleExpandChecklists = function () {
      _this.setState(function (prevState) {
        return {
          expandChecklists: !prevState.expandChecklists,
          activities: prevState.activities.map(function (activity) {
            return _objectSpread({}, activity, {
              equipments: Object.fromEntries(Object.entries(activity.equipments).map(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                  equipmentCode = _ref4[0],
                  equipment = _ref4[1];
                return [equipmentCode, _objectSpread({}, equipment, {
                  collapsed: prevState.expandChecklists
                })];
              }))
            });
          })
        };
      });
    };
    _this.toggleOptions = function () {
      _this.setState(function (prevState) {
        return {
          showChecklistsOptions: !prevState.showChecklistsOptions
        };
      });
    };
    var _activityCode = GridTools.getURLParameterByName('activityCode');
    _this.state = {
      activities: [],
      taskPlanMetadata: [],
      blocking: true,
      createFollowUpActivity: null,
      activityCode: _activityCode,
      filteredActivity: _activityCode,
      filteredEquipment: null,
      signaturesCollapsed: {},
      checklistsHidden: {},
      showChecklistOptions: _this.parseToBoolean(GridTools.getURLParameterByName("showChecklistOptions"), false),
      showFilledItems: _this.parseToBoolean(GridTools.getURLParameterByName("showFilledItems"), true),
      expandChecklists: _this.parseToBoolean(GridTools.getURLParameterByName("expandChecklists"), false),
      expandActivities: _this.parseToBoolean(GridTools.getURLParameterByName("expandActivities"), false)
    };
    return _this;
  }
  _inherits(Checklists, _Component);
  return _createClass(Checklists, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.readActivities(this.props.workorder);
    }
  }, {
    key: "parseToBoolean",
    value: function parseToBoolean(value, defaultValue) {
      return value.length === 0 ? defaultValue : value !== "false";
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.workorder !== nextProps.workorder || this.props.version !== nextProps.version) {
        this.readActivities(nextProps.workorder);
      }
    }
  }, {
    key: "readActivities",
    value: function readActivities(workorder) {
      var _this2 = this;
      var refreshCollapse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var _this$props = this.props,
        getWorkOrderActivities = _this$props.getWorkOrderActivities,
        getTaskPlanInstructions = _this$props.getTaskPlanInstructions,
        activity = _this$props.activity;
      getWorkOrderActivities(workorder).then(function (response) {
        var activities = getExpandedActivities(response.body.data);
        var checklists = activities.reduce(function (checklists, activity) {
          return checklists.concat(activity.checklists);
        }, []);
        var taskCodes = _toConsumableArray(new Set(activities.map(function (activity) {
          return {
            code: activity.taskCode,
            revision: activity.taskRev
          };
        })));
        isCernMode && Promise.all(taskCodes.map(function _callee(taskCode) {
          return _regeneratorRuntime().async(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime().awrap(getTaskPlanInstructions(taskCode.code, taskCode.revision));
              case 2:
                return _context.abrupt("return", _context.sent);
              case 3:
              case "end":
                return _context.stop();
            }
          }, null, null, null, Promise);
        })).then(function (responses) {
          var taskPlansMetadata = responses.reduce(function (acc, response) {
            var data = response.body.data;
            acc[data.taskPlanCode] = data;
            return acc;
          }, {});
          _this2.setState({
            taskPlansMetadata: taskPlansMetadata
          });
        });
        if (refreshCollapse) {
          _this2.collapse(checklists, activities);
        } else {
          activities = activities.map(function (activity, index) {
            return _objectSpread({}, _this2.state.activities[index], {
              checklists: activity.checklists
            });
          });
        }
        _this2.setState(function (prevState) {
          var newState = {
            activities: activities,
            blocking: false
          };
          if (!prevState.showFilledItems) {
            _this2.toggleFilledFilter();
          }
          if (activity) {
            _this2.setNewFilter({
              activity: {
                code: activity
              }
            });
          }
          return newState;
        });
      });
    }
  }, {
    key: "setCollapsedEquipment",
    value: function setCollapsedEquipment(collapsed, activityIndex, equipmentCode) {
      this.setState(function (state, props) {
        var activities = _toConsumableArray(state.activities);
        var activity = _objectSpread({}, activities[activityIndex]);
        var equipments = _objectSpread({}, activity.equipments);
        var equipment = _objectSpread({}, equipments[equipmentCode], {
          collapsed: collapsed
        });
        equipments[equipmentCode] = equipment;
        activity.equipments = equipments;
        activities[activityIndex] = activity;
        return {
          activities: activities
        };
      });
    }
  }, {
    key: "renderChecklistsForEquipment",
    value: function renderChecklistsForEquipment(key, checklists, activity) {
      var _this3 = this;
      var isDisabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var _this$props2 = this.props,
        updateChecklistItem = _this$props2.updateChecklistItem,
        minFindingsDropdown = _this$props2.minFindingsDropdown,
        handleError = _this$props2.handleError,
        getWoLink = _this$props2.getWoLink,
        showError = _this$props2.showError,
        eqpToOtherId = _this$props2.eqpToOtherId;
      var showChecklistOptions = this.state.showChecklistOptions;
      var firstChecklist = checklists[0];
      var equipmentCode = firstChecklist.equipmentCode;
      var collapsed = activity.equipments[equipmentCode].collapsed;
      if (firstChecklist === undefined) {
        console.error("renderChecklistsForEquipment MUST be passed at least 1 checklist");
        return null;
      }
      var equipmentChecklistDesc = "".concat(equipmentCode, " \u2014 ").concat(firstChecklist.equipmentDesc) + (eqpToOtherId?.[equipmentCode] ? " \u2014 ".concat(eqpToOtherId[equipmentCode]) : '');
      return /*#__PURE__*/React.createElement(EquipmentExpansionPanel, {
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
          return _this3.setCollapsedEquipment(!expanded, activity.index, equipmentCode);
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
          key: 'checklistItem$' + checklist.checkListCode,
          updateChecklistItem: updateChecklistItem,
          onUpdateChecklistItem: _this3.onUpdateChecklistItem,
          checklistItem: checklist,
          taskCode: activity.taskCode,
          handleError: handleError,
          showError: showError,
          minFindingsDropdown: minFindingsDropdown,
          getWoLink: getWoLink,
          resetSignatures: _this3.resetSignatures,
          disabled: isDisabled,
          isLastItem: index === checklists.length - 1,
          hideFollowUpProp: _this3.props.hideFollowUpProp,
          showChecklistOptions: showChecklistOptions,
          register: _this3.props.register
        });
      }))));
    }
  }, {
    key: "renderChecklistsForActivity",
    value: function renderChecklistsForActivity(activity, filteredEquipment) {
      var checklistsHidden = this.state.checklistsHidden;
      var originalChecklists = activity.checklists,
        signatures = activity.signatures;
      var isDisabled = this.props.disabled || signatures && signatures[SIGNATURE_TYPES.PERFORMER_1] && !signatures[SIGNATURE_TYPES.PERFORMER_1].viewAsPerformer && signatures[SIGNATURE_TYPES.PERFORMER_2] && !signatures[SIGNATURE_TYPES.PERFORMER_2].viewAsPerformer;
      var checklists = originalChecklists.filter(function (checklist) {
        return !filteredEquipment || checklist.equipmentCode === filteredEquipment;
      }).filter(function (_ref5) {
        var checkListCode = _ref5.checkListCode;
        return !checklistsHidden[checkListCode];
      });
      if (checklists.length === 0) {
        return /*#__PURE__*/React.createElement("p", {
          style: {
            textAlign: 'center'
          }
        }, "All checklists in this activity are hidden.");
      }
      var result = [];

      // this stores the index of the checklists that are related to a different equipment than the one before them
      // this includes the first checklist item since it has no equipment before it
      var equipmentBoundaries = [];
      var equipmentCode;
      checklists.forEach(function (checklist, i) {
        if (equipmentCode === checklist.equipmentCode) return;
        equipmentCode = checklist.equipmentCode;
        equipmentBoundaries.push(i);
      });

      // include the index after the last checklist as a boundary
      // this makes the next section of the code much simpler, since we can loop over pairs of boundaries
      equipmentBoundaries.push(checklists.length);

      // now that we have the equipment boundaries, we can make arrays of checklists
      // for each equipment in the activity, and render a collapsible menu
      for (var i = 1; i < equipmentBoundaries.length; ++i) {
        var start = equipmentBoundaries[i - 1];
        var end = equipmentBoundaries[i];
        var _equipmentCode = checklists[start].equipmentCode;
        result.push(this.renderChecklistsForEquipment(_equipmentCode + start, checklists.slice(start, end), activity, isDisabled));
      }
      return result;
    }
  }, {
    key: "setCollapsedActivity",
    value: function setCollapsedActivity(collapsed, index) {
      var _this4 = this;
      this.setState(function (state, props) {
        var activities = _toConsumableArray(state.activities);
        var activity = _objectSpread({}, activities[index]);
        activity.collapsed = collapsed;
        activities[index] = activity;
        return {
          activities: activities
        };
      }, function () {
        var activity = _this4.state.activities[index];
        var equipmentKeys = Object.keys(activity.equipments);
        if (equipmentKeys.length === 1) {
          // also do the same to the equipment if there's only a single one
          _this4.setCollapsedEquipment(collapsed, activity.index, equipmentKeys[0]);
        }
      });
    }
  }, {
    key: "renderSignatures",
    value: function renderSignatures(activity) {
      var _this5 = this;
      if (!activity.signatures) return;
      return Object.values(activity.signatures).sort(function (signature1, signature2) {
        return SIGNATURE_ORDER[signature1.type] - SIGNATURE_ORDER[signature2.type];
      }).filter(function (signature) {
        return _this5.shouldRenderSignature(activity.signatures, signature);
      }).map(function (signature) {
        return /*#__PURE__*/React.createElement(ChecklistSignature, {
          signature: signature,
          workOrderCode: activity.workOrderNumber,
          activityCode: activity.activityCode,
          showError: _this5.props.showError,
          setSignature: _this5.setSignature,
          disabled: _this5.props.disabled
        });
      });
    }
  }, {
    key: "renderActivities",
    value: function renderActivities(filteredActivity, filteredEquipment) {
      var _this6 = this;
      var _this$state = this.state,
        activities = _this$state.activities,
        taskPlansMetadata = _this$state.taskPlansMetadata;
      return activities.filter(function (activity) {
        return activity.checklists && activity.checklists.length > 0 && !(filteredEquipment && activity.equipments[filteredEquipment] === undefined) && !(filteredActivity && activity.activityCode !== filteredActivity);
      }).map(function (activity) {
        var renderedSignatures = _this6.renderSignatures(activity);
        return /*#__PURE__*/React.createElement(ActivityExpansionPanel, {
          key: activity.activityCode,
          expanded: !activity.collapsed,
          TransitionProps: {
            unmountOnExit: true,
            timeout: 0
          },
          onChange: function onChange(_, expanded) {
            return _this6.setCollapsedActivity(!expanded, activity.index);
          },
          style: {
            marginTop: '10px'
          }
        }, /*#__PURE__*/React.createElement(AccordionSummary, {
          expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null)
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            padding: 0,
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 'bold',
            flexBasis: "66%",
            fontSize: 14,
            color: '#333'
          }
        }, activity.activityCode, " \u2014 ", activity.activityNote || activity.tradeCode), !_this6.props.hideFollowUpProp && activity.checklists.some(function (checklist) {
          return !checklist.hideFollowUp;
        }) && /*#__PURE__*/React.createElement("div", {
          style: {
            flexShrink: 0,
            flexDirection: 'row',
            display: 'flex',
            cursor: 'default'
          },
          onClick: function onClick(e) {
            return e.stopPropagation();
          }
        }, isCernMode && /*#__PURE__*/React.createElement(DocumentsInstructionsDialog, {
          title: activity.taskCode,
          subtitle: activity.activityNote || activity.tradeCode,
          taskPlanMetadata: taskPlansMetadata?.[activity.taskCode]
        }), /*#__PURE__*/React.createElement(Button, {
          key: "".concat(activity.activityCode, "$createfuwo"),
          onClick: function onClick(evt) {
            evt.stopPropagation();
            _this6.showCreateFollowUpWODialog(activity);
          },
          color: "primary",
          variant: "outlined",
          size: "small",
          style: {
            fontSize: '10px',
            marginRight: '8px'
          },
          disabled: _this6.props.disabled || activity.checklists.every(function (checklist) {
            return typeof checklist.followUpWorkOrder === 'string' || checklist.followUp === false;
          })
        }, /*#__PURE__*/React.createElement(AddIcon, {
          style: {
            marginLeft: '-8px'
          }
        }), "Follow-up WO")))), /*#__PURE__*/React.createElement(AccordionDetails, {
          style: {
            marginTop: "-5px",
            padding: "0px"
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: "100%"
          }
        }, _this6.renderChecklistsForActivity(activity, filteredEquipment))), activity.signatures && renderedSignatures.length ? /*#__PURE__*/React.createElement(ActivityExpansionPanel, {
          style: {
            outline: '0px',
            marginTop: '0px'
          },
          expanded: !_this6.state.signaturesCollapsed[activity.activityCode],
          onChange: function onChange(_, expanded) {
            return _this6.expandSignature(activity, expanded);
          }
        }, /*#__PURE__*/React.createElement(AccordionSummary, {
          style: {
            paddingLeft: '10px',
            minHeight: '20px'
          },
          sx: {
            '& .MuiAccordionSummary-content': {
              justifyContent: 'center',
              marginTop: '16px',
              marginBottom: '16px'
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
            minHeight: '50px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: "100%"
          }
        }, renderedSignatures))) : null);
      });
    }
  }, {
    key: "setNewFilter",
    value: function setNewFilter(filters) {
      var _this7 = this;
      var activity = filters.activity,
        equipmentCode = filters.equipmentCode;
      var activityCode = activity?.code;
      this.setState(function (state, props) {
        // the activity and equipment codes that will be effectively used for the filtering
        // if any parameterized filter is unspecified (undefined), the value used is in state
        var effectiveActivityCode = activityCode === undefined ? state.filteredActivity : activityCode;
        var effectiveEquipmentCode = equipmentCode === undefined ? state.filteredEquipment : equipmentCode;
        var activityCollapsedPredicate = function activityCollapsedPredicate(activity, effectiveActivityCode) {};
        var equipmentCollapsedPredicate = function equipmentCollapsedPredicate(equipmentCode, effectiveEquipmentCode) {};
        if (effectiveActivityCode || effectiveEquipmentCode) {
          // if we're filtering, collapse everything that is not equal to our filters
          activityCollapsedPredicate = function activityCollapsedPredicate(activity) {
            return activity.activityCode !== effectiveActivityCode && Object.keys(activity.equipments).every(function (equipmentCode2) {
              return equipmentCode2 !== effectiveEquipmentCode;
            });
          };
          equipmentCollapsedPredicate = function equipmentCollapsedPredicate(equipmentCode) {
            return effectiveEquipmentCode && equipmentCode !== effectiveEquipmentCode;
          };
        } else {
          // if nothing is being filter, uncollapse everything,
          // to prepare for calling the collapse heuristic
          activityCollapsedPredicate = function activityCollapsedPredicate() {
            return false;
          };
          equipmentCollapsedPredicate = function equipmentCollapsedPredicate() {
            return false;
          };
        }
        var newState = {
          activities: state.activities.map(function (activity) {
            return _objectSpread({}, activity, {
              collapsed: activityCollapsedPredicate(activity),
              equipments: Object.keys(activity.equipments).reduce(function (equipments, thisEquipmentCode) {
                equipments[thisEquipmentCode] = _objectSpread({}, activity.equipments[thisEquipmentCode], {
                  collapsed: equipmentCollapsedPredicate(thisEquipmentCode)
                });
                return equipments;
              }, {})
            });
          }),
          filteredActivity: effectiveActivityCode,
          filteredEquipment: effectiveEquipmentCode
        };
        if (!effectiveActivityCode && !effectiveEquipmentCode) {
          var checklists = newState.activities.reduce(function (checklists, activity) {
            return checklists.concat(activity.checklists);
          }, []);
          _this7.collapse(checklists, newState.activities);
        }
        return newState;
      });
    }
  }, {
    key: "render",
    value:
    /**s
     * Render the main checklists panel (only when there is at least one activity with checklist)
     *
     * @returns {*}
     */
    function render() {
      var _this8 = this;
      var _this$state2 = this.state,
        activities = _this$state2.activities,
        activityCode = _this$state2.activityCode,
        filteredActivity = _this$state2.filteredActivity,
        filteredEquipment = _this$state2.filteredEquipment,
        blocking = _this$state2.blocking;

      // makes a global equipments array, with all the different equipments from all activities
      var equipments = activities.reduce(function (prev, activity) {
        Object.keys(activity.equipments).forEach(function (key) {
          return prev[key] = activity.equipments[key];
        });
        return prev;
      }, {});
      var filteredActivities = activities.filter(function (activity) {
        return activity.checklists && activity.checklists.length > 0;
      });
      var filteredActivityObject = activities.find(function (activity) {
        return activity.activityCode === filteredActivity;
      });
      var divStyle = {
        width: "100%"
      };
      if (this.props.readonly) {
        divStyle.pointerEvents = 'none';
      }
      var isEmptyState = filteredActivities.length === 0;
      var activity = this.state.createFollowUpActivity;
      var dialog = activity && /*#__PURE__*/React.createElement(Paper, {
        elevation: 3,
        style: {
          padding: '30px',
          textAlign: 'center'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '25px',
          marginBottom: '15px'
        }
      }, "Create follow-up work orders?"), /*#__PURE__*/React.createElement("p", null, "Activity ", activity.activityCode, " \u2014 ", activity.activityNote), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
        type: "submit",
        onClick: this.hideCreateFollowUpWODialog
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick() {
          return _this8.createFollowUpWOs(_this8.state.createFollowUpActivity);
        },
        color: "primary"
      }, "Confirm")));
      return !blocking && isEmptyState ? /*#__PURE__*/React.createElement(SimpleEmptyState, {
        message: "No Checklists to show."
      }) : /*#__PURE__*/React.createElement("div", {
        style: divStyle
      }, /*#__PURE__*/React.createElement(BlockUi, {
        blocking: blocking
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: '20px',
          justifyContent: 'flex-end'
        }
      }, /*#__PURE__*/React.createElement(Collapse, {
        "in": this.props.expandChecklistsOptions
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          flexWrap: 'wrap',
          paddingRight: 8
        }
      }, !blocking && /*#__PURE__*/React.createElement(FormControlLabel, {
        control: /*#__PURE__*/React.createElement(Checkbox, {
          color: "primary",
          checked: this.state.expandActivities
        }),
        label: 'Expand Activities',
        labelPlacement: "start",
        onMouseDown: this.toggleExpandActivities,
        onTouchStart: this.toggleExpandActivities
      }), !blocking && /*#__PURE__*/React.createElement(FormControlLabel, {
        control: /*#__PURE__*/React.createElement(Checkbox, {
          color: "primary",
          checked: this.state.expandChecklists
        }),
        label: 'Expand Checklists',
        labelPlacement: "start",
        onMouseDown: this.toggleExpandChecklists,
        onTouchStart: this.toggleExpandChecklists
      }), !blocking && /*#__PURE__*/React.createElement(FormControlLabel, {
        control: /*#__PURE__*/React.createElement(Checkbox, {
          color: "primary",
          checked: this.state.showChecklistOptions
        }),
        label: 'Show Checklist Options',
        labelPlacement: "start",
        onMouseDown: this.toggleShowChecklistOptions,
        onTouchStart: this.toggleShowChecklistOptions
      }), !blocking && /*#__PURE__*/React.createElement(FormControlLabel, {
        control: /*#__PURE__*/React.createElement(Checkbox, {
          color: "primary",
          checked: Object.keys(this.state.checklistsHidden).length == 0
        }),
        label: 'Show filled items',
        labelPlacement: "start",
        onMouseDown: this.toggleFilledFilter,
        onTouchStart: this.toggleFilledFilter
      })))), !activityCode && /*#__PURE__*/React.createElement("div", null, activities.length > 1 && /*#__PURE__*/React.createElement(EAMSelect, {
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
          return _this8.setNewFilter({
            activity: {
              code: activity.code
            }
          });
        },
        menuContainerStyle: {
          'zIndex': 999
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
          return _this8.setNewFilter({
            equipmentCode: equipment.code
          });
        },
        menuContainerStyle: {
          'zIndex': 999
        }
      })), this.renderActivities(filteredActivity, filteredEquipment), this.props.bottomSlot), /*#__PURE__*/React.createElement(Dialog, {
        open: this.state.createFollowUpActivity !== null
      }, dialog), isCernMode && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("iframe", {
        src: this.props.edmsLoginServletLink,
        style: {
          width: 0,
          height: 0,
          display: 'none'
        }
      })));
    }
  }]);
}(Component);
Checklists.defaultProps = {
  getWorkOrderActivities: WSChecklists.getWorkOrderActivities,
  updateChecklistItem: WSChecklists.updateChecklistItem,
  getTaskPlanInstructions: WSChecklists.getTaskPlanInstructions,
  readonly: false,
  minFindingsDropdown: 3,
  maxExpandedChecklistItems: 50
};
export default Checklists;