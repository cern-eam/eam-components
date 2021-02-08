"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _WS = _interopRequireDefault(require("./WS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Handles all calls to REST Api
 */
var WSChecklists = /*#__PURE__*/function () {
  function WSChecklists() {
    _classCallCheck(this, WSChecklists);
  }

  _createClass(WSChecklists, [{
    key: "getWorkOrderActivities",
    value: function getWorkOrderActivities(number) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        timeout: 60000
      };
      return _WS["default"]._get('/activities/read/?workorder=' + number, config);
    } //
    //CHECKLIST
    //

  }, {
    key: "updateChecklistItem",
    value: function updateChecklistItem(checklistItem) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _WS["default"]._put('/checklists/', checklistItem, config);
    }
  }, {
    key: "createFolowUpWorkOrders",
    value: function createFolowUpWorkOrders(activity) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _WS["default"]._post('/checklists/workorders', activity, config);
    }
  }, {
    key: "esignChecklist",
    value: function esignChecklist(checklistSignature) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _WS["default"]._put('/checklists/esign', checklistSignature);
    }
  }, {
    key: "getChecklistDefinition",
    value: function getChecklistDefinition(taskCode, checklistItem) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _WS["default"]._get("/checklists/definition/".concat(taskCode, "/").concat(checklistItem.checklistDefinitionCode), config);
    }
  }]);

  return WSChecklists;
}();

var _default = new WSChecklists();

exports["default"] = _default;