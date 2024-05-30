import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import './DocumentsInstructionsDialog.css';
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
import HelpIcon from '@mui/icons-material/Help';
import WSChecklists from '../../../../tools/WSChecklists';
import WSEAMServicesClient from '../../../../tools/WSEAMServicesClient';
import DocViewer, {DocViewerRenderers} from "@cyntler/react-doc-viewer";
import WSEDMS from '../../../../tools/WSEDMS';

function DocumentsInstructionsDialog(props) {

    const [open, setOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [selectedDocument, setSelectedDocument] = useState(null);
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
            let documentsResponse = await WSEDMS.getEDMSDocuments(props.taskCode, 'TASK', 'EDMS');
            const documents = documentsResponse.body.data.flatMap((document) => (
              document.files.map(file => (
                {
                    label: `${document.title} - ${file.fileName}`,
                    url: file.fullPath
                }
            ))))
            if(documents.length > 0) {
                setSelectedDocument(documents[0]);
            }
            setDocuments(documents);
        } catch (error) {
            console.error("Failed to retrieve documents", error);
        } finally {
            setLoadingDocuments(false);
        }
    };

    useEffect(() => {
        if (open) {
            retrieveComments();
            if(documents.length == 0) retrieveDocuments();
        }
    }, [open]);

    return (
        <>
            <IconButton onClick={(e) => { e.stopPropagation(); toggleInfo(); }}>
                <HelpIcon fontSize='small' />
            </IconButton>
            <div onClick={(e) => { e.stopPropagation() }} onKeyDown={onKeyDown}>
                <Dialog
                    fullWidth
                    maxWidth="lg"
                    id="documentsInstructionsDialog"
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
                            {documents.length > 0 ? 
                                <>
                                <EAMSelect
                                    
                                    label="Document"
                                    value={selectedDocument}
                                    onChange={(value) => setSelectedDocument(value)}
                                    renderValue={value => value.label || ''}
                                    options={documents}
                                />
                                {selectedDocument?.code != '' ?  
                                    <div>
                                        <iframe
                                            allowFullScreen
                                            title="EDMS"
                                            className="documentIframe"
                                            src={selectedDocument?.url}
                                        />
                                    </div>
                                :   <p className='noDocumentSelected'>No document selected.</p>
                                }
                                </>
                            : !loadingDocuments && (<p>No documents available.</p>)
                        }
                        
                        
                         {/*
                        <div className="documentsContainer">
                        {documents.length > 0 ? (<DocViewer documents={documents}
                                       initialActiveDocument={documents[0]}
                                       pluginRenderers={DocViewerRenderers}
                                       />)
                                       : !loadingDocuments && (<p>No documents available.</p>)
                        }
                        </div>
                    */}

                         
                        </BlockUi>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={toggleInfo} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}

export default DocumentsInstructionsDialog;