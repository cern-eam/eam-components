import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import React from 'react';
import Autosuggest from 'react-autosuggest';
import EAMBaseInput from './EAMBaseInput';
import EAMTextField from './EAMTextField';

/**
 * Default input, if none is provided
 */
function renderInput(inputProps) {
    const { classes, autoFocus, value, label, disabled, error, helperText, required, ...other } = inputProps;

    const arrowIconStyle = {
        color: "rgba(0, 0, 0, 0.54)",
        pointerEvents: 'none',
        position: "absolute",
        right: 0
    }

    return (
        <EAMTextField
            required = {required}
            error={error}
            helperText={helperText}
            disabled={disabled}
            autoFocus={autoFocus}
            label={label}
            value={value}
            className={classes.textField}
            InputProps={{
                endAdornment: (!disabled &&
                    <InputAdornment position="end">
                        <SvgIcon style={arrowIconStyle}>
                            <path d="M7 10l5 5 5-5z" />
                        </SvgIcon>
                    </InputAdornment>
                ),
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
        position: 'relative'
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 3,
        left: 0,
        right: 0,
        zIndex: 9999
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
        overflowY: "auto",
        overflowX: "hidden",
        maxHeight: "400px"
    },
});

class EAMSelect extends EAMBaseInput {

    state = {
        suggestions: []
    };

    init = props => {
        const value = props.value || ''
        const values = props.values || []
        const valueFound = this.findValueInValues(value, values)
        this.setValue({
            code: valueFound && valueFound.code || value,
            desc: valueFound && valueFound.desc || value
        },
        false)
    }

    onSuggestionChange = (code, desc) => {
        this.props.updateProperty(this.props.valueKey, code);
        if (this.props && this.props.valueDesc) {
            this.props.updateProperty(this.props.valueDesc, desc);
        }
    }

    findValueInValues = (value, values) => {
        const processedValue = value.trim()
        return values.find(v => (
            v.code.toUpperCase() === processedValue.toUpperCase() ||
            v.desc.toUpperCase() === processedValue.toUpperCase()))
    }

    handleSuggestionsFetchRequested = ({ value, reason }) => {
        let suggestions = this.props.values
        if (!suggestions) {
            return
        }

        if (value && (reason !== 'input-focused')) {
            suggestions = suggestions.filter(suggestion => {
                return (suggestion.code.toUpperCase().startsWith(value.toUpperCase()) ||
                        suggestion.desc.toUpperCase().startsWith(value.toUpperCase()))
            })
        }

        this.setState({suggestions});
    };

    handleSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        }, () => {
            const { value } = this.state;
            value && this.onSuggestionChange(value.code, value.desc);
        });
    };
    
    handleSuggestionSelected = (event, { suggestion }) => {
        if (suggestion) this.onSuggestionChange(suggestion.code, suggestion.desc)
    }

    handleChange = (event, { newValue }) => {
        this.setValue({code: newValue, desc: newValue});
    };

    getSuggestionValue = (suggestion) => {
        return suggestion.code;
    }

    shouldRenderSuggestions = (value) => {
        // Returning true causes the suggestions to be
        // rendered when the input is blank and focused
        return true
    }

    renderSuggestion(suggestion) {
        return (<div>{suggestion.desc}</div>);
    }

    renderComponent() {
        const { classes, elementInfo } = this.props;
        const { value, error, helperText, disabled } = this.state;

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
                onSuggestionSelected={this.handleSuggestionSelected}
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestionsContainer={renderSuggestionsContainer}
                renderSuggestion={(suggestion, { isHighlighted }) => renderSuggestionContainer(this.renderSuggestion(suggestion), suggestion, isHighlighted)}
                renderInputComponent={renderInput.bind(this)}
                shouldRenderSuggestions={this.shouldRenderSuggestions}
                inputProps={{
                    required: this.isRequired(),
                    error,
                    helperText,
                    classes,
                    value: value.desc,
                    label: elementInfo && elementInfo.text,
                    disabled: disabled || ( elementInfo && elementInfo.readonly),
                    onChange: this.handleChange,
                }}
            />
        );
    }
}

export default withStyles(styles)(EAMSelect);