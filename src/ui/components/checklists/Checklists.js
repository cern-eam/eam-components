import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import GridTools from "../grids/GridTools";
import { getExpandedActivities, parseToBoolean } from "./utils/checklists";
import SimpleEmptyState from "../emptystates/SimpleEmptyState";
import BlockUi from "react-block-ui";
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import EAMSelect from "../inputs-ng/EAMSelect";
import { isCernMode } from "../../../tools/CERNMode";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import WSChecklists from "../../../tools/WSChecklists";
import withStyles from "@mui/styles/withStyles";
import MuiExpansionPanel from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DocumentsInstructionsDialog from "./dialogs/DocumentsInstructionsDialog";
import AddIcon from "@mui/icons-material/Add";
import AccordionDetails from "@mui/material/AccordionDetails";
import ChecklistSignature from "./ChecklistSignature";
import ChecklistEquipment from "./ChecklistEquipment";
import ChecklistItem from "./ChecklistItem";

const SIGNATURE_TYPES = {
  PERFORMER_1: "PB01",
  PERFORMER_2: "PB02",
  REVIEWER: "RB01",
};

const SIGNATURE_ORDER = {
  [SIGNATURE_TYPES.PERFORMER_1]: 1,
  [SIGNATURE_TYPES.PERFORMER_2]: 2,
  [SIGNATURE_TYPES.REVIEWER]: 3,
};

