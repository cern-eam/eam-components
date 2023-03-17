function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import tools from '../CustomFieldTools';
import EAMSelect from 'eam-components/dist/ui/components/inputs-ng/EAMSelect';
import EAMTextField from 'eam-components/dist/ui/components/inputs-ng/EAMTextField';
function CustomFieldNUM(_ref) {
  var customField = _ref.customField,
    lookupValues = _ref.lookupValues,
    register = _ref.register,
    index = _ref.index;
  if (tools.isLookupCustomField(customField)) {
    return /*#__PURE__*/React.createElement(EAMSelect, _extends({}, register(customField.code, "customField.".concat(index, ".value")), {
      options: lookupValues && lookupValues[customField.code],
      endTextAdornment: customField.uom
    }));
  } else {
    return /*#__PURE__*/React.createElement(EAMTextField, _extends({}, register(customField.code, "customField.".concat(index, ".value")), {
      endTextAdornment: customField.uom
    }));
  }
}
export default CustomFieldNUM;