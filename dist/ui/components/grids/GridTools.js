function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import queryString from 'query-string';
var FILTER_SEPARATOR = ':::';
var VALUE_SEPARATOR = ':';
var OPERATOR_SEPARATOR = '|||';
var parseGridFilters = function parseGridFilters(gridFiltersString) {
  var adaptGridFilters = function adaptGridFilters(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      code = _ref2[0],
      value = _ref2[1];
    var _ref3 = value && value.split(OPERATOR_SEPARATOR),
      _ref4 = _slicedToArray(_ref3, 2),
      val = _ref4[0],
      operator = _ref4[1];
    return {
      fieldName: code,
      fieldValue: val,
      operator: operator || 'EQUALS',
      joiner: 'AND'
    };
  };
  try {
    return gridFiltersString ? gridFiltersString.split(FILTER_SEPARATOR).map(function (gridFilter) {
      return gridFilter.split(VALUE_SEPARATOR);
    }).map(adaptGridFilters) : [];
  } catch (err) {
    return [];
  }
};
var stringifyGridFilter = function stringifyGridFilter(gridFilter) {
  return gridFilter.fieldValue ? gridFilter.fieldName + VALUE_SEPARATOR + (gridFilter.fieldValue || '') + OPERATOR_SEPARATOR + gridFilter.operator : '';
};
var stringifyGridFilters = function stringifyGridFilters() {
  var gridFilters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return gridFilters.map(stringifyGridFilter).join(FILTER_SEPARATOR);
};
var replaceUrlParam = function replaceUrlParam(key, val) {
  var params = queryString.parse(window.location.search);
  params[key] = val;
  var newParams = queryString.stringify(params, {
    skipEmptyString: true
  });
  return newParams ? "?".concat(newParams) : '';
};
var getURLParameterByName = function getURLParameterByName(name) {
  return queryString.parse(window.location.search)[name] || '';
};
export default {
  parseGridFilters: parseGridFilters,
  getURLParameterByName: getURLParameterByName,
  replaceUrlParam: replaceUrlParam,
  stringifyGridFilters: stringifyGridFilters
};