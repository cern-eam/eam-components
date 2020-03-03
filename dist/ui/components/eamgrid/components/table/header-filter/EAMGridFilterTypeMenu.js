"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _index = require("@material-ui/core/styles/index");

var _mdiMaterialUi = require("mdi-material-ui");

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
    'icon': _react["default"].createElement(_mdiMaterialUi.ContainStart, null)
  }, {
    'value': 'CONTAINS',
    'label': 'Contains',
    'icon': _react["default"].createElement(_mdiMaterialUi.Contain, null)
  }, //{'value':'NOT_CONTAINS','label':'Does not contain', 'icon': <Minus/>},
  {
    'value': 'ENDS',
    'label': 'Ends with',
    'icon': _react["default"].createElement(_mdiMaterialUi.ContainEnd, null)
  }, {
    'value': '=',
    'label': 'Equals',
    'icon': _react["default"].createElement(_mdiMaterialUi.Equal, null)
  }, {
    'value': '!=',
    'label': 'Does not equal',
    'icon': _react["default"].createElement(_mdiMaterialUi.NotEqualVariant, null)
  }, {
    'value': 'IS EMPTY',
    'label': 'Is empty',
    'icon': _react["default"].createElement(_mdiMaterialUi.RhombusOutline, null)
  }, {
    'value': 'NOT EMPTY',
    'label': 'Is not empty',
    'icon': _react["default"].createElement(_mdiMaterialUi.Rhombus, null)
  }],
  DATE: [{
    'value': 'GREATER_THAN',
    'label': 'Greater than',
    'icon': _react["default"].createElement(_mdiMaterialUi.GreaterThan, null)
  }, {
    'value': '=',
    'label': 'Equals',
    'icon': _react["default"].createElement(_mdiMaterialUi.Equal, null)
  }, {
    'value': 'LESS_THAN',
    'label': 'Less than',
    'icon': _react["default"].createElement(_mdiMaterialUi.LessThan, null)
  }, {
    'value': 'LESS_THAN_EQUALS',
    'label': 'Less than or equals',
    'icon': _react["default"].createElement(_mdiMaterialUi.LessThanOrEqual, null)
  }, {
    'value': 'GREATER_THAN_EQUALS',
    'label': 'Greater than or equals',
    'icon': _react["default"].createElement(_mdiMaterialUi.GreaterThan, null)
  }, {
    'value': 'IS EMPTY',
    'label': 'Is empty',
    'icon': _react["default"].createElement(_mdiMaterialUi.RhombusOutline, null)
  }, {
    'value': 'NOT EMPTY',
    'label': 'Is not empty',
    'icon': _react["default"].createElement(_mdiMaterialUi.Rhombus, null)
  }, {
    'value': '!=',
    'label': 'Does not equal',
    'icon': _react["default"].createElement(_mdiMaterialUi.NotEqualVariant, null)
  }],
  NUMBER: [{
    'value': '=',
    'label': 'Equals',
    'icon': _react["default"].createElement(_mdiMaterialUi.Equal, null)
  }, {
    'value': 'LESS_THAN',
    'label': 'Less than',
    'icon': _react["default"].createElement(_mdiMaterialUi.LessThan, null)
  }, {
    'value': 'GREATER_THAN',
    'label': 'Greater than',
    'icon': _react["default"].createElement(_mdiMaterialUi.GreaterThan, null)
  }, {
    'value': 'LESS_THAN_EQUALS',
    'label': 'Less than or equals',
    'icon': _react["default"].createElement(_mdiMaterialUi.LessThanOrEqual, null)
  }, {
    'value': 'GREATER_THAN_EQUALS',
    'label': 'Greater than or equals',
    'icon': _react["default"].createElement(_mdiMaterialUi.GreaterThanOrEqual, null)
  }, {
    'value': 'IS EMPTY',
    'label': 'Is empty',
    'icon': _react["default"].createElement(_mdiMaterialUi.RhombusOutline, null)
  }, {
    'value': 'NOT EMPTY',
    'label': 'Is not empty',
    'icon': _react["default"].createElement(_mdiMaterialUi.Rhombus, null)
  }, {
    'value': '!=',
    'label': 'Does not equal',
    'icon': _react["default"].createElement(_mdiMaterialUi.NotEqualVariant, null)
  }],
  CHKBOOLEAN: [{
    'value': 'INDETERMINATE',
    'label': 'Either Selected or Not Selected',
    'icon': _react["default"].createElement(_mdiMaterialUi.CheckboxIntermediate, null)
  }, {
    'value': '=',
    'label': 'Selected',
    'icon': _react["default"].createElement(_mdiMaterialUi.CheckboxMarkedOutline, null)
  }, {
    'value': '=',
    'label': 'Not selected',
    'icon': _react["default"].createElement(_mdiMaterialUi.CheckboxBlankOutline, null)
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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataGridFilterTypeMenu).call(this, props)); // get the current operator

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
      return _react["default"].createElement("div", {
        style: this.filterTypeMenuButtonStyle()
      }, _react["default"].createElement("div", {
        className: classes.filterIconButton,
        "aria-label": "More",
        "aria-owns": anchorEl ? 'long-menu' : null,
        onClick: this.handleClick
      }, this.state.option.icon), _react["default"].createElement(_Menu["default"], {
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
        return _react["default"].createElement(_MenuItem["default"], {
          key: option.value,
          selected: option === _this2.state.option,
          onClick: function onClick() {
            _this2.onChange(option);
          }
        }, _react["default"].createElement(_ListItemIcon["default"], null, option.icon && option.icon), _react["default"].createElement(_ListItemText["default"], {
          inset: true,
          primary: option.label
        }));
      })));
    }
  }]);

  return DataGridFilterTypeMenu;
}(_react["default"].Component);

var _default = (0, _index.withStyles)(styles)(DataGridFilterTypeMenu);

exports["default"] = _default;