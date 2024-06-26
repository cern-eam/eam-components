import React, {Component} from 'react';
import ChecklistFieldNumeric from './fields/ChecklistFieldNumeric';
import ChecklistFieldCheckbox from './fields/ChecklistFieldCheckbox';
import ChecklistFieldFinding from './fields/ChecklistFieldFinding';
import ChecklistFieldAlphaNumeric from './fields/ChecklistFieldAlphaNumeric';
import EAMDatePicker from "../inputs-ng/EAMDatePicker";
import EAMDateTimePicker from "../inputs-ng/EAMDateTimePicker";
import EAMAutocomplete from "../inputs-ng/EAMAutocomplete"
import WSChecklists from '../../../tools/WSChecklists';
import ChecklistFieldRadio from './fields/ChecklistFieldRadio';

export default class ChecklistItemInput extends Component {
    handleChange(type, value, onFail) {
        const {result, finding, numericValue, numericValue2, freeText, date, dateTime, entityCode} = this.props.checklistItem;

        let newResult, newFinding, newNumericValue, newNumericValue2, newAlphaNumericValue, newDate, newDateTime, newEntityCode;

        switch(type) {
            case ChecklistItemInput.FIELD.CHECKBOX:
            case ChecklistItemInput.FIELD.RADIO:
                newResult = (value === result) ? null : value;
                break;
            case ChecklistItemInput.FIELD.FINDING:
                newFinding = value;
                break;
            case ChecklistItemInput.FIELD.NUMERIC:
                newNumericValue = value;
                break;
            case ChecklistItemInput.FIELD.NUMERIC2:
                newNumericValue2 = value;
                break;
            case ChecklistItemInput.FIELD.NUMERIC2:
                newNumericValue2 = value;
                break;
            case ChecklistItemInput.FIELD.ALPHANUMERIC:
                newAlphaNumericValue = value;
                break;
            case ChecklistItemInput.FIELD.DATE:
                newDate = value;
                break;
            case ChecklistItemInput.FIELD.DATETIME:
                newDateTime = value;
                break;
            case ChecklistItemInput.FIELD.ENTITY:
                newEntityCode = value;
                break;
        }

        let newProps = {
            ...this.props.checklistItem, 
            result: newResult === undefined ? result : newResult,
            finding: newFinding === undefined ? finding : newFinding,
            numericValue: newNumericValue === undefined ? numericValue : newNumericValue,
            numericValue2: newNumericValue2 === undefined ? numericValue2 : newNumericValue2,
            numericValue2: newNumericValue2 === undefined ? numericValue2 : newNumericValue2,
            freeText: newAlphaNumericValue === undefined ? freeText : newAlphaNumericValue.trim(),
            date: newDate === undefined ? date : newDate,
            dateTime: newDateTime === undefined ? dateTime : newDateTime,
            entityCode: newEntityCode === undefined ? entityCode : newEntityCode
        };

        if(this.options.beforeOnChange && typeof this.options.beforeOnChange === 'function') {
            newProps = this.options.beforeOnChange(newProps, type, value);
        }

        const hasChanged = Object.keys(newProps).some(key => newProps[key] !== this.props.checklistItem[key]);

        if(!hasChanged) {
            return;
        }
        
        this.props.onChange(newProps, onFail);

    }

