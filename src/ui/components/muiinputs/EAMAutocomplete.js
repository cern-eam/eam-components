import React from 'react';
import Autocomplete from './Autocomplete';
import EAMBaseInput from './EAMBaseInput';

class EAMAutocomplete extends EAMBaseInput {

    onDescChangeHandler = value => this.props.updateProperty(this.props.descKey, value)

    onValueChangeHandler = value => {
        this.props.updateProperty(this.props.valueKey, value)
        this.props.updateProperty(this.props.descKey, '');
    }

    onSuggestionChange = (code, desc) => {
        this.props.updateProperty(this.props.valueKey, code);
        this.props.updateProperty(this.props.descKey, desc);
    }

    render () {
        const { autocompleteHandler } = this.props;

        if (this.isHidden()) {
            return <div/>
        }

        return (
            <Autocomplete
                required={this.isRequired()}
                error={this.state.error}
                helperText={this.state.helperText}
                disabled={this.state.disabled || this.props.elementInfo.readonly}
                onChange={value => this.onValueChangeHandler(value)}
                onDescChangeHandler={this.onDescChangeHandler.bind(this)}
                onSuggestionChange={this.onSuggestionChange.bind(this)}
                valueDesc={this.props.valueDesc || ''}
                value={this.props.value || ''}
                getSuggestions={autocompleteHandler}
                label={this.props.elementInfo.text}
                renderSuggestion={suggestion => <div>{suggestion.code} - {suggestion.desc}</div>}
                getSuggestionValue={suggestion => suggestion.code}
            />
        )
    }
}

export default EAMAutocomplete