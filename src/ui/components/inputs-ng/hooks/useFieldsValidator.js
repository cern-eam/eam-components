import { useState } from 'react';
import { isRequired } from '../tools/input-tools';

const BLANK_ERROR = ' cannot be blank';

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
 * @return {Object} Returns `errorMessages` and `validateFields`. `errorMessages` contains the error
 * messages using keys that match the ones passed in `fieldsData` and `formValues`.
 * `validateFields` is the validation function to be used before submitting the form.
 */
const useFieldsValidator = (
    fieldsData,
    formValues,
    errorString = BLANK_ERROR
) => {
    const [errorMessages, setErrorMessages] = useState();

    // Returns false if validation for at least one field fails
    // and sets generated error messages
    const validateFields = () => {
        let allFieldsAreValid = true;

        const generatedErrorMessages = Object.entries(
            fieldsData
        ).reduce((errorMessagesAcc, [fieldKey, fieldLayout]) => {
            if (isRequired(fieldLayout) && !formValues[fieldKey]) {
                errorMessagesAcc[fieldKey] = fieldLayout.text + errorString;
                allFieldsAreValid = false;
            }

            return errorMessagesAcc;
        }, {});

        setErrorMessages(generatedErrorMessages);

        return allFieldsAreValid;
    };

    return { errorMessages, validateFields };
};

export default useFieldsValidator;
