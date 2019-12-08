"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentUser = function CommentUser(props) {
        return _react2.default.createElement(
                "div",
                { className: "commentUserContainer" },
                _react2.default.createElement("i", { className: props.icon, style: props.iconStyle }),
                _react2.default.createElement(
                        "label",
                        null,
                        " ",
                        props.userDate
                ),
                " by",
                _react2.default.createElement(
                        "label",
                        null,
                        " ",
                        props.userDesc
                )
        );
};

exports.default = CommentUser;