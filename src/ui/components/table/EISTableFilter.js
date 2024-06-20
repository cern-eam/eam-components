import React from 'react';
import { Box, Chip, Typography } from '@mui/material';

const filterSetStyle = {
    display: 'grid',
    fontSize: '0.8125rem',
    gridAutoFlow: 'column',
    marginLeft: '0.5rem',
    gridColumnGap: '0.5rem'
}

const EISTableFilter = (props) => {
    const { filters, handleFilterChange, activeFilter } = props;

    return (
        filters &&
        Object.keys(filters).length && (

            <Box display="flex" alignItems="center">

                <Typography variant="body2" color="textSecondary">
                    Filter:
                </Typography>

                <Box style={filterSetStyle}>
                    {Object.keys(filters).map((key) => (
                        <Chip
                        size="small"
                        label={key}
                        color={activeFilter === key ? 'primary' : 'default'}
                        onClick={() => {handleFilterChange(key); activeFilter}}/>
                    ))}
                </Box>

            </Box>

        )
    );
};

export default EISTableFilter;
