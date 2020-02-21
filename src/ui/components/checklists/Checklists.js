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
import { showError } from '../../../actions/uiActions'

export default class Checklists extends Component {
    state = {
        activities: [],
        blocking: false
    }

    expansionDetailsStyle = {
        marginRight: -24,
        marginLeft: -24,
        marginTop: -8,
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
        this.props.getWorkOrderActivities(workorder)
            .then(response => {
                this.setState({
                    activities: response.body.data,
                    blocking: false
                })
            })
    }

    renderChecklistsForActivity(checklists) {
        let equipmentCode;
        //If there are more than 1 equipment, at least one is different from the first
        //TODO: const multipleEquipment = checklists.some(chk => chk.equipmentCode !== checklists[0].equipmentCode);
        return checklists.reduce((acc, checklist) => {
            // In a multiequipment scenario, include header for equipment
            if (equipmentCode !== checklist.equipmentCode) {
                equipmentCode = checklist.equipmentCode;
                acc.push( 
                    <ChecklistEquipment 
                            key={checklist.checkListCode + "_equipment"}
                            equipmentCode={checklist.equipmentCode}
                            equipmentDesc={checklist.equipmentDesc}
                    />
                )
            }
            acc.push(
                <ChecklistItem 
                        key={'checklistItem$' + checklist.checkListCode}
                        updateChecklistItem={this.props.updateChecklistItem}
                        checklistItem={checklist}
                        handleError={this.props.handleError}
                        minFindingsDropdown={this.props.minFindingsDropdown}
                        getWoLink={this.props.getWoLink}
                />
            )
            return acc;
        }, []);
    }

    createFollowUpWOs (evt, checklistActivity) {
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

    renderActivities(activities) {
        const { blocking } = this.state;
        return activities.filter(activity => (activity.checklists && activity.checklists.length > 0)).map(activity =>
            (
                <BlockUi key={activity.activityCode} blocking={blocking}>
                    <ExpansionPanel defaultExpanded>
                        <ExpansionPanelSummary expandIcon={
                            <ExpandMoreIcon/>}>
                            <div style={{padding: 2,
                                flexGrow: "1",
                                display: "flex",
                                alignItems: "center"
                            }}>
                                {activity.activityCode} - {activity.activityNote}
                                <Button 
                                    key={activity.activityCode + '$createfuwo'}
                                    onClick={ evt => this.createFollowUpWOs(evt, activity) } 
                                    color="primary" 
                                    style={{marginLeft: 'auto', paddingRight: '40px'}}>
                                    Create Follow-up WO
                                </Button>
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{marginTop: -18}}>
                            <div style={{width: "100%"}}>{this.renderChecklistsForActivity(activity.checklists)}</div>
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
        const { activities } = this.state;
        const divStyle = {width: "100%"};
        if (this.props.readonly) {
            divStyle.pointerEvents = 'none';
        }
        if (activities.filter(activity => (activity.checklists && activity.checklists.length > 0)).length === 0) {
            return <div/>
        } else {
            return (
                <EISPanel heading={this.props.title}
                          detailsStyle={this.expansionDetailsStyle}
                          link={this.props.printingChecklistLinkToAIS ? (this.props.printingChecklistLinkToAIS + this.props.workorder) : undefined}
                          linkIcon="fa fa-print">
                    <div style={divStyle}>
                        {this.renderActivities(activities)}
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