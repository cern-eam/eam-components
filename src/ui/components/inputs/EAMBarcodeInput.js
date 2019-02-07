import React, {Component} from 'react';
import Quagga from 'quagga';
import IconButton from '@material-ui/core/IconButton';
import {BarcodeScan} from 'mdi-material-ui';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

class EAMBarcodeInput extends Component {

    state = {
        open: false,
        showBarcodeButton: false
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
        Quagga.stop()
    };

    startScanner(mydiv, onDetectedCallback, handleClose) {
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: mydiv,
                constraints: {
                    width: {min: 640},
                    height: {min: 480},
                    facingMode: "environment"
                }
            },
            locator: {
                patchSize: "medium",
                halfSample: true
            },
            locate: true,
            numOfWorkers: 4,
            frequency: 10,
            decoder: {
                readers: ['code_128_reader', 'code_39_reader'],
                multiple: false
            },

        }, function (err) {
            if (err) {
                console.log('error: ', err)
                handleClose()
                return
            }

            Quagga.start();
        });

        Quagga.onProcessed(function (result) {
            var drawingCtx = Quagga.canvas.ctx.overlay,
                drawingCanvas = Quagga.canvas.dom.overlay;

            if (result) {
                if (result.boxes) {
                    drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                    result.boxes.filter(function (box) {
                        return box !== result.box;
                    }).forEach(function (box) {
                        Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
                    });
                }

                if (result.box) {
                    Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
                }

                if (result.codeResult && result.codeResult.code) {
                    Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
                }
            }
        });


        Quagga.onDetected(function (result) {
            if (result.codeResult.startInfo.error > 0.1) {
            } else {
                Quagga.stop();
                onDetectedCallback(result.codeResult.code)
            }
        });
    }

    onChangeHandler = (value) => {
        this.props.updateProperty(this.props.valueKey, value);
        //Extra function if needed
        if (this.props.onChangeValue) {
            this.props.onChangeValue(value);
        }
    };

    onDetectedCallback(result) {
        this.props.updateProperty(result);
        this.setState({open: false})
    }


    render() {

        if (navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

        }

        let style = {
            maxWidth: "320px",
            maxHeight: "320px",
            stretchOnPhone: true
        };

        let iconButtonStyle = {
            position: "absolute",
            top: this.props.top || 30,
            right: this.props.right || -2,
            backgroundColor: "white",
            width: 32,
            height: 32,
            zIndex: 100,
            padding: 0
        };


        return (
            <div style={{position: "relative"}}>
                {this.props.children}

                <IconButton style={iconButtonStyle} onClick={this.handleClickOpen.bind(this)}>
                    <BarcodeScan/>
                </IconButton>

                <Dialog
                    onEntered={() => this.startScanner(this.mydiv, this.onDetectedCallback.bind(this), this.handleClose.bind(this))}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent style={{maxWidth: 320, maxHeight: 320}}>
                        <div style={style} ref={mydiv => this.mydiv = mydiv}>

                        </div>
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

export default EAMBarcodeInput;