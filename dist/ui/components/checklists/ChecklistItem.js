'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChecklistItemInputYesNo = require('./inputs/ChecklistItemInputYesNo');

var _ChecklistItemInputYesNo2 = _interopRequireDefault(_ChecklistItemInputYesNo);

var _ChecklistItemInput3Findings = require('./inputs/ChecklistItemInput3Findings');

var _ChecklistItemInput3Findings2 = _interopRequireDefault(_ChecklistItemInput3Findings);

var _ChecklistItemInput2Findings = require('./inputs/ChecklistItemInput2Findings');

var _ChecklistItemInput2Findings2 = _interopRequireDefault(_ChecklistItemInput2Findings);

var _ChecklistItemInput1Finding = require('./inputs/ChecklistItemInput1Finding');

var _ChecklistItemInput1Finding2 = _interopRequireDefault(_ChecklistItemInput1Finding);

var _ChecklistItemInputMoreFindings = require('./inputs/ChecklistItemInputMoreFindings');

var _ChecklistItemInputMoreFindings2 = _interopRequireDefault(_ChecklistItemInputMoreFindings);

var _ChecklistItemInputQuantitative = require('./inputs/ChecklistItemInputQuantitative');

var _ChecklistItemInputQuantitative2 = _interopRequireDefault(_ChecklistItemInputQuantitative);

var _ChecklistItemInputChecklist = require('./inputs/ChecklistItemInputChecklist');

var _ChecklistItemInputChecklist2 = _interopRequireDefault(_ChecklistItemInputChecklist);

var _ChecklistItemInputInspection = require('./inputs/ChecklistItemInputInspection');

var _ChecklistItemInputInspection2 = _interopRequireDefault(_ChecklistItemInputInspection);

var _ChecklistItemNotes = require('./ChecklistItemNotes');

var _ChecklistItemNotes2 = _interopRequireDefault(_ChecklistItemNotes);

