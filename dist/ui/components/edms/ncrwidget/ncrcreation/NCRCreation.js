function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
  _inherits(NCRCreation, _Component);
  var _super = _createSuper(NCRCreation);
  function NCRCreation() {
    var _this;
    _classCallCheck(this, NCRCreation);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
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
    _this.mainDivStyle = {
      borderBottom: "1px solid rgb(238, 238, 238)",
      margin: 5
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
  _createClass(NCRCreation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getNCRProperties();
      this.getEquipmentWorkOrders();
      this.getNCRKeyWords();
    }

    //
    // STYLES
    //
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
  return NCRCreation;
}(Component);
export default NCRCreation;