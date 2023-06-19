function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { findIndex } from './tools';
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
export function toggleSortField(sortinfo) {
  var _this = this;
  // update the state with sorting info for fields and gridSort in gridRequest
  this.setState(function (prevState) {
    // get current index of gridSort for this field
    //let sortingIndex = prevState.gridRequest.gridSort.findIndex(f => f.sortBy === sortinfo.sortBy);
    var sortingIndex = findIndex(prevState.gridRequest.gridSort, 'sortBy', sortinfo.sortBy);

    // new sorting object
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
    }

    // defined new grid sorting
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