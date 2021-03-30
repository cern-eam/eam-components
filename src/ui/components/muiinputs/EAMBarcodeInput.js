import React, {Component} from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';
import IconButton from '@material-ui/core/IconButton';
import {BarcodeScan} from 'mdi-material-ui';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

class EAMBarcodeInput extends Component {

    codeReader = null;

    state = {
        open: false,
        showBarcodeButton: false,
        error: null
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });

        if(this.codeReader) {
            this.codeReader.reset();
        }
    };

    handleCodeReaderError = ({ error }) => {
        // if the error is anything else except "no scan happened" -type of error
        if(error.message !== 'Video stream has ended before any code could be detected.') {
            this.setState({ error: error.message })
        }
    }

    startScanner() {
        this.codeReader = new BrowserMultiFormatReader();
        this.codeReader
            .listVideoInputDevices()
            .then(() =>
                this.codeReader.decodeFromInputVideoDevice(undefined, 'video')
            )
            .then(({ text }) => {
                this.onDetectedCallback(text);
                this.handleClose();
            })
            .catch(error => this.handleCodeReaderError({ error }));
    }

    onChangeHandler = (value) => {
        this.props.updateProperty(this.props.valueKey, value);
        if (this.props.onChangeValue) {
            this.props.onChangeValue(value);
        }
    };

    onDetectedCallback(result) {
        this.props.updateProperty(result)
        this.setState({ open: false, error: null})
    }

    render() {
        let userMediaSupported = false

        if(navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
            userMediaSupported = true
        }

        let iconButtonStyle = {
            position: "absolute",
            top: this.props.top || 30,
            right: this.props.right || -2,
            backgroundColor: "white",
            width: 32,
            height: 32,
            zIndex: 100,
            padding: 0
        }

        // Display just the children when no support for user media
        if (!userMediaSupported) {
            return (
                <div style={{position: "relative"}}>
                    {this.props.children}
                </div>
            )
        }

        // Active quagga when support for user media
        return (
            <div style={{position: "relative"}}>
                {this.props.children}

                <IconButton style={iconButtonStyle} onClick={this.handleClickOpen.bind(this)}>
                    <BarcodeScan/>
                </IconButton>

                {this.state.error &&
                    <p>Error happened in scanning: <code>{this.state.error}</code></p>
                }

                <Dialog
                    onEntered={() => this.startScanner()}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent style={{maxWidth: 320, maxHeight: 320}}>
                        <video id="video" width="200" height="200"></video>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default EAMBarcodeInput