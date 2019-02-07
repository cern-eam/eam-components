import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class ChecklistItemInputYesNo extends Component {

    mainStyle = {
        flex: "0 0 170px",
        display: "flex",
        marginLeft: 10,
        justifyContent: "space-between"
    }

    handleChange = (value) => {
        let currentValue = this.props.checklistItem.result;
        switch (currentValue) {
            case "YES":
                value = (value === 'YES') ? null : value
                break
            case "NO":
                value = (value === 'NO') ? null : value
                break;
        }

        this.props.onChange({
            ...this.props.checklistItem,
            result: value
        })
    }

    render() {
        var {checklistItem} = this.props;

        return (
            <div style={this.mainStyle}>
                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                            checked={checklistItem.result === 'YES'}
                            onChange={() => this.handleChange('YES')}/>
                    }
                    label="Yes"
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                            checked={checklistItem.result === 'NO'}
                            onChange={() => this.handleChange('NO')}/>
                    }
                    label="No"
                />

            </div>
        )
    }
}