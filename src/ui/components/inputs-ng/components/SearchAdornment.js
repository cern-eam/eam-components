import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchAdornment = ({ endTextAdornment }) => {

  const style = {
    marginRight: endTextAdornment ? 76 : 6,
    marginLeft: endTextAdornment ? -100 : -30,
    zIndex: 999,
    color: '#ededed',
    pointerEvents: 'none',
  };

  return <SearchIcon style={style} />;
};

export default SearchAdornment;
