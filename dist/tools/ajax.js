function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import axios from 'axios';
import ErrorTypes from "../enums/ErrorTypes";

/*
 * Default timeout is 20s.
 * This can be overidden with the config object
 */
var DEFAULT_TIMEOUT = 40000;
var Ajax = /*#__PURE__*/function () {
  function Ajax() {
    _classCallCheck(this, Ajax);
  }
  return _createClass(Ajax, [{
    key: "get",
    value:
    /**
     * Make a HTTP GET request
     */
    function get(url) {
      var _this = this;
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return axios.get(url, _objectSpread({
        timeout: DEFAULT_TIMEOUT
      }, config)).then(function (response) {
        return _this._convertResponse(response);
      })["catch"](function (error) {
        throw _this._convertError(error);
      });
    }

    /**
     * Make a HTTP POST request
     */
  }, {
    key: "post",
    value: function post(url, data) {
      var _this2 = this;
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return axios.post(url, data, config).then(function (response) {
        return _this2._convertResponse(response);
      })["catch"](function (error) {
        throw _this2._convertError(error);
      });
    }

    /**
     * Make a HTTP PUT request
     */
  }, {
    key: "put",
    value: function put(url, data) {
      var _this3 = this;
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return axios.put(url, data, config).then(function (response) {
        return _this3._convertResponse(response);
      })["catch"](function (error) {
        throw _this3._convertError(error);
      });
    }

    /**
     * Make a HTTP DELETE request
     */
  }, {
    key: "delete",
    value: function _delete(url) {
      var _this4 = this;
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return axios["delete"](url, config).then(function (response) {
        return _this4._convertResponse(response);
      })["catch"](function (error) {
        throw _this4._convertError(error);
      });
    }

    /**
     * Convert Axios Response to our standard format
     * @param response
     * @returns {{status, body}}
     * @private
     */
  }, {
    key: "_convertResponse",
    value: function _convertResponse(response) {
      return {
        status: response.status,
        body: response.data
      };
    }

    /**
     * Convert Axios error to our standard format
     * @param error
     * @returns {{status: number, body: T}}
     * @private
     */
  }, {
    key: "_convertError",
    value: function _convertError(error) {
      if (axios.isCancel(error)) {
        return {
          type: ErrorTypes.REQUEST_CANCELLED
        };
      }
      if (error.response) {
        return {
          type: ErrorTypes.SERVER_ERROR,
          response: {
            status: error.response.status,
            body: error.response.data
          }
        };
      } else if (error.code === 'ECONNABORTED') {
        return {
          type: ErrorTypes.CONNECTION_ABORDED
        };
      } else {
        // Because we are behind IT-DB proxy this will be only reached when a redirect was sent (i.e. SSO session has expired)
        // TODO: should be carefully studied
        //window.location.reload(true)
      }
    }
  }, {
    key: "getAxiosInstance",
    value: function getAxiosInstance() {
      return axios;
    }
  }]);
}();
export default new Ajax();