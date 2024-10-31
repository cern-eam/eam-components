function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import BlockUi from 'react-block-ui';
import EDMSGalleria from './galleria/EDMSGalleria';
import DocumentList from './doclist/DocumentList';
import WSEDMS from "../../../tools/WSEDMS";
import EDMSWidgetToolbar from "./EDMSWidgetToolbar";
import NCRCreation from "./ncrwidget/ncrcreation/NCRCreation";
import DocumentCreation from "./documentwidget/doccreation/DocumentCreation";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import SimpleEmptyState from "../emptystates/SimpleEmptyState";
var noCreationMode = 'DISABLED';
var regularCreationMode = 'REGULAR';
var NCRCreationMode = 'NCR';
var EDMSWidget = /*#__PURE__*/function (_Component) {
  function EDMSWidget() {
    var _this;
    _classCallCheck(this, EDMSWidget);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, EDMSWidget, [].concat(args));
    _this.state = {
      isLoading: true,
      currentView: 'DOCLIST',
      documentCreationVisible: false,
      errorMessage: '',
      documentList: []
    };
    //
    // DOCUMENT CREATION
    //
    _this.generateDocumentCreation = function (creationMode) {
      switch (creationMode) {
        case NCRCreationMode:
          return /*#__PURE__*/React.createElement(NCRCreation, {
            createDocument: _this.createDocument,
            objectID: _this.props.objectID,
            objectType: _this.props.objectType
          });
        default:
          return /*#__PURE__*/React.createElement(DocumentCreation, {
            createDocument: _this.createDocument
          });
      }
    };
    _this.getEmptyStateMessage = function (creationMode) {
      switch (creationMode) {
        case NCRCreationMode:
          return 'No NCRs to show.';
        default:
          return 'No documents to show.';
      }
    };
    _this.createDocument = function (document, files, documentLink) {
      //creating document
      _this.blockUI();
      //isLoading is set to false later by readDocuments if successful

      var data = {
        objectId: _this.props.objectID,
        objectType: _this.props.objectType,
        document: document,
        documentLink: documentLink,
        mode: _this.props.creationMode
      };
      WSEDMS.createNewDocument(data).then(function (response) {
        if (files.length > 0) {
          var _response$body$data = response.body.data,
            edmsId = _response$body$data.edmsId,
            version = _response$body$data.version;
          Promise.all(files.map(function (file) {
            _this.uploadFile(edmsId, version, file);
          })).then(function () {
            _this.props.showSuccess('Files have been uploaded');
            _this.readDocuments(_this.props.objectID, _this.props.objectType);
          })["catch"](function (reason) {
            //TODO enhance the error handling (partial fail/success)
            var errorMessage = _this.getErrorMessage(reason);
            _this.props.showError('File upload was not successful. Detailed error: ' + errorMessage);
            _this.readDocuments(_this.props.objectID, _this.props.objectType);
          });
          _this.setState(function () {
            return {
              documentCreationVisible: false
            };
          });
        } else {
          _this.readDocuments(_this.props.objectID, _this.props.objectType);
          _this.setState(function () {
            return {
              documentCreationVisible: false
            };
          });
        }
      })["catch"](function (reason) {
        var errorMessage = _this.getErrorMessage(reason);
        _this.props.showError(errorMessage);
        _this.unblockUI();
      });
    };
    //
    // FILE UPLOAD
    //
    _this.uploadFile = function (docId, version, file) {
      var formData = new FormData();
      formData.append('file', file, file.name);
      formData.append('documentid', docId);
      formData.append('documentversion', version);
      return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        var urlUpload = process.env.REACT_APP_BACKEND.replace('/eamlightws/rest', '/cern-eam-services/edms/upload').replace('/logbookws/rest', '/cern-eam-services/edms/upload');
        req.open('POST', urlUpload, true);
        req.onload = function () {
          // This is called even on 404 etc
          // so check the status
          if (req.status === 200) {
            // Resolve the promise with the response text
            resolve('Successful Upload');
          } else {
            // Otherwise reject with the status text
            // which will hopefully be a meaningful error
            reject(Error(req.statusText));
          }
        };

        // Handle network errors
        req.onerror = function () {
          reject(Error("Network Error"));
        };

        // Make the request
        req.send(formData);
      });
    };
    _this.handleFilesUpload = function (documentId, version, files) {
      //Upload in progress
      _this.blockUI();
      //isLoading is set to false later by readDocuments

      Promise.all(files.map(function (file) {
        return _this.uploadFile(documentId, version, file);
      })).then(function () {
        _this.props.showSuccess('Files have been uploaded');
        _this.readDocuments(_this.props.objectID, _this.props.objectType);
      })["catch"](function (reason) {
        //TODO enhance the error handling (partial fail/success)
        var errorMessage = _this.getErrorMessage(reason);
        _this.props.showError('File upload was not successful. Detailed error: ' + errorMessage);
        _this.readDocuments(_this.props.objectID, _this.props.objectType);
      });
    };
    //
    // READ DOCUMENTS
    //
    _this.readDocuments = function (objectID, objectType) {
      //Is loading
      _this.blockUI();
      //Get documents

      WSEDMS.getEDMSDocuments(objectID, objectType, _this.props.creationMode).then(function (response) {
        var documents = response.body.data;
        _this.setState(function () {
          return {
            documentList: documents.filter(_this.props.filter || (_this.props.creationMode === 'NCR' ? _this.NCRFilter : function (document) {
              return !_this.NCRFilter(document);
            })),
            isLoading: false
          };
        });
      })["catch"](function (reason) {
        var errorMessage = _this.getErrorMessage(reason);
        _this.setState({
          errorMessage: errorMessage
        });
        _this.unblockUI();
        //TODO handle the error message...
      });
    };
    _this.NCRFilter = function (document) {
      return document.documentType === 'Report' && document.attributes === 'Non conformity';
    };
    //
    // STYLES
    //
    _this.mainDivStyle = {
      width: "100%"
    };
    //
    // ERROR HANDLING
    //
    _this.getErrorMessage = function (reason) {
      if (reason && reason.response && reason.response.body && reason.response.body.errors) {
        return reason.response.body.errors[0].message;
      }
    };
    //
    // UI BLOCKING
    //
    _this.blockUI = function () {
      _this.setState(function () {
        return {
          isLoading: true
        };
      });
    };
    _this.unblockUI = function () {
      _this.setState(function () {
        return {
          isLoading: false
        };
      });
    };
    return _this;
  }
  _inherits(EDMSWidget, _Component);
  return _createClass(EDMSWidget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.objectID && this.props.objectType) {
        this.readDocuments(this.props.objectID, this.props.objectType);
      } else if (this.props.documents && this.props.documents.length > 0) {}
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      if (this.props.objectID !== nextProps.objectID || this.props.objectType !== nextProps.objectType && this.props.objectID) {
        this.readDocuments(nextProps.objectID, nextProps.objectType);
      } else if (!nextProps.objectID || !nextProps.objectType) {
        /*Clean documents*/
        this.unblockUI();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var hideLink = this.props.hideLink;
      var _this$state = this.state,
        documentList = _this$state.documentList,
        isLoading = _this$state.isLoading;
      var isEmptyState = !documentList.length && !isLoading;
      return /*#__PURE__*/React.createElement(BlockUi, {
        tag: "div",
        blocking: this.state.isLoading,
        style: this.mainDivStyle
      }, /*#__PURE__*/React.createElement(EDMSWidgetToolbar, {
        link: hideLink ? undefined : this.props.edmsDocListLink + this.props.objectType + ":" + this.props.objectID + "::",
        currentView: this.state.currentView,
        documentCreationVisible: this.state.documentCreationVisible,
        documentCreationDisabled: this.props.creationMode === noCreationMode,
        galleriaClickHandler: function galleriaClickHandler() {
          return _this2.setState({
            currentView: "GALLERIA"
          });
        },
        doclistClickHandler: function doclistClickHandler() {
          return _this2.setState({
            currentView: "DOCLIST"
          });
        },
        documentCreationHandler: function documentCreationHandler() {
          return _this2.setState({
            documentCreationVisible: !_this2.state.documentCreationVisible
          });
        }
      }), this.state.documentCreationVisible && this.generateDocumentCreation(this.props.creationMode), this.state.errorMessage ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          padding: 16,
          justifyContent: 'center',
          alignItems: 'center'
        }
      }, /*#__PURE__*/React.createElement(ErrorOutline, {
        style: {
          padding: 4
        }
      }), /*#__PURE__*/React.createElement("span", null, this.state.errorMessage)) : isEmptyState ? /*#__PURE__*/React.createElement(SimpleEmptyState, {
        message: this.getEmptyStateMessage(this.props.creationMode)
      }) : !isLoading && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          display: this.state.currentView === 'GALLERIA' ? 'block' : 'none',
          margin: 5,
          minWidth: 514
        }
      }, /*#__PURE__*/React.createElement(EDMSGalleria, _extends({
        documentList: documentList,
        handleFilesUpload: this.handleFilesUpload
      }, this.props))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: this.state.currentView === 'DOCLIST' ? 'block' : 'none',
          margin: 5
        }
      }, /*#__PURE__*/React.createElement(DocumentList, {
        documents: documentList,
        filesUploadHandler: this.handleFilesUpload
      }))));
    }
  }]);
}(Component);
EDMSWidget.defaultProps = {
  mode: 'EDMS',
  title: 'EDMS DOCUMENTS',
  creationMode: 'REGULAR'
};
export default EDMSWidget;