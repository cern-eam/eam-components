import React from 'react';
import { useHistory } from "react-router";
/**
 * Use the 'customPrepend' and 'customAppend' props to add custom
 * content to the start and end of the base footer, respectively
 */
var Footer = function Footer(props) {
  var customPrepend = props.customPrepend,
    appName = props.appName,
    version = props.version,
    supportEmail = props.supportEmail,
    releaseNotesPath = props.releaseNotesPath,
    customAppend = props.customAppend;
  var history = useHistory();
  return /*#__PURE__*/React.createElement(React.Fragment, null, customPrepend, /*#__PURE__*/React.createElement("b", null, appName), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 5,
      marginRight: 5
    }
  }, "(", /*#__PURE__*/React.createElement("span", {
    style: {
      textDecorationLine: "underline",
      cursor: "pointer"
    },
    onClick: function onClick() {
      return history.push(releaseNotesPath);
    }
  }, "v", version), ")"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: "white",
      marginRight: 10
    },
    href: "mailto:".concat(supportEmail)
  }, supportEmail), customAppend);
};
export default Footer;