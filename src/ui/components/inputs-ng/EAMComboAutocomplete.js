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
  const {
    autocompleteHandler,
    autocompleteHandlerParams = [],
    renderDependencies = [],
    value,
    id,
    renderValue,
    onChange,
    onClear,
    lazyLoad = true,
    disabled,
  } = props;

  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.UNKNOWN);
  const [valid, setValid] = useState(true);
  const [description, setDescription] = useState('');

  const [selectOptions, selectLoading] = useComboSelectOptions({
    autocompleteHandler,
    autocompleteHandlerParams,
    renderDependencies,
    inputValue,
    value,
    onChange,
    open,
    id,
    setMode,
    enabled: mode !== MODE.AUTOCOMPLETE,
    mode,
    lazyLoad,
    disabled
  });
  const [autocompleteOptions, autocompleteLoading] = useComboAutocompleteOptions({
    autocompleteHandler,
    autocompleteHandlerParams,
    renderDependencies,
    inputValue,
    value,
    open,
    id,
    enabled: mode !== MODE.SELECT
  });

  const options = mode === MODE.SELECT ? selectOptions : autocompleteOptions;
  const loading = mode === MODE.SELECT ? selectLoading : autocompleteLoading;

  //
  // EFFECTS
  //

  useEffect(() => {
    setValid(true);

    if (!value?.code) {
      setDescription('');
    }

    if (value?.code && !value?.desc) {
      applyExtraInformation(value.code);
    }
    
  }, [value?.code]);

  useEffect(() => {
    setDescription(value?.desc ?? '');
  }, [value?.desc]);
  
  useEffect(() => {
    setMode(MODE.UNKNOWN);
  }, [...renderDependencies]);



  //
  // HANDLERS
  //

  const getOptionLabelHandler = (option) => {
    if (typeof option === 'string') {
      return option;
    }
    return option?.code ?? '';
  };

  const onInputChangeHandler = (event, newInputValue) => {
    setInputValue(newInputValue);
    setDescription('');
  };

  const onChangeHandler = (event, newValue, reason) => {
    if (reason === 'clear') {
      onChange(null);
      onClear?.();
      setValid(true);
      return;
    }

    (mode === MODE.AUTOCOMPLETE) && saveHistory(HISTORY_ID_PREFIX + id, newValue);
    setValid(true);
    onChange(newValue);
    setDescription(newValue?.desc ?? '');
    // Don't bubble up any events (won't trigger a save when we select something by pressing enter)
    event.stopPropagation();
    event.preventDefault();
  };

  const onCloseHandler = (event, reason) => {
    setOpen(false);
    // Only to be fired when we blur and the inputValue differs from selected code.
    if (reason === 'blur' && (inputValue ?? '') !== (value?.code ?? '')) {
      applyExtraInformation(inputValue);
    }
  };

  //
  // UTILS
  //

  const applyExtraInformation = async (filter) => {
    if (!filter?.trim()) {
      onChange(null);
      setValid(true);
      return;
    }

    const extraInformation = await fetchExtraInformation(filter);
    
    if (!extraInformation) {
      return;
    }

    if (extraInformation.desc && !value?.desc) {
      setDescription(extraInformation.desc);
    }

    if (extraInformation.organization) {
      onChange(extraInformation);
    }

  };

  const fetchExtraInformation = async (filter) => {
    try {
      const result = await autocompleteHandler({ handlerParams: autocompleteHandlerParams, filter, operator: "=" });
      const option = result.body?.data?.find(o => o.code === filter);
      return option || null;
    } catch (error) {
      return null;
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
        value={value?.code ? value.code : ''}
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
            {<SearchAdornment endTextAdornment={props.endTextAdornment} />} 
            {props.endAdornment}
          </>}
          value={value?.code ? value.code : ''}
          desc={description}
          errorText={props.errorText}
          valid={valid} />}

      />
    </EAMBaseInput>
  );
};

export default React.memo(EAMComboAutocomplete, areEqual);