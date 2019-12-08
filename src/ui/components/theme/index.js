import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';

export const theme = createMuiTheme({
    palette: {
        primary: {main: blue[500]}, //EAMLight blue '#2196F3'
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