import React, {Component} from 'react';
import ChecklistFieldNumeric from './fields/ChecklistFieldNumeric';
import ChecklistFieldCheckbox from './fields/ChecklistFieldCheckbox';
import ChecklistFieldFinding from './fields/ChecklistFieldFinding';
import ChecklistFieldAlphaNumeric from './fields/ChecklistFieldAlphaNumeric';

export default class ChecklistItemInput extends Component {
    handleChange(type, value, onFail) {
        const {result, finding, numericValue, freeText} = this.props.checklistItem;

        let newResult, newFinding, newNumericValue, newAlphaNumericValue;

        switch(type) {
            case ChecklistItemInput.FIELD.CHECKBOX:
                newResult = (value === result) ? null : value;
                break;
            case ChecklistItemInput.FIELD.FINDING:
                newFinding = value;
                break;
            case ChecklistItemInput.FIELD.NUMERIC:
                newNumericValue = value;
                break;
            case ChecklistItemInput.FIELD.ALPHANUMERIC:
                newAlphaNumericValue = value;
                break;
        }

        let newProps = {
            ...this.props.checklistItem,
            result: newResult === undefined ? result : newResult,
            finding: newFinding === undefined ? finding : newFinding,
            numericValue: newNumericValue === undefined ? numericValue : newNumericValue,
            freeText: newAlphaNumericValue === undefined ? freeText : newAlphaNumericValue.trim(),
        };

        if(this.options.beforeOnChange && typeof this.options.beforeOnChange === 'function') {
            newProps = this.options.beforeOnChange(newProps, type, value);
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
            case ChecklistItemInput.FIELD.FINDING:
                return <ChecklistFieldFinding
                    dropdown={options.dropdown}
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
                />
            case ChecklistItemInput.FIELD.ALPHANUMERIC:
                return <ChecklistFieldAlphaNumeric
                    value={checklistItem.freeText}
                    maxLength={4000}
                    handleChange={(value, onFail) => this.handleChange(ChecklistItemInput.FIELD.ALPHANUMERIC, value, onFail)}
                    key={key}
                    disabled={disabled}
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

        return <div style={options.style || ChecklistItemInput.STYLE.ROWS}>
            {fieldsRender}
        </div>
    }
}

ChecklistItemInput.FIELD = {
    CHECKBOX: "CHECKBOX",
    NUMERIC: "NUMERIC",
    FINDING: "FINDING",
    ALPHANUMERIC: "ALPHANUMERIC"
}

const SINGLE = {
    flex: "0 0 186px",
    display: "flex",
    marginLeft: "auto"
}

const SINGLE_EXPAND = {
    flex: "1 0 auto",
    marginLeft: "auto",
    display: "flex",
}

const ROWS = {
    flex: "0 0 186px",
    display: "flex",
    position: "relative",
    marginLeft: "auto",
    flexDirection: "column"
}

const SAMELINE = {
    flex: "0 0 186px",
    display: "flex",
    marginLeft: "auto",
    flexWrap: "wrap",
    justifyContent: "space-between"
}

ChecklistItemInput.STYLE = {
    SINGLE,
    ROWS,
    SAMELINE,
    SINGLE_EXPAND
};

ChecklistItemInput.createField = (type, options) => [type, options];