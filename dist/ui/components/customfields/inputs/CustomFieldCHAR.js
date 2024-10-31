function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import tools from '../CustomFieldTools';
import EAMSelect from 'eam-components/dist/ui/components/inputs-ng/EAMSelect';
import EAMTextField from 'eam-components/dist/ui/components/inputs-ng/EAMTextField';
function CustomFieldCHAR(_ref) {
  var customField = _ref.customField,
    lookupValues = _ref.lookupValues,
    register = _ref.register,
    index = _ref.index,
    validate = _ref.validate;
  if (tools.isLookupCustomField(customField)) {
    return /*#__PURE__*/React.createElement(EAMSelect, _extends({}, register(customField.code, "customField.".concat(index, ".value")), {
      options: lookupValues && lookupValues[customField.code],
      endTextAdornment: customField.uom,
      validate: validate
    }));
  } else {
    return /*#__PURE__*/React.createElement(EAMTextField, _extends({}, register(customField.code, "customField.".concat(index, ".value")), {
      endTextAdornment: customField.uom
    }));
  }
}
export default React.memo(CustomFieldCHAR);