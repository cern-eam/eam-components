function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useState } from "react";
import { TextField, Checkbox, MenuItem, ListItemIcon, ListItemText, Menu, IconButton, InputAdornment, Select, InputBase } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import { ContainStart, ContainEnd, Contain, GreaterThan, GreaterThanOrEqual, LessThan, LessThanOrEqual, Equal, NotEqualVariant, Rhombus, RhombusOutline } from 'mdi-material-ui';
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import { Clear as ClearIcon, InsertInvitation as CalendarIcon } from "@mui/icons-material";
import { useAsyncDebounce, useMountedLayoutEffect } from "react-table";
import { format as formatDate } from "date-fns";
var BootstrapInput = withStyles(function (theme) {
  return {
    root: {
      width: '100%',
      backgroundColor: "white",
      borderRadius: '4px',
      border: '1px solid #e4e3e3',
      '& .MuiInput-underline:before': {
        border: 'none',
        transition: 'none'
      },
      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottom: '2px solid #c5c5c5'
      },
      '& .MuiSelect-select:focus': {
        backgroundColor: "white",
        borderRadius: '4px'
      }
    },
    input: {
      paddingLeft: '4px'
    }
  };
})(InputBase);
var FilterTextField = withStyles({
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
})(TextField);
var CustomStartAdornment = withStyles({
  positionStart: {
    marginRight: 0
  }
})(InputAdornment);
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

