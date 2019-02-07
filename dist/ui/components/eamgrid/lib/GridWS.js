'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AjaxGrid = require('./AjaxGrid');

var _AjaxGrid2 = _interopRequireDefault(_AjaxGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Handles all calls to REST Api
 */
var GridWS = function () {
    function GridWS() {
        _classCallCheck(this, GridWS);
    }

    _createClass(GridWS, [{
        key: 'getGridData',


        // Methods used in grid

        value: function getGridData(gridRequest) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this._post('/grids/data/', gridRequest, config);
        }
    }, {
        key: 'exportDataToCSV',
        value: function exportDataToCSV(gridRequest) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this._post('/grids/export/', gridRequest, config);
        }
    }, {
        key: 'getGridFieldsInfo',
        value: function getGridFieldsInfo(gridid, dataspyid) {
            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this._get('/grids/' + gridid + '/dataspy?dataspyid=' + dataspyid, config);
        }
    }, {
        key: 'getGridMetadata',
        value: function getGridMetadata(gridid) {
            var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'EN';
            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this._get('/grids/' + gridid + '/metadata?lang=' + lang, config);
        }
    }, {
        key: '_get',
        value: function _get(url) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return _AjaxGrid2.default.get(process.env.REACT_APP_BACKEND + url, config);
        }
    }, {
        key: '_post',
        value: function _post(url, data) {
            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return _AjaxGrid2.default.post(process.env.REACT_APP_BACKEND + url, data, config);
        }
    }, {
        key: '_put',
        value: function _put(url, data) {
            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return _AjaxGrid2.default.put(process.env.REACT_APP_BACKEND + url, data, config);
        }
    }, {
        key: '_delete',
        value: function _delete(url) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return _AjaxGrid2.default.delete(process.env.REACT_APP_BACKEND + url, config);
        }
    }]);

    return GridWS;
}();

exports.default = new GridWS();