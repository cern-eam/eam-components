'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require('@material-ui/core/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _index = require('@material-ui/core/styles/index');

var _mdiMaterialUi = require('mdi-material-ui');

var _ListItemIcon = require('@material-ui/core/ListItemIcon');

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = require('@material-ui/core/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles() {
    return {
        filterIconButton: {
            width: "25px",
            height: "25px",
            marginTop: "8px",
            fontSize: "16px",
            '&:hover': {
                color: "black",
                background: 'lightGray',
                boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
            }
        }
    };
};

var ITEM_HEIGHT = 48;

var options = {
    VARCHAR: [{ 'value': 'BEGINS', 'label': 'Starts with', 'icon': _react2.default.createElement(_mdiMaterialUi.RayStartArrow, null) }, { 'value': 'CONTAINS', 'label': 'Contains', 'icon': _react2.default.createElement(_mdiMaterialUi.RayVertex, null) }, { 'value': 'NOT_CONTAINS', 'label': 'Does not contain', 'icon': _react2.default.createElement(_mdiMaterialUi.Minus, null) }, { 'value': 'ENDS', 'label': 'Ends with', 'icon': _react2.default.createElement(_mdiMaterialUi.RayEndArrow, null) }, { 'value': 'EQUALS', 'label': 'Equals', 'icon': _react2.default.createElement(_mdiMaterialUi.EqualBox, null) }, { 'value': 'NOT_EQUAL', 'label': 'Does not equal', 'icon': _react2.default.createElement(_mdiMaterialUi.CodeNotEqual, null) }, { 'value': 'IS_EMPTY', 'label': 'Is empty', 'icon': _react2.default.createElement(_mdiMaterialUi.RhombusOutline, null) }, { 'value': 'NOT_EMPTY', 'label': 'Is not empty', 'icon': _react2.default.createElement(_mdiMaterialUi.Rhombus, null) }],
    DATE: [{ 'value': 'GREATER_THAN', 'label': 'Greater than', 'icon': _react2.default.createElement(_mdiMaterialUi.CodeGreaterThan, null) }, { 'value': 'EQUALS', 'label': 'Equals', 'icon': _react2.default.createElement(_mdiMaterialUi.EqualBox, null) }, { 'value': 'LESS_THAN', 'label': 'Less than', 'icon': _react2.default.createElement(_mdiMaterialUi.CodeLessThan, null) }, { 'value': 'LESS_THAN_EQUALS', 'label': 'Less than or equals', 'icon': _react2.default.createElement(_mdiMaterialUi.CodeLessThanOrEqual, null) }, { 'value': 'GREATER_THAN_EQUALS', 'label': 'Greater than or equals', 'icon': _react2.default.createElement(_mdiMaterialUi.CodeGreaterThanOrEqual, null) }, { 'value': 'IS_EMPTY', 'label': 'Is empty', 'icon': _react2.default.createElement(_mdiMaterialUi.RhombusOutline, null) }, { 'value': 'NOT_EMPTY', 'label': 'Is not empty', 'icon': _react2.default.createElement(_mdiMaterialUi.Rhombus, null) }, { 'value': 'NOT_EQUAL', 'label': 'Does not equal', 'icon': _react2.default.createElement(_mdiMaterialUi.CodeNotEqual, null) }],
    NUMBER: [{ 'value': 'EQUALS', 'label': 'Equals', 'icon': _react2.default.createElement(_mdiMaterialUi.EqualBox, null) }, { 'value': 'LESS_THAN', 'label': 'Less than', 'icon': _react2.default.createElement(_mdiMaterialUi.CodeLessThan, null) }, { 'value': 'GREATER_THAN', 'label': 'Greater than', 'icon': _react2.default.createElement(_mdiMaterialUi.CodeGreaterThan, null) }, { 'value': 'LESS_THAN_EQUALS', 'label': 'Less than or equals', 'icon': _react2.default.createElement(_mdiMaterialUi.CodeLessThanOrEqual, null) }, { 'value': 'GREATER_THAN_EQUALS', 'label': 'Greater than or equals', 'icon': _react2.default.createElement(_mdiMaterialUi.CodeGreaterThanOrEqual, null) }, { 'value': 'IS_EMPTY', 'label': 'Is empty', 'icon': _react2.default.createElement(_mdiMaterialUi.RhombusOutline, null) }, { 'value': 'NOT_EMPTY', 'label': 'Is not empty', 'icon': _react2.default.createElement(_mdiMaterialUi.Rhombus, null) }, { 'value': 'NOT_EQUAL', 'label': 'Does not equal', 'icon': _react2.default.createElement(_mdiMaterialUi.CodeNotEqual, null) }],
    CHKBOOLEAN: [{ 'value': 'INDETERMINATE', 'label': 'Indeterminate', 'icon': _react2.default.createElement(_mdiMaterialUi.CheckboxBlank, null) }, { 'value': 'SELECTED', 'label': 'Selected', 'icon': _react2.default.createElement(_mdiMaterialUi.CheckboxMarked, null) }, { 'value': 'NOT_SELECTED', 'label': 'Not selected', 'icon': _react2.default.createElement(_mdiMaterialUi.CheckboxBlankOutline, null) }]
};

