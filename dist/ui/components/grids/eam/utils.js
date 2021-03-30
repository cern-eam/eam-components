"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getRowAsAnObject = exports.EAMCellField = exports.EAMFilterField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _mdiMaterialUi = require("mdi-material-ui");

var _pickers = require("@material-ui/pickers");

var _icons = require("@material-ui/icons");

var _reactTable = require("react-table");

var _dateFns = require("date-fns");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FilterTextField = (0, _core.withStyles)({
  root: {
    backgroundColor: "white",
    borderRadius: '4px',
    border: '1px solid #e4e3e3',
    width: '100%',
    '& .MuiInput-underline:before': {
      border: 'none',
      transition: 'none'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid #c5c5c5'
    }
  }
})(_core.TextField);
var CustomStartAdornment = (0, _core.withStyles)({
  positionStart: {
    marginRight: 0
  }
})(_core.InputAdornment);
var OPERATORS = {
  NOT_EQUAL: '!=',
  EQUAL: '=',
  BEGINS: 'BEGINS',
  CONTAINS: 'CONTAINS',
  ENDS: 'ENDS',
  GREATER_THAN: 'GREATER_THAN',
  GREATER_THAN_EQUALS: 'GREATER_THAN_EQUALS',
  IS_EMPTY: 'IS EMPTY',
  LESS_THAN: 'LESS_THAN',
  LESS_THAN_EQUALS: 'LESS_THAN_EQUALS',
  NOT_EMPTY: 'NOT EMPTY'
};
var CHECKBOX_FILTERS = {
  CHECKED: -1,
  UNCHECKED: 0,
  INDETERMINATE: undefined
};

var getCheckedValue = function getCheckedValue(valueType) {
  return Number(valueType) === CHECKBOX_FILTERS.CHECKED;
};

var isIndeterminate = function isIndeterminate(valueType) {
  return valueType === null || valueType === CHECKBOX_FILTERS.INDETERMINATE;
};

var getDefaultFilterValue = function getDefaultFilterValue(column) {
  var baseFitler = {
    fieldName: column.id,
    fieldValue: undefined,
    joiner: 'AND',
    operator: OPERATORS.BEGINS
  };

  switch (column.dataType) {
    case 'DATE':
    case 'DATETIME':
    case 'DECIMAL':
    case 'NUMBER':
      return _objectSpread({}, baseFitler, {
        operator: 'GREATER_THAN'
      });

    case 'CHKBOOLEAN':
      return _objectSpread({}, baseFitler, {
        operator: '=',
        fieldValue: CHECKBOX_FILTERS.INDETERMINATE
      });

    default:
      return baseFitler;
  }
};

var getEAMFilterOperators = function getEAMFilterOperators(_ref) {
  var column = _ref.column;
  var dataType = column.dataType;

  switch (dataType) {
    case "VARCHAR":
    case "MIXVARCHAR":
      return [{
        'value': OPERATORS.BEGINS,
        'label': 'Starts with',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.ContainStart, null)
      }, {
        'value': OPERATORS.CONTAINS,
        'label': 'Contains',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.Contain, null)
      }, {
        'value': OPERATORS.ENDS,
        'label': 'Ends with',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.ContainEnd, null)
      }, {
        'value': OPERATORS.EQUAL,
        'label': 'Equals',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.Equal, null)
      }, {
        'value': OPERATORS.NOT_EQUAL,
        'label': 'Does not equal',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.NotEqualVariant, null)
      }, {
        'value': OPERATORS.IS_EMPTY,
        'label': 'Is empty',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.RhombusOutline, null)
      }, {
        'value': OPERATORS.NOT_EMPTY,
        'label': 'Is not empty',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.Rhombus, null)
      }];

    case "DATE":
    case "DATETIME":
      return [{
        'value': OPERATORS.GREATER_THAN,
        'label': 'Greater than',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.GreaterThan, null)
      }, {
        'value': OPERATORS.EQUAL,
        'label': 'Equals',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.Equal, null)
      }, {
        'value': OPERATORS.LESS_THAN,
        'label': 'Less than',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.LessThan, null)
      }, {
        'value': OPERATORS.LESS_THAN_EQUALS,
        'label': 'Less than or equals',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.LessThanOrEqual, null)
      }, {
        'value': OPERATORS.GREATER_THAN_EQUALS,
        'label': 'Greater than or equals',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.GreaterThanOrEqual, null)
      }, {
        'value': OPERATORS.IS_EMPTY,
        'label': 'Is empty',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.RhombusOutline, null)
      }, {
        'value': OPERATORS.NOT_EMPTY,
        'label': 'Is not empty',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.Rhombus, null)
      }, {
        'value': OPERATORS.NOT_EQUAL,
        'label': 'Does not equal',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.NotEqualVariant, null)
      }];

    case "DECIMAL":
    case "NUMBER":
      return [{
        'value': OPERATORS.EQUAL,
        'label': 'Equals',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.Equal, null)
      }, {
        'value': OPERATORS.LESS_THAN,
        'label': 'Less than',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.LessThan, null)
      }, {
        'value': OPERAOTRS.GREATER_THAN,
        'label': 'Greater than',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.GreaterThan, null)
      }, {
        'value': OPERATORS.LESS_THAN_EQUALS,
        'label': 'Less than or equals',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.LessThanOrEqual, null)
      }, {
        'value': OPERATORS.GREATER_THAN_EQUALS,
        'label': 'Greater than or equals',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.GreaterThanOrEqual, null)
      }, {
        'value': OPERATORS.IS_EMPTY,
        'label': 'Is empty',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.RhombusOutline, null)
      }, {
        'value': OPERATORS.NOT_EMPTY,
        'label': 'Is not empty',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.Rhombus, null)
      }, {
        'value': OPERATORS.NOT_EQUAL,
        'label': 'Does not equal',
        'icon': /*#__PURE__*/_react["default"].createElement(_mdiMaterialUi.NotEqualVariant, null)
      }];

    default:
      return [];
  }
};

