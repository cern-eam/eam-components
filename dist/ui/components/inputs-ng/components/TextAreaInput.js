function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { styled } from '@mui/material/styles';
var TextAreaInput = styled('textarea')(function (_ref) {
  var theme = _ref.theme;
  return {
    '&': _defineProperty({
      display: "block",
      width: "100%",
      boxSizing: "border-box",
      padding: "7px 10px",
      fontSize: "15px",
      lineHeight: 1.5,
      color: "#495057",
      backgroundClip: "padding-box",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      backgroundColor: "#fafafa",
      height: 38,
      minHeight: 38,
      maxHeight: 800,
      fontWeight: 300,
      fontFamily: "'Roboto', sans-serif",
      resize: "vertical"
    }, "height", 120),
    '&:focus': {
      outline: "2px solid ".concat(theme.palette.primary.main),
      backgroundColor: "#fff"
    },
    '&:disabled': {
      backgroundColor: "#f5f5f5",
      border: "1px dashed #eee"
    }
  };
});
export default TextAreaInput;