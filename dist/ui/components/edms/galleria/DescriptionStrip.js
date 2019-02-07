"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _EDMSUtils = require("./EDMSUtils");

var _EDMSUtils2 = _interopRequireDefault(_EDMSUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DescriptionStrip = function DescriptionStrip(file) {
    return _react2.default.createElement(
        "div",
        { className: "filmStripContainer" },
        _react2.default.createElement(
            "h4",
            { className: "edmsContentHeader" },
            "EDMS: ",
            _react2.default.createElement(
                "a",
                {
                    href: file.docUrl,
                    target: "_blank",
                    className: "edmsLink" },
                file.edmsId
            ),
            "\xA0\xA0\xA0\xA0 File: ",
            _react2.default.createElement(
                "a",
                { href: file.fullPath,
                    target: "_blank",
                    className: "edmsLink" },
                file.fileName
            )
        ),
        _react2.default.createElement(
            "p",
            { className: "edmsTitle" },
            "Title: ",
            _react2.default.createElement(
                "a",
                {
                    href: file.docUrl, target: "_blank",
                    className: "edmsLink" },
                file.description
            )
        )
    );
};

exports.default = DescriptionStrip;