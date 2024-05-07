import React, { useState } from "react";

const textAreaStyle = {
    flex: "1 1 auto",
    padding: "7px 8px",
    fontSize: "15px",
    lineHeight: 1.5,
    color: "#495057",
    backgroundClip: "padding-box",
    border: "1px solid #ced4da",
    borderRadius: "4px",
    backgroundColor: "#fdfdfd",
    fontFamily: 'Roboto, sans-serif'
};

const outerStyle = {
    marginLeft: 10,
    display: "flex",
    flex: "1 1 auto"
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
