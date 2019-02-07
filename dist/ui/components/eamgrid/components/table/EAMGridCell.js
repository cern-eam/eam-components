"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("@material-ui/core/styles/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles() {
    return {
        searchRowCell: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            borderRight: "1px solid #d3d3d3",
            boxSizing: "border-box",
            "-moz-box-sizing": "border-box",
            "-webkit-box-sizing": "border-box",
            width: "100px",
            minWidth: "100px"
        },
        searchRowCellContent: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left"
        }
    };
};

var EAMGridCell = function EAMGridCell(props) {
    var classes = props.classes,
        children = props.children,
        _props$style = props.style,
        style = _props$style === undefined ? { 'width': '80px', 'minWidth': '80px' } : _props$style;


    return _react2.default.createElement(
        "div",
        { className: classes.searchRowCell, style: style },
        _react2.default.createElement(
            "div",
            { className: classes.searchRowCellContent },
            children
        )
    );
};

exports.default = (0, _index.withStyles)(styles)(EAMGridCell);