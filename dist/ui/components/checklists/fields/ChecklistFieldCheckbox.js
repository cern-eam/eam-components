import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import withStyles from '@mui/styles/withStyles';
var labelStyle = {
  root: {
    margin: 5
  },
  label: {
    fontSize: "0.95rem"
  }
};
var ChecklistFieldCheckbox = function ChecklistFieldCheckbox(props) {
  var code = props.code,
    desc = props.desc,
    checked = props.checked,
    handleChange = props.handleChange,
    classes = props.classes,
    disabled = props.disabled;
  return /*#__PURE__*/React.createElement(FormControlLabel, {
    classes: {
      root: classes.root,
      label: classes.label
    },
    control: /*#__PURE__*/React.createElement(Checkbox, {
      color: "primary",
      checked: checked,
      onMouseDown: function onMouseDown() {
        return handleChange(code);
      },
      onTouchStart: function onTouchStart() {
        return handleChange(code);
      },
      disabled: disabled
    }),
    label: desc
  });
};
export default withStyles(labelStyle)(ChecklistFieldCheckbox);