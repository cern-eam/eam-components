import TextField from "../components/TextField";
import React from 'react';

export const renderDatePickerInput = ({ inputRef, inputProps, InputProps }, isInvalidDate, style, errorText, disabled) => {

    if (isInvalidDate) {
        errorText = "Wrong Date format";
    }

    let endAdornment = (<div style={{marginRight: 12, marginLeft: -8}}>{InputProps?.endAdornment}</div>)

    return (
      <TextField style = {style}
                 inputRef={inputRef}
                 inputProps={disabled ? {...inputProps, placeholder: ""} : {...inputProps}}
                 endAdornment={disabled ? null : endAdornment}
                 errorText={errorText}
                 disabled={disabled}/>
    )
}

export const onChangeHandler = (onChange, setIsInvalidDate, newValue) => {
    try {
        if (newValue) {
            onChange(newValue.toISOString())
        } else {
            onChange('');
        }
        setIsInvalidDate(false);
    } catch {
        setIsInvalidDate(true)
    }
}