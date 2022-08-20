import React from 'react';
import { styled } from '@mui/material/styles';

const requiredStyle = {
    color: "red",
    fontWeight: "bold"
}

const componentStyle = {
    flex: "999 1 320px",
    display: "flex"
}

const RootDiv = styled('div')({
    width: "100%",
    margin: "3px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
})

const LabelDiv = styled('div')({
    flex: "1 1 140px",
    fontSize: 14,
    margin: "5px 10px 2px 0px",
    color: "#1a237e"
    //fontWeight: "bold"
})

const EAMBaseInput = (props) => {

    const {hidden, required, label} = props;

    // Hide 
    if (hidden) {
        return React.Fragment;
    }

    return (<RootDiv style={props.rootStyle}>
        {label &&
        <LabelDiv>
            <span>{label}</span>
            {required && <span style={requiredStyle}>*</span>}
        </LabelDiv>}
        <div style={{...componentStyle, ...props.componentStyle}}>
            {props.children}
        </div>
    </RootDiv>);
}

export default EAMBaseInput;