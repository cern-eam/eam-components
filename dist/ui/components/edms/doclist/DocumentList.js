"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _DocumentRow = _interopRequireDefault(require("./DocumentRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DocumentList =
/*#__PURE__*/
function (_Component) {
  _inherits(DocumentList, _Component);

  function DocumentList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DocumentList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DocumentList)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.listStyle = {
      width: "100%",
      marginTop: 10
    };
    _this.headerStyle = {
      display: "flex",
      height: 40,
      alignItems: "center",
      color: "rgba(0, 0, 0, 0.54)",
      fontWeight: 500,
      borderBottom: "1px solid #e0e0e0"
    };
    _this.idStyle = {
      margin: 7,
      marginLeft: 10,
      width: 100,
      flex: "0 0 auto",
      fontWeight: 500
    };
    _this.titleStyle = {
      margin: 5,
      flexGrow: 1
    };
    _this.statusStyle = {
      margin: 5,
      width: 110,
      flex: "0 0 auto",
      display: 'flex'
    };
    _this.moreStyle = {
      width: 48,
      flex: "0 0 auto",
      display: 'flex'
    };
    return _this;
  }

  _createClass(DocumentList, [{
    key: "generateDocumentList",
    value: function generateDocumentList() {
      var _this2 = this;

      if (this.props.documents) {
        return this.props.documents.map(function (document, index) {
          return _react["default"].createElement(_DocumentRow["default"], {
            document: document,
            index: index,
            key: index,
            filesUploadHandler: _this2.props.filesUploadHandler
          });
        });
      } else {
        return _react["default"].createElement("div", null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        style: this.listStyle
      }, _react["default"].createElement("div", {
        style: this.headerStyle
      }, _react["default"].createElement("div", {
        style: this.moreStyle
      }), _react["default"].createElement("div", {
        style: this.idStyle
      }, "ID"), _react["default"].createElement("div", {
        style: this.titleStyle
      }, "Title"), _react["default"].createElement("div", {
        style: this.statusStyle
      }, "Status")), this.generateDocumentList());
    }
  }]);

  return DocumentList;
}(_react.Component);

var _default = DocumentList;
exports["default"] = _default;