var _Collapse = require('@material-ui/core/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _ChecklistItemFollowUp = require('./ChecklistItemFollowUp');

var _ChecklistItemFollowUp2 = _interopRequireDefault(_ChecklistItemFollowUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checklist = function (_Component) {
    _inherits(Checklist, _Component);

    function Checklist() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Checklist);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checklist.__proto__ || Object.getPrototypeOf(Checklist)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            detailsVisible: false,
            blocked: false
        }, _this.getCheckListItemStyle = function () {
            return {
                paddingTop: 5,
                paddingBottom: 5,
                borderBottom: "dashed 1px #d1d3d4",
                opacity: _this.state.blocked ? 0.5 : 1,
                pointerEvents: _this.state.blocked ? 'none' : 'auto'
            };
        }, _this.firstLine = {
            display: "flex",
            alignItems: "center",
            minHeight: 48,
            justifyContent: 'space-between'
        }, _this.firstLineDesc = {
            float: "left",
            pointerEvents: "initial",
            color: "rgba(0, 0, 0, 0.87)"
        }, _this.checklistDetailsStyle = {
            marginLeft: -5,
            marginTop: -5,
            marginRight: -8,
            paddingRight: 3,
            display: "flex",
            flexDirection: "row"
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Checklist, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.checklistItem) {
                this.setState({
                    checklistItem: this.props.checklistItem,
                    detailsVisible: !!this.props.checklistItem.notes
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.checklistItem) {
                this.setState({
                    checklistItem: this.props.checklistItem,
                    detailsVisible: !!this.props.checklistItem.notes
                });
            }
        }

        /**
         * Compute the style for notes div container
         *
         * @returns {{marginLeft: number, marginTop: number, position: string, display: string}}
         */

    }, {
        key: 'onChange',
        value: function onChange(checklistItem) {
            var _this2 = this;

            // Block the UI
            this.setState({ blocked: true });
            // Copy the current checklist item (will be used to restore the UI)
            var oldChecklistItem = Object.assign({}, this.state.checklistItem);
            //
            this.setState({ checklistItem: checklistItem });
            // Update the checklist Item
            this.props.updateChecklistItem(checklistItem).then(function (response) {
                _this2.setState({ blocked: false });
            }).catch(function (error) {
                _this2.props.handleError(error);
                // Unblock the UI and restore the UI
                _this2.setState({
                    blocked: false,
                    checklistItem: oldChecklistItem
                });
            });
        }
    }, {
        key: 'descClickHandler',
        value: function descClickHandler() {
            //if (!this.state.notesVisible) {
            //    setTimeout(() => this.notesInput.focus(), 0)
            //}
            this.setState({
                detailsVisible: !this.state.detailsVisible
            });
        }
    }, {
        key: 'renderChecklistItemInput',
        value: function renderChecklistItemInput() {
            var _this3 = this;

            var checklistItem = this.state.checklistItem;


            switch (checklistItem.type) {
                case "01":
                    return _react2.default.createElement(_ChecklistItemInputChecklist2.default, { checklistItem: checklistItem,
                        onChange: function onChange(value) {
                            return _this3.onChange(value);
                        } });
                case "02":
                    return _react2.default.createElement(_ChecklistItemInputYesNo2.default, { checklistItem: checklistItem, onChange: function onChange(value) {
                            return _this3.onChange(value);
                        } });
                case "03":
                    if (checklistItem.possibleFindings.length >= this.props.minFindingsDropdown) {
                        return _react2.default.createElement(_ChecklistItemInputMoreFindings2.default, { checklistItem: checklistItem,
                            onChange: function onChange(value) {
                                return _this3.onChange(value);
                            } });
                    } else {
                        switch (checklistItem.possibleFindings.length) {
                            case 1:
                                return _react2.default.createElement(_ChecklistItemInput1Finding2.default, { checklistItem: checklistItem,
                                    onChange: function onChange(value) {
                                        return _this3.onChange(value);
                                    } });
                            case 2:
                                return _react2.default.createElement(_ChecklistItemInput2Findings2.default, { checklistItem: checklistItem,
                                    onChange: function onChange(value) {
                                        return _this3.onChange(value);
                                    } });
                            case 3:
                                return _react2.default.createElement(_ChecklistItemInput3Findings2.default, { checklistItem: checklistItem,
                                    onChange: function onChange(value) {
                                        return _this3.onChange(value);
                                    } });
                            default:
                                return _react2.default.createElement(_ChecklistItemInputMoreFindings2.default, { checklistItem: checklistItem,
                                    onChange: function onChange(value) {
                                        return _this3.onChange(value);
                                    } });
                        }
                    }
                case "04":
                case "05":
                    return _react2.default.createElement(_ChecklistItemInputQuantitative2.default, { checklistItem: checklistItem,
                        onChange: function onChange(value) {
                            return _this3.onChange(value);
                        } });
                case "06":
                    return _react2.default.createElement(_ChecklistItemInputInspection2.default, { checklistItem: checklistItem,
                        onChange: function onChange(value) {
                            return _this3.onChange(value);
                        } });
                default:
                    return _react2.default.createElement('div', null);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var checklistItem = this.props.checklistItem;


            return _react2.default.createElement(
                'div',
                { style: this.getCheckListItemStyle() },
                _react2.default.createElement(
                    'div',
                    { style: this.firstLine },
                    _react2.default.createElement(
                        'div',
                        { style: this.firstLineDesc, onClick: this.descClickHandler.bind(this) },
                        checklistItem.desc
                    ),
                    this.renderChecklistItemInput()
                ),
                _react2.default.createElement(
                    _Collapse2.default,
                    { 'in': this.state.detailsVisible },
                    _react2.default.createElement(
                        'div',
                        { style: this.checklistDetailsStyle },
                        _react2.default.createElement(_ChecklistItemNotes2.default, { checklistItem: this.state.checklistItem,
                            onChange: function onChange(value) {
                                return _this4.onChange(value);
                            } }),
                        _react2.default.createElement(_ChecklistItemFollowUp2.default, { checklistItem: this.state.checklistItem,
                            onChange: function onChange(value) {
                                return _this4.onChange(value);
                            } })
                    )
                )
            );
        }
    }]);

    return Checklist;
}(_react.Component);

exports.default = Checklist;