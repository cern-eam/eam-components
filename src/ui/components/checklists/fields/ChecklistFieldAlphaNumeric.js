import React, { useState } from "react";

const textAreaStyle = {
    flex: "1 1 auto",
    padding: "5px 10px",
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: "#fff",
    resize: "vertical",
    minHeight: "2.5em",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
};

const outerStyle = {
    margin: 5,
    marginLeft: 17,
    display: "flex",
    flex: "1 1 auto",
};

const ChecklistFieldAlphaNumeric = (props) => {
    const { value, handleChange, maxLength, disabled } = props;

    const [typedValue, setTypedValue] = useState(value);
    const [lastOnBlurValue, setLastOnBlurValue] = useState(value);

    return (
        <div style={outerStyle}>
            <textarea
                style={{ ...textAreaStyle }}
                disabled={disabled}
                onChange={(e) => setTypedValue(e.target.value)}
                value={typedValue}
                maxLength={maxLength}
                onBlur={() => {
                    if (lastOnBlurValue !== typedValue) {
                        setLastOnBlurValue(typedValue);
                        handleChange(typedValue, () =>
                            setLastOnBlurValue(lastOnBlurValue)
                        );
                    }
                }}
                onKeyDown={(e) => {
                    e.key === "Enter" && e.stopPropagation();
                }}
            />
        </div>
    );
};

export default ChecklistFieldAlphaNumeric;
