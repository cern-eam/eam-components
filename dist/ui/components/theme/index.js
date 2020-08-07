"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.theme = void 0;

var _styles = require("@material-ui/core/styles");

var _blue = _interopRequireDefault(require("@material-ui/core/colors/blue"));

var _green = _interopRequireDefault(require("@material-ui/core/colors/green"));

var _red = _interopRequireDefault(require("@material-ui/core/colors/red"));

var _lightBlue = _interopRequireDefault(require("@material-ui/core/colors/lightBlue"));

var _lightGreen = _interopRequireDefault(require("@material-ui/core/colors/lightGreen"));

var _deepOrange = _interopRequireDefault(require("@material-ui/core/colors/deepOrange"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var muiSettings = function muiSettings(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  return {
    palette: {
      primary: {
        main: primaryColor
      },
      //EAMLight blue '#2196F3'
      secondary: {
        main: secondaryColor
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

var theme = (0, _styles.createMuiTheme)({
  primaryColor: _blue["default"][500],
  secondaryColor: _lightBlue["default"][900]
});
exports.theme = theme;
var BLUE = (0, _styles.createMuiTheme)(muiSettings({
  primaryColor: _blue["default"][500],
  secondaryColor: _lightBlue["default"][900]
}));
var GREEN = (0, _styles.createMuiTheme)(muiSettings({
  primaryColor: _green["default"][600],
  secondaryColor: _lightGreen["default"][900]
}));
var RED = (0, _styles.createMuiTheme)(muiSettings({
  primaryColor: _red["default"][500],
  secondaryColor: _deepOrange["default"][900]
}));
var DANGER = (0, _styles.createMuiTheme)(muiSettings({
  primaryColor: _red["default"][900],
  secondaryColor: _red["default"][500]
}));
var _default = {
  BLUE: BLUE,
  GREEN: GREEN,
  RED: RED,
  DANGER: DANGER
};
exports["default"] = _default;