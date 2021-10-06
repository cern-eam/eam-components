function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import ErrorTypes from "../enums/ErrorTypes";
export var SET_SNACKBAR_MESSAGE = 'SET_SNACKBAR_MESSAGE';
export var SET_CONFIRM_DIALOG = 'SET_CONFIRM_DIALOG';
export function showSuccess(message) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var autoHideDuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4000;
  return {
    type: SET_SNACKBAR_MESSAGE,
    snackbar: {
      title: title,
      message: message,
      autoHideDuration: autoHideDuration,
      type: 'success',
      open: true
    }
  };
}
export function showError(message) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var autoHideDuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4000;
  return {
    type: SET_SNACKBAR_MESSAGE,
    snackbar: {
      title: title,
      message: message,
      autoHideDuration: autoHideDuration,
      type: 'error',
      open: true
    }
  };
}
export function showWarning(message) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var autoHideDuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4000;
  return {
    type: SET_SNACKBAR_MESSAGE,
    snackbar: {
      title: title,
      message: message,
      autoHideDuration: autoHideDuration,
      type: 'warning',
      open: true
    }
  };
}
export function hideNotification() {
  return {
    type: SET_SNACKBAR_MESSAGE,
    snackbar: {
      title: '',
      message: '',
      type: '',
      open: false
    }
  };
}
export function openConfirmDialog() {
  var dialog = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var confirmHandler = arguments.length > 1 ? arguments[1] : undefined;
  var cancelHandler = arguments.length > 2 ? arguments[2] : undefined;
  return {
    type: SET_CONFIRM_DIALOG,
    confirmDialog: _objectSpread({}, dialog, {
      confirmHandler: confirmHandler,
      cancelHandler: cancelHandler,
      open: true
    })
  };
}
export function closeConfirmDialog() {
  return {
    type: SET_CONFIRM_DIALOG,
    confirmDialog: {
      open: false
    }
  };
}
/**
 * Display an error message based on an exception
 * @param error
 * @returns {function(*)}
 */

export function handleError(error) {
  return function (dispatch) {
    switch (error.type) {
      case ErrorTypes.CONNECTION_ABORDED:
        dispatch(showError("The server did not respond in a timely fashion. Please try again or check your internet connection."));
        break;

      case ErrorTypes.NETWORK_ERROR:
        dispatch(showError("The server could not be reached."));
        break;

      case ErrorTypes.SERVER_ERROR:
        if (error.response && error.response.body) {
          var errors = error.response.body.errors;

          if (errors && errors.length > 0) {
            dispatch(showError(errors[0].message));
          }
        }

        break;
    }
  };
}