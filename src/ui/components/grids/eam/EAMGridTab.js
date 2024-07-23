import React from 'react';
import EAMGrid from './EAMGrid';
import { EAMGridContextProvider } from './EAMGridContext';
import EAMTable from  '../../eamtable/EAMTable';
import EAMTableGridRequestAdapter from  '../../eamtable/EAMTableGridRequestAdapter';

const captionStyle = {
    paddingLeft: '4px'
}

const customCellStyle = {
    whiteSpace: "nowrap",
    padding: "6px 4px"
}

const customTableCellRenderer = ({ row, columnMetadata, CellComponent, customRenderers }) => {
    const customRenderer = customRenderers && customRenderers[columnMetadata.id];
    return customRenderer ? <CellComponent style= {customCellStyle}>{customRenderer(row[columnMetadata.id], columnMetadata)}</CellComponent> : null;
};

const customGridRenderer = ({ value, column, customRenderers }) => {
    const customRenderer = customRenderers && customRenderers[column.id];
    return customRenderer ? customRenderer(value) : null;
};


const EAMGridTab = (props) => {
    const { screenCode, tabName, additionalParams, additionalAttributes, objectCode, customRenderers, paramNames, showGrid, rowCount = 100, gridContainerStyle, setHasHazards } = props;
    const gridName = props.gridName || screenCode + '_' + tabName;

    const getParams = () => {
        return Object.fromEntries(paramNames.map(paramName => [paramName, objectCode]))
    }

    const gridRequest = {
        rowCount: rowCount,
        cursorPosition: 1,
        params: {
            ...getParams(),
            ...additionalParams
        },
        gridName: gridName,
        useNative: true,
        includeMetadata: true,
        ...additionalAttributes
    };

    const paramRequestAdapter = (gridRequest) => {
        return {
            ...gridRequest,
            params: {
                ...getParams(),
                ...additionalParams
            }
        }
    }
    
    return (
        showGrid ?
        <EAMGridContextProvider
            searchOnMount
            gridName={gridName}
            useNative={false}
            gridRequestAdapter={gridRequest => paramRequestAdapter(gridRequest)}
            cellRenderer={(props) => customGridRenderer({...props, customRenderers})}
            initialShowFilters={false}
            {...props}>
            <EAMGrid
                gridContainerStyle={{...gridContainerStyle}}
            />
        </EAMGridContextProvider>
        : 
        <EAMTableGridRequestAdapter gridRequest={gridRequest}>
            {({ loading, requestError, rows, columnsMetadata, totalCount }) =>
                <EAMTable
                    loading={loading}
                    rows={rows}
                    columnsMetadata={columnsMetadata}
                    tableProps={{stickyHeader: true}}
                    tableContainerProps={{sx: {maxHeight: 440}}}
                    cellStyle={customCellStyle}
                    cellRenderer={(props) => customTableCellRenderer({...props, customRenderers})}
                    isSortEnabled={() => true}
                    extraBodyRender={() =>
                        <>
                            {!loading && !requestError && !rows.length && <caption style={{...captionStyle}}>No data to show.</caption>}
                            {!loading && requestError && <caption style={{...captionStyle}}>Failed to load data</caption>}
                            {totalCount > 0 && totalCount > rowCount && <caption style={{...captionStyle}}>First {rowCount} records. Show grid to see all the records.</caption>}
                            {setHasHazards && setHasHazards(totalCount > 0)}
                        </>
                    } />
            }
        </EAMTableGridRequestAdapter>
        
    );
}

export default EAMGridTab