function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { findIndex } from './tools';
function getDefaultFilterOperator(dataType) {
  switch (dataType) {
    case 'DATE':
      return 'GREATER_THAN';
    case 'DATETIME':
      return 'GREATER_THAN';
    case 'DECIMAL':
      return 'GREATER_THAN';
    case 'NUMBER':
      return 'GREATER_THAN';
    case 'CHKBOOLEAN':
      return 'SELECTED';
    default:
      return 'BEGINS';
  }
}
export function getFilters() {
  return Object.values(this.filterMap);
}

/**
 *
 * @param filter
 */
export function setFilter(filter, dataType) {
  var newFilter;
  var oldFilter = this.filterMap[filter.fieldName];
  if (oldFilter) {
    // Update of existing filter
    newFilter = _objectSpread({}, oldFilter, {}, filter);
  } else {
    // Creation of new filter
    newFilter = _objectSpread({
      operator: getDefaultFilterOperator(dataType),
      fieldValue: undefined,
      joiner: 'AND'
    }, filter);
  }
  this.filterMap[filter.fieldName] = newFilter;
}
export function clearFilters(callback) {
  this.filterMap = {};
  this.setState(function (prevState) {
    return {
      gridRequest: _objectSpread({}, prevState.gridRequest, {
        gridSort: [],
        gridFilter: []
      }),
      selectedRows: {}
    };
  }, function () {
    // execute callback if any
    if (callback && typeof callback === 'function') {
      callback();
    }
  });
}
export function saveGridRequestInLocalStorage() {
  // We use local storage unless the user explicitely ask not to
  if (this.props.useLocalStorage !== false) {
    localStorage.setItem("gridRequest".concat(this.props.gridId), JSON.stringify(this.state.gridRequest));
  }
}
export function loadGridRequestFromLocalStorage() {
  // We use local storage unless the user explicitely ask not to
  if (this.props.useLocalStorage !== false) {
    return localStorage.getItem("gridRequest".concat(this.props.gridId));
  }
}