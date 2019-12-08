"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _WSComments = require("../../../tools/WSComments");

var _WSComments2 = _interopRequireDefault(_WSComments);

var _Comment = require("./Comment");

var _Comment2 = _interopRequireDefault(_Comment);

var _CommentNew = require("./CommentNew");

var _CommentNew2 = _interopRequireDefault(_CommentNew);

var _panel = require("../panel");

var _panel2 = _interopRequireDefault(_panel);

var _List = require("@material-ui/core/List");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var datatablePanelStyle = {
    marginLeft: -18,
    marginRight: -18,
    marginBottom: -22
};

var Comments = function (_Component) {
    _inherits(Comments, _Component);

    function Comments() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Comments);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comments.__proto__ || Object.getPrototypeOf(Comments)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            comments: [],
            newCommentText: ''
        }, _this.readComments = function (entityCode, entityKeyCode) {
            _this.props.readComments(entityCode, entityKeyCode).then(function (response) {
                _this.setState(function () {
                    return { comments: response.body.data, newCommentText: '' };
                });
            }).catch(function (reason) {
                _this.props.handleError(reason);
                //No comments...
                _this.setState(function () {
                    return { comments: [] };
                });
            });
        }, _this.createComment = function (comment) {
            //Remove pk property
            delete comment.pk;
            //Create the comment and set the new list
            _this.props.createComment(comment).then(function (response) {
                _this.setState(function () {
                    return {
                        comments: response.body.data,
                        newCommentText: ''
                    };
                });
                if (_this.props.onCommentAdded) {
                    _this.props.onCommentAdded(comment);
                }
            }).catch(function (reason) {
                _this.props.handleError(reason);
                //Try to read comments again
                _this.readComments(_this.props.entityCode, _this.props.entityKeyCode);
            });
        }, _this.updateComment = function (comment) {
            //Remove pk property
            delete comment.pk;
            delete comment.updateCount;
            //Update the comment and set the new list
            _this.props.updateComment(comment).then(function (response) {
                _this.setState(function () {
                    return { comments: response.body.data };
                });

                if (_this.props.onCommentUpdated) {
                    _this.props.onCommentUpdated(comment);
                }
            }).catch(function (reason) {
                _this.props.handleError(reason);
                //Try to read comments again
                _this.readComments(_this.props.entityCode, _this.props.entityKeyCode);
            });
        }, _this.updateNewCommentText = function (text) {
            _this.setState(function () {
                return {
                    newCommentText: text
                };
            });
        }, _this.createCommentForNewEntity = function () {
            if (_this.state.newCommentText) {
                _this.createComment({
                    entityCode: _this.props.entityCode,
                    entityKeyCode: _this.props.entityKeyCode,
                    text: _this.state.newCommentText
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Comments, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            //Just read for existing object
            if (this.props.entityKeyCode) this.readComments(this.props.entityCode, this.props.entityKeyCode);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            //Just read for existing object
            if ((nextProps.entityKeyCode !== this.props.entityKeyCode || nextProps.entityCode !== this.props.entityCode) && nextProps.entityKeyCode) {
                //Just read the comments
                this.readComments(nextProps.entityCode, nextProps.entityKeyCode);
            } else if (!nextProps.entityKeyCode || nextProps.entityKeyCode === '') {
                /*It's new object again*/
                this.setState(function () {
                    return { comments: [], newCommentText: '' };
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _panel2.default,
                { heading: this.props.title, detailsStyle: datatablePanelStyle },
                _react2.default.createElement(
                    _List2.default,
                    { style: { width: "100%" } },
                    this.state.comments.map(function (comment) {
                        return _react2.default.createElement(_Comment2.default, { key: comment.pk, comment: comment, updateCommentHandler: _this2.updateComment });
                    }),
                    _react2.default.createElement(_CommentNew2.default, { userDesc: this.props.userDesc,
                        createCommentHandler: this.createComment,
                        entityCode: this.props.entityCode,
                        entityKeyCode: this.props.entityKeyCode,
                        newCommentText: this.state.newCommentText,
                        updateNewCommentText: this.updateNewCommentText })
                )
            );
        }
    }]);

    return Comments;
}(_react.Component);

Comments.defaultProps = {
    title: 'COMMENTS',
    readComments: _WSComments2.default.readComments,
    updateComment: _WSComments2.default.updateComment,
    createComment: _WSComments2.default.createComment
};

exports.default = Comments;