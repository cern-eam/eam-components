import React from 'react';
var StatusBox = function StatusBox(_ref) {
  var color = _ref.color;
  var style = {
    "float": 'left',
    width: '100%',
    maxWidth: 15,
    height: 15,
    marginRight: 5,
    borderRadius: 5,
    backgroundColor: color
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style
  });
};
export default StatusBox;