import React from 'react';
import Autosuggest from 'react-autosuggest';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from "axios/index";

/**
 * Default input, if none is provided
 */

function getTextWidth(text) {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    context.font = '16px Roboto';
    var metrics = context.measureText(text);
    return metrics.width;
}

function renderDefaultInput(inputProps) {
    const { classes, autoFocus, value, label, disabled, endAdornment, error, helperText, required, ...other } = inputProps;

    var inputAdornmentStyle = {
        height: 20,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        top: 6,
        left: 5 + getTextWidth(value),
        position: "absolute",
        pointerEvents: "none",
        fontSize: 16,
        color: "#9E9E9E"
    }

    return (
        <TextField
            required = {required}
            error={error}
            helperText={helperText}
            style={{overflow: "hidden"}}
            disabled = {disabled}
            margin="normal"
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
function renderSuggestionContainer(child, suggestion, isHighlighted) {
    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>
                {child}
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

/**
 * Autocomplete component
 * Possible props:
 *  - getSuggestions (required): should return a Promise of an object
 *  - placeholder (not required): Placeholder to display inside the input. Only needed if you use the default input rendering
 *  - getSuggestionValue(suggestion) (not required): return the value to display inside the input once a suggestion is selected
 *  - renderSuggestion (not required): define how you want to render a suggestion.
 *  - label (not required): label of the input
 */
class Autocomplete extends React.Component {
    state = {
        value: '',
        suggestions: []
    };

    componentDidMount() {
        this.setState({
            value: this.props.value || '',
            endAdornment: this.props.valueDesc
        })

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value || '',
            endAdornment: nextProps.valueDesc || ''
        })
    }

    // Input rendering
    renderInput(inputProps) {
        return renderDefaultInput(inputProps);
    }

    // Fetch suggestions
    handleSuggestionsFetchRequested = ({ value }) => {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {

            if (!!this.cancelSource) {
                this.cancelSource.cancel();
            }
            this.cancelSource = axios.CancelToken.source()

            this.props.getSuggestions(value, {cancelToken: this.cancelSource.token})
                .then(result => {
                    this.setState({
                        suggestions: result.body.data
                    });
                }).catch(error => {

            });
        }, 200)
    };

    // Clear suggestions
    handleSuggestionsClearRequested = () => {
        if (!this.state.endAdornment) {
            this.props.onDescChange('')
        }
        this.props.onChange(this.state.value)
        this.setState({
            suggestions: []
        });
    };

    // On change, set the state
    handleChange = (event, { newValue }) => {
        this.state.value = newValue
        this.state.endAdornment = ''
        this.setState({
            value: newValue,
            endAdornment: ''
        });
    };

    // Render
    renderSuggestion(suggestion) {
        if (this.props.renderSuggestion) {
            return this.props.renderSuggestion(suggestion);
        } else {
            // Default behaviour
            return (<div>{this.getSuggestionValue(suggestion)}</div>);
        }
    }

    getSuggestionValue(suggestion) {
        this.setState({
            endAdornment: suggestion.desc
        })
        return this.props.getSuggestionValue(suggestion);
    }

    onSuggestionSelected(event, {suggestion}) {
        this.state.endAdornment = suggestion.desc
        this.props.onDescChange(suggestion.desc)
    }

    shouldRenderSuggestions(value) {
        return !!value
    }

    render() {
        const { classes } = this.props;
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
                renderSuggestionsContainer={renderSuggestionsContainer}
                getSuggestionValue={this.getSuggestionValue.bind(this)}
                renderSuggestion={(suggestion, { isHighlighted }) => renderSuggestionContainer(this.renderSuggestion(suggestion), suggestion, isHighlighted)}
                renderInputComponent={this.renderInput.bind(this)}
                shouldRenderSuggestions={this.shouldRenderSuggestions.bind(this)}
                inputProps={{
                    required: this.props.required,
                    error: this.props.error,
                    helperText: this.props.helperText,
                    endAdornment: this.state.endAdornment,
                    classes,
                    placeholder: this.props.placeholder,
                    label: this.props.label,
                    value: this.state.value,
                    onChange: this.handleChange,
                    disabled: this.props.disabled
                }}
            />
        );
    }
}

export default withStyles(styles)(Autocomplete);