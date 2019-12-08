'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Save = require('@material-ui/icons/Save');

var _Save2 = _interopRequireDefault(_Save);

var _mdiMaterialUi = require('mdi-material-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var notClosingButtonStyle = {
    backgroundColor: '#e0e0e0'
};

var saveIconStyle = {
    width: 16,
    height: 16,
    marginRight: 5
};

var CommentBar = function (_Component) {
    _inherits(CommentBar, _Component);

    function CommentBar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CommentBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommentBar.__proto__ || Object.getPrototypeOf(CommentBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            isClosing: false,
            closingButtonStyle: notClosingButtonStyle
        }, _this.barCommentSaveHandler = function () {
            //Show updating
            _this.props.showUpdatingHandler();
            //Comment to be saved
            var comment = _this.props.comment;
            //Set the closing
            if (_this.state.isClosing) {
                comment.typeCode = "+";
            }
            //Update the closing
            _this.setState(function () {
                return {
                    isClosing: false,
                    closingButtonStyle: notClosingButtonStyle
                };
            });
            //Save the comment with the method received
            _this.props.saveCommentHandler(comment);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CommentBar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.displayBar) {
                return _react2.default.createElement(
                    'div',
                    { className: 'commentBarContainer' },
                    _react2.default.createElement(
                        _Button2.default,
                        { variant: 'flat', onClick: this.barCommentSaveHandler, className: 'commentSaveButton',
                            color: 'primary' },
                        _react2.default.createElement(_Save2.default, { style: saveIconStyle }),
                        ' Save'
                    ),
                    this.props.displayClosingCheck && _react2.default.createElement(_FormControlLabel2.default, { style: { height: 22, marginRight: -5 },
                        control: _react2.default.createElement(_Checkbox2.default, { color: 'primary',
                            icon: _react2.default.createElement(_mdiMaterialUi.FlagCheckered, null),
                            checkedIcon: _react2.default.createElement(_mdiMaterialUi.FlagCheckered, null),
                            checked: this.state.isClosing,
                            onChange: function onChange(event, checked) {
                                return _this2.setState({ isClosing: checked });
                            } })

                    })
                );
            }
            return null;
        }
    }]);

    return CommentBar;
}(_react.Component);

exports.default = CommentBar;