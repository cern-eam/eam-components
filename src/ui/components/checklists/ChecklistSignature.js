import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import WSChecklists from '../../../tools/WSChecklists';
import Grid from '@material-ui/core/Grid';
const { defaultGroupByFn } = require("react-table");

const modalStyle = {
    // width: '600px',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // position: 'absolute',
    // backgroundColor: 'white',
    // outline: '0',
    padding: '30px',
    textAlign: 'center',
};

export default class ChecklistSignature extends Component{
    constructor(props) {
        super(props);
        console.log("CHECKLIST");
        this.state = {
          open: false,
          username: null,
          password: null,
          signer: props.signature.signer,
          time: this.props.signature.time,
          qualification: this.props.signature.responsibilityDescription
        };
    }
    openDialogue = () =>{
        this.setState({open: true});
    };
    
    onUsercodeTextFieldChange = (textField) => {
        this.setState({username: textField.target.value});
    }
    
    onPasswordTextFieldChange = (textField) => {
        this.setState({password: textField.target.value});
    }
    
    closeDialogue = () => {
        this.setState({username: '',
                       password: '',
                       open: false})
    }
    sign = () => {
       var signature = {workOrderCode: this.props.workOrderCode,
                        activityCodeValue: this.props.activityCode,
                        userCode: this.state.username.toUpperCase(),
                        password: this.state.password,
                        signatureType: this.props.signature.type};
        WSChecklists.esignChecklist(signature).then(()=>{
            this.setState({signer:this.state.username});
            this.closeDialogue();
        }).catch((err)=>{
            this.closeDialogue();
            this.props.showError(err.response.body.errors[0].message);
        });
    }

    cancel = () => {
        this.closeDialogue();
    }

    signatureTypeSwitch(type){
        switch (type) {
            case 'PB01':
                return 'Performer';
            case 'PB02':
                return 'Performer 2';
            case 'RB01':
                return 'Reviewer';
            default:
                return 'Unknown signature type';
        }
    }


    render(){
        
        let time;
        if(this.state.time)
            time = this.state.time;
        else
            time = '';

        let label;
        if(this.state.qualification)
            label = this.state.qualification;
        else
            label = this.signatureTypeSwitch(this.props.signature.type);

        const dialog =
            <Paper elevation={3} style={modalStyle}>
                <div style={{fontSize:'25px'}}>E-Signature</div>
                <div>
                    <TextField required 
                        onChange={this.onUsercodeTextFieldChange} 
                        id='standard-required' 
                        label='Username'/>
                </div>
                <div>
                    <TextField required 
                        onChange={this.onPasswordTextFieldChange}
                        id='standard-password-input'
                        label='Pasword' 
                        type='password'/>
                </div>    
                <div> 
                    {<Button onClick={this.cancel}>
                        Cancel
                    </Button>}
                    {<Button onClick={this.sign}> 
                        Sign
                    </Button>}
                </div>
            </Paper> 

        return <div style = {{display: 'flex', 
                              alignItems: 'stretch',
                              justifyContent: 'space-between',
                              flexWrap: 'wrap',
                              borderTop: '1px dashed rgb(209, 211, 212)',
                              minHeight: '35px'}}>
              <label style ={{fontSize: '0.825rem', color: 'rgb(20, 88, 134)'}}>{label}</label>
              <Grid container spacing={1} className="activityDetails">
                <Grid item xs={5} md={5} lg={5}>{this.state.signer}</Grid>
                <Grid item xs={5} md={5} lg={5}>{time}</Grid>
                
                {this.props.signature.viewAsPerformer && 
                    <Grid item xs={2} md={2} lg={2}>
              
             
             {/* {this.signatureTypeSwitch(this.props.signature.type)}: {name} */}
                        <Button color='primary' onClick={this.openDialogue} style={{padding: '0px', float: 'right'}}>Sign</Button>
                        <Dialog open={this.state.open}>{dialog}</Dialog> 
                    </Grid>}
            </Grid>
            
        </div>
    }
}