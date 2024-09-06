function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// @flow
import ajax from './ajax';
var baseUrl = '/apis/cern-eam-services/rest';
var clientIdExchange = 'cern-eam-services';
var WSCernServices = /*#__PURE__*/function () {
  function WSCernServices() {
    _classCallCheck(this, WSCernServices);
  }
  _createClass(WSCernServices, [{
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
  return WSCernServices;
}();
export default new WSCernServices();