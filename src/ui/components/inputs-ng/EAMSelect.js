import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import {areEqual, getElementKey, isRequired, renderOptionHandler, formatLabel, componentsProps} from './tools/input-tools'
import EAMBaseInput from './components/EAMBaseInput';
import TextField from './components/TextField';
import useFetchSelectOptions from './hooks/useFetchSelectOptions';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowAdornment from './components/ArrowAdornment';

const EAMSelect = (props) => {
   
  let {autocompleteHandler, autocompleteHandlerParams, renderDependencies,
    value, desc, onChange,
    options, optionsTransformer,
    required, id, disabled,
    renderValue, endTextAdornment, validate = true, selectOnlyMode} = props;

    let [inputValue, setInputValue] = useState("")
    let [fetchedOptions, loading] = useFetchSelectOptions(autocompleteHandler, autocompleteHandlerParams, value, desc, options, optionsTransformer, renderDependencies)
  
    const getOptionLabelHandler = option => {
        if (typeof option === 'object') {
            return formatLabel(renderValue, option);
        }

        if (typeof option === 'string') {
            if (getOptions().some(o => o.code === option)) {
                return formatLabel(renderValue, getOptions().find(o => o.code === option));
            } else {
                return option;
            }
        }
    }

    const getOptions = () => {
      let optionsTemp = options ?? fetchedOptions ?? [];
      if (selectOnlyMode && !required) {
        return [{code: "", desc: ""}].concat(optionsTemp);
      }
      return optionsTemp;
    }

    const onInputChangeHandler = (event, newInputValue) => {
        setInputValue(newInputValue);
        if (newInputValue !== value && desc) {
         onChange({desc: ''})
        }
       }

    const isOptionEqualToValueHandler = (option, value) => {  
        if (value) {
            return option.code === value
        } else {
            return false;
        }
    }

    const onChangeHandler = (event, newValue, reason) => {
      if (reason === 'clear') {
        // Don't allow clearing the value if mandatory
        if (required) {
            return;
        }
        onChange({code: '', desc: ''})
        return;
      }

      onChange(newValue);

      // Don't bubble up any events (won't trigger a save when we select something by pressing enter)
      event.stopPropagation();
      event.preventDefault();
    }


    const onCloseHandler = (event, reason) => {
      if ( (reason === 'blur' || reason === 'escape') && inputValue) {
        const optionMatch = getOptions().find(o => o.code === inputValue || getOptionLabelHandler(o) === inputValue)
        if (optionMatch) {
            onChange(optionMatch)
        } else {
          !validate && onChange({code: inputValue, desc: ''})
        }
      }
    }

    return (
      <EAMBaseInput {...props}>
          <Autocomplete   
            // Options
            options={getOptions()} 
            getOptionLabel = {getOptionLabelHandler}
            renderOption = {renderOptionHandler.bind(null, renderValue)}
            // On change 
            onChange={onChangeHandler} 
            onInputChange={onInputChangeHandler}
            // Misc
            id={id}
            value={value ? value : ''} 
            isOptionEqualToValue={isOptionEqualToValueHandler}
            onClose={onCloseHandler}
            // Visuals 
            openOnFocus
            componentsProps={componentsProps}
            loading = {loading}
            size="small"
            fullWidth
            renderInput={(params) => <TextField hideDescription = {true} {...params} {...props} selectMode={true}/>}
          />
      </EAMBaseInput>
      );
};

EAMSelect.defaultProps = {
  
}

export default React.memo(EAMSelect, areEqual);