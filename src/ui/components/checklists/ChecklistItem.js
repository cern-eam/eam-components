import React, {Component} from 'react';
import ChecklistItemInput from './ChecklistItemInput';
import ChecklistItemNotes from './ChecklistItemNotes';
import Collapse from '@mui/material/Collapse';
import ChecklistItemFollowUp from "./ChecklistItemFollowUp";
import ChecklistItemNotApplicableOptions from './ChecklistItemNotApplicableOptions';
import WSChecklists from '../../../tools/WSChecklists';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default class ChecklistItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailsVisible: false,
            blocked: false,
            debounce: null
        }

        this.notes = React.createRef();
    }

    componentWillMount() {
        this.init(this.props.checklistItem);
    }
    
    componentDidMount() {
        const { checklistItem, showChecklistOptions, taskCode } = this.props;
        // Handles expand/collapse of options when the checkbox was ticked before
        // the equipment's checklist had been expanded.
        this.showChecklistOptionsHandler(showChecklistOptions, checklistItem, taskCode);
    }

    componentWillUnmount() {
        const { debounce } = this.state;

        if(debounce !== null) {
            clearTimeout(debounce.timeout);
        }
    }

    componentWillReceiveProps(nextProps) {
        let checklistItemProps = nextProps.checklistItem;
        let checklistItemState = this.props.checklistItem;
        if (checklistItemProps && checklistItemState) {
            if (checklistItemProps.workOrderCode !== checklistItemState.workOrderCode) {
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

        const { showChecklistOptions, taskCode } = nextProps;
        // Expand/collapse options when the equipment's checklists are already expanded
        if (showChecklistOptions !== this.props.showChecklistOptions) {
            this.showChecklistOptionsHandler(showChecklistOptions, checklistItemProps, taskCode);
        }
    }

    init(checklistItem) {
        if (checklistItem) {
            this.setState({
                detailsVisible: !!checklistItem.notes || !!checklistItem.followUpWorkOrder  || checklistItem.followUp === '+'
            })
        }
    }

    getCheckListItemStyle = blocked => ({
        paddingTop: 5,
        paddingBottom: 5,
        pointerEvents: blocked ? 'none' : 'auto',
        flex: '1 1 auto',
    })

    firstLine = {
        display: "flex",
        alignItems: "stretch",
        minHeight: 48,
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    };

    firstLineDesc = {
        float: "left",
        display: "flex",
        marginRight: "5px",
        alignItems: "center",
        pointerEvents: "initial",
        color: "rgba(0, 0, 0, 0.87)"
    };

    /**
     * Compute the style for notes div container
     *
     * @returns {{marginLeft: number, marginTop: number, position: string, display: string}}
     */
    checklistDetailsStyle = {
            margin: 2,
            marginLeft: 11,
            display: "flex",
            alignItems: "center"
    }

    checklistNotApplicableStyle = {
        paddingTop: 5,
        paddingBottom: 5,
        flex: '1 1 auto',
    }


    onChange(checklistItem, onFail) {
        const handleError = this.props.handleError;
        const DEBOUNCE_TIME_MS = 50;

        const request = () => {
            this.props.updateChecklistItem(checklistItem)
                .then(() =>{
                    this.props.resetSignatures(checklistItem.activityCode);
                }).catch(error => {
                    handleError(error);
                    this.props.onUpdateChecklistItem(this.state.debounce.oldChecklistItem);
                    this.setState({debounce: null});
                    onFail && onFail();
                }).finally(() => {
                    this.setState({blocked: false});
                });
        };

        this.setState(state => {
            if(state.debounce !== null) {
                clearTimeout(state.debounce.timeout);
            }

            this.props.onUpdateChecklistItem(checklistItem);

            return {
                blocked: true,
                debounce: {
                    oldChecklistItem: this.props.checklistItem,
                    ...state.debounce,
                    timeout: setTimeout(request, DEBOUNCE_TIME_MS),
                    // Copy the oldest checklist item (will be used to restore the UI)
                }
            }
        });
    }

    fetchChecklistDefinition(checklistItem, taskCode) {
        if (checklistItem && checklistItem.notApplicableOptions === undefined) {
            WSChecklists.getChecklistDefinition(taskCode, checklistItem.checklistDefinitionCode).then(response => {
                this.setState({
                    notApplicableOptions: response.body.data.notApplicableOptions
                });
            }).catch((error) => { this.props.handleError(error); });
        }
    }

    showChecklistOptionsHandler(expandChecklist, checklistItem, taskCode) {
        const notes = this.notes.current.input.current.value;
        const followUp = checklistItem.followUp;
        let detailsVisible;

        // Only collapse empty details
        if (notes || followUp) {
            detailsVisible = true;
        } else {
            detailsVisible = expandChecklist;
        }

        this.setState({ detailsVisible });

        // Don't perform the WS call when collapsing
        if (expandChecklist) {
            this.fetchChecklistDefinition(checklistItem, taskCode);
        }
    }

    descClickHandler() {
        const notes = this.notes.current;

        this.setState((state) => {
            const detailsVisible = !state.detailsVisible;

            if(detailsVisible) {
                setTimeout(() => this.notes.current.focus(), 0);
                // Don't perform the WS call when collapsing
                const { checklistItem, taskCode } = this.props;
                this.fetchChecklistDefinition(checklistItem, taskCode);
            }

            return {detailsVisible}
        });
    }

    renderChecklistItemInput() {
        const { checklistItem, showError, disabled, register } = this.props;

        let fields = [];
        let options = {};

        // use until use of numeric values in result field is deprecated
        const clearResult = (newProps, type, value) => {
            delete newProps.result;
            return newProps;
        };

        const createField = ChecklistItemInput.createField;
        const {CHECKBOX, RADIO, FINDING, NUMERIC, NUMERIC2, ALPHANUMERIC, DATE, DATETIME, ENTITY} = ChecklistItemInput.FIELD;

        switch(checklistItem.type) {
            case "01":
                fields = [
                    createField(CHECKBOX, {code: "COMPLETED", desc:"Completed"})
                ];
                options.style = ChecklistItemInput.STYLE.SAMELINE;
                break;
            case "02":
                fields = [
                    createField(RADIO, {code: "YES", desc: "Yes"}),
                    createField(RADIO, {code: "NO", desc: "No"})
                ];
                options.style = ChecklistItemInput.STYLE.SAMELINE;
                break;
            case "03":
                const MINIMUM_MIN_FINDINGS = 4;
                fields = [
                    createField(FINDING, {
                        dropdown:
                            checklistItem.possibleFindings.length >= Math.min(this.props.minFindingsDropdown, MINIMUM_MIN_FINDINGS)
                    })
                ];
                break;
            case "04":
            case "05":
                fields = [
                    createField(NUMERIC)
                ];
                options.slider = true;
                options.beforeOnChange = clearResult;
                break;
            case "06":
                fields = [
                    createField(FINDING),
                    createField(NUMERIC)
                ];
                options.slider = true;
                options.beforeOnChange = clearResult;
                options.style = ChecklistItemInput.STYLE.SAMELINE;
                break;
            case "07":
                fields = [
                    createField(RADIO, {code: "OK", desc: "OK"}),
                    createField(RADIO, {code: "REPAIRSNEEDED", desc: "Repairs Needed"}),
                    createField(FINDING)
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
                options.label = "Resolution";
                options.beforeOnChange = (newProps, type, value) => {
                    if(type === ChecklistItemInput.FIELD.CHECKBOX) {
                        delete newProps.finding;
                    }
                    return newProps;
                }
                options.style = ChecklistItemInput.STYLE.SAMELINE;
                break;
            case "08":
                fields = [
                    createField(RADIO, {code: "GOOD", desc: "Good"}),
                    createField(RADIO, {code: "POOR", desc: "Poor"})
                ];
                options.style = ChecklistItemInput.STYLE.SAMELINE;
                break;
            case "09":
            case "10":
                fields = [
                    createField(RADIO, {code: "OK", desc: "OK"}),
                    createField(RADIO, {code: "ADJUSTED", desc: "Adjusted"})
                ];

                if(checklistItem.type === "10") {
                    fields.push(createField(NUMERIC))
                }

                options.style = ChecklistItemInput.STYLE.SAMELINE;
                options.slider = true;
                break;
            case "11":
            case "12":
                fields = [
                    createField(RADIO, {code: "OK", desc: "OK"}),
                    createField(RADIO, {code: "NONCONFORMITY", desc: "Nonconformity"}),
                ];

                if(checklistItem.type === "12") {
                    fields.push(createField(ChecklistItemInput.FIELD.NUMERIC))
                    options.beforeOnChange = (newProps, type, value) => {
                        if(type === ChecklistItemInput.FIELD.NUMERIC && newProps.result === null) {
                            newProps.result = "OK";
                        }
                        return newProps;
                    }
                }

                options.style = ChecklistItemInput.STYLE.SAMELINE;
                options.slider = true;
                break;
            case "13":
                fields = [
                    createField(DATE)
                ];
                options.style = ChecklistItemInput.STYLE.SAMELINE;
                break;
            case "14":
                fields = [
                    createField(DATETIME)
                ];
                options.style = ChecklistItemInput.STYLE.SAMELINE;
                break;
            case "15":
                fields = [
                    createField(ALPHANUMERIC)
                ];
                options.style = ChecklistItemInput.STYLE.SINGLE_EXPAND;
                break;
            case "16":
                fields = [
                    createField(ENTITY)
                ];
                options.style = ChecklistItemInput.STYLE.SINGLE_EXPAND;
                break;
            case "17":
                fields = [
                    createField(NUMERIC),
                    createField(NUMERIC2)
                ];
                options.style = ChecklistItemInput.STYLE.SAMELINE;
                options.slider = true;
                break;
        }

        if(fields === undefined) return <div/>

        return <ChecklistItemInput checklistItem={checklistItem}
                                onChange={(value, onFail) => this.onChange(value, onFail)}
                                fields={fields} options={options}
                                showError={showError}
                                disabled={disabled}
                                register={register} />
    }

    colorStyle = color => ({
        backgroundColor: color ? `#${color}` : undefined,
        borderLeft: color ? `#${color}` : undefined,
        width: '3px',
        margin: '8px -2px 8px 2px', 
        borderRadius: '30px',
        flexShrink: 0
    })

    hexToRgb (hex, opacity) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${opacity})`
        : null;
      }

    containerStyle = (blocked, isLastItem, color) => ({
        display: 'flex',
        alignItems: "stretch",
        padding: '1px 8px 1px 0',
        minHeight: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: isLastItem ? 'none' : "dashed 1px #d1d3d4",
        backgroundColor: color ? `${this.hexToRgb(color, 0.14)}` : '#white',
        opacity: blocked ? 0.5 : 1
    })

    render() {
        const { checklistItem, isLastItem, hideFollowUpProp } = this.props;
        const { notApplicableOptions } = this.state;
        return (
            <div style={this.containerStyle(this.state.blocked, isLastItem, checklistItem.color)}>
                <div style={this.colorStyle(checklistItem.color)}></div>
                <div style={this.getCheckListItemStyle(this.state.blocked)}>
                    <div style={this.firstLine} onClick={this.descClickHandler.bind(this)}>
                        <div style={this.firstLineDesc}>
                            {this.state.detailsVisible ? <ExpandLessIcon style={{color: "#b0b0b0"}}/> : <ExpandMoreIcon style={{color: "#b0b0b0"}}/>}
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
                                disabled={this.props.disabled}
                            />
                            {!checklistItem.hideFollowUp && <ChecklistItemFollowUp
                                    checklistItem={checklistItem}
                                    onChange={value => this.onChange(value)}
                                    getWoLink={this.props.getWoLink}
                                    disabled={this.props.disabled}
                            />}
                        </div>
                        {Array.isArray(notApplicableOptions) && notApplicableOptions.length > 0 && <div style={this.checklistNotApplicableStyle} >
                            <ChecklistItemNotApplicableOptions
                                checklistItem={checklistItem}
                                notApplicableOptions={notApplicableOptions}
                                onChange={value => this.onChange(value)}
                                disabled={this.props.disabled}
                            />
                        </div>}
                    </Collapse>
                </div>
            </div>
        )
    }
}