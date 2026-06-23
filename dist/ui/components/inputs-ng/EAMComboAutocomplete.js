function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _awaitAsyncGenerator(e) { return new _OverloadYield(e, 0); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { areEqual, componentsProps, renderOptionHandler } from './tools/input-tools';
import EAMBaseInput from './components/EAMBaseInput';
import TextField from './components/TextField';
import { saveHistory, HISTORY_ID_PREFIX } from './tools/history-tools';
import useComboSelectOptions from './hooks/useComboSelectOptions';
import useComboAutocompleteOptions from './hooks/useComboAutocompleteOptions';
import { MODE } from './hooks/tools';
import SearchAdornment from './components/SearchAdornment';
var EAMComboAutocomplete = function EAMComboAutocomplete(props) {
  var autocompleteHandler = props.autocompleteHandler,
    _props$autocompleteHa = props.autocompleteHandlerParams,
    autocompleteHandlerParams = _props$autocompleteHa === void 0 ? [] : _props$autocompleteHa,
    _props$renderDependen = props.renderDependencies,
    renderDependencies = _props$renderDependen === void 0 ? [] : _props$renderDependen,
    value = props.value,
    id = props.id,
    renderValue = props.renderValue,
    onChange = props.onChange,
    onClear = props.onClear,
    _props$lazyLoad = props.lazyLoad,
    lazyLoad = _props$lazyLoad === void 0 ? true : _props$lazyLoad,
    disabled = props.disabled;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  var _useState5 = useState(MODE.UNKNOWN),
    _useState6 = _slicedToArray(_useState5, 2),
    mode = _useState6[0],
    setMode = _useState6[1];
  var _useState7 = useState(true),
    _useState8 = _slicedToArray(_useState7, 2),
    valid = _useState8[0],
    setValid = _useState8[1];
  var _useState9 = useState(''),
    _useState0 = _slicedToArray(_useState9, 2),
    description = _useState0[0],
    setDescription = _useState0[1];
  var _useComboSelectOption = useComboSelectOptions({
      autocompleteHandler: autocompleteHandler,
      autocompleteHandlerParams: autocompleteHandlerParams,
      renderDependencies: renderDependencies,
      inputValue: inputValue,
      value: value,
      onChange: onChange,
      open: open,
      id: id,
      setMode: setMode,
      enabled: mode !== MODE.AUTOCOMPLETE,
      mode: mode,
      lazyLoad: lazyLoad,
      disabled: disabled
    }),
    _useComboSelectOption2 = _slicedToArray(_useComboSelectOption, 2),
    selectOptions = _useComboSelectOption2[0],
    selectLoading = _useComboSelectOption2[1];
  var _useComboAutocomplete = useComboAutocompleteOptions({
      autocompleteHandler: autocompleteHandler,
      autocompleteHandlerParams: autocompleteHandlerParams,
      renderDependencies: renderDependencies,
      inputValue: inputValue,
      value: value,
      open: open,
      id: id,
      enabled: mode !== MODE.SELECT
    }),
    _useComboAutocomplete2 = _slicedToArray(_useComboAutocomplete, 2),
    autocompleteOptions = _useComboAutocomplete2[0],
    autocompleteLoading = _useComboAutocomplete2[1];
  var options = mode === MODE.SELECT ? selectOptions : autocompleteOptions;
  var loading = mode === MODE.SELECT ? selectLoading : autocompleteLoading;

  //
  // EFFECTS
  //

  useEffect(function () {
    if (value?.desc) {
      setDescription(value?.desc);
    }
    if (value?.code && !value?.desc) {
      applyExtraInformation(value.code);
    }
  }, [value?.code]);
  useEffect(function () {
    setMode(MODE.UNKNOWN);
  }, _toConsumableArray(renderDependencies));

  //
  // HANDLERS
  //

  var getOptionLabelHandler = function getOptionLabelHandler(option) {
    if (typeof option === 'string') {
      return option;
    }
    return option?.code ?? '';
  };
  var onInputChangeHandler = function onInputChangeHandler(event, newInputValue) {
    setInputValue(newInputValue);
    setDescription('');
  };
  var onChangeHandler = function onChangeHandler(event, newValue, reason) {
    if (reason === 'clear') {
      onChange(null);
      onClear?.();
      setValid(true);
      return;
    }
    mode === MODE.AUTOCOMPLETE && saveHistory(HISTORY_ID_PREFIX + id, newValue);
    setValid(true);
    onChange(newValue);
    setDescription(newValue?.desc ?? '');
    // Don't bubble up any events (won't trigger a save when we select something by pressing enter)
    event.stopPropagation();
    event.preventDefault();
  };
  var onCloseHandler = function onCloseHandler(event, reason) {
    setOpen(false);
    // Only to be fired when we blur and the inputValue differs from selected code.
    if (reason === 'blur' && (inputValue ?? '') !== (value?.code ?? '')) {
      if (findOption(options, inputValue)) {
        applyExtraInformation(inputValue, true);
      } else {
        onChange(null);
        setInputValue('');
      }
    }
  };

  //
  // UTILS
  //

  var applyExtraInformation = function applyExtraInformation(filter) {
    var executeOnChange,
      extraInformation,
      _args = arguments,
      _t;
    return _regeneratorAsync(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          executeOnChange = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
          if (filter?.trim()) {
            _context.n = 1;
            break;
          }
          onChange(null);
          setValid(true);
          return _context.a(2);
        case 1:
          if (!findOption(options, filter)) {
            _context.n = 2;
            break;
          }
          _t = findOption(options, filter);
          _context.n = 4;
          break;
        case 2:
          _context.n = 3;
          return _awaitAsyncGenerator(fetchExtraInformation(filter));
        case 3:
          _t = _context.v;
        case 4:
          extraInformation = _t;
          if (extraInformation) {
            _context.n = 5;
            break;
          }
          onChange({
            code: filter
          });
          return _context.a(2);
        case 5:
          if (extraInformation.desc && !value?.desc) {
            setDescription(extraInformation.desc);
          }
          if (extraInformation.organization || executeOnChange) {
            onChange(_objectSpread({}, extraInformation));
          }
        case 6:
          return _context.a(2);
      }
    }, null, null, null, Promise);
  };
  var fetchExtraInformation = function fetchExtraInformation(filter) {
    var result, _t2;
    return _regeneratorAsync(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return _awaitAsyncGenerator(autocompleteHandler({
            handlerParams: autocompleteHandlerParams,
            filter: filter,
            operator: "="
          }));
        case 1:
          result = _context2.v;
          return _context2.a(2, findOption(result.body?.data, filter));
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          return _context2.a(2, null);
      }
    }, null, null, [[0, 2]], Promise);
  };
  var findOption = function findOption() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var filter = arguments.length > 1 ? arguments[1] : undefined;
    if (options && Array.isArray(options)) {
      return options.find(function (o) {
        return o.code === filter;
      });
    }
    return null;
  };
  return /*#__PURE__*/React.createElement(EAMBaseInput, props, /*#__PURE__*/React.createElement(Autocomplete
  // Options
  , {
    options: options,
    getOptionLabel: getOptionLabelHandler,
    renderOption: renderOptionHandler.bind(null, renderValue)
    // Open props
    ,
    open: open,
    onOpen: function onOpen() {
      return setOpen(true);
    },
    onClose: onCloseHandler
    // On change
    ,
    onChange: onChangeHandler,
    onInputChange: onInputChangeHandler
    // Misc
    ,
    filterOptions: function filterOptions(x) {
      return x;
    },
    id: id,
    freeSolo: true,
    value: value?.code ? value.code : '',
    inputValue: inputValue,
    clearOnEscape: true
    // Visuals
    ,
    openOnFocus: true // Very important, otherwise onCloseHandler won't be fired for example when we focus a field with a tab and delete its value.
    // Funningly without this prop it still works correctly when we manually gain focus using the mouse.
    ,
    componentsProps: componentsProps,
    includeInputInList: true,
    loading: loading,
    size: "small",
    fullWidth: true,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement(TextField, _extends({}, params, props, {
        endAdornment: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SearchAdornment, {
          endTextAdornment: props.endTextAdornment
        }), props.endAdornment),
        value: value?.code ? value.code : '',
        desc: description,
        errorText: props.errorText,
        valid: valid,
        applyExtraInformation: applyExtraInformation
      }));
    }
  }));
};
export default React.memo(EAMComboAutocomplete, areEqual);