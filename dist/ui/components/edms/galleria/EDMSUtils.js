"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getEDMSFileUrl;

var _EDMSGalleria = require("./EDMSGalleria");

var _plus = _interopRequireDefault(require("./img/plus.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getEDMSFileUrl(document) {
  if (_EDMSGalleria.CREATE_NEW === document.edmsId) return _plus["default"]; //Real URL

  return "".concat(process.env.REACT_APP_BACKEND, "/edms/file?edmsid=").concat(document.edmsId, "&version=").concat(document.version, "&filename=").concat(document.fileName, "&filetype=").concat(document.fileType, "&convertedname=").concat(document.convertedName);
}