import React, { useState } from "react";
import EAMDatePicker from "../../muiinputs/EAMDatePicker";
import EAMDateTimePicker from "../../muiinputs/EAMDateTimePicker";

const ChecklistFieldDateWrapper = (props) => {
    const { value, handleChange, isDateTime } = props;

    const [selectedDate, setSelectedDate] = useState(value);

    const onChangeHandler = (date) => {
        const msTime = new Date(date).getTime(); // same format as from the backend
        setSelectedDate(msTime);
        handleChange(msTime);
    };

    const DatePickerType = (isDateTime && EAMDateTimePicker) || EAMDatePicker;

    return (
        <DatePickerType value={selectedDate} updateProperty={onChangeHandler} />
    );
};

export default ChecklistFieldDateWrapper;
