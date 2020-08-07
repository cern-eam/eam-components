import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';

const muiSettings = primaryColor => ({
    palette: {
        primary: {main: primaryColor}, //EAMLight blue '#2196F3'
        secondary: {main: lightBlue[900]} //Darker blue '#01579b'
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

export const theme = createMuiTheme(muiSettings('#2196F3'));

export const BLUE = createMuiTheme(muiSettings('#00aaff'));
export const GREEN = createMuiTheme(muiSettings('#6ac860'));
export const RED = createMuiTheme(muiSettings('#c86060'));
export const DANGER = createMuiTheme(muiSettings('#ff0000'));