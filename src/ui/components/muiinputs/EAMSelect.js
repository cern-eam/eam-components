import React from 'react';
import Select from './Select'
import EAMBaseInput from './EAMBaseInput'

export default class EAMSelect extends EAMBaseInput {

    init = props => this.setValue(props.value || '')

    renderComponent () {
        const {elementId, text, nullable} = this.props.elementInfo;

        return (
            <Select
                required={this.isRequired()}
                error={this.state.error}
                helperText={this.state.helperText}
                disabled={this.state.disabled || this.props.elementInfo.readonly}
                onChange={value => this.onChangeHandler(value)}
                value={this.props.value || ''}
                values={this.props.values}
                label={text}
            />
        )
    }
}