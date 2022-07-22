function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useState, useEffect, useRef } from "react";

var useFetchSelectOptions = function useFetchSelectOptions(autocompleteHandler) {
  var autocompleteHandlerParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var value = arguments.length > 2 ? arguments[2] : undefined;
  var desc = arguments.length > 3 ? arguments[3] : undefined;
  var options = arguments.length > 4 ? arguments[4] : undefined;
  var optionsTransformer = arguments.length > 5 ? arguments[5] : undefined;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      fetchedOptions = _useState2[0],
      setFetchedOptions = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var abortController = useRef(null); // SELECT

  useEffect(function () {
    // Don't proceed if the user has passed the list of options or no autocompleteHandler is defined
    if (options || !autocompleteHandler) {
      return;
    }

    abortController.current?.abort();
    abortController.current = new AbortController();
    autocompleteHandler.apply(void 0, _toConsumableArray(autocompleteHandlerParams).concat([{
      signal: abortController.current.signal
    }])).then(function (result) {
      var fetchedOptionsTemp = optionsTransformer ? optionsTransformer(result.body.data) : result.body.data; // Add value to list of options if it's not there

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
  }, [].concat(_toConsumableArray(autocompleteHandlerParams), [options])); // Execute only when it renders 
  // RETURN

  return [fetchedOptions, loading];
};

export default useFetchSelectOptions;