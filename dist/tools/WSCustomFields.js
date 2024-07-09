function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import WS from './WS';

/**
 * Handles all calls to REST Api
 */
var WSCustomFields = /*#__PURE__*/function () {
  function WSCustomFields() {
    _classCallCheck(this, WSCustomFields);
    this.autocompleteCustomFieldRENT = function (entityCode, rentCodeValue, cfcode, filter) {
      var config = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      console.log('kura', entityCode, rentCodeValue, cfcode);
      return WS._get("/customfields/autocomplete/".concat(entityCode, "/").concat(rentCodeValue, "/").concat(cfcode, "/").concat(filter), config);
    };
  }
  return _createClass(WSCustomFields, [{
    key: "getCustomFieldsLookupValues",
    value:
    //
    //CUSTOM FIELDS SUPPORT
    //

    function getCustomFieldsLookupValues(entity, inforClass) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return WS._get('/customfields/lookupvalues?entity=' + entity + '&inforClass=' + inforClass, config);
    }
  }, {
    key: "getCustomFields",
    value: function getCustomFields(entity, classCode) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return WS._get("/customfields/data?entity=".concat(entity, "&inforClass=").concat(classCode ? encodeURIComponent(classCode) : ""), config);
    }
  }]);
}();
export default new WSCustomFields();