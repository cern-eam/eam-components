function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
import EAMSelect from '../inputs-ng/EAMSelect';
import SimpleEmptyState from '../../components/emptystates/SimpleEmptyState';
import withStyles from '@mui/styles/withStyles';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Collapse from '@mui/material/Collapse';
import GridTools from '../grids/GridTools';
var SIGNATURE_TYPES = {
  PERFORMER_1: 'PB01',
  PERFORMER_2: 'PB02',
  REVIEWER: 'RB01'
};
var SIGNATURE_ORDER = _defineProperty(_defineProperty(_defineProperty({}, SIGNATURE_TYPES.PERFORMER_1, 1), SIGNATURE_TYPES.PERFORMER_2, 2), SIGNATURE_TYPES.REVIEWER, 3);
var ActivityExpansionPanel = withStyles({
  root: {
    backgroundColor: '#fafafa',
    marginTop: '10px',
    outline: '1px solid #e0e0e0',
    borderRadius: '5px',
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
})(MuiExpansionPanel);
var EquipmentExpansionPanel = withStyles({
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
})(MuiExpansionPanel);
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
}

// External updates on the activities will not be reflected in this component
// For instance, if the description of an activity is changed 
// in "Activities and Booked Labor", it will not be reflected here
var Checklists = /*#__PURE__*/function (_Component) {
  _inherits(Checklists, _Component);
  function Checklists(props) {
    var _this;
    _classCallCheck(this, Checklists);
    _this = _callSuper(this, Checklists, [props]);
    _this.collapse = function (checklists, activities) {
      var maxExpandedChecklistItems = _this.props.maxExpandedChecklistItems;
      var defaultCollapse = function defaultCollapse(checklists, activities) {
        // if there are less than this.props.maxExpandedChecklistItems checklists, do not collapse anything
        if (checklists.length < maxExpandedChecklistItems) return;

        // otherwise, collapse every activity and every equipment within each activity
        activities.forEach(function (activity) {
          if (!activity.forceActivityExpansion) {
            activity.collapse();
            Object.values(activity.equipments).forEach(function (equipment) {
              return equipment.collapse();
            });
          }
        });
      };
      var functionToRun = typeof _this.props.collapseHeuristic === "function" ? _this.props.collapseHeuristic : defaultCollapse;
      var filteredChecklists = checklists.filter(function (_ref) {
        var checkListCode = _ref.checkListCode;
        return !_this.state.checklistsHidden[checkListCode];
      });
      functionToRun(filteredChecklists, activities);
    };
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
        if (activity.signatures && activity.signatures[type]) {
          activity.signatures = _objectSpread({}, activity.signatures);
          activity.signatures[type] = _objectSpread({}, activity.signatures[type], {
            signer: signer,
            time: time
          });
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
    _this.createFollowUpWOs = function (checklistActivity) {
      _this.hideCreateFollowUpWODialog();
      var activity = {
        workOrderNumber: checklistActivity.workOrderNumber,
        activityCode: checklistActivity.activityCode
      };
      _this.setState({
        blocking: true
      });
      WSChecklists.createFolowUpWorkOrders(activity).then(function (resp) {
        _this.readActivities(activity.workOrderNumber);
        _this.props.showSuccess('Follow-up workorders successfully created.');
      })["catch"](function (error) {
        _this.props.showError('Could not create follow-up workorders.');
      });
    };
    _this.showCreateFollowUpWODialog = function (activity) {
      _this.setState({
        createFollowUpActivity: activity
      });
    };
    _this.hideCreateFollowUpWODialog = function () {
      _this.setState({
        createFollowUpActivity: null
      });
    };
    _this.expandSignature = function (activity, expanded) {
      var signaturesCollapsed = _objectSpread({}, _this.state.signaturesCollapsed);
      signaturesCollapsed[activity.activityCode] = !expanded;
      _this.setState({
        signaturesCollapsed: signaturesCollapsed
      });
    };
    _this.shouldRenderSignature = function (signatures, signature) {
      if (!signature) return false;
      if (signature.signer) return true;
      switch (signature.type) {
        case SIGNATURE_TYPES.PERFORMER_1:
          return signature.viewAsPerformer || signature.viewAsReviewer;
        case SIGNATURE_TYPES.PERFORMER_2:
          if (!signatures[SIGNATURE_TYPES.PERFORMER_1] || signatures[SIGNATURE_TYPES.PERFORMER_1].responsibilityCode !== signature.responsibilityCode) return signature.viewAsPerformer || signature.viewAsReviewer;else return signatures[SIGNATURE_TYPES.PERFORMER_1].signer;
        case SIGNATURE_TYPES.REVIEWER:
          return signature.viewAsReviewer;
      }
      return true;
    };
    _this.toggleFilledFilter = function () {
      _this.setState(function (prevState) {
        return {
          checklistsHidden: Object.keys(prevState.checklistsHidden).length > 0 ? {} : Object.fromEntries(prevState.activities.map(function (activity) {
            return activity.checklists;
          }).flat(1).map(function (_ref2) {
            var checkListCode = _ref2.checkListCode,
              result = _ref2.result,
              finding = _ref2.finding,
              numericValue = _ref2.numericValue,
              freeText = _ref2.freeText,
              date = _ref2.date,
              dateTime = _ref2.dateTime,
              entityCode = _ref2.entityCode;
            return [checkListCode, result || finding || numericValue || date || dateTime || entityCode || freeText];
          }))
        };
      }, function () {
        return Object.keys(_this.state.checklistsHidden).length === 0 && _this.setNewFilter({
          activity: {
            code: _this.state.filteredActivity
          },
          equipment: {
            code: _this.state.filteredEquipment
          }
        });
      });
    };
    _this.toggleShowChecklistOptions = function () {
      _this.setState(function (prevState) {
        return {
          showChecklistOptions: !prevState.showChecklistOptions
        };
      });
    };
    _this.toggleExpandActivities = function () {
      _this.setState(function (prevState) {
        return {
          expandActivities: !prevState.expandActivities,
          activities: prevState.activities.map(function (activity) {
            return _objectSpread({}, activity, {
              collapsed: prevState.expandActivities
            });
          })
        };
      });
    };
    _this.toggleExpandChecklists = function () {
      _this.setState(function (prevState) {
        return {
          expandChecklists: !prevState.expandChecklists,
          activities: prevState.activities.map(function (activity) {
            return _objectSpread({}, activity, {
              equipments: Object.fromEntries(Object.entries(activity.equipments).map(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                  equipmentCode = _ref4[0],
                  equipment = _ref4[1];
                return [equipmentCode, _objectSpread({}, equipment, {
                  collapsed: prevState.expandChecklists
                })];
              }))
            });
          })
        };
      });
    };
    _this.toggleOptions = function () {
      _this.setState(function (prevState) {
        return {
          showChecklistsOptions: !prevState.showChecklistsOptions
        };
      });
    };
    var _activityCode = GridTools.getURLParameterByName('activityCode');
    _this.state = {
      activities: [],
      blocking: true,
      createFollowUpActivity: null,
      activityCode: _activityCode,
      filteredActivity: _activityCode,
      filteredEquipment: null,
      signaturesCollapsed: {},
      checklistsHidden: {},
      showChecklistOptions: _this.parseToBoolean(GridTools.getURLParameterByName("showChecklistOptions"), false),
      showFilledItems: _this.parseToBoolean(GridTools.getURLParameterByName("showFilledItems"), true),
      expandChecklists: _this.parseToBoolean(GridTools.getURLParameterByName("expandChecklists"), false),
      expandActivities: _this.parseToBoolean(GridTools.getURLParameterByName("expandActivities"), false)
    };
    return _this;
  }
  _createClass(Checklists, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.readActivities(this.props.workorder);
    }
  }, {
    key: "parseToBoolean",
    value: function parseToBoolean(value, defaultValue) {
      return value.length === 0 ? defaultValue : value !== "false";
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.workorder !== nextProps.workorder) {
        this.readActivities(nextProps.workorder);
      }
    }
  }, {
    key: "readActivities",
    value: function readActivities(workorder) {
      var _this2 = this;
      var _this$props = this.props,
        getWorkOrderActivities = _this$props.getWorkOrderActivities,
        activity = _this$props.activity;
      getWorkOrderActivities(workorder).then(function (response) {
        var activities = getExpandedActivities(response.body.data);
        var checklists = activities.reduce(function (checklists, activity) {
          return checklists.concat(activity.checklists);
        }, []);
        _this2.collapse(checklists, activities);
        _this2.setState(function (prevState) {
          var newState = {
            activities: activities,
            blocking: false
          };
          if (!prevState.showFilledItems) {
            _this2.toggleFilledFilter();
          }
          if (activity) {
            _this2.setNewFilter({
              activity: {
                code: activity
              }
            });
          }
          return newState;
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
      var isDisabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var _this$props2 = this.props,
        updateChecklistItem = _this$props2.updateChecklistItem,
        minFindingsDropdown = _this$props2.minFindingsDropdown,
        handleError = _this$props2.handleError,
        getWoLink = _this$props2.getWoLink,
        showError = _this$props2.showError,
        eqpToOtherId = _this$props2.eqpToOtherId;
      var showChecklistOptions = this.state.showChecklistOptions;
      var firstChecklist = checklists[0];
      var equipmentCode = firstChecklist.equipmentCode;
      var collapsed = activity.equipments[equipmentCode].collapsed;
      if (firstChecklist === undefined) {
        console.error("renderChecklistsForEquipment MUST be passed at least 1 checklist");
        return null;
      }
      var equipmentChecklistDesc = "".concat(equipmentCode, " \u2014 ").concat(firstChecklist.equipmentDesc) + (eqpToOtherId?.[equipmentCode] ? " \u2014 ".concat(eqpToOtherId[equipmentCode]) : '');
      return /*#__PURE__*/React.createElement(EquipmentExpansionPanel, {
        style: {
          width: "100%",
          outline: "1px solid #e0e0e0",
          borderRadius: "5px"
        },
        key: key,
        expanded: !collapsed,
        TransitionProps: {
          unmountOnExit: true,
          timeout: 0
        },
        onChange: function onChange(_, expanded) {
          return _this3.setCollapsedEquipment(!expanded, activity.index, equipmentCode);
        }
      }, /*#__PURE__*/React.createElement(AccordionSummary, {
        style: {
          outline: "1px solid #e0e0e0",
          borderRadius: "5px",
          marginTop: "5px"
        },
        expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null)
      }, /*#__PURE__*/React.createElement(ChecklistEquipment, {
        key: firstChecklist.checkListCode + "_equipment",
        description: equipmentChecklistDesc
      })), /*#__PURE__*/React.createElement(AccordionDetails, {
        style: {
          padding: "0"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: "100%"
        }
      }, checklists.map(function (checklist, index) {
        return /*#__PURE__*/React.createElement(ChecklistItem, {
          key: 'checklistItem$' + checklist.checkListCode,
          updateChecklistItem: updateChecklistItem,
          onUpdateChecklistItem: _this3.onUpdateChecklistItem,
          checklistItem: checklist,
          taskCode: activity.taskCode,
          handleError: handleError,
          showError: showError,
          minFindingsDropdown: minFindingsDropdown,
          getWoLink: getWoLink,
          resetSignatures: _this3.resetSignatures,
          disabled: isDisabled,
          isLastItem: index === checklists.length - 1,
          hideFollowUpProp: _this3.props.hideFollowUpProp,
          showChecklistOptions: showChecklistOptions,
          register: _this3.props.register
        });
      }))));
    }
  }, {
    key: "renderChecklistsForActivity",
    value: function renderChecklistsForActivity(activity, filteredEquipment) {
      var checklistsHidden = this.state.checklistsHidden;
      var originalChecklists = activity.checklists,
        signatures = activity.signatures;
      var isDisabled = this.props.disabled || signatures && signatures[SIGNATURE_TYPES.PERFORMER_1] && !signatures[SIGNATURE_TYPES.PERFORMER_1].viewAsPerformer && signatures[SIGNATURE_TYPES.PERFORMER_2] && !signatures[SIGNATURE_TYPES.PERFORMER_2].viewAsPerformer;
      var checklists = originalChecklists.filter(function (checklist) {
        return !filteredEquipment || checklist.equipmentCode === filteredEquipment;
      }).filter(function (_ref5) {
        var checkListCode = _ref5.checkListCode;
        return !checklistsHidden[checkListCode];
      });
      if (checklists.length === 0) {
        return /*#__PURE__*/React.createElement("p", {
          style: {
            textAlign: 'center'
          }
        }, "All checklists in this activity are hidden.");
      }
      var result = [];

      // this stores the index of the checklists that are related to a different equipment than the one before them
      // this includes the first checklist item since it has no equipment before it
      var equipmentBoundaries = [];
      var equipmentCode;
      checklists.forEach(function (checklist, i) {
        if (equipmentCode === checklist.equipmentCode) return;
        equipmentCode = checklist.equipmentCode;
        equipmentBoundaries.push(i);
      });

      // include the index after the last checklist as a boundary
      // this makes the next section of the code much simpler, since we can loop over pairs of boundaries
      equipmentBoundaries.push(checklists.length);

      // now that we have the equipment boundaries, we can make arrays of checklists
      // for each equipment in the activity, and render a collapsible menu
      for (var i = 1; i < equipmentBoundaries.length; ++i) {
        var start = equipmentBoundaries[i - 1];
        var end = equipmentBoundaries[i];
        var _equipmentCode = checklists[start].equipmentCode;
        result.push(this.renderChecklistsForEquipment(_equipmentCode + start, checklists.slice(start, end), activity, isDisabled));
      }
      return result;
    }
  }, {
    key: "setCollapsedActivity",
    value: function setCollapsedActivity(collapsed, index) {
      var _this4 = this;
      this.setState(function (state, props) {
        var activities = _toConsumableArray(state.activities);
        var activity = _objectSpread({}, activities[index]);
        activity.collapsed = collapsed;
        activities[index] = activity;
        return {
          activities: activities
        };
      }, function () {
        var activity = _this4.state.activities[index];
        var equipmentKeys = Object.keys(activity.equipments);
        if (equipmentKeys.length === 1) {
          // also do the same to the equipment if there's only a single one
          _this4.setCollapsedEquipment(collapsed, activity.index, equipmentKeys[0]);
        }
      });
    }
  }, {
    key: "renderSignatures",
    value: function renderSignatures(activity) {
      var _this5 = this;
      if (!activity.signatures) return;
      return Object.values(activity.signatures).sort(function (signature1, signature2) {
        return SIGNATURE_ORDER[signature1.type] - SIGNATURE_ORDER[signature2.type];
      }).filter(function (signature) {
        return _this5.shouldRenderSignature(activity.signatures, signature);
      }).map(function (signature) {
        return /*#__PURE__*/React.createElement(ChecklistSignature, {
          signature: signature,
          workOrderCode: activity.workOrderNumber,
          activityCode: activity.activityCode,
          showError: _this5.props.showError,
          setSignature: _this5.setSignature,
          disabled: _this5.props.disabled
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
        var renderedSignatures = _this6.renderSignatures(activity);
        return /*#__PURE__*/React.createElement(ActivityExpansionPanel, {
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
            marginTop: '10px'
          }
        }, /*#__PURE__*/React.createElement(AccordionSummary, {
          expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null)
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            padding: 0,
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 'bold',
            flexBasis: "66%",
            fontSize: 14,
            color: '#333'
          }
        }, activity.activityCode, " \u2014 ", activity.activityNote), !_this6.props.hideFollowUpProp && activity.checklists.some(function (checklist) {
          return !checklist.hideFollowUp;
        }) && /*#__PURE__*/React.createElement("div", {
          style: {
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Button, {
          key: "".concat(activity.activityCode, "$createfuwo"),
          onClick: function onClick(evt) {
            evt.stopPropagation();
            _this6.showCreateFollowUpWODialog(activity);
          },
          color: "primary",
          variant: "outlined",
          size: "small",
          style: {
            fontSize: '10px',
            marginRight: '8px'
          },
          disabled: _this6.props.disabled || activity.checklists.every(function (checklist) {
            return typeof checklist.followUpWorkOrder === 'string' || checklist.followUp === false;
          })
        }, /*#__PURE__*/React.createElement(AddIcon, {
          style: {
            marginLeft: '-8px'
          }
        }), "Follow-up WO")))), /*#__PURE__*/React.createElement(AccordionDetails, {
          style: {
            marginTop: "-5px",
            padding: 2
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: "100%"
          }
        }, _this6.renderChecklistsForActivity(activity, filteredEquipment))), activity.signatures && renderedSignatures.length ? /*#__PURE__*/React.createElement(ActivityExpansionPanel, {
          style: {
            outline: '0px',
            marginTop: '0px'
          },
          expanded: !_this6.state.signaturesCollapsed[activity.activityCode],
          onChange: function onChange(_, expanded) {
            return _this6.expandSignature(activity, expanded);
          }
        }, /*#__PURE__*/React.createElement(AccordionSummary, {
          style: {
            paddingLeft: '10px',
            minHeight: '20px'
          },
          sx: {
            '& .MuiAccordionSummary-content': {
              justifyContent: 'center',
              marginTop: '16px',
              marginBottom: '16px'
            }
          },
          expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null)
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 500
          }
        }, "E-SIGNATURES")), /*#__PURE__*/React.createElement(AccordionDetails, {
          style: {
            margin: 0,
            padding: 0,
            minHeight: '50px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: "100%"
          }
        }, renderedSignatures))) : null);
      });
    }
  }, {
    key: "setNewFilter",
    value: function setNewFilter(filters) {
      var _this7 = this;
      var activity = filters.activity,
        equipmentCode = filters.equipmentCode;
      var activityCode = activity?.code;
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
          _this7.collapse(checklists, newState.activities);
        }
        return newState;
      });
    }
  }, {
    key: "render",
    value:
    /**s
     * Render the main checklists panel (only when there is at least one activity with checklist)
     *
     * @returns {*}
     */
    function render() {
      var _this8 = this;
      var _this$state = this.state,
        activities = _this$state.activities,
        activityCode = _this$state.activityCode,
        filteredActivity = _this$state.filteredActivity,
        filteredEquipment = _this$state.filteredEquipment,
        blocking = _this$state.blocking;

      // makes a global equipments array, with all the different equipments from all activities
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
      var activity = this.state.createFollowUpActivity;
      var dialog = activity && /*#__PURE__*/React.createElement(Paper, {
        elevation: 3,
        style: {
          padding: '30px',
          textAlign: 'center'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '25px',
          marginBottom: '15px'
        }
      }, "Create follow-up work orders?"), /*#__PURE__*/React.createElement("p", null, "Activity ", activity.activityCode, " \u2014 ", activity.activityNote), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
        type: "submit",
        onClick: this.hideCreateFollowUpWODialog
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick() {
          return _this8.createFollowUpWOs(_this8.state.createFollowUpActivity);
        },
        color: "primary"
      }, "Confirm")));
      return !blocking && isEmptyState ? /*#__PURE__*/React.createElement(SimpleEmptyState, {
        message: "No Checklists to show."
      }) : /*#__PURE__*/React.createElement("div", {
        style: divStyle
      }, /*#__PURE__*/React.createElement(BlockUi, {
        blocking: blocking
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: '20px',
          justifyContent: 'flex-end'
        }
      }, /*#__PURE__*/React.createElement(Collapse, {
        "in": this.props.expandChecklistsOptions
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          flexWrap: 'wrap',
          paddingRight: 8
        }
      }, !blocking && /*#__PURE__*/React.createElement(FormControlLabel, {
        control: /*#__PURE__*/React.createElement(Checkbox, {
          color: "primary",
          checked: this.state.expandActivities
        }),
        label: 'Expand Activities',
        labelPlacement: "start",
        onMouseDown: this.toggleExpandActivities,
        onTouchStart: this.toggleExpandActivities
      }), !blocking && /*#__PURE__*/React.createElement(FormControlLabel, {
        control: /*#__PURE__*/React.createElement(Checkbox, {
          color: "primary",
          checked: this.state.expandChecklists
        }),
        label: 'Expand Checklists',
        labelPlacement: "start",
        onMouseDown: this.toggleExpandChecklists,
        onTouchStart: this.toggleExpandChecklists
      }), !blocking && /*#__PURE__*/React.createElement(FormControlLabel, {
        control: /*#__PURE__*/React.createElement(Checkbox, {
          color: "primary",
          checked: this.state.showChecklistOptions
        }),
        label: 'Show Checklist Options',
        labelPlacement: "start",
        onMouseDown: this.toggleShowChecklistOptions,
        onTouchStart: this.toggleShowChecklistOptions
      }), !blocking && /*#__PURE__*/React.createElement(FormControlLabel, {
        control: /*#__PURE__*/React.createElement(Checkbox, {
          color: "primary",
          checked: Object.keys(this.state.checklistsHidden).length == 0
        }),
        label: 'Show filled items',
        labelPlacement: "start",
        onMouseDown: this.toggleFilledFilter,
        onTouchStart: this.toggleFilledFilter
      })))), !activityCode && /*#__PURE__*/React.createElement("div", {
        style: {
          alignItems: 'center',
          paddingLeft: '16px'
        }
      }, activities.length > 1 && /*#__PURE__*/React.createElement(EAMSelect, {
        selectOnlyMode: true,
        label: "Activity",
        renderSuggestion: function renderSuggestion(suggestion) {
          return suggestion.desc;
        },
        renderValue: function renderValue(value) {
          return value.desc || value.code;
        },
        options: filteredActivities.filter(function (activity) {
          return filteredEquipment ? activity.equipments[filteredEquipment] !== undefined : true;
        }).map(function (activity) {
          return {
            code: activity.activityCode,
            desc: activity.activityCode + " — " + activity.activityNote
          };
        }),
        value: filteredActivity,
        onChange: function onChange(activity) {
          return _this8.setNewFilter({
            activity: {
              code: activity.code
            }
          });
        },
        menuContainerStyle: {
          'zIndex': 999
        }
      }), Object.keys(equipments).length > 1 && /*#__PURE__*/React.createElement(EAMSelect, {
        selectOnlyMode: true,
        label: "Equipment",
        options: Object.keys(equipments).filter(function (key) {
          return filteredActivity ? filteredActivityObject.equipments[key] !== undefined : true;
        }).map(function (key) {
          return equipments[key];
        }).map(function (equipment) {
          return _objectSpread({}, equipment, {
            desc: equipment.code + " — " + equipment.desc
          });
        }),
        value: filteredEquipment ? filteredEquipment : undefined,
        onChange: function onChange(equipment) {
          return _this8.setNewFilter({
            equipmentCode: equipment.code
          });
        },
        menuContainerStyle: {
          'zIndex': 999
        }
      })), this.renderActivities(filteredActivity, filteredEquipment), this.props.bottomSlot), /*#__PURE__*/React.createElement(Dialog, {
        open: this.state.createFollowUpActivity !== null
      }, dialog));
    }
  }]);
  return Checklists;
}(Component);
Checklists.defaultProps = {
  getWorkOrderActivities: WSChecklists.getWorkOrderActivities,
  updateChecklistItem: WSChecklists.updateChecklistItem,
  readonly: false,
  minFindingsDropdown: 3,
  maxExpandedChecklistItems: 50
};
export default Checklists;