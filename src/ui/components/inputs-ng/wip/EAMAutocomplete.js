import React, { useState } from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import useFetchAutocompleteOptions from '../hooks/useFetchAutocompleteOptions';
import {
    areEqual,
    componentsProps,
    renderOptionHandler,
} from '../tools/input-tools';
import EAMBaseInput from '../components/EAMBaseInput';
import TextField from './TextField';
import { saveHistory, HISTORY_ID_PREFIX } from '../tools/history-tools';
import Chip from '@mui/material/Chip';

const filter = createFilterOptions();

// TODO: this component is an extension of the EAMAutocomplete that supports
// multiple values. Although it is expected to still work the same for single
// values, it should be re-tested with them to make sure it still works as before.
const EAMAutocomplete = (props) => {
    // NOTE: the 'multiple' and 'tagLabelKey' props is not in the non-wip version
    let {
        autocompleteHandler,
        autocompleteHandlerParams,
        value,
        desc,
        id,
        renderValue,
        onChange,
        multiple,
        tagLabelKey, // use it if the option object is not using 'code'
        creatable,
    } = props;

    // NOTE: this logic is not in the non-wip version
    const optionValueKey = tagLabelKey ? tagLabelKey : 'code';

    let [inputValue, setInputValue] = useState('');
    let [open, setOpen] = useState(false);
    let [fetchedOptions, loading] = useFetchAutocompleteOptions(
        autocompleteHandler,
        autocompleteHandlerParams,
        inputValue,
        value,
        open,
        id
    );

    const getOptionLabelHandler = (option) => {
        // NOTE: we adapt if the option object is not using 'code'
        return option[optionValueKey] ?? option;
    };

    const onInputChangeHandler = (event, newInputValue) => {
        setInputValue(newInputValue);
        if (newInputValue !== value && desc) {
            onChange({ desc: '' });
        }
    };

    const onChangeHandler = (event, newValue, reason) => {
        if (reason === 'clear' || reason === 'createOption') {
            // Cases handled by the onCloseHandler
            return;
        }

        saveHistory(HISTORY_ID_PREFIX + id, newValue.code, newValue.desc);

        onChange(newValue);

        // Don't bubble up any events (won't trigger a save when we select something by pressing enter)
        event.stopPropagation();
        event.preventDefault();
    };

    const onCloseHandler = (event, reason) => {
        setOpen(false);
        // Only to be fired when we blur, press ESC or hit enter and the
        // inputValue is different than the original value
        if (
            ['blur', 'escape', 'createOption'].includes(reason) &&
            inputValue !== value &&
            !multiple // avoids adding a tag // NOTE: this is not in the non-wip version
        ) {
            // TODO: validation if inputValue is not empty
            onChange({ code: inputValue });
        }
    };

    // NOTE: this handler is not in the non-wip version
    const filterOptionsHandler = (options, params) => {
        if (!creatable) {
            return options;
        }

        const { inputValue } = params;

        // Disallow adding the same option twice
        if (value.some((option) => option[optionValueKey] === inputValue)) {
            return [];
        }

        // check if input value is in the suggested options
        const exists = options.some(
            (option) =>
                inputValue ===
                (optionValueKey ? option[optionValueKey] : option)
        );

        const filtered = filter(options, params);

        // if not, add it to the suggestions list
        if (inputValue !== '' && !exists) {
            filtered.push({
                [optionValueKey]: inputValue,
                desc: `Add "${inputValue}"`,
            });
        }

        return filtered;
    };

    return (
        <EAMBaseInput {...props}>
            <Autocomplete
                // Options
                options={fetchedOptions}
                getOptionLabel={getOptionLabelHandler}
                renderOption={renderOptionHandler.bind(null, renderValue)}
                // Open props
                open={open}
                onOpen={() => setOpen(true)}
                onClose={onCloseHandler}
                // On change
                onChange={onChangeHandler}
                onInputChange={onInputChangeHandler}
                // Misc
                filterOptions={filterOptionsHandler} // NOTE: this prop is different in the non-wip version
                id={id}
                freeSolo={true}
                multiple={multiple} // NOTE: this prop is not in the non-wip version
                value={value ? value : multiple ? undefined : ''} // NOTE: this cond is not in the non-wip version
                // NOTE: this prop is not in the non-wip version
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip
                            variant="outlined"
                            label={
                                optionValueKey ? option[optionValueKey] : option
                            }
                            {...getTagProps({ index })}
                        />
                    ))
                }
                // Visuals
                openOnFocus // Very important, otherwise onCloseHandler won't be fired for example when we focus a field with a tab and delete its value.
                // Funningly without this prop it still works correctly when we manually gain focus using the mouse.
                componentsProps={componentsProps}
                includeInputInList
                loading={loading}
                size="small"
                fullWidth
                renderInput={(params) => <TextField {...params} {...props} />}
            />
        </EAMBaseInput>
    );
};

EAMAutocomplete.defaultProps = {};

export default React.memo(EAMAutocomplete, areEqual);
