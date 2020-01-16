'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Comment = require('@material-ui/icons/Comment');

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChecklistItemInputQuantitative = function (_Component) {
    _inherits(ChecklistItemInputQuantitative, _Component);

    function ChecklistItemInputQuantitative() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ChecklistItemInputQuantitative);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChecklistItemInputQuantitative.__proto__ || Object.getPrototypeOf(ChecklistItemInputQuantitative)).call.apply(_ref, [this].concat(args))), _this), _this.mainDivStyle = {
            padding: 2,
            position: "relative",
            flexGrow: "1",
            display: "flex",
            alignItems: "center"
        }, _this.notesStyle = {
            color: "rgb(117, 117, 117)",
            width: "calc(100% - 64px)",
            border: "0px solid #ebebeb",
            padding: "7px 29px",
            fontSize: 14,
            transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            borderRadius: 4,
            backgroundColor: "#fff"
        }, _this.commentIconStyle = {
            position: "absolute",
            bottom: 12,
            left: 4,
            color: "#cecece"
        }, _this.handleChange = function (event) {
            _this.setState({
                value: event.target.value
            });
        }, _this.handleBlur = function (event) {
            _this.props.onChange(_extends({}, _this.props.checklistItem, {
                notes: event.target.value
            }));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ChecklistItemInputQuantitative, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.checklistItem) {
                this.setState({
                    value: this.props.checklistItem.notes
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.checklistItem) {
                this.setState({
                    value: nextProps.checklistItem.notes
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { style: this.mainDivStyle },
                _react2.default.createElement('input', { style: this.notesStyle,
                    onChange: this.handleChange,
                    value: this.state.value || '',
                    onBlur: this.handleBlur }),
                _react2.default.createElement(_Comment2.default, { style: this.commentIconStyle })
            );
        }
    }]);

    return ChecklistItemInputQuantitative;
}(_react.Component);

exports.default = ChecklistItemInputQuantitative;