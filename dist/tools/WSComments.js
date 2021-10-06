function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import WS from './WS';
/**
 * Handles all calls to REST Api
 */

var WSComments = /*#__PURE__*/function () {
  function WSComments() {
    _classCallCheck(this, WSComments);
  }

  _createClass(WSComments, [{
    key: "readComments",
    value: //
    //COMMENTS
    //
    function readComments(entityCode, entityKeyCode) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      entityKeyCode = encodeURIComponent(entityKeyCode);
      return WS._get("/comments?entityCode=".concat(entityCode, "&entityKeyCode=").concat(entityKeyCode), config);
    }
  }, {
    key: "createComment",
    value: function createComment(comment) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return WS._post('/comments/', comment, config);
    }
  }, {
    key: "updateComment",
    value: function updateComment(comment) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return WS._put('/comments/', comment, config);
    }
  }]);

  return WSComments;
}();

export default new WSComments();