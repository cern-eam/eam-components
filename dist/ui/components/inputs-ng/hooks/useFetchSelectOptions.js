function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useState, useEffect, useRef } from "react";
import { extractOptions } from "./tools";
var useFetchSelectOptions = function useFetchSelectOptions(autocompleteHandler) {
  var autocompleteHandlerParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var value = arguments.length > 2 ? arguments[2] : undefined;
  var desc = arguments.length > 3 ? arguments[3] : undefined;
  var options = arguments.length > 4 ? arguments[4] : undefined;
  var optionsTransformer = arguments.length > 5 ? arguments[5] : undefined;
  var renderDependencies = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    fetchedOptions = _useState2[0],
    setFetchedOptions = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var abortController = useRef(null);

  // SELECT
  useEffect(function () {
    // Don't proceed if the user has passed the list of options or no autocompleteHandler is defined
    if (options || !autocompleteHandler) {
      return;
    }
    abortController.current?.abort();
    abortController.current = new AbortController();
    autocompleteHandler({
      handlerParams: autocompleteHandlerParams
    }, {
      signal: abortController.current.signal
    }).then(function (result) {
      var fetchedOptionsTemp = optionsTransformer ? optionsTransformer(extractOptions(result)) : extractOptions(result);
      // Add value to list of options if it's not there
      if (value && !fetchedOptionsTemp.some(function (o) {
        return o.code === value;
      })) {
        fetchedOptionsTemp.push({
          code: value,
          desc: desc
        });
      }
      setFetchedOptions(fetchedOptionsTemp);
      setLoading(false);
    })["catch"](function (error) {
      setLoading(false);
    });
  }, [].concat(_toConsumableArray(autocompleteHandlerParams), _toConsumableArray(renderDependencies), [options])); // Execute only when it renders 

  // RETURN
  return [fetchedOptions, loading];
};
export default useFetchSelectOptions;