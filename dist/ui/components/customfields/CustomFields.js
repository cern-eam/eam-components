function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect } from 'react';
import CustomFieldInput from './CustomFieldInput';
import WSCustomFields from "../../../tools/WSCustomFields";
import SimpleEmptyState from 'eam-components/dist/ui/components/emptystates/SimpleEmptyState';
function CustomFields(props) {
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    lookupValues = _useState2[0],
    setLookupValues = _useState2[1];
  var customFields = props.customFields,
    classCode = props.classCode,
    entityCode = props.entityCode,
    register = props.register;
  useEffect(function () {
    if (customFields) {
      fetchLookupValues(entityCode, classCode);
    }
  }, [entityCode, classCode]);
  var fetchLookupValues = function fetchLookupValues(entityCode, classCode) {
    WSCustomFields.getCustomFieldsLookupValues(entityCode, classCode).then(function (response) {
      return setLookupValues(response.body.data);
    })["catch"](console.error);
  };
  var isEmptyState = !customFields || customFields.length === 0;
  return isEmptyState ? /*#__PURE__*/React.createElement(SimpleEmptyState, {
    message: "No Custom Fields to show."
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, customFields.map(function (customField, index) {
    {/* The custom fields starting with MTFX were temporarily used to have a similar functionality to
        the Line Title in the Associate Custom Fields screen of Infor EAM. They may now be hidden. 
        TODO: return null also when 'isCernMode' 
     */}
    if (customField.code.startsWith('MTFX')) return null;
    return /*#__PURE__*/React.createElement(CustomFieldInput, {
      register: register,
      customField: customField,
      index: index,
      key: index,
      lookupValues: lookupValues
    });
  }));
}
CustomFields.defaultProps = {
  title: 'CUSTOM FIELDS'
};
export default React.memo(CustomFields);