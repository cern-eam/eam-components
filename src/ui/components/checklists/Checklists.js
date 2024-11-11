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

import FollowUpActivityDialog from "./dialogs/FollowUpActivityDialog";
import ChecklistsOptions from "./ChecklistsOptions";
import ChecklistsSelectors from "./ChecklistsSelectors";

import { SIGNATURE_TYPES } from "./constants/signatures";
import ChecklistsActivity from "./ChecklistsActivity";
import ChecklistsContext from "./contexts/ChecklistsContext";

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
  const [filteredActivity, setFilteredActivity] = useState(
    GridTools.getURLParameterByName("activityCode")
  );
  const [filteredEquipment, setFilteredEquipment] = useState(null);
  const [checklistsHidden, setChecklistsHidden] = useState({});
  const [showChecklistOptions, setShowChecklistOptions] = useState(
    parseToBoolean(
      GridTools.getURLParameterByName("showChecklistOptions"),
      false
    )
  );

  const showFilledItems = useMemo(
    () =>
      parseToBoolean(GridTools.getURLParameterByName("showFilledItems"), true),
    []
  );

  const activitiesWithChecklists = useMemo(
    () => activities.filter((activity) => activity.checklists?.length),
    [activities]
  );

  const isEmptyState = useMemo(
    () => activitiesWithChecklists.length === 0,
    [activitiesWithChecklists]
  );

  const filteredActivities = useMemo(() => {
    return activities.filter(
      (activity) =>
        activity.checklists &&
        activity.checklists.length > 0 &&
        !(
          filteredEquipment &&
          activity.equipments[filteredEquipment] === undefined
        ) &&
        !(filteredActivity && activity.activityCode !== filteredActivity)
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

  useEffect(() => {
    readActivities(workorder);
  }, [workorder, version]);

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
    <ChecklistsContext.Provider
      value={{
        activities,
        setActivities,
        checklistsHidden,
        taskPlansMetadata,
        filteredEquipment,
        showChecklistOptions,
        showError,
        disabled,
        hideFollowUpProp,
        updateChecklistItem,
        minFindingsDropdown,
        handleError,
        getWoLink,
        eqpToOtherId,
        register,
      }}
    >
      <div
        style={
          readonly
            ? { width: "100%", pointerEvents: "none" }
            : { width: "100%" }
        }
      >
        <BlockUi blocking={blocking}>
          <div
            style={{ display: "flex", gap: "20px", justifyContent: "flex-end" }}
          >
            <Collapse in={expandChecklistsOptions}>
              <ChecklistsOptions
                blocking={blocking}
                showChecklistOptions={showChecklistOptions}
                setChecklistsHidden={setChecklistsHidden}
                setShowChecklistOptions={setShowChecklistOptions}
                toggleFilledFilter={toggleFilledFilter}
              />
            </Collapse>
          </div>
          <ChecklistsSelectors
            activities={activities}
            filteredActivity={filteredActivity}
            filteredEquipment={filteredEquipment}
            filteredActivities={activitiesWithChecklists}
            setNewFilter={setNewFilter}
          />
          {filteredActivities.map((activity) => (
            <ChecklistsActivity
              key={activity.activityCode}
              activity={activity}
              activities={activities}
              setActivities={setActivities}
              setCreateFollowUpActivity={setCreateFollowUpActivity}
              onUpdateChecklistItem={onUpdateChecklistItem}
              checklistsEquipmentDisabled={handleChecklistsEquipmentDisabled(
                activity
              )}
            />
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
    </ChecklistsContext.Provider>
  );
};

export default forwardRef(Checklists);
