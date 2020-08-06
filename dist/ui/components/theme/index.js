"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DANGER = exports.RED = exports.GREEN = exports.BLUE = exports.theme = void 0;

var _styles = require("@material-ui/core/styles");

var _blue = _interopRequireDefault(require("@material-ui/core/colors/blue"));

var _lightBlue = _interopRequireDefault(require("@material-ui/core/colors/lightBlue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var muiSettings = {
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
};
var theme = (0, _styles.createMuiTheme)(muiSettings);
exports.theme = theme;
var BLUE = (0, _styles.createMuiTheme)(_objectSpread({}, muiSettings, {
  custom: {
    topBarColor: '#00aaff'
  }
}));
exports.BLUE = BLUE;
var GREEN = (0, _styles.createMuiTheme)(_objectSpread({}, muiSettings, {
  custom: {
    topBarColor: '#6ac860'
  }
}));
exports.GREEN = GREEN;
var RED = (0, _styles.createMuiTheme)(_objectSpread({}, muiSettings, {
  custom: {
    topBarColor: '#c86060'
  }
}));
exports.RED = RED;
var DANGER = (0, _styles.createMuiTheme)(_objectSpread({}, muiSettings, {
  custom: {
    topBarColor: '#ff0000'
  }
}));
exports.DANGER = DANGER;