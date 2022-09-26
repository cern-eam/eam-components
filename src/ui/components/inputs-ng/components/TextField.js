import React from 'react';
import EAMBarcodeScanner from './EAMBarcodeScanner';
import EAMLink from './EAMLink';
import TextFieldInput from './TextFieldInput';
import TextFieldTextAdornment from './TextFieldTextAdornment';
import TextFieldDescription from './TextFieldDescription';

const divInputStyle = {
    flex: "1 1 auto",
    position: "relative"
}

const divInputContainerStyle = {
    flex: "1 1 auto",
    display: "flex",
    alignItems: "center",
}

const divRootContainerStyle = {
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column"
}

const divErrorStyle = {
    margin: 3, 
    color: "red",
    fontSize: 12
}

const TextField = (props) => {

    let {desc, value, valueKey, 
        barcodeScanner, link, 
        updateProperty,       
        inputProps, 
        inputRef,
        endTextAdornment, endAdornment,
        hideDescription, disabled, maxLength, uppercase, errorText, style, type} = props;

    const onInputUpperCaseHandler = event => {
        var input = event.target;
        var start = input.selectionStart;
        var end = input.selectionEnd;
        input.value = input.value.toLocaleUpperCase();
        input.setSelectionRange(start, end);
    }

    return (
        <div style={{...divRootContainerStyle, ...style}}>
            <div style={divInputContainerStyle}>
                <div style={divInputStyle} ref={props.InputProps?.ref}>
                    <TextFieldInput type={type === 'password' ? 'password' : 'text'} 
                                    ref={inputRef} 
                                    {...inputProps} 
                                    disabled={disabled} 
                                    maxLength={maxLength}
                                    //TODO this is not the best solution as we are overriding onInput handler that could be potentially passed from inputProps
                                    onInput={uppercase ? onInputUpperCaseHandler : undefined}/>
                    {!hideDescription &&<TextFieldDescription
                        description = {desc}
                        value = {value}
                    />}
                    {endTextAdornment && <TextFieldTextAdornment>{endTextAdornment}</TextFieldTextAdornment>}
                </div>
                {endAdornment}
                {barcodeScanner && !disabled && <EAMBarcodeScanner updateProperty={updateProperty} valueKey = {valueKey}/>}
                {link && <EAMLink link = {link} value = {value}/>}
            </div>
            {errorText && <div style={divErrorStyle}>{errorText}</div>}
        </div>
    )

}

export default TextField;