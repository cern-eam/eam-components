import { styled } from '@mui/material/styles';

const TextAreaInput = styled('textarea')(({theme}) => ({
    '&': {
        display: "block",
        width: "100%",
        boxSizing: "border-box",
        padding: "7px 10px",
        fontSize: "15px",
        lineHeight: 1.5,
        color: "#495057",
        backgroundClip: "padding-box",
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        backgroundColor: "#fafafa",
        height: 38,
        minHeight: 38,
        maxHeight: 800,
        fontWeight: 300,
        fontFamily: "'Roboto', sans-serif",
        resize: "vertical",
        height: 120
    },
    '&:focus': {
        outline: `2px solid ${theme.palette.primary.main}`,
        backgroundColor: "#fff"
    },
    '&:disabled': {
        backgroundColor: "#f5f5f5",
        border: "1px dashed #eee"
    }
}))

export default TextAreaInput;