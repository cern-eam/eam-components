import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import EAMBaseInput from './components/EAMBaseInput';
import { areEqual } from './tools/input-tools';

var EAMRadio = function EAMRadio(props) {
  var updateProperty = props.updateProperty,
      values = props.values,
      value = props.value,
      valueKey = props.valueKey,
      onChangeValue = props.onChangeValue,
      id = props.id;

  var generateRadioButtons = function generateRadioButtons(values) {
    if (values) {
      return values.map(function (value) {
        return /*#__PURE__*/React.createElement(FormControlLabel, {
          key: value.code,
          value: value.code,
          control: /*#__PURE__*/React.createElement(Radio, {
            color: "primary"
          }),
          label: value.desc
        });
      });
    }
  };

  var onChangeHandler = function onChangeHandler(event) {
    updateProperty(valueKey, event.target.value);
    onChangeValue?.(event.target.value);
  };

  return /*#__PURE__*/React.createElement(EAMBaseInput, props, /*#__PURE__*/React.createElement(RadioGroup, {
    "aria-label": id,
    name: id,
    value: value || '',
    onChange: onChangeHandler,
    style: {
      flexDirection: 'row'
    }
  }, generateRadioButtons(values)));
};

export default React.memo(EAMRadio, areEqual);