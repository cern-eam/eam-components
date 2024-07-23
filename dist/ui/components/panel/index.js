function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import FontIcon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from 'mdi-material-ui/OpenInNew';
import Fullscreen from '@mui/icons-material/Fullscreen';
import { FullscreenExit } from 'mdi-material-ui';
var EISPanel = /*#__PURE__*/function (_Component) {
  function EISPanel() {
    var _this;
    _classCallCheck(this, EISPanel);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, EISPanel, [].concat(args));
    _this.state = {
      panelExpanded: _this.props.defaultExpanded ?? true
    };
    _this.headingStyle = {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 900,
      flexGrow: 1
    };
    _this.headingIconStyle = {
      fontSize: 20,
      marginRight: 7
    };
    _this.summaryStyle = {
      backgroundColor: '#fafafa',
      borderBottom: '1px solid #EEEEEE',
      minHeight: '45px',
      height: '50px'
    };
    _this.linkIconStyle = {
      color: '#00aaff'
    };
    _this._onPanelChange = function (object, expanded) {
      if (_this.props.alwaysExpanded) {
        expanded = true;
      }
      _this.setState(function () {
        return {
          panelExpanded: expanded
        };
      });
      if (_this.props.onPanelChange) {
        _this.props.onPanelChange(expanded);
      }
    };
    return _this;
  }
  _inherits(EISPanel, _Component);
  return _createClass(EISPanel, [{
    key: "linkClickHandler",
    value: function linkClickHandler() {
      window.open(this.props.link, '_blank');
    }
  }, {
    key: "render",
    value: function render() {
      var linkIcon = this.props.icon;
      return /*#__PURE__*/React.createElement(Accordion, _extends({
        defaultExpanded: true,
        expanded: this.props.alwaysExpanded ? true : this.state.panelExpanded,
        TransitionProps: {
          timeout: 300
        },
        onChange: this._onPanelChange,
        sx: {
          boxShadow: "rgb(0 0 0 / 10%) 0px 1px 2px 0px",
          '&:before': {
            display: 'none'
          },
          '&.Mui-expanded': {
            margin: "8px 0px"
          }
        }
      }, this.props.ExpansionPanelProps), /*#__PURE__*/React.createElement(AccordionSummary, {
        expandIcon: this.props.alwaysExpanded ? undefined : /*#__PURE__*/React.createElement(ExpandMoreIcon, null),
        style: _objectSpread({}, this.summaryStyle, {}, this.props.summaryStyle)
      }, /*#__PURE__*/React.createElement("div", {
        style: this.headingStyle
      }, this.props.headingIcon && /*#__PURE__*/React.createElement(FontIcon, {
        style: this.headingIconStyle,
        className: 'fa ' + this.props.headingIcon
      }), this.props.summaryIcon && /*#__PURE__*/React.createElement(this.props.summaryIcon, null), /*#__PURE__*/React.createElement("div", null, this.props.heading), this.props.link && /*#__PURE__*/React.createElement(IconButton, {
        onClick: this.linkClickHandler.bind(this),
        style: {
          height: 'auto',
          width: 35
        }
      }, /*#__PURE__*/React.createElement("linkIcon", {
        style: this.linkIconStyle
      })), this.props.headingBar)), /*#__PURE__*/React.createElement(AccordionDetails, {
        style: _objectSpread({}, this.props.detailsStyle)
      }, this.props.children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      // if panelExpanded is passed as prop and is different from the current
      // state.panelExpanded then we update the state
      if (typeof nextProps.panelExpanded !== 'undefined' && nextProps.panelExpanded !== prevState.panelExpanded) {
        return {
          panelExpanded: nextProps.panelExpanded
        };
      }

      // No state update necessary
      return null;
    }
  }]);
}(Component);
export var withFullscreen = function withFullscreen(props) {
  return function (Component) {
    var isOpen = props.isOpen,
      onFullscreenOpen = props.onFullscreenOpen,
      onFullscreenClose = props.onFullscreenClose;
    return function (props) {
      return /*#__PURE__*/React.createElement(Component, _extends({
        headingBar: isOpen ? /*#__PURE__*/React.createElement(IconButton, {
          onClick: function onClick(e) {
            e.stopPropagation();
            onFullscreenOpen();
          }
        }, /*#__PURE__*/React.createElement(Fullscreen, null)) : /*#__PURE__*/React.createElement(IconButton, {
          onClick: function onClick(e) {
            e.stopPropagation();
            onFullscreenClose();
          }
        }, /*#__PURE__*/React.createElement(FullscreenExit, null))
      }, props));
    };
  };
};
EISPanel.defaultProps = {
  alwaysExpanded: false,
  onPanelChange: undefined,
  icon: /*#__PURE__*/React.createElement(OpenInNewIcon, null)
};
export default EISPanel;