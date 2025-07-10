import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import {areEqual, componentsProps, renderOptionHandler} from './tools/input-tools'
import EAMBaseInput from './components/EAMBaseInput';
import TextField from './components/TextField';
import { saveHistory, HISTORY_ID_PREFIX } from './tools/history-tools';
import useComboAutocompleteOptions from './hooks/useComboAutocompleteOptions';
import useFetchAutocompleteOptions from './hooks/useFetchAutocompleteOptions';

const EAMComboAutocomplete = (props) => {

  let {autocompleteHandler, autocompleteHandlerParams = [], renderDependencies = [],
       value, desc, id, renderValue, onChange, validate = true, onClear, selectMode} = props;

    let [inputValue, setInputValue] = useState("")
    let [description, setDescription] = useState("")
    let [open, setOpen] = useState(false)
    let [fetchedOptions, loading] = 
    selectMode ? 
     useComboAutocompleteOptions(autocompleteHandler, autocompleteHandlerParams, renderDependencies, inputValue, value, open, id)
     :
     useFetchAutocompleteOptions(autocompleteHandler, autocompleteHandlerParams, renderDependencies, inputValue, value, open, id)
    let [valid, setValid] = useState(true)

    useEffect(() => {
      // if the value remains in fetchedOptions, that means it was already updated in onChangeHandler, so there's no need to proceed.
      if (fetchedOptions.find(o => o.code === value)) return

      setValid(true)

      if (!value) {
        setDescription('')
      }

      if (value && !desc) {
        fetchDesc(value)
      } 
    }, [value])

    useEffect(() => {
      setDescription(desc)
    }, [desc])

    const fetchDesc = async (hint) => {
      autocompleteHandler({handlerParams: autocompleteHandlerParams, filter: hint, operator: "="})
        .then(result => {
            let option = result.body.data.find(o => o.code === hint);
            if (option) {
              onChange(option)
              setDescription(option.desc)
              setValid(true)
            } else {
              setValid(!validate || false)
            }
        })
        .catch(console.error)
    }

    const getOptionLabelHandler = option => {
        return option.code ?? option;
    }

    const onInputChangeHandler = (event, newInputValue) => {
     setInputValue(newInputValue);
     if (newInputValue !== value) {
      //desc && updateDesc && onChange?.({desc: ''})
      setDescription('');
     }
    }

    const onChangeHandler = (event, newValue, reason) => {
      if (reason === 'clear') {
        onChange({code: '', desc: '', organization: ''})
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

    const onCloseHandler = (event, reason) => {
      setOpen(false)
      // Only to be fired when we blur, press ESC or hit enter and the inputValue is different than the original value
      if ( reason === 'blur' && (inputValue ?? '') !== (value ?? '')) {
        fetchDesc(inputValue, true)
      }
    }
    
    return (
      <EAMBaseInput {...props}>
          <Autocomplete
            // Options
            options={fetchedOptions}
            getOptionLabel = {getOptionLabelHandler}
            renderOption = {renderOptionHandler.bind(null, renderValue)}
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
            freeSolo = {true}
            value={value ? value : ''}
            clearOnEscape
            // Visuals
            openOnFocus // Very important, otherwise onCloseHandler won't be fired for example when we focus a field with a tab and delete its value.
                        // Funningly without this prop it still works correctly when we manually gain focus using the mouse.
            componentsProps={componentsProps}
            includeInputInList
            loading = {loading}
            size="small"
            fullWidth
            renderInput={(params) => <TextField {...params}
                                                {...props}
                                                desc={description}
                                                errorText = {props.errorText}
                                                valid = {valid}/>}

          />
      </EAMBaseInput>
      );
};

export default React.memo(EAMComboAutocomplete, areEqual);