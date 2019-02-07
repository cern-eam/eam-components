import React from 'react';

const CommentUser = (props) => (
    <div className="commentUserContainer">
            <i className={props.icon} style={props.iconStyle}/>
            <label> {props.userDate}</label> by
            <label> {props.userDesc}</label>
    </div>
)

export default CommentUser;