"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ExpansionPanel = _interopRequireDefault(require("@material-ui/core/ExpansionPanel"));

var _ExpansionPanelDetails = _interopRequireDefault(require("@material-ui/core/ExpansionPanelDetails"));

var _ExpansionPanelSummary = _interopRequireDefault(require("@material-ui/core/ExpansionPanelSummary"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _WSChecklists = _interopRequireDefault(require("../../../tools/WSChecklists"));

var _ChecklistEquipment = _interopRequireDefault(require("./ChecklistEquipment"));

var _ChecklistItem = _interopRequireDefault(require("./ChecklistItem"));

var _ChecklistSignature = _interopRequireDefault(require("./ChecklistSignature"));

var _reactBlockUi = _interopRequireDefault(require("react-block-ui"));

var _EAMSelect = _interopRequireDefault(require("../inputs/EAMSelect"));

var _SimpleEmptyState = _interopRequireDefault(require("../../components/emptystates/SimpleEmptyState"));

var _styles = require("@material-ui/core/styles");

var _mdiMaterialUi = require("mdi-material-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ActivityExpansionPanel = (0, _styles.withStyles)({
  root: {
    backgroundColor: '#fafafa',
    border: '1px solid #eeeeee',
    boxShadow: 'none',
    '&:last-child:not(:only-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(_ExpansionPanel["default"]);
var EquipmentExpansionPanel = (0, _styles.withStyles)({
  root: {
    boxShadow: 'none',
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(_ExpansionPanel["default"]);

function getExpandedActivities(activities) {
  var makeEquipmentsFromActivity = function makeEquipmentsFromActivity(activity) {
    return activity.checklists.reduce(function (equipments, checklist) {
      if (equipments[checklist.equipmentCode] === undefined) {
        equipments[checklist.equipmentCode] = {
          code: checklist.equipmentCode,
          desc: checklist.equipmentDesc,
          collapse: function collapse() {
            this.collapsed = true;
          },
          collapsed: false
        };
      }

      return equipments;
    }, {});
  };

  return activities.map(function (activity, index) {
    return _objectSpread({}, activity, {
      index: index,
      equipments: makeEquipmentsFromActivity(activity),
      collapse: function collapse() {
        this.collapsed = true;
      },
      collapsed: false
    });
  });
} // External updates on the activities will not be reflected in this component
// For instance, if the description of an activity is changed 
// in "Activities and Booked Labor", it will not be reflected here


var Checklists = /*#__PURE__*/function (_Component) {
  _inherits(Checklists, _Component);

  var _super = _createSuper(Checklists);

  function Checklists(props) {
    var _this;

    _classCallCheck(this, Checklists);

    _this = _super.call(this, props);
    _this.expansionDetailsStyle = {
      marginRight: -24,
      marginLeft: -24,
      marginTop: -8,
      marginBottom: -24
    };

    _this.resetSignatures = function (activityCode) {
      var types = ["PB01", "PB02", "RB01"];
      types.forEach(function (type) {
        return _this.setSignature(activityCode, type, null, null);
      });
    };

    _this.setSignature = function (activityCode, type, signer, time) {
      _this.setState(function (state) {
        var activities = _toConsumableArray(state.activities);

        var activityIndex = activities.findIndex(function (activity) {
          return activityCode === activity.activityCode;
        });

        var activity = _objectSpread({}, activities[activityIndex]);

        activities[activityIndex] = activity;

        if (activity.signatures) {
          var signatureIndex = activity.signatures.findIndex(function (signature) {
            return signature.type === type;
          });

          if (signatureIndex >= 0) {
            activity.signatures = _toConsumableArray(activity.signatures);
            activity.signatures[signatureIndex] = _objectSpread({}, activity.signatures[signatureIndex]);
            var signatureCopy = activity.signatures[signatureIndex];
            signatureCopy.signer = signer;
            signatureCopy.time = time;
          }
        }

        return {
          activities: activities
        };
      });
    };

    _this.onUpdateChecklistItem = function (checklistItem) {
      var activityCode = checklistItem.activityCode;
      var checkListCode = checklistItem.checkListCode;

      _this.setState(function (state) {
        var activities = _toConsumableArray(state.activities);

        var activityIndex = activities.findIndex(function (activity) {
          return activity.activityCode === activityCode;
        });

        var activity = _objectSpread({}, activities[activityIndex]);

        activities[activityIndex] = activity;

        var checklists = _toConsumableArray(activity.checklists);

        var checklistIndex = checklists.findIndex(function (checklistItem) {
          return checklistItem.checkListCode === checkListCode;
        });
        checklists[checklistIndex] = _objectSpread({}, checklistItem);
        activity.checklists = checklists;
        return {
          activities: activities
        };
      });
    };

    _this.expandSignature = function (activity, expanded) {
      var signaturesCollapsed = _objectSpread({}, _this.state.signaturesCollapsed);

      signaturesCollapsed[activity.activityCode] = !expanded;

      _this.setState({
        signaturesCollapsed: signaturesCollapsed
      });
    };

    _this.state = {
      activities: [],
      blocking: true,
      filteredActivity: null,
      filteredEquipment: null,
      signaturesCollapsed: {}
    };

    _this.addCollapseHeuristic();

    return _this;
  }

  _createClass(Checklists, [{
    key: "addCollapseHeuristic",
    value: function addCollapseHeuristic() {
      var maxExpandedChecklistItems = this.props.maxExpandedChecklistItems;
      this.collapseHeuristic = typeof this.props.collapseHeuristic === "function" ? this.props.collapseHeuristic : function (checklists, activities) {
        // if there are less than 100 checklists, do not collapse anything
        if (checklists.length < maxExpandedChecklistItems) return; // otherwise, collapse every activity and every equipment within each activity

        activities.forEach(function (activity) {
          if (!activity.forceActivityExpansion) {
            activity.collapse();
            Object.values(activity.equipments).forEach(function (equipment) {
              return equipment.collapse();
            });
          }
        });
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.readActivities(this.props.workorder);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.addCollapseHeuristic();

      if (this.props.workorder !== nextProps.workorder) {
        this.readActivities(nextProps.workorder);
      }
    }
  }, {
    key: "readActivities",
    value: function readActivities(workorder) {
      var _this2 = this;

      var getWorkOrderActivities = this.props.getWorkOrderActivities;
      getWorkOrderActivities(workorder).then(function (response) {
        var activities = getExpandedActivities(response.body.data);
        var checklists = activities.reduce(function (checklists, activity) {
          return checklists.concat(activity.checklists);
        }, []);

        _this2.collapseHeuristic(checklists, activities);

        _this2.setState({
          activities: activities,
          blocking: false
        });
      });
    }
  }, {
    key: "setCollapsedEquipment",
    value: function setCollapsedEquipment(collapsed, activityIndex, equipmentCode) {
      this.setState(function (state, props) {
        var activities = _toConsumableArray(state.activities);

        var activity = _objectSpread({}, activities[activityIndex]);

        var equipments = _objectSpread({}, activity.equipments);

        var equipment = _objectSpread({}, equipments[equipmentCode], {
          collapsed: collapsed
        });

        equipments[equipmentCode] = equipment;
        activity.equipments = equipments;
        activities[activityIndex] = activity;
        return {
          activities: activities
        };
      });
    }
  }, {
    key: "renderChecklistsForEquipment",
    value: function renderChecklistsForEquipment(key, checklists, activity) {
      var _this3 = this;

      var _this$props = this.props,
          updateChecklistItem = _this$props.updateChecklistItem,
          minFindingsDropdown = _this$props.minFindingsDropdown,
          handleError = _this$props.handleError,
          getWoLink = _this$props.getWoLink;
      var firstChecklist = checklists[0];
      var equipmentCode = firstChecklist.equipmentCode;
      var collapsed = activity.equipments[equipmentCode].collapsed;

      if (firstChecklist === undefined) {
        console.error("renderChecklistsForEquipment MUST be passed at least 1 checklist");
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(EquipmentExpansionPanel, {
        key: key,
        expanded: !collapsed,
        TransitionProps: {
          unmountOnExit: true,
          timeout: 0
        },
        onChange: function onChange(_, expanded) {
          return _this3.setCollapsedEquipment(!expanded, activity.index, equipmentCode);
        }
      }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanelSummary["default"], {
        expandIcon: /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null)
      }, /*#__PURE__*/_react["default"].createElement(_ChecklistEquipment["default"], {
        key: firstChecklist.checkListCode + "_equipment",
        equipmentCode: equipmentCode,
        equipmentDesc: firstChecklist.equipmentDesc
      })), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], {
        style: {
          marginTop: -18
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: "100%"
        }
      }, checklists.map(function (checklist) {
        return /*#__PURE__*/_react["default"].createElement(_ChecklistItem["default"], {
          key: 'checklistItem$' + checklist.checkListCode,
          updateChecklistItem: updateChecklistItem,
          onUpdateChecklistItem: _this3.onUpdateChecklistItem,
          checklistItem: checklist,
          handleError: handleError,
          minFindingsDropdown: minFindingsDropdown,
          getWoLink: getWoLink,
          resetSignatures: _this3.resetSignatures
        });
      }))));
    }
  }, {
    key: "renderChecklistsForActivity",
    value: function renderChecklistsForActivity(activity, filteredEquipment) {
      var originalChecklists = activity.checklists;
      var checklists = filteredEquipment ? originalChecklists.filter(function (checklist) {
        return checklist.equipmentCode === filteredEquipment;
      }) : originalChecklists;
      var result = []; // this stores the index of the checklists that are related to a different equipment than the one before them
      // this includes the first checklist item since it has no equipment before it

      var equipmentBoundaries = [];
      var equipmentCode;
      checklists.forEach(function (checklist, i) {
        if (equipmentCode === checklist.equipmentCode) return;
        equipmentCode = checklist.equipmentCode;
        equipmentBoundaries.push(i);
      }); // include the index after the last checklist as a boundary
      // this makes the next section of the code much simpler, since we can loop over pairs of boundaries

      equipmentBoundaries.push(checklists.length); // now that we have the equipment boundaries, we can make arrays of checklists
      // for each equipment in the activity, and render a collapsible menu

      for (var i = 1; i < equipmentBoundaries.length; ++i) {
        var start = equipmentBoundaries[i - 1];
        var end = equipmentBoundaries[i];
        var _equipmentCode = checklists[start].equipmentCode;
        result.push(this.renderChecklistsForEquipment(_equipmentCode + start, checklists.slice(start, end), activity));
      }

      return result;
    }
  }, {
    key: "createFollowUpWOs",
    value: function createFollowUpWOs(evt, checklistActivity) {
      var _this4 = this;

      evt.stopPropagation();
      var activity = {
        workOrderNumber: checklistActivity.workOrderNumber,
        activityCode: checklistActivity.activityCode
      };
      this.setState({
        blocking: true
      });

      _WSChecklists["default"].createFolowUpWorkOrders(activity).then(function (resp) {
        _this4.readActivities(activity.workOrderNumber);

        _this4.props.showSuccess('Follow-up workorders successfully created.');
      })["catch"](function (error) {
        _this4.props.showError('Could not create follow-up workorders.');
      });
    }
  }, {
    key: "setCollapsedActivity",
    value: function setCollapsedActivity(collapsed, index) {
      this.setState(function (state, props) {
        var activities = _toConsumableArray(state.activities);

        var activity = _objectSpread({}, activities[index]);

        activity.collapsed = collapsed;
        activities[index] = activity;
        return {
          activities: activities
        };
      });
    }
  }, {
    key: "renderSignatures",
    value: function renderSignatures(activity) {
      var _this5 = this;

      if (!activity.signatures) return;
      return activity.signatures.map(function (signature) {
        return /*#__PURE__*/_react["default"].createElement(_ChecklistSignature["default"], {
          signature: signature,
          workOrderCode: activity.workOrderNumber,
          activityCode: activity.activityCode,
          showError: _this5.props.showError,
          setSignature: _this5.setSignature
        });
      });
    }
  }, {
    key: "renderActivities",
    value: function renderActivities(filteredActivity, filteredEquipment) {
      var _this6 = this;

      var activities = this.state.activities;
      return activities.filter(function (activity) {
        return activity.checklists && activity.checklists.length > 0 && !(filteredEquipment && activity.equipments[filteredEquipment] === undefined) && !(filteredActivity && activity.activityCode !== filteredActivity);
      }).map(function (activity) {
        return /*#__PURE__*/_react["default"].createElement(ActivityExpansionPanel, {
          key: activity.activityCode,
          expanded: !activity.collapsed,
          TransitionProps: {
            unmountOnExit: true,
            timeout: 0
          },
          onChange: function onChange(_, expanded) {
            return _this6.setCollapsedActivity(!expanded, activity.index);
          },
          style: {
            marginTop: '5px'
          }
        }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanelSummary["default"], {
          expandIcon: /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null)
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            padding: 2,
            flexGrow: "1",
            display: "flex",
            alignItems: "center"
          }
        }, /*#__PURE__*/_react["default"].createElement("span", {
          style: {
            fontWeight: 500
          }
        }, activity.activityCode, " \u2014 ", activity.activityNote), activity.checklists.some(function (checklist) {
          return !checklist.hideFollowUp;
        }) && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
          key: activity.activityCode + '$createfuwo',
          onClick: function onClick(evt) {
            return _this6.createFollowUpWOs(evt, activity);
          },
          color: "primary",
          style: {
            marginLeft: 'auto'
          }
        }, "Create Follow-up WO"))), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], {
          style: {
            margin: 0,
            padding: 0
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: "100%"
          }
        }, _this6.renderChecklistsForActivity(activity, filteredEquipment))), activity.signatures && /*#__PURE__*/_react["default"].createElement(ActivityExpansionPanel, {
          style: {
            backgroundColor: 'white',
            border: '0px'
          },
          expanded: !_this6.state.signaturesCollapsed[activity.activityCode],
          onChange: function onChange(_, expanded) {
            return _this6.expandSignature(activity, expanded);
          }
        }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanelSummary["default"], {
          expandIcon: /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null)
        }, /*#__PURE__*/_react["default"].createElement("span", {
          style: {
            fontWeight: 500
          }
        }, "E-SIGNATURES")), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], {
          style: {
            margin: 0,
            padding: '0 24px',
            backgroundColor: 'white',
            minHeight: '50px'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: "100%"
          }
        }, _this6.renderSignatures(activity)))));
      });
    }
  }, {
    key: "setNewFilter",
    value: function setNewFilter(filters) {
      var _this7 = this;

      var activity = filters.activity,
          equipment = filters.equipment;
      var activityCode = activity === "" ? null : activity === undefined ? undefined : activity.code;
      var equipmentCode = equipment === "" ? null : equipment === undefined ? undefined : equipment.code;
      this.setState(function (state, props) {
        // the activity and equipment codes that will be effectively used for the filtering
        // if any parameterized filter is unspecified (undefined), the value used is in state
        var effectiveActivityCode = activityCode === undefined ? state.filteredActivity : activityCode;
        var effectiveEquipmentCode = equipmentCode === undefined ? state.filteredEquipment : equipmentCode;

        var activityCollapsedPredicate = function activityCollapsedPredicate(activity, effectiveActivityCode) {};

        var equipmentCollapsedPredicate = function equipmentCollapsedPredicate(equipmentCode, effectiveEquipmentCode) {};

        if (effectiveActivityCode || effectiveEquipmentCode) {
          // if we're filtering, collapse everything that is not equal to our filters
          activityCollapsedPredicate = function activityCollapsedPredicate(activity) {
            return activity.activityCode !== effectiveActivityCode && Object.keys(activity.equipments).every(function (equipmentCode2) {
              return equipmentCode2 !== effectiveEquipmentCode;
            });
          };

          equipmentCollapsedPredicate = function equipmentCollapsedPredicate(equipmentCode) {
            return effectiveEquipmentCode && equipmentCode !== effectiveEquipmentCode;
          };
        } else {
          // if nothing is being filter, uncollapse everything,
          // to prepare for calling the collapse heuristic
          activityCollapsedPredicate = function activityCollapsedPredicate() {
            return false;
          };

          equipmentCollapsedPredicate = function equipmentCollapsedPredicate() {
            return false;
          };
        }

        var newState = {
          activities: state.activities.map(function (activity) {
            return _objectSpread({}, activity, {
              collapsed: activityCollapsedPredicate(activity),
              equipments: Object.keys(activity.equipments).reduce(function (equipments, thisEquipmentCode) {
                equipments[thisEquipmentCode] = _objectSpread({}, activity.equipments[thisEquipmentCode], {
                  collapsed: equipmentCollapsedPredicate(thisEquipmentCode)
                });
                return equipments;
              }, {})
            });
          }),
          filteredActivity: effectiveActivityCode,
          filteredEquipment: effectiveEquipmentCode
        };

        if (!effectiveActivityCode && !effectiveEquipmentCode) {
          var checklists = newState.activities.reduce(function (checklists, activity) {
            return checklists.concat(activity.checklists);
          }, []);

          _this7.collapseHeuristic(checklists, newState.activities);
        }

        return newState;
      });
    }
    /**s
     * Render the main checklists panel (only when there is at least one activity with checklist)
     *
     * @returns {*}
     */

  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      var _this$state = this.state,
          activities = _this$state.activities,
          filteredActivity = _this$state.filteredActivity,
          filteredEquipment = _this$state.filteredEquipment,
          blocking = _this$state.blocking; // makes a global equipments array, with all the different equipments from all activities

      var equipments = activities.reduce(function (prev, activity) {
        Object.keys(activity.equipments).forEach(function (key) {
          return prev[key] = activity.equipments[key];
        });
        return prev;
      }, {});
      var filteredActivities = activities.filter(function (activity) {
        return activity.checklists && activity.checklists.length > 0;
      });
      var filteredActivityObject = activities.find(function (activity) {
        return activity.activityCode === filteredActivity;
      });
      var divStyle = {
        width: "100%"
      };

      if (this.props.readonly) {
        divStyle.pointerEvents = 'none';
      }

      var isEmptyState = filteredActivities.length === 0;
      return !blocking && isEmptyState ? /*#__PURE__*/_react["default"].createElement(_SimpleEmptyState["default"], {
        message: "No Checklists to show."
      }) : /*#__PURE__*/_react["default"].createElement("div", {
        style: divStyle
      }, /*#__PURE__*/_react["default"].createElement(_reactBlockUi["default"], {
        blocking: blocking
      }, this.props.topSlot, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          paddingLeft: 25,
          paddingRight: 25
        }
      }, activities.length > 1 && /*#__PURE__*/_react["default"].createElement(_EAMSelect["default"], {
        children: null,
        label: "Activity",
        values: [{
          code: null,
          desc: "\u200B"
        }].concat(_toConsumableArray(filteredActivities.filter(function (activity) {
          return filteredEquipment ? activity.equipments[filteredEquipment] !== undefined : true;
        }).map(function (activity) {
          return {
            code: activity.activityCode,
            desc: activity.activityCode + " — " + activity.activityNote
          };
        }))),
        value: filteredActivity ? filteredActivity : undefined,
        onChange: function onChange(obj) {
          return _this8.setNewFilter({
            activity: obj
          });
        },
        menuContainerStyle: {
          'zIndex': 999
        }
      }), Object.keys(equipments).length > 1 && /*#__PURE__*/_react["default"].createElement(_EAMSelect["default"], {
        children: null,
        label: "Equipment",
        values: [{
          code: null,
          desc: "\u200B"
        }].concat(_toConsumableArray(Object.keys(equipments).filter(function (key) {
          return filteredActivity ? filteredActivityObject.equipments[key] !== undefined : true;
        }).map(function (key) {
          return equipments[key];
        }).map(function (equipment) {
          return _objectSpread({}, equipment, {
            desc: equipment.code + " — " + equipment.desc
          });
        }))),
        value: filteredEquipment ? filteredEquipment : undefined,
        onChange: function onChange(obj) {
          return _this8.setNewFilter({
            equipment: obj
          });
        },
        menuContainerStyle: {
          'zIndex': 999
        }
      })), this.renderActivities(filteredActivity, filteredEquipment), this.props.bottomSlot));
    }
  }]);

  return Checklists;
}(_react.Component);

Checklists.defaultProps = {
  getWorkOrderActivities: _WSChecklists["default"].getWorkOrderActivities,
  updateChecklistItem: _WSChecklists["default"].updateChecklistItem,
  readonly: false,
  minFindingsDropdown: 3,
  maxExpandedChecklistItems: 50
};
var _default = Checklists;
exports["default"] = _default;