'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.theme = undefined;

var _styles = require('@material-ui/core/styles');

var _blue = require('@material-ui/core/colors/blue');

var _blue2 = _interopRequireDefault(_blue);

var _lightBlue = require('@material-ui/core/colors/lightBlue');

var _lightBlue2 = _interopRequireDefault(_lightBlue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = exports.theme = (0, _styles.createMuiTheme)({
    palette: {
        primary: { main: _blue2.default[500] }, //EAMLight blue '#2196F3'
        secondary: { main: _lightBlue2.default[900] //Darker blue '#01579b'
        } },
    typography: {
        body1: {
            fontSize: '12px',
            fontWeight: 600
        }
    }
});