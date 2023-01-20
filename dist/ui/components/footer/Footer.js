import React from 'react';

/**
 * Use the 'customPrepend' and 'customAppend' props to add custom
 * content to the start and end of the base footer, respectively
 */
var Footer = function Footer(props) {
  var customPrepend = props.customPrepend,
    appName = props.appName,
    version = props.version,
    supportEmail = props.supportEmail,
    customAppend = props.customAppend;
  return /*#__PURE__*/React.createElement(React.Fragment, null, customPrepend, /*#__PURE__*/React.createElement("b", null, appName), " (v", version, ")", ' ', /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'white',
      marginRight: 10
    },
    href: "mailto:".concat(supportEmail)
  }, supportEmail), customAppend);
};
export default Footer;