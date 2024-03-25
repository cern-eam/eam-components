function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    onKeyUp = props.onKeyUp;
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
    inputProps: inputProps
  })));
};
export default React.memo(EAMTextField, areEqual);