import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { areEqual, componentsProps, renderOptionHandler } from './tools/input-tools'
import EAMBaseInput from './components/EAMBaseInput';
import TextField from './components/TextField';
import { saveHistory, HISTORY_ID_PREFIX } from './tools/history-tools';
import useComboSelectOptions from './hooks/useComboSelectOptions';
import useComboAutocompleteOptions from './hooks/useComboAutocompleteOptions';
import { MODE } from './hooks/tools';
import SearchAdornment from './components/SearchAdornment';
import ArrowAdornment from './components/ArrowAdornment';

const EAMComboAutocomplete = (props) => {

  let { autocompleteHandler, autocompleteHandlerParams = [], renderDependencies = [],
    value, desc, id, renderValue, onChange, validate = true, onClear } = props;

  let [inputValue, setInputValue] = useState("")
  let [description, setDescription] = useState("")
  let [open, setOpen] = useState(false)

  const [mode, setMode] = useState(MODE.UNKNOWN)  

  let [selectOptions, selectLoading] = useComboSelectOptions({autocompleteHandler, autocompleteHandlerParams, renderDependencies, inputValue, value, open, id, setMode, enabled: mode !== MODE.AUTOCOMPLETE, mode})
  let [autocompleteOptions, autocompleteLoading] = useComboAutocompleteOptions({autocompleteHandler, autocompleteHandlerParams, renderDependencies, inputValue, value, open, id, enabled: mode !== MODE.SELECT})
  let [valid, setValid] = useState(true)

  const options = mode === MODE.SELECT ? selectOptions : autocompleteOptions
  const loading = mode === MODE.SELECT ? selectLoading : autocompleteLoading
  
  useEffect(() => {
    
    setValid(true)

    if (!value) {
      setDescription('')
      return;
    }

    if (desc == null) {
      applyExtraInformation(value)
    }

  }, [value])

  useEffect(() => {
    setDescription(desc)
  }, [desc])

  useEffect( () => {
    setMode(MODE.UNKNOWN)
  }, [...renderDependencies])

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
      onChange({code: '', desc: '', organization: '' }, true)
      onClear?.()
      setValid(true)
      return;
    }

    (mode === MODE.AUTOCOMPLETE) && saveHistory(HISTORY_ID_PREFIX + id, newValue);
    setValid(true)
    onChange(newValue, true)
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

  const applyExtraInformation = async (filter, manualInput = false) => {

    const extraInformation = await fetchExtraInformation(filter);

    if (extraInformation) {
      onChange(extraInformation, manualInput);
      setDescription(extraInformation.desc);
      setValid(true);
    } else {
      onChange({code: filter, desc: '', organization: ''}, manualInput)
      //setValid(!validate || false);
    }
  };

  return (
    <EAMBaseInput {...props}>
      <Autocomplete
        // Options
        options={options}
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
          endAdornment={
          <>
            {mode === MODE.SELECT ? <ArrowAdornment /> : <SearchAdornment />}
            {props.endAdornment}
          </>}
          desc={description}
          errorText={props.errorText}
          valid={valid} />}

      />
    </EAMBaseInput>
  );
};

export default React.memo(EAMComboAutocomplete, areEqual);