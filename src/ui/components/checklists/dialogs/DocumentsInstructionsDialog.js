import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import './DocumentsInstructionsDialog.css';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import BlockUi from 'react-block-ui'
import KeyCode from "eam-components/dist/enums/KeyCode";
import Dialog from "@mui/material/Dialog"
import CommentUser from '../../comments/CommentUser';
import EAMSelect from '../../inputs-ng/EAMSelect';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const flatFiles = (documents) => {
    return documents?.flatMap((document) => (
        document.files.map(file => (
          {
              label: `${document.title} - ${file.fileName}`,
              url: file.fullPath
          }
      ))))
};

function DocumentsInstructionsDialog(props) {

    const {title, subtitle, taskPlanMetadata} = props;

    const { comments = [], documents = [] } = taskPlanMetadata || {};

    const [open, setOpen] = useState(false);
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [flattenedFiles, setFlattenedFiles] = useState([]);

    const toggleInfo = () => {
        setOpen(!open);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === KeyCode.ENTER) {
            e.stopPropagation();
        }
    };

    useEffect(() => {
        if (open) {
            const flattenedFiles = flatFiles(documents);
            setFlattenedFiles(flattenedFiles);
            setSelectedDocument(flattenedFiles?.[0]);
        }
    }, [open, taskPlanMetadata]);

    return (
        <>
            <IconButton disabled={documents.length == 0 & comments.length == 0} onClick={(e) => { e.stopPropagation(); toggleInfo(); }}>
                <InfoOutlinedIcon fontSize='small' />
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
                        {title} {subtitle && <p className="subtitle"> - {subtitle}</p>}
                    </DialogTitle>
                    <DialogContent className="dialogContent" id="content">
                        {comments?.length > 0 && (
                            <BlockUi tag="div" className="blockUiInstructions">
                                <h3>Instructions</h3>    
                                    {comments.map((comment, index) => (
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
                                    ))}       
                            </BlockUi>
                        )}
                        {flattenedFiles?.length > 0 && (
                            <BlockUi tag="div" className="blockUiDocuments" style={ comments?.length == 0 ? {border: 0} : {} }>
                                {flattenedFiles?.length !== 1 ? (
                                    <>
                                        <h3>Documents</h3>
                                        <EAMSelect
                                            label="Document"
                                            value={selectedDocument}
                                            onChange={(value) => setSelectedDocument(value)}
                                            renderValue={(value) => value.label || ''}
                                            options={flattenedFiles}
                                        />
                                    </>
                                ) : (
                                    <p className='onlyOneDocument'>{selectedDocument.label}</p>
                                )}
                                {selectedDocument?.code !== '' ? (
                                    <div>
                                        <embed 
                                            allowFullScreen
                                            title="EDMS"
                                            className="documentIframe"
                                            src={selectedDocument?.url}
                                        />
                                    </div>
                                ) : (
                                    <p className="noDocumentSelected">No document selected.</p>
                                )}
                            </BlockUi>
                        )}

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={toggleInfo} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}

export default DocumentsInstructionsDialog;