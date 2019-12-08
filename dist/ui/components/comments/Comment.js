"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./Comments.css");

var _CommentUser = _interopRequireDefault(require("./CommentUser"));

var _CommentBar = _interopRequireDefault(require("./CommentBar"));

var _reactAutosizeTextarea = _interopRequireDefault(require("react-autosize-textarea"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _reactUserAvatar = _interopRequireDefault(require("react-user-avatar"));

var _styles = require("@material-ui/core/styles");

var _mdiMaterialUi = require("mdi-material-ui");

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

var iconStyle = {
  height: 17
};
var initialContainerStyle = {
  opacity: 1.0,
  pointerEvents: 'all'
};
var mainColors = ['#E1BEE7', '#FFCDD2', '#F8BBD0', '#90CAF9', '#9FA8DA', '#B39DDB', '#DCEDC8', '#E6EE9C', '#81C784', '#FFF176', '#FFD54F', '#FFCC80', '#9E9E9E', '#E0E0E0', '#FFAB91', '#FF7043', '#B0BEC5'];
var styles = {
  root: {
    alignItems: "start",
    paddingTop: 6,
    paddingBottom: 6
  }
};

var Comment =
/*#__PURE__*/
function (_Component) {
  _inherits(Comment, _Component);

  function Comment(props) {
    var _this;

    _classCallCheck(this, Comment);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Comment).call(this, props));

    _this.inputTextArea = function (event) {
      var element = event.target; //Calculate display bar

      var initialText = _this.state.text;
      var displayBar = element.value !== '' && initialText !== element.value; //The text

      var comment = _this.state.comment;
      comment.text = element.value;

      _this.updateState(initialText, displayBar, comment, initialContainerStyle);
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

    _this.updateState = function (text, displayBar, comment, containerStyle) {
      _this.setState(function () {
        return {
          text: text,
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
      text: _this.props.comment.text,
      displayBar: false,
      comment: _this.props.comment,
      containerStyle: initialContainerStyle
    };
    return _this;
  }

  _createClass(Comment, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.updateState(nextProps.comment.text, false, nextProps.comment, initialContainerStyle);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_ListItem["default"], {
        classes: {
          root: this.props.classes.root
        }
      }, _react["default"].createElement(_reactUserAvatar["default"], {
        size: "48",
        name: this.state.comment.creationUserDesc,
        colors: mainColors
      }), _react["default"].createElement("div", {
        className: "commentContainer",
        style: this.state.containerStyle
      }, _react["default"].createElement("div", {
        className: "triangle"
      }), _react["default"].createElement("div", {
        className: "innerTriangle"
      }), _react["default"].createElement("div", {
        className: "commentInfoContainer"
      }, _react["default"].createElement("div", null, _react["default"].createElement(_CommentUser["default"], {
        userDesc: this.state.comment.creationUserDesc,
        userDate: this.state.comment.creationDate,
        icon: _react["default"].createElement(_mdiMaterialUi.PlusBoxOutline, {
          style: iconStyle
        })
      }), this.props.comment.updateUserCode && _react["default"].createElement(_CommentUser["default"], {
        userDesc: this.state.comment.updateUserDesc,
        userDate: this.state.comment.updateDate,
        icon: _react["default"].createElement(_mdiMaterialUi.Pencil, {
          style: iconStyle
        })
      })), _react["default"].createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          height: 25,
          marginRight: 7
        }
      }, _react["default"].createElement(_CommentBar["default"], {
        saveCommentHandler: this.props.updateCommentHandler,
        displayBar: this.state.displayBar,
        comment: this.state.comment,
        displayClosingCheck: false,
        showUpdatingHandler: this.showUpdating
      }), this.props.comment.typeCode === '+' && _react["default"].createElement(_mdiMaterialUi.FlagCheckered, {
        color: "primary"
      }))), _react["default"].createElement("div", {
        className: "commentTextContainer",
        onKeyDown: this.onKeyDownHandler
      }, _react["default"].createElement(_reactAutosizeTextarea["default"], {
        defaultValue: this.state.comment.text,
        className: "commentText",
        onInput: this.inputTextArea
      }))));
    }
  }]);

  return Comment;
}(_react.Component);

var _default = (0, _styles.withStyles)(styles)(Comment);

exports["default"] = _default;