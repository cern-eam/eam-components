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
    const [numericLimitError, setNumericLimitError] = useState(false);

    useEffect(() => {
        if(stringValue !== inputValue) {
            setInputValue(stringValue);
        }
    }, [stringValue]);

    const changed = lastUpdatedValue !== inputValue;
    useEffect(() => {
        if (!isNaN(inputValue)) {
            const floatValue = parseFloat(inputValue);
            let numericLimitErrorDetected = true;
            if(typeof minimumValue === 'number' && floatValue < minimumValue) {
                setNumericLimitError(`Minimum value is ${minimumValue}${UOM}`);
            } else if(typeof maximumValue === 'number' && floatValue > maximumValue) {
                setNumericLimitError(`Maximum value is ${maximumValue}${UOM}`);
            } else {
                setNumericLimitError(false);
                numericLimitErrorDetected = false;
            }

            if (changed && numericLimitErrorDetected) {
                showError(numericLimitError);
            }
        }
    }, [inputValue, numericLimitError, changed, showError]);

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
                       style={{flex: "0 0 177px", margin: 5}}
                       />
        </div>
        {numericLimitError && <p style={{color: 'red', marginLeft: '20px'}}>{numericLimitError}</p>}
    </>;
};

export default ChecklistFieldNumeric;