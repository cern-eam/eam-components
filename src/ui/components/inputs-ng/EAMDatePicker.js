import React, {useState} from 'react';
import {areEqual} from './tools/input-tools'
import {renderDatePickerInput, onChangeHandler} from './tools/date-tools'
import EAMBaseInput from './components/EAMBaseInput';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import enLocale from 'date-fns/locale/en-GB';

const EAMDatePicker = (props) => {

    let {value, onChange, style, errorText, disabled} = props;
    let [isInvalidDate, setIsInvalidDate] = useState(false);

    return (
        <EAMBaseInput {...props}>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enLocale}>
                <DatePicker
                    renderInput={(props) => renderDatePickerInput(props, isInvalidDate, style, errorText, disabled)}
                    value={value}
                    disableMaskedInput
                    inputFormat="dd-MMM-yyyy" //TODO shouldn't be hardcoded 
                    onChange={onChangeHandler.bind(null, onChange, setIsInvalidDate)}
                />
         </LocalizationProvider>
        </EAMBaseInput>
    )

}

export default React.memo(EAMDatePicker, areEqual);