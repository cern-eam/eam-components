'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _reactDownloadLink = require('react-download-link');

var _reactDownloadLink2 = _interopRequireDefault(_reactDownloadLink);

var _reactBlockUi = require('react-block-ui');

var _reactBlockUi2 = _interopRequireDefault(_reactBlockUi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return {
        button: {
            margin: theme.spacing.unit,
            background: 'rgba(0, 0, 0, 0)',
            border: '10px',
            cursor: 'pointer',
            fontFamily: 'Roboto, sans-serif',
            height: '36px',
            '&:hover': {
                background: 'rgba(153,153,153,0.2)',
                border: '10px'
            },
            '&:focus': {
                border: 'none',
                outline: 'none'
            }
        }
    };
};

var EAMGridExporter = function (_Component) {
    _inherits(EAMGridExporter, _Component);

    function EAMGridExporter() {
        _classCallCheck(this, EAMGridExporter);

        return _possibleConstructorReturn(this, (EAMGridExporter.__proto__ || Object.getPrototypeOf(EAMGridExporter)).apply(this, arguments));
    }

    _createClass(EAMGridExporter, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;


            return _react2.default.createElement(
                _reactBlockUi2.default,
                { tag: 'div', blocking: this.props.exporterBlocked },
                _react2.default.createElement(_reactDownloadLink2.default, {
                    color: 'primary', className: classes.button,
                    filename: 'exported_data.csv',
                    label: 'Export to CSV',
                    exportFile: this.props.exportData,
                    style: { textDecoration: 'none' },
                    tagName: 'button'
                })
            );
        }
    }]);

    return EAMGridExporter;
}(_react.Component);

exports.default = (0, _styles.withStyles)(styles)(EAMGridExporter);