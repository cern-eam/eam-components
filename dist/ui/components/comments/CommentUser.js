import React from 'react';
var CommentUser = function CommentUser(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "commentUserContainer"
  }, props.icon, /*#__PURE__*/React.createElement("label", null, " ", props.userDate), " by", /*#__PURE__*/React.createElement("label", null, " ", props.userDesc));
};
export default CommentUser;