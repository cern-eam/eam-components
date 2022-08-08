import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import EAMBaseInput from './components/EAMBaseInput';
import { areEqual } from './tools/input-tools';

const rootStyle = {
    width: "auto",
    flex: "0 1 180px",
    flexFlow: "row nowrap"
}

const EAMCheckbox = (props) => {
    
    const { 
        value, 
        valueKey,
        updateProperty} = props;

    const isChecked = (value) => {
        const checkedTextValue = value || '';
        return `${checkedTextValue}`.toLowerCase() === true.toString();
    };

    const handleChange = (event, checked) => {
        updateProperty(valueKey, checked.toString());
    };

    return (
        <EAMBaseInput  {...props} rootStyle={rootStyle}>
            <Checkbox
                color="primary"
                checked={isChecked(value)}
                onChange={handleChange}
            />
        </EAMBaseInput>
    );
}

export default React.memo(EAMCheckbox, areEqual);