function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// @flow
import ajax from "./AjaxGrid";

/**
 * Handles all calls to REST Api
 */
var GridWS = /*#__PURE__*/function () {
  function GridWS() {
    _classCallCheck(this, GridWS);
  }
  _createClass(GridWS, [{
    key: "getGridData",
    value:
    // Methods used in grid

    function getGridData(gridRequest) {
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
      return ajax.get(process.env.REACT_APP_BACKEND + url, config);
    }
  }, {
    key: "_post",
    value: function _post(url, data) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return ajax.post(process.env.REACT_APP_BACKEND + url, data, config);
    }
  }, {
    key: "_put",
    value: function _put(url, data) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return ajax.put(process.env.REACT_APP_BACKEND + url, data, config);
    }
  }, {
    key: "_delete",
    value: function _delete(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return ajax["delete"](process.env.REACT_APP_BACKEND + url, config);
    }
  }]);
  return GridWS;
}();
export default new GridWS();