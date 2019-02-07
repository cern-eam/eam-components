import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class ChecklistItemInputFinding extends Component {

    mainStyle = {
        flex: "0 0 170px",
        display: "flex",
        marginLeft: 10,
        flexWrap: "wrap",
        justifyContent: "space-between"
    }

    handleChange = (value) => {
        let currentValue = this.props.checklistItem.finding;
        let {checklistItem} = this.props;
        let finding1 = checklistItem.possibleFindings[0]
        let finding2 = checklistItem.possibleFindings[1]
        let finding3 = checklistItem.possibleFindings[2]

        switch (currentValue) {
            case finding1.code:
                value = (value === finding1.code) ? null : value
                break
            case finding2.code:
                value = (value === finding2.code) ? null : value
                break;
            case finding3.code:
                value = (value === finding3.code) ? null : value
                break;
        }

        this.props.onChange({
            ...this.props.checklistItem,
            finding: value
        })
    }

    render() {
        let {checklistItem} = this.props;
        let finding1 = checklistItem.possibleFindings[0]
        let finding2 = checklistItem.possibleFindings[1]
        let finding3 = checklistItem.possibleFindings[2]

        return (
            <div style={this.mainStyle}>
                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                            checked={checklistItem.finding === finding1.code}
                            onChange={() => this.handleChange(finding1.code)}/>
                    }
                    label={finding1.desc}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                            checked={checklistItem.finding === finding2.code}
                            onChange={() => this.handleChange(finding2.code)}/>
                    }
                    label={finding2.desc}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                            checked={checklistItem.finding === finding3.code}
                            onChange={() => this.handleChange(finding3.code)}/>
                    }
                    label={finding3.desc}
                />

            </div>
        )
    }
}