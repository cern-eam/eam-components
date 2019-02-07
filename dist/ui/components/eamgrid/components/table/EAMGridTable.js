'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EAMGridHeader = require('./EAMGridHeader');

var _EAMGridHeader2 = _interopRequireDefault(_EAMGridHeader);

var _EAMGridBody = require('./EAMGridBody');

var _EAMGridBody2 = _interopRequireDefault(_EAMGridBody);

var _EAMGridLoadingSpinner = require('../EAMGridLoadingSpinner');

var _EAMGridLoadingSpinner2 = _interopRequireDefault(_EAMGridLoadingSpinner);

var _EAMGridFooter = require('./EAMGridFooter');

var _EAMGridFooter2 = _interopRequireDefault(_EAMGridFooter);

var _index = require('@material-ui/core/styles/index');

var _EAMGridActions = require('./EAMGridActions');

var _EAMGridActions2 = _interopRequireDefault(_EAMGridActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return _extends({}, theme, {
        searchresults: {
            height: '100%',
            backgroundColor: 'white',
            overflowY: 'auto',
            border: '1px solid lightGray'
        },
        tableHeaderWrapper: {
            overflowX: 'hidden',
            borderLeft: '1px solid #d3d3d3',
            borderTop: '1px solid #d3d3d3',
            borderRight: '1px solid #d3d3d3',
            backgroundColor: '#fafafa'
        }
    });
};

var DataGridResultTable = function (_Component) {
    _inherits(DataGridResultTable, _Component);

    function DataGridResultTable() {
        _classCallCheck(this, DataGridResultTable);

        return _possibleConstructorReturn(this, (DataGridResultTable.__proto__ || Object.getPrototypeOf(DataGridResultTable)).apply(this, arguments));
    }

    _createClass(DataGridResultTable, [{
        key: '_handleScroll',
        value: function _handleScroll(event) {
            if (event.target.id === 'searchresults') {
                this.tableHeader.scrollLeft = event.target.scrollLeft;
                // add scroll bar in header if the results have a scroll bar
                // in order to keep the irght margin to right
                if (event.target.clientHeight < event.target.scrollHeight) {
                    this.tableHeader.style.overflowY = 'scroll';
                } else {
                    this.tableHeader.style.overflowY = 'visible';
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var classes = this.props.classes;

            return _react2.default.createElement(
                'div',
                { style: { height: '100%' } },
                _react2.default.createElement(_EAMGridActions2.default, {
                    selectButtons: this.props.allowRowSelection,
                    onUnselectAll: function onUnselectAll() {
                        _this2.tableBody.unselectAll();
                    },
                    onSelectAll: function onSelectAll() {
                        _this2.tableBody.selectAll();
                    }
                }),
                this.props.fields && _react2.default.createElement(
                    'div',
                    { id: 'tableHeaderWrapper',
                        className: classes.tableHeaderWrapper,
                        ref: function ref(tableHeader) {
                            _this2.tableHeader = tableHeader;
                        } },
                    _react2.default.createElement(_EAMGridHeader2.default, { fields: this.props.fields,
                        toggleSortField: this.props.toggleSortField,
                        filterVisible: this.props.filterVisible,
                        filters: this.props.filters,
                        sortFields: this.props.sortFields,
                        setFilter: this.props.setFilter,
                        runSearch: this.props.runSearch,
                        isHiddenField: this.props.isHiddenField,
                        selectColumn: this.props.allowRowSelection,
                        editColumn: this.props.onEditRow !== undefined,
                        extraColumns: this.props.extraColumns,
                        headerStyle: this.props.headerStyle
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'searchresults',
                        className: classes.searchresults,
                        style: { 'display': 'flex', 'flexDirection': 'column' },
                        ref: function ref(searchresults) {
                            _this2.searchresults = searchresults;
                        },
                        onScroll: this._handleScroll.bind(this) },
                    this.props.rows.length > 0 ? _react2.default.createElement(_EAMGridBody2.default, { fields: this.props.fields,
                        rows: this.props.rows,
                        refCallback: function refCallback(tableBody) {
                            _this2.tableBody = tableBody;
                        },
                        getCellWidth: this.props.getCellWidth,
                        loadMoreData: this.props.loadMoreData.bind(this),
                        hasMore: this.props.hasMore,
                        parentScroll: this.searchresults,
                        isloading: this.props.isloading,
                        cellRenderer: this.props.cellRenderer,
                        isHiddenField: this.props.isHiddenField,
                        onSelectRow: this.props.onSelectRow,
                        onEditRow: this.props.onEditRow,
                        isRowSelectable: this.props.isRowSelectable,
                        extraColumns: this.props.extraColumns,
                        onRowClick: this.props.onRowClick,
                        allowRowSelection: this.props.allowRowSelection,
                        handleSelectRow: this.props.handleSelectRow,
                        selectedRows: this.props.selectedRows,
                        rowStyler: this.props.rowStyler
                    }) : this.props.hasMore ? _react2.default.createElement(_EAMGridLoadingSpinner2.default, { isloading: this.props.isloading }) : _react2.default.createElement(
                        'div',
                        {
                            style: { width: "100%", padding: "20px", fontWeight: "bold", textAlign: "center" } },
                        'No result found'
                    )
                ),
                this.props.fields && _react2.default.createElement(_EAMGridFooter2.default, {
                    rows: this.props.rows,
                    totalRecords: this.props.totalRecords,
                    exportData: this.props.exportData,
                    exporterBlocked: this.props.exporterBlocked
                })
            );
        }
    }]);

    return DataGridResultTable;
}(_react.Component);

exports.default = (0, _index.withStyles)(styles)(DataGridResultTable);