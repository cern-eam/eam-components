import React from 'react';
import EAMBarcodeScanner from '../components/EAMBarcodeScanner';
import EAMLink from '../components/EAMLink';
import TextFieldInput from './TextFieldInput';
import TextFieldTextAdornment from '../components/TextFieldTextAdornment';
import TextFieldDescription from '../components/TextFieldDescription';

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

    let {desc, value,  
        barcodeScanner, link, 
        onChange,       
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
                                    // NOTE: on the non-wip version we would simply need to spread inputProps,
                                    // but now that we are using an InputBase we have to pass the 'inputProps'
                                    // prop explicitly. Otherwise, we get the error: "MUI: Unable to find the input element..."
                                    inputProps={{ ...inputProps }}
                                    readOnly={props.selectOnlyMode}
                                    disabled={disabled} 
                                    maxLength={maxLength}
                                    //TODO this is not the best solution as we are overriding onInput handler that could be potentially passed from inputProps
                                    onInput={uppercase ? onInputUpperCaseHandler : undefined}
                                    // Needed for example for the multi Autocomplete since
                                    // it relies on startAdornment to render the tags
                                    startAdornment={props.InputProps?.startAdornment} // NOTE: this is not in the non-wip version
                    />
                    {!hideDescription &&<TextFieldDescription
                        description = {desc}
                        value = {value}
                    />}
                    {endTextAdornment && <TextFieldTextAdornment>{endTextAdornment}</TextFieldTextAdornment>}
                </div>
                {endAdornment}
                {barcodeScanner && !disabled && <EAMBarcodeScanner onChange={onChange} />}
                {link && <EAMLink link = {link} value = {value}/>}
            </div>
            {errorText && <div style={divErrorStyle}>{errorText}</div>}
        </div>
    )

}

export default TextField;