'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Comments.css');

var _CommentBar = require('./CommentBar');

var _CommentBar2 = _interopRequireDefault(_CommentBar);

var _reactAutosizeTextarea = require('react-autosize-textarea');

var _reactAutosizeTextarea2 = _interopRequireDefault(_reactAutosizeTextarea);

var _ListItem = require('@material-ui/core/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _reactUserAvatar = require('react-user-avatar');

var _reactUserAvatar2 = _interopRequireDefault(_reactUserAvatar);

var _index = require('@material-ui/core/styles/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialContainerStyle = { opacity: 1.0, pointerEvents: 'all' };

var styles = {
    root: {
        alignItems: "start",
        paddingTop: 6,
        paddingBottom: 6
    }
};

var mainColors = ['#E1BEE7', '#FFCDD2', '#F8BBD0', '#90CAF9', '#9FA8DA', '#B39DDB', '#DCEDC8', '#E6EE9C', '#81C784', '#FFF176', '#FFD54F', '#FFCC80', '#9E9E9E', '#E0E0E0', '#FFAB91', '#FF7043', '#B0BEC5'];

var CommentNew = function (_Component) {
    _inherits(CommentNew, _Component);

    function CommentNew(props) {
        _classCallCheck(this, CommentNew);

        var _this = _possibleConstructorReturn(this, (CommentNew.__proto__ || Object.getPrototypeOf(CommentNew)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
            displayBar: false,
            comment: _this.initNewComment(_this.props),
            containerStyle: initialContainerStyle
        };
        return _this;
    }

    _createClass(CommentNew, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            //Display bar
            var displayBar = nextProps.newCommentText !== '' && !!this.props.entityKeyCode;
            this.updateState(displayBar, this.initNewComment(nextProps), initialContainerStyle);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _ListItem2.default,
                { classes: { root: this.props.classes.root } },
                _react2.default.createElement(_reactUserAvatar2.default, { size: '48', name: this.props.userDesc, colors: mainColors }),
                _react2.default.createElement(
                    'div',
                    { className: 'commentContainer', style: this.state.containerStyle },
                    _react2.default.createElement('div', { className: 'triangle' }),
                    _react2.default.createElement('div', { className: 'innerTriangle' }),
                    this.state.displayBar && _react2.default.createElement(
                        'div',
                        { className: 'commentInfoContainer' },
                        _react2.default.createElement('div', { style: { height: 20 } }),
                        _react2.default.createElement(_CommentBar2.default, { saveCommentHandler: this.props.createCommentHandler,
                            displayBar: this.state.displayBar,
                            comment: this.state.comment,
                            displayClosingCheck: this.props.entityCode === 'EVNT',
                            showUpdatingHandler: this.showUpdating })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'commentTextContainer' },
                        _react2.default.createElement(_reactAutosizeTextarea2.default, { placeholder: 'Enter new comment here',
                            className: 'commentText', onInput: this.inputTextArea,
                            value: this.props.newCommentText, onFocus: this.inputTextArea })
                    )
                )
            );
        }
    }]);

    return CommentNew;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.initNewComment = function (props) {
        return {
            entityCode: _this2.props.entityCode,
            entityKeyCode: _this2.props.entityKeyCode,
            text: props.newCommentText
        };
    };

    this.inputTextArea = function (event) {
        var element = event.target;
        var displayBar = element.value !== '' && !!_this2.props.entityKeyCode;
        //The text
        var comment = _this2.state.comment;
        comment.text = element.value;
        _this2.updateState(displayBar, comment);
        //Value
        _this2.props.updateNewCommentText(comment.text);
    };

    this.showUpdating = function () {
        _this2.setState(function () {
            return {
                containerStyle: { opacity: 0.4, pointerEvents: 'none' }
            };
        });
    };

    this.updateState = function (displayBar, comment, containerStyle) {
        _this2.setState(function () {
            return {
                displayBar: displayBar,
                comment: comment,
                containerStyle: containerStyle
            };
        });
    };
};

exports.default = (0, _index.withStyles)(styles)(CommentNew);