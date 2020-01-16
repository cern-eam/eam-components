"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChecklistItemInputQuantitative = function (_Component) {
    _inherits(ChecklistItemInputQuantitative, _Component);

    function ChecklistItemInputQuantitative() {
        var _ref, _this$labelUOMStyle;

        var _temp, _this, _ret;

        _classCallCheck(this, ChecklistItemInputQuantitative);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChecklistItemInputQuantitative.__proto__ || Object.getPrototypeOf(ChecklistItemInputQuantitative)).call.apply(_ref, [this].concat(args))), _this), _this.mainStyle = {
            flex: "0 0 170px",
            display: "flex",
            position: "relative",
            marginLeft: 10
        }, _this.inputStyle = {
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
        }, _this.labelUOMStyle = (_this$labelUOMStyle = {
            color: "black",
            fontSize: 15
        }, _defineProperty(_this$labelUOMStyle, "color", "#495057"), _defineProperty(_this$labelUOMStyle, "textAlign", "center"), _defineProperty(_this$labelUOMStyle, "whiteSpace", "nowrap"), _defineProperty(_this$labelUOMStyle, "backgroundColor", "#e9ecef"), _defineProperty(_this$labelUOMStyle, "border", "1px solid #ced4da"), _defineProperty(_this$labelUOMStyle, "paddingLeft", 4), _defineProperty(_this$labelUOMStyle, "paddingRight", 4), _defineProperty(_this$labelUOMStyle, "borderTopRightRadius", 4), _defineProperty(_this$labelUOMStyle, "borderBottomRightRadius", 4), _defineProperty(_this$labelUOMStyle, "marginLeft", -1), _defineProperty(_this$labelUOMStyle, "zIndex", 10), _defineProperty(_this$labelUOMStyle, "display", "flex"), _defineProperty(_this$labelUOMStyle, "alignItems", "center"), _this$labelUOMStyle), _this.handleChange = function (event) {
            _this.setState({
                value: event.target.value
            });
        }, _this.handleBlur = function (event) {
            _this.props.onChange(_extends({}, _this.props.checklistItem, {
                result: event.target.value
            }));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ChecklistItemInputQuantitative, [{
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


            return _react2.default.createElement(
                "div",
                { style: this.mainStyle },
                _react2.default.createElement("input", { style: this.inputStyle, onChange: this.handleChange, value: this.state.value || '',
                    onBlur: this.handleBlur }),
                _react2.default.createElement(
                    "div",
                    { style: this.labelUOMStyle },
                    checklistItem.UOM
                )
            );
        }
    }]);

    return ChecklistItemInputQuantitative;
}(_react.Component);

exports.default = ChecklistItemInputQuantitative;