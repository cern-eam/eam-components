'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('eam-components/dist/ui/components/icons/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EAMPlusMinusInput = function (_React$Component) {
    _inherits(EAMPlusMinusInput, _React$Component);

    function EAMPlusMinusInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EAMPlusMinusInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EAMPlusMinusInput.__proto__ || Object.getPrototypeOf(EAMPlusMinusInput)).call.apply(_ref, [this].concat(args))), _this), _this.equipmentDivStyle = {
            width: "80%",
            display: "flex",
            alignItems: "center"
        }, _this.equipmentColumnStyle = {
            width: "70%",
            flexDirection: "row",
            padding: "20px",
            display: "flex",
            minWidth: "350px",
            maxWidth: "830px",
            flexWrap: "wrap"
        }, _this.iconContainerStyle = {
            fontSize: "50px",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "10px"
        }, _this.iconStyle = {
            margin: "10px",
            color: "#2196F3",
            cursor: "pointer"
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EAMPlusMinusInput, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { style: this.equipmentColumnStyle },
                    _react2.default.createElement(
                        'div',
                        { style: this.equipmentDivStyle },
                        this.props.children
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: this.iconContainerStyle },
                        _react2.default.createElement(_index.TRECIcon, {
                            icon: 'fa fa-plus',
                            style: this.iconStyle,
                            onClick: this.props.handlePlusClick
                        }),
                        _react2.default.createElement(_index.TRECIcon, {
                            icon: 'fa fa-minus',
                            style: this.iconStyle,
                            onClick: this.props.handleMinusClick
                        })
                    )
                )
            );
        }
    }]);

    return EAMPlusMinusInput;
}(_react2.default.Component);

exports.default = EAMPlusMinusInput;