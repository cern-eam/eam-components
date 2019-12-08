'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WS = require('./WS');

var _WS2 = _interopRequireDefault(_WS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Handles all calls to REST Api
 */
var WSChecklists = function () {
    function WSChecklists() {
        _classCallCheck(this, WSChecklists);
    }

    _createClass(WSChecklists, [{
        key: 'getWorkOrderActivities',
        value: function getWorkOrderActivities(number) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { timeout: 60000 };

            return _WS2.default._get('/activities/read/?workorder=' + number, config);
        }
        //
        //CHECKLIST
        //

    }, {
        key: 'updateChecklistItem',
        value: function updateChecklistItem(checklistItem) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return _WS2.default._put('/checklists/', checklistItem, config);
        }
    }, {
        key: 'createFolowUpWorkOrders',
        value: function createFolowUpWorkOrders(activity) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return _WS2.default._post('/checklists/workorders', activity, config);
        }
    }]);

    return WSChecklists;
}();

exports.default = new WSChecklists();