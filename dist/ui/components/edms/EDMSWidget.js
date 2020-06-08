"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBlockUi = _interopRequireDefault(require("react-block-ui"));

var _EDMSGalleria = _interopRequireDefault(require("./galleria/EDMSGalleria"));

var _DocumentList = _interopRequireDefault(require("./doclist/DocumentList"));

var _WSEDMS = _interopRequireDefault(require("../../../tools/WSEDMS"));

var _EDMSWidgetToolbar = _interopRequireDefault(require("./EDMSWidgetToolbar"));

var _NCRCreation = _interopRequireDefault(require("./ncrwidget/ncrcreation/NCRCreation"));

var _DocumentCreation = _interopRequireDefault(require("./documentwidget/doccreation/DocumentCreation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var noCreationMode = 'DISABLED';
var regularCreationMode = 'REGULAR';
var NCRCreationMode = 'NCR';

var EDMSWidget = /*#__PURE__*/function (_Component) {
  _inherits(EDMSWidget, _Component);

  var _super = _createSuper(EDMSWidget);

  function EDMSWidget() {
    var _this;

    _classCallCheck(this, EDMSWidget);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      isLoading: true,
      currentView: 'DOCLIST',
      documentCreationVisible: false
    };

    _this.generateDocumentCreation = function (creationMode) {
      switch (creationMode) {
        case NCRCreationMode:
          return /*#__PURE__*/_react["default"].createElement(_NCRCreation["default"], {
            createDocument: _this.createDocument,
            objectID: _this.props.objectID,
            objectType: _this.props.objectType
          });

        default:
          return /*#__PURE__*/_react["default"].createElement(_DocumentCreation["default"], {
            createDocument: _this.createDocument
          });
      }
    };

    _this.createDocument = function (document, files, documentLink) {
      //creating document
      _this.blockUI(); //isLoading is set to false later by readDocuments if successful


      var data = {
        objectId: _this.props.objectID,
        objectType: _this.props.objectType,
        document: document,
        documentLink: documentLink,
        mode: _this.props.creationMode
      };

      _WSEDMS["default"].createNewDocument(data).then(function (response) {
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
        }; // Handle network errors


        req.onerror = function () {
          reject(Error("Network Error"));
        }; // Make the request


        req.send(formData);
      });
    };

    _this.handleFilesUpload = function (documentId, version, files) {
      //Upload in progress
      _this.blockUI(); //isLoading is set to false later by readDocuments


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

    _this.readDocuments = function (objectID, objectType) {
      //Is loading
      _this.blockUI(); //Get documents


      _WSEDMS["default"].getEDMSDocuments(objectID, objectType, _this.props.creationMode).then(function (response) {
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

        _this.props.showError(errorMessage);

        _this.unblockUI(); //TODO handle the error message...

      });
    };

    _this.NCRFilter = function (document) {
      return document.documentType === 'Report' && document.attributes === 'Non conformity';
    };

    _this.mainDivStyle = {
      width: "100%",
      minHeight: 300
    };

    _this.getErrorMessage = function (reason) {
      if (reason && reason.response && reason.response.body && reason.response.body.errors) {
        return reason.response.body.errors[0].message;
      }
    };

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

  _createClass(EDMSWidget, [{
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
    } //
    // DOCUMENT CREATION
    //

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var hideLink = this.props.hideLink;
      return /*#__PURE__*/_react["default"].createElement(_reactBlockUi["default"], {
        tag: "div",
        blocking: this.state.isLoading,
        style: this.mainDivStyle
      }, /*#__PURE__*/_react["default"].createElement(_EDMSWidgetToolbar["default"], {
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
      }), this.state.documentCreationVisible && this.generateDocumentCreation(this.props.creationMode), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: this.state.currentView === 'GALLERIA' ? 'block' : 'none',
          margin: 5,
          minWidth: 514
        }
      }, /*#__PURE__*/_react["default"].createElement(_EDMSGalleria["default"], _extends({
        documentList: this.state.documentList,
        handleFilesUpload: this.handleFilesUpload
      }, this.props))), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: this.state.currentView === 'DOCLIST' ? 'block' : 'none',
          margin: 5
        }
      }, /*#__PURE__*/_react["default"].createElement(_DocumentList["default"], {
        documents: this.state.documentList,
        filesUploadHandler: this.handleFilesUpload
      })));
    }
  }]);

  return EDMSWidget;
}(_react.Component);

EDMSWidget.defaultProps = {
  mode: 'EDMS',
  title: 'EDMS DOCUMENTS',
  creationMode: 'REGULAR'
};
var _default = EDMSWidget;
exports["default"] = _default;