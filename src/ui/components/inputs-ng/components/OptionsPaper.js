import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const StyledPaper = styled(Paper)({
    '&': {
        marginTop: "-3px",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        border: "1px solid #ced4da",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
    },
    // Because of 'onOpen={() => setOpen(true)}' on Autocomplete and Select the Paper is also rendered when there are no options  
    '&:empty': {
        border: "none"
    }
});

const OptionsPaper = (props) => {
    return <StyledPaper elevation={0} {...props}/>
}

export default OptionsPaper;