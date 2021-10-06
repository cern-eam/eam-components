function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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