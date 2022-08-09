import React from 'react';
import ChecklistFieldCheckbox from './ChecklistFieldCheckbox';
import EAMSelect from '../../inputs-ng/EAMSelect';

const ChecklistFieldFinding = props => {
    const {finding, handleChange, possibleFindings, disabled} = props;
    const dropdown = props.dropdown === undefined ? true : props.dropdown;

    if(dropdown)
        return  <EAMSelect disabled={disabled}
                       value={finding || ''}
                       options={possibleFindings}
                       updateProperty={(key, value) => handleChange(value)}
            />
    else
        return possibleFindings.map(findingElement => <ChecklistFieldCheckbox 
                code={findingElement.code}
                desc={findingElement.desc}
                checked={finding === findingElement.code}
                handleChange={value => handleChange(value === finding ? null : value)}
                key={findingElement.code}
                disabled={disabled}
        />)
};

export default ChecklistFieldFinding;