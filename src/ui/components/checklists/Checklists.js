import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { Component } from 'react';
import WSChecklists from '../../../tools/WSChecklists';
import EISPanel from '../panel';
import ChecklistEquipment from "./ChecklistEquipment";
import ChecklistItem from './ChecklistItem';
import BlockUi from 'react-block-ui';

export default class Checklists extends Component {
    state = {
        activities: [],
        blocking: false
    }

    expansionDetailsStyle = {
        marginRight: -24,
        marginLeft: -24,
        marginTop: -7,
        marginBottom: -24
    }

    componentWillMount() {
        this.readActivities(this.props.workorder)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.workorder !== nextProps.workorder) {
            this.readActivities(nextProps.workorder)
        }
    }

    readActivities(workorder) {
        this.props.getWorkOrderActivities(workorder).then(response => {
            this.setState({
                activities: response.body.data,
                blocking: false
            })
        })
    }

    renderChecklistsForActivity(activity) {
        let checklistItems = [];
        let equipmentCode;
        let equipmentDesc;
        //Count the number of equipments to know if it is multiequipment
        let equipments = [];
        activity.checklists.forEach(checklist => {
            if (!equipments.includes(checklist.equipmentCode)) {
                equipments.push(checklist.equipmentCode);
            }
        });
        const multipleEquipment = equipments.length > 1;
        //Iterate on checklists to display items
        activity.checklists.forEach(checklist => {
            if (multipleEquipment && equipmentCode !== checklist.equipmentCode) {
                equipmentCode = checklist.equipmentCode;
                equipmentDesc = checklist.equipmentDesc;
                checklistItems.push(
                    <ChecklistEquipment key={checklist.checkListCode + "_equipment"}
                                        equipmentCode={equipmentCode}
                                        equipmentDesc={equipmentDesc}/>
                )
            }

            checklistItems.push(
                <ChecklistItem key={checklist.checkListCode}
                               updateChecklistItem={this.props.updateChecklistItem}
                               checklistItem={checklist}
                               handleError={this.props.handleError}
                               minFindingsDropdown={this.props.minFindingsDropdown}/>
            )
        });

        return checklistItems
    }

    createFollowUpWOs = (evt, checklistActivity) => {
        evt.stopPropagation();
        const activity = {
            workOrderNumber: checklistActivity.workOrderNumber,
            activityCode: checklistActivity.activityCode
        }
        this.setState({blocking: true});

        WSChecklists.createFolowUpWorkOrders(activity)
            .then(resp => {
                this.readActivities(activity.workOrderNumber);
                this.props.showSuccess('Follow-up workorders successfully created.');
            })
            .catch(error => {
                this.props.showError('Could not create follow-up workorders.')
            })
            ;
    }

    renderActivities() {
        const { blocking } = this.state;
        return this.state.activities.filter(activity => (activity.checklists && activity.checklists.length > 0)).map(activity =>
            (
                <BlockUi blocking={blocking}>
                    <ExpansionPanel key={activity.activityCode} defaultExpanded>
                        <ExpansionPanelSummary expandIcon={
                            <ExpandMoreIcon/>}>
                            <div style={{padding: 2,
                                flexGrow: "1",
                                display: "flex",
                                alignItems: "center"
                            }}>
                                {activity.activityCode} - {activity.taskDesc}
                                <Button onClick={ evt => this.createFollowUpWOs(evt, activity) } color="primary" style={{marginLeft: 'auto', paddingRight: '40px'}}>Create Follow-up WO</Button>
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{marginTop: -18}}>
                            <div style={{width: "100%"}}>{this.renderChecklistsForActivity(activity)}</div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </BlockUi>
            )
        )
    }

    /**s
     * Render the main checklists panel (only when there is at least one activity with checklist)
     *
     * @returns {*}
     */
    render() {
        const divStyle = {width: "100%"};
        if (this.props.readonly) {
            divStyle.pointerEvents = 'none';
        }
        if (this.state.activities.filter(activity => (activity.checklists && activity.checklists.length > 0)).length === 0) {
            return <div/>
        } else {
            return (
                <EISPanel heading={this.props.title}
                          detailsStyle={this.expansionDetailsStyle}
                          link={this.props.printingChecklistLinkToAIS ? (this.props.printingChecklistLinkToAIS + this.props.workorder) : undefined}
                          linkIcon="fa fa-print">
                    <div style={divStyle}>
                        {this.renderActivities()}
                    </div>
                </EISPanel>
            )
        }
    }
}

Checklists.defaultProps = {
    title: 'CHECKLISTS',
    getWorkOrderActivities: WSChecklists.getWorkOrderActivities,
    updateChecklistItem: WSChecklists.updateChecklistItem,
    readonly: false,
    minFindingsDropdown: 3
};