import { styled } from '@mui/material/styles';

const TextFieldTextAdornment = styled('div')({
    width: "70px",
    height: "36px",
    backgroundColor: "rgb(242, 242, 242)",
    zIndex: 999,
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    color: "#495057",
    border: "1px solid #e0e0e0",
    borderLeft: '0'
})

export default TextFieldTextAdornment;