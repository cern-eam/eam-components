"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _FilterList = _interopRequireDefault(require("@material-ui/icons/FilterList"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var filterSelectStyle = {
  fontSize: "0.8125rem"
};

var EISTableFilter = function EISTableFilter(props) {
  var filters = props.filters,
      handleFilterChange = props.handleFilterChange,
      activeFilter = props.activeFilter;

  var propagateFilterChange = function propagateFilterChange(e) {
    handleFilterChange(e.target.value);
  };

  return filters && Object.keys(filters).length && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/_react["default"].createElement(_FilterList["default"], {
    style: {
      marginLeft: "auto"
    }
  }), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    style: filterSelectStyle,
    value: filters[activeFilter].text,
    onChange: propagateFilterChange,
    renderValue: function renderValue(value) {
      return /*#__PURE__*/_react["default"].createElement("span", null, value);
    }
  }, Object.keys(filters).map(function (key) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: key,
      value: key
    }, filters[key].text);
  })));
};

var _default = EISTableFilter;
exports["default"] = _default;