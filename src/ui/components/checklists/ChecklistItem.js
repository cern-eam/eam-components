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

export default class Checklist extends Component {

    componentWillMount() {
        if (this.props.checklistItem) {
            this.setState({
                notesVisible: !!this.props.checklistItem.notes
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checklistItem) {
            this.setState({
                notesVisible: !!nextProps.checklistItem.notes
            })
        }
    }

    checkListItem = {
        paddingTop: 5,
        paddingBottom: 5,
        borderBottom: "dashed 1px #d1d3d4"
    }

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
    notesCollapseStyle() {
        return {
            marginLeft: -5,
            marginTop: -5,
            marginRight: -8,
            paddingRight: 3,
            position: "relative"
        }
    }

    /**
     *
     * @param checklistItem
     */
    onChange(checklistItem) {
        // send new checklistItem to the parent
        this.props.setChecklistItem(checklistItem)
    }

    descClickHandler() {
        //if (!this.state.notesVisible) {
        //    setTimeout(() => this.notesInput.focus(), 0)
        //}
        this.setState({
            notesVisible: !this.state.notesVisible
        })
    }

    renderChecklistItemInput() {
        let {checklistItem} = this.props

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
        let {checklistItem} = this.props;

        return (
            <div key={checklistItem.checkListCode} style={this.checkListItem}>

                <div style={this.firstLine}>
                    <div style={this.firstLineDesc} onClick={this.descClickHandler.bind(this)}>
                        {checklistItem.desc}
                    </div>
                    {this.renderChecklistItemInput()}
                </div>

                <Collapse style={this.notesCollapseStyle()} in={this.state.notesVisible}>
                    <ChecklistItemNotes checklistItem={checklistItem}
                                        onChange={value => this.onChange(value)}/>
                </Collapse>
            </div>
        )
    }
}