"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _EDMSUtils = require("./EDMSUtils");

var _EDMSUtils2 = _interopRequireDefault(_EDMSUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EDMSDisplayedFile = function EDMSDisplayedFile(props) {
    return _react2.default.createElement(
        "div",
        { className: "galleriaDisplayedFile",
            onDoubleClick: function onDoubleClick(e) {
                return window.open(props.document.fullPath, '_blank');
            } },
        _react2.default.createElement("img", { className: "galleriaImage", src: (0, _EDMSUtils2.default)(props.document), alt: props.document.description }),
        _react2.default.createElement(
            "div",
            { className: "filmStripContainer" },
            _react2.default.createElement(
                "h4",
                { className: "edmsContentHeader" },
                "EDMS: ",
                _react2.default.createElement(
                    "a",
                    {
                        href: props.document.docUrl,
                        target: "_blank",
                        className: "edmsLink" },
                    props.document.edmsId
                ),
                "\xA0\xA0\xA0\xA0 File: ",
                _react2.default.createElement(
                    "a",
                    { href: props.document.fullPath,
                        target: "_blank",
                        className: "edmsLink" },
                    props.document.fileName
                )
            ),
            _react2.default.createElement(
                "p",
                { className: "edmsTitle" },
                "Title: ",
                _react2.default.createElement(
                    "a",
                    {
                        href: props.document.docUrl, target: "_blank",
                        className: "edmsLink" },
                    props.document.description
                )
            )
        )
    );
};

exports.default = EDMSDisplayedFile;