import React from "react";
import { DataGridContext } from "../../DataGridContext";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { DATA_GRID_SORT_DIRECTIONS } from "../../Constants";

const createSortHandler = ({ columnID, sortState }) => event => {
    const isAsc = sortState.columnID === columnID && sortState.direction === DATA_GRID_SORT_DIRECTIONS.ASC;
    sortState.setColumnID(columnID);
    sortState.setDirection(isAsc ? DATA_GRID_SORT_DIRECTIONS.DESC : DATA_GRID_SORT_DIRECTIONS.ASC);
};

const defaultCellRender = ({
    column,
    getHeader,
    sortState,
    CustomTableCell
}) => {
    return (
        <CustomTableCell
            sortDirection={
                sortState.columnID === column.id ? sortState.direction : false
            }
            key={column.id}
        >
            {sortState.isColumnSortable({ columnID: column.id }) ? (
                <TableSortLabel
                    active={sortState.columnID === column.id}
                    direction={
                        sortState.columnID === column.id
                            ? sortState.direction
                            : DATA_GRID_SORT_DIRECTIONS.ASC
                    }
                    onClick={createSortHandler({
                        columnID: column.id,
                        sortState
                    })}
                >
                    {getHeader()}
                </TableSortLabel>
            ) : (
                getHeader()
            )}
        </CustomTableCell>
    );
};

const MUITableHeader = props => {
    const { CustomTableCell = TableCell, customCellRender = defaultCellRender } = props;
    const {
        columns,
        sortState,
        enableSorting,
        enableFiltering,
        sortableColumns
    } = React.useContext(DataGridContext);

    return (
        <TableHead>
            <TableRow>
                {columns.map(column =>
                    customCellRender({
                        enableSorting,
                        enableFiltering,
                        column,
                        sortableColumns,
                        sortState,
                        key: column.id,
                        getHeader: () => column.header,
                        CustomTableCell
                    })
                )}
            </TableRow>
        </TableHead>
    );
};

export default MUITableHeader;
