import React, {Component} from 'react';
import BlockUi from 'react-block-ui'
import EDMSGalleria from './galleria/EDMSGalleria'
import DocumentList from './doclist/DocumentList'
import DocumentListTest from './doclist/DocumentListTest'
import WSEDMS from "../../../tools/WSEDMS";
import EISPanel from '../panel';
import EDMSWidgetToolbar from "./EDMSWidgetToolbar";
import NCRCreation from "./ncrwidget/ncrcreation/NCRCreation";
import DocumentCreation from "./documentwidget/doccreation/DocumentCreation";

const noCreationMode = 'DISABLED';
const regularCreationMode = 'REGULAR';
const NCRCreationMode = 'NCR';

class EDMSWidget extends Component {

    state = {
        isLoading: true,
        currentView: 'DOCLIST',
        documentCreationVisible: false
    };

    componentDidMount() {
        if (this.props.objectID && this.props.objectType) {
            this.readDocuments(this.props.objectID, this.props.objectType);
        } else if(this.props.documents && this.props.documents.length > 0){
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.objectID !== nextProps.objectID || this.props.objectType !== nextProps.objectType && this.props.objectID) {
            this.readDocuments(nextProps.objectID, nextProps.objectType);
        } else if (!nextProps.objectID || !nextProps.objectType) { /*Clean documents*/
            this.unblockUI();
        }
    }

    //
    // DOCUMENT CREATION
    //

    generateDocumentCreation = (creationMode) => {
        switch (creationMode) {
            case NCRCreationMode:
                return <NCRCreation createDocument={this.createDocument}
                                    objectID={this.props.objectID}
                                    objectType={this.props.objectType}/>;
            default:
                return <DocumentCreation createDocument={this.createDocument}/>;
        }
    };

    createDocument = (document, files, documentLink) => {
        //creating document
        this.blockUI();
        //isLoading is set to false later by readDocuments if successful

        let data = {
            objectId: this.props.objectID,
            objectType: this.props.objectType,
            document,
            documentLink,
            mode: this.props.creationMode
        };

        WSEDMS.createNewDocument(data)
            .then(response => {
                if(files.length > 0) {
                    let {edmsId, version} = response.body.data;

                    Promise.all(
                        files.map((file) => {
                            this.uploadFile(edmsId, version, file)
                        }))
                        .then(() => {
                            this.props.showSuccess('Files have been uploaded');
                            this.readDocuments(this.props.objectID, this.props.objectType)
                        }).catch(() => {
                        //TODO enhance the error handling (partial fail/success)
                        this.displayError('File upload was not successful');
                        this.readDocuments(this.props.objectID, this.props.objectType)
                    });

                    this.setState(() => ({documentCreationVisible: false}))
                } else {
                    this.readDocuments(this.props.objectID, this.props.objectType);
                    this.setState(() => ({documentCreationVisible: false}))
                }
            }).catch(reason => {
            const errorMessage = this.getErrorMessage(reason);
            this.displayError(errorMessage);
            this.unblockUI();
        });
    };

    //
    // FILE UPLOAD
    //

    uploadFile = (docId, version, file) => {
        let formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('documentid', docId);
        formData.append('documentversion', version);

        return new Promise(function(resolve, reject) {
            // Do the usual XHR stuff
            let req = new XMLHttpRequest();
            const urlUpload = process.env.REACT_APP_BACKEND.replace('/eamlightws/rest', '/cern-eam-services/edms/upload');
            req.open('POST', urlUpload, true);

            req.onload = function() {
                // This is called even on 404 etc
                // so check the status
                if (req.status === 200) {
                    // Resolve the promise with the response text
                    resolve('Successful Upload');
                }
                else {
                    // Otherwise reject with the status text
                    // which will hopefully be a meaningful error
                    reject(Error(req.statusText));
                }
            };

            // Handle network errors
            req.onerror = function() {
                reject(Error("Network Error"));
            };

            // Make the request
            req.send(formData);
        });

    };

