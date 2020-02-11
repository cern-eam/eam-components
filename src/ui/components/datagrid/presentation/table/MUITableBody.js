import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { DataGridContext } from "../..//DataGridContext";

const defaultCellRender = ({ key, getValue, CustomTableCell }) => (
    <CustomTableCell align="left" key={key}>
        {getValue()}
    </CustomTableCell>
);

const MUITableBody = props => {
    const { CustomTableCell = TableCell, customCellRender = defaultCellRender } = props;
    const { rows, columns, primaryColumn, getValue } = React.useContext(
        DataGridContext
    );
    return (
        <TableBody>
            {rows &&
                rows.map((row, rowIndex) => (
                    <TableRow
                        key={primaryColumn ?
                            getValue({
                                row,
                                column: columns[primaryColumn]
                            })
                            :
                            rowIndex
                        }
                    >
                        {columns &&
                            columns.map(
                                column =>
                                    column &&
                                    column.id &&
                                    customCellRender({
                                        row,
                                        column,
                                        key: column.id,
                                        type: column.type || {},
                                        getValue: () =>
                                            getValue({ row, column }),
                                        CustomTableCell
                                    })
                            )}
                    </TableRow>
                ))}
        </TableBody>
    );
};

export default MUITableBody;
