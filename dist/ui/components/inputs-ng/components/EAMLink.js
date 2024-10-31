function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from 'mdi-material-ui/OpenInNew';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { Link } from 'react-router-dom';
var EAMLink = function EAMLink(_ref) {
  var link = _ref.link,
    value = _ref.value;
  var eamLink = null;
  var isExternalLink = null;
  if (link && link(value)) {
    isExternalLink = !link().startsWith('/');
    if (link().startsWith('http')) {
      eamLink = React.forwardRef(function (props, ref) {
        return /*#__PURE__*/React.createElement("a", _extends({
          href: link(value)
        }, props, {
          target: "_blank",
          rel: "noopener noreferrer"
        }));
      });
    } else {
      eamLink = React.forwardRef(function (props, ref) {
        return /*#__PURE__*/React.createElement(Link, _extends({
          to: link(value)
        }, props));
      });
    }
  }
  return /*#__PURE__*/React.createElement(IconButton, {
    component: eamLink,
    disabled: !value
  }, isExternalLink ? /*#__PURE__*/React.createElement(OpenInNewIcon, null) : /*#__PURE__*/React.createElement(OpenInBrowserIcon, null));
};
export default EAMLink;