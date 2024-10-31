function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
import TextField from '@mui/material/TextField';
import DataGridFilterTypeMenu from './EAMGridFilterTypeMenu';
import withStyles from '@mui/styles/withStyles';
import { DatePicker, DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Icon } from '@mui/material';
import { format } from 'date-fns';
import EAMGridFilterInput from './EAMGridFilterInput';
import Constants from '../../../../../../enums/Constants';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
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
  function DataGridTableFilter(props) {
    var _this;
    _classCallCheck(this, DataGridTableFilter);
    _this = _callSuper(this, DataGridTableFilter, [props]);
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
      return date ? format(date, Constants.DATE_FORMAT_VALUE) : '';
    };
    _this._readDateTime = function (date) {
      return date ? format(date, Constants.DATETIME_FORMAT_VALUE) : '';
    };
    _this.state = {
      filterValue: props.filter.fieldValue,
      inputDisabled: false
    };
    return _this;
  }
  _inherits(DataGridTableFilter, _Component);
  return _createClass(DataGridTableFilter, [{
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
        'DATE': Constants.DATE_FORMAT_DISPLAY.toUpperCase(),
        'DATETIME': Constants.DATETIME_FORMAT_DISPLAY.toUpperCase()
      };
      return /*#__PURE__*/React.createElement("div", {
        className: classes.filterCell
      }, /*#__PURE__*/React.createElement(DataGridFilterTypeMenu, {
        filter: filter,
        onChange: this._onChange.bind(this),
        dataType: dataType
      }), dataType && dataTypes.includes(dataType) && /*#__PURE__*/React.createElement(TooltipWrapper, {
        text: tooltips[dataType],
        enabled: tooltips[dataType]
      }, function (_ref) {
        var openTooltip = _ref.openTooltip;
        return /*#__PURE__*/React.createElement(EAMGridFilterInput, {
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
}(Component);
var CustomTooltip = withStyles(function () {
  return {
    tooltip: {
      fontSize: 'small'
    }
  };
})(Tooltip);
var TooltipWrapper = function TooltipWrapper(props) {
  var children = props.children,
    text = props.text,
    enabled = props.enabled;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var closeTooltip = function closeTooltip() {
    return setOpen(false);
  };
  var openTooltip = function openTooltip() {
    return setOpen(true);
  };
  return enabled ? /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: closeTooltip
  }, /*#__PURE__*/React.createElement(CustomTooltip, {
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
export default withStyles(styles)(DataGridTableFilter);