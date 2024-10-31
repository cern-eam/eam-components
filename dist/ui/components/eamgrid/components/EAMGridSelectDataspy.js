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
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, MenuItem, FormControl } from '@mui/material';
import Select from '@mui/material/Select';
import withStyles from '@mui/styles/withStyles';
import classNames from 'classnames';
import FilterOutline from 'mdi-material-ui/FilterOutline';
import FilterRemoveOutline from 'mdi-material-ui/FilterRemoveOutline';
var styles = {
  mainPanelStyle: {
    backgroundColor: '#fafafa',
    padding: '10px',
    border: '1px solid lightGray'
  },
  formStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  dataspyFormStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  fetchDataButton: {
    padding: "4px 16px"
  },
  toggleFilterButton: {
    marginLeft: "10px",
    marginRight: "10px",
    boxShadow: "none",
    backgroundColor: '#fafafa'
  },
  formItem: {
    flex: "0 0 auto"
  },
  selectDataspyInput: {
    backgroundColor: '#fafafa',
    marginLeft: "10px"
  },
  dataspyLabel: {
    marginTop: -2,
    fontSize: 16
  },
  root: {
    margin: "0 auto",
    width: "100%"
  },
  '@media (max-width: 500px)': {
    cleanFiltersButton: {
      display: "none"
    },
    dataspyLabel: {
      display: "none"
    }
  }
};
var DataGridSelectDataSpy = /*#__PURE__*/function (_Component) {
  function DataGridSelectDataSpy() {
    _classCallCheck(this, DataGridSelectDataSpy);
    return _callSuper(this, DataGridSelectDataSpy, arguments);
  }
  _inherits(DataGridSelectDataSpy, _Component);
  return _createClass(DataGridSelectDataSpy, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return /*#__PURE__*/React.createElement("div", {
        className: classes.mainPanelStyle
      }, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement(FormControl, {
        className: classes.root
      }, /*#__PURE__*/React.createElement("div", {
        className: classes.formStyle
      }, /*#__PURE__*/React.createElement("div", {
        className: classes.dataspyFormStyle
      }, /*#__PURE__*/React.createElement("div", {
        className: classNames(classes.formItem, classes.dataspyLabel)
      }, "Dataspy:"), /*#__PURE__*/React.createElement(Select, {
        className: classNames(classes.formItem, classes.selectDataspyInput),
        value: this.props.dataSpy,
        onChange: this.props.handleChangeDataSpy,
        inputProps: {
          name: 'dataspy',
          id: 'dataspy-select'
        },
        input: /*#__PURE__*/React.createElement(InputBase, null)
      }, this.props.listOfDataSpy && this.props.listOfDataSpy.map(function (dataspy) {
        return /*#__PURE__*/React.createElement(MenuItem, {
          key: dataspy.code,
          value: dataspy.code
        }, dataspy.label);
      })), /*#__PURE__*/React.createElement(Button, {
        variant: "outlined",
        className: classNames(classes.formItem, classes.toggleFilterButton),
        onClick: this.props.toggleFilter
      }, this.props.filterVisible ? 'HIDE FILTERS' : 'SHOW FILTERS'), this.props.filterVisible && /*#__PURE__*/React.createElement(Button, {
        variant: "outlined",
        className: classes.cleanFiltersButton,
        onClick: this.props.clearFilters
      }, "Clean filters")), /*#__PURE__*/React.createElement(Button, {
        variant: "outlined",
        color: "primary",
        className: classes.fetchDataButton,
        onClick: this.props.runSearch
      }, /*#__PURE__*/React.createElement(SearchIcon, null), "SEARCH")))));
    }
  }]);
}(Component);
export default withStyles(styles)(DataGridSelectDataSpy);