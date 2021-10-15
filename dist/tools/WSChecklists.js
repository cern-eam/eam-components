function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import WS from './WS';
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
      return WS._get('/activities/read/?workorder=' + number, config);
    } //
    //CHECKLIST
    //

  }, {
    key: "updateChecklistItem",
    value: function updateChecklistItem(checklistItem) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return WS._put('/checklists/', checklistItem, config);
    }
  }, {
    key: "createFolowUpWorkOrders",
    value: function createFolowUpWorkOrders(activity) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return WS._post('/checklists/workorders', activity, config);
    }
  }, {
    key: "esignChecklist",
    value: function esignChecklist(checklistSignature) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return WS._put('/checklists/esign', checklistSignature);
    }
  }, {
    key: "getChecklistDefinition",
    value: function getChecklistDefinition(taskCode, checklistDefinitionCode) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return WS._get("/checklists/definition/".concat(taskCode, "/").concat(checklistDefinitionCode), config);
    }
  }]);

  return WSChecklists;
}();

export default new WSChecklists();