'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _OpenInNew = require('mdi-material-ui/OpenInNew');

var _OpenInNew2 = _interopRequireDefault(_OpenInNew);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EAMLinkInput = function (_Component) {
    _inherits(EAMLinkInput, _Component);

    function EAMLinkInput() {
        _classCallCheck(this, EAMLinkInput);

        return _possibleConstructorReturn(this, (EAMLinkInput.__proto__ || Object.getPrototypeOf(EAMLinkInput)).apply(this, arguments));
    }

    _createClass(EAMLinkInput, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            // No value, no link
            if (!this.props.value) {
                return this.props.children;
            }

            var iconButtonStyle = {
                position: "absolute",
                top: this.props.top || 30,
                right: this.props.right || -2,
                backgroundColor: "white",
                width: 32,
                height: 32,
                zIndex: 100,
                padding: 0
            };

            var EAMLink = function EAMLink(props) {
                return _react2.default.createElement(_reactRouterDom.Link, _extends({ to: process.env.REACT_APP_FRONTEND + _this2.props.link + _this2.props.value }, props));
            };

            return _react2.default.createElement(
                'div',
                { style: { position: "relative" } },
                this.props.children,
                _react2.default.createElement(
                    _IconButton2.default,
                    { style: iconButtonStyle, component: EAMLink },
                    _react2.default.createElement(_OpenInNew2.default, null)
                )
            );
        }
    }]);

    return EAMLinkInput;
}(_react.Component);

exports.default = EAMLinkInput;