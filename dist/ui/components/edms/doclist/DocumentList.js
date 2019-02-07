"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _DocumentRow = require("./DocumentRow");

var _DocumentRow2 = _interopRequireDefault(_DocumentRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DocumentList = function (_Component) {
    _inherits(DocumentList, _Component);

    function DocumentList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DocumentList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DocumentList.__proto__ || Object.getPrototypeOf(DocumentList)).call.apply(_ref, [this].concat(args))), _this), _this.listStyle = {
            width: "100%",
            marginTop: 10
        }, _this.headerStyle = {
            display: "flex",
            height: 40,
            alignItems: "center",
            color: "rgba(0, 0, 0, 0.54)",
            fontWeight: 500,
            borderBottom: "1px solid #e0e0e0"
        }, _this.idStyle = {
            margin: 7,
            marginLeft: 10,
            width: 100,
            flex: "0 0 auto",
            fontWeight: 500
        }, _this.titleStyle = {
            margin: 5,
            flexGrow: 1
        }, _this.statusStyle = {
            margin: 5,
            width: 110,
            flex: "0 0 auto",
            display: 'flex'
        }, _this.moreStyle = {
            width: 48,
            flex: "0 0 auto",
            display: 'flex'
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DocumentList, [{
        key: "generateDocumentList",
        value: function generateDocumentList() {
            var _this2 = this;

            if (this.props.documents) {
                return this.props.documents.map(function (document, index) {
                    return _react2.default.createElement(_DocumentRow2.default, { document: document, index: index, filesUploadHandler: _this2.props.filesUploadHandler });
                });
            } else {
                return _react2.default.createElement("div", null);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { style: this.listStyle },
                _react2.default.createElement(
                    "div",
                    { style: this.headerStyle },
                    _react2.default.createElement("div", { style: this.moreStyle }),
                    _react2.default.createElement(
                        "div",
                        { style: this.idStyle },
                        "ID"
                    ),
                    _react2.default.createElement(
                        "div",
                        { style: this.titleStyle },
                        "Title"
                    ),
                    _react2.default.createElement(
                        "div",
                        { style: this.statusStyle },
                        "Status"
                    )
                ),
                this.generateDocumentList()
            );
        }
    }]);

    return DocumentList;
}(_react.Component);

exports.default = DocumentList;