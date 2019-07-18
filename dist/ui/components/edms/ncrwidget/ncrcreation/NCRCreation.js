'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _Tune = require('mdi-material-ui/Tune');

var _Tune2 = _interopRequireDefault(_Tune);

var _ContentSaveOutline = require('mdi-material-ui/ContentSaveOutline');

var _ContentSaveOutline2 = _interopRequireDefault(_ContentSaveOutline);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FilePlus = require('mdi-material-ui/FilePlus');

var _FilePlus2 = _interopRequireDefault(_FilePlus);

var _DotsVertical = require('mdi-material-ui/DotsVertical');

var _DotsVertical2 = _interopRequireDefault(_DotsVertical);

var _NCRCreationProperties = require('./NCRCreationProperties');

var _NCRCreationProperties2 = _interopRequireDefault(_NCRCreationProperties);

var _FileList = require('../../FileList');

var _FileList2 = _interopRequireDefault(_FileList);

var _WSEDMS = require('../../../../../tools/WSEDMS');

var _WSEDMS2 = _interopRequireDefault(_WSEDMS);

var _EAMInput = require('../../../inputs/EAMInput');

var _EAMInput2 = _interopRequireDefault(_EAMInput);

var _EAMSelect = require('../../../inputs/EAMSelect');

var _EAMSelect2 = _interopRequireDefault(_EAMSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NCRCreation = function (_Component) {
    _inherits(NCRCreation, _Component);

    function NCRCreation() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NCRCreation);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NCRCreation.__proto__ || Object.getPrototypeOf(NCRCreation)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            files: [],
            title: "",
            type: "",
            description: "",
            NCRProperties: [],
            showNCRProperties: false,
            currentProperties: {},
            equipmentWorkOrders: {},
            currentEquipmentWorkOrder: null
        }, _this.mainDivStyle = {
            borderBottom: "3px solid rgb(238, 238, 238)",
            borderTop: "2px solid rgb(238, 238, 238)",
            margin: 5
        }, _this.newDocStyle = {
            display: "flex",
            alignItems: "center"
        }, _this.idStyle = {
            margin: 5,
            marginLeft: 10,
            width: 100,
            flex: "0 0 auto",
            fontWeight: 500
        }, _this.titleStyle = {
            flexGrow: 1,
            display: "flex"
        }, _this.dropZoneStyle = {
            border: "1px solid white"
        }, _this.dropZoneActiveStyle = {
            border: "1px dashed #a7a7a7"
        }, _this.inputStyle = {
            flex: "1 1 auto",
            border: "1px solid #ced4da",
            padding: "5px 10px",
            fontSize: 16,
            transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            borderRadius: 4,
            backgroundColor: "#fff"
        }, _this.computeNCRPropertiesButtonStyle = function () {
            return {
                color: _this.state.showNCRProperties ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
            };
        }, _this.createDocumentHandler = function (event) {
            var document = {
                title: _this.state.title,
                type: 'Report',
                description: _this.state.description,
                typeAtt1: 'Non Conformity',
                typeAttributes: 'Non Conformity',
                properties: {
                    edms_property: _this.flattenProperties()
                }

                // For Assets include the WO number
            };if (_this.props.objectType === 'A' && _this.state.currentEquipmentWorkOrder) {
                var documentLink = {
                    objectId: _this.state.equipmentWorkOrders[_this.state.currentEquipmentWorkOrder].woNumber,
                    objectType: 'J'
                };
                _this.props.createDocument(document, _this.state.files, documentLink);
            } else {
                _this.props.createDocument(document, _this.state.files);
            }
        }, _this.onFileDrop = function (acceptedFiles, rejectedFiles) {
            _this.setState({ files: acceptedFiles });
        }, _this.setStateProperty = function (key, value) {
            _this.setState(_defineProperty({}, key, value));
        }, _this.getNCRProperties = function () {
            _WSEDMS2.default.getNCRProperties().then(function (response) {
                _this.setStateProperty('NCRProperties', response.body.data);
            });
        }, _this.getEquipmentWorkOrders = function () {
            var _this$props = _this.props,
                objectType = _this$props.objectType,
                objectID = _this$props.objectID;

            _WSEDMS2.default.getEquipmentWorkOrders(objectType, objectID).then(function (response) {
                if (objectType === 'J' && Object.keys(response.body.data) && Object.keys(response.body.data).length > 0) {
                    var equipmentWorkOrder = Object.keys(response.body.data).map(function (key) {
                        return response.body.data[key];
                    })[0];
                    _this.setStateProperty('title', 'LHC-QN-' + equipmentWorkOrder.parentEqpCode + '-' + equipmentWorkOrder.stepDesc + '_');
                }
                _this.setStateProperty('equipmentWorkOrders', response.body.data);
            });
        }, _this.setNCRPropertyValue = function (key, value) {
            _this.setState(function (prevstate) {
                return {
                    currentProperties: _extends({}, prevstate.currentProperties, _defineProperty({}, key, {
                        name: key,
                        value: value
                    }))
                };
            });
        }, _this.flattenProperties = function () {
            var props = _this.state.currentProperties;
            return Object.keys(props).map(function (key) {
                return props[key];
            });
        }, _this.equipmentWorkOrderValues = function () {
            var values = Object.keys(_this.state.equipmentWorkOrders).map(function (key) {
                return {
                    code: _this.state.equipmentWorkOrders[key].stepNumber,
                    desc: _this.state.equipmentWorkOrders[key].stepNumber + ' - ' + _this.state.equipmentWorkOrders[key].woDesc };
            });
            return values;
        }, _this.equipmentWorkOrdersHandler = function (key, value) {
            _this.setStateProperty('currentEquipmentWorkOrder', value);
            if (value) {
                _this.setStateProperty('title', 'LHC-QN-' + _this.state.equipmentWorkOrders[value].parentEqpCode + '-' + _this.state.equipmentWorkOrders[value].stepDesc + '_');
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NCRCreation, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getNCRProperties();
            this.getEquipmentWorkOrders();
        }

        //
        // STYLES
        //


        //
        // HANDLERS
        //

    }, {
        key: 'render',


        //
        // RENDER
        //
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { style: this.mainDivStyle },
                _react2.default.createElement(
                    _reactDropzone2.default,
                    { style: this.dropZoneStyle,
                        activeStyle: this.dropZoneActiveStyle,
                        disableClick: true,
                        onDrop: this.onFileDrop,
                        ref: function ref(dropzone) {
                            return _this2.dropzone = dropzone;
                        } },
                    _react2.default.createElement(
                        'div',
                        { style: this.newDocStyle },
                        _react2.default.createElement(
                            'div',
                            { style: this.titleStyle },
                            _react2.default.createElement(_EAMInput2.default, { label: 'NCR Title:',
                                value: this.state.title,
                                valueKey: 'title',
                                updateProperty: function updateProperty(key, value) {
                                    return _this2.setStateProperty(key, value);
                                } })
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _IconButton2.default,
                                { onClick: function onClick() {
                                        return _this2.dropzone.open();
                                    } },
                                _react2.default.createElement(_FilePlus2.default, null)
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _IconButton2.default,
                                { onClick: this.createDocumentHandler },
                                _react2.default.createElement(_ContentSaveOutline2.default, null)
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _IconButton2.default,
                                { style: this.computeNCRPropertiesButtonStyle(),
                                    onClick: function onClick() {
                                        return _this2.setState({ showNCRProperties: !_this2.state.showNCRProperties });
                                    } },
                                _react2.default.createElement(_DotsVertical2.default, null)
                            )
                        )
                    ),
                    this.state.files.length > 0 && _react2.default.createElement(_FileList2.default, { files: this.state.files }),
                    _react2.default.createElement(_EAMInput2.default, { label: 'Description',
                        valueKey: 'description',
                        value: this.state.description,
                        updateProperty: this.setStateProperty
                    }),
                    (this.props.objectType === 'A' || this.props.objectType === 'S') && _react2.default.createElement(_EAMSelect2.default, { label: 'Work Orders',
                        value: this.state.currentEquipmentWorkOrder,
                        values: this.equipmentWorkOrderValues(),
                        updateProperty: this.equipmentWorkOrdersHandler }),
                    _react2.default.createElement(_NCRCreationProperties2.default, { onNCRPropertyChange: this.setNCRPropertyValue,
                        onPropertyChange: this.setStateProperty,
                        type: this.state.type,
                        NCRProperties: this.state.NCRProperties,
                        currentProperties: this.state.currentProperties,
                        showNCRProperties: this.state.showNCRProperties })
                )
            );
        }
    }]);

    return NCRCreation;
}(_react.Component);

exports.default = NCRCreation;