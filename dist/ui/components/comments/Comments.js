"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _WSComments = _interopRequireDefault(require("../../../tools/WSComments"));

var _Comment = _interopRequireDefault(require("./Comment"));

var _CommentNew = _interopRequireDefault(require("./CommentNew"));

var _panel = _interopRequireDefault(require("../panel"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var datatablePanelStyle = {
  marginLeft: -18,
  marginRight: -18,
  marginBottom: -22
};

var Comments =
/*#__PURE__*/
function (_Component) {
  _inherits(Comments, _Component);

  function Comments() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Comments);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Comments)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      comments: [],
      newCommentText: ''
    };

    _this.readComments = function (entityCode, entityKeyCode) {
      _this.props.readComments(entityCode, entityKeyCode).then(function (response) {
        _this.setState(function () {
          return {
            comments: response.body.data,
            newCommentText: ''
          };
        });
      })["catch"](function (reason) {
        _this.props.handleError(reason); //No comments...


        _this.setState(function () {
          return {
            comments: []
          };
        });
      });
    };

    _this.createComment = function (comment) {
      //Remove pk property
      delete comment.pk; //Create the comment and set the new list

      _this.props.createComment(comment).then(function (response) {
        _this.setState(function () {
          return {
            comments: response.body.data,
            newCommentText: ''
          };
        });

        if (_this.props.onCommentAdded) {
          _this.props.onCommentAdded(comment);
        }
      })["catch"](function (reason) {
        _this.props.handleError(reason); //Try to read comments again


        _this.readComments(_this.props.entityCode, _this.props.entityKeyCode);
      });
    };

    _this.updateComment = function (comment) {
      //Remove pk property
      delete comment.pk;
      delete comment.updateCount; //Update the comment and set the new list

      _this.props.updateComment(comment).then(function (response) {
        _this.setState(function () {
          return {
            comments: response.body.data
          };
        });

        if (_this.props.onCommentUpdated) {
          _this.props.onCommentUpdated(comment);
        }
      })["catch"](function (reason) {
        _this.props.handleError(reason); //Try to read comments again


        _this.readComments(_this.props.entityCode, _this.props.entityKeyCode);
      });
    };

    _this.updateNewCommentText = function (text) {
      _this.setState(function () {
        return {
          newCommentText: text
        };
      });
    };

    _this.createCommentForNewEntity = function () {
      if (_this.state.newCommentText) {
        _this.createComment({
          entityCode: _this.props.entityCode,
          entityKeyCode: _this.props.entityKeyCode,
          text: _this.state.newCommentText
        });
      }
    };

    return _this;
  }

  _createClass(Comments, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      //Just read for existing object
      if (this.props.entityKeyCode) this.readComments(this.props.entityCode, this.props.entityKeyCode);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      //Just read for existing object
      if ((prevProps.entityKeyCode !== this.props.entityKeyCode || prevProps.entityCode !== this.props.entityCode) && this.props.entityKeyCode) {
        //Just read the comments
        this.readComments(this.props.entityCode, this.props.entityKeyCode);
      } else if (prevProps.entityKeyCode && !this.props.entityKeyCode) {
        /*It's new object again*/
        this.setState(function () {
          return {
            comments: [],
            newCommentText: ''
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var allowHtml = this.props.allowHtml;
      return _react["default"].createElement(_panel["default"], {
        heading: this.props.title,
        detailsStyle: datatablePanelStyle
      }, _react["default"].createElement(_List["default"], {
        style: {
          width: "100%"
        }
      }, this.state.comments.map(function (comment) {
        return _react["default"].createElement(_Comment["default"], {
          allowHtml: allowHtml,
          key: comment.pk,
          comment: comment,
          updateCommentHandler: _this2.updateComment
        });
      }), _react["default"].createElement(_CommentNew["default"], {
        userCode: this.props.userCode,
        createCommentHandler: this.createComment,
        entityCode: this.props.entityCode,
        entityKeyCode: this.props.entityKeyCode,
        newCommentText: this.state.newCommentText,
        updateNewCommentText: this.updateNewCommentText
      })));
    }
  }]);

  return Comments;
}(_react.Component);

Comments.defaultProps = {
  title: 'COMMENTS',
  readComments: _WSComments["default"].readComments,
  updateComment: _WSComments["default"].updateComment,
  createComment: _WSComments["default"].createComment
};
Comments.propTypes = {
  entityCode: _propTypes["default"].string,
  entityKeyCode: _propTypes["default"].string,
  userDesc: _propTypes["default"].string.isRequired,
  onCommentAdded: _propTypes["default"].func,
  onCommentUpdated: _propTypes["default"].func,
  title: _propTypes["default"].string,
  readComments: _propTypes["default"].func,
  updateComment: _propTypes["default"].func,
  createComment: _propTypes["default"].func
};
var _default = Comments;
exports["default"] = _default;