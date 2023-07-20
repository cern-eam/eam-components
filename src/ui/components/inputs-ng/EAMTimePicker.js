import React, {useState} from 'react';
import {areEqual} from './tools/input-tools'
import {renderDatePickerInput, onChangeHandler} from './tools/date-tools'
import EAMBaseInput from './components/EAMBaseInput';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import enLocale from 'date-fns/locale/en-GB';
import Constants from "../../../enums/Constants";

const EAMTimePicker = (props) => {

    const { value, onChange, style, errorText, disabled, minTime, maxTime, displayFormat } = props;
    const [ isInvalidDate, setIsInvalidDate ] = useState(false);

    return (
        <EAMBaseInput {...props}>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enLocale}>
                <TimePicker
                    renderInput={(props) => renderDatePickerInput(props, isInvalidDate, style, errorText, disabled)}
                    value={value}
                    disableMaskedInput //Check this out
                    inputFormat={displayFormat || Constants.TIME_FORMAT_DISPLAY}
                    onChange={onChangeHandler.bind(null, onChange, setIsInvalidDate)}
                    ampm={false}
                    minTime={minTime}
                    maxTime={maxTime}
                    onError={() => setIsInvalidDate(true)}
                />
         </LocalizationProvider>
        </EAMBaseInput>
    )

}

export default React.memo(EAMTimePicker, areEqual);