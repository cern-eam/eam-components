'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBlockUi = require('react-block-ui');

var _reactBlockUi2 = _interopRequireDefault(_reactBlockUi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataGridLoadingSpinner = function (_Component) {
    _inherits(DataGridLoadingSpinner, _Component);

    function DataGridLoadingSpinner() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DataGridLoadingSpinner);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DataGridLoadingSpinner.__proto__ || Object.getPrototypeOf(DataGridLoadingSpinner)).call.apply(_ref, [this].concat(args))), _this), _this.blockUiStyle = {
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }, _this.blockUiStyleDiv = {
            display: "flex",
            height: 60,
            alignItems: "flex-end"
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DataGridLoadingSpinner, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.isloading && _react2.default.createElement(
                    _reactBlockUi2.default,
                    { tag: 'div', blocking: true, style: this.blockUiStyle },
                    _react2.default.createElement('div', { style: this.blockUiStyleDiv })
                )
            );
        }
    }]);

    return DataGridLoadingSpinner;
}(_react.Component);

exports.default = DataGridLoadingSpinner;