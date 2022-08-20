import React from 'react';
import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blue, green, red, lightBlue, lightGreen, deepOrange } from '@mui/material/colors';

const StyledRegionAvatar = styled(Avatar)(({theme}) => ({
    '&': {
        marginRight: 8, 
        marginLeft: 4,
        color: theme.palette.primary.main,
        backgroundColor: green[50]
    }
}))

const RegionAvatar = (props) => {
    return (
        <StyledRegionAvatar variant="rounded" >
            {props.children}
        </StyledRegionAvatar>
    )
}

export default RegionAvatar;