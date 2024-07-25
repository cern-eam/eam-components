function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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