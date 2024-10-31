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
import React from 'react';
import { getEDMSFileUrl, getEDMSFileThumbnailUrl } from '../utils/EDMSUtils';
import DescriptionStrip from './DescriptionStrip';
import ImageGallery from 'react-image-gallery';
import './edmsgalleria.css';
import ChevronLeft from 'mdi-material-ui/ChevronLeft';
import ChevronRight from 'mdi-material-ui/ChevronRight';
var EDMSGalleria = /*#__PURE__*/function (_React$Component) {
  function EDMSGalleria() {
    _classCallCheck(this, EDMSGalleria);
    return _callSuper(this, EDMSGalleria, arguments);
  }
  _inherits(EDMSGalleria, _React$Component);
  return _createClass(EDMSGalleria, [{
    key: "generateImagesList",
    value: function generateImagesList() {
      var documentList = this.props.documentList;
      return documentList.reduce(function (images, document) {
        return images.concat(document.files.map(function (file) {
          return {
            original: getEDMSFileUrl(file),
            thumbnail: getEDMSFileUrl(file),
            description: DescriptionStrip(file)
          };
        }));
      }, []);
    }
  }, {
    key: "renderLeftNav",
    value: function renderLeftNav(onClick, disabled) {
      return /*#__PURE__*/React.createElement(ChevronLeft, {
        className: "image-gallery-left-nav",
        onClick: onClick
      });
    }
  }, {
    key: "renderRightNav",
    value: function renderRightNav(onClick, disabled) {
      return /*#__PURE__*/React.createElement(ChevronRight, {
        className: "image-gallery-right-nav",
        onClick: onClick
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.documentList) return /*#__PURE__*/React.createElement("div", null);
      var images = this.generateImagesList();
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: "100%",
          marginTop: 0
        }
      }, /*#__PURE__*/React.createElement(ImageGallery, {
        showPlayButton: false,
        showFullscreenButton: false,
        items: images,
        renderLeftNav: this.renderLeftNav,
        renderRightNav: this.renderRightNav
      }));
    }
  }]);
}(React.Component);
export { EDMSGalleria as default };