'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _DocumentCreationOptions = require('./DocumentCreationOptions');

var _DocumentCreationOptions2 = _interopRequireDefault(_DocumentCreationOptions);

var _FileList = require('../../FileList');

var _FileList2 = _interopRequireDefault(_FileList);

var _EAMInput = require('../../../inputs/EAMInput');

var _EAMInput2 = _interopRequireDefault(_EAMInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DocumentCreation = function (_Component) {
    _inherits(DocumentCreation, _Component);

    function DocumentCreation() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DocumentCreation);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DocumentCreation.__proto__ || Object.getPrototypeOf(DocumentCreation)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            optionsVisible: false,
            files: [],
            title: "",
            type: "",
            description: ""
        }, _this.mainDivStyle = {
            borderBottom: "3px solid rgb(238, 238, 238)",
            borderTop: "2px solid rgb(238, 238, 238)"
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
            margin: 5,
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
        }, _this.optionsClickerHandler = function (event) {
            event.stopPropagation();
            _this.setState({ optionsVisible: !_this.state.optionsVisible });
        }, _this.createDocumentHandler = function (event) {
            var document = {
                title: _this.state.title,
                type: 'Report',
                description: _this.state.description
            };
            _this.props.createDocument(document, _this.state.files);
        }, _this.onFileDrop = function (acceptedFiles, rejectedFiles) {
            _this.setState({ files: acceptedFiles });
        }, _this.setStateProperty = function (key, value) {
            _this.setState(_defineProperty({}, key, value));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    //
    // STYLES
    //


    _createClass(DocumentCreation, [{
        key: 'computeOptionsButtonStyle',
        value: function computeOptionsButtonStyle() {
            return {
                color: this.state.optionsVisible ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
            };
        }

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
                            _react2.default.createElement(_EAMInput2.default, { label: 'New Document:',
                                placeholder: 'Title',
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
                                { onClick: this.createDocumentHandler,
                                    disabled: this.state.files.length === 0 },
                                _react2.default.createElement(_ContentSaveOutline2.default, null)
                            )
                        )
                    ),
                    this.state.files.length > 0 && _react2.default.createElement(_FileList2.default, { files: this.state.files }),
                    this.state.optionsVisible && _react2.default.createElement(_DocumentCreationOptions2.default, { onPropertyChange: this.setStateProperty,
                        type: this.state.type,
                        description: this.state.description })
                )
            );
        }
    }]);

    return DocumentCreation;
}(_react.Component);

exports.default = DocumentCreation;