var getEAMInitialState = function getEAMInitialState(_ref2) {
  var columns = _ref2.columns;
  var initialFilters = columns.reduce(function (acc, column) {
    return [].concat(_toConsumableArray(acc), [{
      id: column.id,
      value: getDefaultFilterValue(column)
    }]);
  }, []);
  return {
    filters: initialFilters
  };
};

var QualifierMenuAdornment = function QualifierMenuAdornment(_ref3) {
  var column = _ref3.column,
      localFilter = _ref3.localFilter,
      setLocalFilter = _ref3.setLocalFilter;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var operators = _react["default"].useMemo(function () {
    return getEAMFilterOperators({
      column: column
    });
  }, [column]);

  var currentQualifier = operators.find(function (q) {
    return q.value === localFilter.operator;
  });
  var currentQualiferIcon = currentQualifier && currentQualifier.icon;

  var onMenuOpen = _react["default"].useCallback(function (e) {
    setAnchorEl(e.currentTarget);
    e.stopPropagation();
  }, []);

  var onMenuClose = _react["default"].useCallback(function (e) {
    setAnchorEl(null);
    e.stopPropagation();
  }, []);

  var onMenuOptionClick = _react["default"].useCallback(function (operator) {
    return function (e) {
      setAnchorEl(null);
      setLocalFilter(_objectSpread({}, localFilter, {
        operator: operator.value
      }));
      e.stopPropagation();
    };
  }, [localFilter, setLocalFilter]);

  return _react["default"].useMemo(function () {
    return /*#__PURE__*/_react["default"].createElement(CustomStartAdornment, {
      position: "start"
    }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      size: "small",
      onClick: onMenuOpen
    }, currentQualiferIcon), /*#__PURE__*/_react["default"].createElement(_core.Menu, {
      anchorEl: anchorEl,
      open: Boolean(anchorEl),
      onClose: onMenuClose
    }, operators.map(function (operator) {
      return /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
        key: operator.value,
        selected: operator.value === localFilter.operator,
        onClick: onMenuOptionClick(operator)
      }, /*#__PURE__*/_react["default"].createElement(_core.ListItemIcon, null, operator.icon), /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
        primary: operator.label
      }));
    })));
  }, [anchorEl, currentQualiferIcon, localFilter.operator, onMenuClose, onMenuOpen, onMenuOptionClick, operators]);
};

var DateFilterAdornment = function DateFilterAdornment(_ref4) {
  var localFilter = _ref4.localFilter,
      setLocalFilter = _ref4.setLocalFilter;
  return _react["default"].useMemo(function () {
    return localFilter.fieldValue ? /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
      position: "end"
    }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      size: "small",
      onClick: function onClick(e) {
        setLocalFilter(_objectSpread({}, localFilter, {
          fieldValue: null,
          _dateValue: null
        }));
        e.stopPropagation();
      }
    }, /*#__PURE__*/_react["default"].createElement(_icons.Clear, null))) : /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
      position: "end"
    }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      size: "small"
    }, /*#__PURE__*/_react["default"].createElement(_icons.InsertInvitation, null)));
  }, [localFilter, setLocalFilter]);
};

var EAMCellField = function EAMCellField(_ref5) {
  var column = _ref5.column,
      value = _ref5.value;

  switch (column.dataType) {
    case "CHKBOOLEAN":
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }
      }, /*#__PURE__*/_react["default"].createElement(_core.Checkbox, {
        disabled: true,
        checked: (value ?? '').toLowerCase() === "true",
        indeterminate: !value,
        style: {
          padding: 0
        },
        color: "primary"
      }));

    default:
      return String(value);
  }
};

exports.EAMCellField = EAMCellField;

