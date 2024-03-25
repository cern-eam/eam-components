function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
import React, { Component } from 'react';
import WSComments from "../../../tools/WSComments";
import Comment from "./Comment";
import CommentNew from "./CommentNew";
import List from '@mui/material/List';
import PropTypes from "prop-types";
var datatablePanelStyle = {
  marginLeft: -18,
  marginRight: -18,
  marginBottom: -22
};
var Comments = /*#__PURE__*/function (_Component) {
  _inherits(Comments, _Component);
  function Comments() {
    var _this;
    _classCallCheck(this, Comments);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Comments, [].concat(args));
    _this.state = {
      comments: [],
      newCommentText: ''
    };
    _this.readComments = function (entityCode, entityKeyCode) {
      _this.props.readComments(entityCode, entityKeyCode + (_this.props.entityOrganization ? '#' + _this.props.entityOrganization : '')).then(function (response) {
        _this.setState(function () {
          return {
            comments: response.body.data,
            newCommentText: ''
          };
        });
      })["catch"](function (reason) {
        _this.props.handleError(reason);
        _this.setState(function () {
          return {
            comments: []
          };
        });
      });
    };
    _this.createComment = function (comment) {
      delete comment.pk; //Remove pk property to avoid unmarshalling error
      if (_this.props.entityOrganization) {
        comment.organization = _this.props.entityOrganization;
      }
      _this.props.createComment(comment).then(function (response) {
        if (_this.props.onCommentAdded) {
          _this.props.onCommentAdded(comment);
        }
        _this.readComments(_this.props.entityCode, _this.props.entityKeyCode);
      })["catch"](function (reason) {
        _this.props.handleError(reason);
      });
    };
    _this.updateComment = function (comment) {
      delete comment.pk; //Remove pk property to avoid unmarshalling error
      _this.props.updateComment(comment).then(function (response) {
        if (_this.props.onCommentUpdated) {
          _this.props.onCommentUpdated(comment);
        }
        _this.readComments(_this.props.entityCode, _this.props.entityKeyCode);
      })["catch"](function (reason) {
        _this.props.handleError(reason);
      });
    };
    _this.updateNewCommentText = function (text) {
      _this.setState(function () {
        return {
          newCommentText: text
        };
      });
    };
    _this.createCommentForNewEntity = function (entityKeyCode) {
      if (_this.state.newCommentText) {
        _this.createComment({
          entityCode: _this.props.entityCode,
          entityKeyCode: _this.props.entityKeyCode ? _this.props.entityKeyCode : entityKeyCode,
          text: _this.state.newCommentText
        });
      }
    };
    return _this;
  }
  _createClass(Comments, [{
    key: "componentWillMount",
    value: function componentWillMount() {
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
      var _this$props = this.props,
        allowHtml = _this$props.allowHtml,
        disabled = _this$props.disabled;
      return /*#__PURE__*/React.createElement(List, {
        style: {
          width: "100%"
        }
      }, this.state.comments.map(function (comment) {
        return /*#__PURE__*/React.createElement(Comment, {
          allowHtml: allowHtml,
          key: comment.pk,
          comment: comment,
          updateCommentHandler: _this2.updateComment,
          commentFooter: _this2.props.commentFooterMapper?.({
            comment: comment
          })
        });
      }), /*#__PURE__*/React.createElement(CommentNew, {
        userCode: this.props.userCode,
        createCommentHandler: this.createComment,
        entityCode: this.props.entityCode,
        entityKeyCode: this.props.entityKeyCode,
        newCommentText: this.state.newCommentText,
        updateNewCommentText: this.updateNewCommentText,
        displayPrivateCheck: this.props.displayPrivateCheck,
        disabled: disabled
      }));
    }
  }]);
  return Comments;
}(Component);
Comments.defaultProps = {
  title: 'COMMENTS',
  readComments: WSComments.readComments,
  updateComment: WSComments.updateComment,
  createComment: WSComments.createComment
};
Comments.propTypes = {
  entityCode: PropTypes.string,
  entityKeyCode: PropTypes.string,
  userDesc: PropTypes.string.isRequired,
  onCommentAdded: PropTypes.func,
  onCommentUpdated: PropTypes.func,
  title: PropTypes.string,
  readComments: PropTypes.func,
  updateComment: PropTypes.func,
  createComment: PropTypes.func,
  commentFooterMapper: PropTypes.func,
  displayPrivateCheck: PropTypes.bool
};
export default Comments;