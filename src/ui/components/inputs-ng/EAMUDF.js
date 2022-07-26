import React from 'react';
import WSUDF from "tools/WSUDF";
import EAMAutocomplete from "./EAMAutocomplete";
import EAMCheckbox from './EAMCheckbox';
import EAMSelect from "./EAMSelect";
import EAMTextField from './EAMTextField';
import { areEqual, processElementInfo } from './tools/input-tools';

const NONE = 'NONE';
const CODE = 'CODE';
const CODEDESC = 'CODEDESC';
const RENT = 'RENT';

const EAMUDF = (props) => {

    const {elementInfo, valueKey, value, descKey, desc, updateProperty} = props;
    const {udfLookupType, udfLookupEntity, elementId, fieldType} = elementInfo;

    if (fieldType === 'checkbox') {
        return (
            <EAMCheckbox {...processElementInfo(elementInfo)} 
                valueKey={valueKey}
                value={value}
                updateProperty={updateProperty}
            />
        )
    }

    switch (udfLookupType) {
        case CODE:
            return (
                <EAMSelect
                    {...processElementInfo(elementInfo)}
                    valueKey={valueKey}
                    value={value}
                    updateProperty={updateProperty}
                    autocompleteHandler={WSUDF.getUDFCodeValues}
                    autocompleteHandlerParams={[udfLookupEntity, elementId]}
                />)
        case CODEDESC:
            return (
                <EAMSelect
                    {...processElementInfo(elementInfo)}
                    valueKey={valueKey}
                    value={value}
                    updateProperty={updateProperty}
                    autocompleteHandler={WSUDF.getUDFCodeDescValues}
                    autocompleteHandlerParams={[udfLookupEntity, elementId]}
                />)
        case RENT:
            return (<EAMAutocomplete
                    {...processElementInfo(elementInfo)}
                    valueKey={valueKey}
                    value={value}
                    descKey={descKey}
                    desc={desc}
                    updateProperty={updateProperty}
                    autocompleteHandler={WSUDF.autocompleteUserDefinedField}
                    autocompleteHandlerParams={[udfLookupEntity]}
                />)
        case NONE:
        default:
            return (<EAMTextField
                    {...processElementInfo(elementInfo)}
                    valueKey={valueKey}
                    value={value}
                    updateProperty={updateProperty}
                />)
    }
}

export default React.memo(EAMUDF, areEqual);