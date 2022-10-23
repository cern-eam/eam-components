import { styled } from '@mui/material/styles';
var TextFieldInput = styled('input')(function (_ref) {
  var theme = _ref.theme;
  return {
    '&': {
      display: "block",
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
      outline: "2px solid ".concat(theme.palette.primary.main),
      backgroundColor: "#fff"
    },
    '&:disabled': {
      backgroundColor: "#f5f5f5",
      border: "1px dashed #eee"
    }
  };
});
export default TextFieldInput;