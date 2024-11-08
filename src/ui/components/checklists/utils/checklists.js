export const parseToBoolean = (value, defaultValue) => {
  return value.length === 0 ? defaultValue : value !== "false";
};

export const getExpandedActivities = (activities) => {
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
