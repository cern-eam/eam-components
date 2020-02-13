import React, {useState} from 'react';

const inputStyle = {
    width: "1%",
    flex: "1 1 auto",
    border: "1px solid #ced4da",
    padding: "5px 10px",
    fontSize: 16,
    transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: 4,
    backgroundColor: "#fff",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    zIndex: 20
}

const labelUOMStyle = {
    color: "black",
    fontSize: 15,
    color: "#495057",
    textAlign: "center",
    whiteSpace: "nowrap",
    backgroundColor: "#e9ecef",
    border: "1px solid #ced4da",
    paddingLeft: 4,
    paddingRight: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    marginLeft: -1,
    zIndex: 10,
    display: "flex",
    alignItems: "center"
}

const outerStyle = {
    margin: 5,
    marginLeft: 17,
    display: "flex"
};

const ChecklistFieldNumeric = props => {
    const {value, UOM, handleChange} = props;

    const [inputValue, setInputValue] = useState(value || '');
    const [lastUpdatedValue, setUpdatedValue] = useState(value || '');

    return <div style={outerStyle}>
        <input style={inputStyle}
            onChange={event => setInputValue(event.target.value)}
            value={inputValue}
            onBlur={event => {
                if(("" + lastUpdatedValue) === inputValue)
                    return;

                 setUpdatedValue(inputValue);
                 handleChange(inputValue);
            }}/>
        <div style={labelUOMStyle}>{UOM}</div>
    </div>
};

export default ChecklistFieldNumeric;