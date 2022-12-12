import React, { useEffect, useState, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";
import IconButton from "@mui/material/IconButton";
import { BarcodeScan } from "mdi-material-ui";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

const EAMBarcodeScanner = (props) => {
    let { onChange } = props;

    let codeReader = useRef(null);
    let [open, setOpen] = useState(false);
    let [showBarcodeButton, setShowBarcodeButton] = useState(false);
    const [videoInputDevices, setVideoInputDevices] = useState([]);
    const [currentDevice, setCurrentDevice] = useState("");

    useEffect(() => {
        navigator.mediaDevices?.enumerateDevices().then((deviceCount) => {
            if (deviceCount.length > 0 && navigator.mediaDevices.getUserMedia) {
                setShowBarcodeButton(true);
            }
        });
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        codeReader.current.reset();
    };

    const startScanner = () => {
        codeReader.current = new BrowserMultiFormatReader();
        codeReader.current
            .listVideoInputDevices()
            .then((devices) => {
                if (devices.length > 0) {
                    const device = localStorage.getItem("videoInputDevice");
                    const selectedDevice =
                        devices.find((d) => d?.deviceId === device)?.deviceId ??
                        devices[0].deviceId;
                    setVideoInputDevices(devices);
                    setCurrentDevice(selectedDevice);
                    startDecoding(selectedDevice);
                }
            })
            .catch((err) => console.error(err));
    };

    const startDecoding = (device) => {
        codeReader.current
            .decodeFromInputVideoDevice(device, "video")
            .then((result) => {
                onDetectedCallback(result.text);
                codeReader.current.reset();
                handleClose();
            })
            .catch((err) => console.error(err));
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

    // Active quagga when support for user media
    return (
        <div>
            <IconButton onClick={handleClickOpen}>
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
                        <TextField
                            value={currentDevice}
                            onChange={(e) => handleDeviceChange(e.target.value)}
                            select
                            label="Choose the camera"
                            style={{ minWidth: 250 }}
                        >
                            {videoInputDevices.map((videoInputDevice) => (
                                <MenuItem
                                    key={videoInputDevice.deviceId}
                                    value={videoInputDevice.deviceId}
                                >
                                    {videoInputDevice.label}
                                </MenuItem>
                            ))}
                        </TextField>{" "}
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
