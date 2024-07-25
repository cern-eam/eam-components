function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactMarkdown from 'react-markdown';
var ReleaseNotes = function ReleaseNotes(props) {
  var file = props.file;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    fileContent = _useState2[0],
    setFileContent = _useState2[1];
  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    errorWithFile = _useState4[0],
    setErrorWithFile = _useState4[1];
  useEffect(function () {
    fetch(file).then(function (response) {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.text();
    }).then(function (text) {
      return setFileContent(text);
    })["catch"](function (error) {
      setErrorWithFile(error);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 20,
      height: '100%',
      overflow: 'auto'
    }
  }, errorWithFile ? /*#__PURE__*/React.createElement("p", null, "The release notes could not be loaded.") : /*#__PURE__*/React.createElement(InfiniteScroll, {
    height: "100%",
    dataLength: fileContent.length
  }, /*#__PURE__*/React.createElement(ReactMarkdown, null, fileContent)));
};
export default ReleaseNotes;