function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import './Comments.css';
import CommentUser from "./CommentUser";
import CommentBar from "./CommentBar";
import CommentAvatar from "./CommentAvatar";
import TextareaAutosize from 'react-autosize-textarea';
import ListItem from '@mui/material/ListItem';
import withStyles from '@mui/styles/withStyles';
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
  function Comment(props) {
    var _this;
    _classCallCheck(this, Comment);
    _this = _callSuper(this, Comment, [props]);
    _this.inputTextArea = function (event) {
      var element = event.target;
      //Calculate display bar
      var initialText = _this.state.text;
      var displayBar = element.value !== '' && initialText !== element.value;
      //The text
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
  _inherits(Comment, _Component);
  return _createClass(Comment, [{
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
      })), this.props.commentFooter && /*#__PURE__*/React.createElement("div", {
        className: "commentFooter"
      }, this.props.commentFooter)));
    }
  }]);
}(Component);
export default withStyles(styles)(Comment);