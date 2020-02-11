import React, {Component} from 'react';
import ChecklistFieldQuantitative from './fields/ChecklistFieldQuantitative';
import ChecklistFieldCheckbox from './fields/ChecklistFieldCheckbox';
import ChecklistFieldFinding from './fields/ChecklistFieldFinding';

export default class ChecklistItemInput extends Component {
    handleChange(type, value) {
        let key;
        switch(type) {
            case ChecklistItemInput.FIELD.CHECKBOX:
                key = 'result'
                value = (value === this.props.checklistItem.result) ? null : value;
                break;
            case ChecklistItemInput.FIELD.FINDING:
                key = 'finding'
                value = (value === this.props.checklistItem.finding) ? null : value;
                break;
            case ChecklistItemInput.FIELD.QUANTITATIVE:
                key = 'result';
                break;
        }

        this.props.onChange({
            ...this.props.checklistItem,
            [key]: value
        })
    }

    renderField(field) {
        var {checklistItem} = this.props;

        const [type, options] = field;

        switch(type) {
            case ChecklistItemInput.FIELD.CHECKBOX:
                return <ChecklistFieldCheckbox
                    code={options.code}
                    desc={options.desc}
                    checked={checklistItem.result === options.code}
                    handleChange={code => this.handleChange(ChecklistItemInput.FIELD.CHECKBOX, code)}
                />
            case ChecklistItemInput.FIELD.FINDING:
                return <ChecklistFieldFinding
                    dropdown={options.dropdown}
                    finding={checklistItem.finding || ''}
                    handleChange={code => this.handleChange(ChecklistItemInput.FIELD.FINDING, code)}
                    possibleFindings={checklistItem.possibleFindings}
                />
            case ChecklistItemInput.FIELD.QUANTITATIVE:
                return <ChecklistFieldQuantitative
                    value={checklistItem.result || ''}
                    UOM={checklistItem.UOM}
                    handleChange={value => this.handleChange(ChecklistItemInput.FIELD.QUANTITATIVE, value)}
                />
        }
    }

    render() {
        var {fields, options} = this.props;

        let fieldsRender = [];

        for(const field of fields) {
            fieldsRender.push(this.renderField(field));
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
    flex: "0 0 170px",
    display: "flex",
    marginLeft: 10
}

const ROWS = {
    flex: "0 0 170px",
    display: "flex",
    position: "relative",
    marginLeft: 10,
    flexDirection: "column"
}

const SAMELINE = {
    flex: "0 0 170px",
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