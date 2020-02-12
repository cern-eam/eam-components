import React, {Component} from 'react';
import ChecklistItemInput from './ChecklistItemInput';
import ChecklistItemNotes from './ChecklistItemNotes';
import Collapse from '@material-ui/core/Collapse';
import ChecklistItemFollowUp from "./ChecklistItemFollowUp";
export default class Checklist extends Component {

    state = {
        detailsVisible: false,
        blocked: false
    }

    componentWillMount() {
        this.init(this.props.checklistItem);
    }

    componentWillReceiveProps(nextProps) {
        let checklistItemProps = nextProps.checklistItem;
        let checklistItemState = this.state.checklistItem;
        if (checklistItemProps && checklistItemState) {
            if (checklistItemProps.workOrderCode !== checklistItemState.workOrderCode) {
                console.log('new wo!')
                this.init(checklistItemProps);
            }
            if (checklistItemProps.followUpWorkOrder !== checklistItemState.followUpWorkOrder) {
                let checklistItem = {
                    ...checklistItemState,
                    followUpWorkOrder: checklistItemProps.followUpWorkOrder
                }
                this.init(checklistItem);
            }
        }
    }

    init = checklistItem => {
        if (checklistItem) {
            this.setState({
                checklistItem: checklistItem,
                detailsVisible: !!checklistItem.notes || !!checklistItem.followUpWorkOrder  || checklistItem.followUp === '+'
            })
        }
    }

    getCheckListItemStyle = () => ({
        paddingTop: 5,
        paddingBottom: 5,
        borderBottom: "dashed 1px #d1d3d4",
        opacity: this.state.blocked ? 0.5 : 1,
        pointerEvents: this.state.blocked ? 'none' : 'auto'
    })

    firstLine = {
        display: "flex",
        alignItems: "center",
        minHeight: 48,
        justifyContent: 'space-between',
    };

    firstLineDesc = {
        float: "left",
        pointerEvents: "initial",
        color: "rgba(0, 0, 0, 0.87)"
    };

    /**
     * Compute the style for notes div container
     *
     * @returns {{marginLeft: number, marginTop: number, position: string, display: string}}
     */
    checklistDetailsStyle = {
            marginLeft: -5,
            marginTop: -5,
            marginRight: -8,
            paddingRight: 3,
            display: "flex",
            flexDirection: "row"
    }


    onChange(checklistItem) {
        // Block the UI
        this.setState({blocked: true})
        // Copy the current checklist item (will be used to restore the UI)
        let oldChecklistItem = Object.assign({}, this.state.checklistItem)
        //
        this.setState({checklistItem})
        // Update the checklist Item
        this.props.updateChecklistItem(checklistItem)
            .then(response => {
                this.setState({blocked: false})
            })
            .catch(error => {
                this.props.handleError(error)
                // Unblock the UI and restore the UI
                this.setState({
                    blocked: false,
                    checklistItem: oldChecklistItem
                })
            });
    }

    descClickHandler() {
        //if (!this.state.notesVisible) {
        //    setTimeout(() => this.notesInput.focus(), 0)
        //}
        this.setState({
            detailsVisible: !this.state.detailsVisible
        })
    }

