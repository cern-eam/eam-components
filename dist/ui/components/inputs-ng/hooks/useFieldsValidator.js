function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var useFieldsValidator = function useFieldsValidator(fieldsData, entity) {
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
      var value = get(entity, fieldLayout.xpath) ?? get(entity, fieldKey);
      if (isRequired(fieldLayout) && !value) {
        errorMessagesAcc[fieldKey] = fieldLayout.text + emptyValueError;
        allFieldsAreValid = false;
      }

      // if ((fieldLayout.fieldType === 'number' || fieldLayout.fieldType === 'currency') && isNaN(value ?? 0)) {
      //     errorMessagesAcc[fieldKey] = fieldLayout.text + nanError;
      //     allFieldsAreValid = false;
      // }

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