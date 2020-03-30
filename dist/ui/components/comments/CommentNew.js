"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./Comments.css");

var _CommentBar = _interopRequireDefault(require("./CommentBar"));

var _CommentAvatar = _interopRequireDefault(require("./CommentAvatar"));

var _reactAutosizeTextarea = _interopRequireDefault(require("react-autosize-textarea"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _index = require("@material-ui/core/styles/index");

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

var initialContainerStyle = {
  opacity: 1.0,
  pointerEvents: 'all'
};
var styles = {
  root: {
    alignItems: "start",
    paddingTop: 6,
    paddingBottom: 6
  }
};

var CommentNew =
/*#__PURE__*/
function (_Component) {
  _inherits(CommentNew, _Component);

  function CommentNew(_props) {
    var _this;

    _classCallCheck(this, CommentNew);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CommentNew).call(this, _props));

    _this.initNewComment = function (props) {
      return {
        entityCode: _this.props.entityCode,
        entityKeyCode: _this.props.entityKeyCode,
        text: props.newCommentText
      };
    };

    _this.inputTextArea = function (event) {
      var element = event.target;
      var displayBar = element.value !== '' && !!_this.props.entityKeyCode; //The text

      var comment = _this.state.comment;
      comment.text = element.value;

      _this.updateState(displayBar, comment); //Value


      _this.props.updateNewCommentText(comment.text);
    };

    _this.showUpdating = function () {
      _this.setState(function () {
        return {
          containerStyle: {
            opacity: 0.4,
            pointerEvents: 'none'
          }
        };
      });
    };

    _this.updateState = function (displayBar, comment, containerStyle) {
      _this.setState(function () {
        return {
          displayBar: displayBar,
          comment: comment,
          containerStyle: containerStyle
        };
      });
    };

    _this.onKeyDownHandler = function (event) {
      if (event.keyCode === 13 || event.keyCode === 121) {
        event.stopPropagation();
      }
    };

    _this.state = {
      displayBar: false,
      comment: _this.initNewComment(_this.props),
      containerStyle: initialContainerStyle
    };
    return _this;
  }

  _createClass(CommentNew, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      //Display bar
      var displayBar = nextProps.newCommentText !== '' && !!this.props.entityKeyCode;
      this.updateState(displayBar, this.initNewComment(nextProps), initialContainerStyle);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_ListItem["default"], {
        classes: {
          root: this.props.classes.root
        }
      }, _react["default"].createElement(_CommentAvatar["default"], {
        name: this.props.userCode
      }), _react["default"].createElement("div", {
        className: "commentContainer",
        style: this.state.containerStyle
      }, _react["default"].createElement("div", {
        className: "triangle"
      }), _react["default"].createElement("div", {
        className: "innerTriangle"
      }), this.state.displayBar && _react["default"].createElement("div", {
        className: "commentInfoContainer"
      }, _react["default"].createElement("div", {
        style: {
          height: 20
        }
      }), _react["default"].createElement(_CommentBar["default"], {
        saveCommentHandler: this.props.createCommentHandler,
        displayBar: this.state.displayBar,
        comment: this.state.comment,
        displayClosingCheck: this.props.entityCode === 'EVNT',
        showUpdatingHandler: this.showUpdating
      })), _react["default"].createElement("div", {
        className: "commentTextContainer",
        onKeyDown: this.onKeyDownHandler
      }, _react["default"].createElement(_reactAutosizeTextarea["default"], {
        placeholder: "Enter new comment here",
        className: "commentText",
        onInput: this.inputTextArea,
        value: this.props.newCommentText,
        onFocus: this.inputTextArea
      }))));
    }
  }]);

  return CommentNew;
}(_react.Component);

var _default = (0, _index.withStyles)(styles)(CommentNew);

exports["default"] = _default;