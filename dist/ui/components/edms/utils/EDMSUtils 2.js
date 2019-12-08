'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEDMSFileUrl = getEDMSFileUrl;
exports.getEDMSFileThumbnailUrl = getEDMSFileThumbnailUrl;
function getEDMSFileUrl(file) {
    //Real URL
    return process.env.REACT_APP_BACKEND.replace('/logbookws/rest', '/cern-eam-services/rest').replace('/eamlightws/rest', '/cern-eam-services/rest') + ('/edms/file?edmsid=' + file.edmsId + '&version=' + file.version + '&filename=' + file.fileName + '&filetype=' + file.fileType + '&convertedname=' + file.convertedName);
}

function getEDMSFileThumbnailUrl(file) {
    return process.env.REACT_APP_BACKEND.replace('/logbookws/rest', '/cern-eam-services/rest').replace('/eamlightws/rest', '/cern-eam-services/rest') + ('/edms/thumbnail?edmsid=' + file.edmsId + '&version=' + file.version + '&filename=' + file.fileName + '&filetype=' + file.fileType);
}