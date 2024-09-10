function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { useEffect, useState } from "react";
import { TextField, Checkbox, MenuItem, ListItemIcon, ListItemText, Menu, IconButton, InputAdornment, withStyles, Select, InputBase, FormControlLabel, Button } from "@material-ui/core";
import { ContainStart, ContainEnd, Contain, GreaterThan, GreaterThanOrEqual, LessThan, LessThanOrEqual, Equal, NotEqualVariant, Rhombus, RhombusOutline } from 'mdi-material-ui';
import { DatePicker, DateTimePicker } from "@material-ui/pickers";
import { Clear as ClearIcon, InsertInvitation as CalendarIcon, Cancel as CancelIcon } from "@material-ui/icons";
import { useAsyncDebounce, useMountedLayoutEffect } from "react-table";
import { format as formatDate } from "date-fns";
var ARRAY_SEPARATOR = "$$";
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
    fieldValue: '',
    joiner: 'AND',
    operator: OPERATORS.BEGINS,
    leftParenthesis: false,
    rightParenthesis: false
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
    return localFilter.fieldValue ? /*#__PURE__*/React.createElement(InputAdornment, {
      position: "end"
    }, /*#__PURE__*/React.createElement(IconButton, {
      size: "small",
      onClick: function onClick(e) {
        setLocalFilter(_objectSpread({}, localFilter, {
          fieldValue: null,
          _dateValue: null
        }));
        e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement(ClearIcon, null))) : /*#__PURE__*/React.createElement(InputAdornment, {
      position: "end"
    }, /*#__PURE__*/React.createElement(IconButton, {
      size: "small"
    }, /*#__PURE__*/React.createElement(CalendarIcon, null)));
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
  var _useState5 = useState(_objectSpread({}, filter || getDefaultValue(column), {
      fieldValue: filter?.fieldValue ? [filter?.fieldValue] : []
    })),
    _useState6 = _slicedToArray(_useState5, 2),
    multiSelectFilter = _useState6[0],
    setMultiSelectFilter = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    multiFilterLabel = _useState8[0],
    setMultiFilterLabel = _useState8[1];
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

  //To set the filter labels and the multiFilterValues on initial render
  useEffect(function () {
    if (filter?.fieldValue.includes(ARRAY_SEPARATOR)) {
      var fieldValues = filter?.fieldValue.split(ARRAY_SEPARATOR);
      var uniqueFieldValues = Array.from(new Set(fieldValues));
      var labels = uniqueFieldValues.map(function (code) {
        var fieldvalueOption = column.selectOptions.find(function (option) {
          return option.code === code;
        });
        return fieldvalueOption.desc;
      });
      setMultiSelectFilter(function (prevMultiSelectFilter) {
        return _objectSpread({}, prevMultiSelectFilter, {
          fieldValue: uniqueFieldValues
        });
      });
      setMultiFilterLabel(labels);
    } else if (column?.selectOptions) {
      var fieldvalueOption = column.selectOptions.find(function (option) {
        return option.code === filter?.fieldValue;
      });
      setMultiFilterLabel([fieldvalueOption?.desc] || []);
    }
  }, []);
  var updateMultiSelectFilter = React.useCallback(function (fieldValueFilter) {
    setMultiSelectFilter(function (prev) {
      return _objectSpread({}, prev, {
        fieldValue: fieldValueFilter
      });
    });
    setMultiSelectFilter(function (prev) {
      return _objectSpread({}, prev, {
        joiner: "OR"
      });
    });
    debouncedSetFilter(_objectSpread({}, multiSelectFilter, {
      fieldValue: fieldValueFilter
    }));
  }, [debouncedSetFilter, multiSelectFilter]);
  var handleFilterTextFieldChange = React.useCallback(function (e) {
    return updateFilter(_objectSpread({}, localFilter, {
      fieldValue: e.target.value
    }));
  }, [localFilter, updateFilter]);
  var handleMultiFilterCheckboxChange = React.useCallback(function (event, value, label) {
    if (event.target.checked) {
      var multiSelectValues = multiSelectFilter.fieldValue ?? [];
      multiSelectValues.push(value);
      setMultiFilterLabel(function (prev) {
        return [].concat(_toConsumableArray(prev), [label]);
      });
      updateMultiSelectFilter(multiSelectValues);
    } else {
      setMultiFilterLabel(function (prev) {
        return prev.filter(function (item) {
          return item !== label;
        });
      });
      updateMultiSelectFilter(multiSelectFilter.fieldValue.filter(function (item) {
        return item !== value;
      }));
    }
  }, [multiSelectFilter, updateMultiSelectFilter]);
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
    return updateFilter(_objectSpread({}, localFilter, {
      fieldValue: formatDate(value, "dd-MMM-yyyy"),
      _dateValue: value
    }));
  }, [localFilter, updateFilter]);
  switch (dataType) {
    case "VARCHAR":
    case "MIXVARCHAR":
    case "DECIMAL":
    case "NUMBER":
      return /*#__PURE__*/React.createElement(FilterTextField, {
        value: localFilter.fieldValue || '',
        onChange: handleFilterTextFieldChange,
        disabled: [OPERATORS.IS_EMPTY, OPERATORS.NOT_EMPTY].includes(localFilter.operator),
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
        autoOk: true,
        clearable: 1,
        variant: "inline",
        ampm: false,
        value: localFilter._dateValue || null,
        onChange: handleDatePickersChange,
        format: "dd-MMM-yyyy",
        TextFieldComponent: FilterTextField,
        InputProps: {
          startAdornment: /*#__PURE__*/React.createElement(QualifierMenuAdornment, {
            column: column,
            localFilter: localFilter,
            setLocalFilter: updateFilter
          }),
          endAdornment: /*#__PURE__*/React.createElement(DateFilterAdornment, {
            localFilter: localFilter,
            setLocalFilter: updateFilter
          })
        }
      });
    case "DATETIME":
      return /*#__PURE__*/React.createElement(DateTimePicker, {
        autoOk: true,
        clearable: 1,
        variant: "inline",
        ampm: false,
        value: localFilter._dateValue || null,
        onChange: handleDatePickersChange,
        format: "dd-MMM-yyyy HH:mm",
        TextFieldComponent: FilterTextField,
        InputProps: {
          startAdornment: /*#__PURE__*/React.createElement(QualifierMenuAdornment, {
            column: column,
            localFilter: localFilter,
            setLocalFilter: updateFilter
          }),
          endAdornment: /*#__PURE__*/React.createElement(DateFilterAdornment, {
            localFilter: localFilter,
            setLocalFilter: updateFilter
          })
        }
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
    case "__MULTISELECT":
      return /*#__PURE__*/React.createElement(Select, {
        multiple: true,
        value: multiFilterLabel,
        input: /*#__PURE__*/React.createElement(BootstrapInput, null),
        renderValue: function renderValue() {
          return multiFilterLabel.filter(Boolean).join(',');
        },
        MenuProps: {
          variant: "menu",
          style: {
            top: 54,
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
          }
        }
      }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          justifyItems: 'center',
          padding: '5px 20px'
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "text",
        onClick: function onClick() {
          updateMultiSelectFilter(column.selectOptions.map(function (option) {
            return option.code;
          }));
          setMultiFilterLabel(column.selectOptions.map(function (option) {
            return option.desc;
          }));
        },
        style: {
          color: '#337ab7',
          marginRight: '30px'
        }
      }, "Select all"), /*#__PURE__*/React.createElement(Button, {
        variant: "text",
        onClick: function onClick() {
          updateMultiSelectFilter([]);
          setMultiFilterLabel([]);
        },
        style: {
          color: '#337ab7'
        }
      }, "Unselect all")), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'left'
        }
      }, column?.selectOptions?.map(function (e) {
        return /*#__PURE__*/React.createElement(MenuItem, {
          value: column.getOptionValue(e),
          key: column.getOptionValue(e),
          style: {
            padding: '0 20px'
          }
        }, /*#__PURE__*/React.createElement(Checkbox, {
          checked: multiSelectFilter?.fieldValue.indexOf(column.getOptionValue(e)) > -1,
          onChange: function onChange(event) {
            handleMultiFilterCheckboxChange(event, column.getOptionValue(e), column.getOptionLabel(e));
          },
          size: "small"
        }), /*#__PURE__*/React.createElement(ListItemText, {
          primary: column.getOptionLabel(e)
        }));
      }))));
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