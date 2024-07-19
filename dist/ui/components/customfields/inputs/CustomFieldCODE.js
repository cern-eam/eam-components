function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import tools from '../CustomFieldTools';
import EAMSelect from 'eam-components/dist/ui/components/inputs-ng/EAMSelect';
import EAMTextField from 'eam-components/dist/ui/components/inputs-ng/EAMTextField';
function CustomFieldCODE(_ref) {
  var customField = _ref.customField,
    lookupValues = _ref.lookupValues,
    register = _ref.register,
    index = _ref.index,
    validate = _ref.validate;
  var extraProps = register(customField.code, "customField.".concat(index, ".value"));
  if (tools.isLookupCustomField(customField)) {
    return /*#__PURE__*/React.createElement(EAMSelect, _extends({}, extraProps, {
      options: lookupValues && lookupValues[customField.code],
      validate: validate
    }));
  } else {
    return /*#__PURE__*/React.createElement(EAMTextField, extraProps);
  }
}
export default CustomFieldCODE;