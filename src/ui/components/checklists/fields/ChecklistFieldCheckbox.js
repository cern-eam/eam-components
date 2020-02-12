import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function ChecklistFieldCheckbox(props) {
    const {code, desc, checked, handleChange} = props;

    return <FormControlLabel style={{margin: 5}}
        control={
            <Checkbox
                color="primary"
                checked={checked}
                onMouseDown={() => handleChange(code)}
                onTouchStart={() => handleChange(code)}/>
        }
        label={desc}
    />
}