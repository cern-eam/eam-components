import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { areEqual, componentsProps, renderOptionHandler } from './tools/input-tools'
import EAMBaseInput from './components/EAMBaseInput';
import TextField from './components/TextField';
import { saveHistory, HISTORY_ID_PREFIX } from './tools/history-tools';
import useComboSelectOptions from './hooks/useComboSelectOptions';
import useFetchAutocompleteOptions from './hooks/useFetchAutocompleteOptions';

const EAMComboAutocomplete = (props) => {

  let { autocompleteHandler, autocompleteHandlerParams = [], renderDependencies = [],
    value, desc, id, renderValue, onChange, validate = true, onClear, selectMode } = props;

  let [inputValue, setInputValue] = useState("")
  let [description, setDescription] = useState("")
  let [open, setOpen] = useState(false)
  let [fetchedOptions, loading] =
    selectMode ?
      useComboSelectOptions(autocompleteHandler, autocompleteHandlerParams, renderDependencies, inputValue, value, open, id)
      :
      useFetchAutocompleteOptions(autocompleteHandler, autocompleteHandlerParams, renderDependencies, inputValue, value, open, id)
  let [valid, setValid] = useState(true)

  useEffect(() => {
    console.log('e', value, desc)
    if (!value) {
      setDescription('')
      return;
    }

    if (desc == null) {
      fetchDescription(value)
    }

  }, [value])

  useEffect(() => {
    setDescription(desc)
  }, [desc])

  const fetchDescription = async (filter) => {
    const extraInformation = await fetchExtraInformation(filter);
    if (extraInformation) {
      setDescription(extraInformation.desc)
    }
  }

  const fetchExtraInformation = async (filter) => {
    try {
      const result = await autocompleteHandler({ handlerParams: autocompleteHandlerParams, filter, operator: "=" });
      const option = result.body?.data?.find(o => o.code === filter);
      return option || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };


  const getOptionLabelHandler = option => {
    return option.code ?? option;
  }

  const onInputChangeHandler = (event, newInputValue) => {
    setInputValue(newInputValue);
    if (newInputValue !== value) {
      setDescription('');
    }
  }

  const onChangeHandler = (event, newValue, reason) => {
    if (reason === 'clear') {
      onChange({code: '', desc: '', organization: '' })
      onClear?.()
      setValid(true)
      return;
    }

    saveHistory(HISTORY_ID_PREFIX + id, newValue)

    setValid(true)
    onChange(newValue, newValue)
    setDescription(newValue.desc)

    // Don't bubble up any events (won't trigger a save when we select something by pressing enter)
    event.stopPropagation();
    event.preventDefault();
  }

  //
  // ON CLOSE HANDLER
  //
  const onCloseHandler = (event, reason) => {
    setOpen(false)
    // Only to be fired when we blur, press ESC or hit enter and the inputValue is different than the original value
    if (reason === 'blur' && (inputValue ?? '') !== (value ?? '')) {
      applyExtraInformation(inputValue, true)
    }
  }

  const applyExtraInformation = async (filter) => {

    const extraInformation = await fetchExtraInformation(filter);

    if (extraInformation) {
      onChange(extraInformation);
      setDescription(extraInformation.desc);
      setValid(true);
    } else {
      onChange({code: filter, desc: '', organization: ''})
      setValid(!validate || false);
    }
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
        filterOptions={x => x}
        id={id}
        freeSolo={true}
        value={value ? value : ''}
        clearOnEscape
        // Visuals
        openOnFocus // Very important, otherwise onCloseHandler won't be fired for example when we focus a field with a tab and delete its value.
        // Funningly without this prop it still works correctly when we manually gain focus using the mouse.
        componentsProps={componentsProps}
        includeInputInList
        loading={loading}
        size="small"
        fullWidth
        renderInput={(params) => <TextField {...params}
          {...props}
          desc={description}
          errorText={props.errorText}
          valid={valid} />}

      />
    </EAMBaseInput>
  );
};

export default React.memo(EAMComboAutocomplete, areEqual);