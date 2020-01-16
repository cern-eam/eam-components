'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Comments.css');

var _CommentUser = require('./CommentUser');

var _CommentUser2 = _interopRequireDefault(_CommentUser);

var _CommentBar = require('./CommentBar');

var _CommentBar2 = _interopRequireDefault(_CommentBar);

var _reactAutosizeTextarea = require('react-autosize-textarea');

var _reactAutosizeTextarea2 = _interopRequireDefault(_reactAutosizeTextarea);

var _ListItem = require('@material-ui/core/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _reactUserAvatar = require('react-user-avatar');

var _reactUserAvatar2 = _interopRequireDefault(_reactUserAvatar);

var _styles = require('@material-ui/core/styles');

var _mdiMaterialUi = require('mdi-material-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createdIcon = 'fa fa-plus-square-o Fs13 Black';
var createdIconStyle = { paddingRight: '3px' };
var updatedIcon = 'fa fa-pencil-square-o Fs13 Black';
var updatedIconStyle = {};
var initialContainerStyle = { opacity: 1.0, pointerEvents: 'all' };

var mainColors = ['#E1BEE7', '#FFCDD2', '#F8BBD0', '#90CAF9', '#9FA8DA', '#B39DDB', '#DCEDC8', '#E6EE9C', '#81C784', '#FFF176', '#FFD54F', '#FFCC80', '#9E9E9E', '#E0E0E0', '#FFAB91', '#FF7043', '#B0BEC5'];

var styles = {
    root: {
        alignItems: "start",
        paddingTop: 6,
        paddingBottom: 6
    }
};

var Comment = function (_Component) {
    _inherits(Comment, _Component);

    function Comment(props) {
        _classCallCheck(this, Comment);

        var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, props));

        _this.inputTextArea = function (event) {
            var element = event.target;
            //Calculate display bar
            var initialText = _this.state.text;
            var displayBar = element.value !== '' && initialText !== element.value;
            //The text
            var comment = _this.state.comment;
            comment.text = element.value;
            _this.updateState(initialText, displayBar, comment, initialContainerStyle);
        };

        _this.showUpdating = function () {
            _this.setState(function () {
                return { containerStyle: { opacity: 0.4, pointerEvents: 'none' } };
            });
        };

        _this.updateState = function (text, displayBar, comment, containerStyle) {
            _this.setState(function () {
                return {
                    text: text,
                    displayBar: displayBar,
                    comment: comment,
                    containerStyle: containerStyle
                };
            });
        };

        _this.onKeyDownHandler = function (event) {
            if (event.keyCode === 13 || event.keyCode === 121) {
                event.stopPropagation();
            }
        };

        _this.state = {
            text: _this.props.comment.text,
            displayBar: false,
            comment: _this.props.comment,
            containerStyle: initialContainerStyle
        };
        return _this;
    }

    _createClass(Comment, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.updateState(nextProps.comment.text, false, nextProps.comment, initialContainerStyle);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _ListItem2.default,
                { classes: { root: this.props.classes.root } },
                _react2.default.createElement(_reactUserAvatar2.default, { size: '48', name: this.state.comment.creationUserDesc, colors: mainColors }),
                _react2.default.createElement(
                    'div',
                    { className: 'commentContainer', style: this.state.containerStyle },
                    _react2.default.createElement('div', { className: 'triangle' }),
                    _react2.default.createElement('div', { className: 'innerTriangle' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'commentInfoContainer' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_CommentUser2.default, { userDesc: this.state.comment.creationUserDesc,
                                userDate: this.state.comment.creationDate, icon: createdIcon,
                                iconStyle: createdIconStyle }),
                            this.props.comment.updateUserCode && _react2.default.createElement(_CommentUser2.default, { userDesc: this.state.comment.updateUserDesc,
                                userDate: this.state.comment.updateDate,
                                icon: updatedIcon, iconStyle: updatedIconStyle })
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: { display: "flex", alignItems: "center", height: 25, marginRight: 7 } },
                            _react2.default.createElement(_CommentBar2.default, { saveCommentHandler: this.props.updateCommentHandler,
                                displayBar: this.state.displayBar, comment: this.state.comment,
                                displayClosingCheck: false, showUpdatingHandler: this.showUpdating }),
                            this.props.comment.typeCode === '+' && _react2.default.createElement(_mdiMaterialUi.FlagCheckered, { color: 'primary' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'commentTextContainer', onKeyDown: this.onKeyDownHandler },
                        _react2.default.createElement(_reactAutosizeTextarea2.default, { defaultValue: this.state.comment.text, className: 'commentText',
                            onInput: this.inputTextArea })
                    )
                )
            );
        }
    }]);

    return Comment;
}(_react.Component);

exports.default = (0, _styles.withStyles)(styles)(Comment);