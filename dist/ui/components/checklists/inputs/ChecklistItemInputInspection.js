'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Select = require('@material-ui/core/Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChecklistItemInputInspection = function (_Component) {
    _inherits(ChecklistItemInputInspection, _Component);

    function ChecklistItemInputInspection(props) {
        var _this$labelUOMStyle;

        _classCallCheck(this, ChecklistItemInputInspection);

        var _this = _possibleConstructorReturn(this, (ChecklistItemInputInspection.__proto__ || Object.getPrototypeOf(ChecklistItemInputInspection)).call(this, props));

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
        }, _defineProperty(_this$labelUOMStyle, 'color', "#495057"), _defineProperty(_this$labelUOMStyle, 'textAlign', "center"), _defineProperty(_this$labelUOMStyle, 'whiteSpace', "nowrap"), _defineProperty(_this$labelUOMStyle, 'backgroundColor', "#e9ecef"), _defineProperty(_this$labelUOMStyle, 'border', "1px solid #ced4da"), _defineProperty(_this$labelUOMStyle, 'paddingLeft', 4), _defineProperty(_this$labelUOMStyle, 'paddingRight', 4), _defineProperty(_this$labelUOMStyle, 'borderTopRightRadius', 4), _defineProperty(_this$labelUOMStyle, 'borderBottomRightRadius', 4), _defineProperty(_this$labelUOMStyle, 'marginLeft', -1), _defineProperty(_this$labelUOMStyle, 'zIndex', 10), _defineProperty(_this$labelUOMStyle, 'display', "flex"), _defineProperty(_this$labelUOMStyle, 'alignItems', "center"), _this$labelUOMStyle);

        _this.handleChange = function (event) {
            _this.setState({
                value: event.target.value
            });
        };

        _this.handleBlur = function (event) {
            _this.props.onChange(_extends({}, _this.props.checklistItem, {
                result: event.target.value
            }));
        };

        _this.handleSelectChange = function (event) {
            _this.props.onChange(_extends({}, _this.props.checklistItem, {
                finding: event.target.value
            }));
        };

        _this.state = {
            value: ''
        };
        return _this;
    }

    _createClass(ChecklistItemInputInspection, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.checklistItem) {
                this.setState({
                    value: this.props.checklistItem.result
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.checklistItem) {
                this.setState({
                    value: nextProps.checklistItem.result
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var checklistItem = this.props.checklistItem;


            return _react2.default.createElement(
                'div',
                { style: this.mainStyle },
                _react2.default.createElement(
                    'div',
                    { style: { marginBottom: 10, width: "100%", display: "flex" } },
                    _react2.default.createElement('input', { style: this.inputStyle, onChange: this.handleChange, value: this.state.value || '',
                        onBlur: this.handleBlur }),
                    _react2.default.createElement(
                        'label',
                        { style: this.labelUOMStyle },
                        checklistItem.UOM
                    )
                ),
                _react2.default.createElement(
                    _FormControl2.default,
                    { style: this.selectStyle },
                    _react2.default.createElement(
                        _Select2.default,
                        { disableUnderline: true,
                            value: checklistItem.finding || '',
                            onChange: this.handleSelectChange.bind(this)
                        },
                        _react2.default.createElement(_MenuItem2.default, { value: null }),
                        checklistItem.possibleFindings.map(function (finding) {
                            return _react2.default.createElement(
                                _MenuItem2.default,
                                { key: finding.code, value: finding.code },
                                finding.desc
                            );
                        })
                    )
                )
            );
        }
    }]);

    return ChecklistItemInputInspection;
}(_react.Component);

exports.default = ChecklistItemInputInspection;