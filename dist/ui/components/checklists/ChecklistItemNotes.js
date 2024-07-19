function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
import CommentIcon from '@mui/icons-material/Comment';
import TextField from '../inputs-ng/components/TextField';
var ChecklistItemNotes = /*#__PURE__*/function (_Component) {
  function ChecklistItemNotes(props) {
    var _this;
    _classCallCheck(this, ChecklistItemNotes);
    _this = _callSuper(this, ChecklistItemNotes, [props]);
    _this.mainDivStyle = {
      flex: " 1 1 auto",
      position: "relative"
    };
    _this.inputStyle = {
      padding: "7px 35px"
    };
    _this.commentIconStyle = {
      position: "absolute",
      bottom: 7,
      left: 6,
      color: "#cecece"
    };
    _this.handleChange = function (event) {
      _this.setState({
        value: event.target.value
      });
    };
    _this.handleBlur = function (event) {
      var oldValue = _this.props.checklistItem.notes;
      if ((oldValue === null ? '' : oldValue) === event.target.value) {
        return;
      }
      _this.props.onChange(_objectSpread({}, _this.props.checklistItem, {
        notes: event.target.value
      }));
    };
    _this.input = React.createRef();
    return _this;
  }
  _inherits(ChecklistItemNotes, _Component);
  return _createClass(ChecklistItemNotes, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.checklistItem) {
        this.setState({
          value: this.props.checklistItem.notes
        });
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.input.current.focus();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        style: this.mainDivStyle
      }, /*#__PURE__*/React.createElement(TextField, {
        inputProps: {
          style: this.inputStyle,
          onChange: this.handleChange,
          value: this.state.value || '',
          onBlur: this.handleBlur,
          ref: this.input
        }
      }), /*#__PURE__*/React.createElement(CommentIcon, {
        style: this.commentIconStyle
      }));
    }
  }]);
}(Component);
export { ChecklistItemNotes as default };