const ActivityExpansionPanel = withStyles({
  root: {
    backgroundColor: "#fafafa",
    marginTop: "10px",
    outline: "1px solid #e0e0e0",
    borderRadius: "5px",
    boxShadow: "none",
    "&:last-child:not(:only-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const EquipmentExpansionPanel = withStyles({
  root: {
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const Checklists = ({
  workorder,
  version,
  readonly = false,
  expandChecklistsOptions,
  maxExpandedChecklistItems = 50,
  collapseHeuristic,
  bottomSlot,
  edmsLoginServletLink,
  showError,
  showSuccess,
  getWorkOrderActivities = WSChecklists.getWorkOrderActivities,
  getTaskPlanInstructions = WSChecklists.getTaskPlanInstructions,
  activity,
  disabled,
  hideFollowUpProp,
  updateChecklistItem = WSChecklists.updateChecklistItem,
  minFindingsDropdown = 3,
  handleError,
  getWoLink,
  eqpToOtherId,
  register,
}) => {
  const [activities, setActivities] = useState([]);
  const [taskPlansMetadata, setTaskPlansMetadata] = useState([]);
  const [blocking, setBlocking] = useState(true);
  const [createFollowUpActivity, setCreateFollowUpActivity] = useState(null);
  const [collapsedActivity, setCollapsedActivity] = useState(null);
  const [activityCode, setActivityCode] = useState(
    GridTools.getURLParameterByName("activityCode")
  );
  const [filteredActivity, setFilteredActivity] = useState(
    GridTools.getURLParameterByName("activityCode")
  );
  const [filteredEquipment, setFilteredEquipment] = useState(null);
  const [signaturesCollapsed, setSignaturesCollapsed] = useState({});
  const [checklistsHidden, setChecklistsHidden] = useState({});
  const [showChecklistOptions, setShowChecklistOptions] = useState(
    parseToBoolean(
      GridTools.getURLParameterByName("showChecklistOptions"),
      false
    )
  );
  const [showFilledItems, setShowFilledItems] = useState(
    parseToBoolean(GridTools.getURLParameterByName("showFilledItems"), true)
  );
  const [expandChecklists, setExpandChecklists] = useState(
    parseToBoolean(GridTools.getURLParameterByName("expandChecklists"), false)
  );
  const [expandActivities, setExpandActivities] = useState(
    parseToBoolean(GridTools.getURLParameterByName("expandActivities"), false)
  );

  const filteredActivities = useMemo(
    () => activities.filter((activity) => activity.checklists?.length),
    [activities]
  );

  const isEmptyState = useMemo(
    () => filteredActivities.length === 0,
    [filteredActivities]
  );

  const equipments = useMemo(
    () =>
      activities.reduce((prev, activity) => {
        Object.keys(activity.equipments).forEach(
          (key) => (prev[key] = activity.equipments[key])
        );
        return prev;
      }, {}),
    [activities]
  );

  const filteredActivityObject = useMemo(
    () =>
      activities.find((activity) => activity.activityCode === filteredActivity),
    [activities, filteredActivity]
  );

  const toggleExpandActivities = useCallback(() => {
    setExpandActivities((prev) => !prev);
    setActivities((prev) =>
      prev.map((activity) => ({
        ...activity,
        collapsed: expandActivities,
      }))
    );
  }, [expandActivities]);

  const toggleExpandChecklists = useCallback(() => {
    setExpandChecklists((prev) => !prev);
    setActivities((prev) =>
      prev.map((activity) => ({
        ...activity,
        equipments: Object.fromEntries(
          Object.entries(activity.equipments).map(
            ([equipmentCode, equipment]) => {
              return [
                equipmentCode,
                { ...equipment, collapsed: expandChecklists },
              ];
            }
          )
        ),
      }))
    );
  }, [expandChecklists]);

  const toggleShowChecklistOptions = useCallback(() => {
    setShowChecklistOptions((prev) => !prev);
  }, []);

  const toggleFilledFilter = useCallback(() => {
    setChecklistsHidden((prev) =>
      Object.keys(prev).length > 0
        ? {}
        : Object.fromEntries(
            activities
              .map((activity) => activity.checklists)
              .flat(1)
              .map(
                ({
                  checkListCode,
                  result,
                  finding,
                  numericValue,
                  freeText,
                  date,
                  dateTime,
                  entityCode,
                }) => [
                  checkListCode,
                  result ||
                    finding ||
                    numericValue ||
                    date ||
                    dateTime ||
                    entityCode ||
                    freeText,
                ]
              )
          )
    );
  }, [activities]);

  const setNewFilter = useCallback(
    (filters) => {
      const { activity, equipmentCode } = filters;
      const activityCode = activity?.code;
      const effectiveActivityCode =
        activityCode === undefined ? filteredActivity : activityCode;
      const effectiveEquipmentCode =
        equipmentCode === undefined ? filteredEquipment : equipmentCode;

      let activityCollapsedPredicate = (activity, effectiveActivityCode) => {};
      let equipmentCollapsedPredicate = (
        equipmentCode,
        effectiveEquipmentCode
      ) => {};

      if (effectiveActivityCode || effectiveEquipmentCode) {
        // if we're filtering, collapse everything that is not equal to our filters
        activityCollapsedPredicate = (activity) =>
          activity.activityCode !== effectiveActivityCode &&
          Object.keys(activity.equipments).every(
            (equipmentCode2) => equipmentCode2 !== effectiveEquipmentCode
          );

        equipmentCollapsedPredicate = (equipmentCode) =>
          effectiveEquipmentCode && equipmentCode !== effectiveEquipmentCode;
      } else {
        // if nothing is being filter, uncollapse everything,
        // to prepare for calling the collapse heuristic
        activityCollapsedPredicate = () => false;
        equipmentCollapsedPredicate = () => false;
      }

      const newActivities = activities.map((activity) => ({
        ...activity,
        collapsed: activityCollapsedPredicate(activity),
        equipments: Object.keys(activity.equipments).reduce(
          (equipments, thisEquipmentCode) => {
            equipments[thisEquipmentCode] = {
              ...activity.equipments[thisEquipmentCode],
              collapsed: equipmentCollapsedPredicate(thisEquipmentCode),
            };
            return equipments;
          },
          {}
        ),
      }));

      if (!effectiveActivityCode && !effectiveEquipmentCode) {
        const checklists = newActivities.reduce(
          (checklists, activity) => checklists.concat(activity.checklists),
          []
        );
        collapse(checklists, newActivities);
      }

      setActivities(newActivities);
      setFilteredActivity(effectiveActivityCode);
      setFilteredEquipment(effectiveEquipmentCode);
    },
    [activities, filteredActivity, filteredEquipment, collapse]
  );

  const collapse = useCallback(
    (checklists, activities) => {
      const defaultCollapse = (checklists, activities) => {
        // if there are less than maxExpandedChecklistItems checklists, do not collapse anything
        if (checklists.length < maxExpandedChecklistItems) return;

        // otherwise, collapse every activity and every equipment within each activity
        activities.forEach((activity) => {
          if (!activity.forceActivityExpansion) {
            activity.collapse();
            Object.values(activity.equipments).forEach((equipment) =>
              equipment.collapse()
            );
          }
        });
      };

      const functionToRun =
        typeof collapseHeuristic === "function"
          ? collapseHeuristic
          : defaultCollapse;
      const filteredChecklists = checklists.filter(
        ({ checkListCode }) => !checklistsHidden[checkListCode]
      );
      functionToRun(filteredChecklists, activities);
    },
    [collapseHeuristic, checklistsHidden]
  );

  const hideCreateFollowUpWODialog = useCallback(() => {
    setCreateFollowUpActivity(null);
  }, []);

  const readActivities = useCallback(
    (workorder, refreshCollapse = true) => {
      getWorkOrderActivities(workorder).then((response) => {
        let expActivities = getExpandedActivities(response.body.data);
        const checklists = expActivities.reduce(
          (checklists, activity) => checklists.concat(activity.checklists),
          []
        );
        const taskCodes = [
          ...new Set(
            expActivities.map((activity) => ({
              code: activity.taskCode,
              revision: activity.taskRev,
            }))
          ),
        ];
        isCernMode &&
          Promise.all(
            taskCodes.map(
              async (taskCode) =>
                await getTaskPlanInstructions(taskCode.code, taskCode.revision)
            )
          ).then((responses) => {
            const taskPlansMetadata = responses.reduce((acc, response) => {
              let data = response.body.data;
              acc[data.taskPlanCode] = data;
              return acc;
            }, {});
            setTaskPlansMetadata(taskPlansMetadata);
          });

        if (refreshCollapse) {
          collapse(checklists, expActivities);
        } else {
          expActivities = expActivities.map((activity, index) => ({
            ...activities[index],
            checklists: activity.checklists,
          }));
        }

        if (!showFilledItems) {
          toggleFilledFilter();
        }
        if (activity) {
          setNewFilter({ activity: { code: activity } });
        }
        setActivities(expActivities);
        setBlocking(false);
      });
    },
    [
      getWorkOrderActivities,
      getTaskPlanInstructions,
      activity,
      collapse,
      toggleFilledFilter,
      setNewFilter,
      showFilledItems,
      isCernMode,
      activities,
    ]
  );

  const createFollowUpWOs = useCallback(() => {
    hideCreateFollowUpWODialog();
    const activity = {
      workOrderNumber: createFollowUpActivity.workOrderNumber,
      activityCode: createFollowUpActivity.activityCode,
    };
    setBlocking(true);

    WSChecklists.createFolowUpWorkOrders(activity)
      .then(() => {
        readActivities(activity.workOrderNumber);
        showSuccess("Follow-up workorders successfully created.");
      })
      .catch(() => {
        showError("Could not create follow-up workorders.");
      });
  }, [createFollowUpActivity, readActivities, showError, showSuccess]);

  const collapseActivity = useCallback((collapsed, index) => {
    setCollapsedActivity({ index, collapsed });
    setActivities((prev) => {
      const activities = [...prev];
      activities[index].collapsed = collapsed;
      return activities;
    });
  }, []);

  const collapseEquipment = useCallback(
    (collapsed, activityIndex, equipmentCode) => {
      setActivities((prev) => {
        const activities = [...prev];
        const activity = { ...activities[activityIndex] };
        const equipments = { ...activity.equipments };
        const equipment = {
          ...equipments[equipmentCode],
          collapsed,
        };
        equipments[equipmentCode] = equipment;
        activity.equipments = equipments;
        activities[activityIndex] = activity;
        return activities;
      });
    },
    []
  );

  const setSignature = useCallback((activityCode, type, signer, time) => {
    setActivities((prev) => {
      const activities = [...prev];
      const activityIndex = activities.findIndex(
        (activity) => activityCode === activity.activityCode
      );
      const activity = { ...activities[activityIndex] };
      activities[activityIndex] = activity;
      if (activity.signatures && activity.signatures[type]) {
        activity.signatures = { ...activity.signatures };
        activity.signatures[type] = {
          ...activity.signatures[type],
          signer,
          time,
        };
      }
      return activities;
    });
  }, []);

  const expandSignature = useCallback((activity, expanded) => {
    setSignaturesCollapsed((prev) => {
      const signaturesCollapsed = { ...prev };
      signaturesCollapsed[activity.activityCode] = !expanded;
      return signaturesCollapsed;
    });
  }, []);

  const onUpdateChecklistItem = useCallback(
    (checklistItem) => {
      if (checklistItem.conditional) {
        readActivities(checklistItem.workOrderCode, false);
      }
      const activityCode = checklistItem.activityCode;
      const checkListCode = checklistItem.checkListCode;

      setActivities((prev) => {
        const activities = [...prev];
        const activityIndex = activities.findIndex(
          (activity) => activity.activityCode === activityCode
        );
        const activity = { ...activities[activityIndex] };
        activities[activityIndex] = activity;

        const checklists = [...activity.checklists];
        const checklistIndex = checklists.findIndex(
          (checklistItem) => checklistItem.checkListCode === checkListCode
        );
        checklists[checklistIndex] = { ...checklistItem };
        activity.checklists = checklists;

        return activities;
      });
    },
    [readActivities]
  );

  const resetSignatures = useCallback(
    (activityCode) => {
      const types = ["PB01", "PB02", "RB01"];
      types.forEach((type) => setSignature(activityCode, type, null, null));
    },
    [setSignature]
  );

  const renderChecklistsForEquipment = useCallback(
    (key, checklists, activity, isDisabled = false) => {
      const firstChecklist = checklists[0];
      const equipmentCode = firstChecklist.equipmentCode;
      const collapsed = activity.equipments[equipmentCode].collapsed;

      if (firstChecklist === undefined) {
        console.error(
          "renderChecklistsForEquipment MUST be passed at least 1 checklist"
        );
        return null;
      }

      const equipmentChecklistDesc =
        `${equipmentCode} — ${firstChecklist.equipmentDesc}` +
        (eqpToOtherId?.[equipmentCode]
          ? ` — ${eqpToOtherId[equipmentCode]}`
          : "");

      return (
        <EquipmentExpansionPanel
          style={{
            width: "100%",
            outline: "1px solid #e0e0e0",
            borderRadius: "5px",
          }}
          key={key}
          expanded={!collapsed}
          TransitionProps={{ unmountOnExit: true, timeout: 0 }}
          onChange={(_, expanded) =>
            collapseEquipment(!expanded, activity.index, equipmentCode)
          }
        >
          <AccordionSummary
            style={{
              outline: "1px solid #e0e0e0",
              borderRadius: "5px",
              marginTop: "5px",
            }}
            expandIcon={<ExpandMoreIcon />}
          >
            <ChecklistEquipment
              key={firstChecklist.checkListCode + "_equipment"}
              description={equipmentChecklistDesc}
            />
          </AccordionSummary>
          <AccordionDetails style={{ padding: "0" }}>
            <div style={{ width: "100%" }}>
              {checklists.map((checklist, index) => (
                <ChecklistItem
                  key={"checklistItem$" + checklist.checkListCode}
                  updateChecklistItem={updateChecklistItem}
                  onUpdateChecklistItem={onUpdateChecklistItem}
                  checklistItem={checklist}
                  taskCode={activity.taskCode}
                  handleError={handleError}
                  showError={showError}
                  minFindingsDropdown={minFindingsDropdown}
                  getWoLink={getWoLink}
                  resetSignatures={resetSignatures}
                  disabled={isDisabled}
                  isLastItem={index === checklists.length - 1}
                  hideFollowUpProp={hideFollowUpProp}
                  showChecklistOptions={showChecklistOptions}
                  register={register}
                />
              ))}
            </div>
          </AccordionDetails>
        </EquipmentExpansionPanel>
      );
    },
    [
      updateChecklistItem,
      minFindingsDropdown,
      handleError,
      getWoLink,
      showError,
      eqpToOtherId,
      showChecklistOptions,
    ]
  );

  const renderChecklistsForActivity = useCallback(
    (activity, filteredEquipment) => {
      const { checklists: originalChecklists, signatures } = activity;
      const isDisabled =
        disabled ||
        (signatures &&
          signatures[SIGNATURE_TYPES.PERFORMER_1] &&
          !signatures[SIGNATURE_TYPES.PERFORMER_1].viewAsPerformer &&
          signatures[SIGNATURE_TYPES.PERFORMER_2] &&
          !signatures[SIGNATURE_TYPES.PERFORMER_2].viewAsPerformer);

      const checklists = originalChecklists
        .filter(
          (checklist) =>
            !filteredEquipment || checklist.equipmentCode === filteredEquipment
        )
        .filter(({ checkListCode }) => !checklistsHidden[checkListCode]);

      if (checklists.length === 0) {
        return (
          <p style={{ textAlign: "center" }}>
            All checklists in this activity are hidden.
          </p>
        );
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
      for (let i = 1; i < equipmentBoundaries.length; ++i) {
        const start = equipmentBoundaries[i - 1];
        const end = equipmentBoundaries[i];
        const equipmentCode = checklists[start].equipmentCode;

        result.push(
          renderChecklistsForEquipment(
            equipmentCode + start,
            checklists.slice(start, end),
            activity,
            isDisabled
          )
        );
      }

      return result;
    },
    [checklistsHidden, disabled, renderChecklistsForEquipment]
  );

  const renderSignatures = useCallback(
    (activity) => {
      if (!activity.signatures) return;
      return Object.values(activity.signatures)
        .sort(
          (signature1, signature2) =>
            SIGNATURE_ORDER[signature1.type] - SIGNATURE_ORDER[signature2.type]
        )
        .filter((signature) => {
          if (!signature) return false;
          if (signature.signer) return true;
          switch (signature.type) {
            case SIGNATURE_TYPES.PERFORMER_1:
              return signature.viewAsPerformer || signature.viewAsReviewer;
            case SIGNATURE_TYPES.PERFORMER_2:
              if (
                !activity.signatures[SIGNATURE_TYPES.PERFORMER_1] ||
                activity.signatures[SIGNATURE_TYPES.PERFORMER_1]
                  .responsibilityCode !== signature.responsibilityCode
              )
                return signature.viewAsPerformer || signature.viewAsReviewer;
              else
                return activity.signatures[SIGNATURE_TYPES.PERFORMER_1].signer;
            case SIGNATURE_TYPES.REVIEWER:
              return signature.viewAsReviewer;
          }
          return true;
        })
        .map((signature) => (
          <ChecklistSignature
            signature={signature}
            workOrderCode={activity.workOrderNumber}
            activityCode={activity.activityCode}
            showError={showError}
            setSignature={setSignature}
            disabled={disabled}
          />
        ));
    },
    [showError, disabled, setSignature]
  );

  useEffect(() => {
    readActivities(workorder);
  }, [workorder, version]);

  useEffect(() => {
    if (!collapsedActivity) return;
    const { index, collapsed } = collapsedActivity;
    const activity = activities[index];
    const equipmentKeys = Object.keys(activity.equipments);
    if (equipmentKeys.length === 1) {
      // also do the same to the equipment if there's only a single one
      collapseEquipment(collapsed, activity.index, equipmentKeys[0]);
    }
  }, [collapsedActivity?.index, collapsedActivity?.collapsed, activities]);

  useEffect(() => {
    if (Object.keys(checklistsHidden).length === 0) {
      setNewFilter({
        activity: { code: filteredActivity },
        equipment: { code: filteredEquipment },
      });
    }
  }, [checklistsHidden, filteredActivity, filteredEquipment]);

  return !blocking && isEmptyState ? (
    <SimpleEmptyState message="No Checklists to show." />
  ) : (
    <div
      style={
        readonly ? { width: "100%", pointerEvents: "none" } : { width: "100%" }
      }
    >
      <BlockUi blocking={blocking}>
        <div
          style={{ display: "flex", gap: "20px", justifyContent: "flex-end" }}
        >
          <Collapse in={expandChecklistsOptions}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flexWrap: "wrap",
                paddingRight: 8,
              }}
            >
              {!blocking && (
                <FormControlLabel
                  control={
                    <Checkbox color="primary" checked={expandActivities} />
                  }
                  label={"Expand Activities"}
                  labelPlacement="start"
                  onMouseDown={toggleExpandActivities}
                  onTouchStart={toggleExpandActivities}
                />
              )}
              {!blocking && (
                <FormControlLabel
                  control={
                    <Checkbox color="primary" checked={expandChecklists} />
                  }
                  label={"Expand Checklists"}
                  labelPlacement="start"
                  onMouseDown={toggleExpandChecklists}
                  onTouchStart={toggleExpandChecklists}
                />
              )}
              {!blocking && (
                <FormControlLabel
                  control={
                    <Checkbox color="primary" checked={showChecklistOptions} />
                  }
                  label={"Show Checklist Options"}
                  labelPlacement="start"
                  onMouseDown={toggleShowChecklistOptions}
                  onTouchStart={toggleShowChecklistOptions}
                />
              )}
              {!blocking && (
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={Object.keys(checklistsHidden).length == 0}
                    />
                  }
                  label={"Show filled items"}
                  labelPlacement="start"
                  onMouseDown={toggleFilledFilter}
                  onTouchStart={toggleFilledFilter}
                />
              )}
            </div>
          </Collapse>
        </div>
        {!activityCode && (
          <div>
            {activities.length > 1 && (
              <EAMSelect
                selectOnlyMode
                label={"Activity"}
                renderSuggestion={(suggestion) => suggestion.desc}
                renderValue={(value) => value.desc || value.code}
                options={filteredActivities
                  .filter((activity) =>
                    filteredEquipment
                      ? activity.equipments[filteredEquipment] !== undefined
                      : true
                  )
                  .map((activity) => ({
                    code: activity.activityCode,
                    desc: activity.activityCode + " — " + activity.activityNote,
                  }))}
                value={filteredActivity}
                onChange={(activity) =>
                  setNewFilter({ activity: { code: activity.code } })
                }
                menuContainerStyle={{ zIndex: 999 }}
              />
            )}

            {Object.keys(equipments).length > 1 && (
              <EAMSelect
                selectOnlyMode
                label={"Equipment"}
                options={Object.keys(equipments)
                  .filter((key) =>
                    filteredActivity
                      ? filteredActivityObject.equipments[key] !== undefined
                      : true
                  )
                  .map((key) => equipments[key])
                  .map((equipment) => ({
                    ...equipment,
                    desc: equipment.code + " — " + equipment.desc,
                  }))}
                value={filteredEquipment ? filteredEquipment : undefined}
                onChange={(equipment) =>
                  setNewFilter({ equipmentCode: equipment.code })
                }
                menuContainerStyle={{ zIndex: 999 }}
              />
            )}
          </div>
        )}
        {activities
          .filter(
            (activity) =>
              activity.checklists &&
              activity.checklists.length > 0 &&
              !(
                filteredEquipment &&
                activity.equipments[filteredEquipment] === undefined
              ) &&
              !(filteredActivity && activity.activityCode !== filteredActivity)
          )
          .map((activity) => {
            const renderedSignatures = renderSignatures(activity);
            return (
              <ActivityExpansionPanel
                key={activity.activityCode}
                expanded={!activity.collapsed}
                TransitionProps={{ unmountOnExit: true, timeout: 0 }}
                onChange={(_, expanded) =>
                  collapseActivity(!expanded, activity.index)
                }
                style={{ marginTop: "10px" }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div
                    style={{
                      padding: 0,
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        flexBasis: "66%",
                        fontSize: 14,
                        color: "#333",
                      }}
                    >
                      {activity.activityCode} —{" "}
                      {activity.activityNote || activity.tradeCode}
                    </span>
                    {!hideFollowUpProp &&
                      activity.checklists.some(
                        (checklist) => !checklist.hideFollowUp
                      ) && (
                        <div
                          style={{
                            flexShrink: 0,
                            flexDirection: "row",
                            display: "flex",
                            cursor: "default",
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {isCernMode && (
                            <DocumentsInstructionsDialog
                              title={activity.taskCode}
                              subtitle={
                                activity.activityNote || activity.tradeCode
                              }
                              taskPlanMetadata={
                                taskPlansMetadata?.[activity.taskCode]
                              }
                            />
                          )}
                          <Button
                            key={`${activity.activityCode}$createfuwo`}
                            onClick={(evt) => {
                              evt.stopPropagation();
                              setCreateFollowUpActivity(activity);
                            }}
                            color="primary"
                            variant="outlined"
                            size="small"
                            style={{ fontSize: "10px", marginRight: "8px" }}
                            disabled={
                              disabled ||
                              activity.checklists.every(
                                (checklist) =>
                                  typeof checklist.followUpWorkOrder ===
                                    "string" || checklist.followUp === false
                              )
                            }
                          >
                            <AddIcon style={{ marginLeft: "-8px" }}></AddIcon>
                            Follow-up WO
                          </Button>
                        </div>
                      )}
                  </div>
                </AccordionSummary>
                <AccordionDetails style={{ marginTop: "-5px", padding: "0px" }}>
                  <div style={{ width: "100%" }}>
                    {renderChecklistsForActivity(activity, filteredEquipment)}
                  </div>
                </AccordionDetails>
                {activity.signatures && renderedSignatures.length ? (
                  <ActivityExpansionPanel
                    style={{ outline: "0px", marginTop: "0px" }}
                    expanded={!signaturesCollapsed[activity.activityCode]}
                    onChange={(_, expanded) =>
                      expandSignature(activity, expanded)
                    }
                  >
                    <AccordionSummary
                      style={{ paddingLeft: "10px", minHeight: "20px" }}
                      sx={{
                        "& .MuiAccordionSummary-content": {
                          justifyContent: "center",
                          marginTop: "16px",
                          marginBottom: "16px",
                        },
                      }}
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <span style={{ fontWeight: 500 }}>E-SIGNATURES</span>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{ margin: 0, padding: 0, minHeight: "50px" }}
                    >
                      <div style={{ width: "100%" }}>{renderedSignatures}</div>
                    </AccordionDetails>
                  </ActivityExpansionPanel>
                ) : null}
              </ActivityExpansionPanel>
            );
          })}
        {bottomSlot}
      </BlockUi>
      <Dialog open={createFollowUpActivity !== null}>
        {createFollowUpActivity && (
          <Paper
            elevation={3}
            style={{
              padding: "30px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "25px", marginBottom: "15px" }}>
              Create follow-up work orders?
            </div>
            <p>
              Activity {createFollowUpActivity.activityCode} —{" "}
              {createFollowUpActivity.activityNote}
            </p>
            <div>
              {
                <Button type="submit" onClick={hideCreateFollowUpWODialog}>
                  Cancel
                </Button>
              }
              {
                <Button onClick={createFollowUpWOs} color="primary">
                  Confirm
                </Button>
              }
            </div>
          </Paper>
        )}
      </Dialog>
      {isCernMode && (
        <>
          <iframe
            src={edmsLoginServletLink}
            style={{ width: 0, height: 0, display: "none" }}
          />
        </>
      )}
    </div>
  );
};

export default forwardRef(Checklists);
