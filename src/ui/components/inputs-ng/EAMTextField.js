import React, { useState, useEffect } from "react";
import { areEqual } from "./tools/input-tools";
import EAMBaseInput from "./components/EAMBaseInput";
import TextField from "./components/TextField";

const EAMTextField = (props) => {
    const {
        value,
        onChange,
        onChangeInput,
        validator,
        onBlur,
        autoFocus,
        onKeyUp,
        textarea = false
    } = props;
    const valueOrEmptyString = value || "";
    const [inputValue, setInputValue] = useState(valueOrEmptyString);

    useEffect(() => setInputValue(valueOrEmptyString), [value]);

    // TODO: to be reviewed
    const inputProps = {
        onChange: (event) => {
            setInputValue(event.target.value);
            onChangeInput?.(event.target.value);
        },
        onBlur: (event) => {
            if (inputValue !== value) {
                if (!validator || validator(inputValue)) {
                    // If there is no validator defined or if the validation passes
                    onChange?.(inputValue);
                } else {
                    // Revert to original value if validation fails
                    setInputValue(valueOrEmptyString);
                }
            }
            onBlur?.(event);
        },
        value: inputValue,
        onKeyUp,
        autoFocus,
    };

    return (
        <EAMBaseInput {...props}>
            <TextField {...props} inputProps={inputProps} textarea={textarea} />
        </EAMBaseInput>
    );
};

export default React.memo(EAMTextField, areEqual);
