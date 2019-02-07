'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _plus = require('./img/plus.png');

var _plus2 = _interopRequireDefault(_plus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EDMSDragAndDropRegion = function (_React$Component) {
    _inherits(EDMSDragAndDropRegion, _React$Component);

    function EDMSDragAndDropRegion() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EDMSDragAndDropRegion);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EDMSDragAndDropRegion.__proto__ || Object.getPrototypeOf(EDMSDragAndDropRegion)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            containerClasses: 'galleriaDisplayedFile'
        }, _this.openSelectFileDialog = function () {
            var inputFile = document.getElementById('edmsInputHidden');
            inputFile.click();
        }, _this.uploadFile = function (event) {
            var inputFile = event.target;
            //Upload files
            _this.props.fileUpload(inputFile.files);
        }, _this.dragOverFiles = function (event) {
            event.preventDefault();
            //State
            _this.setState(function () {
                return {
                    containerClasses: 'galleriaDisplayedFile draggingFile'
                };
            });
        }, _this.dragLeaveFiles = function (event) {
            event.preventDefault();
            //State
            _this.setState(function () {
                return {
                    containerClasses: 'galleriaDisplayedFile'
                };
            });
        }, _this.dropFiles = function (event) {
            event.preventDefault();
            var files = event.dataTransfer.files;
            //State
            _this.setState(function () {
                return {
                    containerClasses: 'galleriaDisplayedFile'
                };
            });
            //Upload files
            _this.props.fileUpload(files);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EDMSDragAndDropRegion, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: {
                        backgroundImage: 'url(\'' + _plus2.default + '\')',
                        backgroundPosition: '50% 40%',
                        cursor: 'pointer'
                    }, className: this.state.containerClasses,
                    onClick: this.openSelectFileDialog,
                    onDragOver: this.dragOverFiles,
                    onDragLeave: this.dragLeaveFiles,
                    onDrop: this.dropFiles },
                _react2.default.createElement(
                    'div',
                    { className: 'filmStripContainer' },
                    _react2.default.createElement(
                        'h4',
                        { className: 'edmsContentHeader', onClick: this.openSelectFileDialog },
                        'Create new EDMS Document by selecting a file. (Click or drag-and-drop)'
                    )
                ),
                _react2.default.createElement('input', { type: 'file', style: { display: 'none' }, id: 'edmsInputHidden', onChange: this.uploadFile,
                    multiple: 'true' })
            );
        }
    }]);

    return EDMSDragAndDropRegion;
}(_react2.default.Component);

exports.default = EDMSDragAndDropRegion;