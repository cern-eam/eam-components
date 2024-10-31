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
import CommentBar from "./CommentBar";
import CommentAvatar from "./CommentAvatar";
import TextareaAutosize from 'react-autosize-textarea';
import ListItem from '@mui/material/ListItem';
import withStyles from '@mui/styles/withStyles';
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
var CommentNew = /*#__PURE__*/function (_Component) {
  function CommentNew(_props) {
    var _this;
    _classCallCheck(this, CommentNew);
    _this = _callSuper(this, CommentNew, [_props]);
    _this.initNewComment = function (props) {
      return {
        entityCode: _this.props.entityCode,
        entityKeyCode: _this.props.entityKeyCode,
        text: props.newCommentText
      };
    };
    _this.inputTextArea = function (event) {
      var element = event.target;
      var displayBar = element.value !== '' && !!_this.props.entityKeyCode;
      //The text
      var comment = _this.state.comment;
      comment.text = element.value;
      _this.updateState(displayBar, comment);
      //Value
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
  _inherits(CommentNew, _Component);
  return _createClass(CommentNew, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      //Display bar
      var displayBar = nextProps.newCommentText !== '' && !!this.props.entityKeyCode;
      this.updateState(displayBar, this.initNewComment(nextProps), initialContainerStyle);
    }
  }, {
    key: "render",
    value: function render() {
      var disabled = this.props.disabled;
      var placeholder = disabled ? 'Commenting is disabled' : 'Enter new comment here';
      return /*#__PURE__*/React.createElement(ListItem, {
        classes: {
          root: this.props.classes.root
        }
      }, /*#__PURE__*/React.createElement(CommentAvatar, {
        name: this.props.userCode
      }), /*#__PURE__*/React.createElement("div", {
        className: "commentContainer",
        style: this.state.containerStyle
      }, /*#__PURE__*/React.createElement("div", {
        className: "triangle"
      }), /*#__PURE__*/React.createElement("div", {
        className: "innerTriangle"
      }), this.state.displayBar && /*#__PURE__*/React.createElement("div", {
        className: "commentInfoContainer"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 20
        }
      }), /*#__PURE__*/React.createElement(CommentBar, {
        saveCommentHandler: this.props.createCommentHandler,
        displayBar: this.state.displayBar,
        comment: this.state.comment,
        displayClosingCheck: this.props.entityCode === 'EVNT',
        displayPrivateCheck: this.props.displayPrivateCheck,
        showUpdatingHandler: this.showUpdating
      })), /*#__PURE__*/React.createElement("div", {
        className: "commentTextContainer",
        onKeyDown: this.onKeyDownHandler
      }, /*#__PURE__*/React.createElement(TextareaAutosize, {
        placeholder: placeholder,
        className: "commentText",
        onInput: this.inputTextArea,
        value: this.props.newCommentText,
        onFocus: this.inputTextArea,
        disabled: disabled
      }))));
    }
  }]);
}(Component);
export default withStyles(styles)(CommentNew);