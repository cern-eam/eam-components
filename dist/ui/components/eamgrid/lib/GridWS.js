"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AjaxGrid = _interopRequireDefault(require("./AjaxGrid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Handles all calls to REST Api
 */
var GridWS = /*#__PURE__*/function () {
  function GridWS() {
    _classCallCheck(this, GridWS);
  }

  _createClass(GridWS, [{
    key: "getGridData",
    // Methods used in grid
    value: function getGridData(gridRequest) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this._post('/grids/data/', gridRequest, config);
    }
  }, {
    key: "exportDataToCSV",
    value: function exportDataToCSV(gridRequest) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this._post('/grids/export/', gridRequest, config);
    }
  }, {
    key: "_get",
    value: function _get(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _AjaxGrid["default"].get(process.env.REACT_APP_BACKEND + url, config);
    }
  }, {
    key: "_post",
    value: function _post(url, data) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _AjaxGrid["default"].post(process.env.REACT_APP_BACKEND + url, data, config);
    }
  }, {
    key: "_put",
    value: function _put(url, data) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _AjaxGrid["default"].put(process.env.REACT_APP_BACKEND + url, data, config);
    }
  }, {
    key: "_delete",
    value: function _delete(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _AjaxGrid["default"]["delete"](process.env.REACT_APP_BACKEND + url, config);
    }
  }]);

  return GridWS;
}();

var _default = new GridWS();

exports["default"] = _default;