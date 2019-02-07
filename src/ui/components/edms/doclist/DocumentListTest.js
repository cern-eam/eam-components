import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import StatusBox from './StatusBox';
import {getEDMSFileUrl} from "../utils/EDMSUtils";

class DocumentListTest extends Component {

    thumbnailStyle = {
        maxWidth: 90,
        maxHeight: 90
    }

    computeDropZoneStyle = () => ({
        border: "1px solid transparent",
        backgroundColor: (this.props.index%2) ? 'rgb(250, 250, 250)' : 'white'
    })

    computeDropZoneActiveStyle = () => ({
        border: "1px dashed #a7a7a7",
        backgroundColor: (this.props.index%2) ? 'rgb(250, 250, 250)' : 'white'
    })

    computeStatusBox = (status) => {
        let statusColor = ''
        switch (status) {
            case 'In Work':
                statusColor = 'rgb(204, 0, 0)'
                break
            case 'Draft For Discussion':
                statusColor = 'rgb(255, 240, 0)'
                break
            case 'Released':
                statusColor = 'rgb(0, 204, 0)'
                break
            default:
                statusColor = 'rgb(119, 119, 119)'
        }
        return <StatusBox color={statusColor}/>
    }

    //
    // DropZone handling
    //

    stopPropagation = (event) => {
        event.stopPropagation()
    }

    onFileDrop = (acceptedFiles, rejectedFiles) => {
        this.props.filesUploadHandler(this.props.document.edmsId, this.props.document.version, acceptedFiles)
    }


    render() {
        return (
            <div>
                <ReactTable
                    data={this.props.documents}
                    noDataText="No documents found"
                    columns={[
                        {
                            Header: 'Id',
                            accessor:'edmsId',
                            maxWidth: 100,
                            Cell: cellInfo => (
                                <a href={cellInfo.original.url} target='_blank' onClick={this.stopPropagation}> {cellInfo.original.edmsId + ' v.' + cellInfo.original.version} </a>
                            )
                        },
                        {
                            Header: 'Title',
                            accessor: 'title'
                        },
                        {
                            Header: 'Status',
                            accessor: 'status',
                            maxWidth: 150,
                            Cell: row => (
                                <span>
                                    {this.computeStatusBox(row.value)}
                                    {row.value}
                                </span>
                            )
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    SubComponent={cellInfo => {
                        return (
                            <div style={{ padding: "20px" }}>
                                <ReactTable
                                    data={cellInfo.original.properties.edms_property === null ? [] : cellInfo.original.properties.edms_property}
                                    noDataText="No details for this document"
                                    columns={[
                                        {
                                            Header: 'Properties',
                                            columns:[
                                                {
                                                    Header: 'Name',
                                                    accessor: 'name'
                                                },
                                                {
                                                    Header: 'Value',
                                                    accessor: 'value'
                                                }]
                                        }]
                                    }
                                    defaultPageSize={5}
                                    showPagination={false}
                                    style={{
                                        height: "200px"
                                    }}
                                />
                                <br />
                                <br />
                                <ReactTable
                                    data={cellInfo.original.files}
                                    noDataText="No files in this document"
                                    columns={[
                                        {
                                            Header: 'File',
                                            columns:[
                                                {
                                                    Header: 'Thumbnail',
                                                    accessor: 'edmsId',
                                                    width: 100,
                                                    Cell: cellInfo => (
                                                        <div>
                                                            <img style={this.thumbnailStyle}
                                                                 id={cellInfo.original.edmsId + "###" + cellInfo.original.innerId}
                                                                 src={getEDMSFileUrl(cellInfo.original)}/>
                                                        </div>
                                                    )
                                                },
                                                {
                                                    Header: 'Name',
                                                    accessor: 'fileName',
                                                    Cell: cellInfo => (
                                                        <a href={cellInfo.original.fullPath} target='_blank'>{cellInfo.original.fileName}</a>
                                                    )
                                                }]
                                        }]
                                    }
                                    defaultPageSize={5}
                                    showPagination={false}
                                    style={{
                                        height: "200px"
                                    }}
                                />
                            </div>
                        )
                    }}
                />
            </div>
        )
    }
}

export default DocumentListTest