import { styled } from '@mui/material/styles';
var TextFieldInput = styled('input')(function (_ref) {
  var theme = _ref.theme;
  return {
    '&': {
      display: "block",
      width: "100%",
      boxSizing: "border-box",
      paddingLeft: 7,
      fontSize: "15px",
      lineHeight: 1.5,
      color: "#495057",
      backgroundClip: "padding-box",
      border: "1px solid #ced4da",
      borderRadius: "4px",
      backgroundColor: "#fdfdfd",
      height: 38
    },
    '&:focus': {
      outline: "2px solid ".concat(theme.palette.primary.main),
      backgroundColor: "#fff"
    },
    '&:disabled': {
      backgroundColor: "#fafafa"
    }
  };
});
export default TextFieldInput;