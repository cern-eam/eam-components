import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import EAMBaseInput from "./EAMBaseInput";

const checkBoxStyle = {
    width: '50%',
    fontSize: '14px',
    float: 'left',
    boxSizing: 'border-box',
    display: 'block',
}

class EAMCheckbox extends EAMBaseInput {

    init = (props) => {
        const checkedTextValue = props.value || '';
        this.setValue(checkedTextValue.toLowerCase() === true.toString(), false)
    }

    handleChange = (event, checked) => {
        this.onChangeHandler(checked.toString())
    }

    renderComponent () {
        return (
            <div style={checkBoxStyle}>
                <FormControlLabel
                    label={this.props.elementInfo.text}
                    control={
                        <Checkbox
                            color="primary"
                            checked={this.state.value}
                            value={this.props.value}
                            onChange={this.handleChange}
                            disabled={this.props.elementInfo.readonly}
                        />
                    }
                />
            </div>
        );
    }
}

export default EAMCheckbox;