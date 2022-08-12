import React from 'react';

function getTextWidth(text) {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  context.font = '15px Roboto';
  var metrics = context.measureText(text);
  return metrics.width;
}

var AutocompleteDescription = function AutocompleteDescription(_ref) {
  var description = _ref.description,
      value = _ref.value;
  var rootStyle = {
    position: "absolute",
    width: "calc(100% - ".concat(getTextWidth(value) + 30, "px)"),
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
  };

  if (!description) {
    return React.Fragment;
  }

  return /*#__PURE__*/React.createElement("div", {
    style: rootStyle
  }, /*#__PURE__*/React.createElement("span", null, description));
};

export default AutocompleteDescription;