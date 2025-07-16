function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import WS from './WS';
import WSCernServices from './WSCernServices';

/**
 * Handles all calls to REST Api
 */
var WSChecklists = /*#__PURE__*/function () {
  function WSChecklists() {
    _classCallCheck(this, WSChecklists);
    this.autocompleteEntity = function (entityType, entityClass, filter) {
      var config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return WS._get("/autocomplete/entity?s=".concat(filter, "&entityType=").concat(entityType, "&entityClass=").concat(entityClass), config);
    };
    this.getTaskPlanInstructions = function (code, revision) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return WSCernServices._get("/taskplan/".concat(code, "/").concat(revision, "/instructions"), config);
    };
  }
  return _createClass(WSChecklists, [{
    key: "getWorkOrderActivities",
    value: function getWorkOrderActivities(number) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        timeout: 60000
      };
      return WS._get('/activities/read/?workorder=' + number, config);
    }
    //
    //CHECKLIST
    //
  }, {
    key: "updateChecklistItem",
    value: function updateChecklistItem(checklistItem, taskPlanCode) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return WS._put("/checklists?taskPlanCode=".concat(encodeURIComponent(taskPlanCode)), checklistItem, config);
    }
  }, {
    key: "createFolowUpWorkOrders",
    value: function createFolowUpWorkOrders(activity) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return WS._post('/checklists/workorders', activity, config);
    }
  }, {
    key: "esignChecklist",
    value: function esignChecklist(checklistSignature) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return WS._put('/checklists/esign', checklistSignature);
    }
  }, {
    key: "getChecklistDefinition",
    value: function getChecklistDefinition(taskCode, checklistDefinitionCode) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return WS._get("/checklists/definition/".concat(taskCode, "/").concat(checklistDefinitionCode), config);
    }
  }]);
}();
export default new WSChecklists();