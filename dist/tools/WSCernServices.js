function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// @flow
import ajax from './ajax';
var baseUrl = '/apis/cern-eam-services/rest';
var clientIdExchange = 'cern-eam-services';
var WSCernServices = /*#__PURE__*/function () {
  function WSCernServices() {
    _classCallCheck(this, WSCernServices);
  }
  return _createClass(WSCernServices, [{
    key: "_get",
    value:
    //
    //
    //
    function _get(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return ajax.get(baseUrl + url, _objectSpread({}, config, {
        clientIdExchange: clientIdExchange
      }));
    }
  }, {
    key: "_post",
    value: function _post(url, data) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return ajax.post(baseUrl + url, data, _objectSpread({}, config, {
        clientIdExchange: clientIdExchange
      }));
    }
  }, {
    key: "_put",
    value: function _put(url, data) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return ajax.put(baseUrl + url, data, _objectSpread({}, config, {
        clientIdExchange: clientIdExchange
      }));
    }
  }, {
    key: "_delete",
    value: function _delete(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return ajax["delete"](baseUrl + url, _objectSpread({}, config, {
        clientIdExchange: clientIdExchange
      }));
    }
  }]);
}();
export default new WSCernServices();