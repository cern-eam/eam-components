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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChecklistItemInputMoreFindings = function (_Component) {
    _inherits(ChecklistItemInputMoreFindings, _Component);

    function ChecklistItemInputMoreFindings() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ChecklistItemInputMoreFindings);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChecklistItemInputMoreFindings.__proto__ || Object.getPrototypeOf(ChecklistItemInputMoreFindings)).call.apply(_ref, [this].concat(args))), _this), _this.mainStyle = {
            flex: "0 0 170px",
            display: "flex",
            marginLeft: 10
        }, _this.selectStyle = {
            width: "100%",
            marginLeft: 3
        }, _this.handleChange = function (event) {
            _this.props.onChange(_extends({}, _this.props.checklistItem, {
                finding: event.target.value
            }));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ChecklistItemInputMoreFindings, [{
        key: 'render',
        value: function render() {
            var checklistItem = this.props.checklistItem;


            return _react2.default.createElement(
                'div',
                { style: this.mainStyle },
                _react2.default.createElement(
                    _FormControl2.default,
                    { style: this.selectStyle },
                    _react2.default.createElement(
                        _Select2.default,
                        { disableUnderline: true,
                            value: checklistItem.finding || '',
                            onChange: this.handleChange.bind(this)
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

    return ChecklistItemInputMoreFindings;
}(_react.Component);

exports.default = ChecklistItemInputMoreFindings;