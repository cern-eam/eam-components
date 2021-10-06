import plus from './img/plus.png';
export default function getEDMSFileUrl(document) {
  if (undefined === document.edmsId) return plus; //Real URL

  return "".concat(process.env.REACT_APP_BACKEND, "/edms/file?edmsid=").concat(document.edmsId, "&version=").concat(document.version, "&filename=").concat(document.fileName, "&filetype=").concat(document.fileType, "&convertedname=").concat(document.convertedName);
}