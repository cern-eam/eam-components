"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      color: '#737373'
    },
    icon: {
      padding: theme.spacing()
    }
  };
};

var SimpleEmptyState = function SimpleEmptyState(props) {
  var message = props.message,
      style = props.style,
      iconStyle = props.iconStyle,
      classes = props.classes;
  return _react["default"].createElement("div", {
    className: classes.root,
    style: style
  }, _react["default"].createElement(_Info["default"], {
    className: classes.icon,
    style: iconStyle
  }), _react["default"].createElement(_core.Typography, {
    variant: "caption"
  }, message));
};

var _default = (0, _core.withStyles)(styles)(SimpleEmptyState);

exports["default"] = _default;