var getEAMDefaultFilterValue = function getEAMDefaultFilterValue(column) {
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
        'icon': /*#__PURE__*/React.createElement(ContainStart, null)
      }, {
        'value': OPERATORS.CONTAINS,
        'label': 'Contains',
        'icon': /*#__PURE__*/React.createElement(Contain, null)
      }, {
        'value': OPERATORS.ENDS,
        'label': 'Ends with',
        'icon': /*#__PURE__*/React.createElement(ContainEnd, null)
      }, {
        'value': OPERATORS.EQUAL,
        'label': 'Equals',
        'icon': /*#__PURE__*/React.createElement(Equal, null)
      }, {
        'value': OPERATORS.NOT_EQUAL,
        'label': 'Does not equal',
        'icon': /*#__PURE__*/React.createElement(NotEqualVariant, null)
      }, {
        'value': OPERATORS.IS_EMPTY,
        'label': 'Is empty',
        'icon': /*#__PURE__*/React.createElement(RhombusOutline, null)
      }, {
        'value': OPERATORS.NOT_EMPTY,
        'label': 'Is not empty',
        'icon': /*#__PURE__*/React.createElement(Rhombus, null)
      }];

    case "DATE":
    case "DATETIME":
      return [{
        'value': OPERATORS.GREATER_THAN,
        'label': 'Greater than',
        'icon': /*#__PURE__*/React.createElement(GreaterThan, null)
      }, {
        'value': OPERATORS.EQUAL,
        'label': 'Equals',
        'icon': /*#__PURE__*/React.createElement(Equal, null)
      }, {
        'value': OPERATORS.LESS_THAN,
        'label': 'Less than',
        'icon': /*#__PURE__*/React.createElement(LessThan, null)
      }, {
        'value': OPERATORS.LESS_THAN_EQUALS,
        'label': 'Less than or equals',
        'icon': /*#__PURE__*/React.createElement(LessThanOrEqual, null)
      }, {
        'value': OPERATORS.GREATER_THAN_EQUALS,
        'label': 'Greater than or equals',
        'icon': /*#__PURE__*/React.createElement(GreaterThanOrEqual, null)
      }, {
        'value': OPERATORS.IS_EMPTY,
        'label': 'Is empty',
        'icon': /*#__PURE__*/React.createElement(RhombusOutline, null)
      }, {
        'value': OPERATORS.NOT_EMPTY,
        'label': 'Is not empty',
        'icon': /*#__PURE__*/React.createElement(Rhombus, null)
      }, {
        'value': OPERATORS.NOT_EQUAL,
        'label': 'Does not equal',
        'icon': /*#__PURE__*/React.createElement(NotEqualVariant, null)
      }];

    case "DECIMAL":
    case "NUMBER":
      return [{
        'value': OPERATORS.EQUAL,
        'label': 'Equals',
        'icon': /*#__PURE__*/React.createElement(Equal, null)
      }, {
        'value': OPERATORS.LESS_THAN,
        'label': 'Less than',
        'icon': /*#__PURE__*/React.createElement(LessThan, null)
      }, {
        'value': OPERATORS.GREATER_THAN,
        'label': 'Greater than',
        'icon': /*#__PURE__*/React.createElement(GreaterThan, null)
      }, {
        'value': OPERATORS.LESS_THAN_EQUALS,
        'label': 'Less than or equals',
        'icon': /*#__PURE__*/React.createElement(LessThanOrEqual, null)
      }, {
        'value': OPERATORS.GREATER_THAN_EQUALS,
        'label': 'Greater than or equals',
        'icon': /*#__PURE__*/React.createElement(GreaterThanOrEqual, null)
      }, {
        'value': OPERATORS.IS_EMPTY,
        'label': 'Is empty',
        'icon': /*#__PURE__*/React.createElement(RhombusOutline, null)
      }, {
        'value': OPERATORS.NOT_EMPTY,
        'label': 'Is not empty',
        'icon': /*#__PURE__*/React.createElement(Rhombus, null)
      }, {
        'value': OPERATORS.NOT_EQUAL,
        'label': 'Does not equal',
        'icon': /*#__PURE__*/React.createElement(NotEqualVariant, null)
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
      value: getEAMDefaultFilterValue(column)
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

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var operators = React.useMemo(function () {
    return getEAMFilterOperators({
      column: column
    });
  }, [column]);
  var currentQualifier = operators.find(function (q) {
    return q.value === localFilter.operator;
  });
  var currentQualiferIcon = currentQualifier && currentQualifier.icon;
  var onMenuOpen = React.useCallback(function (e) {
    setAnchorEl(e.currentTarget);
    e.stopPropagation();
  }, []);
  var onMenuClose = React.useCallback(function (e) {
    setAnchorEl(null);
    e.stopPropagation();
  }, []);
  var onMenuOptionClick = React.useCallback(function (operator) {
    return function (e) {
      setAnchorEl(null);
      setLocalFilter(_objectSpread({}, localFilter, {
        operator: operator.value
      }));
      e.stopPropagation();
    };
  }, [localFilter, setLocalFilter]);
  return React.useMemo(function () {
    return /*#__PURE__*/React.createElement(CustomStartAdornment, {
      position: "start"
    }, /*#__PURE__*/React.createElement(IconButton, {
      size: "small",
      onClick: onMenuOpen
    }, currentQualiferIcon), /*#__PURE__*/React.createElement(Menu, {
      anchorEl: anchorEl,
      open: Boolean(anchorEl),
      onClose: onMenuClose
    }, operators.map(function (operator) {
      return /*#__PURE__*/React.createElement(MenuItem, {
        key: operator.value,
        selected: operator.value === localFilter.operator,
        onClick: onMenuOptionClick(operator)
      }, /*#__PURE__*/React.createElement(ListItemIcon, null, operator.icon), /*#__PURE__*/React.createElement(ListItemText, {
        primary: operator.label
      }));
    })));
  }, [anchorEl, currentQualiferIcon, localFilter.operator, onMenuClose, onMenuOpen, onMenuOptionClick, operators]);
};

var DateFilterAdornment = function DateFilterAdornment(_ref4) {
  var localFilter = _ref4.localFilter,
      setLocalFilter = _ref4.setLocalFilter;
  return React.useMemo(function () {
    return /*#__PURE__*/React.createElement(InputAdornment, {
      position: "end"
    }, /*#__PURE__*/React.createElement(IconButton, {
      edge: "end",
      size: "small",
      onClick: function onClick(e) {
        setLocalFilter(_objectSpread({}, localFilter, {
          fieldValue: null,
          _dateValue: null
        }));
        e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement(ClearIcon, null)));
  }, [localFilter, setLocalFilter]);
};

var EAMCellField = function EAMCellField(_ref5) {
  var column = _ref5.column,
      value = _ref5.value;

  switch (column.dataType) {
    case "CHKBOOLEAN":
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }
      }, /*#__PURE__*/React.createElement(Checkbox, {
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

var EAMFilterField = function EAMFilterField(_ref6) {
  var column = _ref6.column,
      _ref6$getDefaultValue = _ref6.getDefaultValue,
      getDefaultValue = _ref6$getDefaultValue === void 0 ? getEAMDefaultFilterValue : _ref6$getDefaultValue;
  var dataType = column.dataType,
      filter = column.filterValue,
      setFilter = column.setFilter;

  var _useState3 = useState(filter || getDefaultValue(column)),
      _useState4 = _slicedToArray(_useState3, 2),
      localFilter = _useState4[0],
      setLocalFilter = _useState4[1];

  useMountedLayoutEffect(function () {
    return setLocalFilter(filter || getDefaultValue(column));
  }, [filter]);
  var debouncedSetFilter = useAsyncDebounce(function (filter) {
    return setFilter(filter);
  }, process.env.NODE_ENV === 'development' ? 100 : 0);
  var updateFilter = React.useCallback(function (filter) {
    setLocalFilter(filter);
    debouncedSetFilter(filter);
  }, [debouncedSetFilter]);
  var handleFilterTextFieldChange = React.useCallback(function (e) {
    return updateFilter(_objectSpread({}, localFilter, {
      fieldValue: e.target.value
    }));
  }, [localFilter, updateFilter]);
  var handleCheckboxChange = React.useCallback(function () {
    var values = [CHECKBOX_FILTERS.CHECKED, CHECKBOX_FILTERS.UNCHECKED, CHECKBOX_FILTERS.INDETERMINATE];
    var nextValueIndex = (values.findIndex(function (e) {
      return e === Number(localFilter.fieldValue);
    }) + 1) % values.length;
    var nextValue = values[nextValueIndex];
    updateFilter(_objectSpread({}, localFilter, {
      fieldValue: nextValue
    }));
  }, [localFilter, updateFilter]);
  var handleDatePickersChange = React.useCallback(function (value) {
    updateFilter(_objectSpread({}, localFilter, {
      fieldValue: value ? formatDate(value, 'dd-MMM-yyyy') : '',
      _dateValue: value
    }));
  }, [localFilter, updateFilter]);

  var renderDatePickerInput = function renderDatePickerInput(props) {
    var InputProps = props.InputProps;
    return /*#__PURE__*/React.createElement(FilterTextField, _extends({}, props, {
      size: "small",
      InputProps: _objectSpread({}, InputProps, {
        startAdornment: /*#__PURE__*/React.createElement(QualifierMenuAdornment, {
          column: column,
          localFilter: localFilter,
          setLocalFilter: updateFilter
        }),
        endAdornment: localFilter?._dateValue ? /*#__PURE__*/React.createElement(DateFilterAdornment, {
          localFilter: localFilter,
          setLocalFilter: updateFilter
        }) : InputProps?.endAdornment
      })
    }));
  };

  switch (dataType) {
    case "VARCHAR":
    case "MIXVARCHAR":
    case "DECIMAL":
    case "NUMBER":
      return /*#__PURE__*/React.createElement(FilterTextField, {
        value: localFilter.fieldValue || '',
        onChange: handleFilterTextFieldChange,
        disabled: [OPERATORS.IS_EMPTY, OPERATORS.NOT_EMPTY].includes(localFilter.operator),
        size: "small",
        InputProps: {
          startAdornment: /*#__PURE__*/React.createElement(QualifierMenuAdornment, {
            column: column,
            localFilter: localFilter,
            setLocalFilter: updateFilter
          })
        }
      });

    case "CHKBOOLEAN":
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: getCheckedValue(localFilter.fieldValue),
        indeterminate: isIndeterminate(localFilter.fieldValue),
        onChange: handleCheckboxChange,
        style: {
          padding: 5
        },
        color: "primary"
      });

    case "DATE":
      return /*#__PURE__*/React.createElement(DatePicker, {
        clearable: true,
        value: localFilter._dateValue || null,
        onChange: handleDatePickersChange,
        inputFormat: "dd-MMM-yyyy",
        disableOpenPicker: localFilter?._dateValue ? true : false,
        renderInput: renderDatePickerInput
      });

    case "DATETIME":
      return /*#__PURE__*/React.createElement(DateTimePicker, {
        clearable: true,
        value: localFilter._dateValue || null,
        onChange: handleDatePickersChange,
        inputFormat: "dd-MMM-yyyy HH:mm",
        disableOpenPicker: localFilter?._dateValue ? true : false,
        renderInput: renderDatePickerInput
      });

    case "__SELECT":
      return /*#__PURE__*/React.createElement(Select, {
        "native": true,
        value: localFilter.fieldValue || '',
        onChange: handleFilterTextFieldChange,
        input: /*#__PURE__*/React.createElement(BootstrapInput, null)
      }, /*#__PURE__*/React.createElement("option", {
        value: ""
      }), column?.selectOptions?.map(function (e) {
        return /*#__PURE__*/React.createElement("option", {
          value: column.getOptionValue(e),
          key: column.getOptionValue(e)
        }, column.getOptionLabel(e));
      }));

    default:
      return null;
  }
};

var getRowAsAnObject = function getRowAsAnObject(row) {
  return row.cell.reduce(function (acc, cell) {
    return _objectSpread({}, acc, _defineProperty({}, cell.t, cell.value || ""));
  }, {});
};

export { EAMFilterField, EAMCellField, getRowAsAnObject, OPERATORS, getEAMDefaultFilterValue };
export default {
  getEAMFilterOperators: getEAMFilterOperators,
  getEAMInitialState: getEAMInitialState
};