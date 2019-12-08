"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = void 0;

var _styles = require("@material-ui/core/styles");

var _blue = _interopRequireDefault(require("@material-ui/core/colors/blue"));

var _lightBlue = _interopRequireDefault(require("@material-ui/core/colors/lightBlue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      main: _blue["default"][500]
    },
    //EAMLight blue '#2196F3'
    secondary: {
      main: _lightBlue["default"][900]
    } //Darker blue '#01579b'

  },
  typography: {
    body1: {
      fontSize: '14px'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        color: "#585858"
      }
    }
  }
});
exports.theme = theme;