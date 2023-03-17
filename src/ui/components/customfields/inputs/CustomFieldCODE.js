import React from 'react';
import tools from '../CustomFieldTools'
import EAMSelect from 'eam-components/dist/ui/components/inputs-ng/EAMSelect';
import EAMTextField from 'eam-components/dist/ui/components/inputs-ng/EAMTextField';

function CustomFieldCODE({customField, lookupValues, register, index}) {
    const extraProps = register(customField.code, `customField.${index}.value`);

    if (tools.isLookupCustomField(customField)) {
        return <EAMSelect {...extraProps}
                          options={lookupValues && lookupValues[customField.code]}/>
    } else {
        return (
            <EAMTextField {...extraProps}/>
        )
    }

}

export default CustomFieldCODE;