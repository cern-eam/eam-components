import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
var ArrowAdornment = function ArrowAdornment(_ref) {
  var endTextAdornment = _ref.endTextAdornment;
  var style = {
    marginRight: endTextAdornment ? 76 : 6,
    marginLeft: endTextAdornment ? -100 : -30,
    zIndex: 999,
    color: '#cbcbcb',
    pointerEvents: 'none'
  };
  return /*#__PURE__*/React.createElement(KeyboardArrowDownIcon, {
    style: style
  });
};
export default ArrowAdornment;