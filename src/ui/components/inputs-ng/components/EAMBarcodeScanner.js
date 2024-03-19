import React, { useEffect, useState, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";
import IconButton from "@mui/material/IconButton";
import { BarcodeScan, Devices } from "mdi-material-ui";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EAMSelect from '../EAMSelect'


const EAMBarcodeScanner = (props) => {
    let { onChange, rightAlign } = props;

    let codeReader = useRef(new BrowserMultiFormatReader());
    let [open, setOpen] = useState(false);
    let [showBarcodeButton, setShowBarcodeButton] = useState(false);
    const [videoInputDevices, setVideoInputDevices] = useState([]);
    const [currentDevice, setCurrentDevice] = useState("");
    const streamRef = useRef(null);
    const permisionStreamRef = useRef(null);
    const openRef = useRef(false);

    useEffect(() => {
        navigator.mediaDevices?.enumerateDevices().then((deviceCount) => {
            if (deviceCount.length > 0 && navigator.mediaDevices.getUserMedia) {
                setShowBarcodeButton(true);
            }
        });
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
        openRef.current = true;
    };

    const handleClose = () => {
        setOpen(false);
        openRef.current = false;
        resetStreams();
    };

    const startScanner = async () => {
        permisionStreamRef.current = await navigator.mediaDevices.getUserMedia({audio: false, video: true})
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            if (devices.length > 0) {
                let videoDevices = devices.filter(d => d.kind === 'videoinput')
                const device = localStorage.getItem("videoInputDevice");
                const selectedDevice = videoDevices.find((d) => d?.deviceId === device)?.deviceId ?? videoDevices[0].deviceId;
                setVideoInputDevices(videoDevices);
                setCurrentDevice(selectedDevice);
                await startDecoding(selectedDevice);
            }
        } catch (error) {
            console.error(error);
        } 
    };

    const startDecoding = async (device) => {
        try{
            const stream = await navigator.mediaDevices.getUserMedia({video: {deviceId: { exact: device }}});
            streamRef.current = stream;
            const result = await codeReader.current.decodeOnceFromStream(stream, "video");
            onDetectedCallback(result.text);
            handleClose();
        } catch (error) {
            console.error(error);
        } finally {
            if (!openRef.current) resetStreams();
        };
    };

    const handleDeviceChange = (device) => {
        codeReader.current.reset();
        setCurrentDevice(device);
        startDecoding(device);
        localStorage.setItem("videoInputDevice", device);
    };

    const onDetectedCallback = (result) => {
        onChange(result);
        setOpen(false);
    };

    // Display just the children when no support for user media
    if (!showBarcodeButton) {
        return React.Fragment;
    }

    const resetStreams = () => {
        codeReader.current.reset();
        if(streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
        }
        if(permisionStreamRef.current) {
            permisionStreamRef.current.getTracks().forEach(track => track.stop());
        }
    }

    // Active quagga when support for user media
    return (
        <div>
            <IconButton sx={rightAlign ? { marginRight: '-8px' } : {}} onClick={handleClickOpen}>
                <BarcodeScan />
            </IconButton>

            <Dialog
                TransitionProps={{
                    onEntered: () =>
                        startScanner(onDetectedCallback, handleClose),
                }}
                fullScreen
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {videoInputDevices?.length > 1 ? (
                    <DialogTitle>
                        <EAMSelect 
                            label="Choose the camera"
                            value={currentDevice}
                            required
                            onChange={value => handleDeviceChange(value.code)}
                            renderValue={value => value.desc || value.code}
                            selectOnlyMode={true}
                            options={
                                videoInputDevices.map(videoInputDevice => (
                                    {
                                        code: videoInputDevice.deviceId,
                                        desc: videoInputDevice.label
                                    }
                                ))
                            }
                        />
                    </DialogTitle>
                ) : null}
                <DialogContent sx={{ display: "flex", padding: 0 }}>
                    <video
                        autoPlay
                        muted
                        playsInline
                        id="video"
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            width: "100%",
                            flex: 1,
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default EAMBarcodeScanner;
