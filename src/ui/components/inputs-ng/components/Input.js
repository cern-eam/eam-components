import React from 'react';

const Input = (props) => {

    return (
        <input {...props} value={props.value ? props.value : ''} />
    )
}

export default Input;