"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FileList.__proto__ || Object.getPrototypeOf(FileList)).call.apply(_ref, [this].concat(args))), _this), _this.mainDivStyle = {
            margin: 7,
            marginLeft: 10,
            marginBottom: 15,
            display: "flex"
        }, _this.filesLabelStyle = {
            width: 110,
            fontWeight: 500
        }, _this.filesStyle = {
            display: "flex",
            flexDirection: "column"

            //
            // HANDLERS
            //
        }, _this.generateFilesInfo = function () {
            return _this.props.files.map(function (file) {
                return _react2.default.createElement(
                    "div",
                    null,
                    file.name,
                    " (",
                    _this.bytesToSize(file.size),
                    ")"
                );
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    //
    // STYLES
    //


    _createClass(FileList, [{
        key: "bytesToSize",


        //
        // HELPER METHODS
        //
        value: function bytesToSize(bytes) {
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (bytes == 0) return '0 Byte';
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        }
    }, {
        key: "render",


        //
        // RENDER
        //
        value: function render() {
            return _react2.default.createElement(
                "div",
                { style: this.mainDivStyle },
                _react2.default.createElement(
                    "div",
                    { style: this.filesLabelStyle },
                    "Files:"
                ),
                _react2.default.createElement(
                    "div",
                    { style: this.filesStyle },
                    this.generateFilesInfo()
                )
            );
        }
    }]);

    return FileList;
}(_react.Component);

exports.default = FileList;