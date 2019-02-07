import React, { Component } from 'react';
import { DatePicker } from 'material-ui-pickers';
import Icon from '@material-ui/core/Icon';
import EAMBaseInput from './EAMBaseInput'
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns'
import parse from "date-fns/parse";
export default class EAMDatePicker extends EAMBaseInput {

    readValue(value) {
        if (value) {
            if (value instanceof Date)
                return value;
            if (value.length > 11)
                value = value.substring(0, 11);
            return parse(value, "dd-MMM-yyyy", new Date());
        } else {
            return null
        }
    }

    readDate(date) {
        if (date) {
            return format(date, 'dd-MMM-yyyy')
        } else {
            return ''
        }
    }


    render() {
        var {text} = this.props.elementInfo;

        if (this.isHidden()) {
            return <div/>
        }

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    InputAdornmentProps={{style: {marginRight: -12}}}
                    keyboard
                    error={this.state.error}
                    helperText={this.state.helperText}
                    disabled={this.state.disabled || this.props.elementInfo.readonly}
                    required={this.isRequired()}
                    clearable
                    value={this.readValue(this.props.value)}
                    onChange={date => this.onChangeHandler(this.readDate(date))}
                    fullWidth
                    format="dd-MMM-yyyy"
                    margin="normal"
                    label={text}
                    leftArrowIcon={<Icon> keyboard_arrow_left </Icon>}
                    rightArrowIcon={<Icon> keyboard_arrow_right </Icon>}
                />
            </MuiPickersUtilsProvider>
        )
    }
}