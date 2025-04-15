import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import useFetchAutocompleteOptions from './hooks/useFetchAutocompleteOptions';
import {areEqual, componentsProps, renderOptionHandler} from './tools/input-tools'
import EAMBaseInput from './components/EAMBaseInput';
import TextField from './components/TextField';
import { saveHistory, HISTORY_ID_PREFIX } from './tools/history-tools';

const EAMAutocomplete = (props) => {

  let {autocompleteHandler, autocompleteHandlerParams = [],
       value, desc, id, renderValue, onChange, validate, updateDesc = true} = props;

    let [inputValue, setInputValue] = useState("")
    let [description, setDescription] = useState("")
    let [open, setOpen] = useState(false)
    let [fetchedOptions, loading] = useFetchAutocompleteOptions(autocompleteHandler, autocompleteHandlerParams, inputValue, value, open, id)
    let [valid, setValid] = useState(true)

    useEffect(() => {
      setValid(true)
      if (value) {
        fetchDesc(value)
      } else {
        setDescription('')
      }
    }, [value])

    useEffect(() => {
      setDescription(desc)
    }, [desc])

    // useEffect(() => {
    //   if (!desc && value) {
    //     fetchDesc(value);
    //   }
    // }, [])

    const fetchDesc = async (hint) => {
      console.log('fetch desc', hint)
      autocompleteHandler({handlerParams: autocompleteHandlerParams, filter: hint, operator: "="})
        .then(result => {
            let option = result.body.data.find(o => o.code === hint);
            if (option) {
              delete option.code
              updateDesc && onChange({desc: option.desc, organization: option.organization, ...option})
              setDescription(option.desc)
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
      desc && updateDesc && onChange({desc: ''})
      setDescription('');
     }
    }

    const onChangeHandler = (event, newValue, reason) => {
      if (reason === 'clear') {
        onChange({code: '', desc: ''})
        return;
      }

      saveHistory(HISTORY_ID_PREFIX + id, newValue.code, newValue.desc, newValue.organization)
      onChange(newValue, newValue);
      setDescription(newValue.desc)

      // Don't bubble up any events (won't trigger a save when we select something by pressing enter)
      event.stopPropagation();
      event.preventDefault();
    }

    const onCloseHandler = (event, reason) => {
      setOpen(false)
      // Only to be fired when we blur, press ESC or hit enter and the inputValue is different than the original value
      if ( reason === 'blur' && inputValue !== value) {
        onChange({code: inputValue, desc: ''})
        //fetchDesc(inputValue);
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
                                                errorText={valid ? props.errorText : "Wrong entry"} />}

          />
      </EAMBaseInput>
      );
};

EAMAutocomplete.defaultProps = {

}

export default React.memo(EAMAutocomplete, areEqual);