import isEqual from 'lodash/isEqual';
import { Box } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import React from 'react';

export const isRequired = elementInfo => elementInfo?.attribute === 'R' || elementInfo?.attribute === 'S';

export const isHidden = elementInfo => elementInfo?.attribute === 'H' || elementInfo?.presentInJSP === 'N';

export const isUpperCase = elementInfo => elementInfo?.characterCase === 'uppercase';

export const areEqual = (prevProps, nextProps) => {
    return prevProps.value === nextProps.value &&
           prevProps.desc === nextProps.desc &&
           prevProps.disabled === nextProps.disabled &&
           prevProps.readonly === nextProps.readonly &&
           prevProps.required === nextProps.required &&
           prevProps.uppercase === nextProps.uppercase &&
           prevProps.label === nextProps.label &&
           prevProps.hidden === nextProps.hidden &&
           prevProps.errorText === nextProps.errorText &&
           isEqual(prevProps.autocompleteHandlerParams, nextProps.autocompleteHandlerParams) &&
           isEqual(prevProps.options, nextProps.options) &&
           isEqual(prevProps.renderDependencies, nextProps.renderDependencies);
}

export const processElementInfo = (elementInfo) => {

        let data = {
                required: isRequired(elementInfo),
                hidden: isHidden(elementInfo),
                uppercase: isUpperCase(elementInfo),
                label: elementInfo.text,
                disabled: elementInfo.readonly,
                id: getElementKey(elementInfo)
        }

        if (elementInfo.maxLength) {
                data.maxLength = elementInfo.maxLength;
        }

        switch (elementInfo.fieldType) {
            case "currency":
            case "number":
                data.type = 'number';
                break;
            case "date":
                data.type = 'date'
                break;
            case "datetime":
                data.type = 'datetime'
                break;
            case "checkbox":
                data.type = 'checkbox'
                break;
            default:
                data.type = 'text'
        }
        
        if (elementInfo.characterCase === 'uppercase') {
                data.uppercase = true;
        }

        return data;
}

export const getElementKey = (elementInfo) => {
        if (!elementInfo) return null;

        return typeof elementInfo.xpath === 'string'
            ? elementInfo.xpath
            : `${elementInfo.text}_${elementInfo.elementId}`.replace(/\s+/g, '_');
}

export const renderOptionHandler = (renderValue, props, option) => (
        <Box component="li" {...props}>
                {option.type === 'H' &&<HistoryIcon style={{color: "#cfcfcf", 
                                                            margin: "0px 6px 0px -10px",
                                                            fontSize: 17,
                                                            alignItems: "center" }}/>}
         {formatLabel(renderValue, option)}
         </Box>)


export const formatLabel = (renderValue, option) => {
        if (renderValue) {
                return renderValue(option);
        }

        if (option.code === option.desc) {
                return option.code;
        }

        // { code: "Long Shutdown", desc: null }
        if (!option.desc) {
                return option.code
        }

        return `${option.code} - ${option.desc}`;
}


export const componentsProps = {
        paper: {
                sx: {
                marginTop: "2px",
                marginBottom: "4px",
                '& .MuiAutocomplete-listbox .MuiAutocomplete-option': {
                        minHeight: 30
                }
                },
                elevation: 4
        }              
}

/**
 * Use this function when the passed updating function expects a key and a
 * value as the first two arguments.
 * @param additionalFunctionArgs is an array of arguments that will be spread
 * and passed to the end of the updating function's arguments. This enables
 * passing more arguments to the updating function than just the key and value.
 */
export const createOnChangeHandler =
    (
        valueKey,
        descKey,
        orgKey,
        updatingFunction,
        onChange,
        additionalArgs = []
    ) =>
    (value) => {
        // When receiving an object value, we run the updating function for each
        // key that was passed.
        if (typeof value === 'object') {
            const keys = []
            const values = []

            if (value.code !== undefined) {
                keys.push(valueKey)
                values.push(value.code)
            }

            if (descKey && value.desc !== undefined) {
                keys.push(descKey)
                values.push(value.desc)
            }

            if (orgKey && value.organization !== undefined) {
               keys.push(orgKey)
                values.push(value.organization)
            }

            updatingFunction(keys, values, ...additionalArgs);

            // Fire the onChange only at the end
            if (value.code !== undefined) {
                onChange?.(value.code, value);
            }
        } else {
            // When receiving a non-object value, we assume it corresponds to
            // the value key.
            updatingFunction?.(valueKey, value, ...additionalArgs);
            onChange?.(value);

            // Reset the description and org if the respective key was passed to
            // the function, thus clearing the field of previous values that do
            // not match the value picked.
            if (descKey) {
                updatingFunction(descKey, '', ...additionalArgs);
            }
            if (orgKey) {
                updatingFunction(orgKey, '', ...additionalArgs);
            }
        }
    };

/**
 * Use this function when the passed updating function expects an object as its
 * first argument (as opposed to a key and a value arguments). Note that, in
 * this function we check the values against undefined so that empty string
 * values are not ignored, thus allowing for fields to be cleared.
 * @param additionalFunctionArgs is an array of arguments that will be spread
 * and passed to the end of the updating function's arguments. This enables
 * passing more arguments to the updating function than just the object
 * containing all key-value pairs.
 * */
export const createOnChangeHandlerObjectUpdate =
    (
        valueKey,
        descKey,
        orgKey,
        updatingFunction,
        onChange,
        additionalArgs = []
    ) =>
    (value) => {
        if (typeof value === 'object') {
            const updateObject = {
                ...(value.code !== undefined && { [valueKey]: value.code }),
                ...(descKey &&
                    value.desc !== undefined && { [descKey]: value.desc }),
                ...(orgKey &&
                    value.organization !== undefined && {
                        [orgKey]: value.organization,
                    }),
            };

            updatingFunction?.(updateObject, ...additionalArgs);
            onChange?.(updateObject);
        } else {
            // If we are expecting an object update, but we get a non-object
            // value (can happen on a barcode scan), we set the value key to the
            // value received since that is expected to be the selected option.
            // Additionally, we reset the description and org if the respective
            // key was passed to the function, thus clearing the field of
            // previous values that do not match the value selected.
            const updateObject = {
                [valueKey]: value,
                ...(descKey && { [descKey]: '' }),
                ...(orgKey && { [orgKey]: '' }),
            };

            updatingFunction?.(updateObject, ...additionalArgs);
            onChange?.(updateObject);
        }
    };
