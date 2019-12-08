'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _GridErrorTypes = require('./GridErrorTypes');

var _GridErrorTypes2 = _interopRequireDefault(_GridErrorTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Default timeout is 20s.
 * This can be overidden with the config object
 */
var DEFAULT_TIMEOUT = 20000;

var AjaxGrid = function () {
  function AjaxGrid() {
    _classCallCheck(this, AjaxGrid);
  }

  _createClass(AjaxGrid, [{
    key: 'get',


    /**
     * Make a HTTP GET request
     */
    value: function get(url) {
      var _this = this;

      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return _axios2.default.get(url, _extends({ timeout: DEFAULT_TIMEOUT }, config)).then(function (response) {
        return _this._convertResponse(response);
      }).catch(function (error) {
        throw _this._convertError(error);
      });
    }

    /**
     * Make a HTTP POST request
     */

  }, {
    key: 'post',
    value: function post(url, data) {
      var _this2 = this;

      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return _axios2.default.post(url, data, config).then(function (response) {
        return _this2._convertResponse(response);
      }).catch(function (error) {
        throw _this2._convertError(error);
      });
    }

    /**
     * Make a HTTP PUT request
     */

  }, {
    key: 'put',
    value: function put(url, data) {
      var _this3 = this;

      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return _axios2.default.put(url, data, config).then(function (response) {
        return _this3._convertResponse(response);
      }).catch(function (error) {
        throw _this3._convertError(error);
      });
    }

    /**
     * Make a HTTP DELETE request
     */

  }, {
    key: 'delete',
    value: function _delete(url) {
      var _this4 = this;

      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return _axios2.default.delete(url, config).then(function (response) {
        return _this4._convertResponse(response);
      }).catch(function (error) {
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
    key: '_convertResponse',
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
    key: '_convertError',
    value: function _convertError(error) {
      if (_axios2.default.isCancel(error)) {
        return {
          type: _GridErrorTypes2.default.REQUEST_CANCELLED
        };
      }

      if (error.response) {
        return {
          type: _GridErrorTypes2.default.SERVER_ERROR,
          response: {
            status: error.response.status,
            body: error.response.data
          }
        };
      } else if (error.code === 'ECONNABORTED') {
        return {
          type: _GridErrorTypes2.default.CONNECTION_ABORDED
        };
      } else {
        return {
          type: _GridErrorTypes2.default.NETWORK_ERROR
        };
      }
    }
  }]);

  return AjaxGrid;
}();

exports.default = new AjaxGrid();