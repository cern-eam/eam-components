import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class ChecklistItemFollowUp extends Component {

    handleChange = event => {
        this.props.onChange({
            ...this.props.checklistItem,
            followUp: event.target.checked
        })
    }

    render() {
        let {checklistItem} = this.props;

        return (
            <div style={{padding: 2}}>
                <div style={this.mainStyle}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                checked={checklistItem.followUp === '+' || checklistItem.followUp === true}
                                onChange={this.handleChange}/>
                        }
                        label={"Follow-up"}
                    />
                </div>
            </div>
        )
    }

}

