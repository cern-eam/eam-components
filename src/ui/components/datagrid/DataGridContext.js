import React from "react";
import { DATA_GRID_SORT_TYPES, DATA_GRID_SORT_DIRECTIONS } from "./Constants";

const DataGridContext = React.createContext();

const getValue = ({ row, column }) =>
    column.getValue ? column.getValue({ row, column }) : row[column.id];

const isColumnSortable = ({ sortableColumns = [], enableSorting }) => ({ columnID }) =>
    enableSorting && sortableColumns.map(e => e.id).includes(columnID);

const DataGridProvider = props => {
    const { rows, columns, sortableColumns = [], enableSorting } = props;
    const [columnID, setColumnID] = React.useState();
    const [direction, setDirection] = React.useState();

    let sortedRows = rows;
    if (sortableColumns && sortableColumns.length && columnID) {
        sortedRows = stableSort(rows, getComparator({
            sortableColumn: sortableColumns.find(e => e.id === columnID),
            direction
        }))
    }    

    const context = {
        headers: columns.map(column => column.header),
        getValue,
        sortState: {
            columnID,
            setColumnID,
            direction,
            setDirection,
            isColumnSortable: isColumnSortable({
                sortableColumns,
                enableSorting
            })
        },
        ...props,
        rows: sortedRows
    };

    return (
        <DataGridContext.Provider value={context}>
            {props.children}
        </DataGridContext.Provider>
    );
};

const descendingComparator = ({ a, b, property }) => {
    if (b[property] < a[property]) {
        return -1;
    }
    if (b[property] > a[property]) {
        return 1;
    }
    return 0;
};

const getDefaultComparator = ({ direction, property }) => (
    (a, b) => (direction === DATA_GRID_SORT_DIRECTIONS.DESC ? 1 : -1) * descendingComparator({ a, b, property })
)


const getNumericComparator = ({ direction, property }) => {
    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
    return (a, b) => (direction === DATA_GRID_SORT_DIRECTIONS.DESC ? -1 : 1) * collator.compare(a[property], b[property]);
}

const getComparator = ({ sortableColumn, direction }) => {
    if (!sortableColumn) return;

    if (sortableColumn.comparator) {
        return sortableColumn.comparator({ direction, property });
    }
    switch (sortableColumn.sortType) {
        case DATA_GRID_SORT_TYPES.NUMERIC:
            return getNumericComparator({ direction, property: sortableColumn.id })
        case DATA_GRID_SORT_TYPES.DEFAULT:
        default:
            return getDefaultComparator({ direction, property: sortableColumn.id })
    }
}

const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
};

export { DataGridContext, DataGridProvider };
