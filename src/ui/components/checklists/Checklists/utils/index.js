import GridTools from "../../../../components/grids/GridTools";
import { SIGNATURE_ORDER, SIGNATURE_TYPES } from "../constants/signatures";

export const parseToBoolean = (value, defaultValue) => {
  return value.length === 0 ? defaultValue : value !== "false";
};

const makeEquipmentsFromActivity = (activity) =>
  activity.checklists.reduce((equipments, checklist) => {
    if (equipments[checklist.equipmentCode] === undefined) {
      equipments[checklist.equipmentCode] = {
        code: checklist.equipmentCode,
        desc: checklist.equipmentDesc,
        collapse: function () {
          this.collapsed = true;
        },
        collapsed: false,
      };
    }
    return equipments;
  }, {});

export const getExpandedActivities = (activities) => {
  return activities.map((activity, index) => ({
    ...activity,
    index,
    equipments: makeEquipmentsFromActivity(activity),
    collapse: function () {
      this.collapsed = true;
    },
    collapsed: false,
  }));
};

export const getActivityCodeUrlParam = () =>
  GridTools.getURLParameterByName("activityCode");

export const getShowChecklistOptsUrlParam = () =>
  GridTools.getURLParameterByName("showChecklistOptions");

export const getShowFilledItemsUrlParam = () =>
  GridTools.getURLParameterByName("showFilledItems");

export const filterActivitiesWithChecklists = (activities) =>
  activities.filter((activity) => activity.checklists.length > 0);

export const getFilteredActivities = (
  activities,
  filteredEquipment,
  filteredActivity
) => {
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
};

export const getNewFilteredActivities = (
  activities,
  effectiveActivityCode,
  effectiveEquipmentCode
) => {
  if (effectiveActivityCode || effectiveEquipmentCode) {
    // if we're filtering, collapse everything that is not equal to our filters
    return activities.map((activity) => ({
      ...activity,
      collapsed:
        activity.activityCode !== effectiveActivityCode &&
        Object.keys(activity.equipments).every(
          (equipmentCode2) => equipmentCode2 !== effectiveEquipmentCode
        ),
      equipments: Object.keys(activity.equipments).reduce(
        (equipments, thisEquipmentCode) => {
          equipments[thisEquipmentCode] = {
            ...activity.equipments[thisEquipmentCode],
            collapsed:
              effectiveEquipmentCode &&
              thisEquipmentCode !== effectiveEquipmentCode,
          };
          return equipments;
        },
        {}
      ),
    }));
  }
  // if nothing is being filter, uncollapse everything,
  // to prepare for calling the collapse heuristic
  return activities.map((activity) => ({
    ...activity,
    collapsed: false,
    equipments: Object.keys(activity.equipments).reduce(
      (equipments, thisEquipmentCode) => {
        equipments[thisEquipmentCode] = {
          ...activity.equipments[thisEquipmentCode],
          collapsed: false,
        };
        return equipments;
      },
      {}
    ),
  }));
};

export const getEffectiveActivityCode = (filteredActivity, activityCode) => {
  return activityCode === undefined ? filteredActivity : activityCode;
};

export const getEffectiveEquipmentCode = (filteredEquipment, equipmentCode) => {
  return equipmentCode === undefined ? filteredEquipment : equipmentCode;
};

export const concatActivityChecklistsToChecklists = (activities) => {
  return activities.reduce(
    (checklists, activity) => checklists.concat(activity.checklists),
    []
  );
};

export const getCollapseFunction = (
  collapseHeuristic,
  maxExpandedChecklistItems
) => {
  if (typeof collapseHeuristic === "function") return collapseHeuristic;
  return (checklists, activities) => {
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
};

export const getFilledFilterChecklistsHidden = (
  checklistsHidden,
  activities
) => {
  if (Object.keys(checklistsHidden).length > 0) return {};
  return Object.fromEntries(
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
  );
};

export const getUpdatedChecklistsActivities = (activities, checklistItem) => {
  const activityCode = checklistItem.activityCode;
  const checkListCode = checklistItem.checkListCode;
  const newActivities = [...activities];
  const activityIndex = newActivities.findIndex(
    (activity) => activity.activityCode === activityCode
  );
  const activity = { ...newActivities[activityIndex] };
  newActivities[activityIndex] = activity;

  const checklists = [...activity.checklists];
  const checklistIndex = checklists.findIndex(
    (checklistItem) => checklistItem.checkListCode === checkListCode
  );
  checklists[checklistIndex] = { ...checklistItem };
  activity.checklists = checklists;

  return newActivities;
};

export const getChecklistsEquipmentDisabled = (disabled, signatures) => {
  return (
    disabled ||
    (signatures &&
      signatures[SIGNATURE_TYPES.PERFORMER_1] &&
      !signatures[SIGNATURE_TYPES.PERFORMER_1].viewAsPerformer &&
      signatures[SIGNATURE_TYPES.PERFORMER_2] &&
      !signatures[SIGNATURE_TYPES.PERFORMER_2].viewAsPerformer)
  );
};

export const getTaskPlansMetadata = (
  expActivities,
  getTaskPlanInstructions
) => {
  const taskCodes = [
    ...new Set(
      expActivities.map((activity) => ({
        code: activity.taskCode,
        revision: activity.taskRev,
      }))
    ),
  ];

  Promise.all(
    taskCodes.map(
      async (taskCode) =>
        await getTaskPlanInstructions(taskCode.code, taskCode.revision)
    )
  ).then((responses) => {
    return responses.reduce((acc, response) => {
      let data = response.body.data;
      acc[data.taskPlanCode] = data;
      return acc;
    }, {});
  });
};

export const getSignatures = (signatures) => {
  return Object.values(signatures)
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
            !signatures[SIGNATURE_TYPES.PERFORMER_1] ||
            signatures[SIGNATURE_TYPES.PERFORMER_1].responsibilityCode !==
              signature.responsibilityCode
          )
            return signature.viewAsPerformer || signature.viewAsReviewer;
          else return signatures[SIGNATURE_TYPES.PERFORMER_1].signer;
        case SIGNATURE_TYPES.REVIEWER:
          return signature.viewAsReviewer;
      }
      return true;
    });
};
