function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import DataGridFilter from './header-filter/EAMGridFilter';
import withStyles from '@mui/styles/withStyles';
import Tooltip from '@mui/material/Tooltip';
import EAMGridHeaderCell from './EAMGridHeaderCell';
var styles = {
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
};
var DataGridTableHeader = /*#__PURE__*/function (_Component) {
  function DataGridTableHeader() {
    _classCallCheck(this, DataGridTableHeader);
    return _callSuper(this, DataGridTableHeader, arguments);
  }
  _inherits(DataGridTableHeader, _Component);
  return _createClass(DataGridTableHeader, [{
    key: "_getFilteredField",
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
    key: "_getSortedField",
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
    key: "render",
    value: function render() {
      var _this = this;
      var classes = this.props.classes;
      return /*#__PURE__*/React.createElement("div", {
        className: classes.tableHeader
      }, this.props.selectColumn && /*#__PURE__*/React.createElement(EAMGridHeaderCell, null, /*#__PURE__*/React.createElement(Tooltip, {
        title: "Choose"
      }, /*#__PURE__*/React.createElement("div", {
        className: this.props.headerStyle
      }, "Choose"))), this.props.editColumn && /*#__PURE__*/React.createElement(EAMGridHeaderCell, null, /*#__PURE__*/React.createElement(Tooltip, {
        title: "Edit"
      }, /*#__PURE__*/React.createElement("div", {
        className: this.props.headerStyle
      }, "Edit"))), this.props.extraColumns && this.props.extraColumns.filter(function (extraColumn) {
        return extraColumn.position !== 'after';
      }).map(function (extraColumn, index) {
        return /*#__PURE__*/React.createElement(EAMGridHeaderCell, {
          key: index,
          style: {
            'width': extraColumn.width || '20px',
            'minWidth': extraColumn.width || '20px'
          }
        }, extraColumn.headerLabel);
      }), this.props.fields && this.props.fields.map(function (field) {
        var fieldsorting = _this._getSortedField(field.name);
        return field.order > 0 && !_this.props.isHiddenField(field.name) && /*#__PURE__*/React.createElement("div", {
          key: field.id,
          className: classes.headerCellContainer,
          style: {
            'width': "".concat(field.width, "px"),
            'minWidth': "".concat(field.width, "px")
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: classes.headerCell,
          onClick: function onClick() {
            _this.props.toggleSortField({
              'sortBy': field.name
            });
          }
        }, /*#__PURE__*/React.createElement("div", {
          title: field.label,
          className: _this.props.headerStyle
        }, field.label), /*#__PURE__*/React.createElement("div", {
          className: classes.arrowicon
        }, fieldsorting.sortType === 'DESC' && /*#__PURE__*/React.createElement(ArrowDownward, {
          className: classes.arrowicon
        }), fieldsorting.sortType === 'ASC' && /*#__PURE__*/React.createElement(ArrowUpward, {
          className: classes.arrowicon
        }))), _this.props.filterVisible && /*#__PURE__*/React.createElement(DataGridFilter, {
          key: "filter-".concat(field.id),
          filter: _this._getFilteredField(field.name),
          setFilter: _this.props.setFilter,
          runSearch: _this.props.runSearch,
          width: field.width,
          dataType: field.dataType
        }));
      }), this.props.extraColumns && this.props.extraColumns.filter(function (extraColumn) {
        return extraColumn.position === 'after';
      }).map(function (extraColumn, index) {
        return /*#__PURE__*/React.createElement(EAMGridHeaderCell, {
          key: index,
          style: {
            'width': extraColumn.width || '20px',
            'minWidth': extraColumn.width || '20px'
          }
        }, extraColumn.headerLabel);
      }));
    }
  }]);
}(Component);
export default withStyles(styles)(DataGridTableHeader);