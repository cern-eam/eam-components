import React, {Component} from 'react'
import Autocomplete from './Autocomplete'
import EAMBaseInput from './EAMBaseInput'

class EAMAutocomplete extends EAMBaseInput {

    onDescChangeHandler = (value) => {
        this.props.updateProperty(this.props.descKey, value);
    };

    render() {

        const {autocompleteHandler} = this.props;

        if (this.isHidden()) {
            return <div/>
        }

        return (
            <Autocomplete
                required={this.isRequired()}
                error={this.state.error}
                helperText={this.state.helperText}
                disabled={this.state.disabled || this.props.elementInfo.readonly}
                onChange={value => this.onChangeHandler(value)}
                onDescChange={value => this.onDescChangeHandler(value)}
                valueDesc={this.props.valueDesc || ''}
                value={this.props.value || ''}
                getSuggestions={this.props.autocompleteHandler}
                label={this.props.elementInfo.text}
                renderSuggestion={suggestion => <div>{suggestion.code} - {suggestion.desc}</div>}
                getSuggestionValue={suggestion => suggestion.code}
            />
        )
    }
}

export default EAMAutocomplete