import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';

const themes = {
    
    BLUE: {
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
    },
    GREEN: {
        palette: {
            primary: {main: green[600]}, //green '#4caf50'
            secondary: {main: lightGreen[900]} //Darker green '#33691e' 
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
}

export default themes