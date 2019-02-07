import React, {Component} from 'react';
import EISPanel from '../panel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ChecklistItem from './ChecklistItem';
import ChecklistEquipment from "./ChecklistEquipment";
import WSChecklists from '../../../tools/WSChecklists';

export default class Checklists extends Component {
    state = {
        activities: []
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
                activities: response.body.data
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
                               setChecklistItem={this.setChecklistItem.bind(this)}
                               checklistItem={checklist}
                               minFindingsDropdown={this.props.minFindingsDropdown}/>
            )
        });

        return checklistItems
    }

    setChecklistItem(checklistItem) {

        this.props.updateChecklistItem(checklistItem)
            .then(response => {
                // nothing to do for the moment
            })
            .catch(error => {
                this.props.handleError(error)
            });

        let activities = this.state.activities.map(activity => {
                if (activity.activityCode === checklistItem.activityCode) {
                    return {
                        ...activity,
                        checklists: activity.checklists.map(checklist => (
                            (checklist.checkListCode === checklistItem.checkListCode) ? checklistItem : checklist)
                        )
                    }
                } else {
                    return activity;
                }
            }
        );

        this.setState({
            activities
        })
    }

    renderActivities() {
        return this.state.activities.filter(activity => (activity.checklists && activity.checklists.length > 0)).map(activity =>
            (
                <ExpansionPanel key={activity.activityCode} defaultExpanded>
                    <ExpansionPanelSummary expandIcon={
                        <ExpandMoreIcon/>}>{activity.activityCode} - {activity.taskDesc}</ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{marginTop: -18}}>
                        <div style={{width: "100%"}}>{this.renderChecklistsForActivity(activity)}</div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
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