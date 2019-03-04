import React from 'react';
import EAMBaseInput from './EAMBaseInput';
import EAMTextField from './EAMTextField';

class EAMInput extends EAMBaseInput {

    init = props => this.setValue(props.value || '')

    onLoseFocus = () => {
        //TODO prep input (e.g. uppercase)
        this.onChangeHandler(this.state.value)
    }

    renderComponent () {
        return (
            <EAMTextField
                disabled={this.state.disabled || this.props.elementInfo.readonly}
                error={this.state.error}
                helperText={this.state.helperText}
                required={this.isRequired()}
                label={this.props.elementInfo.text}
                value={this.state.value}
                onChange={event => this.setValue(event.target.value)}
                onBlur={this.onLoseFocus}
                InputLabelProps={{ shrink: true }}/>
        )
    }
}

export default EAMInput