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
    top: 12,
    left: 20 + getTextWidth(value),
    color: "#acacac",
    pointerEvents: "none",
    fontSize: 14,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  };

  if (!description) {
    return React.Fragment;
  }

  return /*#__PURE__*/React.createElement("div", {
    style: rootStyle
  }, /*#__PURE__*/React.createElement("span", null, description));
};

export default AutocompleteDescription;