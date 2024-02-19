function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import axios from 'axios';
import ErrorTypes from "./GridErrorTypes";

/*
 * Default timeout is 20s.
 * This can be overidden with the config object
 */
var DEFAULT_TIMEOUT = 20000;
var AjaxGrid = /*#__PURE__*/function () {
  function AjaxGrid() {
    _classCallCheck(this, AjaxGrid);
  }
  _createClass(AjaxGrid, [{
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
        return {
          type: ErrorTypes.NETWORK_ERROR
        };
      }
    }
  }]);
  return AjaxGrid;
}();
export default new AjaxGrid();