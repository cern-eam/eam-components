import React, { Component } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';
import IconButton from '@material-ui/core/IconButton';
import { BarcodeScan } from 'mdi-material-ui';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class EAMBarcodeInput extends Component {
    codeReader = null;

    state = {
        open: false,
        showBarcodeButton: false,
        videoInputDevices: [],
        currentCamera: "",
    };

    componentDidMount() {
        this.codeReader = new BrowserMultiFormatReader();
        this.codeReader.listVideoInputDevices().then((devices) => {
            if (devices.length > 0) {
                const camera = localStorage.getItem("camera");
                const currentCamera = devices.find((device) => device.deviceId === camera)?.deviceId || devices[0].deviceId;
                this.setState({ currentCamera, showBarcodeButton: true, videoInputDevices: devices });
            }
        });
    }

    componentWillUnmount() {
        this.codeReader.reset();
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
        this.codeReader.reset();
    };

    startScanner() {
        this.startDecoding();
    }

    startDecoding = (camera = this.state.currentCamera) => {
        this.codeReader
            .decodeFromInputVideoDevice(camera, 'video')
            .then((result) => {
                this.onDetectedCallback(result.text);
                this.codeReader.reset();
                this.handleClose();
            })
            .catch((err) => console.error(err));
    };

    handleCameraChange = (camera) => {
        this.codeReader.reset();
        this.setState({ currentCamera: camera }, () => this.startDecoding(camera));
        localStorage.setItem("camera", camera);
    };

    onChangeHandler = (value) => {
        this.props.updateProperty(this.props.valueKey, value);
        if (this.props.onChangeValue) {
            this.props.onChangeValue(value);
        }
    };

    onDetectedCallback(result) {
        this.props.updateProperty(result);
        this.setState({ open: false });
    }

    render() {
        let iconButtonStyle = {
            position: 'absolute',
            top: this.props.top || 30,
            right: this.props.right || -2,
            backgroundColor: 'white',
            width: 32,
            height: 32,
            zIndex: 100,
            padding: 0,
        };
        const { currentCamera, videoInputDevices } = this.state;

        // Display just the children when no support for user media
        if (!this.state.showBarcodeButton) {
            return <div style={{ position: 'relative' }}>{this.props.children}</div>;
        }

        // Active quagga when support for user media
        return (
            <div style={{ position: 'relative' }}>
                {this.props.children}

                <IconButton style={iconButtonStyle} onClick={this.handleClickOpen.bind(this)}>
                    <BarcodeScan />
                </IconButton>

                <Dialog
                    TransitionProps={{
                        onEntered: () =>
                            this.startScanner(this.onDetectedCallback.bind(this), this.handleClose.bind(this)),
                    }}
                    open={this.state.open}
                    fullScreen
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    {videoInputDevices?.length > 1 && (
                        <DialogTitle>
                            <TextField
                                value={currentCamera}
                                onChange={(e) => this.handleCameraChange(e.target.value)}
                                select
                                label="Choose the camera"
                                style={{ minWidth: 250 }}
                            >
                                {videoInputDevices.map((videoInputDevice) =>
                                    <MenuItem key={videoInputDevice.deviceId} value={videoInputDevice.deviceId}>{videoInputDevice.label}</MenuItem>)}
                            </TextField>
                        </DialogTitle>
                    )}
                    <DialogContent style={{ padding: 0 }}>
                        <video autoPlay muted playsInline id="video" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%" }} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default EAMBarcodeInput;
