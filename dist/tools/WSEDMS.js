function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import ajax from './ajax';

/**
 * Handles all calls to REST Api
 */
var WSEDMS = /*#__PURE__*/function () {
  function WSEDMS() {
    _classCallCheck(this, WSEDMS);
  }
  return _createClass(WSEDMS, [{
    key: "getEDMSDocuments",
    value:
    //
    //EDMS
    //
    function getEDMSDocuments(objectID, objectType, mode) {
      var config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      objectType = encodeURIComponent(objectType);
      return ajax.get(process.env.REACT_APP_BACKEND.replace('/logbookws/rest', '/cern-eam-services/rest').replace('/eamlightws/rest', '/cern-eam-services/rest') + "/edms/documents?objectid=".concat(objectID, "&objectType=").concat(objectType, "&mode=").concat(mode), config);
    }
  }, {
    key: "createNewDocument",
    value: function createNewDocument(data) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return ajax.post(process.env.REACT_APP_BACKEND.replace('/logbookws/rest', '/cern-eam-services/rest').replace('/eamlightws/rest', '/cern-eam-services/rest') + "/edms/createdocument", data, config);
    }
  }, {
    key: "getNCRProperties",
    value: function getNCRProperties(objectType, objectID) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return ajax.get(process.env.REACT_APP_BACKEND.replace('/logbookws/rest', '/cern-eam-services/rest').replace('/eamlightws/rest', '/cern-eam-services/rest') + "/edms/ncrproperties", config);
    }
  }, {
    key: "getNCRKeyWords",
    value: function getNCRKeyWords(objectID) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return ajax.get(process.env.REACT_APP_BACKEND.replace('/logbookws/rest', '/cern-eam-services/rest').replace('/eamlightws/rest', '/cern-eam-services/rest') + "/edms/ncrkeywords/".concat(objectID), config);
    }
  }, {
    key: "getEquipmentWorkOrders",
    value: function getEquipmentWorkOrders(objectType, objectID) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return ajax.get(process.env.REACT_APP_BACKEND.replace('/logbookws/rest', '/cern-eam-services/rest').replace('/eamlightws/rest', '/cern-eam-services/rest') + "/edms/equipmentwos?objectType=".concat(objectType, "&objectCode=").concat(objectID), config);
    }
  }]);
}();
export default new WSEDMS();