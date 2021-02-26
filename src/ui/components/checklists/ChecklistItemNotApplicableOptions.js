import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default props => {
    const { notApplicableOptions, checklistItem, onChange } = props;

    return <div style={{padding: 2}}>
        Not Applicable Option: <Select value={checklistItem.notApplicableOption || ''}
                onChange={event => onChange({
                    ...checklistItem,
                    notApplicableOption: event.target.value
                })}
                style={{width: '227px'}}>
            <MenuItem value={''}>&#8203;</MenuItem>
            {notApplicableOptions.map(option => (
                <MenuItem key={option.code} value={option.code}>{option.desc}</MenuItem>
            ))}
        </Select>
    </div>
};