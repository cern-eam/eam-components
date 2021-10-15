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
import IconButton from '@material-ui/core/IconButton';
import ImageFilter from 'mdi-material-ui/ImageFilter';
import FormatListBulleted from 'mdi-material-ui/FormatListBulleted';
import PlusBox from 'mdi-material-ui/PlusBox';
import OpenInNewIcon from 'mdi-material-ui/OpenInNew';

var EDMSWidgetToolbar = /*#__PURE__*/function (_Component) {
  _inherits(EDMSWidgetToolbar, _Component);

  var _super = _createSuper(EDMSWidgetToolbar);

  function EDMSWidgetToolbar() {
    var _this;

    _classCallCheck(this, EDMSWidgetToolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.mainDivStyle = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid rgb(238, 238, 238)"
    };
    _this.separatorStyle = {
      flex: "1 1 auto"
    };

    _this.computeDocumentCreationStyle = function () {
      return {
        color: _this.props.documentCreationVisible ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
      };
    };

    _this.computeGalleriaButtonStyle = function () {
      return {
        color: _this.props.currentView === 'GALLERIA' ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
      };
    };

    _this.computeDoclistButtonStyle = function () {
      return {
        color: _this.props.currentView === 'DOCLIST' ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
      };
    };

    return _this;
  }

  _createClass(EDMSWidgetToolbar, [{
    key: "linkClickHandler",
    value: function linkClickHandler() {
      window.open(this.props.link, '_blank');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        style: this.mainDivStyle
      }, this.props.link && /*#__PURE__*/React.createElement(IconButton, {
        onClick: this.linkClickHandler.bind(this),
        style: {
          color: "#00aaff"
        }
      }, /*#__PURE__*/React.createElement(OpenInNewIcon, null)), !this.props.documentCreationDisabled && /*#__PURE__*/React.createElement(IconButton, {
        onClick: this.props.documentCreationHandler,
        style: this.computeDocumentCreationStyle()
      }, /*#__PURE__*/React.createElement(PlusBox, null)), /*#__PURE__*/React.createElement("div", {
        style: this.separatorStyle
      }), /*#__PURE__*/React.createElement(IconButton, {
        onClick: this.props.doclistClickHandler,
        style: this.computeDoclistButtonStyle()
      }, /*#__PURE__*/React.createElement(FormatListBulleted, null)), /*#__PURE__*/React.createElement(IconButton, {
        onClick: this.props.galleriaClickHandler,
        style: this.computeGalleriaButtonStyle()
      }, /*#__PURE__*/React.createElement(ImageFilter, null)));
    }
  }]);

  return EDMSWidgetToolbar;
}(Component);

export default EDMSWidgetToolbar;