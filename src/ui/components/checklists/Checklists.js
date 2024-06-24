import React, { Component } from 'react';
import Button from '@mui/material/Button';
import MuiExpansionPanel from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import WSChecklists from '../../../tools/WSChecklists';
import ChecklistEquipment from "./ChecklistEquipment";
import ChecklistItem from './ChecklistItem';
import ChecklistSignature from './ChecklistSignature';
import BlockUi from 'react-block-ui';
import EAMSelect from '../inputs-ng/EAMSelect'
import SimpleEmptyState from '../../components/emptystates/SimpleEmptyState';
import withStyles from '@mui/styles/withStyles';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Collapse from '@mui/material/Collapse';
import GridTools from '../grids/GridTools'
import DocumentsInstructionsDialog from './dialogs/DocumentsInstructionsDialog';
import { isCernMode } from '../../../tools/CERNMode';

const SIGNATURE_TYPES = {
    PERFORMER_1: 'PB01',
    PERFORMER_2: 'PB02',
    REVIEWER: 'RB01'
};

const SIGNATURE_ORDER = {
    [SIGNATURE_TYPES.PERFORMER_1]: 1,
    [SIGNATURE_TYPES.PERFORMER_2]: 2,
    [SIGNATURE_TYPES.REVIEWER]: 3,
};

