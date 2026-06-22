function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _awaitAsyncGenerator(e) { return new _OverloadYield(e, 0); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import GridTools from "../../../../components/grids/GridTools";
import { SIGNATURE_ORDER, SIGNATURE_TYPES } from "../constants/signatures";
export var parseToBoolean = function parseToBoolean(value, defaultValue) {
  return value.length === 0 ? defaultValue : value !== "false";
};
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
export var getExpandedActivities = function getExpandedActivities(activities) {
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
};
export var getActivityCodeUrlParam = function getActivityCodeUrlParam() {
  return GridTools.getURLParameterByName("activityCode");
};
export var getShowChecklistOptsUrlParam = function getShowChecklistOptsUrlParam() {
  return GridTools.getURLParameterByName("showChecklistOptions");
};
export var getShowFilledItemsUrlParam = function getShowFilledItemsUrlParam() {
  return GridTools.getURLParameterByName("showFilledItems");
};
export var getExpandActivitiesUrlParam = function getExpandActivitiesUrlParam() {
  return GridTools.getURLParameterByName("expandActivities");
};
export var getExpandChecklistsUrlParam = function getExpandChecklistsUrlParam() {
  return GridTools.getURLParameterByName("expandChecklists");
};
export var filterActivitiesWithChecklists = function filterActivitiesWithChecklists(activities) {
  return activities.filter(function (activity) {
    return activity.checklists.length > 0;
  });
};
export var getFilteredActivities = function getFilteredActivities(activities, filteredEquipment, filteredActivity) {
  return activities.filter(function (activity) {
    return activity.checklists && activity.checklists.length > 0 && !(filteredEquipment && activity.equipments[filteredEquipment] === undefined) && !(filteredActivity && activity.activityCode !== filteredActivity);
  });
};
export var getNewFilteredActivities = function getNewFilteredActivities(activities, effectiveActivityCode, effectiveEquipmentCode) {
  if (effectiveActivityCode || effectiveEquipmentCode) {
    // if we're filtering, collapse everything that is not equal to our filters
    return activities.map(function (activity) {
      return _objectSpread({}, activity, {
        collapsed: activity.activityCode !== effectiveActivityCode && Object.keys(activity.equipments).every(function (equipmentCode2) {
          return equipmentCode2 !== effectiveEquipmentCode;
        }),
        equipments: Object.keys(activity.equipments).reduce(function (equipments, thisEquipmentCode) {
          equipments[thisEquipmentCode] = _objectSpread({}, activity.equipments[thisEquipmentCode], {
            collapsed: effectiveEquipmentCode && thisEquipmentCode !== effectiveEquipmentCode
          });
          return equipments;
        }, {})
      });
    });
  }
  // if nothing is being filter, uncollapse everything,
  // to prepare for calling the collapse heuristic
  return activities.map(function (activity) {
    return _objectSpread({}, activity, {
      collapsed: false,
      equipments: Object.keys(activity.equipments).reduce(function (equipments, thisEquipmentCode) {
        equipments[thisEquipmentCode] = _objectSpread({}, activity.equipments[thisEquipmentCode], {
          collapsed: false
        });
        return equipments;
      }, {})
    });
  });
};
export var getEffectiveActivityCode = function getEffectiveActivityCode(filteredActivity, activityCode) {
  return activityCode === undefined ? filteredActivity : activityCode;
};
export var getEffectiveEquipmentCode = function getEffectiveEquipmentCode(filteredEquipment, equipmentCode) {
  return equipmentCode === undefined ? filteredEquipment : equipmentCode;
};
export var concatActivityChecklistsToChecklists = function concatActivityChecklistsToChecklists(activities) {
  return activities.reduce(function (checklists, activity) {
    return checklists.concat(activity.checklists);
  }, []);
};
export var getCollapseFunction = function getCollapseFunction(collapseHeuristic, maxExpandedChecklistItems) {
  if (typeof collapseHeuristic === "function") return collapseHeuristic;
  return function (checklists, activities) {
    // if there are less than maxExpandedChecklistItems checklists, do not collapse anything
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
};
export var getFilledFilterChecklistsHidden = function getFilledFilterChecklistsHidden(checklistsHidden, activities) {
  if (Object.keys(checklistsHidden).length > 0) return {};
  return Object.fromEntries(activities.map(function (activity) {
    return activity.checklists;
  }).flat(1).map(function (_ref) {
    var checkListCode = _ref.checkListCode,
      result = _ref.result,
      finding = _ref.finding,
      numericValue = _ref.numericValue,
      freeText = _ref.freeText,
      date = _ref.date,
      dateTime = _ref.dateTime,
      entityCode = _ref.entityCode;
    return [checkListCode, result || finding || numericValue || date || dateTime || entityCode || freeText];
  }));
};
export var getUpdatedChecklistsActivities = function getUpdatedChecklistsActivities(activities, checklistItem) {
  var activityCode = checklistItem.activityCode;
  var checkListCode = checklistItem.checkListCode;
  var newActivities = _toConsumableArray(activities);
  var activityIndex = newActivities.findIndex(function (activity) {
    return activity.activityCode === activityCode;
  });
  var activity = _objectSpread({}, newActivities[activityIndex]);
  newActivities[activityIndex] = activity;
  var checklists = _toConsumableArray(activity.checklists);
  var checklistIndex = checklists.findIndex(function (checklistItem) {
    return checklistItem.checkListCode === checkListCode;
  });
  checklists[checklistIndex] = _objectSpread({}, checklistItem);
  activity.checklists = checklists;
  return newActivities;
};
export var getChecklistsEquipmentDisabled = function getChecklistsEquipmentDisabled(disabled, signatures) {
  return disabled || signatures && signatures[SIGNATURE_TYPES.PERFORMER_1] && !signatures[SIGNATURE_TYPES.PERFORMER_1].viewAsPerformer && signatures[SIGNATURE_TYPES.PERFORMER_2] && !signatures[SIGNATURE_TYPES.PERFORMER_2].viewAsPerformer;
};
export var getTaskPlansMetadata = function getTaskPlansMetadata(expActivities, getTaskPlanInstructions) {
  var taskCodes = _toConsumableArray(new Set(expActivities.map(function (activity) {
    return {
      code: activity.taskCode,
      revision: activity.taskRev
    };
  })));
  return Promise.all(taskCodes.map(function _callee(taskCode) {
    return _regeneratorAsync(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return _awaitAsyncGenerator(getTaskPlanInstructions(taskCode.code, taskCode.revision));
        case 1:
          return _context.a(2, _context.v);
      }
    }, null, null, null, Promise);
  })).then(function (responses) {
    return responses.reduce(function (acc, response) {
      var data = response.body.data;
      acc[data.taskPlanCode] = data;
      return acc;
    }, {});
  });
};
export var getSignatures = function getSignatures(signatures) {
  return Object.values(signatures).sort(function (signature1, signature2) {
    return SIGNATURE_ORDER[signature1.type] - SIGNATURE_ORDER[signature2.type];
  }).filter(function (signature) {
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
  });
};