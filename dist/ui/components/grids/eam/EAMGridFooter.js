"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var EAMGridFooter = (0, _core.withStyles)(function (theme) {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      background: theme.palette.grey[100],
      border: "1px solid ".concat(theme.palette.grey[200]),
      borderTop: "none",
      borderRadius: "0 0 4px 4px",
      padding: "0.5rem",
      flexWrap: "wrap"
    }
  };
})(_core.Box);
var _default = EAMGridFooter;
exports["default"] = _default;