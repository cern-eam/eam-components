import DateFnsUtils from '@date-io/date-fns';
import Icon from '@material-ui/core/Icon';
import { format } from 'date-fns';
import parse from "date-fns/parse";
import { DatePicker, DateTimePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import PropTypes from 'prop-types';
import React from 'react';
import EAMBaseInput from './EAMBaseInput';
import EAMTextField from './EAMTextField';

export default class EAMDatePicker extends EAMBaseInput {

    init = props => this.setValue(this.convert(props.value), false)

    /** Always returns a Date from the value provided */
    readValue = value => {
        return value instanceof Date ? value
            : typeof value === "string" && value.length ? parse(value.substring(0, this.props.dateFormatValue.length), this.props.dateFormatValue, new Date())
            : typeof value === "number" ? new Date(value)
            : null
            ;
    }

    /* Reads the Date it receives to the format wanted (TIMESTAMP or FORMATTED STRING) */
    readDate = date =>
        !date ? null
            : this.props.timestamp ? date.getTime()
            : format(date, this.props.dateFormatValue)

    convert = value => this.readDate(this.readValue(value || ''))

    getPickerProps = (state, props) => {
        const { elementInfo, dateFormatDisplay } = props;
        const { helperText, error, disabled, value } = state;
        return {
            InputAdornmentProps: {style: {marginRight: -12}},
            keyboard: true,
            error,
            helperText: helperText,
            disabled: disabled || (elementInfo && elementInfo.readonly),
            required: this.isRequired(),
            clearable: true,
            value: this.readValue(value), // Always formats the value. In EDGE and IE, the new Date() has a different behavior than in Chrome and Firefox
            onChange: str => this.onChangeHandler(this.convert(str)),
            format: dateFormatDisplay,
            label: elementInfo && elementInfo.text,
            leftArrowIcon: <Icon> keyboard_arrow_left </Icon>,
            rightArrowIcon: <Icon> keyboard_arrow_right </Icon>,
            TextFieldComponent: EAMTextField
        }
    }

    renderComponent () {
        const { showTime } = this.props;

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {showTime ? 
                    <DateTimePicker
                        {...this.getPickerProps(this.state, this.props)}
                        ampm={false}
                    />
                    : <DatePicker
                        {...this.getPickerProps(this.state, this.props)}
                    />
                }
            </MuiPickersUtilsProvider>
        )
    }
}

EAMDatePicker.propTypes = {
    dateFormatDisplay: PropTypes.string.isRequired,
    dateFormatValue: PropTypes.string.isRequired,
    showTime: PropTypes.bool.isRequired
};

EAMDatePicker.defaultProps = {
    showTime: false
};