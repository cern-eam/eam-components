'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _library = require('@zxing/library');

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _mdiMaterialUi = require('mdi-material-ui');

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = require('@material-ui/core/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogActions = require('@material-ui/core/DialogActions');

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = require('@material-ui/core/DialogContent');

var _DialogContent2 = _interopRequireDefault(_DialogContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EAMBarcodeInput = function (_Component) {
    _inherits(EAMBarcodeInput, _Component);

    function EAMBarcodeInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EAMBarcodeInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EAMBarcodeInput.__proto__ || Object.getPrototypeOf(EAMBarcodeInput)).call.apply(_ref, [this].concat(args))), _this), _this.codeReader = null, _this.state = {
            open: false,
            showBarcodeButton: false
        }, _this.handleClickOpen = function () {
            _this.setState({ open: true });
        }, _this.handleClose = function () {
            _this.setState({ open: false });
            _this.codeReader.reset();
        }, _this.startDecoding = function (deviceId) {
            _this.codeReader.decodeFromInputVideoDevice(undefined, 'video').then(function (result) {
                _this.onDetectedCallback(result.text);
                _this.codeReader.reset();
                _this.handleClose();
            }).catch(function (err) {
                return console.error(err);
            });
        }, _this.onChangeHandler = function (value) {
            _this.props.updateProperty(_this.props.valueKey, value);
            if (_this.props.onChangeValue) {
                _this.props.onChangeValue(value);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EAMBarcodeInput, [{
        key: 'startScanner',
        value: function startScanner(onDetectedCallback, handleClose) {
            var _this2 = this;

            this.codeReader = new _library.BrowserMultiFormatReader();
            this.codeReader.listVideoInputDevices().then(function (videoInputDevices) {
                return _this2.startDecoding(videoInputDevices[0].deviceId);
            }).catch(function (err) {
                return console.error(err);
            });
        }
    }, {
        key: 'onDetectedCallback',
        value: function onDetectedCallback(result) {
            this.props.updateProperty(result);
            this.setState({ open: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var userMediaSupported = false;

            if (navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                userMediaSupported = true;
            }

            var style = {
                maxWidth: "320px",
                maxHeight: "320px",
                stretchOnPhone: true
            };

            var iconButtonStyle = {
                position: "absolute",
                top: this.props.top || 30,
                right: this.props.right || -2,
                backgroundColor: "white",
                width: 32,
                height: 32,
                zIndex: 100,
                padding: 0

                // Display just the children when no support for user media
            };if (!userMediaSupported) {
                return _react2.default.createElement(
                    'div',
                    { style: { position: "relative" } },
                    this.props.children
                );
            }

            // Active quagga when support for user media
            return _react2.default.createElement(
                'div',
                { style: { position: "relative" } },
                this.props.children,
                _react2.default.createElement(
                    _IconButton2.default,
                    { style: iconButtonStyle, onClick: this.handleClickOpen.bind(this) },
                    _react2.default.createElement(_mdiMaterialUi.BarcodeScan, null)
                ),
                _react2.default.createElement(
                    _Dialog2.default,
                    {
                        onEntered: function onEntered() {
                            return _this3.startScanner(_this3.onDetectedCallback.bind(_this3), _this3.handleClose.bind(_this3));
                        },
                        open: this.state.open,
                        onClose: this.handleClose,
                        'aria-labelledby': 'alert-dialog-title',
                        'aria-describedby': 'alert-dialog-description'
                    },
                    _react2.default.createElement(
                        _DialogContent2.default,
                        { style: { maxWidth: 320, maxHeight: 320 } },
                        _react2.default.createElement('video', { id: 'video', width: '200', height: '200' })
                    ),
                    _react2.default.createElement(
                        _DialogActions2.default,
                        null,
                        _react2.default.createElement(
                            _Button2.default,
                            { onClick: this.handleClose, color: 'primary', autoFocus: true },
                            'Cancel'
                        )
                    )
                )
            );
        }
    }]);

    return EAMBarcodeInput;
}(_react.Component);

exports.default = EAMBarcodeInput;