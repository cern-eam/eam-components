import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class ChecklistItemInputFinding extends Component {

    mainStyle = {
        flex: "0 0 170px",
        display: "flex",
        marginLeft: 10
    }

    handleChange = (value) => {
        let currentValue = this.props.checklistItem.finding;
        if (currentValue) {
            value = null
        }

        this.props.onChange({
            ...this.props.checklistItem,
            finding: value
        })
    }

    render() {
        let {checklistItem} = this.props;
        let finding = checklistItem.possibleFindings[0]

        return (
            <div style={this.mainStyle}>
                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                            checked={checklistItem.finding === finding.code}
                            onChange={() => this.handleChange(finding.code)}/>
                    }
                    label={finding.desc}
                />
            </div>
        )
    }
}