function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

  _createClass(Ajax, [{
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
      } else {// Because we are behind IT-DB proxy this will be only reached when a redirect was sent (i.e. SSO session has expired)
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

  return Ajax;
}();

export default new Ajax();