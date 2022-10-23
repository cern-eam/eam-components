import React from 'react';
import { styled } from '@mui/material/styles';

function getTextWidth(text) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = '300 15px Roboto';
    var metrics = context.measureText(text);
    return metrics.width;
}

const StyledDiv = styled('div')({
    position: "absolute",
    top: 0,
    color: "#acacac",
    pointerEvents: "none",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    height: "100%",
    fontSize: "15px"
});

const TextFieldDescription = ({description, value}) => {

    const rootStyle = {
        width: `calc(100% - ${getTextWidth(value) + 30}px)`,
        left: 15 + getTextWidth(value)
    }

    if (!description) {
        return React.Fragment;
    }

    return (<StyledDiv style={rootStyle}>
                <span>{description}</span>
            </StyledDiv>);
}

export default TextFieldDescription;