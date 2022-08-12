import { styled } from '@mui/material/styles';

const TextFieldTextAdornment = styled('div')({
    position: "absolute",
    right: "1px",
    top: "1px",
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
    color: '"#495057"'
})

export default TextFieldTextAdornment;