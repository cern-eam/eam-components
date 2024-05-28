import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import './PreviewDocumentsDialog.css';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import BlockUi from 'react-block-ui'
import KeyCode from "eam-components/dist/enums/KeyCode";
import Dialog from "@mui/material/Dialog"
import WSComments from '../../../../tools/WSComments';
import CommentUser from '../../comments/CommentUser';
import EAMSelect from '../../inputs-ng/EAMSelect';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import WSChecklists from '../../../../tools/WSChecklists';
import WSEAMServicesClient from '../../../../tools/WSEAMServicesClient';
import DocViewer, {DocViewerRenderers} from "@cyntler/react-doc-viewer";


const base64ToBlob = (base64, mimeType='') => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    return new Blob([byteArray], {type: mimeType});
}

const MyHeader = (state, previousDocument, nextDocument) => {
    if (!state.currentDocument || state.config?.header?.disableFileName) {
      return null;
    }
  
    return (
      <>
        <div>{state.currentDocument.uri || ""}</div>
        <div>
          <button onClick={previousDocument} disabled={state.currentFileNo === 0}>
            Previous Document
          </button>
          <button
            onClick={nextDocument}
            disabled={state.currentFileNo >= state.documents.length - 1}
          >
            Next Document
          </button>
        </div>
      </>
    );
  };


function PreviewDocumentsDialog(props) {

    const [open, setOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const [documents, setDocumments] = useState([]);
    const [loadingInstructions, setLoadingInstructions] = useState(false);
    const [loadingDocuments, setLoadingDocuments] = useState(false);

    const toggleInfo = () => {
        setOpen(!open);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === KeyCode.ENTER) {
            e.stopPropagation();
        }
    };

    const retrieveComments = async () => {
        try {
            setLoadingInstructions(true);
            let commentsResponse = await WSComments.readComments('TASK', props.taskCode + "#0");
            setComments(commentsResponse?.body?.data || []);
        } catch (error) {
            console.error("Failed to retrieve comments", error);
        } finally {
            setLoadingInstructions(false);
        }
    };

    const retrieveDocuments = async () => {
        try {
            setLoadingDocuments(true);
            let filesResponse = await WSEAMServicesClient.getAllFiles(props.taskCode);
            const documents = filesResponse.body.data.map((file) => ({
                uri: URL.createObjectURL(base64ToBlob(file.data, file.type)),
                fileName: file.name,
            }))
            setDocumments(documents);
        } catch (error) {
            console.error("Failed to retrieve documents", error);
        } finally {
            setLoadingDocuments(false);
        }
    };

    useEffect(() => {
        if (open) {
            retrieveComments();
            retrieveDocuments();
        }
        return () => {
            setDocumments([]);
            setComments([]);  
        }
    }, [open]);

    return (
        <>
            <IconButton onClick={(e) => { e.stopPropagation(); toggleInfo(); }}>
                <InfoIcon fontSize='small' />
            </IconButton>
            <div onClick={(e) => { e.stopPropagation() }} onKeyDown={onKeyDown}>
                <Dialog
                    fullWidth
                    maxWidth="lg"
                    id="previewDocumentsDialog"
                    open={open}
                    onClose={toggleInfo}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title" className="infoTitle">
                        INFO
                    </DialogTitle>
                    <DialogContent className="dialogContent" id="content">
                        <BlockUi tag="div" blocking={loadingInstructions} className="blockUiInstructions">
                            <h3>Instructions</h3>
                            {comments.length > 0 ? (
                                comments.map((comment, index) => (
                                    <div key={index} className="instructionContainer">
                                        <div className="instructionTextContainer">
                                            {comment.text}
                                        </div>
                                        <div className="instructionInfoContainer">
                                            <CommentUser
                                                userDesc={comment.creationUserDesc}
                                                userDate={comment.creationDate}
                                            />
                                        </div>
                                    </div>
                                ))
                            ) : !loadingInstructions && (
                                <p>No instructions available.</p>
                            )}
                        </BlockUi>
                        <BlockUi tag="div" blocking={loadingDocuments} className="blockUiDocuments">
                            <h3>Documents</h3>
                            {/*<EAMSelect
                                selectOnlyMode
                                label="Document"
                                renderValue={value => value.value || value.code}
                                options={documents.map((document) => ({name: document.fileName}))}
                            />
                        
                            <iframe
                                allowFullScreen
                                title="EDMS"
                                className="documentIframe"
                                src={documents[0]?.uri}
                        ></iframe>
                        */}
                        <div className="documentsContainer">
                        {documents.length > 0 ? (<DocViewer documents={documents}
                                       initialActiveDocument={documents[0]}
                                       pluginRenderers={DocViewerRenderers}
                                       />)
                                       : !loadingDocuments && (<p>No documents available.</p>)
                        }
                        </div>

                         
                        </BlockUi>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={toggleInfo} color="primary" disabled={loadingInstructions || loadingDocuments}>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}

export default PreviewDocumentsDialog;