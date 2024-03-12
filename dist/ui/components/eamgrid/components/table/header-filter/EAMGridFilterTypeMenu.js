function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import withStyles from '@mui/styles/withStyles';
import { Minus, ContainStart, ContainEnd, Contain, CheckboxMarkedOutline, GreaterThan, GreaterThanOrEqual, LessThan, LessThanOrEqual, Equal, NotEqualVariant, CheckboxBlankOutline, CheckboxIntermediate, Rhombus, RhombusOutline } from 'mdi-material-ui';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
var styles = function styles() {
  return {
    filterIconButton: {
      width: "25px",
      color: "#b6b6b6",
      display: "flex",
      alignItems: "center"
    }
  };
};
var ITEM_HEIGHT = 48;
var options = {
  VARCHAR: [{
    'value': 'BEGINS',
    'label': 'Starts with',
    'icon': /*#__PURE__*/React.createElement(ContainStart, null)
  }, {
    'value': 'CONTAINS',
    'label': 'Contains',
    'icon': /*#__PURE__*/React.createElement(Contain, null)
  },
  //{'value':'NOT_CONTAINS','label':'Does not contain', 'icon': <Minus/>},
  {
    'value': 'ENDS',
    'label': 'Ends with',
    'icon': /*#__PURE__*/React.createElement(ContainEnd, null)
  }, {
    'value': '=',
    'label': 'Equals',
    'icon': /*#__PURE__*/React.createElement(Equal, null)
  }, {
    'value': '!=',
    'label': 'Does not equal',
    'icon': /*#__PURE__*/React.createElement(NotEqualVariant, null)
  }, {
    'value': 'IS EMPTY',
    'label': 'Is empty',
    'icon': /*#__PURE__*/React.createElement(RhombusOutline, null)
  }, {
    'value': 'NOT EMPTY',
    'label': 'Is not empty',
    'icon': /*#__PURE__*/React.createElement(Rhombus, null)
  }],
  DATE: [{
    'value': 'GREATER_THAN',
    'label': 'Greater than',
    'icon': /*#__PURE__*/React.createElement(GreaterThan, null)
  }, {
    'value': '=',
    'label': 'Equals',
    'icon': /*#__PURE__*/React.createElement(Equal, null)
  }, {
    'value': 'LESS_THAN',
    'label': 'Less than',
    'icon': /*#__PURE__*/React.createElement(LessThan, null)
  }, {
    'value': 'LESS_THAN_EQUALS',
    'label': 'Less than or equals',
    'icon': /*#__PURE__*/React.createElement(LessThanOrEqual, null)
  }, {
    'value': 'GREATER_THAN_EQUALS',
    'label': 'Greater than or equals',
    'icon': /*#__PURE__*/React.createElement(GreaterThan, null)
  }, {
    'value': 'IS EMPTY',
    'label': 'Is empty',
    'icon': /*#__PURE__*/React.createElement(RhombusOutline, null)
  }, {
    'value': 'NOT EMPTY',
    'label': 'Is not empty',
    'icon': /*#__PURE__*/React.createElement(Rhombus, null)
  }, {
    'value': '!=',
    'label': 'Does not equal',
    'icon': /*#__PURE__*/React.createElement(NotEqualVariant, null)
  }],
  NUMBER: [{
    'value': '=',
    'label': 'Equals',
    'icon': /*#__PURE__*/React.createElement(Equal, null)
  }, {
    'value': 'LESS_THAN',
    'label': 'Less than',
    'icon': /*#__PURE__*/React.createElement(LessThan, null)
  }, {
    'value': 'GREATER_THAN',
    'label': 'Greater than',
    'icon': /*#__PURE__*/React.createElement(GreaterThan, null)
  }, {
    'value': 'LESS_THAN_EQUALS',
    'label': 'Less than or equals',
    'icon': /*#__PURE__*/React.createElement(LessThanOrEqual, null)
  }, {
    'value': 'GREATER_THAN_EQUALS',
    'label': 'Greater than or equals',
    'icon': /*#__PURE__*/React.createElement(GreaterThanOrEqual, null)
  }, {
    'value': 'IS EMPTY',
    'label': 'Is empty',
    'icon': /*#__PURE__*/React.createElement(RhombusOutline, null)
  }, {
    'value': 'NOT EMPTY',
    'label': 'Is not empty',
    'icon': /*#__PURE__*/React.createElement(Rhombus, null)
  }, {
    'value': '!=',
    'label': 'Does not equal',
    'icon': /*#__PURE__*/React.createElement(NotEqualVariant, null)
  }],
  CHKBOOLEAN: [{
    'value': 'INDETERMINATE',
    'label': 'Either Selected or Not Selected',
    'icon': /*#__PURE__*/React.createElement(CheckboxIntermediate, null)
  }, {
    'value': '=',
    'label': 'Selected',
    'icon': /*#__PURE__*/React.createElement(CheckboxMarkedOutline, null)
  }, {
    'value': '=',
    'label': 'Not selected',
    'icon': /*#__PURE__*/React.createElement(CheckboxBlankOutline, null)
  }]
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
var DataGridFilterTypeMenu = /*#__PURE__*/function (_React$Component) {
  _inherits(DataGridFilterTypeMenu, _React$Component);
  function DataGridFilterTypeMenu(props) {
    var _this;
    _classCallCheck(this, DataGridFilterTypeMenu);
    _this = _callSuper(this, DataGridFilterTypeMenu, [props]);

    // get the current operator
    _this.filterTypeMenuButtonStyle = function () {
      var style = {
        width: 24,
        height: 29,
        display: "flex",
        alignItems: "center"
      };
      if (_this.props.dataType !== 'CHKBOOLEAN') {
        style = _objectSpread({}, style, {
          backgroundColor: "white",
          paddingLeft: 3,
          borderTopLeftRadius: 3,
          borderBottomLeftRadius: 3,
          borderTop: "1px solid rgb(206, 212, 218)",
          borderLeft: "1px solid rgb(206, 212, 218)",
          borderBottom: "1px solid rgb(206, 212, 218)"
        });
      }
      return style;
    };
    _this.handleClick = function (event) {
      _this.setState({
        anchorEl: event.currentTarget
      });
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
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        classes = _this$props.classes,
        _this$props$dataType = _this$props.dataType,
        dataType = _this$props$dataType === void 0 ? "VARCHAR" : _this$props$dataType;
      var anchorEl = this.state.anchorEl;
      return /*#__PURE__*/React.createElement("div", {
        style: this.filterTypeMenuButtonStyle()
      }, /*#__PURE__*/React.createElement("div", {
        className: classes.filterIconButton,
        "aria-label": "More",
        "aria-owns": anchorEl ? 'long-menu' : null,
        onClick: this.handleClick
      }, this.state.option.icon), /*#__PURE__*/React.createElement(Menu, {
        id: "long-menu",
        anchorEl: this.state.anchorEl,
        open: Boolean(anchorEl),
        onClose: function onClose() {
          return _this2.onChange(undefined);
        },
        PaperProps: {
          style: {}
        }
      }, menuItems(dataType).map(function (option) {
        return /*#__PURE__*/React.createElement(MenuItem, {
          key: option.value,
          selected: option === _this2.state.option,
          onClick: function onClick() {
            _this2.onChange(option);
          }
        }, /*#__PURE__*/React.createElement(ListItemIcon, null, option.icon && option.icon), /*#__PURE__*/React.createElement(ListItemText, {
          inset: true,
          primary: option.label
        }));
      })));
    }
  }]);
  return DataGridFilterTypeMenu;
}(React.Component);
export default withStyles(styles)(DataGridFilterTypeMenu);