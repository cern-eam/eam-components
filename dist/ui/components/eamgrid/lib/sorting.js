"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSortField = toggleSortField;

var _tools = require("./tools");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sortingTypes = ['ASC', 'DESC', undefined];
/**
 * Get next sorting type after prevSortingType
 */

var _getNextSortingType = function _getNextSortingType(prevSortingType) {
  var i = sortingTypes.indexOf(prevSortingType);
  i = ++i % sortingTypes.length;
  return sortingTypes[i];
};
/**
 * Update State with GridRequest sorting info and reload data
 * @param {object} field
 */


function toggleSortField(sortinfo) {
  var _this = this;

  // update the state with sorting info for fields and gridSort in gridRequest
  this.setState(function (prevState) {
    // get current index of gridSort for this field
    //let sortingIndex = prevState.gridRequest.gridSort.findIndex(f => f.sortBy === sortinfo.sortBy);
    var sortingIndex = (0, _tools.findIndex)(prevState.gridRequest.gridSort, 'sortBy', sortinfo.sortBy); // new sorting object

    var newSorting = {};

    if (sortingIndex > -1) {
      newSorting = _objectSpread({}, prevState.gridRequest.gridSort[sortingIndex], {}, sortinfo, {
        // get next sorting type for this field
        sortType: _getNextSortingType(prevState.gridRequest.gridSort[sortingIndex].sortType)
      });
    } else {
      newSorting = _objectSpread({
        'sortType': 'ASC'
      }, sortinfo);
    } // defined new grid sorting


    var newGridSorting = [].concat(_toConsumableArray(prevState.gridRequest.gridSort.slice(0, sortingIndex > 0 ? sortingIndex : 0)), [newSorting], _toConsumableArray(prevState.gridRequest.gridSort.slice(sortingIndex + 1))).filter(function (s) {
      return s.sortType;
    });
    return _objectSpread({}, prevState, {
      'hasMore': true,
      'rows': [],
      'fields': _toConsumableArray(prevState.fields),
      'gridRequest': _objectSpread({}, prevState.gridRequest, {
        'cursorPosition': 1,
        'gridSort': newGridSorting
      })
    });
  }, function () {
    _this.loadMoreData();
  });
}