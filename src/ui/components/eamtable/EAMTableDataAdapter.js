import React from 'react';

const EAMTableDataAdapter = (props) => {
    const { equipmentCode, fetchData, convertRowData, convertColumnMetadata } = props;
    const [loading, setLoading] = React.useState(true);
    const [requestError, setRequestError] = React.useState(false);
    const [rows, setRows] = React.useState([]);
    const [columnsMetadata, setColumnsMetadata] = React.useState([]);
    const [totalCount, setTotalCount] = React.useState(0);

    React.useEffect(() => {
        (async () => {
                setLoading(true);
                const response = await fetchData().catch(() => {
                    setLoading(false);
                    setRequestError(true);
                    return;
                });
                const responseBody = response && response.body;
                if (!responseBody) return;
                setRows(convertRowData(responseBody));
                setColumnsMetadata(convertColumnMetadata(responseBody));
                setLoading(false);
                setTotalCount(responseBody.data?.records ?? 0)
        })();
    }, [equipmentCode]);

    const context = {
        loading,
        requestError,
        rows,
        columnsMetadata,
        totalCount
    };

    return props.children(context);
};

export default EAMTableDataAdapter;
