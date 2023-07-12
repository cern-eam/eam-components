import React from 'react';
import tools from '../CustomFieldTools'
import EAMSelect from 'eam-components/dist/ui/components/inputs-ng/EAMSelect';
import EAMTextField from 'eam-components/dist/ui/components/inputs-ng/EAMTextField';

function CustomFieldCODE({customField, lookupValues, register, index, validate}) {
    const extraProps = register(customField.code, `customField.${index}.value`);

    if (tools.isLookupCustomField(customField)) {
        return <EAMSelect {...extraProps}
                          options={lookupValues && lookupValues[customField.code]}
                          validate={validate}/>
    } else {
        return (
            <EAMTextField {...extraProps}/>
        )
    }

}

export default CustomFieldCODE;