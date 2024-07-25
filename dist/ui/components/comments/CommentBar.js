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
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SaveIcon from '@mui/icons-material/Save';
import { FlagCheckered, Lock } from 'mdi-material-ui';
var notClosingButtonStyle = {
  backgroundColor: '#e0e0e0'
};
var saveIconStyle = {
  width: 16,
  height: 16,
  marginRight: 5
};
var optionIconStyle = {
  width: 18,
  height: 18,
  margin: '0 5px'
};
var CommentBar = /*#__PURE__*/function (_Component) {
  function CommentBar() {
    var _this;
    _classCallCheck(this, CommentBar);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, CommentBar, [].concat(args));
    _this.state = {
      isClosing: false,
      isPrivate: false,
      closingButtonStyle: notClosingButtonStyle
    };
    _this.barCommentSaveHandler = function () {
      //Show updating
      _this.props.showUpdatingHandler();
      //Comment to be saved
      var comment = _this.props.comment;
      //Set the closing
      if (_this.state.isClosing) {
        comment.typeCode = '+';
      } else if (_this.state.isPrivate) {
        comment.typeCode = 'P';
      }
      //Update the closing
      _this.setState(function () {
        return {
          isClosing: false,
          isPrivate: false,
          closingButtonStyle: notClosingButtonStyle
        };
      });
      //Save the comment with the method received
      _this.props.saveCommentHandler(comment);
    };
    return _this;
  }
  _inherits(CommentBar, _Component);
  return _createClass(CommentBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      if (this.props.displayBar) {
        return /*#__PURE__*/React.createElement("div", {
          className: "commentBarContainer"
        }, /*#__PURE__*/React.createElement(Button, {
          disableElevation: true,
          onClick: this.barCommentSaveHandler,
          color: "primary"
        }, /*#__PURE__*/React.createElement(SaveIcon, {
          style: saveIconStyle
        }), " Save"), this.props.displayPrivateCheck && /*#__PURE__*/React.createElement(FormControlLabel, {
          style: {
            height: 22,
            marginRight: -5
          },
          control: /*#__PURE__*/React.createElement(Checkbox, {
            color: "primary",
            icon: /*#__PURE__*/React.createElement(Lock, {
              style: optionIconStyle
            }),
            checkedIcon: /*#__PURE__*/React.createElement(Lock, {
              style: optionIconStyle
            }),
            checked: this.state.isPrivate,
            onChange: function onChange(event, checked) {
              return _this2.setState({
                isPrivate: checked
              });
            },
            title: "Private comment"
          })
        }), this.props.displayClosingCheck && /*#__PURE__*/React.createElement(FormControlLabel, {
          style: {
            height: 22,
            marginRight: -5
          },
          control: /*#__PURE__*/React.createElement(Checkbox, {
            color: "primary",
            icon: /*#__PURE__*/React.createElement(FlagCheckered, {
              style: optionIconStyle
            }),
            checkedIcon: /*#__PURE__*/React.createElement(FlagCheckered, {
              style: optionIconStyle
            }),
            checked: this.state.isClosing,
            onChange: function onChange(event, checked) {
              return _this2.setState({
                isClosing: checked
              });
            },
            title: "Closing"
          })
        }));
      }
      return null;
    }
  }]);
}(Component);
export default CommentBar;