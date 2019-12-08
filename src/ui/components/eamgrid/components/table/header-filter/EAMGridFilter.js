import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import DataGridFilterTypeMenu from './EAMGridFilterTypeMenu';
import {withStyles} from "@material-ui/core/styles/index";
import { DatePicker, DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Icon } from '@material-ui/core';
import { format } from 'date-fns';
import EAMGridFilterInput from './EAMGridFilterInput'
import Constants from '../../../../../../enums/Constants'

const styles = {
    filterCell: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
        marginRight: 5
    },

    filterInput: {
        width: "100%",
        backgroundColor: "#FFFFFF"
    },
    filterInnerInput: {
        fontSize: '10px'
    },
    input: {
        backgroundColor: 'red'
    }
};




/**
 * Data grid filter, with:
 *  - a select to choose which kind of filter (DataGridFilterTypeMenu component)
 *  - an input text to choose the actual value with which we want to filter
 */
class DataGridTableFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterValue: props.filter.fieldValue,
            inputDisabled: false,
        }
    }

    componentWillReceiveProps (nextProps) {
        const filterValue = (nextProps.filter && nextProps.filter.fieldValue) || '';
        this.setState({filterValue})
    }

    _handleChangeValue = (event) => {
        this.setState({
            filterValue: event.target.value
        });

        this.props.setFilter({
            fieldName: this.props.filter.fieldName,
            fieldValue: event.target.value
        }, this.props.dataType);
    };

    _handleChangeDate = (date) => {
        this.setState({
            filterValue: date ? date : null
        });
        this.props.setFilter({
            fieldName: this.props.filter.fieldName,
            fieldValue: this._readDate(date)
        }, this.props.dataType);
    };

    _handleChangeDateTime = (date) => {
        this.setState({
            filterValue: date ? date : null
        });
        this.props.setFilter({
            fieldName: this.props.filter.fieldName,
            fieldValue: this._readDateTime(date)
        }, this.props.dataType);
    };

    _handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.runSearch();
        }
    };

    _readDate = date => date ? format(date, Constants.DATE_FORMAT_VALUE) : ''

    _readDateTime = date => date ? format(date, Constants.DATETIME_FORMAT_VALUE) : ''

    _onChange(option) {
        // Disable input text depending on filter operator chosen
        const disableInput = option.operator === 'IS_EMPTY' || option.operator === 'NOT_EMPTY';
        this.setState({
            inputDisabled: disableInput
        });
        this.props.setFilter(option);
    }

    render() {
        const { classes } = this.props;
        const { filterValue } = this.state;

        return (
            <div className={classes.filterCell}>
                <DataGridFilterTypeMenu
                    filter={this.props.filter}
                    onChange={this._onChange.bind(this)}
                    dataType={this.props.dataType}
                />

                {
                    (this.props.dataType &&
                        (this.props.dataType === 'VARCHAR'
                        || this.props.dataType === 'MIXVARCHAR'
                        || this.props.dataType === 'DECIMAL'
                        || this.props.dataType === 'NUMBER'
                        || this.props.dataType === 'DATETIME'
                        || this.props.dataType === 'DATE')) &&

                    <EAMGridFilterInput
                        disabled={this.state.inputDisabled}
                        width={this.props.width}
                        value={filterValue}
                        onChange={this._handleChangeValue}
                        onKeyPress = {this._handleKeyPress}
                        dataType={this.props.dataType}
                    />
                }
            </div>
        );
    }
}

export default withStyles(styles)(DataGridTableFilter);