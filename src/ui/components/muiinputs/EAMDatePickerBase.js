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

    init = props => {
        this.setState({
            dateFormatValue: props.dateFormatValue,
            dateFormatDisplay: props.dateFormatDisplay
        }, () => this.setValue(this.convert(props.value), false))
    }

    /** Always returns a Date from the value provided */
    readValue = value =>
        !value ? ''
            : value instanceof Date ? value
            : typeof value === "string" ? parse(value.substring(0, this.state.dateFormatValue.length), this.state.dateFormatValue, new Date())
            : typeof value === "number" ? new Date(value)
            : value 

    /* Reads the Date it receives to the format wanted (TIMESTAMP or FORMATTED STRING) */
    readDate = date =>
        !date ? null
            : this.props.timestamp ? date.getTime()
            : format(date, this.state.dateFormatValue)

    convert = value => this.readDate(this.readValue(value || ''))

    getPickerProps = (state, props) => {
        const { elementInfo } = props;
        const { helperText, error, disabled, value, dateFormatDisplay } = state;

        return {
            InputAdornmentProps: {style: {marginRight: -12}},
            keyboard: true,
            error,
            helperText: helperText,
            disabled: disabled || (elementInfo && elementInfo.readonly),
            required: this.isRequired(),
            clearable: true,
            value,
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