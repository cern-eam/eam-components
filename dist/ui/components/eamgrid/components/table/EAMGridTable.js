function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
import React, { Component } from 'react';
import DataGridTableHeader from './EAMGridHeader';
import DataGridTableBody from './EAMGridBody';
import DataGridLoadingSpinner from '../EAMGridLoadingSpinner';
import DataGridFooter from './EAMGridFooter';
import withStyles from '@mui/styles/withStyles';
import DataGridActions from './EAMGridActions';
var styles = {
  searchresults: {
    height: '100%',
    backgroundColor: 'white',
    overflowY: 'auto',
    border: '1px solid lightGray'
  },
  tableHeaderWrapper: {
    overflowX: 'hidden',
    borderLeft: '1px solid #d3d3d3',
    borderRight: '1px solid #d3d3d3',
    backgroundColor: '#fafafa'
  },
  headerStyle: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }
};
var DataGridResultTable = /*#__PURE__*/function (_Component) {
  _inherits(DataGridResultTable, _Component);
  function DataGridResultTable() {
    _classCallCheck(this, DataGridResultTable);
    return _callSuper(this, DataGridResultTable, arguments);
  }
  _createClass(DataGridResultTable, [{
    key: "_handleScroll",
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
    key: "render",
    value: function render() {
      var _this = this;
      var classes = this.props.classes;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          flex: "1 0",
          minHeight: 0
        }
      }, /*#__PURE__*/React.createElement(DataGridActions, {
        selectButtons: this.props.allowRowSelection,
        onUnselectAll: function onUnselectAll() {
          _this.tableBody.unselectAll();
        },
        onSelectAll: function onSelectAll() {
          _this.tableBody.selectAll();
        }
      }), this.props.fields && /*#__PURE__*/React.createElement("div", {
        id: "tableHeaderWrapper",
        className: classes.tableHeaderWrapper,
        ref: function ref(tableHeader) {
          _this.tableHeader = tableHeader;
        }
      }, /*#__PURE__*/React.createElement(DataGridTableHeader, {
        fields: this.props.fields,
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
        headerStyle: classes.headerStyle
      })), /*#__PURE__*/React.createElement("div", {
        id: "searchresults",
        className: classes.searchresults,
        style: {
          'display': 'flex',
          'flexDirection': 'column'
        },
        ref: function ref(searchresults) {
          _this.searchresults = searchresults;
        },
        onScroll: this._handleScroll.bind(this)
      }, this.props.rows.length > 0 ? /*#__PURE__*/React.createElement(DataGridTableBody, {
        fields: this.props.fields,
        rows: this.props.rows,
        refCallback: function refCallback(tableBody) {
          _this.tableBody = tableBody;
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
      }) : this.props.hasMore ? /*#__PURE__*/React.createElement(DataGridLoadingSpinner, {
        isloading: this.props.isloading
      }) : /*#__PURE__*/React.createElement("div", {
        style: {
          width: "100%",
          padding: "20px",
          fontWeight: "bold",
          textAlign: "center"
        }
      }, "No result found")), this.props.fields && /*#__PURE__*/React.createElement(DataGridFooter, {
        rows: this.props.rows,
        totalRecords: this.props.totalRecords,
        exportData: this.props.exportData,
        exporterBlocked: this.props.exporterBlocked
      }));
    }
  }]);
  return DataGridResultTable;
}(Component);
export default withStyles(styles)(DataGridResultTable);