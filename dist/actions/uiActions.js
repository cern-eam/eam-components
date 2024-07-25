function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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