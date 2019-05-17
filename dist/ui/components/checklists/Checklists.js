'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ExpansionPanel = require('@material-ui/core/ExpansionPanel');

var _ExpansionPanel2 = _interopRequireDefault(_ExpansionPanel);

var _ExpansionPanelDetails = require('@material-ui/core/ExpansionPanelDetails');

var _ExpansionPanelDetails2 = _interopRequireDefault(_ExpansionPanelDetails);

var _ExpansionPanelSummary = require('@material-ui/core/ExpansionPanelSummary');

var _ExpansionPanelSummary2 = _interopRequireDefault(_ExpansionPanelSummary);

var _ExpandMore = require('@material-ui/icons/ExpandMore');

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WSChecklists = require('../../../tools/WSChecklists');

var _WSChecklists2 = _interopRequireDefault(_WSChecklists);

var _panel = require('../panel');

var _panel2 = _interopRequireDefault(_panel);

var _ChecklistEquipment = require('./ChecklistEquipment');

var _ChecklistEquipment2 = _interopRequireDefault(_ChecklistEquipment);

var _ChecklistItem = require('./ChecklistItem');

var _ChecklistItem2 = _interopRequireDefault(_ChecklistItem);

var _reactBlockUi = require('react-block-ui');

var _reactBlockUi2 = _interopRequireDefault(_reactBlockUi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checklists = function (_Component) {
    _inherits(Checklists, _Component);

    function Checklists() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Checklists);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checklists.__proto__ || Object.getPrototypeOf(Checklists)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            activities: [],
            blocking: false
        }, _this.expansionDetailsStyle = {
            marginRight: -24,
            marginLeft: -24,
            marginTop: -7,
            marginBottom: -24
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Checklists, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.readActivities(this.props.workorder);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.workorder !== nextProps.workorder) {
                this.readActivities(nextProps.workorder);
            }
        }
    }, {
        key: 'readActivities',
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
        key: 'renderChecklistsForActivity',
        value: function renderChecklistsForActivity(checklists) {
            var _this3 = this;

            var equipmentCode = void 0;

            //If there are more than 1 equipment, at least one is different from the first
            var multipleEquipment = checklists.some(function (chk) {
                return chk.equipmentCode !== checklists[0].equipmentCode;
            });
            return checklists.reduce(function (acc, checklist) {
                // In a multiequipment scenario, include header for equipment
                if (multipleEquipment && equipmentCode !== checklist.equipmentCode) {
                    equipmentCode = checklist.equipmentCode;
                    acc.push(_react2.default.createElement(_ChecklistEquipment2.default, {
                        key: checklist.checkListCode + "_equipment",
                        equipmentCode: checklist.equipmentCode,
                        equipmentDesc: checklist.equipmentDesc
                    }));
                }
                acc.push(_react2.default.createElement(_ChecklistItem2.default, {
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
        key: 'createFollowUpWOs',
        value: function createFollowUpWOs(evt, checklistActivity) {
            var _this4 = this;

            evt.stopPropagation();
            var activity = {
                workOrderNumber: checklistActivity.workOrderNumber,
                activityCode: checklistActivity.activityCode
            };
            this.setState({ blocking: true });

            _WSChecklists2.default.createFolowUpWorkOrders(activity).then(function (resp) {
                _this4.readActivities(activity.workOrderNumber);
                _this4.props.showSuccess('Follow-up workorders successfully created.');
            }).catch(function (error) {
                _this4.props.showError('Could not create follow-up workorders.');
            });
        }
    }, {
        key: 'renderActivities',
        value: function renderActivities(activities) {
            var _this5 = this;

            var blocking = this.state.blocking;

            return activities.filter(function (activity) {
                return activity.checklists && activity.checklists.length > 0;
            }).map(function (activity) {
                return _react2.default.createElement(
                    _reactBlockUi2.default,
                    { key: activity.activityCode, blocking: blocking },
                    _react2.default.createElement(
                        _ExpansionPanel2.default,
                        { defaultExpanded: true },
                        _react2.default.createElement(
                            _ExpansionPanelSummary2.default,
                            { expandIcon: _react2.default.createElement(_ExpandMore2.default, null) },
                            _react2.default.createElement(
                                'div',
                                { style: { padding: 2,
                                        flexGrow: "1",
                                        display: "flex",
                                        alignItems: "center"
                                    } },
                                activity.activityCode,
                                ' - ',
                                activity.taskDesc,
                                _react2.default.createElement(
                                    _Button2.default,
                                    {
                                        key: activity.activityCode + '$createfuwo',
                                        onClick: function onClick(evt) {
                                            return _this5.createFollowUpWOs(evt, activity);
                                        },
                                        color: 'primary',
                                        style: { marginLeft: 'auto', paddingRight: '40px' } },
                                    'Create Follow-up WO'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _ExpansionPanelDetails2.default,
                            { style: { marginTop: -18 } },
                            _react2.default.createElement(
                                'div',
                                { style: { width: "100%" } },
                                _this5.renderChecklistsForActivity(activity.checklists)
                            )
                        )
                    )
                );
            });
        }

        /**s
         * Render the main checklists panel (only when there is at least one activity with checklist)
         *
         * @returns {*}
         */

    }, {
        key: 'render',
        value: function render() {
            var activities = this.state.activities;

            var divStyle = { width: "100%" };
            if (this.props.readonly) {
                divStyle.pointerEvents = 'none';
            }
            if (activities.filter(function (activity) {
                return activity.checklists && activity.checklists.length > 0;
            }).length === 0) {
                return _react2.default.createElement('div', null);
            } else {
                return _react2.default.createElement(
                    _panel2.default,
                    { heading: this.props.title,
                        detailsStyle: this.expansionDetailsStyle,
                        link: this.props.printingChecklistLinkToAIS ? this.props.printingChecklistLinkToAIS + this.props.workorder : undefined,
                        linkIcon: 'fa fa-print' },
                    _react2.default.createElement(
                        'div',
                        { style: divStyle },
                        this.renderActivities(activities)
                    )
                );
            }
        }
    }]);

    return Checklists;
}(_react.Component);

exports.default = Checklists;


Checklists.defaultProps = {
    title: 'CHECKLISTS',
    getWorkOrderActivities: _WSChecklists2.default.getWorkOrderActivities,
    updateChecklistItem: _WSChecklists2.default.updateChecklistItem,
    readonly: false,
    minFindingsDropdown: 3
};