function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useState, useEffect, useMemo, useRef } from "react";
import debounce from 'lodash/debounce';
import { fetchHistory, HISTORY_ID_PREFIX } from "../tools/history-tools";
import { extractOptions } from "./tools";
var useFetchAutocompleteOptions = function useFetchAutocompleteOptions(autocompleteHandler) {
  var autocompleteHandlerParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var inputValue = arguments.length > 2 ? arguments[2] : undefined;
  var value = arguments.length > 3 ? arguments[3] : undefined;
  var open = arguments.length > 4 ? arguments[4] : undefined;
  var fieldId = arguments.length > 5 ? arguments[5] : undefined;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var abortController = useRef(null);

  // AUTOCOMPLETE
  useEffect(function () {
    setOptions([]);
    // Cancel the old request in the case it was still active
    //fetchOptionsDebounced?.cancel()
    abortController.current?.abort();

    // Don't continue if not open
    if (!open) {
      return;
    }

    // If there is a value and nothing new was typed do nothing 
    if (value && value === inputValue) {
      return;
    }
    if (!inputValue?.trim()) {
      setOptions(fetchHistory(HISTORY_ID_PREFIX + fieldId)); // By focus on empty input fetch the history
      return;
    }
    abortController.current = new AbortController();
    fetchOptionsDebounced(autocompleteHandlerParams, inputValue);
  }, [inputValue, value, open]);

  // Memoizing as we always need the same instance of the function that remembers and debounces previous requests 
  var fetchOptionsDebounced = useMemo(function () {
    return debounce(function () {
      return fetchOptions.apply(void 0, arguments);
    }, 200);
  }, []);
  var fetchOptions = function fetchOptions(autocompleteHandlerParams, inputValue) {
    setLoading(true);
    callHandler.apply(void 0, _toConsumableArray(autocompleteHandlerParams).concat([inputValue, {
      signal: abortController.current.signal
    }]));
  };

  // HELPER
  var callHandler = function callHandler() {
    autocompleteHandler.apply(void 0, arguments).then(function (result) {
      setOptions(extractOptions(result));
      setLoading(false);
    })["catch"](function (error) {
      setLoading(false);
    });
  };
  return [options, loading];
};
export default useFetchAutocompleteOptions;