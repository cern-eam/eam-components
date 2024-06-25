function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import './DocumentsInstructionsDialog.css';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import BlockUi from 'react-block-ui';
import KeyCode from "eam-components/dist/enums/KeyCode";
import Dialog from "@mui/material/Dialog";
import CommentUser from '../../comments/CommentUser';
import EAMSelect from '../../inputs-ng/EAMSelect';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
var flatFiles = function flatFiles(documents) {
  return documents?.flatMap(function (document) {
    return document.files.map(function (file) {
      return {
        label: "".concat(document.title, " - ").concat(file.fileName),
        url: file.fullPath
      };
    });
  });
};
function DocumentsInstructionsDialog(props) {
  var title = props.title,
    subtitle = props.subtitle,
    taskPlanMetadata = props.taskPlanMetadata;
  var _ref = taskPlanMetadata || {},
    _ref$comments = _ref.comments,
    comments = _ref$comments === void 0 ? [] : _ref$comments,
    _ref$documents = _ref.documents,
    documents = _ref$documents === void 0 ? [] : _ref$documents;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    embedKey = _useState4[0],
    setEmbedKey = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedDocument = _useState6[0],
    setSelectedDocument = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    flattenedFiles = _useState8[0],
    setFlattenedFiles = _useState8[1];
  var toggleInfo = function toggleInfo() {
    setOpen(!open);
  };
  var onKeyDown = function onKeyDown(e) {
    if (e.keyCode === KeyCode.ENTER) {
      e.stopPropagation();
    }
  };
  useEffect(function () {
    if (open) {
      var _flattenedFiles = flatFiles(documents);
      setFlattenedFiles(_flattenedFiles);
      setSelectedDocument(_flattenedFiles?.[0]);
    }
  }, [open, taskPlanMetadata]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
    disabled: documents.length == 0 & comments.length == 0,
    onClick: function onClick(e) {
      e.stopPropagation();
      toggleInfo();
    }
  }, /*#__PURE__*/React.createElement(InfoOutlinedIcon, {
    fontSize: "small"
  })), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    onKeyDown: onKeyDown
  }, /*#__PURE__*/React.createElement(Dialog, {
    fullWidth: true,
    maxWidth: "lg",
    id: "documentsInstructionsDialog",
    open: open,
    onClose: toggleInfo,
    "aria-labelledby": "form-dialog-title"
  }, /*#__PURE__*/React.createElement(DialogTitle, {
    id: "form-dialog-title",
    className: "infoTitle"
  }, title, " ", subtitle && /*#__PURE__*/React.createElement("p", {
    className: "subtitle"
  }, " - ", subtitle)), /*#__PURE__*/React.createElement(DialogContent, {
    className: "dialogContent",
    id: "content"
  }, comments?.length > 0 && /*#__PURE__*/React.createElement(BlockUi, {
    tag: "div",
    className: "blockUiInstructions"
  }, /*#__PURE__*/React.createElement("h3", null, "Instructions"), comments.map(function (comment, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "instructionContainer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "instructionTextContainer"
    }, comment.text), /*#__PURE__*/React.createElement("div", {
      className: "instructionInfoContainer"
    }, /*#__PURE__*/React.createElement(CommentUser, {
      userDesc: comment.creationUserDesc,
      userDate: comment.creationDate
    })));
  })), flattenedFiles?.length > 0 && /*#__PURE__*/React.createElement(BlockUi, {
    tag: "div",
    className: "blockUiDocuments",
    style: comments?.length == 0 ? {
      border: 0
    } : {}
  }, flattenedFiles?.length !== 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Documents"), /*#__PURE__*/React.createElement(EAMSelect, {
    label: "Document",
    value: selectedDocument,
    onChange: function onChange(value) {
      return setSelectedDocument(value);
    },
    renderValue: function renderValue(value) {
      return value.label || '';
    },
    options: flattenedFiles
  })) : /*#__PURE__*/React.createElement("p", {
    className: "onlyOneDocument"
  }, selectedDocument.label), selectedDocument?.code !== '' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("embed", {
    key: selectedDocument.code,
    allowFullScreen: true,
    title: "EDMS",
    className: "documentIframe",
    src: selectedDocument?.url
  })) : /*#__PURE__*/React.createElement("p", {
    className: "noDocumentSelected"
  }, "No document selected."))), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
    onClick: toggleInfo,
    color: "primary"
  }, "Close")))));
}
export default DocumentsInstructionsDialog;