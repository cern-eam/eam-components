function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  _inherits(EISPanel, _Component);

  var _super = _createSuper(EISPanel);

  function EISPanel() {
    var _this;

    _classCallCheck(this, EISPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      panelExpanded: true
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

  _createClass(EISPanel, [{
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
          '&:before': {
            display: 'none'
          },
          '&.Mui-expanded': {
            margin: "8px 0px"
          }
        }
      }, this.props.ExpansionPanelProps), /*#__PURE__*/React.createElement(AccordionSummary, {
        expandIcon: this.props.alwaysExpanded ? undefined : /*#__PURE__*/React.createElement(ExpandMoreIcon, null),
        style: this.summaryStyle
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
      } // No state update necessary


      return null;
    }
  }]);

  return EISPanel;
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