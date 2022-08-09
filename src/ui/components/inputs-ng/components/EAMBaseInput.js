import React from 'react';

const divLabelStyle = {
    flex: "1 1 140px",
    fontSize: 14,
    margin: "5px 10px 5px 0px",
    //color: "rgb(0, 101, 152)",
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

const EAMBaseInput = (props) => {

    const {hidden, disabled, required, label} = props;

    // Hide 
    if (hidden) {
        return React.Fragment;
    }

    const rootStyle = {
        width: "100%",
        margin: "5px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
    }

    // Disable
    if (disabled) {
        rootStyle.opacity = "0.8";
        rootStyle.pointerEvents = "none";
    }

    console.log('render', label)

    return (<div style={{...rootStyle, ...props.rootStyle}}>
        {label &&
        <div style = {divLabelStyle}>
            <span>{label}</span>
            {required && <span style={requiredStyle}>*</span>}
        </div>}
        <div style={componentStyle}>
            {props.children}
        </div>
    </div>);
}

export default EAMBaseInput;