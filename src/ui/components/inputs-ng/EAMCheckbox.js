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
        disabled,
        onChange} = props;

    const isChecked = (value) => {
        const checkedTextValue = value || '';
        return `${checkedTextValue}`.toLowerCase() === true.toString();
    };

    const handleChange = (event, checked) => {
        onChange(checked.toString());
    };

    return (
        <EAMBaseInput  {...props} rootStyle={rootStyle} componentStyle={{flex: "unset"}}>
            <Checkbox
                color="primary"
                checked={isChecked(value)}
                onChange={handleChange}
                disabled={disabled}
            />
        </EAMBaseInput>
    );
}

export default React.memo(EAMCheckbox, areEqual);