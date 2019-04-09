'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ImageFilter = require('mdi-material-ui/ImageFilter');

var _ImageFilter2 = _interopRequireDefault(_ImageFilter);

var _FormatListBulleted = require('mdi-material-ui/FormatListBulleted');

var _FormatListBulleted2 = _interopRequireDefault(_FormatListBulleted);

var _PlusBox = require('mdi-material-ui/PlusBox');

var _PlusBox2 = _interopRequireDefault(_PlusBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EDMSWidgetToolbar = function (_Component) {
    _inherits(EDMSWidgetToolbar, _Component);

    function EDMSWidgetToolbar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EDMSWidgetToolbar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EDMSWidgetToolbar.__proto__ || Object.getPrototypeOf(EDMSWidgetToolbar)).call.apply(_ref, [this].concat(args))), _this), _this.mainDivStyle = {
            width: "100%",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fafafa",
            height: 50,
            borderBottom: "1px solid rgb(238, 238, 238)"
        }, _this.separatorStyle = {
            flex: "1 1 auto"
        }, _this.computeDocumentCreationStyle = function () {
            return {
                color: _this.props.documentCreationVisible ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
            };
        }, _this.computeGalleriaButtonStyle = function () {
            return {
                color: _this.props.currentView === 'GALLERIA' ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
            };
        }, _this.computeDoclistButtonStyle = function () {
            return {
                color: _this.props.currentView === 'DOCLIST' ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    //
    // STYLES
    //


    _createClass(EDMSWidgetToolbar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: this.mainDivStyle },
                !this.props.documentCreationDisabled && _react2.default.createElement(
                    _IconButton2.default,
                    { onClick: this.props.documentCreationHandler,
                        style: this.computeDocumentCreationStyle() },
                    _react2.default.createElement(_PlusBox2.default, null)
                ),
                _react2.default.createElement('div', { style: this.separatorStyle }),
                _react2.default.createElement(
                    _IconButton2.default,
                    { onClick: this.props.doclistClickHandler,
                        style: this.computeDoclistButtonStyle() },
                    _react2.default.createElement(_FormatListBulleted2.default, null)
                ),
                _react2.default.createElement(
                    _IconButton2.default,
                    { onClick: this.props.galleriaClickHandler,
                        style: this.computeGalleriaButtonStyle() },
                    _react2.default.createElement(_ImageFilter2.default, null)
                )
            );
        }
    }]);

    return EDMSWidgetToolbar;
}(_react.Component);

exports.default = EDMSWidgetToolbar;