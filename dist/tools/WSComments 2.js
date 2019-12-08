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
var WSComments = function () {
    function WSComments() {
        _classCallCheck(this, WSComments);
    }

    _createClass(WSComments, [{
        key: 'readComments',


        //
        //COMMENTS
        //
        value: function readComments(entityCode, entityKeyCode) {
            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            entityKeyCode = encodeURIComponent(entityKeyCode);
            return _WS2.default._get('/comments?entityCode=' + entityCode + '&entityKeyCode=' + entityKeyCode, config);
        }
    }, {
        key: 'createComment',
        value: function createComment(comment) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return _WS2.default._post('/comments/', comment, config);
        }
    }, {
        key: 'updateComment',
        value: function updateComment(comment) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return _WS2.default._put('/comments/', comment, config);
        }
    }]);

    return WSComments;
}();

exports.default = new WSComments();