import React, { useState, useEffect, useRef } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import useFetchAutocompleteOptions from './hooks/useFetchAutocompleteOptions';
import {areEqual, componentsProps, renderOptionHandler} from './tools/input-tools'
import EAMBaseInput from './components/EAMBaseInput';
import TextField from './components/TextField';
import { saveHistory, HISTORY_ID_PREFIX } from './tools/history-tools';

const EAMAutocomplete = (props) => {

  let {autocompleteHandler, autocompleteHandlerParams = [], renderDependencies = [],
       value, desc, id, renderValue, onChange, validate = true, updateDesc = true, onSelect, onClear} = props;

    let [inputValue, setInputValue] = useState("")
    let [description, setDescription] = useState("")
    let [open, setOpen] = useState(false)
    let [fetchedOptions, loading] = useFetchAutocompleteOptions(autocompleteHandler, autocompleteHandlerParams, renderDependencies, inputValue, value, open, id)
    let [valid, setValid] = useState(true)
    const skipNextFetchRef = useRef(false);
    
    useEffect(() => {
      if (skipNextFetchRef.current) {
        skipNextFetchRef.current = false; // Don't fetch/validate after we have selected a valid value from autocomplete
        return;
      }
      if (value) {
        fetchDesc(value)
      } else {
        setDescription('')
        setValid(true)
      }
    }, [value])

    useEffect(() => {
      setDescription(desc)
    }, [desc])

    const fetchDesc = async (hint, fireOnSelect = false) => {
      autocompleteHandler({handlerParams: autocompleteHandlerParams, filter: hint, operator: "="})
        .then(result => {
            let option = result.body.data.find(o => o.code === hint);
            if (option) {
              fireOnSelect && onSelect?.(option)
              delete option.code // Don't fire the updateProperty for 'code' 
              updateDesc && onChange?.({desc: option.desc, organization: option.organization, ...option})
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
      desc && updateDesc && onChange?.({desc: ''})
      setDescription('');
     }
    }

    const onChangeHandler = (event, newValue, reason) => {
      if (reason === 'clear') {
        onChange?.({code: '', desc: '', organization: ''})
        onSelect?.(null)
        onClear?.()
        setValid(true)
        return;
      }

      saveHistory(HISTORY_ID_PREFIX + id, newValue.code, newValue.desc, newValue.organization)
      
      setValid(true)
      skipNextFetchRef.current = true
      onSelect?.(newValue)
      onChange?.(newValue, newValue)
      setDescription(newValue.desc)

      // Don't bubble up any events (won't trigger a save when we select something by pressing enter)
      event.stopPropagation();
      event.preventDefault();
    }

    const onCloseHandler = (event, reason) => {
      setOpen(false)
      // Only to be fired when we blur, press ESC or hit enter and the inputValue is different than the original value
      if ( reason === 'blur' && (inputValue ?? '') !== (value ?? '')) {
        onChange?.({code: inputValue, desc: ''})

        if (!onChange) {
          fetchDesc(inputValue, true)
        }
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
                                                errorText = {props.errorText ?? (valid ? "" : "Wrong entry")}/>}

          />
      </EAMBaseInput>
      );
};

EAMAutocomplete.defaultProps = {

}

export default React.memo(EAMAutocomplete, areEqual);