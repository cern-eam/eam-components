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
  _inherits(DataGridSelectDataSpy, _Component);

  var _super = _createSuper(DataGridSelectDataSpy);

  function DataGridSelectDataSpy() {
    _classCallCheck(this, DataGridSelectDataSpy);

    return _super.apply(this, arguments);
  }

  _createClass(DataGridSelectDataSpy, [{
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

  return DataGridSelectDataSpy;
}(Component);

export default withStyles(styles)(DataGridSelectDataSpy);