function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React, { Component } from 'react';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import DataGridFilter from './header-filter/EAMGridFilter';
import { withStyles } from "@material-ui/core/styles/index";
import Tooltip from '@material-ui/core/Tooltip';
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
  _inherits(DataGridTableHeader, _Component);

  var _super = _createSuper(DataGridTableHeader);

  function DataGridTableHeader() {
    _classCallCheck(this, DataGridTableHeader);

    return _super.apply(this, arguments);
  }

  _createClass(DataGridTableHeader, [{
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

  return DataGridTableHeader;
}(Component);

export default withStyles(styles)(DataGridTableHeader);