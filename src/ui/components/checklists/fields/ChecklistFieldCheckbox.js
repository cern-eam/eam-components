import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import withStyles from '@mui/styles/withStyles';

const labelStyle = {
    root: {
        marginRight: -10,
        justifyContent: "end"
    }
};

const ChecklistFieldCheckbox = props => {
    const {code, desc, checked, handleChange, classes, disabled} = props;

    return <FormControlLabel
        classes={{root: classes.root,label: classes.label}}
        control={
            <Checkbox
                color="primary"
                checked={checked}
                onMouseDown={() => handleChange(code)}
                onTouchStart={() => handleChange(code)}
                disabled={disabled}/>
        }
        label={desc}
        labelPlacement="start"
    />
};

export default withStyles(labelStyle)(ChecklistFieldCheckbox);