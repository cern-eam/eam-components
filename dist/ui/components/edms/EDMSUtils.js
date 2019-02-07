"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getEDMSFileUrl;

var _EDMSWidget = require("./EDMSWidget");

var _plus = require("./img/plus.png");

var _plus2 = _interopRequireDefault(_plus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getEDMSFileUrl(document) {
    if (_EDMSWidget.CREATE_NEW === document.edmsId) return _plus2.default;
    //Real URL
    return process.env.REACT_APP_BACKEND + "/edms/file?edmsid=" + document.edmsId + "&version=" + document.version + "&filename=" + document.fileName + "&filetype=" + document.fileType + "&convertedname=" + document.convertedName;
}