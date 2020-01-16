"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("@material-ui/core/styles/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    headerCellContainer: {
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #d3d3d3",
        boxSizing: "border-box",
        "-moz-box-sizing": "border-box",
        "-webkit-box-sizing": "border-box",
        overflow: "hidden"
    },
    headerCell: {
        width: "100%",
        minHeight: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#a5a5a5",
        paddingLeft: "5px",
        boxSizing: "border-box",
        "-moz-box-sizing": "border-box",
        "-webkit-box-sizing": "border-box"
    }
};

var EAMGridHeaderCell = function EAMGridHeaderCell(props) {
    var classes = props.classes,
        children = props.children,
        _props$style = props.style,
        style = _props$style === undefined ? { 'width': '80px', 'minWidth': '80px' } : _props$style;


    return _react2.default.createElement(
        "div",
        { className: classes.headerCellContainer, style: style },
        _react2.default.createElement(
            "div",
            { className: classes.headerCell },
            children
        )
    );
};

exports.default = (0, _index.withStyles)(styles)(EAMGridHeaderCell);