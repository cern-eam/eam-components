function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React, { Component } from 'react';
import './Comments.css';
import CommentUser from "./CommentUser";
import CommentBar from "./CommentBar";
import CommentAvatar from "./CommentAvatar";
import TextareaAutosize from 'react-autosize-textarea';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import { FlagCheckered, PlusBoxOutline, Pencil } from 'mdi-material-ui';
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import sanitizeHtml from 'sanitize-html';
var iconStyle = {
  height: 15
};
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

var Comment = /*#__PURE__*/function (_Component) {
  _inherits(Comment, _Component);

  var _super = _createSuper(Comment);

  function Comment(props) {
    var _this;

    _classCallCheck(this, Comment);

    _this = _super.call(this, props);

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

    _this.sanitizeText = function (text) {
      return sanitizeHtml(text, {
        allowedTags: ['h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'u', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'font', 'span'],
        allowedAttributes: {
          font: ['color', 'style'],
          div: ['style'],
          span: ['style']
        }
      });
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
      var allowHtml = this.props.allowHtml;
      var comment = this.state.comment;
      var a = allowHtml && comment && comment.text && comment.text.startsWith("<html>") && comment.text.endsWith("</html>");
      return /*#__PURE__*/React.createElement(ListItem, {
        classes: {
          root: this.props.classes.root
        }
      }, /*#__PURE__*/React.createElement(CommentAvatar, {
        name: this.state.comment.creationUserCode
      }), /*#__PURE__*/React.createElement("div", {
        className: "commentContainer",
        style: this.state.containerStyle
      }, /*#__PURE__*/React.createElement("div", {
        className: "triangle"
      }), /*#__PURE__*/React.createElement("div", {
        className: "innerTriangle"
      }), /*#__PURE__*/React.createElement("div", {
        className: "commentInfoContainer"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CommentUser, {
        userDesc: comment.creationUserDesc,
        userDate: comment.creationDate,
        icon: /*#__PURE__*/React.createElement(PlusBoxOutline, {
          style: iconStyle
        })
      }), this.props.comment.updateUserCode && /*#__PURE__*/React.createElement(CommentUser, {
        userDesc: comment.updateUserDesc,
        userDate: comment.updateDate,
        icon: /*#__PURE__*/React.createElement(Pencil, {
          style: iconStyle
        })
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          height: 25,
          marginRight: 7
        }
      }, /*#__PURE__*/React.createElement(CommentBar, {
        saveCommentHandler: this.props.updateCommentHandler,
        displayBar: this.state.displayBar,
        comment: comment,
        displayClosingCheck: false,
        showUpdatingHandler: this.showUpdating
      }), this.props.comment.typeCode === '+' && /*#__PURE__*/React.createElement(FlagCheckered, {
        color: "primary"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "commentTextContainer",
        onKeyDown: this.onKeyDownHandler
      }, allowHtml && comment && comment.text && comment.text.startsWith("<html>") && comment.text.endsWith("</html>") ? /*#__PURE__*/React.createElement("div", {
        className: "commentText",
        style: {
          width: '100%',
          height: '100%'
        }
      }, /*#__PURE__*/React.createElement(CKEditor, {
        onInit: function onInit(editor) {
          console.log('Editor is ready to use!', editor);
        },
        editor: BalloonEditor,
        data: this.sanitizeText(comment.text)
      })) : /*#__PURE__*/React.createElement(TextareaAutosize, {
        defaultValue: comment.text,
        className: "commentText",
        onInput: this.inputTextArea
      }))));
    }
  }]);

  return Comment;
}(Component);

export default withStyles(styles)(Comment);