import React from "react";
import GridWS from "../eamgrid/lib/GridWS";
import EAMTableDataAdapter from "./EAMTableDataAdapter";

const EAMTableGridRequestAdapter = props => {
    const { gridRequest, headers, localizeResults } = props;

    const convertRowData = (responseBody) => {
        return flattenGridRow((responseBody.data || {}).row || [])
    }
    
    const convertColumnMetadata = (responseBody) => {
        return getGridFieldsColumns((responseBody.data || {}).gridField, headers)
    }

    return (
        <EAMTableDataAdapter
            fetchData={async () => GridWS.getGridData(gridRequest, {headers: localizeResults ? {INFOR_LOCALIZE_RESULTS: true} : {}})}
            equipmentCode={gridRequest?.params.obj_code}
            convertRowData={convertRowData}
            convertColumnMetadata={convertColumnMetadata} >
                {(context) => props.children(context)}
        </EAMTableDataAdapter>
    );
};

export default EAMTableGridRequestAdapter;


const flattenGridRow = row => row.map(row => row &&row.cell &&
    row.cell.reduce(
        (acc, cell) => ({
            ...acc,
            [cell.t]: cell.value
        }),
        {}
    )
);

const getGridFieldsColumns = (gridFields, headers) =>
    gridFields.map(gf => ({
        id: gf.name,
        header: headers ? headers[gf.name] : gf.label,
        dataType: gf.dataType,
        width: gf.width
    }));
