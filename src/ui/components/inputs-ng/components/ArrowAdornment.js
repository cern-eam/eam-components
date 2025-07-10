import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ArrowAdornment = ({ endTextAdornment }) => {

  const style = {
    marginRight: endTextAdornment ? 76 : 6,
    marginLeft: endTextAdornment ? -100 : -30,
    zIndex: 999,
    color: '#cbcbcb',
    pointerEvents: 'none',
  };

  return <KeyboardArrowDownIcon style={style} />;
};

export default ArrowAdornment;
