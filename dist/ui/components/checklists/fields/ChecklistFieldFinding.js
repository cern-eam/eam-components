import React from 'react';
import ChecklistFieldCheckbox from './ChecklistFieldCheckbox';
import EAMSelect from '../../inputs-ng/EAMSelect';

var ChecklistFieldFinding = function ChecklistFieldFinding(props) {
  var finding = props.finding,
      _handleChange = props.handleChange,
      possibleFindings = props.possibleFindings,
      disabled = props.disabled;
  var dropdown = props.dropdown === undefined ? true : props.dropdown;
  if (dropdown) return /*#__PURE__*/React.createElement(EAMSelect, {
    disabled: disabled,
    value: finding || '',
    selectOnlyMode: true,
    options: possibleFindings,
    onChange: function onChange(value) {
      return _handleChange(value.code);
    },
    componentStyle: {
      flex: "0 0 177px"
    }
  });else return possibleFindings.map(function (findingElement) {
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

export default ChecklistFieldFinding;