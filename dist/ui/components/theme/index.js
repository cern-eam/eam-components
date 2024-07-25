import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';
import deepOrange from '@material-ui/core/colors/deepOrange';
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
export var theme = createMuiTheme({
  primaryColor: blue[500],
  secondaryColor: lightBlue[900]
});
var BLUE = createMuiTheme(muiSettings({
  primaryColor: blue[500],
  secondaryColor: lightBlue[900]
}));
var GREEN = createMuiTheme(muiSettings({
  primaryColor: green[600],
  secondaryColor: lightGreen[900]
}));
var RED = createMuiTheme(muiSettings({
  primaryColor: red[500],
  secondaryColor: deepOrange[900]
}));
var DANGER = createMuiTheme(muiSettings({
  primaryColor: red[900],
  secondaryColor: red[500]
}));
export default {
  BLUE: BLUE,
  GREEN: GREEN,
  RED: RED,
  DANGER: DANGER
};