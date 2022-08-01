import React from 'react';
import AutocompleteDescription from './AutocompleteDescription';
import EAMBarcodeScanner from './EAMBarcodeScanner';
import EAMLink from './EAMLink';
import './TextField.css'
import { styled } from '@mui/material/styles';

const StyledInput = styled('input')({
    '&': {
        display: "block",
        width: "100%",
        boxSizing: "border-box",
        padding: "7px 8px",
        fontSize: "15px",
        lineHeight: 1.5,
        color: "#495057",
        backgroundClip: "padding-box",
        border: "1px solid #ced4da",
        borderRadius: "4px",
        //transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        backgroundColor: "#fdfdfd"
    },
    '&:focus': {
        //backgroundColor: "blue",
        outline: "none",
        backgroundColor: "#fff",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
    }
})

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
    flex: "999 1 auto",
    display: "flex",
    flexDirection: "column",
    minWidth: "320px"
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
        hideDescription, disabled, errorText, style} = props;

    return (
        <div style={{...divRootContainerStyle, ...style}}>
            <div style={divInputContainerStyle}>
                <div style={divInputStyle} ref={props.InputProps?.ref}>
                    <StyledInput type="text" ref={inputRef} {...inputProps} />
                    {!hideDescription &&<AutocompleteDescription
                        description = {desc}
                        value = {value}
                    />}
                    {endTextAdornment && <div className="divTextAdornmentStyle">{endTextAdornment}</div>}
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