import React, { Component } from 'react';
import { DateTimePicker } from 'material-ui-pickers';
import Icon from '@material-ui/core/Icon';
import EAMBaseInput from './EAMBaseInput'
import { format } from 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import parse from 'date-fns/parse';

export default class EAMDateTimePicker extends EAMBaseInput {

    readValue(value) {
        if (value) {
            return parse(value, "dd-MMM-yyyy HH:mm", new Date());
        } else {
            return null
        }
    }

    readDate(date) {
        if (date) {
            return format(date, "dd-MMM-yyyy HH:mm")
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
                <DateTimePicker
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
                    format="dd-MMM-yyyy HH:mm"
                    margin="normal"
                    label={text}
                    leftArrowIcon={<Icon> keyboard_arrow_left </Icon>}
                    rightArrowIcon={<Icon> keyboard_arrow_right </Icon>}
                />
            </MuiPickersUtilsProvider>
        )
    }
}