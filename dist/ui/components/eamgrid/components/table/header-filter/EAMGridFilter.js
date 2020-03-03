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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

  function DataGridTableFilter(props) {
    var _this;

    _classCallCheck(this, DataGridTableFilter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataGridTableFilter).call(this, props));

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
      var disableInput = option.operator === 'IS_EMPTY' || option.operator === 'NOT_EMPTY';
      this.setState({
        inputDisabled: disableInput
      });
      this.props.setFilter(option);
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var filterValue = this.state.filterValue;
      return _react["default"].createElement("div", {
        className: classes.filterCell
      }, _react["default"].createElement(_EAMGridFilterTypeMenu["default"], {
        filter: this.props.filter,
        onChange: this._onChange.bind(this),
        dataType: this.props.dataType
      }), this.props.dataType && (this.props.dataType === 'VARCHAR' || this.props.dataType === 'MIXVARCHAR' || this.props.dataType === 'DECIMAL' || this.props.dataType === 'NUMBER' || this.props.dataType === 'DATETIME' || this.props.dataType === 'DATE') && _react["default"].createElement(_EAMGridFilterInput["default"], {
        disabled: this.state.inputDisabled,
        width: this.props.width,
        value: filterValue,
        onChange: this._handleChangeValue,
        onKeyPress: this._handleKeyPress,
        dataType: this.props.dataType
      }));
    }
  }]);

  return DataGridTableFilter;
}(_react.Component);

var _default = (0, _index.withStyles)(styles)(DataGridTableFilter);

exports["default"] = _default;