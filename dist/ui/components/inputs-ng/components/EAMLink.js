function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from 'mdi-material-ui/OpenInNew';
import { Link } from 'react-router-dom';

var EAMLink = function EAMLink(_ref) {
  var link = _ref.link,
      value = _ref.value;
  var eamLink = null;

  if (link && link(value)) {
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
  }, /*#__PURE__*/React.createElement(OpenInNewIcon, null));
};

export default EAMLink;