    renderChecklistItemInput() {
        let {checklistItem} = this.state;

        let fields = [];
        let options = {};

        // use until use of numeric values in result field is deprecated
        const clearResult = (newProps, type, value) => {
            delete newProps.result;
            return newProps;
        };

        switch(checklistItem.type) {
            case "01":
                fields = [
                    [ChecklistItemInput.FIELD.CHECKBOX, {code: "COMPLETED", desc:"Completed"}]
                ];
                options.style = ChecklistItemInput.STYLE.SINGLE;
                break;
            case "02":
                fields = [
                    [ChecklistItemInput.FIELD.CHECKBOX, {code: "YES", desc: "Yes"}],
                    [ChecklistItemInput.FIELD.CHECKBOX, {code: "NO", desc: "No"}]
                ];
                options.style = ChecklistItemInput.STYLE.SAMELINE;
                break;
            case "03":
                const MINIMUM_MIN_FINDINGS = 4;
                fields = [
                    [ChecklistItemInput.FIELD.FINDING, {
                        dropdown:
                            checklistItem.possibleFindings.length >= Math.min(this.props.minFindingsDropdown, MINIMUM_MIN_FINDINGS)
                    }]
                ];
                break;
            case "04":
            case "05":
                fields = [
                    [ChecklistItemInput.FIELD.QUANTITATIVE]
                ];
                options.beforeOnChange = clearResult;
                break;
            case "06":
                fields = [
                    [ChecklistItemInput.FIELD.FINDING],
                    [ChecklistItemInput.FIELD.QUANTITATIVE]
                ];

                options.beforeOnChange = clearResult;
                break;
            case "07":
                fields = [
                    [ChecklistItemInput.FIELD.CHECKBOX, {code: "OK", desc: "OK"}],
                    [ChecklistItemInput.FIELD.CHECKBOX, {code: "REPAIRSNEEDED", desc: "Repairs Needed"}],
                    [ChecklistItemInput.FIELD.FINDING]
                ];

                switch(checklistItem.result) {
                    case null:
                        checklistItem.possibleFindings = [];
                        break;
                    case "OK":
                        checklistItem.possibleFindings = [{code: "AM", desc: "Adjustments Made"}];
                        break;
                    case "REPAIRSNEEDED":
                        checklistItem.possibleFindings = [
                            {code: "RC", desc: "Repair Completed"},
                            {code: "TR", desc: "Temporary Repair"}
                        ];
                        break;
                }

                options.beforeOnChange = (newProps, type, value) => {
                    newProps.finding = type === ChecklistItemInput.FIELD.CHECKBOX ? undefined : newProps.finding;
                    return newProps;
                }
                break;
            case "08":
                fields = [
                    [ChecklistItemInput.FIELD.CHECKBOX, {code: "GOOD", desc: "Good"}],
                    [ChecklistItemInput.FIELD.CHECKBOX, {code: "POOR", desc: "Poor"}]
                ];
                options.style = ChecklistItemInput.STYLE.SAMELINE;
                break;
            case "09":
            case "10":
                fields = [
                    [ChecklistItemInput.FIELD.CHECKBOX, {code: "OK", desc: "OK"}],
                    [ChecklistItemInput.FIELD.CHECKBOX, {code: "ADJUSTED", desc: "Adjusted"}]
                ];

                if(checklistItem.type === "10") {
                    fields.push([ChecklistItemInput.FIELD.QUANTITATIVE])
                }

                options.style = ChecklistItemInput.STYLE.SAMELINE;
                break;
            case "11":
            case "12":
                fields = [
                    [ChecklistItemInput.FIELD.CHECKBOX, {code: "OK", desc: "OK"}],
                    [ChecklistItemInput.FIELD.CHECKBOX, {code: "NONCONFORMITY", desc: "Nonconformity"}]
                ];

                if(checklistItem.type === "12") {
                    fields.push([ChecklistItemInput.FIELD.QUANTITATIVE])
                    options.beforeOnChange = (newProps, type, value) => {
                        if(type === ChecklistItemInput.FIELD.QUANTITATIVE)
                            newProps.result = newProps.result === null ? "OK" : null;
                        return newProps;
                    }
                }

                options.style = ChecklistItemInput.STYLE.SAMELINE;
                break;
        }

        if(fields === undefined) return <div/>

        return <ChecklistItemInput checklistItem={checklistItem} onChange={value => this.onChange(value)} fields={fields} options={options} />
    }

    render() {
        let {checklistItem} = this.state;
        return (
            <div style={this.getCheckListItemStyle()}>

                <div style={this.firstLine}>
                    <div style={this.firstLineDesc} onClick={this.descClickHandler.bind(this)}>
                        <label>{checklistItem.desc}</label>
                        {checklistItem.requiredToClose === true && <label style={{color: "red"}}> *</label>}
                    </div>
                    {this.renderChecklistItemInput()}
                </div>

                <Collapse in={this.state.detailsVisible}>
                    <div style={this.checklistDetailsStyle} >
                        <ChecklistItemNotes checklistItem={checklistItem}
                                            onChange={value => this.onChange(value)}/>
                        <ChecklistItemFollowUp 
                                checklistItem={checklistItem}
                                onChange={value => this.onChange(value)}
                                getWoLink={this.props.getWoLink}
                        />
                    </div>
                </Collapse>
            </div>
        )
    }
}