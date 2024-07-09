function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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