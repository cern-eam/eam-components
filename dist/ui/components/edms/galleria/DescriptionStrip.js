import React from 'react';
import getEDMSFileUrl from "./EDMSUtils";

var DescriptionStrip = function DescriptionStrip(file) {
  return /*#__PURE__*/React.createElement("div", {
    className: "filmStripContainer"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "edmsContentHeader"
  }, "EDMS: ", /*#__PURE__*/React.createElement("a", {
    href: file.docUrl,
    target: "_blank",
    className: "edmsLink"
  }, file.edmsId), "\xA0\xA0\xA0\xA0 File: ", /*#__PURE__*/React.createElement("a", {
    href: file.fullPath,
    target: "_blank",
    className: "edmsLink"
  }, file.fileName)), /*#__PURE__*/React.createElement("p", {
    className: "edmsTitle"
  }, "Title: ", /*#__PURE__*/React.createElement("a", {
    href: file.docUrl,
    target: "_blank",
    className: "edmsLink"
  }, file.description)));
};

export default DescriptionStrip;