import React, {useState} from 'react';
import {areEqual} from './tools/input-tools'
import {renderDatePickerInput, onChangeHandler} from './tools/date-tools'
import EAMBaseInput from './components/EAMBaseInput';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import enLocale from 'date-fns/locale/en-GB';
import Constants from '../../../enums/Constants';

const EAMDateTimePicker = (props) => {

    const { value, onChange, style, errorText, disabled, minDate, maxDate, displayFormat, endAdornmentStyle } = props;
    const [ isInvalidDate, setIsInvalidDate ] = useState(false);

    return (
        <EAMBaseInput {...props}>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enLocale}>
                <DateTimePicker
                    renderInput={(props) => renderDatePickerInput(props, isInvalidDate, style, errorText, disabled, endAdornmentStyle)}
                    value={value}
                    disableMaskedInput
                    inputFormat={displayFormat || Constants.DATETIME_FORMAT_DISPLAY}
                    onChange={onChangeHandler.bind(null, onChange, setIsInvalidDate)}
                    ampm={false}
                    minDate={minDate}
                    maxDate={maxDate}
                />
         </LocalizationProvider>
        </EAMBaseInput>
    )

}

export default React.memo(EAMDateTimePicker, areEqual);