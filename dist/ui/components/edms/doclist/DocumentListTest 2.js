'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTable = require('react-table');

var _reactTable2 = _interopRequireDefault(_reactTable);

require('react-table/react-table.css');

var _StatusBox = require('./StatusBox');

var _StatusBox2 = _interopRequireDefault(_StatusBox);

var _EDMSUtils = require('../utils/EDMSUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DocumentListTest = function (_Component) {
    _inherits(DocumentListTest, _Component);

    function DocumentListTest() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DocumentListTest);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DocumentListTest.__proto__ || Object.getPrototypeOf(DocumentListTest)).call.apply(_ref, [this].concat(args))), _this), _this.thumbnailStyle = {
            maxWidth: 90,
            maxHeight: 90
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
            _this.props.filesUploadHandler(_this.props.document.edmsId, _this.props.document.version, acceptedFiles);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    //
    // DropZone handling
    //

    _createClass(DocumentListTest, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reactTable2.default, {
                    data: this.props.documents,
                    noDataText: 'No documents found',
                    columns: [{
                        Header: 'Id',
                        accessor: 'edmsId',
                        maxWidth: 100,
                        Cell: function Cell(cellInfo) {
                            return _react2.default.createElement(
                                'a',
                                { href: cellInfo.original.url, target: '_blank', onClick: _this2.stopPropagation },
                                ' ',
                                cellInfo.original.edmsId + ' v.' + cellInfo.original.version,
                                ' '
                            );
                        }
                    }, {
                        Header: 'Title',
                        accessor: 'title'
                    }, {
                        Header: 'Status',
                        accessor: 'status',
                        maxWidth: 150,
                        Cell: function Cell(row) {
                            return _react2.default.createElement(
                                'span',
                                null,
                                _this2.computeStatusBox(row.value),
                                row.value
                            );
                        }
                    }],
                    defaultPageSize: 10,
                    className: '-striped -highlight',
                    SubComponent: function SubComponent(cellInfo) {
                        return _react2.default.createElement(
                            'div',
                            { style: { padding: "20px" } },
                            _react2.default.createElement(_reactTable2.default, {
                                data: cellInfo.original.properties.edms_property === null ? [] : cellInfo.original.properties.edms_property,
                                noDataText: 'No details for this document',
                                columns: [{
                                    Header: 'Properties',
                                    columns: [{
                                        Header: 'Name',
                                        accessor: 'name'
                                    }, {
                                        Header: 'Value',
                                        accessor: 'value'
                                    }]
                                }],
                                defaultPageSize: 5,
                                showPagination: false,
                                style: {
                                    height: "200px"
                                }
                            }),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(_reactTable2.default, {
                                data: cellInfo.original.files,
                                noDataText: 'No files in this document',
                                columns: [{
                                    Header: 'File',
                                    columns: [{
                                        Header: 'Thumbnail',
                                        accessor: 'edmsId',
                                        width: 100,
                                        Cell: function Cell(cellInfo) {
                                            return _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement('img', { style: _this2.thumbnailStyle,
                                                    id: cellInfo.original.edmsId + "###" + cellInfo.original.innerId,
                                                    src: (0, _EDMSUtils.getEDMSFileUrl)(cellInfo.original) })
                                            );
                                        }
                                    }, {
                                        Header: 'Name',
                                        accessor: 'fileName',
                                        Cell: function Cell(cellInfo) {
                                            return _react2.default.createElement(
                                                'a',
                                                { href: cellInfo.original.fullPath, target: '_blank' },
                                                cellInfo.original.fileName
                                            );
                                        }
                                    }]
                                }],
                                defaultPageSize: 5,
                                showPagination: false,
                                style: {
                                    height: "200px"
                                }
                            })
                        );
                    }
                })
            );
        }
    }]);

    return DocumentListTest;
}(_react.Component);

exports.default = DocumentListTest;