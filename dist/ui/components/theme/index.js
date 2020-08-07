"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DANGER = exports.RED = exports.GREEN = exports.BLUE = exports.theme = void 0;

var _styles = require("@material-ui/core/styles");

var _blue = _interopRequireDefault(require("@material-ui/core/colors/blue"));

var _lightBlue = _interopRequireDefault(require("@material-ui/core/colors/lightBlue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var muiSettings = function muiSettings(primaryColor) {
  return {
    palette: {
      primary: {
        main: primaryColor
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
  };
};

var theme = (0, _styles.createMuiTheme)(muiSettings('#2196F3'));
exports.theme = theme;
var BLUE = (0, _styles.createMuiTheme)(muiSettings('#00aaff'));
exports.BLUE = BLUE;
var GREEN = (0, _styles.createMuiTheme)(muiSettings('#6ac860'));
exports.GREEN = GREEN;
var RED = (0, _styles.createMuiTheme)(muiSettings('#c86060'));
exports.RED = RED;
var DANGER = (0, _styles.createMuiTheme)(muiSettings('#ff0000'));
exports.DANGER = DANGER;