    handleFilesUpload = (documentId, version, files) => {
        //Upload in progress
        this.blockUI();
        //isLoading is set to false later by readDocuments

        Promise.all(files.map(file => this.uploadFile(documentId,version,file)))
            .then(() => {
                this.props.showSuccess('Files have been uploaded');
                this.readDocuments(this.props.objectID, this.props.objectType)
            }).catch( () => {
            //TODO enhance the error handling (partial fail/success)
            this.displayError('File upload was not successful');
            this.readDocuments(this.props.objectID, this.props.objectType)
        })
    };

    //
    // READ DOCUMENTS
    //
    readDocuments = (objectID, objectType) => {
        //Is loading
        this.blockUI();
        //Get documents

        WSEDMS.getEDMSDocuments(objectID, objectType, this.props.creationMode)
            .then(response => {
                let documents = response.body.data;
                this.setState(() => ({
                    documentList: documents.filter(this.props.filter || ( this.props.creationMode === 'NCR' ? this.NCRFilter : document => !this.NCRFilter(document))),
                    isLoading: false
                }));
            }).catch(reason => {
            const errorMessage = this.getErrorMessage(reason);
            this.unblockUI();
            //TODO handle the error message...
        });

    };

    NCRFilter = (document) => {
        return (document.documentType === 'Report' && document.attributes === 'Non conformity')
    }

    //
    // STYLES
    //
    mainDivStyle = {
        width: "100%",
        marginBottom: -20,
        marginTop: -8,
        minHeight: 300
    };

    //
    // ERROR HANDLING
    //
    displayError = (message) => {
        console.log('showing error', message)
        this.props.showError(message);
    };

    getErrorMessage = (reason) => {
        if (reason && reason.response && reason.response.body && reason.response.body.errors) {
            return reason.response.body.errors[0].message;
        }
    };

    //
    // UI BLOCKING
    //
    blockUI = () => {
        this.setState(() => ({isLoading: true}))
    };

    unblockUI = () => {
        this.setState(() => ({isLoading: false}))
    };

    render() {
        const { hideLink } = this.props;
        return (
            <EISPanel heading={this.props.title}
                      detailsStyle={{marginLeft: '-24px', marginRight: '-24px'}}
                      link={hideLink ? undefined : this.props.edmsDocListLink + this.props.objectType + ":" + this.props.objectID + "::"}>
                <BlockUi tag="div" blocking={this.state.isLoading} style={this.mainDivStyle}>

                    <EDMSWidgetToolbar currentView={this.state.currentView}
                                       documentCreationVisible={this.state.documentCreationVisible}
                                       documentCreationDisabled={this.props.creationMode === noCreationMode}
                                       galleriaClickHandler={() => this.setState({currentView: "GALLERIA"})}
                                       doclistClickHandler={() => this.setState({currentView: "DOCLIST"})}
                                       documentCreationHandler={() => this.setState({documentCreationVisible: !this.state.documentCreationVisible})}
                    />

                    {this.state.documentCreationVisible &&
                        this.generateDocumentCreation(this.props.creationMode)}


                    <div style={{display: this.state.currentView === 'GALLERIA' ? 'block' : 'none', margin: 5, minWidth: 514}}>
                        <EDMSGalleria documentList={this.state.documentList}
                                      handleFilesUpload={this.handleFilesUpload}
                                      {...this.props}/>
                    </div>


                    <div style={{display: this.state.currentView === 'DOCLIST' ? 'block' : 'none', margin: 5}}>
                        <DocumentList documents={this.state.documentList}
                                      filesUploadHandler={this.handleFilesUpload}
                        />
                    </div>
                </BlockUi>
            </EISPanel>
        )
    }
}

EDMSWidget.defaultProps = {
    mode: 'EDMS',
    title: 'EDMS DOCUMENTS',
    creationMode: 'REGULAR'
};

export default EDMSWidget