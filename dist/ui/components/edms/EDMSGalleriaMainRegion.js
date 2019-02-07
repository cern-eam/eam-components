"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _EDMSWidget = require("./EDMSWidget");

var _EDMSDragAndDropRegion = require("./EDMSDragAndDropRegion");

var _EDMSDragAndDropRegion2 = _interopRequireDefault(_EDMSDragAndDropRegion);

var _EDMSDisplayedFile = require("./EDMSDisplayedFile");

var _EDMSDisplayedFile2 = _interopRequireDefault(_EDMSDisplayedFile);

var _reactBlockUi = require("react-block-ui");

var _reactBlockUi2 = _interopRequireDefault(_reactBlockUi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var blockUiStyleDiv = {
    position: "absolute",
    top: '35%'
};

var EDMSGalleriaContainer = function (_React$Component) {
    _inherits(EDMSGalleriaContainer, _React$Component);

    function EDMSGalleriaContainer(props) {
        _classCallCheck(this, EDMSGalleriaContainer);

        return _possibleConstructorReturn(this, (EDMSGalleriaContainer.__proto__ || Object.getPrototypeOf(EDMSGalleriaContainer)).call(this, props));
    }

    _createClass(EDMSGalleriaContainer, [{
        key: "render",
        value: function render() {

            if (this.props.isLoading) {
                return _react2.default.createElement(
                    _reactBlockUi2.default,
                    { tag: "div", blocking: true, className: "galleriaContainer" },
                    _react2.default.createElement(
                        "div",
                        { style: blockUiStyleDiv },
                        _react2.default.createElement(
                            "p",
                            null,
                            this.props.loadingMessage
                        )
                    )
                );
            }

            return _react2.default.createElement(
                "div",
                { className: "galleriaContainer",
                    onTouchStart: this.onTouchStart.bind(this),
                    onTouchEnd: this.onTouchEnd.bind(this) },
                this.props.document.edmsId === _EDMSWidget.CREATE_NEW ? _react2.default.createElement(_EDMSDragAndDropRegion2.default, { fileUpload: this.props.fileUpload }) : _react2.default.createElement(_EDMSDisplayedFile2.default, {
                    document: this.props.document })
            );
        }
    }, {
        key: "onTouchStart",
        value: function onTouchStart(e) {
            this.initialTouchX = e.touches[0].clientX;
        }
    }, {
        key: "onTouchEnd",
        value: function onTouchEnd(e) {
            var deltaX = e.changedTouches[0].clientX - this.initialTouchX;

            // swiped left
            if (deltaX < 0) {
                this.props.swipeLeft();
            }

            // swiped right
            if (deltaX > 0) {
                this.props.swipeRight();
            }
        }
    }]);

    return EDMSGalleriaContainer;
}(_react2.default.Component);

exports.default = EDMSGalleriaContainer;
;