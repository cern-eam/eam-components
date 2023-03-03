import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

// NOTE: on the non-wip version we use 'input' instead of 'InputBase'
// but InputBase is a simple wrapper around 'input' that gives us more options
// like the startAdornment needed for the multiple autocomplete
const TextFieldInput = styled(InputBase)(({theme}) => ({
    '&': {
        display: "inline-flex", // NOTE: on the non-wip version this is "block"
        width: "100%",
        boxSizing: "border-box",
        paddingLeft: 10,
        fontSize: "15px",
        lineHeight: 1.5,
        color: "#495057",
        backgroundClip: "padding-box",
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        backgroundColor: "#fafafa",
        height: 38,
        fontWeight: 300,
        fontFamily: "'Roboto', sans-serif"
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

export default TextFieldInput;