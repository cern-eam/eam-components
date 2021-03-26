"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _EAMGridFilterTypeMenu = _interopRequireDefault(require("./EAMGridFilterTypeMenu"));

var _index = require("@material-ui/core/styles/index");

var _pickers = require("@material-ui/pickers");

var _dateFns = _interopRequireDefault(require("@date-io/date-fns"));

var _core = require("@material-ui/core");

var _dateFns2 = require("date-fns");

var _EAMGridFilterInput = _interopRequireDefault(require("./EAMGridFilterInput"));

var _Constants = _interopRequireDefault(require("../../../../../../enums/Constants"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var styles = {
  filterCell: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5
  },
  filterInput: {
    width: "100%",
    backgroundColor: "#FFFFFF"
  },
  filterInnerInput: {
    fontSize: '10px'
  },
  input: {
    backgroundColor: 'red'
  }
};
/**
 * Data grid filter, with:
 *  - a select to choose which kind of filter (DataGridFilterTypeMenu component)
 *  - an input text to choose the actual value with which we want to filter
 */

var DataGridTableFilter = /*#__PURE__*/function (_Component) {
  _inherits(DataGridTableFilter, _Component);

  var _super = _createSuper(DataGridTableFilter);

  function DataGridTableFilter(props) {
    var _this;

    _classCallCheck(this, DataGridTableFilter);

    _this = _super.call(this, props);

    _this._handleChangeValue = function (event) {
      _this.setState({
        filterValue: event.target.value
      });

      _this.props.setFilter({
        fieldName: _this.props.filter.fieldName,
        fieldValue: event.target.value
      }, _this.props.dataType);
    };

    _this._handleChangeDate = function (date) {
      _this.setState({
        filterValue: date ? date : null
      });

      _this.props.setFilter({
        fieldName: _this.props.filter.fieldName,
        fieldValue: _this._readDate(date)
      }, _this.props.dataType);
    };

    _this._handleChangeDateTime = function (date) {
      _this.setState({
        filterValue: date ? date : null
      });

      _this.props.setFilter({
        fieldName: _this.props.filter.fieldName,
        fieldValue: _this._readDateTime(date)
      }, _this.props.dataType);
    };

    _this._handleKeyPress = function (event) {
      if (event.key === 'Enter') {
        _this.props.runSearch();
      }
    };

    _this._readDate = function (date) {
      return date ? (0, _dateFns2.format)(date, _Constants["default"].DATE_FORMAT_VALUE) : '';
    };

    _this._readDateTime = function (date) {
      return date ? (0, _dateFns2.format)(date, _Constants["default"].DATETIME_FORMAT_VALUE) : '';
    };

    _this.state = {
      filterValue: props.filter.fieldValue,
      inputDisabled: false
    };
    return _this;
  }

  _createClass(DataGridTableFilter, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var filterValue = nextProps.filter && nextProps.filter.fieldValue || '';
      this.setState({
        filterValue: filterValue
      });
    }
  }, {
    key: "_onChange",
    value: function _onChange(option) {
      // Disable input text depending on filter operator chosen
      var disableInput = option.operator === 'IS EMPTY' || option.operator === 'NOT EMPTY';
      this.setState({
        inputDisabled: disableInput
      });
      this.props.setFilter(option);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          dataType = _this$props.dataType,
          filter = _this$props.filter,
          width = _this$props.width;
      var filterValue = this.state.filterValue;
      var dataTypes = ['VARCHAR', 'MIXVARCHAR', 'DECIMAL', 'NUMBER', 'DATETIME', 'DATE'];
      var tooltips = {
        'DATE': _Constants["default"].DATE_FORMAT_DISPLAY.toUpperCase(),
        'DATETIME': _Constants["default"].DATETIME_FORMAT_DISPLAY.toUpperCase()
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.filterCell
      }, /*#__PURE__*/_react["default"].createElement(_EAMGridFilterTypeMenu["default"], {
        filter: filter,
        onChange: this._onChange.bind(this),
        dataType: dataType
      }), dataType && dataTypes.includes(dataType) && /*#__PURE__*/_react["default"].createElement(TooltipWrapper, {
        text: tooltips[dataType],
        enabled: tooltips[dataType]
      }, function (_ref) {
        var openTooltip = _ref.openTooltip;
        return /*#__PURE__*/_react["default"].createElement(_EAMGridFilterInput["default"], {
          onClick: openTooltip,
          disabled: _this2.state.inputDisabled,
          width: width,
          value: filterValue,
          onChange: _this2._handleChangeValue,
          onKeyPress: _this2._handleKeyPress,
          dataType: dataType
        });
      }));
    }
  }]);

  return DataGridTableFilter;
}(_react.Component);

var CustomTooltip = (0, _index.withStyles)(function () {
  return {
    tooltip: {
      fontSize: 'small'
    }
  };
})(_Tooltip["default"]);

var TooltipWrapper = function TooltipWrapper(props) {
  var children = props.children,
      text = props.text,
      enabled = props.enabled;

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var closeTooltip = function closeTooltip() {
    return setOpen(false);
  };

  var openTooltip = function openTooltip() {
    return setOpen(true);
  };

  return enabled ? /*#__PURE__*/_react["default"].createElement(_ClickAwayListener["default"], {
    onClickAway: closeTooltip
  }, /*#__PURE__*/_react["default"].createElement(CustomTooltip, {
    onClose: closeTooltip,
    open: open,
    disableFocusListener: true,
    disableHoverListener: true,
    disableTouchListener: true,
    title: text,
    arrow: true
  }, children({
    openTooltip: openTooltip
  }))) : children({});
};

var _default = (0, _index.withStyles)(styles)(DataGridTableFilter);

exports["default"] = _default;