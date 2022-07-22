import React from 'react';
import WSUDF from "tools/WSUDF";
import EAMAutocomplete from "eam-components/ui/components/inputs-ng/EAMAutocomplete";
import EAMSelect from "eam-components/ui/components/inputs-ng/EAMSelect";
import EAMTextField from 'eam-components/ui/components/inputs-ng/EAMTextField';
import { areEqual } from './tools/input-tools';
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
      elementId = elementInfo.elementId;

  switch (udfLookupType) {
    case CODE:
      return /*#__PURE__*/React.createElement(EAMSelect, {
        elementInfo: elementInfo,
        valueKey: valueKey,
        value: value,
        updateProperty: updateProperty,
        autocompleteHandler: WSUDF.getUDFCodeValues,
        autocompleteHandlerParams: [udfLookupEntity, elementId]
      });

    case CODEDESC:
      return /*#__PURE__*/React.createElement(EAMSelect, {
        elementInfo: elementInfo,
        valueKey: valueKey,
        value: value,
        updateProperty: updateProperty,
        autocompleteHandler: WSUDF.getUDFCodeDescValues,
        autocompleteHandlerParams: [udfLookupEntity, elementId]
      });

    case RENT:
      return /*#__PURE__*/React.createElement(EAMAutocomplete, {
        elementInfo: elementInfo,
        valueKey: valueKey,
        value: value,
        descKey: descKey,
        desc: desc,
        updateProperty: updateProperty,
        autocompleteHandler: WSUDF.autocompleteUserDefinedField,
        autocompleteHandlerParams: [udfLookupEntity]
      });

    case NONE:
    default:
      return /*#__PURE__*/React.createElement(EAMTextField, {
        elementInfo: elementInfo,
        valueKey: valueKey,
        value: value,
        updateProperty: updateProperty
      });
  }
};

export default React.memo(EAMUDF, areEqual);