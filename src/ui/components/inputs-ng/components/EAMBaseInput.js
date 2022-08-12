import React from 'react';

const divLabelStyle = {
    flex: "1 1 140px",
    fontSize: 14,
    margin: "5px 10px 2px 0px",
    color: "#1a237e"
    //fontWeight: "bold"
}

const requiredStyle = {
    color: "red",
    fontWeight: "bold"
}

const componentStyle = {
    flex: "999 1 320px",
    display: "flex"
}

const rootStyle = {
    width: "100%",
    margin: "3px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
}

const EAMBaseInput = (props) => {

    const {hidden, disabled, required, label} = props;

    // Hide 
    if (hidden) {
        return React.Fragment;
    }

    return (<div style={{...rootStyle, ...props.rootStyle}}>
        {label &&
        <div style = {divLabelStyle}>
            <span>{label}</span>
            {required && <span style={requiredStyle}>*</span>}
        </div>}
        <div style={{...componentStyle, ...props.componentStyle}}>
            {props.children}
        </div>
    </div>);
}

export default EAMBaseInput;