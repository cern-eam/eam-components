import React from "react";
import { DataGridContext } from "./DataGridContext";

const GridSorting = props => {
    const { columnID, direction } = props;
    const { sortState } = React.useContext(DataGridContext);
    React.useEffect(() => {
        columnID && sortState.setColumnID(columnID);
        direction && sortState.setDirection(direction);
    }, [columnID, direction]);
    return null;
};

export default GridSorting;
