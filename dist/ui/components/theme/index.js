"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _blue = _interopRequireDefault(require("@material-ui/core/colors/blue"));

var _lightBlue = _interopRequireDefault(require("@material-ui/core/colors/lightBlue"));

var _green = _interopRequireDefault(require("@material-ui/core/colors/green"));

var _lightGreen = _interopRequireDefault(require("@material-ui/core/colors/lightGreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var themes = {
  BLUE: {
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
  },
  GREEN: {
    palette: {
      primary: {
        main: _green["default"][600]
      },
      //green '#4caf50'
      secondary: {
        main: _lightGreen["default"][900]
      } //Darker green '#33691e' 

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
  }
};
var _default = themes;
exports["default"] = _default;