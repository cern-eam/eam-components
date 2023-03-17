function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import CustomFieldRENT from './inputs/CustomFieldRENT';
import CustomFieldCHAR from './inputs/CustomFieldCHAR';
import CustomFieldDATE from './inputs/CustomFieldDATE';
import CustomFieldDATI from './inputs/CustomFieldDATI';
import CustomFieldNUM from './inputs/CustomFieldNUM';
import CustomFieldCODE from './inputs/CustomFieldCODE';
var groupLabelStyle = {
  "marginTop": 17,
  "marginBottom": 5,
  "fontWeight": "900",
  "color": "#1a237e",
  "fontSize": "0.90rem",
  "flex": "1 1 auto",
  "textAlign": "center"
};
function CustomFieldInput(props) {
  var customField = props.customField,
    index = props.index,
    lookupValues = props.lookupValues,
    register = props.register;
  var renderCustomFieldSpecificInput = function renderCustomFieldSpecificInput() {
    var props = {
      register: register,
      customField: customField,
      index: index,
      lookupValues: lookupValues
    };
    var customFieldRender;
    switch (customField.type) {
      case "RENT":
        customFieldRender = /*#__PURE__*/React.createElement(CustomFieldRENT, _extends({}, props, {
          register: register
        }));
        break;
      case "CHAR":
        customFieldRender = /*#__PURE__*/React.createElement(CustomFieldCHAR, props);
        break;
      case "DATE":
        customFieldRender = /*#__PURE__*/React.createElement(CustomFieldDATE, props);
        break;
      case "DATI":
        customFieldRender = /*#__PURE__*/React.createElement(CustomFieldDATI, props);
        break;
      case "NUM":
        customFieldRender = /*#__PURE__*/React.createElement(CustomFieldNUM, props);
        break;
      case "CODE":
        customFieldRender = /*#__PURE__*/React.createElement(CustomFieldCODE, props);
        break;
      default:
        customFieldRender = /*#__PURE__*/React.createElement("div", null);
        break;
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, customField.groupLabel && /*#__PURE__*/React.createElement("div", {
      style: groupLabelStyle
    }, customField.groupLabel), customFieldRender);
  };
  return renderCustomFieldSpecificInput();
}
export default CustomFieldInput;