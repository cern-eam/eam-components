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
import Dropzone from 'react-dropzone';
import Tune from 'mdi-material-ui/Tune';
import ContentSaveOutline from 'mdi-material-ui/ContentSaveOutline';
import IconButton from '@mui/material/IconButton';
import FilePlus from 'mdi-material-ui/FilePlus';
import DotsVertial from 'mdi-material-ui/DotsVertical';
import NCRCreationProperties from "./NCRCreationProperties";
import FileList from "../../FileList";
import WSEDMS from "../../../../../tools/WSEDMS";
import EAMInput from "../../../inputs/EAMInput";
import EAMSelect from "../../../inputs/EAMSelect";
var NCRCreation = /*#__PURE__*/function (_Component) {
  function NCRCreation() {
    var _this;
    _classCallCheck(this, NCRCreation);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, NCRCreation, [].concat(args));
    _this.state = {
      files: [],
      title: "",
      type: "",
      description: "",
      NCRProperties: [],
      showNCRProperties: false,
      currentProperties: {},
      equipmentWorkOrders: {},
      NCRKeyWords: [],
      NCRKeyWord: "",
      currentEquipmentWorkOrder: null
    };
    //
    // STYLES
    //
    _this.mainDivStyle = {
      borderBottom: "1px solid rgb(238, 238, 238)",
      margin: 5,
      minHeight: '300px'
    };
    _this.newDocStyle = {
      display: "flex",
      alignItems: "center"
    };
    _this.idStyle = {
      margin: 5,
      marginLeft: 10,
      width: 100,
      flex: "0 0 auto",
      fontWeight: 500
    };
    _this.titleStyle = {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column"
    };
    _this.dropZoneStyle = {
      border: "1px solid white"
    };
    _this.dropZoneActiveStyle = {
      border: "1px dashed #a7a7a7"
    };
    _this.inputStyle = {
      flex: "1 1 auto",
      border: "1px solid #ced4da",
      padding: "5px 10px",
      fontSize: 16,
      transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      borderRadius: 4,
      backgroundColor: "#fff"
    };
    _this.computeNCRPropertiesButtonStyle = function () {
      return {
        color: _this.state.showNCRProperties ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
      };
    };
    //
    // HANDLERS
    //
    _this.createDocumentHandler = function (event) {
      var document = {
        title: _this.state.title + _this.state.NCRKeyWord,
        type: 'Report',
        description: _this.state.description,
        typeAtt1: 'Non Conformity',
        typeAttributes: 'Non Conformity',
        properties: {
          edms_property: _this.flattenProperties()
        }
      };

      // For Assets include the WO number
      if (_this.props.objectType === 'A' && _this.state.currentEquipmentWorkOrder) {
        var documentLink = {
          objectId: _this.state.equipmentWorkOrders[_this.state.currentEquipmentWorkOrder].woNumber,
          objectType: 'J'
        };
        _this.props.createDocument(document, _this.state.files, documentLink);
      } else {
        _this.props.createDocument(document, _this.state.files);
      }
    };
    _this.onFileDrop = function (acceptedFiles, rejectedFiles) {
      _this.setState({
        files: acceptedFiles
      });
    };
    _this.setStateProperty = function (key, value) {
      _this.setState(_defineProperty({}, key, value));
    };
    _this.getNCRKeyWords = function () {
      var _this$props = _this.props,
        objectType = _this$props.objectType,
        objectID = _this$props.objectID;
      WSEDMS.getNCRKeyWords(objectID).then(function (response) {
        _this.setStateProperty('NCRKeyWords', response.body.data);
      });
    };
    _this.getNCRProperties = function () {
      WSEDMS.getNCRProperties().then(function (response) {
        _this.setStateProperty('NCRProperties', response.body.data);
      });
    };
    _this.getEquipmentWorkOrders = function () {
      var _this$props2 = _this.props,
        objectType = _this$props2.objectType,
        objectID = _this$props2.objectID;
      WSEDMS.getEquipmentWorkOrders(objectType, objectID).then(function (response) {
        if (objectType === 'J' && Object.keys(response.body.data) && Object.keys(response.body.data).length > 0) {
          var equipmentWorkOrder = Object.keys(response.body.data).map(function (key) {
            return response.body.data[key];
          })[0];
          _this.setStateProperty('title', 'LHC-QN-' + equipmentWorkOrder.parentEqpCode + '-' + equipmentWorkOrder.stepDesc + '_');
        }
        _this.setStateProperty('equipmentWorkOrders', response.body.data);
      });
    };
    _this.setNCRPropertyValue = function (key, value) {
      _this.setState(function (prevstate) {
        return {
          currentProperties: _objectSpread({}, prevstate.currentProperties, _defineProperty({}, key, {
            name: key,
            value: value
          }))
        };
      });
    };
    _this.flattenProperties = function () {
      var props = _this.state.currentProperties;
      return Object.keys(props).map(function (key) {
        return props[key];
      });
    };
    _this.equipmentWorkOrderValues = function () {
      var values = Object.keys(_this.state.equipmentWorkOrders).map(function (key) {
        return {
          code: _this.state.equipmentWorkOrders[key].stepNumber,
          desc: _this.state.equipmentWorkOrders[key].stepNumber + ' - ' + _this.state.equipmentWorkOrders[key].woDesc
        };
      });
      return values;
    };
    _this.equipmentWorkOrdersHandler = function (key, value) {
      _this.setStateProperty('currentEquipmentWorkOrder', value);
      if (value) {
        _this.setStateProperty('title', 'LHC-QN-' + _this.state.equipmentWorkOrders[value].parentEqpCode + '-' + _this.state.equipmentWorkOrders[value].stepDesc + '_');
      }
    };
    _this.NCRKeyWordsHandler = function (key, value) {
      _this.setStateProperty('NCRKeyWord', value);
    };
    _this.getInputsProps = function () {
      var inputProps = {};
      if (_this.state.NCRKeyWords && _this.state.NCRKeyWords.length > 0) {
        inputProps.style = {
          width: 250,
          border: "0",
          backgroundColor: "white"
        };
      }
      return inputProps;
    };
    return _this;
  }
  _inherits(NCRCreation, _Component);
  return _createClass(NCRCreation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getNCRProperties();
      this.getEquipmentWorkOrders();
      this.getNCRKeyWords();
    }
  }, {
    key: "render",
    value:
    //
    // RENDER
    //
    function render() {
      var _this2 = this;
      return /*#__PURE__*/React.createElement("div", {
        style: this.mainDivStyle
      }, /*#__PURE__*/React.createElement(Dropzone, {
        style: this.dropZoneStyle,
        activeStyle: this.dropZoneActiveStyle,
        disableClick: true,
        onDrop: this.onFileDrop,
        ref: function ref(dropzone) {
          return _this2.dropzone = dropzone;
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: this.newDocStyle
      }, /*#__PURE__*/React.createElement("div", {
        style: this.titleStyle
      }, /*#__PURE__*/React.createElement(EAMInput, {
        label: "NCR Title:",
        value: this.state.title,
        valueKey: "title",
        disabled: this.state.NCRKeyWords && this.state.NCRKeyWords.length > 0,
        inputProps: this.getInputsProps(),
        updateProperty: function updateProperty(key, value) {
          return _this2.setStateProperty(key, value);
        }
      }), this.state.NCRKeyWords && this.state.NCRKeyWords.length > 0 && /*#__PURE__*/React.createElement("div", {
        style: {
          marginLeft: 148
        }
      }, /*#__PURE__*/React.createElement(EAMSelect, {
        searchable: true,
        value: this.state.NCRKeyWord,
        values: this.state.NCRKeyWords,
        updateProperty: this.NCRKeyWordsHandler
      }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IconButton, {
        onClick: function onClick() {
          return _this2.dropzone.open();
        }
      }, /*#__PURE__*/React.createElement(FilePlus, null))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IconButton, {
        onClick: this.createDocumentHandler
      }, /*#__PURE__*/React.createElement(ContentSaveOutline, null))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IconButton, {
        style: this.computeNCRPropertiesButtonStyle(),
        onClick: function onClick() {
          return _this2.setState({
            showNCRProperties: !_this2.state.showNCRProperties
          });
        }
      }, /*#__PURE__*/React.createElement(DotsVertial, null)))), this.state.files.length > 0 && /*#__PURE__*/React.createElement(FileList, {
        files: this.state.files
      }), /*#__PURE__*/React.createElement(EAMInput, {
        label: "Description",
        valueKey: "description",
        value: this.state.description,
        updateProperty: this.setStateProperty
      }), (this.props.objectType === 'A' || this.props.objectType === 'S') && /*#__PURE__*/React.createElement(EAMSelect, {
        label: "Work Orders",
        value: this.state.currentEquipmentWorkOrder,
        values: this.equipmentWorkOrderValues(),
        updateProperty: this.equipmentWorkOrdersHandler
      }), /*#__PURE__*/React.createElement(NCRCreationProperties, {
        onNCRPropertyChange: this.setNCRPropertyValue,
        onPropertyChange: this.setStateProperty,
        type: this.state.type,
        NCRProperties: this.state.NCRProperties,
        currentProperties: this.state.currentProperties,
        showNCRProperties: this.state.showNCRProperties
      })));
    }
  }]);
}(Component);
export default NCRCreation;