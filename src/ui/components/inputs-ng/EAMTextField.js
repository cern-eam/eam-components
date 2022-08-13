import React, {useState, useEffect} from 'react';
import {areEqual} from './tools/input-tools'
import EAMBaseInput from './components/EAMBaseInput';
import TextField from './components/TextField';

const EAMTextField = (props) => {

    let {value, valueKey, updateProperty} = props;
    let [inputValue, setInputValue] = useState(value || '');

    useEffect(() => setInputValue(value || ''), [value])

    let inputProps = {
        onChange: event => setInputValue(event.target.value),
        onBlur: () => {if (inputValue !== value) updateProperty(valueKey, inputValue);},
        value: inputValue
    };

    return (
        <EAMBaseInput {...props}>
            <TextField {...props} inputProps = {inputProps} />
        </EAMBaseInput>
    )

}

export default React.memo(EAMTextField, areEqual);