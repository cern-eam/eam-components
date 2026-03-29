import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
var SearchAdornment = function SearchAdornment(_ref) {
  var endTextAdornment = _ref.endTextAdornment;
  var style = {
    marginRight: endTextAdornment ? 76 : 6,
    marginLeft: endTextAdornment ? -100 : -30,
    zIndex: 999,
    color: '#ededed',
    pointerEvents: 'none'
  };
  return /*#__PURE__*/React.createElement(SearchIcon, {
    style: style
  });
};
export default SearchAdornment;