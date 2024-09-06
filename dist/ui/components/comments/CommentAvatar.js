function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import UserAvatar from 'react-user-avatar';
var userAvatarColors = ['#E1BEE7', '#FFCDD2', '#F8BBD0', '#90CAF9', '#9FA8DA', '#B39DDB', '#DCEDC8', '#E6EE9C', '#81C784', '#FFF176', '#FFD54F', '#FFCC80', '#9E9E9E', '#E0E0E0', '#FFAB91', '#FF7043', '#B0BEC5'];
var DEFAULT_SIZE = 48;
var CommentAvatar = function CommentAvatar(props) {
  var name = props.name;
  var preferredInitials = name?.toUpperCase().slice(0, 2);
  return /*#__PURE__*/React.createElement(UserAvatar, _extends({
    size: DEFAULT_SIZE,
    colors: userAvatarColors
  }, props, {
    style: {
      textTransform: 'uppercase'
    }
    // <name> (<preferred initials>)
    // The name is still being sent so that the deterministic algorithm
    // for color selection does not return the same color for the same initials
    ,
    name: "".concat(name || 'UNKNOWN USER', " (").concat(preferredInitials, ")")
  }));
};
export default CommentAvatar;