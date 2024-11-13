import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import SimpleEmptyState from "../../emptystates/SimpleEmptyState";
import BlockUi from "react-block-ui";
import Collapse from "@mui/material/Collapse";
import { isCernMode } from "../../../../tools/CERNMode";
import WSChecklists from "../../../../tools/WSChecklists";

import FollowUpActivityDialog from "./components/FollowUpActivityDialog";
import ChecklistsOptions from "./components/ChecklistsOptions";
import ChecklistsSelectors from "./components/ChecklistsSelectors";
import ChecklistsActivity from "./components/ChecklistsActivity";
import ChecklistsContext from "./contexts/ChecklistsContext";

import {
  concatActivityChecklistsToChecklists,
  filterActivitiesWithChecklists,
  getActivityCodeUrlParam,
  getChecklistsEquipmentDisabled,
  getCollapseFunction,
  getEffectiveActivityCode,
  getEffectiveEquipmentCode,
  getExpandedActivities,
  getFilledFilterChecklistsHidden,
  getFilteredActivities,
  getNewFilteredActivities,
  getShowChecklistOptsUrlParam,
  getShowFilledItemsUrlParam,
  getTaskPlansMetadata,
  getUpdatedChecklistsActivities,
  parseToBoolean,
} from "./utils";
import {
  FOLLOW_UP_WO_ERROR_MESSAGE,
  FOLLOW_UP_WO_SUCCESS_MESSAGE,
} from "./constants/followUpDialog";

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
    getActivityCodeUrlParam()
  );
  const [filteredEquipment, setFilteredEquipment] = useState(null);
  const [checklistsHidden, setChecklistsHidden] = useState({});
  const [showChecklistOptions, setShowChecklistOptions] = useState(
    parseToBoolean(getShowChecklistOptsUrlParam(), false)
  );

  const showFilledItems = useMemo(() => {
    return parseToBoolean(getShowFilledItemsUrlParam(), true);
  }, []);

  const activitiesWithChecklists = useMemo(() => {
    return filterActivitiesWithChecklists(activities);
  }, [activities]);

  const filteredActivities = useMemo(() => {
    return getFilteredActivities(
      activities,
      filteredEquipment,
      filteredActivity
    );
  }, [activities]);

  const setNewFilter = useCallback(
    ({ activity, equipmentCode }) => {
      const effectiveActivityCode = getEffectiveActivityCode(
        filteredActivity,
        activity?.code
      );
      const effectiveEquipmentCode = getEffectiveEquipmentCode(
        filteredEquipment,
        equipmentCode
      );

      const newActivities = getNewFilteredActivities(
        activities,
        effectiveActivityCode,
        effectiveEquipmentCode
      );

      if (!effectiveActivityCode && !effectiveEquipmentCode) {
        const checklists = concatActivityChecklistsToChecklists(activities);
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
      const functionToRun = getCollapseFunction(
        collapseHeuristic,
        maxExpandedChecklistItems
      );
      const filteredChecklists = checklists.filter(
        ({ checkListCode }) => !checklistsHidden[checkListCode]
      );
      functionToRun(filteredChecklists, activities);
    },
    [collapseHeuristic, checklistsHidden, maxExpandedChecklistItems]
  );

  const hideCreateFollowUpWODialog = useCallback(() => {
    setCreateFollowUpActivity(null);
  }, []);

  const toggleFilledFilter = useCallback(() => {
    setChecklistsHidden((prev) =>
      getFilledFilterChecklistsHidden(prev, activities)
    );
  }, [activities]);

  const readActivities = useCallback(
    (workorder, refreshCollapse = true) => {
      getWorkOrderActivities(workorder).then((response) => {
        let expActivities = getExpandedActivities(response.body.data);

        if (isCernMode) {
          const taskPlansMetadata = getTaskPlansMetadata(
            expActivities,
            getTaskPlanInstructions
          );
          setTaskPlansMetadata(taskPlansMetadata);
        }

        if (refreshCollapse) {
          const checklists = expActivities.reduce(
            (checklists, activity) => checklists.concat(activity.checklists),
            []
          );
          collapse(checklists, expActivities);
        } else {
          expActivities = expActivities.map((activity, index) => ({
            ...activities[index],
            checklists: activity.checklists,
          }));
        }

        if (!showFilledItems) toggleFilledFilter();
        if (activity) setNewFilter({ activity: { code: activity } });

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
        showSuccess(FOLLOW_UP_WO_SUCCESS_MESSAGE);
      })
      .catch(() => {
        showError(FOLLOW_UP_WO_ERROR_MESSAGE);
      });
  }, [createFollowUpActivity, readActivities, showError, showSuccess]);

  const onUpdateChecklistItem = useCallback(
    (checklistItem) => {
      if (checklistItem.conditional) {
        readActivities(checklistItem.workOrderCode, false);
      }

      setActivities((prev) =>
        getUpdatedChecklistsActivities(prev, checklistItem)
      );
    },
    [readActivities]
  );

  const handleChecklistsEquipmentDisabled = useCallback(
    ({ signatures }) => getChecklistsEquipmentDisabled(disabled, signatures),
    [disabled]
  );

  useEffect(() => readActivities(workorder), [workorder, version]);

  useEffect(() => {
    if (Object.keys(checklistsHidden).length === 0) {
      setNewFilter({
        activity: { code: filteredActivity },
        equipment: { code: filteredEquipment },
      });
    }
  }, [checklistsHidden, filteredActivity, filteredEquipment]);

  if (!blocking && activitiesWithChecklists.length === 0) {
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
                setChecklistsHidden={setChecklistsHidden}
                setShowChecklistOptions={setShowChecklistOptions}
                toggleFilledFilter={toggleFilledFilter}
              />
            </Collapse>
          </div>
          <ChecklistsSelectors
            filteredActivity={filteredActivity}
            filteredActivities={activitiesWithChecklists}
            setNewFilter={setNewFilter}
          />
          {filteredActivities.map((activity) => (
            <ChecklistsActivity
              key={activity.activityCode}
              activity={activity}
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
