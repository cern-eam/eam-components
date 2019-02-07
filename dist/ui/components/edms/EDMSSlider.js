"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _EDMSLeftArrow = require("./EDMSLeftArrow");

var _EDMSLeftArrow2 = _interopRequireDefault(_EDMSLeftArrow);

var _EDMSRightArrow = require("./EDMSRightArrow");

var _EDMSRightArrow2 = _interopRequireDefault(_EDMSRightArrow);

var _EDMSSliderItem = require("./EDMSSliderItem");

var _EDMSSliderItem2 = _interopRequireDefault(_EDMSSliderItem);

require("./edms.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EDMSSlider = function EDMSSlider(props) {
    return _react2.default.createElement(
        "div",
        { className: props.isLoading ? 'edmsSliderStyleLoading' : 'edmsSliderStyle' },
        _react2.default.createElement(
            "div",
            { className: "leftArrow" },
            _react2.default.createElement(
                "div",
                { className: "arrowBox" },
                _react2.default.createElement(_EDMSLeftArrow2.default, { onClick: props.rightArrowClick })
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "sliderImageContainer", id: "sliderImageContainer" },
            _react2.default.createElement(
                "ul",
                { className: "sliderImageContainerList" },
                props.documents.map(function (document) {
                    return _react2.default.createElement(
                        "li",
                        { key: "slideImgLi_" + document.innerId + "_" + document.fileName,
                            className: "sliderImageContainerElement" },
                        _react2.default.createElement(_EDMSSliderItem2.default, { key: "slideImg_" + document.innerId + "_" + document.fileName,
                            document: document,
                            onClick: function onClick(e) {
                                return props.onSliderItemClick(document);
                            },
                            selected: document === props.documents[props.selectedItemIndex] })
                    );
                })
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "rightArrow" },
            _react2.default.createElement(
                "div",
                { className: "arrowBox" },
                _react2.default.createElement(_EDMSRightArrow2.default, { onClick: props.leftArrowClick })
            )
        )
    );
};
exports.default = EDMSSlider;