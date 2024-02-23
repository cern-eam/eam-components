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
import EAMSelect from "../../../inputs/EAMSelect";
import EAMInput from "../../../inputs/EAMInput";
var COMBOBOX = 'COMBOBOX';
var NCRCreationProperties = /*#__PURE__*/function (_Component) {
  _inherits(NCRCreationProperties, _Component);
  function NCRCreationProperties() {
    var _this;
    _classCallCheck(this, NCRCreationProperties);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, NCRCreationProperties, [].concat(args));
    //
    // STYLES
    //
    _this.inputStyle = {
      flex: "1 1 auto",
      border: "1px solid #ced4da",
      padding: "5px 10px",
      fontSize: 16,
      transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      borderRadius: 4,
      backgroundColor: "#fff",
      marginTop: 5,
      marginBottom: 5
    };
    _this.computeMainDivStyle = function () {
      return {
        display: _this.props.showNCRProperties ? "flex" : "none",
        flexDirection: "column"
      };
    };
    _this.optionsStyle = {
      display: "flex",
      flexDirection: "column"
    };
    _this.generatePropertyList = function (properties) {
      return properties.map(function (property) {
        if (property.displayType === COMBOBOX) {
          var propValues = property.listOfValues.value.map(function (value) {
            return {
              code: value,
              desc: value
            };
          });
          return /*#__PURE__*/React.createElement(EAMSelect, {
            label: property.label,
            required: property.mandatory,
            valueKey: property.name,
            value: _this.props.currentProperties[property.name] && _this.props.currentProperties[property.name].value || '',
            values: propValues,
            updateProperty: function updateProperty(key, value) {
              return _this.props.onNCRPropertyChange(key, value);
            }
          });
        } else {
          return /*#__PURE__*/React.createElement(EAMInput, {
            label: property.label,
            required: property.mandatory,
            valueKey: property.name,
            value: _this.props.currentProperties[property.name] && _this.props.currentProperties[property.name].value || '',
            updateProperty: function updateProperty(key, value) {
              return _this.props.onNCRPropertyChange(key, value);
            }
          });
        }
      });
    };
    return _this;
  }
  _createClass(NCRCreationProperties, [{
    key: "render",
    value:
    //
    // RENDER
    //
    function render() {
      return /*#__PURE__*/React.createElement("div", {
        style: this.computeMainDivStyle()
      }, /*#__PURE__*/React.createElement("div", {
        style: this.optionsStyle
      }, this.generatePropertyList(this.props.NCRProperties)));
    }
  }]);
  return NCRCreationProperties;
}(Component);
export default NCRCreationProperties;