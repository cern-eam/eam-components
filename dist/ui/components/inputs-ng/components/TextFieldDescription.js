import React from 'react';
import { styled } from '@mui/material/styles';

function getTextWidth(text) {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  context.font = '15px Roboto';
  var metrics = context.measureText(text);
  return metrics.width;
}

var StyledDiv = styled('div')({
  position: "absolute",
  top: 1,
  color: "#acacac",
  pointerEvents: "none",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  height: "100%"
});

var TextFieldDescription = function TextFieldDescription(_ref) {
  var description = _ref.description,
      value = _ref.value;
  var rootStyle = {
    width: "calc(100% - ".concat(getTextWidth(value) + 30, "px)"),
    left: 20 + getTextWidth(value)
  };

  if (!description) {
    return React.Fragment;
  }

  return /*#__PURE__*/React.createElement(StyledDiv, {
    style: rootStyle
  }, /*#__PURE__*/React.createElement("span", null, description));
};

export default TextFieldDescription;