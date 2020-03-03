"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _core = require("@material-ui/core");

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _styles = require("@material-ui/core/styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _FilterOutline = _interopRequireDefault(require("mdi-material-ui/FilterOutline"));

var _FilterRemoveOutline = _interopRequireDefault(require("mdi-material-ui/FilterRemoveOutline"));

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

  function DataGridSelectDataSpy() {
    _classCallCheck(this, DataGridSelectDataSpy);

    return _possibleConstructorReturn(this, _getPrototypeOf(DataGridSelectDataSpy).apply(this, arguments));
  }

  _createClass(DataGridSelectDataSpy, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react["default"].createElement("div", {
        className: classes.mainPanelStyle
      }, _react["default"].createElement("form", null, _react["default"].createElement(_core.FormControl, {
        className: classes.root
      }, _react["default"].createElement("div", {
        className: classes.formStyle
      }, _react["default"].createElement("div", {
        className: classes.dataspyFormStyle
      }, _react["default"].createElement("div", {
        className: (0, _classnames["default"])(classes.formItem, classes.dataspyLabel)
      }, "Dataspy:"), _react["default"].createElement(_Select["default"], {
        className: (0, _classnames["default"])(classes.formItem, classes.selectDataspyInput),
        value: this.props.dataSpy,
        onChange: this.props.handleChangeDataSpy,
        inputProps: {
          name: 'dataspy',
          id: 'dataspy-select'
        },
        input: _react["default"].createElement(_core.InputBase, null)
      }, this.props.listOfDataSpy && this.props.listOfDataSpy.map(function (dataspy) {
        return _react["default"].createElement(_core.MenuItem, {
          key: dataspy.code,
          value: dataspy.code
        }, dataspy.label);
      })), _react["default"].createElement(_Button["default"], {
        variant: "outlined",
        className: (0, _classnames["default"])(classes.formItem, classes.toggleFilterButton),
        onClick: this.props.toggleFilter
      }, this.props.filterVisible ? 'HIDE FILTERS' : 'SHOW FILTERS'), this.props.filterVisible && _react["default"].createElement(_Button["default"], {
        variant: "outlined",
        className: classes.cleanFiltersButton,
        onClick: this.props.clearFilters
      }, "Clean filters")), _react["default"].createElement(_Button["default"], {
        variant: "outlined",
        color: "primary",
        className: classes.fetchDataButton,
        onClick: this.props.runSearch
      }, _react["default"].createElement(_Search["default"], null), "SEARCH")))));
    }
  }]);

  return DataGridSelectDataSpy;
}(_react.Component);

var _default = (0, _styles.withStyles)(styles)(DataGridSelectDataSpy);

exports["default"] = _default;