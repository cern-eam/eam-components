import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import EAMBaseInput from "./EAMBaseInput";

const checkBoxStyle = {
    width: '50%',
    fontSize: '14px',
    marginTop: '16px',
    marginBottom: '1px',
    float: 'left',
    boxSizing: 'border-box',
    display: 'block',
}

class EAMCheckbox extends EAMBaseInput {

    onChangeHandler = (event, checked) => {
        const value = checked ? this.props.trueValue : this.props.falseValue;
        this.props.updateProperty(this.props.valueKey, value);
        //Extra function if needed
        if (this.props.onChangeValue) {
            this.props.onChangeValue(value);
        }
    };

    _checked = () => {
        if (!this.props.value)
            return false;
        if (this.props.value.toLowerCase) {
            return this.props.value.toLowerCase() === this.props.trueValue;
        }
        return this.props.value === this.props.trueValue;
    };

    render() {
        if (this.isHidden()) {
            return <div/>
        }

        return (
            <div style={checkBoxStyle}>
                <FormControlLabel
                    control={
                        <Checkbox color="primary"
                                  checked={this._checked()}
                                  value={this.props.value}
                                  onChange={(event, checked) => this.onChangeHandler(event, checked)}
                                  disabled={this.props.elementInfo.readonly}
                        />
                    }
                    label={this.props.elementInfo.text}
                />
            </div>
        );
    }
}

EAMCheckbox.defaultProps = {
    trueValue: 'true',
    falseValue: 'false'
}

export default EAMCheckbox;