import React, {Component} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class ChecklistItemInputMoreFindings extends Component {

    mainStyle = {
        flex: "0 0 170px",
        display: "flex",
        marginLeft: 10
    }

    selectStyle = {
        width: "100%",
        marginLeft: 3
    }


    handleChange = (event) => {
        this.props.onChange({
            ...this.props.checklistItem,
            finding: event.target.value
        })
    }

    render() {
        let {checklistItem} = this.props;

        return (
            <div style={this.mainStyle}>
                <FormControl style={this.selectStyle}>
                    <Select disableUnderline={true}
                            value={checklistItem.finding || ''}
                            onChange={this.handleChange.bind(this)}
                    >
                        <MenuItem value={null}></MenuItem>
                        {checklistItem.possibleFindings.map(finding => (
                            <MenuItem key={finding.code} value={finding.code}>{finding.desc}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </div>
        )
    }
}