'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArrowDownward = require('@material-ui/icons/ArrowDownward');

var _ArrowDownward2 = _interopRequireDefault(_ArrowDownward);

var _ArrowUpward = require('@material-ui/icons/ArrowUpward');

var _ArrowUpward2 = _interopRequireDefault(_ArrowUpward);

var _EAMGridFilter = require('./header-filter/EAMGridFilter');

var _EAMGridFilter2 = _interopRequireDefault(_EAMGridFilter);

var _index = require('@material-ui/core/styles/index');

var _Tooltip = require('@material-ui/core/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _EAMGridHeaderCell = require('./EAMGridHeaderCell');

var _EAMGridHeaderCell2 = _interopRequireDefault(_EAMGridHeaderCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return _extends({}, theme, {
        tableHeader: {
            width: "100%",
            display: "flex",
            flex: "0 0 auto",
            fontWeight: "bold",
            fontSize: "14px"
        },
        headerCellContainer: {
            display: "flex",
            flexDirection: "column",
            borderRight: "1px solid #d3d3d3",
            boxSizing: "border-box",
            "-moz-box-sizing": "border-box",
            "-webkit-box-sizing": "border-box",
            overflow: "hidden",
            paddingBottom: 10,
            paddingTop: 5
        },
        headerCell: {
            width: "100%",
            minHeight: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#a5a5a5",
            paddingLeft: "5px",
            boxSizing: "border-box",
            "-moz-box-sizing": "border-box",
            "-webkit-box-sizing": "border-box"
        },
        arrowicon: {
            width: "12px",
            height: "24px",
            fontWeight: "bold"
        }
    });
};

var DataGridTableHeader = function (_Component) {
    _inherits(DataGridTableHeader, _Component);

    function DataGridTableHeader() {
        _classCallCheck(this, DataGridTableHeader);

        return _possibleConstructorReturn(this, (DataGridTableHeader.__proto__ || Object.getPrototypeOf(DataGridTableHeader)).apply(this, arguments));
    }

    _createClass(DataGridTableHeader, [{
        key: '_getFilteredField',
        value: function _getFilteredField(fieldname) {
            var fieldFilter = this.props.filters.filter(function (f) {
                return f.fieldName === fieldname;
            });

            if (fieldFilter.length === 0) {
                return {
                    fieldName: fieldname,
                    fieldValue: '',
                    operator: 'BEGINS'
                };
            } else return fieldFilter[0];
        }
    }, {
        key: '_getSortedField',
        value: function _getSortedField(fieldname) {
            var fieldSorting = this.props.sortFields.filter(function (s) {
                return s.sortBy === fieldname;
            });

            if (fieldSorting.length === 0) {
                return {
                    sortBy: fieldname,
                    sortType: undefined
                };
            } else return fieldSorting[0];
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var classes = this.props.classes;


            return _react2.default.createElement(
                'div',
                { className: classes.tableHeader },
                this.props.selectColumn && _react2.default.createElement(
                    _EAMGridHeaderCell2.default,
                    null,
                    _react2.default.createElement(
                        _Tooltip2.default,
                        { title: 'Choose' },
                        _react2.default.createElement(
                            'div',
                            { className: this.props.headerStyle },
                            'Choose'
                        )
                    )
                ),
                this.props.editColumn && _react2.default.createElement(
                    _EAMGridHeaderCell2.default,
                    null,
                    _react2.default.createElement(
                        _Tooltip2.default,
                        { title: 'Edit' },
                        _react2.default.createElement(
                            'div',
                            { className: this.props.headerStyle },
                            'Edit'
                        )
                    )
                ),
                this.props.extraColumns && this.props.extraColumns.filter(function (extraColumn) {
                    return extraColumn.position !== 'after';
                }).map(function (extraColumn, index) {
                    return _react2.default.createElement(
                        _EAMGridHeaderCell2.default,
                        { key: index, style: { 'width': extraColumn.width || '20px', 'minWidth': extraColumn.width || '20px' } },
                        extraColumn.headerLabel
                    );
                }),
                this.props.fields && this.props.fields.map(function (field) {
                    var fieldsorting = _this2._getSortedField(field.name);

                    return field.order > 0 && !_this2.props.isHiddenField(field.name) && _react2.default.createElement(
                        'div',
                        { key: field.id,
                            className: classes.headerCellContainer,
                            style: { 'width': field.width + 'px', 'minWidth': field.width + 'px' } },
                        _react2.default.createElement(
                            'div',
                            { className: classes.headerCell,
                                onClick: function onClick() {
                                    _this2.props.toggleSortField({
                                        'sortBy': field.name
                                    });
                                }
                            },
                            _react2.default.createElement(
                                'div',
                                { title: field.label, className: _this2.props.headerStyle },
                                field.label
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: classes.arrowicon },
                                fieldsorting.sortType === 'DESC' && _react2.default.createElement(_ArrowDownward2.default, { className: classes.arrowicon }),
                                fieldsorting.sortType === 'ASC' && _react2.default.createElement(_ArrowUpward2.default, { className: classes.arrowicon })
                            )
                        ),
                        _this2.props.filterVisible && _react2.default.createElement(_EAMGridFilter2.default, { key: 'filter-' + field.id,
                            filter: _this2._getFilteredField(field.name),
                            setFilter: _this2.props.setFilter,
                            runSearch: _this2.props.runSearch,
                            width: field.width,
                            dataType: field.dataType
                        })
                    );
                }),
                this.props.extraColumns && this.props.extraColumns.filter(function (extraColumn) {
                    return extraColumn.position === 'after';
                }).map(function (extraColumn, index) {
                    return _react2.default.createElement(
                        _EAMGridHeaderCell2.default,
                        { key: index, style: { 'width': extraColumn.width || '20px', 'minWidth': extraColumn.width || '20px' } },
                        extraColumn.headerLabel
                    );
                })
            );
        }
    }]);

    return DataGridTableHeader;
}(_react.Component);

exports.default = (0, _index.withStyles)(styles)(DataGridTableHeader);