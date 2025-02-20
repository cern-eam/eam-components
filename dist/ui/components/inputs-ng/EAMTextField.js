function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState, useEffect } from "react";
import { areEqual } from "./tools/input-tools";
import EAMBaseInput from "./components/EAMBaseInput";
import TextField from "./components/TextField";
var EAMTextField = function EAMTextField(props) {
  var value = props.value,
    onChange = props.onChange,
    onChangeInput = props.onChangeInput,
    validator = props.validator,
    _onBlur = props.onBlur,
    autoFocus = props.autoFocus,
    onKeyUp = props.onKeyUp,
    _props$textarea = props.textarea,
    textarea = _props$textarea === void 0 ? false : _props$textarea;
  var valueOrEmptyString = value || "";
  var _useState = useState(valueOrEmptyString),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  useEffect(function () {
    return setInputValue(valueOrEmptyString);
  }, [value]);

  // TODO: to be reviewed
  var inputProps = {
    onChange: function onChange(event) {
      setInputValue(event.target.value);
      onChangeInput?.(event.target.value);
    },
    onBlur: function onBlur(event) {
      if (inputValue !== value) {
        if (!validator || validator(inputValue)) {
          // If there is no validator defined or if the validation passes
          onChange?.(inputValue);
        } else {
          // Revert to original value if validation fails
          setInputValue(valueOrEmptyString);
        }
      }
      _onBlur?.(event);
    },
    value: inputValue,
    onKeyUp: onKeyUp,
    autoFocus: autoFocus
  };
  return /*#__PURE__*/React.createElement(EAMBaseInput, props, /*#__PURE__*/React.createElement(TextField, _extends({}, props, {
    inputProps: inputProps,
    textarea: textarea
  })));
};
export default React.memo(EAMTextField, areEqual);