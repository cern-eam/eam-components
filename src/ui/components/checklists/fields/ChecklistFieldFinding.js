import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ChecklistFieldCheckbox from './ChecklistFieldCheckbox';

const selectStyle = {
    margin: 5,
    width: "100%"
}

export default function ChecklistFieldFinding(props) {
    const {dropdown, finding, handleChange, possibleFindings} = props;

    if(dropdown === undefined) dropdown = true;

    if(dropdown)
        return <FormControl style={selectStyle}>
                <Select disableUnderline={true}
                        value={finding}
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
                checked={finding === findingElement.code}
                handleChange={handleChange}
        />)

}