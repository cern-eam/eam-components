import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import EAMTextField from './EAMTextField';
import axios from "axios/index";
import React from 'react';
import Autosuggest from 'react-autosuggest';
import EAMBaseInput from './EAMBaseInput';


function getTextWidth (text) {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    context.font = '16px Roboto';
    var metrics = context.measureText(text);
    return metrics.width;
}

function renderDefaultInput (inputProps) {
    const { classes, autoFocus, value, label, disabled, endAdornment, error, helperText, required, ...other } = inputProps;

    var inputAdornmentStyle = {
        height: 20,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        left: 5 + getTextWidth(value),
        position: "absolute",
        pointerEvents: "none",
        fontSize: 16,
        color: "#9E9E9E"
    }

    return (
        <EAMTextField
            required = {required}
            error={error}
            helperText={helperText}
            style={{overflow: "hidden"}}
            disabled = {disabled}
            label={label}
            autoFocus={autoFocus}
            className={classes.textField}
            value={value}
            InputProps={{
                endAdornment: (endAdornment && <InputAdornment style={inputAdornmentStyle}> — {endAdornment}</InputAdornment>),
                classes: {
                    input: classes.input,
                },
                ...other,
            }}
        />
    );
}

/**
 * Container that will encapsulate every suggestion
 */
function renderSuggestionContainer(suggestion, isHighlighted) {
    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>
                {<div>{suggestion.code} - {suggestion.desc}</div>}
            </div>
        </MenuItem>
    );
}

/**
 * Global container containing all suggestions
 */
function renderSuggestionsContainer(options) {
    const { containerProps, children } = options;
    return (
        <Paper {...containerProps} square>
            {children}
        </Paper>
    );
}


const styles = theme => ({
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 3,
        left: 0,
        right: 0,
        zIndex: 10
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    textField: {
        width: '100%',
    },
});


class EAMAutocomplete extends EAMBaseInput {

    state = {
        suggestions: []
    };

    init = props => this.setValue({code: props.value || '', desc: props.valueDesc || ''})
    
    onSuggestionChange = (code, desc) => {
        this.props.updateProperty(this.props.valueKey, code);
        this.props.updateProperty(this.props.descKey, desc);
    }

    // Input rendering
    renderInput = inputProps => renderDefaultInput(inputProps)

    // Fetch suggestions
    handleSuggestionsFetchRequested = ({ value }) => {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {

            if (!!this.cancelSource) this.cancelSource.cancel();

            this.cancelSource = axios.CancelToken.source()

            this.props.autocompleteHandler(value, {cancelToken: this.cancelSource.token})
                .then(result => {
                    this.setState({
                        suggestions: result.body.data
                    });
                }).catch(error => {

                });
        }, 200)
    };

    handleChange = (event, { newValue }) => {
        // Initially, the onChange only happened on lose focus (onBlur) event. However, both events
        //(onChange and onBlur) are fired at the same time, causing the onBlur() event to not have 
        //the updated state. Therefore, and until a complete redesign is in place, either the parent shall
        //be updated at every key stroke, or thehandleSuggestionsClearRequested must contain a workaround
        // this.setState({
        //     value: newValue,
        //     endAdornment: ''
        // })
        this.setValue({code: newValue, desc: ''});
        //this.props.onChange(newValue); // This triggers a re-render all parent's child components
    }

    // Clear suggestions
    handleSuggestionsClearRequested = () =>
        this.setState({suggestions: []}, _ => {
            // Not the cleaniest of ways to achieve the parent update on the value: the parent should save 
            //a ref and call getValue for that purpose. However, and to avoid manipulating state directly,
            //we update it as a callback which should have the state updated
            (({ value }) => value && this.onSuggestionChange(value.code, value.desc))(this.state)
        })

    onSuggestionSelected = (event, { suggestion }) => {
        if (suggestion) this.onSuggestionChange(suggestion.code, suggestion.desc)
    }

    getSuggestionValue = suggestion => suggestion.desc;

    shouldRenderSuggestions = value => !!value

    onSuggestionSelected = (event, { suggestion }) => {
        if (suggestion) this.onSuggestionChange(suggestion.code, suggestion.desc)
    }
    
    renderComponent () {
        const { classes } = this.props;
        const { value } = this.state;

        // Value should always be an object with code and desc
        if (!value) return null

        return (
            <Autosuggest
                theme={{
                    container: classes.container,
                    suggestionsContainerOpen: classes.suggestionsContainerOpen,
                    suggestionsList: classes.suggestionsList,
                    suggestion: classes.suggestion,
                }}
                focusInputOnSuggestionClick={false}
                onSuggestionSelected={this.onSuggestionSelected.bind(this)}
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestionsContainer={renderSuggestionsContainer}
                renderSuggestion={(suggestion, { isHighlighted }) => renderSuggestionContainer(suggestion, isHighlighted)}
                renderInputComponent={this.renderInput.bind(this)}
                shouldRenderSuggestions={this.shouldRenderSuggestions.bind(this)}
                inputProps={{
                    required: this.isRequired(),
                    error: this.state.error,
                    helperText: this.state.helperText,
                    endAdornment: value.desc,
                    classes,
                    placeholder: this.props.placeholder,
                    label: this.props.elementInfo.text,
                    value: value.code,
                    onChange: this.handleChange,
                    disabled: this.state.disabled || this.props.elementInfo.readonly
                }}
            />
        );
    }
}

export default withStyles(styles)(EAMAutocomplete)