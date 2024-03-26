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
    const { screenCode, tabName, objectCode, customParamNames, customRenderers, showGrid, rowCount = 100} = props;

    const gridName = screenCode + '_' + tabName;

    const paramNames = ["position", "obj_code", "main_eqp_code", "OBJ_CODE", "object"].concat(customParamNames)

    const getParams = () => {
        return Object.fromEntries(paramNames.map(paramName => [paramName, objectCode]))
    }

    const gridRequest = {
        rowCount: rowCount,
        cursorPosition: 1,
        params: {
            ...getParams()
        },
        gridName: gridName,
        useNative: true,
        includeMetadata: true
    };

    const paramRequestAdapter = (gridRequest) => {
        return {
            ...gridRequest,
            userFunctionName: screenCode,
            params: {
                ...getParams()
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
                gridContainerStyle={{height: '440px'}}
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
                        </>
                    } />
            }
        </EAMTableGridRequestAdapter>
        
    );
}

export default EAMGridTab