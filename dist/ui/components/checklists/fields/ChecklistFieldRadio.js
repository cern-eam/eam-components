import React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import withStyles from '@mui/styles/withStyles';
var labelStyle = {
  root: {
    marginRight: -10,
    justifyContent: "end"
  }
};
var ChecklistFieldRadio = function ChecklistFieldRadio(props) {
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
    control: /*#__PURE__*/React.createElement(Radio, {
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
    label: desc,
    labelPlacement: "start"
  });
};
export default withStyles(labelStyle)(ChecklistFieldRadio);