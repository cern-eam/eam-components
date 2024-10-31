function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
      fieldValue: '',
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