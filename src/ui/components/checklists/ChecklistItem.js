import React, {Component} from 'react';
import ChecklistItemInput from './ChecklistItemInput';
import ChecklistItemNotes from './ChecklistItemNotes';
import Collapse from '@material-ui/core/Collapse';
import ChecklistItemFollowUp from "./ChecklistItemFollowUp";

export default class ChecklistItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailsVisible: false,
            blocked: false,
            requestTimeout: null
        }

        this.notes = React.createRef();
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

    init(checklistItem) {
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
        flexWrap: 'wrap'
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

        this.setState((state, props) => {
            if(state.requestTimeout !== null)
                clearTimeout(state.requestTimeout);

            const DEBOUNCE_TIME_MS = 360;

            return {
                requestTimeout: setTimeout(() => {
                    this.setState({requestTimeout: null});
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
                }, DEBOUNCE_TIME_MS)
            }
        });
    }

    descClickHandler() {
        const notes = this.notes.current;

        this.setState((state, props) => {
            const detailsVisible = !state.detailsVisible;

            if(detailsVisible) {
                setTimeout(() => this.notes.current.focus(), 0);
            }

            return {detailsVisible}
        });
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

        const field = ChecklistItemInput.field;
        const {CHECKBOX, FINDING, NUMERIC} = ChecklistItemInput.FIELD;

        switch(checklistItem.type) {
            case "01":
                fields = [
                    field(CHECKBOX, {code: "COMPLETED", desc:"Completed"})
                ];
                options.style = ChecklistItemInput.STYLE.SINGLE;
                break;
            case "02":
                fields = [
                    field(CHECKBOX, {code: "YES", desc: "Yes"}),
                    field(CHECKBOX, {code: "NO", desc: "No"})
                ];
                options.style = ChecklistItemInput.STYLE.SAMELINE;
                break;
            case "03":
                const MINIMUM_MIN_FINDINGS = 4;
                fields = [
                    field(FINDING, {
                        dropdown:
                            checklistItem.possibleFindings.length >= Math.min(this.props.minFindingsDropdown, MINIMUM_MIN_FINDINGS)
                    })
                ];
                break;
            case "04":
            case "05":
                fields = [
                    field(NUMERIC)
                ];
                options.beforeOnChange = clearResult;
                break;
            case "06":
                fields = [
                    field(FINDING),
                    field(NUMERIC)
                ];

                options.beforeOnChange = clearResult;
                break;
            case "07":
                fields = [
                    field(CHECKBOX, {code: "OK", desc: "OK"}),
                    field(CHECKBOX, {code: "REPAIRSNEEDED", desc: "Repairs Needed"}),
                    field(FINDING)
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
                    if(type === ChecklistItemInput.FIELD.CHECKBOX) {
                        delete newProps.finding;
                    }
                    return newProps;
                }
                break;
            case "08":
                fields = [
                    field(CHECKBOX, {code: "GOOD", desc: "Good"}),
                    field(CHECKBOX, {code: "POOR", desc: "Poor"})
                ];
                options.style = ChecklistItemInput.STYLE.SAMELINE;
                break;
            case "09":
            case "10":
                fields = [
                    field(CHECKBOX, {code: "OK", desc: "OK"}),
                    field(CHECKBOX, {code: "ADJUSTED", desc: "Adjusted"})
                ];

                if(checklistItem.type === "10") {
                    fields.push(field(NUMERIC))
                }

                options.style = ChecklistItemInput.STYLE.SAMELINE;
                break;
            case "11":
            case "12":
                fields = [
                    field(CHECKBOX, {code: "OK", desc: "OK"}),
                    field(CHECKBOX, {code: "NONCONFORMITY", desc: "Nonconformity"})
                ];

                if(checklistItem.type === "12") {
                    fields.push([ChecklistItemInput.FIELD.NUMERIC])
                    options.beforeOnChange = (newProps, type, value) => {
                        if(type === ChecklistItemInput.FIELD.NUMERIC && newProps.result === null) {
                            newProps.result = "OK";
                        }
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
                        <ChecklistItemNotes 
                            ref={this.notes}
                            checklistItem={checklistItem}
                            onChange={value => this.onChange(value)}
                        />
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