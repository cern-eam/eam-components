import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import EAMBaseInput from './EAMBaseInput'

class EAMInput extends EAMBaseInput {

    render() {
        if (this.isHidden()) {
            return <div/>
        }

        return (
            <TextField
                disabled={this.state.disabled || this.props.elementInfo.readonly}
                error={this.state.error}
                helperText={this.state.helperText}
                required={this.isRequired()}
                label={this.props.elementInfo.text}
                value={this.props.value || ''}
                onChange={event => this.onChangeHandler(event.target.value)}
                fullWidth
                margin="normal"/>
        )
    }
}

export default EAMInput