var EAMFilterField = function EAMFilterField(_ref6) {
  var column = _ref6.column;
  var dataType = column.dataType,
      filter = column.filterValue,
      setFilter = column.setFilter;

  var _useState3 = (0, _react.useState)(filter || getDefaultFilterValue(column)),
      _useState4 = _slicedToArray(_useState3, 2),
      localFilter = _useState4[0],
      setLocalFilter = _useState4[1];

  (0, _reactTable.useMountedLayoutEffect)(function () {
    return setLocalFilter(filter || getDefaultFilterValue(column));
  }, [filter]);
  var debouncedSetFilter = (0, _reactTable.useAsyncDebounce)(function (filter) {
    return setFilter(filter);
  }, process.env.NODE_ENV === 'development' ? 100 : 0);

  var updateFilter = _react["default"].useCallback(function (filter) {
    setLocalFilter(filter);
    debouncedSetFilter(filter);
  }, [debouncedSetFilter]);

  var handleFilterTextFieldChange = _react["default"].useCallback(function (e) {
    return updateFilter(_objectSpread({}, localFilter, {
      fieldValue: e.target.value
    }));
  }, [localFilter, updateFilter]);

  var handleCheckboxChange = _react["default"].useCallback(function () {
    var values = [CHECKBOX_FILTERS.CHECKED, CHECKBOX_FILTERS.UNCHECKED, CHECKBOX_FILTERS.INDETERMINATE];
    var nextValueIndex = (values.findIndex(function (e) {
      return e === Number(localFilter.fieldValue);
    }) + 1) % values.length;
    var nextValue = values[nextValueIndex];
    updateFilter(_objectSpread({}, localFilter, {
      fieldValue: nextValue
    }));
  }, [localFilter, updateFilter]);

  var handleDatePickersChange = _react["default"].useCallback(function (value) {
    return updateFilter(_objectSpread({}, localFilter, {
      fieldValue: (0, _dateFns.format)(value, "dd-MMM-yyyy"),
      _dateValue: value
    }));
  }, [localFilter, updateFilter]);

  switch (dataType) {
    case "VARCHAR":
    case "MIXVARCHAR":
    case "DECIMAL":
    case "NUMBER":
      return /*#__PURE__*/_react["default"].createElement(FilterTextField, {
        value: localFilter.fieldValue || '',
        onChange: handleFilterTextFieldChange,
        disabled: [OPERATORS.IS_EMPTY, OPERATORS.NOT_EMPTY].includes(localFilter.operator),
        InputProps: {
          startAdornment: /*#__PURE__*/_react["default"].createElement(QualifierMenuAdornment, {
            column: column,
            localFilter: localFilter,
            setLocalFilter: updateFilter
          })
        }
      });

    case "CHKBOOLEAN":
      return /*#__PURE__*/_react["default"].createElement(_core.Checkbox, {
        checked: getCheckedValue(localFilter.fieldValue),
        indeterminate: isIndeterminate(localFilter.fieldValue),
        onChange: handleCheckboxChange,
        style: {
          padding: 5
        },
        color: "primary"
      });

    case "DATE":
      return /*#__PURE__*/_react["default"].createElement(_pickers.DatePicker, {
        autoOk: true,
        clearable: 1,
        variant: "inline",
        ampm: false,
        value: localFilter._dateValue || null,
        onChange: handleDatePickersChange,
        format: "dd-MMM-yyyy",
        TextFieldComponent: FilterTextField,
        InputProps: {
          startAdornment: /*#__PURE__*/_react["default"].createElement(QualifierMenuAdornment, {
            column: column,
            localFilter: localFilter,
            setLocalFilter: updateFilter
          }),
          endAdornment: /*#__PURE__*/_react["default"].createElement(DateFilterAdornment, {
            localFilter: localFilter,
            setLocalFilter: updateFilter
          })
        }
      });

    case "DATETIME":
      return /*#__PURE__*/_react["default"].createElement(_pickers.DateTimePicker, {
        autoOk: true,
        clearable: 1,
        variant: "inline",
        ampm: false,
        value: localFilter._dateValue || null,
        onChange: handleDatePickersChange,
        format: "dd-MMM-yyyy HH:mm",
        TextFieldComponent: FilterTextField,
        InputProps: {
          startAdornment: /*#__PURE__*/_react["default"].createElement(QualifierMenuAdornment, {
            column: column,
            localFilter: localFilter,
            setLocalFilter: updateFilter
          }),
          endAdornment: /*#__PURE__*/_react["default"].createElement(DateFilterAdornment, {
            localFilter: localFilter,
            setLocalFilter: updateFilter
          })
        }
      });

    default:
      return null;
  }
};

exports.EAMFilterField = EAMFilterField;

var getRowAsAnObject = function getRowAsAnObject(row) {
  return row.cell.reduce(function (acc, cell) {
    return _objectSpread({}, acc, _defineProperty({}, cell.t, cell.value || ""));
  }, {});
};

exports.getRowAsAnObject = getRowAsAnObject;
var _default = {
  getEAMFilterOperators: getEAMFilterOperators,
  getEAMInitialState: getEAMInitialState
};
exports["default"] = _default;