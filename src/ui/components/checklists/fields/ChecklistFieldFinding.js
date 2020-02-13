import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ChecklistFieldCheckbox from './ChecklistFieldCheckbox';
import { withStyles } from '@material-ui/core/styles';

const style = {
    root: {
        margin: 5,
        marginLeft: 17,
        border: "1px solid #ced4da",
        borderRadius: 4
    },
    select: {
        paddingLeft: 10
    },
    icon: {
        paddingRight: 3
    }
}

const ChecklistFieldFinding = props => {
    const {finding, handleChange, possibleFindings, classes} = props;
    const dropdown = props.dropdown === undefined ? true : props.dropdown;

    if(dropdown)
        return <FormControl classes={{root: classes.root}}>
                <Select classes={{select: classes.select, icon: classes.icon}}
                        disableUnderline={true}
                        value={finding || ''}
                        onChange={event => handleChange(event.target.value)}>
                    <MenuItem value={null}>&#8203;</MenuItem>
                    {possibleFindings.map(finding => (
                        <MenuItem key={finding.code} value={finding.code}>{finding.desc}</MenuItem>
                    ))}
                </Select>
            </FormControl>
    else
        return possibleFindings.map(findingElement => <ChecklistFieldCheckbox 
                code={findingElement.code}
                desc={findingElement.desc}
                checked={finding || '' === findingElement.code}
                handleChange={handleChange}
                key={findingElement.code}
        />)
};

export default withStyles(style)(ChecklistFieldFinding);