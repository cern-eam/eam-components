'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mdiMaterialUi = require('mdi-material-ui');

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FileList = require('./FileList');

var _FileList2 = _interopRequireDefault(_FileList);

var _MoreDetailsList = require('./MoreDetailsList');

var _MoreDetailsList2 = _interopRequireDefault(_MoreDetailsList);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _StatusBox = require('./StatusBox');

var _StatusBox2 = _interopRequireDefault(_StatusBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DocumentRow = function (_Component) {
    _inherits(DocumentRow, _Component);

    function DocumentRow() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DocumentRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DocumentRow.__proto__ || Object.getPrototypeOf(DocumentRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            filesVisible: false

            //
            // STYLES
            //

        }, _this.docStyle = {
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #e0e0e0"
        }, _this.idStyle = {
            margin: 7,
            marginLeft: 10,
            width: 100,
            flex: "0 0 auto"
        }, _this.idLinkStyle = {
            textDecoration: 'none'
        }, _this.titleStyle = {
            margin: 5,
            flexGrow: 1
        }, _this.statusStyle = {
            margin: 5,
            width: 110,
            flex: "0 0 auto",
            display: 'flex',
            alignItems: "center"
        }, _this.morePanelStyle = {
            backgroundColor: 'transparent',
            borderTop: '1px solid #e0e0e0',
            borderBottom: '2px solid #e0e0e0'
        }, _this.computeDropZoneStyle = function () {
            return {
                border: "1px solid transparent",
                backgroundColor: _this.props.index % 2 ? 'rgb(250, 250, 250)' : 'white'
            };
        }, _this.computeDropZoneActiveStyle = function () {
            return {
                border: "1px dashed #a7a7a7",
                backgroundColor: _this.props.index % 2 ? 'rgb(250, 250, 250)' : 'white'
            };
        }, _this.computeStatusBox = function (status) {
            var statusColor = '';
            switch (status) {
                case 'In Work':
                    statusColor = 'rgb(204, 0, 0)';
                    break;
                case 'Draft For Discussion':
                    statusColor = 'rgb(255, 240, 0)';
                    break;
                case 'Released':
                    statusColor = 'rgb(0, 204, 0)';
                    break;
                default:
                    statusColor = 'rgb(119, 119, 119)';
            }
            return _react2.default.createElement(_StatusBox2.default, { color: statusColor });
        }, _this.stopPropagation = function (event) {
            event.stopPropagation();
        }, _this.onFileDrop = function (acceptedFiles, rejectedFiles) {
            if (acceptedFiles.length > 0) _this.props.filesUploadHandler(_this.props.document.edmsId, _this.props.document.version, acceptedFiles);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DocumentRow, [{
        key: 'computeFilesButtonStyle',
        value: function computeFilesButtonStyle() {
            if (this.props.document.files.length === 0) return {
                color: 'rgba(0, 0, 0, 0.20)'
            };else return {
                color: this.state.filesVisible ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
            };
        }

        //
        // DropZone handling
        //

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactDropzone2.default,
                { style: this.computeDropZoneStyle(),
                    activeStyle: this.computeDropZoneActiveStyle(),
                    onDrop: this.onFileDrop,
                    disableClick: true,
                    ref: function ref(dropzone) {
                        return _this2.dropzone = dropzone;
                    } },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { style: this.docStyle },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _IconButton2.default,
                                { onClick: function onClick() {
                                        return _this2.setState({ filesVisible: !_this2.state.filesVisible });
                                    },
                                    style: this.computeFilesButtonStyle() },
                                this.state.filesVisible ? _react2.default.createElement(_mdiMaterialUi.ChevronDown, null) : _react2.default.createElement(_mdiMaterialUi.ChevronRight, null)
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: this.idStyle },
                            _react2.default.createElement(
                                'a',
                                { style: this.idLinkStyle, href: this.props.document.url, target: '_blank', onClick: this.stopPropagation },
                                ' ',
                                this.props.document.edmsId + ' v.' + this.props.document.version,
                                ' '
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: this.titleStyle },
                            this.props.document.title
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: this.statusStyle },
                            this.computeStatusBox(this.props.document.status),
                            this.props.document.status
                        )
                    ),
                    this.state.filesVisible && _react2.default.createElement(
                        'div',
                        { style: this.morePanelStyle },
                        this.props.document.properties.edms_property && _react2.default.createElement(_MoreDetailsList2.default, { details: this.props.document.properties.edms_property }),
                        _react2.default.createElement(_FileList2.default, { files: this.props.document.files,
                            dropzone: this.dropzone })
                    )
                )
            );
        }
    }]);

    return DocumentRow;
}(_react.Component);

exports.default = DocumentRow;