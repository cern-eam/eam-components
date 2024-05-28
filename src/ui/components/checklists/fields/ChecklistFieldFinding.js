import React from 'react';
import ChecklistFieldCheckbox from './ChecklistFieldCheckbox';
import EAMSelect from '../../inputs-ng/EAMSelect';

const ChecklistFieldFinding = props => {
    const {finding, handleChange, possibleFindings, disabled, label} = props;
    const dropdown = props.dropdown === undefined ? true : props.dropdown;

    if(dropdown)
        return  <EAMSelect disabled={disabled}
                       value={finding || ''}
                       label={label}
                       renderValue={value => value.desc || value.code}
                       selectOnlyMode={true}
                       options={possibleFindings}
                       onChange={value => handleChange(value.code)}
                       componentStyle={{flex: "0 0 177px"}}
                       rootStyle={{justifyContent: 'flex-end', width: 'auto'}}
                       labelStyle={{fontSize: '14px', flex: 1, margin: '0 4px', marginTop: '0px'}}
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