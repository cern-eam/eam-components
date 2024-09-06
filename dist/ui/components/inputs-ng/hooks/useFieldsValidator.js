function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useState } from 'react';
import { isHidden, isRequired } from '../tools/input-tools';
import { get } from "lodash";
var BLANK_ERROR = ' cannot be blank';
var NAN_ERROR = ' must be a valid number';

/**
 * Validates fields and generates the error messages to be shown (typically through an 'errorText' prop).
 * @param  {Object} fieldsData Contains `<K,V>` pairs of `<valueKey,fieldLayout>`
 * where `valueKey` is the same key used to store the corresponding value in the parameter
 * `formValues` and `fieldLayout` contains metadata describing the field (used in generating the
 * error message and validating the field).
 * @param  {Object} formValues Where all the values for the form fields are being kept.
 * It contains `<K,V>` pairs where `V` is the current field value (usually passed as prop to the field)
 * and `K` is the same key as the one passed to the corresponding entry in `fieldsData`.
 * @param  {String} errorString The text to show, in the generated error message, following the field label.
 * @return {Object} Returns `errorMessages`, `validateFields` and `resetErrorMessages`.
 * `errorMessages` contains the error messages using keys that match the ones passed in `fieldsData` and `formValues`.
 * `validateFields` is the validation function to be used before submitting the form.
 * `resetErrorMessages` is a function that clears the generated error messages.
 */
var useFieldsValidator = function useFieldsValidator(fieldsData, formValues) {
  var emptyValueError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : BLANK_ERROR;
  var nanError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : NAN_ERROR;
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    errorMessages = _useState2[0],
    setErrorMessages = _useState2[1];

  // Returns false if validation for at least one field fails
  // and sets generated error messages
  var validateFields = function validateFields() {
    var allFieldsAreValid = true;
    var generatedErrorMessages = Object.entries(fieldsData).reduce(function (errorMessagesAcc, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        fieldKey = _ref2[0],
        fieldLayout = _ref2[1];
      if (isHidden(fieldLayout)) {
        return errorMessagesAcc;
      }
      var value = get(formValues, fieldKey);
      if (isRequired(fieldLayout) && !value) {
        errorMessagesAcc[fieldKey] = fieldLayout.text + emptyValueError;
        allFieldsAreValid = false;
      }
      if ((fieldLayout.fieldType === 'number' || fieldLayout.fieldType === 'currency') && isNaN(value ?? 0)) {
        errorMessagesAcc[fieldKey] = fieldLayout.text + nanError;
        allFieldsAreValid = false;
      }
      return errorMessagesAcc;
    }, {});
    setErrorMessages(generatedErrorMessages);
    return allFieldsAreValid;
  };
  var generateErrorMessagesFromException = function generateErrorMessagesFromException(errors) {
    var generatedErrorMessages = Object.entries(fieldsData).reduce(function (errorMessagesAcc, _ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        fieldKey = _ref4[0],
        fieldLayout = _ref4[1];
      var errorText = errors?.find?.(function (e) {
        return e.location === fieldLayout.xpath;
      });
      if (errorText) {
        errorMessagesAcc[fieldKey] = errorText.message;
      }
      return errorMessagesAcc;
    }, {});
    setErrorMessages(generatedErrorMessages);
  };
  var resetErrorMessages = function resetErrorMessages() {
    setErrorMessages({});
  };
  return {
    errorMessages: errorMessages,
    validateFields: validateFields,
    generateErrorMessagesFromException: generateErrorMessagesFromException,
    resetErrorMessages: resetErrorMessages
  };
};
export default useFieldsValidator;