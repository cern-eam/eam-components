import React from 'react';

function getTextWidth(text) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = '15px Roboto';
    var metrics = context.measureText(text);
    return metrics.width;
}

const AutocompleteDescription = ({description, value}) => {

    const rootStyle = {
        position: "absolute",
        width: `calc(100% - ${getTextWidth(value) + 30}px)`,
        top: 1,
        left: 20 + getTextWidth(value),
        color: "#acacac",
        pointerEvents: "none",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        height: "100%"
    }

    if (!description) {
        return React.Fragment;
    }

    return (<div style={rootStyle}>
        <span>{description}</span>
    </div>);
}

export default AutocompleteDescription;