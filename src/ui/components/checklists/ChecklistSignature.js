import React, { useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import WSChecklists from '../../../tools/WSChecklists';
import Grid from '@mui/material/Grid';

const modalStyle = {
    padding: '28px 32px 20px',
    minWidth: 320,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
};

const titleStyle = {
    fontSize: 22,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 4,
};

const actionsStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 8,
    marginTop: 8,
};

const signatureTypes = {
    'PB01': 'Performer',
    'PB02': 'Performer 2 (Optional)',
    'RB01': 'Reviewer'
};

const ChecklistSignature = ({ signature, workOrderCode, activityCode, showError, setSignature, disabled, userCode }) => {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signAsMe, setSignAsMe] = useState(false);
    const usernameRef = useRef(null);

    const closeDialogue = () => {
        setUsername('');
        setPassword('');
        setSignAsMe(false);
        setOpen(false);
    };

    const sign = () => {
        if (!canSign) {
            return;
        }
        const payload = {
            workOrderCode,
            activityCodeValue: activityCode,
            userCode: username.toUpperCase(),
            password: signAsMe ? null : password,
            signatureType: signature.type
        };
        WSChecklists.esignChecklist(payload).then((response) => {
            setSignature(activityCode, signature.type, response.body.data.signer, response.body.data.timeStamp);
            closeDialogue();
        }).catch((err) => {
            showError(err.response.body.errors[0].message);
        });
    };

    const onEnter = (ev) => {
        if (ev.key === 'Enter') {
            sign();
            ev.stopPropagation();
        }
    };

    const onSignAsMeChange = (event) => {
        const checked = event.target.checked;
        setSignAsMe(checked);
        if (checked) {
            setPassword('');
        }
        setTimeout(() => usernameRef.current?.focus(), 0);
    };

    const label = signature.responsibilityDescription
        ? signature.responsibilityDescription
        : signatureTypes[signature.type];
    const loginMatches = Boolean(userCode) && username.trim().toUpperCase() === userCode.toUpperCase();
    const canSign = signAsMe ? loginMatches : Boolean(username && password);

    const dialog =
        <Paper elevation={3} style={modalStyle}>
            <div style={titleStyle}>E-Signature</div>
            <FormControlLabel
                sx={{ ml: 0, mr: 0 }}
                control={
                    <Checkbox
                        color='primary'
                        checked={signAsMe}
                        onChange={onSignAsMeChange}
                    />
                }
                label='Use my NICE login'
            />
            <TextField required autoFocus
                fullWidth
                inputRef={usernameRef}
                onChange={(event) => setUsername(event.target.value)}
                id='standard-required'
                label={signAsMe ? 'Confirm your NICE login' : 'Username'}
                value={username}
                autoComplete='off'
                onKeyDown={onEnter}
            />
            <TextField required={!signAsMe}
                fullWidth
                onChange={(event) => setPassword(event.target.value)}
                id='standard-password-input'
                label='Password'
                type='password'
                value={password}
                autoComplete='off'
                disabled={signAsMe}
                onKeyDown={onEnter}
            />
            <div style={actionsStyle}>
                <Button onClick={closeDialogue}>
                    Cancel
                </Button>
                <Button onClick={sign} color='primary' disabled={!canSign}>
                    Sign
                </Button>
            </div>
        </Paper>;

    return (
        <div style={{
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            borderTop: '1px dashed rgb(209, 211, 212)',
            minHeight: '40px',
            paddingTop: '4px',
            paddingLeft: '8px',
            paddingBottom: '3px'
        }}>
            <Grid container spacing={1} className="activityDetails">
                <Grid item xs={10} md={10} lg={10} style={{paddingTop: '6px'}}>
                    <label style={{fontSize: '0.84rem', color: 'rgb(20, 88, 134)'}}>{label}</label>
                    <Grid style={{display: 'flex', paddingTop: '2px'}} item xs={10} md={10} lg={10}>
                        <Grid item xs={6} md={6} lg={6}>{signature.signer}</Grid>
                        <Grid item xs={4} md={4} lg={4}>{signature.time}</Grid>
                    </Grid>
                </Grid>
                {signature.viewAsPerformer &&
                    <Grid item xs={2} md={2} lg={2}>
                        <Button
                            color='primary'
                            onClick={() => setOpen(true)}
                            disabled={disabled}
                            style={{
                                paddingTop: '11px',
                                float: 'right'
                            }}>Sign</Button>
                        <Dialog open={open} onClose={closeDialogue}>{dialog}</Dialog>
                    </Grid>}
            </Grid>
        </div>
    );
};

export default ChecklistSignature;
