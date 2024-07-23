function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import EAMAutocomplete from 'eam-components/dist/ui/components/inputs-ng/EAMAutocomplete';
import React from 'react';
import WSCustomFields from "../../../../tools/WSCustomFields";
function CustomFieldRENT(_ref) {
  var customField = _ref.customField,
    register = _ref.register,
    index = _ref.index;
  return /*#__PURE__*/React.createElement(EAMAutocomplete, _extends({}, register(customField.code, "customField.".concat(index, ".value"), "customField.".concat(index, ".valueDesc")), {
    autocompleteHandler: WSCustomFields.autocompleteCustomFieldRENT,
    autocompleteHandlerParams: [customField.entityCode, customField.rentCodeValue, customField.code]
  }));
}
export default CustomFieldRENT;