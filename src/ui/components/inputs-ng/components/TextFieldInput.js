import { styled } from '@mui/material/styles';

const TextFieldInput = styled('input')(({theme}) => ({
    '&': {
        display: "block",
        width: "100%",
        boxSizing: "border-box",
        paddingLeft: 7,
        fontSize: "15px",
        lineHeight: 1.5,
        color: "#495057",
        backgroundClip: "padding-box",
        border: "1px solid #e5e6e7",
        borderRadius: "4px",
        backgroundColor: "#fdfdfd",
        height: 38
    },
    '&:focus': {
        outline: `2px solid ${theme.palette.primary.main}`,
        backgroundColor: "#fff"
    },
    '&:disabled': {
        backgroundColor: "#f3f3f3",
        border: "1px solid #fafafa"
    }
}))

export default TextFieldInput;