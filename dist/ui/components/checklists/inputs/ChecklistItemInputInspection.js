"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ChecklistItemInputInspection =
/*#__PURE__*/
function (_Component) {
  _inherits(ChecklistItemInputInspection, _Component);

  function ChecklistItemInputInspection(props) {
    var _this$labelUOMStyle;

    var _this;

    _classCallCheck(this, ChecklistItemInputInspection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChecklistItemInputInspection).call(this, props));
    _this.mainStyle = {
      flex: "0 0 170px",
      display: "flex",
      position: "relative",
      marginLeft: 10,
      flexDirection: "column"
    };
    _this.inputStyle = {
      width: "1%",
      flex: "1 1 auto",
      border: "1px solid #ced4da",
      padding: "5px 10px",
      fontSize: 16,
      transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      borderRadius: 4,
      backgroundColor: "#fff",
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      zIndex: 20
    };
    _this.labelUOMStyle = (_this$labelUOMStyle = {
      color: "black",
      fontSize: 15
    }, _defineProperty(_this$labelUOMStyle, "color", "#495057"), _defineProperty(_this$labelUOMStyle, "textAlign", "center"), _defineProperty(_this$labelUOMStyle, "whiteSpace", "nowrap"), _defineProperty(_this$labelUOMStyle, "backgroundColor", "#e9ecef"), _defineProperty(_this$labelUOMStyle, "border", "1px solid #ced4da"), _defineProperty(_this$labelUOMStyle, "paddingLeft", 4), _defineProperty(_this$labelUOMStyle, "paddingRight", 4), _defineProperty(_this$labelUOMStyle, "borderTopRightRadius", 4), _defineProperty(_this$labelUOMStyle, "borderBottomRightRadius", 4), _defineProperty(_this$labelUOMStyle, "marginLeft", -1), _defineProperty(_this$labelUOMStyle, "zIndex", 10), _defineProperty(_this$labelUOMStyle, "display", "flex"), _defineProperty(_this$labelUOMStyle, "alignItems", "center"), _this$labelUOMStyle);

    _this.handleChange = function (event) {
      _this.setState({
        value: event.target.value
      });
    };

    _this.handleBlur = function (event) {
      _this.props.onChange(_objectSpread({}, _this.props.checklistItem, {
        result: event.target.value
      }));
    };

    _this.handleSelectChange = function (event) {
      _this.props.onChange(_objectSpread({}, _this.props.checklistItem, {
        finding: event.target.value
      }));
    };

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(ChecklistItemInputInspection, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.checklistItem) {
        this.setState({
          value: this.props.checklistItem.result
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.checklistItem) {
        this.setState({
          value: nextProps.checklistItem.result
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var checklistItem = this.props.checklistItem;
      return _react["default"].createElement("div", {
        style: this.mainStyle
      }, _react["default"].createElement("div", {
        style: {
          marginBottom: 10,
          width: "100%",
          display: "flex"
        }
      }, _react["default"].createElement("input", {
        style: this.inputStyle,
        onChange: this.handleChange,
        value: this.state.value || '',
        onBlur: this.handleBlur
      }), _react["default"].createElement("label", {
        style: this.labelUOMStyle
      }, checklistItem.UOM)), _react["default"].createElement(_FormControl["default"], {
        style: this.selectStyle
      }, _react["default"].createElement(_Select["default"], {
        disableUnderline: true,
        value: checklistItem.finding || '',
        onChange: this.handleSelectChange.bind(this)
      }, _react["default"].createElement(_MenuItem["default"], {
        value: null
      }), checklistItem.possibleFindings.map(function (finding) {
        return _react["default"].createElement(_MenuItem["default"], {
          key: finding.code,
          value: finding.code
        }, finding.desc);
      }))));
    }
  }]);

  return ChecklistItemInputInspection;
}(_react.Component);

exports["default"] = ChecklistItemInputInspection;