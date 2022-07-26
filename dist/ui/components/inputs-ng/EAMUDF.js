function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import WSUDF from "tools/WSUDF";
import EAMAutocomplete from "./EAMAutocomplete";
import EAMCheckbox from './EAMCheckbox';
import EAMSelect from "./EAMSelect";
import EAMTextField from './EAMTextField';
import { areEqual, processElementInfo } from './tools/input-tools';
var NONE = 'NONE';
var CODE = 'CODE';
var CODEDESC = 'CODEDESC';
var RENT = 'RENT';

var EAMUDF = function EAMUDF(props) {
  var elementInfo = props.elementInfo,
      valueKey = props.valueKey,
      value = props.value,
      descKey = props.descKey,
      desc = props.desc,
      updateProperty = props.updateProperty;
  var udfLookupType = elementInfo.udfLookupType,
      udfLookupEntity = elementInfo.udfLookupEntity,
      elementId = elementInfo.elementId,
      fieldType = elementInfo.fieldType;

  if (fieldType === 'checkbox') {
    return /*#__PURE__*/React.createElement(EAMCheckbox, _extends({}, processElementInfo(elementInfo), {
      valueKey: valueKey,
      value: value,
      updateProperty: updateProperty
    }));
  }

  switch (udfLookupType) {
    case CODE:
      return /*#__PURE__*/React.createElement(EAMSelect, _extends({}, processElementInfo(elementInfo), {
        valueKey: valueKey,
        value: value,
        updateProperty: updateProperty,
        autocompleteHandler: WSUDF.getUDFCodeValues,
        autocompleteHandlerParams: [udfLookupEntity, elementId]
      }));

    case CODEDESC:
      return /*#__PURE__*/React.createElement(EAMSelect, _extends({}, processElementInfo(elementInfo), {
        valueKey: valueKey,
        value: value,
        updateProperty: updateProperty,
        autocompleteHandler: WSUDF.getUDFCodeDescValues,
        autocompleteHandlerParams: [udfLookupEntity, elementId]
      }));

    case RENT:
      return /*#__PURE__*/React.createElement(EAMAutocomplete, _extends({}, processElementInfo(elementInfo), {
        valueKey: valueKey,
        value: value,
        descKey: descKey,
        desc: desc,
        updateProperty: updateProperty,
        autocompleteHandler: WSUDF.autocompleteUserDefinedField,
        autocompleteHandlerParams: [udfLookupEntity]
      }));

    case NONE:
    default:
      return /*#__PURE__*/React.createElement(EAMTextField, _extends({}, processElementInfo(elementInfo), {
        valueKey: valueKey,
        value: value,
        updateProperty: updateProperty
      }));
  }
};

export default React.memo(EAMUDF, areEqual);