import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const filterSetStyle = {
    display: 'grid',
    fontSize: '0.8125rem',
    gridAutoFlow: 'column',
    marginLeft: '0.5rem',
    gridColumnGap: '0.5rem',
    paddingRight: '100%'
}

const EISTableFilter = (props) => {
    const { filters, handleFilterChange, activeFilter } = props;

    return (
        filters &&
        Object.keys(filters).length && (

            <div style={{ display: 'flex', flexDirection: 'row' }}>

                <Typography 
                variant="body2" 
                color="textSecondary" 
                style={{ width: '100%', textAlign: 'center' }}
                >
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

            </div>

        )
    );
};

export default EISTableFilter;
