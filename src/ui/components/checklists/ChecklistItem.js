import React, {Component} from 'react';
import ChecklistItemInputYesNo from './inputs/ChecklistItemInputYesNo';
import ChecklistItemInput3Findings from './inputs/ChecklistItemInput3Findings';
import ChecklistItemInput2Findings from './inputs/ChecklistItemInput2Findings';
import ChecklistItemInput1Finding from './inputs/ChecklistItemInput1Finding';
import ChecklistItemInputMoreFindings from './inputs/ChecklistItemInputMoreFindings';
import ChecklistItemInputQuantitative from './inputs/ChecklistItemInputQuantitative';
import ChecklistItemInputChecklist from './inputs/ChecklistItemInputChecklist';
import ChecklistItemInputInspection from './inputs/ChecklistItemInputInspection';
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
        let {checklistItem} = this.state

        switch (checklistItem.type) {
            case "01":
                return <ChecklistItemInputChecklist checklistItem={checklistItem}
                                                    onChange={value => this.onChange(value)}/>
            case "02":
                return <ChecklistItemInputYesNo checklistItem={checklistItem} onChange={value => this.onChange(value)}/>
            case "03":
                if (checklistItem.possibleFindings.length >= this.props.minFindingsDropdown) {
                    return <ChecklistItemInputMoreFindings checklistItem={checklistItem}
                                                           onChange={value => this.onChange(value)}/>
                } else {
                    switch (checklistItem.possibleFindings.length) {
                        case 1:
                            return <ChecklistItemInput1Finding checklistItem={checklistItem}
                                                               onChange={value => this.onChange(value)}/>
                        case 2:
                            return <ChecklistItemInput2Findings checklistItem={checklistItem}
                                                                onChange={value => this.onChange(value)}/>
                        case 3:
                            return <ChecklistItemInput3Findings checklistItem={checklistItem}
                                                                onChange={value => this.onChange(value)}/>
                        default:
                            return <ChecklistItemInputMoreFindings checklistItem={checklistItem}
                                                                   onChange={value => this.onChange(value)}/>
                    }
                }
            case "04":
            case "05":
                return <ChecklistItemInputQuantitative checklistItem={checklistItem}
                                                       onChange={value => this.onChange(value)}/>
            case "06":
                return <ChecklistItemInputInspection checklistItem={checklistItem}
                                                     onChange={value => this.onChange(value)}/>
            default:
                return <div/>
        }
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