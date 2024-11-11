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
import { isCernMode } from "../../../tools/CERNMode";
import WSChecklists from "../../../tools/WSChecklists";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import FollowUpActivityDialog from "./dialogs/FollowUpActivityDialog";
import ChecklistsOptions from "./ChecklistsOptions";
import ChecklistsSelectors from "./ChecklistsSelectors";
import ChecklistsSignature from "./ChecklistsSignature";
import ChecklistsActivityExpansionPanel from "./ChecklistsActivityExpansionPanel";
import ChecklistsActivityDetails from "./ChecklistsActivityDetails";
import ChecklistsActivitySummary from "./ChecklistsActivitySummary";

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

  const signatures = useMemo(() => {
    if (!activity?.signatures) return;
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
            else return activity.signatures[SIGNATURE_TYPES.PERFORMER_1].signer;
          case SIGNATURE_TYPES.REVIEWER:
            return signature.viewAsReviewer;
        }
        return true;
      });
  }, [activity?.signatures]);

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

  const resetSignatures = useCallback(
    (activityCode) => {
      const types = ["PB01", "PB02", "RB01"];
      types.forEach((type) => setSignature(activityCode, type, null, null));
    },
    [setSignature]
  );

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

  const handleChecklistsEquipmentDisabled = useCallback(
    ({ signatures }) => {
      return (
        disabled ||
        (signatures &&
          signatures[SIGNATURE_TYPES.PERFORMER_1] &&
          !signatures[SIGNATURE_TYPES.PERFORMER_1].viewAsPerformer &&
          signatures[SIGNATURE_TYPES.PERFORMER_2] &&
          !signatures[SIGNATURE_TYPES.PERFORMER_2].viewAsPerformer)
      );
    },
    [disabled]
  );

  const expandSignature = useCallback((activity, expanded) => {
    setSignaturesCollapsed((prev) => {
      const signaturesCollapsed = { ...prev };
      signaturesCollapsed[activity.activityCode] = !expanded;
      return signaturesCollapsed;
    });
  }, []);

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

  if (!blocking && isEmptyState) {
    return <SimpleEmptyState message="No Checklists to show." />;
  }

  return (
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
            <ChecklistsOptions
              blocking={blocking}
              expandActivities={expandActivities}
              expandChecklists={expandChecklists}
              showChecklistOptions={showChecklistOptions}
              checklistsHidden={checklistsHidden}
              toggleExpandActivities={toggleExpandActivities}
              toggleExpandChecklists={toggleExpandChecklists}
              toggleShowChecklistOptions={toggleShowChecklistOptions}
              toggleFilledFilter={toggleFilledFilter}
            />
          </Collapse>
        </div>
        <ChecklistsSelectors
          activityCode={activityCode}
          activities={activities}
          equipments={equipments}
          filteredActivity={filteredActivity}
          filteredEquipment={filteredEquipment}
          filteredActivities={filteredActivities}
          setNewFilter={setNewFilter}
          filteredActivityObject={filteredActivityObject}
        />
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
          .map((activity) => (
            <ChecklistsActivityExpansionPanel
              key={activity.activityCode}
              expanded={!activity.collapsed}
              TransitionProps={{ unmountOnExit: true, timeout: 0 }}
              onChange={(_, expanded) =>
                collapseActivity(!expanded, activity.index)
              }
              style={{ marginTop: "10px" }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ChecklistsActivitySummary
                  activity={activity}
                  setCreateFollowUpActivity={setCreateFollowUpActivity}
                  disabled={disabled}
                  hideFollowUpProp={hideFollowUpProp}
                  isCernMode={isCernMode}
                  taskPlansMetadata={taskPlansMetadata}
                />
              </AccordionSummary>
              <AccordionDetails style={{ marginTop: "-5px", padding: "0px" }}>
                <div style={{ width: "100%" }}>
                  <ChecklistsActivityDetails
                    activity={activity}
                    filteredEquipment={filteredEquipment}
                    eqpToOtherId={eqpToOtherId}
                    onResetSignatures={resetSignatures}
                    onUpdateChecklistItem={onUpdateChecklistItem}
                    updateChecklistItem={updateChecklistItem}
                    handleError={handleError}
                    showError={showError}
                    minFindingsDropdown={minFindingsDropdown}
                    getWoLink={getWoLink}
                    hideFollowUpProp={hideFollowUpProp}
                    showChecklistOptions={showChecklistOptions}
                    register={register}
                    onCollapseEquipment={collapseEquipment}
                    checklistsHidden={checklistsHidden}
                    checklistsEquipmentDisabled={handleChecklistsEquipmentDisabled(
                      activity
                    )}
                  />
                </div>
              </AccordionDetails>
              <ChecklistsSignature
                activity={activity}
                signatures={signatures}
                signaturesCollapsed={signaturesCollapsed}
                expandSignature={expandSignature}
                setSignature={setSignature}
                showError={showError}
                disabled={disabled}
              />
            </ChecklistsActivityExpansionPanel>
          ))}
        {bottomSlot}
      </BlockUi>
      <FollowUpActivityDialog
        createFollowUpActivity={createFollowUpActivity}
        hideCreateFollowUpWODialog={hideCreateFollowUpWODialog}
        createFollowUpWOs={createFollowUpWOs}
      />
      {isCernMode && (
        <iframe
          src={edmsLoginServletLink}
          style={{ width: 0, height: 0, display: "none" }}
        />
      )}
    </div>
  );
};

export default forwardRef(Checklists);
