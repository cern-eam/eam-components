function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
var StyledPaper = styled(Paper)({
  '&': {
    marginTop: "-2px",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    border: "1px solid #ced4da",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
  },
  '&:empty': {
    border: "none"
  }
});

var OptionsPaper = function OptionsPaper(props) {
  return /*#__PURE__*/React.createElement(StyledPaper, _extends({
    elevation: 0
  }, props));
};

export default OptionsPaper;