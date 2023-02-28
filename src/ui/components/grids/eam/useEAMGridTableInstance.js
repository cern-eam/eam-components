import React from "react";
import { Checkbox } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import { useFilters, useFlexLayout, useRowSelect, useSortBy, useTable } from "react-table";

const DefaultCheckbox = withStyles(() => ({
    root: {
        padding: 0
    }
}))(Checkbox);


const useModifyColumns = (modifyColumns) => (hooks) => hooks.visibleColumns.push(columns => columns.length ? (modifyColumns?.(columns) ?? columns) : columns);

const useSelectionCheckboxHook = (selectable, isRowSelectable = () => true) => (hooks) => hooks.visibleColumns.push(columns => {
    if (!selectable) return columns;
    return  columns.length ? [
        {
            id: "__selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    minWidth: 42,
                    maxWidth: 42,
                }}>
                    <DefaultCheckbox
                        color="primary"
                        style={{ display: 'table-cell' }}
                        {...getToggleAllRowsSelectedProps()}
                        />
                </div>
            ),
            Cell: ({ row }) => (
                isRowSelectable(row?.values) ? <div>
                    <DefaultCheckbox
                        color="primary"
                        {...row.getToggleRowSelectedProps()}
                        />
                </div> : null
            ),
            Filter: null,
            filter: null,
            width: '',
            minWidth: 42,
            maxWidth: 42,
            _canSort: false,
            _canFilter: false,
        },
        ...columns
    ] : columns;
});

const useEAMGridTableInstance = (settings) => {
    const { selectable = false, modifyColumns, isRowSelectable, ...useTableSettings } = settings;
    const tableInstance = useTable(
        useTableSettings,
        useFilters,
        useSortBy,
        useRowSelect,
        useFlexLayout,
        useSelectionCheckboxHook(selectable, isRowSelectable),
        useModifyColumns(modifyColumns),
    );

    return tableInstance;
}

export default useEAMGridTableInstance;