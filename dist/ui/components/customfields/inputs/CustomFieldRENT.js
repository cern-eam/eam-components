function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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