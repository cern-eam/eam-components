import React from 'react';
import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blue, green, red, lightBlue, lightGreen, deepOrange } from '@mui/material/colors';
var StyledRegionAvatar = styled(Avatar)(function (_ref) {
  var theme = _ref.theme;
  return {
    '&': {
      marginRight: 8,
      marginLeft: 4,
      color: theme.palette.primary.main,
      backgroundColor: green[50]
    }
  };
});

var RegionAvatar = function RegionAvatar(props) {
  return /*#__PURE__*/React.createElement(StyledRegionAvatar, {
    variant: "rounded"
  }, props.children);
};

export default RegionAvatar;