const ActivityExpansionPanel = withStyles({
    root: {
        backgroundColor: '#fafafa',
        marginTop: '10px',
        outline: '1px solid #e0e0e0',
        borderRadius: '5px',
        boxShadow: 'none',
        '&:last-child:not(:only-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const EquipmentExpansionPanel = withStyles({
    root: {
        boxShadow: 'none',
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

function getExpandedActivities(activities) {
    const makeEquipmentsFromActivity = activity =>
        activity.checklists.reduce((equipments, checklist) => {
            if(equipments[checklist.equipmentCode] === undefined) {
                equipments[checklist.equipmentCode] = {
                    code: checklist.equipmentCode,
                    desc: checklist.equipmentDesc,
                    collapse: function() { this.collapsed = true },
                    collapsed: false
                }
            }
            return equipments;
        }, {});

    return activities.map((activity, index) => ({
        ...activity,
        index,
        equipments: makeEquipmentsFromActivity(activity),
        collapse: function() { this.collapsed = true },
        collapsed: false,
    }));
}

// External updates on the activities will not be reflected in this component
// For instance, if the description of an activity is changed 
// in "Activities and Booked Labor", it will not be reflected here
class Checklists extends Component {
    constructor(props) {
        super(props);

        let activityCode = GridTools.getURLParameterByName('activityCode');
        this.state = {
            activities: [],
            taskPlanMetadata: [],
            blocking: true,
            createFollowUpActivity: null,
            activityCode,
            filteredActivity: activityCode,
            filteredEquipment: null,
            signaturesCollapsed: {},
            checklistsHidden: {},
            showChecklistOptions: this.parseToBoolean(GridTools.getURLParameterByName("showChecklistOptions"), false),
            showFilledItems: this.parseToBoolean(GridTools.getURLParameterByName("showFilledItems"), true),
            expandChecklists: this.parseToBoolean(GridTools.getURLParameterByName("expandChecklists"), false),
            expandActivities: this.parseToBoolean(GridTools.getURLParameterByName("expandActivities"), false)
        }
    }

    collapse = (checklists, activities) => {
        const { maxExpandedChecklistItems } = this.props;
        const defaultCollapse = (checklists, activities) => {
            // if there are less than this.props.maxExpandedChecklistItems checklists, do not collapse anything
            if(checklists.length < maxExpandedChecklistItems) return;
            
            // otherwise, collapse every activity and every equipment within each activity
            activities.forEach(activity => {
                if(!activity.forceActivityExpansion) {
                    activity.collapse();
                    Object.values(activity.equipments).forEach(equipment => equipment.collapse());
                }
            });
        };

        const functionToRun = typeof this.props.collapseHeuristic === "function" ? this.props.collapseHeuristic : defaultCollapse;
        const filteredChecklists = checklists.filter(({checkListCode}) => !this.state.checklistsHidden[checkListCode]);
        functionToRun(filteredChecklists, activities);
    }

    expansionDetailsStyle = {
        marginRight: -24,
        marginLeft: -24,
        marginTop: -8,
        marginBottom: -24
    }

    componentWillMount() {
        this.readActivities(this.props.workorder);
    }

    parseToBoolean(value, defaultValue) {
        return value.length === 0 ? defaultValue : value !== "false";
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.workorder !== nextProps.workorder) {
            this.readActivities(nextProps.workorder)
        }
    }

    readActivities(workorder) {
        const { getWorkOrderActivities, getTaskPlanInstructions, activity } = this.props;

        getWorkOrderActivities(workorder)
            .then(response => {
                const activities = getExpandedActivities(response.body.data);
                const checklists = activities.reduce((checklists, activity) => checklists.concat(activity.checklists), []);
                const taskCodes = [...new Set(activities.map(activity => ({
                    code: activity.taskCode,
                    revision: activity.taskRev
                })))]
                isCernMode && Promise.all(taskCodes.map(async (taskCode) => await getTaskPlanInstructions(taskCode.code, taskCode.revision)))
                .then(responses => {
                    const taskPlansMetadata = responses.reduce((acc, response) => {
                        let data = response.body.data;
                        acc[data.taskPlanCode] = data;
                        return acc;
                    }, {});
                    this.setState({ taskPlansMetadata });
                })

                this.collapse(checklists, activities);

                this.setState(prevState => {
                    const newState = {
                        activities,
                        blocking: false
                    };
                    if (!prevState.showFilledItems) {
                        this.toggleFilledFilter();
                    }

                    if (activity) {
                        this.setNewFilter({ activity: {code: activity} });
                    }
                    return newState;
                })
            })
    }

    setCollapsedEquipment(collapsed, activityIndex, equipmentCode) {
        this.setState((state, props) => {
            const activities = [...state.activities];
            const activity = {...activities[activityIndex]};
            const equipments = {...activity.equipments};
            const equipment = {
                ...equipments[equipmentCode],
                collapsed
            };
            equipments[equipmentCode] = equipment;
            activity.equipments = equipments;
            activities[activityIndex] = activity;
            return {activities};
        });
    }

    resetSignatures = activityCode => {
        const types = ["PB01", "PB02", "RB01"];
        types.forEach(type => this.setSignature(activityCode, type, null, null));
    }
    
    setSignature = (activityCode, type, signer, time) => {
        this.setState(state => {
            const activities = [...state.activities];
            const activityIndex = activities.findIndex(activity => activityCode === activity.activityCode);
            const activity = {...activities[activityIndex]};
            activities[activityIndex] = activity;
            if(activity.signatures && activity.signatures[type]){
                activity.signatures = {...activity.signatures};
                activity.signatures[type] = {
                    ...activity.signatures[type],
                    signer,
                    time
                };
            }
            return {activities}
        })
    }

    onUpdateChecklistItem = checklistItem => {
        const activityCode = checklistItem.activityCode;
        const checkListCode = checklistItem.checkListCode;

        this.setState(state => {
            const activities = [...state.activities];
            const activityIndex = activities.findIndex(activity => activity.activityCode === activityCode);
            const activity = {...activities[activityIndex]};
            activities[activityIndex] = activity;

            const checklists = [...activity.checklists];
            const checklistIndex = checklists.findIndex(checklistItem => checklistItem.checkListCode === checkListCode);
            checklists[checklistIndex] = {...checklistItem};
            activity.checklists = checklists;

            return {activities};
        });
    }

    renderChecklistsForEquipment(key, checklists, activity, isDisabled = false) {
        const {
            updateChecklistItem,
            minFindingsDropdown,
            handleError,
            getWoLink,
            showError,
            eqpToOtherId
        } = this.props;

        const { showChecklistOptions } = this.state;

        const firstChecklist = checklists[0];
        const equipmentCode = firstChecklist.equipmentCode;
        const collapsed = activity.equipments[equipmentCode].collapsed;

        if(firstChecklist === undefined) {
            console.error("renderChecklistsForEquipment MUST be passed at least 1 checklist");
            return null;
        }

        const equipmentChecklistDesc =
            `${equipmentCode} — ${firstChecklist.equipmentDesc}` +
            (eqpToOtherId?.[equipmentCode] ? ` — ${eqpToOtherId[equipmentCode]}` : '')

        return <EquipmentExpansionPanel
        style={{width: "100%", outline: "1px solid #e0e0e0", borderRadius: "5px"}}
                key={key}
                expanded={!collapsed}
                TransitionProps={{ unmountOnExit: true, timeout: 0 }}
                onChange={(_, expanded) => this.setCollapsedEquipment(!expanded, activity.index, equipmentCode)}>
            <AccordionSummary style={{outline: "1px solid #e0e0e0", borderRadius: "5px", marginTop: "5px"}} expandIcon={<ExpandMoreIcon/>}>
                <ChecklistEquipment 
                    key={firstChecklist.checkListCode + "_equipment"}
                    description={equipmentChecklistDesc}/>
            </AccordionSummary>
            <AccordionDetails style={{padding: "0"}}>
                <div style={{width: "100%"}}>
                    {checklists.map((checklist, index) => <ChecklistItem 
                        key={'checklistItem$' + checklist.checkListCode}
                        updateChecklistItem={updateChecklistItem}
                        onUpdateChecklistItem={this.onUpdateChecklistItem}
                        checklistItem={checklist}
                        taskCode={activity.taskCode}
                        handleError={handleError}
                        showError={showError}
                        minFindingsDropdown={minFindingsDropdown}
                        getWoLink={getWoLink}
                        resetSignatures={this.resetSignatures}
                        disabled={isDisabled}
                        isLastItem={index === checklists.length - 1}
                        hideFollowUpProp={this.props.hideFollowUpProp}
                        showChecklistOptions={showChecklistOptions}
                        register={this.props.register}
                    />)}
                </div>
            </AccordionDetails>
        </EquipmentExpansionPanel>;
    }

    renderChecklistsForActivity(activity, filteredEquipment) {
        const { checklistsHidden } = this.state;

        const { checklists: originalChecklists, signatures } = activity;
        const isDisabled = this.props.disabled || (signatures && 
            ((signatures[SIGNATURE_TYPES.PERFORMER_1] && !signatures[SIGNATURE_TYPES.PERFORMER_1].viewAsPerformer)
            && (signatures[SIGNATURE_TYPES.PERFORMER_2] && !signatures[SIGNATURE_TYPES.PERFORMER_2].viewAsPerformer)));

        const checklists = originalChecklists
            .filter(checklist => !filteredEquipment || checklist.equipmentCode === filteredEquipment)
            .filter(({checkListCode}) => !checklistsHidden[checkListCode]);

        if (checklists.length === 0) {
            return <p style={{textAlign: 'center'}}>All checklists in this activity are hidden.</p>;
        }
        
        const result = [];

        // this stores the index of the checklists that are related to a different equipment than the one before them
        // this includes the first checklist item since it has no equipment before it
        const equipmentBoundaries = [];

        let equipmentCode;
        checklists.forEach((checklist, i) => {
            if (equipmentCode === checklist.equipmentCode) return;

            equipmentCode = checklist.equipmentCode;
            equipmentBoundaries.push(i);
        });

        // include the index after the last checklist as a boundary
        // this makes the next section of the code much simpler, since we can loop over pairs of boundaries
        equipmentBoundaries.push(checklists.length);

        // now that we have the equipment boundaries, we can make arrays of checklists
        // for each equipment in the activity, and render a collapsible menu
        for(let i = 1; i < equipmentBoundaries.length; ++i) {
            const start = equipmentBoundaries[i-1];
            const end = equipmentBoundaries[i];
            const equipmentCode = checklists[start].equipmentCode;
            
            result.push(this.renderChecklistsForEquipment(equipmentCode + start, checklists.slice(start, end), activity, isDisabled));
        }
        

        return result;
    }

    createFollowUpWOs = checklistActivity => {
        this.hideCreateFollowUpWODialog();
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

    showCreateFollowUpWODialog = activity => {
        this.setState({createFollowUpActivity: activity});
    }

    hideCreateFollowUpWODialog = () => {
        this.setState({createFollowUpActivity: null});
    }

    setCollapsedActivity(collapsed, index) {
        this.setState((state, props) => {
            const activities = [...state.activities];
            const activity = {...activities[index]};
            activity.collapsed = collapsed;
            activities[index] = activity;
            return {activities};
        }, () => {
            const activity = this.state.activities[index];
            const equipmentKeys = Object.keys(activity.equipments);
            if (equipmentKeys.length === 1) {
                // also do the same to the equipment if there's only a single one
                this.setCollapsedEquipment(collapsed, activity.index, equipmentKeys[0])
            }
        });
    }

    expandSignature = (activity, expanded) => {
        const signaturesCollapsed = {...this.state.signaturesCollapsed};
        signaturesCollapsed[activity.activityCode] = !expanded;
        this.setState({signaturesCollapsed});
    }

    shouldRenderSignature = (signatures, signature) => {
        if (!signature) return false;
        if (signature.signer) return true;
        switch (signature.type) {
            case SIGNATURE_TYPES.PERFORMER_1:
                return signature.viewAsPerformer || signature.viewAsReviewer;
            case SIGNATURE_TYPES.PERFORMER_2:
                if (!signatures[SIGNATURE_TYPES.PERFORMER_1]
                    || signatures[SIGNATURE_TYPES.PERFORMER_1].responsibilityCode !== signature.responsibilityCode)
                    return signature.viewAsPerformer || signature.viewAsReviewer;
                else return signatures[SIGNATURE_TYPES.PERFORMER_1].signer;
            case SIGNATURE_TYPES.REVIEWER:
                return signature.viewAsReviewer;
        }
        return true;
    }

    renderSignatures(activity){
        if(!activity.signatures) return;
        return Object.values(activity.signatures)
        .sort((signature1, signature2) => SIGNATURE_ORDER[signature1.type] - SIGNATURE_ORDER[signature2.type])
        .filter(signature => this.shouldRenderSignature(activity.signatures, signature))
        .map(signature => 
                <ChecklistSignature signature={signature}
                                workOrderCode={activity.workOrderNumber}
                                activityCode={activity.activityCode}
                                showError={this.props.showError}
                                setSignature = {this.setSignature}
                                disabled={this.props.disabled}/>
        );
    }

    renderActivities(filteredActivity, filteredEquipment) {
        const { activities, taskPlansMetadata } = this.state;

        return activities.filter(activity => (
                activity.checklists && activity.checklists.length > 0
                    && !(filteredEquipment && activity.equipments[filteredEquipment] === undefined)
                    && !(filteredActivity && activity.activityCode !== filteredActivity)
            )).map(activity => {
                const renderedSignatures = this.renderSignatures(activity)
                return <ActivityExpansionPanel
                    key={activity.activityCode}
                    expanded={!activity.collapsed}
                    TransitionProps={{ unmountOnExit: true, timeout: 0 }}
                    onChange={(_, expanded) => this.setCollapsedActivity(!expanded, activity.index)}
                    style={{marginTop: '10px'}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <div style={{ padding: 0, flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <span style={{ fontWeight: 'bold', flexBasis: "66%", fontSize: 14, color: '#333' }}>{activity.activityCode} — {activity.activityNote || activity.tradeCode}</span>
                        {!this.props.hideFollowUpProp && activity.checklists.some(checklist => !checklist.hideFollowUp) && (
                            <div style={{flexShrink: 0, flexDirection: 'row', display: 'flex', cursor: 'default'}} onClick={(e) => e.stopPropagation()}>
                                {isCernMode && <DocumentsInstructionsDialog 
                                    title={activity.taskCode}
                                    subtitle={activity.activityNote || activity.tradeCode}
                                    taskPlanMetadata={taskPlansMetadata?.[activity.taskCode]}
                                />}
                                <Button
                                    key={`${activity.activityCode}$createfuwo`}
                                    onClick={evt => {
                                        evt.stopPropagation();
                                        this.showCreateFollowUpWODialog(activity);
                                    }}
                                    color="primary"
                                    variant="outlined"
                                    size="small"
                                    style={{ fontSize: '10px', marginRight: '8px'}}
                                    disabled={this.props.disabled || activity.checklists.every(
                                        checklist => typeof checklist.followUpWorkOrder === 'string' || checklist.followUp === false
                                    )}
                                >
                                    <AddIcon style={{marginLeft: '-8px'}}></AddIcon>
                                    Follow-up WO
                                </Button>
                            </div>
                        )}
                    </div>
                    </AccordionSummary>                
                    <AccordionDetails style={{marginTop: "-5px", padding: 2}}>
                        <div style={{width: "100%"}}>{this.renderChecklistsForActivity(activity, filteredEquipment)}
                        </div>
                    </AccordionDetails>
                    {activity.signatures && renderedSignatures.length ? (
                        <ActivityExpansionPanel style={{outline: '0px', marginTop: '0px'}}
                                                expanded={!this.state.signaturesCollapsed[activity.activityCode]}
                                                onChange={(_, expanded) => this.expandSignature(activity, expanded)}>
                            <AccordionSummary style={{paddingLeft: '10px', minHeight: '20px'}} sx={{'& .MuiAccordionSummary-content': {justifyContent: 'center', marginTop: '16px', marginBottom: '16px'}}} expandIcon={<ExpandMoreIcon/>}>
                                <span style={{fontWeight: 500}}>E-SIGNATURES</span>
                            </AccordionSummary>
                            <AccordionDetails style={{margin: 0, padding: 0, minHeight: '50px'}}>
                                <div style={{width: "100%"}}>
                                    {renderedSignatures}
                                </div>
                            </AccordionDetails>               
                        </ActivityExpansionPanel>
                    ) : null}
                </ActivityExpansionPanel>
            });
    }

    setNewFilter(filters) {
        const {activity, equipmentCode} = filters;
        const activityCode = activity?.code;
        
        this.setState((state, props) => {
            // the activity and equipment codes that will be effectively used for the filtering
            // if any parameterized filter is unspecified (undefined), the value used is in state
            const effectiveActivityCode = activityCode === undefined ? state.filteredActivity : activityCode;
            const effectiveEquipmentCode = equipmentCode === undefined ? state.filteredEquipment : equipmentCode;

            let activityCollapsedPredicate = (activity, effectiveActivityCode) => {};
            let equipmentCollapsedPredicate = (equipmentCode, effectiveEquipmentCode) => {};

            if(effectiveActivityCode || effectiveEquipmentCode) {
                // if we're filtering, collapse everything that is not equal to our filters
                activityCollapsedPredicate = (activity) => 
                    (activity.activityCode !== effectiveActivityCode)
                    && Object.keys(activity.equipments)
                        .every(equipmentCode2 => equipmentCode2 !== effectiveEquipmentCode);
                
                equipmentCollapsedPredicate = (equipmentCode) => effectiveEquipmentCode
                    && equipmentCode !== effectiveEquipmentCode;
            } else {
                // if nothing is being filter, uncollapse everything,
                // to prepare for calling the collapse heuristic
                activityCollapsedPredicate = () => false;
                equipmentCollapsedPredicate = () => false;
            }

            const newState = {
                activities: state.activities.map(activity => ({
                    ...activity,
                    collapsed: activityCollapsedPredicate(activity),
                    equipments: Object.keys(activity.equipments).reduce((equipments, thisEquipmentCode) => {
                        equipments[thisEquipmentCode] = {
                            ...activity.equipments[thisEquipmentCode],
                            collapsed: equipmentCollapsedPredicate(thisEquipmentCode)
                        };
                        return equipments;
                    }, {})})
                ),
                filteredActivity: effectiveActivityCode,
                filteredEquipment: effectiveEquipmentCode
            };

            if(!effectiveActivityCode && !effectiveEquipmentCode) {
                const checklists = newState.activities.reduce((checklists, activity) => checklists.concat(activity.checklists), []);
                this.collapse(checklists, newState.activities);
            }

            return newState;
        });
    }

    toggleFilledFilter = () => {
        this.setState(prevState => ({
            checklistsHidden: Object.keys(prevState.checklistsHidden).length > 0 ? {} : Object.fromEntries(prevState.activities
                .map(activity => activity.checklists)
                .flat(1)
                .map(({checkListCode, result, finding, numericValue, freeText, date, dateTime, entityCode}) => [checkListCode, result || finding || numericValue || date || dateTime || entityCode || freeText]))
        }), () => Object.keys(this.state.checklistsHidden).length === 0 && this.setNewFilter({
            activity: {code: this.state.filteredActivity},
            equipment: {code: this.state.filteredEquipment}
        }));
    }

    toggleShowChecklistOptions = () => {
        this.setState((prevState) => ({
            showChecklistOptions: !prevState.showChecklistOptions
        }));
    }

    toggleExpandActivities = () => {
        this.setState((prevState) => ({
            expandActivities: !prevState.expandActivities,
            activities: prevState.activities.map(activity => ({
                ...activity,
                collapsed: prevState.expandActivities
            }))
        }));
    }

    toggleExpandChecklists = () => {
        this.setState((prevState) => ({
            expandChecklists: !prevState.expandChecklists,
            activities: prevState.activities.map(activity => ({
                ...activity,
                equipments: Object.fromEntries(Object.entries(activity.equipments).map(([equipmentCode, equipment]) => {
                    return [equipmentCode, { ...equipment, collapsed: prevState.expandChecklists }];
                }))
            }))
        }));
    }

    toggleOptions = () => {
        this.setState((prevState) => ({
            showChecklistsOptions: !prevState.showChecklistsOptions
        }));
    }

    /**s
     * Render the main checklists panel (only when there is at least one activity with checklist)
     *
     * @returns {*}
     */
    render() {
        const { activities, activityCode, filteredActivity, filteredEquipment, blocking } = this.state;

        // makes a global equipments array, with all the different equipments from all activities
        const equipments = activities.reduce((prev, activity) => {
            Object.keys(activity.equipments).forEach(key => prev[key] = activity.equipments[key]);
            return prev;
        }, {});

        const filteredActivities =
            activities.filter(activity => (activity.checklists && activity.checklists.length > 0));

        const filteredActivityObject = activities.find(activity => activity.activityCode === filteredActivity);

        const divStyle = {width: "100%"};
        if (this.props.readonly) {
            divStyle.pointerEvents = 'none';
        }

        const isEmptyState = filteredActivities.length === 0;

        const activity = this.state.createFollowUpActivity;
        const dialog = activity &&
            <Paper elevation={3} style={{
                padding: '30px',
                textAlign: 'center',
            }}>
                <div style={{fontSize:'25px', marginBottom: '15px'}}>Create follow-up work orders?</div>
                <p>Activity {activity.activityCode} — {activity.activityNote}</p>
                <div> 
                    {<Button type= 'submit' onClick={this.hideCreateFollowUpWODialog}>
                        Cancel
                    </Button>}
                    {<Button onClick={() => this.createFollowUpWOs(this.state.createFollowUpActivity)} color='primary'> 
                        Confirm
                    </Button>}
                </div>
            </Paper>;

        return (
                !blocking && isEmptyState 
                    ? <SimpleEmptyState message="No Checklists to show."/>
                    : (
                        <div style={divStyle}>
                            <BlockUi blocking={blocking}>
                                <div style={{ display:'flex', gap: '20px', justifyContent: 'flex-end'}}>
                                    <Collapse  in={this.props.expandChecklistsOptions}>
                                        <div style={{display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap', paddingRight: 8}}>
                                            {!blocking && <FormControlLabel
                                                control={<Checkbox
                                                    color="primary"
                                                    checked={this.state.expandActivities}
                                                    />}
                                                label={'Expand Activities'}
                                                labelPlacement="start"
                                                onMouseDown={this.toggleExpandActivities}
                                                onTouchStart={this.toggleExpandActivities}
                                            />}
                                            {!blocking && <FormControlLabel
                                                control={<Checkbox
                                                    color="primary"
                                                    checked={this.state.expandChecklists}
                                                    />}
                                                label={'Expand Checklists'}
                                                labelPlacement="start"
                                                onMouseDown={this.toggleExpandChecklists}
                                                onTouchStart={this.toggleExpandChecklists}
                                            />}
                                            {!blocking && <FormControlLabel
                                                control={<Checkbox
                                                    color="primary"
                                                    checked={this.state.showChecklistOptions}
                                                    />}
                                                label={'Show Checklist Options'}
                                                labelPlacement="start"
                                                onMouseDown={this.toggleShowChecklistOptions}
                                                onTouchStart={this.toggleShowChecklistOptions}
                                            />}
                                            {!blocking && <FormControlLabel
                                                control={<Checkbox
                                                    color="primary"
                                                    checked={Object.keys(this.state.checklistsHidden).length == 0}
                                                    />}
                                                label={'Show filled items'}
                                                labelPlacement="start"
                                                onMouseDown={this.toggleFilledFilter}
                                                onTouchStart={this.toggleFilledFilter}
                                            />}
                                        </div>
                                    </Collapse>
                                </div>
                                {!activityCode && <div style={{alignItems: 'center', paddingLeft: '16px'}}>
                                    {activities.length > 1 && <EAMSelect
                                        selectOnlyMode
                                        label={"Activity"}
                                        renderSuggestion={suggestion => suggestion.desc}
                                        renderValue={value => value.desc || value.code}
                                        options={filteredActivities
                                                .filter(activity => filteredEquipment ? activity.equipments[filteredEquipment] !== undefined : true)
                                                .map(activity => 
                                                ({code: activity.activityCode, desc: activity.activityCode + " — " + activity.activityNote}))}
                                        value={filteredActivity}
                                        onChange={activity => this.setNewFilter({ activity: { code: activity.code } })}
                                        menuContainerStyle={{'zIndex': 999}}/>}
                                    
                                    {Object.keys(equipments).length > 1 && <EAMSelect
                                        selectOnlyMode
                                        label={"Equipment"}
                                        options={Object.keys(equipments)
                                                .filter(key => filteredActivity ? filteredActivityObject.equipments[key] !== undefined : true)
                                                .map(key => equipments[key])
                                                .map(equipment => (
                                                {...equipment, desc: equipment.code + " — " + equipment.desc}))}
                                        value={filteredEquipment ? filteredEquipment : undefined}
                                        onChange={equipment => this.setNewFilter({equipmentCode: equipment.code})}
                                        menuContainerStyle={{'zIndex': 999}}/>}
                                </div>}
                                {this.renderActivities(filteredActivity, filteredEquipment)}
                                {this.props.bottomSlot}
                            </BlockUi>
                            <Dialog open={this.state.createFollowUpActivity !== null}>{dialog}</Dialog> 
                            isCernMode && (
                                <>
                                    <iframe src="https://testedms.cern.ch/ui/SsoLoginServlet" style={{ width: 0, height: 0, display: 'none' }}></iframe>
                                    <iframe src="https:/edms.cern.ch/ui/SsoLoginServlet" style={{ width: 0, height: 0, display: 'none' }}></iframe>
                                </>
                            )
                        </div>
                    )
                
        )
    }
}

Checklists.defaultProps = {
    getWorkOrderActivities: WSChecklists.getWorkOrderActivities,
    updateChecklistItem: WSChecklists.updateChecklistItem,
    getTaskPlanInstructions: WSChecklists.getTaskPlanInstructions,
    readonly: false,
    minFindingsDropdown: 3,
    maxExpandedChecklistItems: 50
};

export default Checklists;
