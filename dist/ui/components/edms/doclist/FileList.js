'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FileRow = require('./FileRow');

var _FileRow2 = _interopRequireDefault(_FileRow);

var _FilePlus = require('mdi-material-ui/FilePlus');

var _FilePlus2 = _interopRequireDefault(_FilePlus);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileList = function (_Component) {
    _inherits(FileList, _Component);

    function FileList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, FileList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FileList.__proto__ || Object.getPrototypeOf(FileList)).call.apply(_ref, [this].concat(args))), _this), _this.fileAttachmentStyle = {
            position: "absolute",
            right: 0,
            top: 0
        }, _this.fileListStyle = {
            position: "relative",
            borderTop: "1px solid #e0e0e0",
            minHeight: 40,
            wordBreak: "break-all",
            paddingRight: 40
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(FileList, [{
        key: 'generateFileList',
        value: function generateFileList() {
            if (this.props.files) {
                return this.props.files.map(function (file) {
                    return _react2.default.createElement(_FileRow2.default, { file: file });
                });
            } else {
                return _react2.default.createElement(
                    'h6',
                    null,
                    'No docs yet'
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { style: this.fileListStyle },
                _react2.default.createElement(
                    'div',
                    { style: this.fileAttachmentStyle },
                    _react2.default.createElement(
                        _IconButton2.default,
                        { style: { color: "rgb(0, 170, 255)" },
                            onClick: function onClick() {
                                return _this2.props.dropzone.open();
                            } },
                        _react2.default.createElement(_FilePlus2.default, null)
                    )
                ),
                this.generateFileList()
            );
        }
    }]);

    return FileList;
}(_react.Component);

exports.default = FileList;