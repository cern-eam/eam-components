import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
var Search = function Search(_ref) {
  var endTextAdornment = _ref.endTextAdornment;
  var style = {
    marginRight: endTextAdornment ? 76 : 6,
    marginLeft: endTextAdornment ? -100 : -30,
    zIndex: 999,
    color: '#cbcbcb',
    pointerEvents: 'none'
  };
  return /*#__PURE__*/React.createElement(SearchIcon, {
    style: style
  });
};
export default Search;