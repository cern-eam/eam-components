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
var WS = function () {
    function WS() {
        _classCallCheck(this, WS);
    }

    _createClass(WS, [{
        key: '_get',


        //
        //
        //
        value: function _get(url) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return _ajax2.default.get(process.env.REACT_APP_BACKEND + url, config);
        }
    }, {
        key: '_post',
        value: function _post(url, data) {
            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return _ajax2.default.post(process.env.REACT_APP_BACKEND + url, data, config);
        }
    }, {
        key: '_put',
        value: function _put(url, data) {
            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return _ajax2.default.put(process.env.REACT_APP_BACKEND + url, data, config);
        }
    }, {
        key: '_delete',
        value: function _delete(url) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return _ajax2.default.delete(process.env.REACT_APP_BACKEND + url, config);
        }
    }]);

    return WS;
}();

exports.default = new WS();