    renderField(field, key) {
        var { checklistItem, showError, disabled } = this.props;

        const type = field[0];
        const options = field[1] || {};

        switch(type) {
            case ChecklistItemInput.FIELD.CHECKBOX:
                return <ChecklistFieldCheckbox
                    code={options.code}
                    desc={options.desc}
                    checked={checklistItem.result === options.code}
                    handleChange={code => this.handleChange(ChecklistItemInput.FIELD.CHECKBOX, code)}
                    key={key}
                    disabled={disabled}
                />
            case ChecklistItemInput.FIELD.RADIO:
                return <ChecklistFieldRadio
                    code={options.code}
                    desc={options.desc}
                    checked={checklistItem.result === options.code}
                    handleChange={code => this.handleChange(ChecklistItemInput.FIELD.RADIO, code)}
                    key={key}
                    disabled={disabled}
                />
            case ChecklistItemInput.FIELD.FINDING:
                return <ChecklistFieldFinding
                    dropdown={options.dropdown}
                    label={this.options.label}
                    finding={checklistItem.finding}
                    handleChange={code => this.handleChange(ChecklistItemInput.FIELD.FINDING, code)}
                    possibleFindings={checklistItem.possibleFindings}
                    key={key}
                    disabled={disabled}
                />
            case ChecklistItemInput.FIELD.NUMERIC:
                return <ChecklistFieldNumeric
                    value={checklistItem.numericValue}
                    UOM={checklistItem.UOM}
                    minimumValue={checklistItem.minimumValue}
                    maximumValue={checklistItem.maximumValue}
                    handleChange={(value, onFail) => this.handleChange(ChecklistItemInput.FIELD.NUMERIC, value, onFail)}
                    key={key}
                    showError={showError}
                    disabled={disabled}
                    slider={this.options.slider}
                    sliderRange
                />
            case ChecklistItemInput.FIELD.NUMERIC2:
                return <ChecklistFieldNumeric
                    value={checklistItem.numericValue2}
                    UOM={checklistItem.UOM2}
                    minimumValue={checklistItem.minimumValue2}
                    maximumValue={checklistItem.maximumValue2}
                    handleChange={(value, onFail) => this.handleChange(ChecklistItemInput.FIELD.NUMERIC2, value, onFail)}
                    key={key}
                    showError={showError}
                    disabled={disabled}
                    slider={this.options.slider}
                    sliderRange
                />
            case ChecklistItemInput.FIELD.ALPHANUMERIC:
                return <ChecklistFieldAlphaNumeric
                    value={checklistItem.freeText}
                    maxLength={4000}
                    handleChange={(value, onFail) => this.handleChange(ChecklistItemInput.FIELD.ALPHANUMERIC, value, onFail)}
                    key={key}
                    disabled={disabled}
                />
            case ChecklistItemInput.FIELD.DATE:
                return <EAMDatePicker
                    value={checklistItem.date}
                    onChange={value => this.handleChange(ChecklistItemInput.FIELD.DATE, value, null)}
                    key={key}
                    disabled={disabled}
                    endAdornmentStyle={{marginRight: "1px"}}
                    style={{marginRight: "0px"}}
                />
            case ChecklistItemInput.FIELD.DATETIME:
                return <EAMDateTimePicker
                    value={checklistItem.dateTime}
                    onChange={value => this.handleChange(ChecklistItemInput.FIELD.DATETIME, value, null)}
                    key={key}
                    disabled={disabled}
                    endAdornmentStyle={{marginRight: "1px"}}
                    style={{marginRight: "0px"}}
                />
            case ChecklistItemInput.FIELD.ENTITY:
                return <EAMAutocomplete
                    style={{minWidth: '240px', marginLeft: '10px'}}
                    barcodeScanner
                    value={checklistItem.entityCode}
                    onChange={entity => this.handleChange(ChecklistItemInput.FIELD.ENTITY, entity.code, () => {entity.desc = ''})}
                    rightAlign
                    autocompleteHandler={WSChecklists.autocompleteEntity}
                    autocompleteHandlerParams={[checklistItem.entityType, checklistItem.entityClass]}
            />
        }
    }

    render() {
        var {fields, options} = this.props;

        this.options = options;

        let fieldsRender = [];

        let key = 0;
        for(const field of fields) {
            fieldsRender.push(this.renderField(field, ++key));
        }

        return <div onClick={(event) => event.stopPropagation()} style={options.style || ChecklistItemInput.STYLE.ROWS}>
            {fieldsRender}
        </div>
    }
}

ChecklistItemInput.FIELD = {
    CHECKBOX: "CHECKBOX",
    RADIO: "RADIO",
    NUMERIC: "NUMERIC",
    NUMERIC2: "NUMERIC2",
    NUMERIC2: "NUMERIC2",
    FINDING: "FINDING",
    ALPHANUMERIC: "ALPHANUMERIC",
    DATE: "DATE",
    DATETIME: "DATETIME",
    ENTITY: "ENTITY"
}

const SINGLE_EXPAND = {
    flex: "1",
    display: "flex",
    justifyContent: "flex-end"
}

const SAMELINE = {
    display: "flex",
    marginLeft: "auto",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "flex-end",
    flexDirection: "row"
}

ChecklistItemInput.STYLE = {
    SAMELINE,
    SINGLE_EXPAND
};

ChecklistItemInput.createField = (type, options) => [type, options];