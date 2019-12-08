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
var WSComments =
/*#__PURE__*/
function () {
  function WSComments() {
    _classCallCheck(this, WSComments);
  }

  _createClass(WSComments, [{
    key: "readComments",
    //
    //COMMENTS
    //
    value: function readComments(entityCode, entityKeyCode) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      entityKeyCode = encodeURIComponent(entityKeyCode);
      return _WS["default"]._get("/comments?entityCode=".concat(entityCode, "&entityKeyCode=").concat(entityKeyCode), config);
    }
  }, {
    key: "createComment",
    value: function createComment(comment) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _WS["default"]._post('/comments/', comment, config);
    }
  }, {
    key: "updateComment",
    value: function updateComment(comment) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _WS["default"]._put('/comments/', comment, config);
    }
  }]);

  return WSComments;
}();

var _default = new WSComments();

exports["default"] = _default;