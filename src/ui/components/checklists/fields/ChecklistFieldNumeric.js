import React, {useState, useEffect} from 'react';
import TextField from '../../inputs-ng/components/TextField';

const outerStyle = {
    display: "flex"
};

const ChecklistFieldNumeric = props => {
    const { value, UOM, handleChange, minimumValue, maximumValue, showError, disabled } = props;
    const stringValue = value === null ? '' : '' + value;

    const [inputValue, setInputValue] = useState(stringValue);
    const [lastUpdatedValue, setUpdatedValue] = useState(stringValue);
    const [numericError, setNumericError] = useState(false);

    useEffect(() => {
        if(stringValue !== inputValue) {
            setInputValue(stringValue);
        }
    }, [stringValue]);

    const changed = lastUpdatedValue !== inputValue;
    useEffect(() => {
        if (!isNaN(inputValue)) {
            const floatValue = parseFloat(inputValue);
            let numericErrorDetected = true;
            if(typeof minimumValue === 'number' && floatValue < minimumValue) {
                setNumericError(`Minimum value is ${minimumValue}${UOM}`);
            } else if(typeof maximumValue === 'number' && floatValue > maximumValue) {
                setNumericError(`Maximum value is ${maximumValue}${UOM}`);
            } else {
                setNumericError(false);
                numericErrorDetected = false;
            }

            if (changed && numericErrorDetected) {
                showError(numericError);
            }
        } else {
            setNumericError("Not a valid number")
        }
    }, [inputValue, numericError, changed, showError]);

    const inputProps = {
        onChange: event => setInputValue(event.target.value),
        value: inputValue,
        onBlur: () => {
            if (!changed) {
                return;
            }

            if (!isNaN(inputValue)) {
                setUpdatedValue(inputValue);
                handleChange(inputValue, () => setUpdatedValue(lastUpdatedValue));
            } 
        }
    }

    return <>
        <div style={outerStyle}>
            <TextField disabled={disabled}
                       inputProps={inputProps}
                       endTextAdornment={UOM}
                       errorText={numericError}
                       style={{flex: "0 0 177px", marginTop: 5, marginBottom: 5}}
                       />
        </div>
    </>;
};

export default ChecklistFieldNumeric;