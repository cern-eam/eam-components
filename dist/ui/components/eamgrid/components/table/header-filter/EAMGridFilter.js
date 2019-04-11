'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _EAMGridFilterTypeMenu = require('./EAMGridFilterTypeMenu');

var _EAMGridFilterTypeMenu2 = _interopRequireDefault(_EAMGridFilterTypeMenu);

var _index = require('@material-ui/core/styles/index');

var _materialUiPickers = require('material-ui-pickers');

var _dateFns = require('@date-io/date-fns');

var _dateFns2 = _interopRequireDefault(_dateFns);

var _core = require('@material-ui/core');

var _dateFns3 = require('date-fns');

var _Constants = require('../../../../../../enums/Constants');

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return _extends({}, theme, {
        filterCell: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-evenly"
        },
        filterTypeMenuButton: {},
        filterInput: {
            width: "100%",
            backgroundColor: "#FFFFFF"
        },
        filterInnerInput: {
            fontSize: '10px'
        },
        input: {
            backgroundColor: 'red'
        }
    });
};

/**
 * Data grid filter, with:
 *  - a select to choose which kind of filter (DataGridFilterTypeMenu component)
 *  - an input text to choose the actual value with which we want to filter
 */

var DataGridTableFilter = function (_Component) {
    _inherits(DataGridTableFilter, _Component);

    function DataGridTableFilter(props) {
        _classCallCheck(this, DataGridTableFilter);

        var _this = _possibleConstructorReturn(this, (DataGridTableFilter.__proto__ || Object.getPrototypeOf(DataGridTableFilter)).call(this, props));

        _this._handleChangeValue = function (event) {
            _this.setState({
                filterValue: event.target.value
            });

            _this.props.setFilter({
                fieldName: _this.props.filter.fieldName,
                fieldValue: event.target.value
            }, _this.props.dataType);
        };

        _this._handleChangeDate = function (date) {
            _this.setState({
                filterValue: date ? date : null
            });
            _this.props.setFilter({
                fieldName: _this.props.filter.fieldName,
                fieldValue: _this._readDate(date)
            }, _this.props.dataType);
        };

        _this._handleChangeDateTime = function (date) {
            _this.setState({
                filterValue: date ? date : null
            });
            _this.props.setFilter({
                fieldName: _this.props.filter.fieldName,
                fieldValue: _this._readDateTime(date)
            }, _this.props.dataType);
        };

        _this._handleKeyPress = function (event) {
            if (event.key === 'Enter') {
                _this.props.runSearch();
            }
        };

        _this._readDate = function (date) {
            return date ? (0, _dateFns3.format)(date, _Constants2.default.DATE_FORMAT_VALUE) : '';
        };

        _this._readDateTime = function (date) {
            return date ? (0, _dateFns3.format)(date, _Constants2.default.DATETIME_FORMAT_VALUE) : '';
        };

        _this.state = {
            filterValue: props.filter.fieldValue,
            inputDisabled: false
        };
        return _this;
    }

    _createClass(DataGridTableFilter, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var filterValue = nextProps.filter && nextProps.filter.fieldValue || '';
            this.setState({ filterValue: filterValue });
        }
    }, {
        key: '_onChange',
        value: function _onChange(option) {
            // Disable input text depending on filter operator chosen
            var disableInput = option.operator === 'IS_EMPTY' || option.operator === 'NOT_EMPTY';
            this.setState({
                inputDisabled: disableInput
            });
            this.props.setFilter(option);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var classes = this.props.classes;
            var filterValue = this.state.filterValue;


            return _react2.default.createElement(
                'div',
                { className: classes.filterCell },
                _react2.default.createElement(_EAMGridFilterTypeMenu2.default, {
                    className: classes.filterTypeMenuButton,
                    filter: this.props.filter,
                    onChange: this._onChange.bind(this),
                    dataType: this.props.dataType
                }),
                this.props.dataType && this.props.dataType === 'DATE' && _react2.default.createElement(
                    _materialUiPickers.MuiPickersUtilsProvider,
                    { utils: _dateFns2.default },
                    _react2.default.createElement(_materialUiPickers.DatePicker, {
                        disabled: this.state.inputDisabled,
                        className: classes.filterInput,
                        style: { maxWidth: 'calc(' + this.props.width + 'px - 30px', fontSize: '10px' },
                        value: filterValue ? filterValue : null,
                        format: _Constants2.default.DATE_FORMAT_DISPLAY,
                        onChange: function onChange(date) {
                            return _this2._handleChangeDate(date);
                        },
                        autoOk: true,
                        clearable: true,
                        margin: 'dense',
                        animateYearScrolling: false
                        //inputProps={{style: {fontSize: '10px'}}}
                    })
                ),
                this.props.dataType && this.props.dataType === 'DATETIME' && _react2.default.createElement(
                    _materialUiPickers.MuiPickersUtilsProvider,
                    { utils: _dateFns2.default },
                    _react2.default.createElement(_materialUiPickers.DateTimePicker, {
                        disabled: this.state.inputDisabled,
                        className: classes.filterInput,
                        style: { maxWidth: 'calc(' + this.props.width + 'px - 30px' },
                        value: filterValue ? filterValue : null,
                        format: _Constants2.default.DATETIME_FORMAT_DISPLAY,
                        onChange: function onChange(date) {
                            return _this2._handleChangeDateTime(date);
                        },
                        autoOk: true,
                        clearable: true,
                        margin: 'dense',
                        animateYearScrolling: false,
                        fullWidth: true,
                        leftArrowIcon: _react2.default.createElement(
                            _core.Icon,
                            null,
                            ' keyboard_arrow_left '
                        ),
                        rightArrowIcon: _react2.default.createElement(
                            _core.Icon,
                            null,
                            ' keyboard_arrow_right '
                        ),
                        ampm: false
                        //inputProps={{style: {fontSize: '10px'}}}
                    })
                ),
                this.props.dataType && (this.props.dataType === 'VARCHAR' || this.props.dataType === 'MIXVARCHAR') && _react2.default.createElement(_TextField2.default, {
                    disabled: this.state.inputDisabled,
                    style: { maxWidth: 'calc(' + this.props.width + 'px - 30px' },
                    className: classes.filterInput,
                    value: filterValue,
                    onChange: this._handleChangeValue,
                    margin: 'dense',
                    onKeyPress: this._handleKeyPress
                    //inputProps={{style: {fontSize: '10px'}}}
                }),
                this.props.dataType && (this.props.dataType === 'DECIMAL' || this.props.dataType === 'NUMBER') && _react2.default.createElement(_TextField2.default, {
                    disabled: this.state.inputDisabled,
                    style: { maxWidth: 'calc(' + this.props.width + 'px - 30px' },
                    className: classes.filterInput,
                    value: filterValue,
                    onChange: this._handleChangeValue,
                    margin: 'dense',
                    type: 'number',
                    onKeyPress: this._handleKeyPress
                    //inputProps={{style: {fontSize: '10px'}}}
                })
            );
        }
    }]);

    return DataGridTableFilter;
}(_react.Component);

exports.default = (0, _index.withStyles)(styles)(DataGridTableFilter);