var menuItems = function menuItems(dataType) {
    switch (dataType) {
        case 'DATE':
            return options['DATE'];
        case 'DATETIME':
            return options['DATE'];
        case 'DECIMAL':
            return options['NUMBER'];
        case 'NUMBER':
            return options['NUMBER'];
        case 'CHKBOOLEAN':
            return options['CHKBOOLEAN'];
        default:
            options["VARCHAR"];
    }
    return options["VARCHAR"];
};

/**
 * Select allowing the user to choose between the different kinds of filters: starts with, contains,
 * does not contain, ends with, etc.
 */

var DataGridFilterTypeMenu = function (_React$Component) {
    _inherits(DataGridFilterTypeMenu, _React$Component);

    function DataGridFilterTypeMenu(props) {
        _classCallCheck(this, DataGridFilterTypeMenu);

        // get the current operator
        var _this = _possibleConstructorReturn(this, (DataGridFilterTypeMenu.__proto__ || Object.getPrototypeOf(DataGridFilterTypeMenu)).call(this, props));

        _this.handleClick = function (event) {
            _this.setState({ anchorEl: event.currentTarget });
        };

        _this.onChange = function (option) {
            _this.setState(function (prevState) {
                return {
                    anchorEl: null,
                    option: option ? option : prevState.option
                };
            }, function () {
                _this.props.onChange({
                    fieldName: _this.props.filter.fieldName,
                    operator: _this.state.option.value
                }, _this.props.dataType);
            });
        };

        var menuItem = menuItems(_this.props.dataType).filter(function (op) {
            return op.value === _this.props.filter.operator;
        });

        _this.state = {
            anchorEl: null,
            option: menuItem.length > 0 ? menuItem[0] : menuItems(_this.props.dataType)[0]
        };
        return _this;
    }

    _createClass(DataGridFilterTypeMenu, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                classes = _props.classes,
                _props$dataType = _props.dataType,
                dataType = _props$dataType === undefined ? "VARCHAR" : _props$dataType;
            var anchorEl = this.state.anchorEl;


            return _react2.default.createElement(
                'div',
                { style: { margin: '0 auto' } },
                _react2.default.createElement(
                    _IconButton2.default,
                    {
                        className: classes.filterIconButton,
                        'aria-label': 'More',
                        'aria-owns': anchorEl ? 'long-menu' : null,
                        onClick: this.handleClick
                    },
                    this.state.option.icon
                ),
                _react2.default.createElement(
                    _Menu2.default,
                    {
                        id: 'long-menu',
                        anchorEl: this.state.anchorEl,
                        open: Boolean(anchorEl),
                        onClose: function onClose() {
                            return _this2.onChange(undefined);
                        },
                        PaperProps: {
                            style: {}
                        }
                    },
                    menuItems(dataType).map(function (option) {
                        return _react2.default.createElement(
                            _MenuItem2.default,
                            { key: option.value, selected: option === _this2.state.option, onClick: function onClick() {
                                    _this2.onChange(option);
                                } },
                            _react2.default.createElement(
                                _ListItemIcon2.default,
                                null,
                                option.icon && option.icon
                            ),
                            _react2.default.createElement(_ListItemText2.default, { inset: true, primary: option.label })
                        );
                    })
                )
            );
        }
    }]);

    return DataGridFilterTypeMenu;
}(_react2.default.Component);

exports.default = (0, _index.withStyles)(styles)(DataGridFilterTypeMenu);