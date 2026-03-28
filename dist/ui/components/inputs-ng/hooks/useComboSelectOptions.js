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
import { useState, useEffect } from "react";
import { extractOptions, MODE } from "./tools";
var useComboSelectOptions = function useComboSelectOptions(_ref) {
  var autocompleteHandler = _ref.autocompleteHandler,
    _ref$autocompleteHand = _ref.autocompleteHandlerParams,
    autocompleteHandlerParams = _ref$autocompleteHand === void 0 ? [] : _ref$autocompleteHand,
    _ref$renderDependenci = _ref.renderDependencies,
    renderDependencies = _ref$renderDependenci === void 0 ? [] : _ref$renderDependenci,
    inputValue = _ref.inputValue,
    value = _ref.value,
    onChange = _ref.onChange,
    open = _ref.open,
    setMode = _ref.setMode,
    mode = _ref.mode,
    lazyLoad = _ref.lazyLoad,
    disabled = _ref.disabled;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    fetchedOptions = _useState2[0],
    setFetchedOptions = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    filteredOptions = _useState4[0],
    setFilteredOptions = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  useEffect(function () {
    if (mode === MODE.AUTOCOMPLETE) {
      return;
    }
    if (!open || fetchedOptions.length) {
      setFilteredOptions(fetchedOptions);
      return;
    }
    fetchOptions(autocompleteHandlerParams);
  }, [open]);
  useEffect(function () {
    !disabled && !lazyLoad && fetchOptions(autocompleteHandlerParams);
  }, [].concat(_toConsumableArray(autocompleteHandlerParams), _toConsumableArray(renderDependencies), [disabled, lazyLoad]));
  var fetchOptions = function fetchOptions(autocompleteHandlerParams) {
    setLoading(true);
    autocompleteHandler({
      handlerParams: autocompleteHandlerParams
    }).then(function (result) {
      if (!result.body.metadata.NEXTCURSORPOSITION) {
        var options = extractOptions(result);
        setMode(MODE.SELECT);
        setFetchedOptions(options);
        setFilteredOptions(options);
        //setFilteredOptions(filterOptions(options, inputValue))

        if (!value && !lazyLoad && options.length === 1) {
          onChange?.(options[0], true);
        }
      } else {
        setMode(MODE.AUTOCOMPLETE);
      }
      setLoading(false);
    })["catch"](function (error) {
      setLoading(false);
    });
  };
  useEffect(function () {
    setFetchedOptions([]);
    setFilteredOptions([]);
  }, _toConsumableArray(renderDependencies));
  useEffect(function () {
    if (!fetchedOptions.length) {
      return;
    }
    setFilteredOptions(filterOptions(fetchedOptions, inputValue));
  }, [inputValue]);

  // put filter as external funciton, case insensitive
  var filterOptions = function filterOptions(options, inputValue) {
    return options.filter(function (o) {
      return o?.code?.toString().toLowerCase().includes(inputValue.toLowerCase());
    });
  };
  return [filteredOptions, loading];
};
export default useComboSelectOptions;