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

const fieldInvalid = {
    border: '1px solid #f03369',
    borderRadius: '5px',
}

const numericFieldStyle = {
    textAlign: "right",
    paddingRight: "calc (70px + padding-left)" // 70px is the width of the TextFieldTextAdornment component
}

const TextField = (props) => {

    let {desc, value,
        barcodeScanner, link,
        onChange,
        inputProps,
        inputRef,
        endTextAdornment, endAdornment,
        hideDescription, disabled, maxLength, uppercase, errorText, style, type, rightAlign} = props;

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
                <div style={{...divInputStyle, ...(errorText ? fieldInvalid : {})}} ref={props.InputProps?.ref}>
                    <TextFieldInput type={type === 'password' ? 'password' : 'text'}
                                    ref={inputRef}
                                    {...inputProps}
                                    readOnly={props.selectOnlyMode}
                                    disabled={disabled}
                                    maxLength={maxLength}
                                    //TODO this is not the best solution as we are overriding onInput handler that could be potentially passed from inputProps
                                    onInput={uppercase ? onInputUpperCaseHandler : undefined}
                                    style = {type === 'number' ? numericFieldStyle : {}}
                                    />
                    {!hideDescription &&<TextFieldDescription
                        description = {desc}
                        value = {value}
                    />}
                    {endTextAdornment && <TextFieldTextAdornment>{endTextAdornment}</TextFieldTextAdornment>}
                </div>
                <div onClick={event => event.stopPropagation() /* If we don't stop the propagation the input focuses on clicking in this area */ } style={{display: "flex"}}> 
                    {endAdornment}
                    {barcodeScanner && !disabled && <EAMBarcodeScanner rightAlign={rightAlign} onChange={onChange} />}
                    {link && <EAMLink link = {link} value = {value}/>}
                </div>
            </div>
            {errorText && <div style={divErrorStyle}>{errorText}</div>}
        </div>
    )

}

export default TextField;