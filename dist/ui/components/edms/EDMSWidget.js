'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBlockUi = require('react-block-ui');

var _reactBlockUi2 = _interopRequireDefault(_reactBlockUi);

var _EDMSGalleria = require('./galleria/EDMSGalleria');

var _EDMSGalleria2 = _interopRequireDefault(_EDMSGalleria);

var _DocumentList = require('./doclist/DocumentList');

var _DocumentList2 = _interopRequireDefault(_DocumentList);

var _DocumentListTest = require('./doclist/DocumentListTest');

var _DocumentListTest2 = _interopRequireDefault(_DocumentListTest);

var _WSEDMS = require('../../../tools/WSEDMS');

var _WSEDMS2 = _interopRequireDefault(_WSEDMS);

var _panel = require('../panel');

var _panel2 = _interopRequireDefault(_panel);

var _EDMSWidgetToolbar = require('./EDMSWidgetToolbar');

var _EDMSWidgetToolbar2 = _interopRequireDefault(_EDMSWidgetToolbar);

var _NCRCreation = require('./ncrwidget/ncrcreation/NCRCreation');

var _NCRCreation2 = _interopRequireDefault(_NCRCreation);

var _DocumentCreation = require('./documentwidget/doccreation/DocumentCreation');

var _DocumentCreation2 = _interopRequireDefault(_DocumentCreation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noCreationMode = 'DISABLED';
var regularCreationMode = 'REGULAR';
var NCRCreationMode = 'NCR';

var EDMSWidget = function (_Component) {
    _inherits(EDMSWidget, _Component);

    function EDMSWidget() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EDMSWidget);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EDMSWidget.__proto__ || Object.getPrototypeOf(EDMSWidget)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            isLoading: true,
            currentView: 'DOCLIST',
            documentCreationVisible: false
        }, _this.generateDocumentCreation = function (creationMode) {
            switch (creationMode) {
                case NCRCreationMode:
                    return _react2.default.createElement(_NCRCreation2.default, { createDocument: _this.createDocument,
                        objectID: _this.props.objectID,
                        objectType: _this.props.objectType });
                default:
                    return _react2.default.createElement(_DocumentCreation2.default, { createDocument: _this.createDocument });
            }
        }, _this.createDocument = function (document, files, documentLink) {

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

            _WSEDMS2.default.createNewDocument(data).then(function (response) {
                if (files.length > 0) {
                    var _response$body$data = response.body.data,
                        edmsId = _response$body$data.edmsId,
                        version = _response$body$data.version;


                    Promise.all(files.map(function (file) {
                        _this.uploadFile(edmsId, version, file);
                    })).then(function () {
                        _this.props.showSuccess('Files have been uploaded');
                        _this.readDocuments(_this.props.objectID, _this.props.objectType);
                    }).catch(function () {
                        //TODO enhance the error handling (partial fail/success)
                        _this.displayError('File upload was not successful');
                        _this.readDocuments(_this.props.objectID, _this.props.objectType);
                    });

                    _this.setState(function () {
                        return { documentCreationVisible: false };
                    });
                } else {
                    _this.readDocuments(_this.props.objectID, _this.props.objectType);
                    _this.setState(function () {
                        return { documentCreationVisible: false };
                    });
                }
            }).catch(function (reason) {
                var errorMessage = _this.getErrorMessage(reason);
                _this.displayError(errorMessage);
                _this.unblockUI();
            });
        }, _this.uploadFile = function (docId, version, file) {
            var formData = new FormData();
            formData.append('file', file, file.name);
            formData.append('documentid', docId);
            formData.append('documentversion', version);

            return new Promise(function (resolve, reject) {
                // Do the usual XHR stuff
                var req = new XMLHttpRequest();
                var urlUpload = process.env.REACT_APP_BACKEND.replace('/eamlightws/rest', '/cern-eam-services/edms/upload');
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
        }, _this.handleFilesUpload = function (documentId, version, files) {
            //Upload in progress
            _this.blockUI();
            //isLoading is set to false later by readDocuments

            Promise.all(files.map(function (file) {
                return _this.uploadFile(documentId, version, file);
            })).then(function () {
                _this.props.showSuccess('Files have been uploaded');
                _this.readDocuments(_this.props.objectID, _this.props.objectType);
            }).catch(function () {
                //TODO enhance the error handling (partial fail/success)
                _this.displayError('File upload was not successful');
                _this.readDocuments(_this.props.objectID, _this.props.objectType);
            });
        }, _this.readDocuments = function (objectID, objectType) {
            //Is loading
            _this.blockUI();
            //Get documents

            _WSEDMS2.default.getEDMSDocuments(objectID, objectType, _this.props.creationMode).then(function (response) {
                var documents = response.body.data;
                _this.setState(function () {
                    return {
                        documentList: documents.filter(_this.props.filter || (_this.props.creationMode === 'NCR' ? _this.NCRFilter : function (document) {
                            return !_this.NCRFilter(document);
                        })),
                        isLoading: false
                    };
                });
            }).catch(function (reason) {
                var errorMessage = _this.getErrorMessage(reason);
                _this.unblockUI();
                //TODO handle the error message...
            });
        }, _this.NCRFilter = function (document) {
            return document.documentType === 'Report' && document.attributes === 'Non conformity';
        }, _this.mainDivStyle = {
            width: "100%",
            marginBottom: -20,
            marginTop: -8,
            minHeight: 300
        }, _this.displayError = function (message) {
            console.log('showing error', message);
            _this.props.showError(message);
        }, _this.getErrorMessage = function (reason) {
            if (reason && reason.response && reason.response.body && reason.response.body.errors) {
                return reason.response.body.errors[0].message;
            }
        }, _this.blockUI = function () {
            _this.setState(function () {
                return { isLoading: true };
            });
        }, _this.unblockUI = function () {
            _this.setState(function () {
                return { isLoading: false };
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EDMSWidget, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.objectID && this.props.objectType) {
                this.readDocuments(this.props.objectID, this.props.objectType);
            } else if (this.props.documents && this.props.documents.length > 0) {}
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextContext) {
            if (this.props.objectID !== nextProps.objectID || this.props.objectType !== nextProps.objectType && this.props.objectID) {
                this.readDocuments(nextProps.objectID, nextProps.objectType);
            } else if (!nextProps.objectID || !nextProps.objectType) {
                /*Clean documents*/
                this.unblockUI();
            }
        }

        //
        // DOCUMENT CREATION
        //

        //
        // FILE UPLOAD
        //

        //
        // READ DOCUMENTS
        //


        //
        // STYLES
        //


        //
        // ERROR HANDLING
        //


        //
        // UI BLOCKING
        //

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var hideLink = this.props.hideLink;

            return _react2.default.createElement(
                _panel2.default,
                { heading: this.props.title,
                    detailsStyle: { marginLeft: '-24px', marginRight: '-24px' },
                    link: hideLink ? undefined : this.props.edmsDocListLink + this.props.objectType + ":" + this.props.objectID + "::" },
                _react2.default.createElement(
                    _reactBlockUi2.default,
                    { tag: 'div', blocking: this.state.isLoading, style: this.mainDivStyle },
                    _react2.default.createElement(_EDMSWidgetToolbar2.default, { currentView: this.state.currentView,
                        documentCreationVisible: this.state.documentCreationVisible,
                        documentCreationDisabled: this.props.creationMode === noCreationMode,
                        galleriaClickHandler: function galleriaClickHandler() {
                            return _this2.setState({ currentView: "GALLERIA" });
                        },
                        doclistClickHandler: function doclistClickHandler() {
                            return _this2.setState({ currentView: "DOCLIST" });
                        },
                        documentCreationHandler: function documentCreationHandler() {
                            return _this2.setState({ documentCreationVisible: !_this2.state.documentCreationVisible });
                        }
                    }),
                    this.state.documentCreationVisible && this.generateDocumentCreation(this.props.creationMode),
                    _react2.default.createElement(
                        'div',
                        { style: { display: this.state.currentView === 'GALLERIA' ? 'block' : 'none', margin: 5, minWidth: 514 } },
                        _react2.default.createElement(_EDMSGalleria2.default, _extends({ documentList: this.state.documentList,
                            handleFilesUpload: this.handleFilesUpload
                        }, this.props))
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { display: this.state.currentView === 'DOCLIST' ? 'block' : 'none', margin: 5 } },
                        _react2.default.createElement(_DocumentList2.default, { documents: this.state.documentList,
                            filesUploadHandler: this.handleFilesUpload
                        })
                    )
                )
            );
        }
    }]);

    return EDMSWidget;
}(_react.Component);

EDMSWidget.defaultProps = {
    mode: 'EDMS',
    title: 'EDMS DOCUMENTS',
    creationMode: 'REGULAR'
};

exports.default = EDMSWidget;