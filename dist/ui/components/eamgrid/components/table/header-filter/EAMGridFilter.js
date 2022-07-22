function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  return DataGridTableFilter;
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