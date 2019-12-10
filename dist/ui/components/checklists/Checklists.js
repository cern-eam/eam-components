"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ExpansionPanel = _interopRequireDefault(require("@material-ui/core/ExpansionPanel"));

var _ExpansionPanelDetails = _interopRequireDefault(require("@material-ui/core/ExpansionPanelDetails"));

var _ExpansionPanelSummary = _interopRequireDefault(require("@material-ui/core/ExpansionPanelSummary"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _react = _interopRequireWildcard(require("react"));

var _WSChecklists = _interopRequireDefault(require("../../../tools/WSChecklists"));

var _panel = _interopRequireDefault(require("../panel"));

var _ChecklistEquipment = _interopRequireDefault(require("./ChecklistEquipment"));

var _ChecklistItem = _interopRequireDefault(require("./ChecklistItem"));

var _reactBlockUi = _interopRequireDefault(require("react-block-ui"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Checklists =
/*#__PURE__*/
function (_Component) {
  _inherits(Checklists, _Component);

  function Checklists() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checklists);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checklists)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      activities: [],
      blocking: false
    };
    _this.expansionDetailsStyle = {
      marginRight: -24,
      marginLeft: -24,
      marginTop: -8,
      marginBottom: -24
    };
    return _this;
  }

  _createClass(Checklists, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.readActivities(this.props.workorder);
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

      this.props.getWorkOrderActivities(workorder).then(function (response) {
        _this2.setState({
          activities: response.body.data,
          blocking: false
        });
      });
    }
  }, {
    key: "renderChecklistsForActivity",
    value: function renderChecklistsForActivity(checklists) {
      var _this3 = this;

      var equipmentCode; //If there are more than 1 equipment, at least one is different from the first
      //TODO: const multipleEquipment = checklists.some(chk => chk.equipmentCode !== checklists[0].equipmentCode);

      return checklists.reduce(function (acc, checklist) {
        // In a multiequipment scenario, include header for equipment
        if (equipmentCode !== checklist.equipmentCode) {
          equipmentCode = checklist.equipmentCode;
          acc.push(_react["default"].createElement(_ChecklistEquipment["default"], {
            key: checklist.checkListCode + "_equipment",
            equipmentCode: checklist.equipmentCode,
            equipmentDesc: checklist.equipmentDesc
          }));
        }

        acc.push(_react["default"].createElement(_ChecklistItem["default"], {
          key: 'checklistItem$' + checklist.checkListCode,
          updateChecklistItem: _this3.props.updateChecklistItem,
          checklistItem: checklist,
          handleError: _this3.props.handleError,
          minFindingsDropdown: _this3.props.minFindingsDropdown,
          getWoLink: _this3.props.getWoLink
        }));
        return acc;
      }, []);
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
    key: "renderActivities",
    value: function renderActivities(activities) {
      var _this5 = this;

      var blocking = this.state.blocking;
      return activities.filter(function (activity) {
        return activity.checklists && activity.checklists.length > 0;
      }).map(function (activity) {
        return _react["default"].createElement(_reactBlockUi["default"], {
          key: activity.activityCode,
          blocking: blocking
        }, _react["default"].createElement(_ExpansionPanel["default"], {
          defaultExpanded: true
        }, _react["default"].createElement(_ExpansionPanelSummary["default"], {
          expandIcon: _react["default"].createElement(_ExpandMore["default"], null)
        }, _react["default"].createElement("div", {
          style: {
            padding: 2,
            flexGrow: "1",
            display: "flex",
            alignItems: "center"
          }
        }, activity.activityCode, " - ", activity.activityNote, _react["default"].createElement(_Button["default"], {
          key: activity.activityCode + '$createfuwo',
          onClick: function onClick(evt) {
            return _this5.createFollowUpWOs(evt, activity);
          },
          color: "primary",
          style: {
            marginLeft: 'auto',
            paddingRight: '40px'
          }
        }, "Create Follow-up WO"))), _react["default"].createElement(_ExpansionPanelDetails["default"], {
          style: {
            marginTop: -18
          }
        }, _react["default"].createElement("div", {
          style: {
            width: "100%"
          }
        }, _this5.renderChecklistsForActivity(activity.checklists)))));
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
      var activities = this.state.activities;
      var divStyle = {
        width: "100%"
      };

      if (this.props.readonly) {
        divStyle.pointerEvents = 'none';
      }

      if (activities.filter(function (activity) {
        return activity.checklists && activity.checklists.length > 0;
      }).length === 0) {
        return _react["default"].createElement("div", null);
      } else {
        return _react["default"].createElement(_panel["default"], {
          heading: this.props.title,
          detailsStyle: this.expansionDetailsStyle,
          link: this.props.printingChecklistLinkToAIS ? this.props.printingChecklistLinkToAIS + this.props.workorder : undefined,
          linkIcon: "fa fa-print"
        }, _react["default"].createElement("div", {
          style: divStyle
        }, this.renderActivities(activities)));
      }
    }
  }]);

  return Checklists;
}(_react.Component);

exports["default"] = Checklists;
Checklists.defaultProps = {
  title: 'CHECKLISTS',
  getWorkOrderActivities: _WSChecklists["default"].getWorkOrderActivities,
  updateChecklistItem: _WSChecklists["default"].updateChecklistItem,
  readonly: false,
  minFindingsDropdown: 3
};