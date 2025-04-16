import { useState } from 'react';
import { isHidden, isRequired } from '../tools/input-tools';
import { get } from "lodash";

const BLANK_ERROR = ' cannot be blank';
const NAN_ERROR = ' must be a valid number'

/**
 * Validates fields and generates the error messages to be shown (typically through an 'errorText' prop).
 * @param  {Object} fieldsData Contains `<K,V>` pairs of `<valueKey,fieldLayout>`
 * where `valueKey` is the same key used to store the corresponding value in the parameter
 * `formValues` and `fieldLayout` contains metadata describing the field (used in generating the
 * error message and validating the field).
 * @param  {Object} formValues Where all the values for the form fields are being kept.
 * It contains `<K,V>` pairs where `V` is the current field value (usually passed as prop to the field)
 * and `K` is the same key as the one passed to the corresponding entry in `fieldsData`.
 * @param  {String} errorString The text to show, in the generated error message, following the field label.
 * @return {Object} Returns `errorMessages`, `validateFields` and `resetErrorMessages`.
 * `errorMessages` contains the error messages using keys that match the ones passed in `fieldsData` and `formValues`.
 * `validateFields` is the validation function to be used before submitting the form.
 * `resetErrorMessages` is a function that clears the generated error messages.
 */
const useFieldsValidator = (
    fieldsData,
    entity,
    emptyValueError = BLANK_ERROR,
    nanError = NAN_ERROR
) => {
    const [errorMessages, setErrorMessages] = useState({});

    // Returns false if validation for at least one field fails
    // and sets generated error messages
    const validateFields = () => {
        let allFieldsAreValid = true;

        const generatedErrorMessages = Object.entries(fieldsData)
        .reduce((errorMessagesAcc, [fieldKey, fieldLayout]) => {
            if (isHidden(fieldLayout)) {
                return errorMessagesAcc;
            }

            let value = get(entity, fieldLayout.xpath);

            if (isRequired(fieldLayout) && !value) {
                errorMessagesAcc[fieldKey] = fieldLayout.text + emptyValueError;
                allFieldsAreValid = false;
            }

            if ((fieldLayout.fieldType === 'number' || fieldLayout.fieldType === 'currency') && isNaN(value ?? 0)) {
                errorMessagesAcc[fieldKey] = fieldLayout.text + nanError;
                allFieldsAreValid = false;
            }
            
            return errorMessagesAcc;
        }, {});
        setErrorMessages(generatedErrorMessages);

        return allFieldsAreValid;
    };


    const generateErrorMessagesFromException = (errors) => {

        const generatedErrorMessages = Object.entries(fieldsData)
        .reduce((errorMessagesAcc, [fieldKey, fieldLayout]) => {

            let errorText = errors?.find?.(e => e.location === fieldLayout.xpath);
            if (errorText) {
                errorMessagesAcc[fieldKey] = errorText.message;
            }

            return errorMessagesAcc;
        }, {});

        setErrorMessages(generatedErrorMessages);
    }

    const resetErrorMessages = () => {
        setErrorMessages({});
    };

    return { errorMessages, validateFields, generateErrorMessagesFromException, resetErrorMessages };
};

export default useFieldsValidator;
