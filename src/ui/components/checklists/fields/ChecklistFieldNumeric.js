import React, {useState, useEffect} from 'react';
import TextField from '../../inputs-ng/components/TextField';
import Slider from '@mui/material/Slider';

const outerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginLeft: "auto", marginBottom: "auto"
};

const outerSliderStyle = {
    padding: '0 15px',
    marginBottom: '-14px'
};

const sliderStyle = {
    height: 5,
    padding: '11px 0',
    '& .MuiSlider-thumb': {
      height: 15,
      width: 15,
      backgroundColor: '#fff',
      boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
      '&:focus, &:hover, &.Mui-active': {
        boxShadow: '0px 0px 3px 2px rgba(0, 0, 0, 0.1)',
      },
      '&:before': {
        boxShadow:
          '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)',
      },
    },
    '& .MuiSlider-markLabel': {
        top: '85%',
        fontSize: '12px'
    },
    '& .MuiSlider-mark': {
        visibility: 'hidden'
    },
    '& .MuiSlider-rail': {
      opacity: 0.5,
      boxShadow: 'inset 0px 0px 4px -2px #000',
      backgroundColor: '#d0d0d0',
    },
};

const getSliderMark = (value, UOM) => {return {value: value, label: value}};

const ChecklistFieldNumeric = props => {
    const { value, UOM, handleChange, minimumValue, maximumValue, showError, disabled, slider, customSliderStyle, sliderRange} = props;
    const stringValue = value === null ? '' : '' + value;

    const [inputValue, setInputValue] = useState(stringValue);
    const [lastUpdatedValue, setUpdatedValue] = useState(stringValue);
    const [numericLimitError, setNumericLimitError] = useState(false);

    useEffect(() => {
        if(stringValue !== inputValue) {
            setInputValue(stringValue);
        }
    }, [stringValue]);

    const changed = lastUpdatedValue !== inputValue;
    useEffect(() => {
        if (!isNaN(inputValue)) {
            const floatValue = parseFloat(inputValue);
            let numericLimitErrorDetected = true;
            if(typeof minimumValue === 'number' && floatValue < minimumValue) {
                setNumericLimitError(`Minimum value is ${minimumValue}${UOM}`);
            } else if(typeof maximumValue === 'number' && floatValue > maximumValue) {
                setNumericLimitError(`Maximum value is ${maximumValue}${UOM}`);
            } else {
                setNumericLimitError(false);
                numericLimitErrorDetected = false;
            }

            if (changed && numericLimitErrorDetected) {
                showError(numericLimitError);
            }
        }
    }, [inputValue, numericLimitError, changed, showError]);

    const inputProps = {
        onChange: event => setInputValue(event.target.value),
        value: inputValue,
        onBlur: () => {
            if (!changed) {
                return;
            }

            if (!isNaN(inputValue)) {
                setUpdatedValue(inputValue);
                handleChange(inputValue, () => setUpdatedValue(lastUpdatedValue));
            } 
        }
    }

    return <>
        <div style={outerStyle}>
            <div style={{width: "177px", justifyContent: "flex-end", alignItems: "flex-start", marginTop: 5, marginBottom: 5}}>
            <TextField disabled={disabled}
                       inputProps={inputProps}
                       endTextAdornment={UOM}
            />
            {(slider && minimumValue != null && maximumValue != null) &&  <div style={outerSliderStyle}>
                <Slider
                    min={minimumValue}
                    max={maximumValue}
                    size="small"
                    sx={{...sliderStyle, ...customSliderStyle}}
                    marks={sliderRange && [getSliderMark(minimumValue), getSliderMark(maximumValue)]}
                    value={parseFloat(inputValue)}
                    onChange={(event, newValue) => setInputValue(newValue)} 
                    onChangeCommitted={(event, newValue) => handleChange(newValue, () => {setUpdatedValue(lastUpdatedValue)})}
                />
            </div>
            }
            </div>
        </div>
        {numericLimitError && <p style={{color: 'red', marginLeft: '20px'}}>{numericLimitError}</p>}
    </>;
};

export default ChecklistFieldNumeric;