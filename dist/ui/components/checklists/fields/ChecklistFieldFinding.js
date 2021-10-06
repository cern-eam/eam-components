import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ChecklistFieldCheckbox from './ChecklistFieldCheckbox';
import { withStyles } from '@material-ui/core/styles';
var style = {
  root: {
    margin: 5,
    marginLeft: 17,
    border: "1px solid #ced4da",
    borderRadius: 4
  },
  selectRoot: {
    fontSize: "0.95rem"
  },
  select: {
    paddingLeft: 10,
    width: 128,
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  icon: {
    paddingRight: 3
  }
};

var ChecklistFieldFinding = function ChecklistFieldFinding(props) {
  var finding = props.finding,
      _handleChange = props.handleChange,
      possibleFindings = props.possibleFindings,
      classes = props.classes,
      disabled = props.disabled;
  var dropdown = props.dropdown === undefined ? true : props.dropdown;
  if (dropdown) return /*#__PURE__*/React.createElement(FormControl, {
    disabled: disabled,
    classes: {
      root: classes.root
    }
  }, /*#__PURE__*/React.createElement(Select, {
    classes: {
      root: classes.selectRoot,
      select: classes.select,
      icon: classes.icon
    },
    disableUnderline: true,
    value: finding || '',
    onChange: function onChange(event) {
      return _handleChange(event.target.value);
    },
    disabled: disabled
  }, /*#__PURE__*/React.createElement(MenuItem, {
    value: null
  }, "\u200B"), possibleFindings.map(function (finding) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: finding.code,
      value: finding.code
    }, finding.desc);
  })));else return possibleFindings.map(function (findingElement) {
    return /*#__PURE__*/React.createElement(ChecklistFieldCheckbox, {
      code: findingElement.code,
      desc: findingElement.desc,
      checked: finding === findingElement.code,
      handleChange: function handleChange(value) {
        return _handleChange(value === finding ? null : value);
      },
      key: findingElement.code,
      disabled: disabled
    });
  });
};

export default withStyles(style)(ChecklistFieldFinding);