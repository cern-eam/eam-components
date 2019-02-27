import TextField from '@material-ui/core/TextField';
import React from 'react';
import EAMBaseInput from './EAMBaseInput';

class EAMInput extends EAMBaseInput {

    init = props => {
        this.setValue(props.value || '')
    }

    onLoseFocus = () => {
        //TODO prep input (e.g. uppercase)
        this.onChangeHandler(this.state.value)
    }

    renderComponent () {
        return (
            <TextField
                disabled={this.state.disabled || this.props.elementInfo.readonly}
                error={this.state.error}
                helperText={this.state.helperText}
                required={this.isRequired()}
                label={this.props.elementInfo.text}
                value={this.state.value}
                onChange={event => this.setValue(event.target.value)}
                onBlur={this.onLoseFocus}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}/>
        )
    }
}

export default EAMInput