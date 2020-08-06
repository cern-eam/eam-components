import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';

const muiSettings = {
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
};

export const theme = createMuiTheme(muiSettings);

export const BLUE = createMuiTheme({
    ...muiSettings,
    custom: {
        topBarColor: '#00aaff'
    }
});

export const GREEN = createMuiTheme({
    ...muiSettings,
    custom: {
        topBarColor: '#6ac860'
    }
});

export const RED = createMuiTheme({
    ...muiSettings,
    custom: {
        topBarColor: '#c86060'
    }
});

export const DANGER = createMuiTheme({
    ...muiSettings,
    custom: {
        topBarColor: '#ff0000'
    }
});