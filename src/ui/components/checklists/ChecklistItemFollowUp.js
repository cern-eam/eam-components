import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class ChecklistItemFollowUp extends Component {

    mainStyle = {
        flex: "1",
        display: "flex",
        marginLeft: 10
    }

    followUpWOCodeStyle = {
        paddingLeft: '8px', 
        paddingRight: '16px',
        fontSize: '12px'
    }

    handleChange = event => {
        this.props.onChange({
            ...this.props.checklistItem,
            followUp: event.target.checked
        })
    }

    render() {
        let { checklistItem } = this.props;
        return (
            <div style={{padding: 2}}>
                <div style={this.mainStyle}>
                    <FormControlLabel
                        control={
                            checklistItem.followUpWorkOrder ? 
                            <div style={this.followUpWOCodeStyle}>{checklistItem.followUpWorkOrder}</div> :
                            <Checkbox
                                color="primary"
                                checked={checklistItem.followUp === '+' || checklistItem.followUp === true}
                                disabled={Boolean(checklistItem.followUpWorkOrder)}
                                onChange={this.handleChange}/>
                        }
                        labelPlacement='start'
                        label={"Follow-up"}
                    />
                </div>
            </div>
        )
    }

}

