import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import WSChecklists from '../../../tools/WSChecklists';
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

        this.state = {
          open: false,
          username: null,
          password: null
        };

        
    }
    openDialogue = () =>{
        // console.log("Called");
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
       //call WS with woCode and actCode, signatureType (from props) and credentials then
       var signature = {workOrderCode: this.props.workOrderCode,
                        activityCodeValue: this.props.activityNumber,
                        userCode: this.state.username,
                        password: this.state.password,
                        signatureType: this.props.signature.type};
       WSChecklists.esignChecklist(signature).then(
         this.closeDialogue());
    }

    cancel = () => {
        this.closeDialogue();
    }

    signatureTypeSwitch(type){
        switch (type) {
            case 'PB01':
                return 'PERFORMER';
            case 'PB02':
                return 'PERFORMER 2';
            case 'RB01':
                return 'REVIEWER';
            default:
                return 'UNKNOWN SIGNATURE TYPE';
        }
    }


    render(){
        let name;
        if(this.props.signature.name)
            name = this.props.signature.name;
        else
            name = '_____________';
        
        const dialog =
            <Paper elevation={3} style={modalStyle}>
                <div>
                    <TextField required 
                        onChange={this.onUsercodeTextFieldChange} 
                        id='standard-required' 
                        label='Usercode'/>
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

        return <div>
            {this.signatureTypeSwitch(this.props.signature.type)}: {name}
            <Button color='primary' onClick={this.openDialogue}>Sign as {this.signatureTypeSwitch(this.props.signature.type)}</Button>
            <Dialog open={this.state.open}>{dialog}</Dialog>
        </div>}
}