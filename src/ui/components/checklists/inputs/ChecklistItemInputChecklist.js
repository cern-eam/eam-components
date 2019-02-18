import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class ChecklistItemInputChecklist extends Component {

    mainStyle = {
        flex: "0 0 170px",
        display: "flex",
        marginLeft: 10
    }

    handleChange = () => {
        this.props.onChange({
            ...this.props.checklistItem,
            result: this.props.checklistItem.result ? null : 'COMPLETED'
        })
    }

    render() {
        let {checklistItem} = this.props;

        return (
            <div style={this.mainStyle}>
                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                            checked={checklistItem.result === 'COMPLETED'}
                            onChange={this.handleChange}/>
                    }
                    label={"Completed"}
                />
            </div>
        )
    }
}