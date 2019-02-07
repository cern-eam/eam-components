'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _panel = require('../panel');

var _panel2 = _interopRequireDefault(_panel);

var _ExpandMore = require('@material-ui/icons/ExpandMore');

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _ExpansionPanel = require('@material-ui/core/ExpansionPanel');

var _ExpansionPanel2 = _interopRequireDefault(_ExpansionPanel);

var _ExpansionPanelDetails = require('@material-ui/core/ExpansionPanelDetails');

var _ExpansionPanelDetails2 = _interopRequireDefault(_ExpansionPanelDetails);

var _ExpansionPanelSummary = require('@material-ui/core/ExpansionPanelSummary');

var _ExpansionPanelSummary2 = _interopRequireDefault(_ExpansionPanelSummary);

var _ChecklistItem = require('./ChecklistItem');

var _ChecklistItem2 = _interopRequireDefault(_ChecklistItem);

var _ChecklistEquipment = require('./ChecklistEquipment');

var _ChecklistEquipment2 = _interopRequireDefault(_ChecklistEquipment);

var _WSChecklists = require('../../../tools/WSChecklists');

var _WSChecklists2 = _interopRequireDefault(_WSChecklists);

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
            activities: []
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
                    activities: response.body.data
                });
            });
        }
    }, {
        key: 'renderChecklistsForActivity',
        value: function renderChecklistsForActivity(activity) {
            var _this3 = this;

            var checklistItems = [];
            var equipmentCode = void 0;
            var equipmentDesc = void 0;
            //Count the number of equipments to know if it is multiequipment
            var equipments = [];
            activity.checklists.forEach(function (checklist) {
                if (!equipments.includes(checklist.equipmentCode)) {
                    equipments.push(checklist.equipmentCode);
                }
            });
            var multipleEquipment = equipments.length > 1;
            //Iterate on checklists to display items
            activity.checklists.forEach(function (checklist) {
                if (multipleEquipment && equipmentCode !== checklist.equipmentCode) {
                    equipmentCode = checklist.equipmentCode;
                    equipmentDesc = checklist.equipmentDesc;
                    checklistItems.push(_react2.default.createElement(_ChecklistEquipment2.default, { key: checklist.checkListCode + "_equipment",
                        equipmentCode: equipmentCode,
                        equipmentDesc: equipmentDesc }));
                }

                checklistItems.push(_react2.default.createElement(_ChecklistItem2.default, { key: checklist.checkListCode,
                    setChecklistItem: _this3.setChecklistItem.bind(_this3),
                    checklistItem: checklist,
                    minFindingsDropdown: _this3.props.minFindingsDropdown }));
            });

            return checklistItems;
        }
    }, {
        key: 'setChecklistItem',
        value: function setChecklistItem(checklistItem) {
            var _this4 = this;

            this.props.updateChecklistItem(checklistItem).then(function (response) {
                // nothing to do for the moment
            }).catch(function (error) {
                _this4.props.handleError(error);
            });

            var activities = this.state.activities.map(function (activity) {
                if (activity.activityCode === checklistItem.activityCode) {
                    return _extends({}, activity, {
                        checklists: activity.checklists.map(function (checklist) {
                            return checklist.checkListCode === checklistItem.checkListCode ? checklistItem : checklist;
                        })
                    });
                } else {
                    return activity;
                }
            });

            this.setState({
                activities: activities
            });
        }
    }, {
        key: 'renderActivities',
        value: function renderActivities() {
            var _this5 = this;

            return this.state.activities.filter(function (activity) {
                return activity.checklists && activity.checklists.length > 0;
            }).map(function (activity) {
                return _react2.default.createElement(
                    _ExpansionPanel2.default,
                    { key: activity.activityCode, defaultExpanded: true },
                    _react2.default.createElement(
                        _ExpansionPanelSummary2.default,
                        { expandIcon: _react2.default.createElement(_ExpandMore2.default, null) },
                        activity.activityCode,
                        ' - ',
                        activity.taskDesc
                    ),
                    _react2.default.createElement(
                        _ExpansionPanelDetails2.default,
                        { style: { marginTop: -18 } },
                        _react2.default.createElement(
                            'div',
                            { style: { width: "100%" } },
                            _this5.renderChecklistsForActivity(activity)
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
            var divStyle = { width: "100%" };
            if (this.props.readonly) {
                divStyle.pointerEvents = 'none';
            }
            if (this.state.activities.filter(function (activity) {
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
                        this.renderActivities()
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