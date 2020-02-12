import React, {Component} from 'react';
import ChecklistFieldNumeric from './fields/ChecklistFieldNumeric';
import ChecklistFieldCheckbox from './fields/ChecklistFieldCheckbox';
import ChecklistFieldFinding from './fields/ChecklistFieldFinding';

export default class ChecklistItemInput extends Component {
    handleChange(type, value) {
        const {result, finding, numericValue} = this.props.checklistItem;

        let newResult,  newFinding, newNumericValue;
        
        switch(type) {
            case ChecklistItemInput.FIELD.CHECKBOX:
                newResult = (value === result) ? null : value;
                break;
            case ChecklistItemInput.FIELD.FINDING:
                newFinding = (value === finding) ? null : value;
                break;
            case ChecklistItemInput.FIELD.NUMERIC:
                newNumericValue = value;
                break;
        }

        let newProps = {
            ...this.props.checklistItem,
            result: newResult === undefined ? result : newResult,
            finding: newFinding === undefined ? finding : newFinding,
            numericValue: newNumericValue === undefined ? numericValue : newNumericValue
        };

        if(this.options.beforeOnChange && typeof this.options.beforeOnChange === 'function') {
            newProps = this.options.beforeOnChange(newProps, type, value);
        }

        this.props.onChange(newProps);

    }

    renderField(field, key) {
        var {checklistItem} = this.props;

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
                />
            case ChecklistItemInput.FIELD.FINDING:
                return <ChecklistFieldFinding
                    dropdown={options.dropdown}
                    finding={checklistItem.finding || ''}
                    handleChange={code => this.handleChange(ChecklistItemInput.FIELD.FINDING, code)}
                    possibleFindings={checklistItem.possibleFindings}
                    key={key}
                />
            case ChecklistItemInput.FIELD.NUMERIC:
                return <ChecklistFieldNumeric
                    value={checklistItem.numericValue || ''}
                    UOM={checklistItem.UOM}
                    handleChange={value => this.handleChange(ChecklistItemInput.FIELD.NUMERIC, value)}
                    key={key}
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
    FINDING: "FINDING"
}

const SINGLE = {
    flex: "0 0 240px",
    display: "flex",
    marginLeft: 10
}

const ROWS = {
    flex: "0 0 240px",
    display: "flex",
    position: "relative",
    marginLeft: 10,
    flexDirection: "column"
}

const SAMELINE = {
    flex: "0 0 240px",
    display: "flex",
    marginLeft: 10,
    flexWrap: "wrap",
    justifyContent: "space-between"
}

ChecklistItemInput.STYLE = {
    SINGLE,
    ROWS,
    SAMELINE
};