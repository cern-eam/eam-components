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
                 inputProps={{...inputProps, placeholder: ""}}
                 endAdornment={disabled ? null : endAdornment} 
                 errorText={errorText}
                 disabled={disabled}/>
    )
}

export const onChangeHandler = (updateProperty, setIsInvalidDate, valueKey, newValue) => {
    try {
        if (newValue) {
            updateProperty(valueKey, newValue.toISOString())   
        } else {
            updateProperty(valueKey, '');
        }
        setIsInvalidDate(false);
    } catch {
        setIsInvalidDate(true)
    }
}