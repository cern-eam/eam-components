'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ajax = require('./ajax');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Handles all calls to REST Api
 */
var WSEDMS = function () {
    function WSEDMS() {
        _classCallCheck(this, WSEDMS);
    }

    _createClass(WSEDMS, [{
        key: 'getEDMSDocuments',


        //
        //EDMS
        //
        value: function getEDMSDocuments(objectID, objectType, mode) {
            var config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            objectType = encodeURIComponent(objectType);
            return _ajax2.default.get(process.env.REACT_APP_BACKEND.replace('/eamlightws/rest', '/cern-eam-services/rest') + ('/edms/documents?objectid=' + objectID + '&objectType=' + objectType + '&mode=' + mode), config);
        }
    }, {
        key: 'createNewDocument',
        value: function createNewDocument(data) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return _ajax2.default.post(process.env.REACT_APP_BACKEND.replace('/eamlightws/rest', '/cern-eam-services/rest') + '/edms/createdocument', data, config);
        }
    }, {
        key: 'getNCRProperties',
        value: function getNCRProperties(objectType, objectID) {
            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return _ajax2.default.get(process.env.REACT_APP_BACKEND.replace('/eamlightws/rest', '/cern-eam-services/rest') + '/edms/ncrproperties', config);
        }
    }, {
        key: 'getNCRKeyWords',
        value: function getNCRKeyWords(objectID) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return _ajax2.default.get(process.env.REACT_APP_BACKEND.replace('/eamlightws/rest', '/cern-eam-services/rest') + ('/edms/ncrkeywords/' + objectID), config);
        }
    }, {
        key: 'getEquipmentWorkOrders',
        value: function getEquipmentWorkOrders(objectType, objectID) {
            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return _ajax2.default.get(process.env.REACT_APP_BACKEND.replace('/eamlightws/rest', '/cern-eam-services/rest') + ('/edms/equipmentwos?objectType=' + objectType + '&objectCode=' + objectID), config);
        }
    }]);

    return WSEDMS;
}();

exports.default = new WSEDMS();