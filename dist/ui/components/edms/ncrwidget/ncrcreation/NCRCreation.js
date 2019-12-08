"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _Tune = _interopRequireDefault(require("mdi-material-ui/Tune"));

var _ContentSaveOutline = _interopRequireDefault(require("mdi-material-ui/ContentSaveOutline"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _FilePlus = _interopRequireDefault(require("mdi-material-ui/FilePlus"));

var _DotsVertical = _interopRequireDefault(require("mdi-material-ui/DotsVertical"));

var _NCRCreationProperties = _interopRequireDefault(require("./NCRCreationProperties"));

var _FileList = _interopRequireDefault(require("../../FileList"));

var _WSEDMS = _interopRequireDefault(require("../../../../../tools/WSEDMS"));

var _EAMInput = _interopRequireDefault(require("../../../inputs/EAMInput"));

var _EAMSelect = _interopRequireDefault(require("../../../inputs/EAMSelect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NCRCreation =
/*#__PURE__*/
function (_Component) {
  _inherits(NCRCreation, _Component);

  function NCRCreation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NCRCreation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NCRCreation)).call.apply(_getPrototypeOf2, [this].concat(args)));
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
      borderBottom: "3px solid rgb(238, 238, 238)",
      borderTop: "2px solid rgb(238, 238, 238)",
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
      }; // For Assets include the WO number

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

      _WSEDMS["default"].getNCRKeyWords(objectID).then(function (response) {
        _this.setStateProperty('NCRKeyWords', response.body.data);
      });
    };

    _this.getNCRProperties = function () {
      _WSEDMS["default"].getNCRProperties().then(function (response) {
        _this.setStateProperty('NCRProperties', response.body.data);
      });
    };

    _this.getEquipmentWorkOrders = function () {
      var _this$props2 = _this.props,
          objectType = _this$props2.objectType,
          objectID = _this$props2.objectID;

      _WSEDMS["default"].getEquipmentWorkOrders(objectType, objectID).then(function (response) {
        if (objectType === 'J' && Object.keys(response.body.data) && Object.keys(response.body.data).length > 0) {
          var equipmentWorkOrder = Object.keys(response.body.data).map(function (key) {
            return response.body.data[key];
          })[0];

          _this.setStateProperty('title', 'LHC-QN-' + equipmentWorkOrder.parentEqpCode + '-' + equipmentWorkOrder.stepDesc + '_');

          console.log('title', 'LHC-QN-' + equipmentWorkOrder.parentEqpCode + '-' + equipmentWorkOrder.stepDesc + '_');
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
    } //
    // STYLES
    //

  }, {
    key: "render",
    //
    // RENDER
    //
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("div", {
        style: this.mainDivStyle
      }, _react["default"].createElement(_reactDropzone["default"], {
        style: this.dropZoneStyle,
        activeStyle: this.dropZoneActiveStyle,
        disableClick: true,
        onDrop: this.onFileDrop,
        ref: function ref(dropzone) {
          return _this2.dropzone = dropzone;
        }
      }, _react["default"].createElement("div", {
        style: this.newDocStyle
      }, _react["default"].createElement("div", {
        style: this.titleStyle
      }, _react["default"].createElement(_EAMInput["default"], {
        label: "NCR Title:",
        value: this.state.title,
        valueKey: "title",
        disabled: this.state.NCRKeyWords && this.state.NCRKeyWords.length > 0,
        inputProps: this.getInputsProps(),
        updateProperty: function updateProperty(key, value) {
          return _this2.setStateProperty(key, value);
        }
      }), this.state.NCRKeyWords && this.state.NCRKeyWords.length > 0 && _react["default"].createElement("div", {
        style: {
          marginLeft: 148
        }
      }, _react["default"].createElement(_EAMSelect["default"], {
        searchable: true,
        value: this.state.NCRKeyWord,
        values: this.state.NCRKeyWords,
        updateProperty: this.NCRKeyWordsHandler
      }))), _react["default"].createElement("div", null, _react["default"].createElement(_IconButton["default"], {
        onClick: function onClick() {
          return _this2.dropzone.open();
        }
      }, _react["default"].createElement(_FilePlus["default"], null))), _react["default"].createElement("div", null, _react["default"].createElement(_IconButton["default"], {
        onClick: this.createDocumentHandler
      }, _react["default"].createElement(_ContentSaveOutline["default"], null))), _react["default"].createElement("div", null, _react["default"].createElement(_IconButton["default"], {
        style: this.computeNCRPropertiesButtonStyle(),
        onClick: function onClick() {
          return _this2.setState({
            showNCRProperties: !_this2.state.showNCRProperties
          });
        }
      }, _react["default"].createElement(_DotsVertical["default"], null)))), this.state.files.length > 0 && _react["default"].createElement(_FileList["default"], {
        files: this.state.files
      }), _react["default"].createElement(_EAMInput["default"], {
        label: "Description",
        valueKey: "description",
        value: this.state.description,
        updateProperty: this.setStateProperty
      }), (this.props.objectType === 'A' || this.props.objectType === 'S') && _react["default"].createElement(_EAMSelect["default"], {
        label: "Work Orders",
        value: this.state.currentEquipmentWorkOrder,
        values: this.equipmentWorkOrderValues(),
        updateProperty: this.equipmentWorkOrdersHandler
      }), _react["default"].createElement(_NCRCreationProperties["default"], {
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
}(_react.Component);

var _default = NCRCreation;
exports["default"] = _default;