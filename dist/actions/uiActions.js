'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SET_CONFIRM_DIALOG = exports.SET_SNACKBAR_MESSAGE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.showSuccess = showSuccess;
exports.showError = showError;
exports.showWarning = showWarning;
exports.hideNotification = hideNotification;
exports.openConfirmDialog = openConfirmDialog;
exports.closeConfirmDialog = closeConfirmDialog;
exports.handleError = handleError;

var _ErrorTypes = require('../enums/ErrorTypes');

var _ErrorTypes2 = _interopRequireDefault(_ErrorTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_SNACKBAR_MESSAGE = exports.SET_SNACKBAR_MESSAGE = 'SET_SNACKBAR_MESSAGE';
var SET_CONFIRM_DIALOG = exports.SET_CONFIRM_DIALOG = 'SET_CONFIRM_DIALOG';

function showSuccess(message) {
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

function showError(message) {
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

function showWarning(message) {
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

function hideNotification() {
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

function openConfirmDialog() {
    var dialog = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var confirmHandler = arguments[1];
    var cancelHandler = arguments[2];

    return {
        type: SET_CONFIRM_DIALOG,
        confirmDialog: _extends({}, dialog, {
            confirmHandler: confirmHandler,
            cancelHandler: cancelHandler,
            open: true
        })
    };
}

function closeConfirmDialog() {
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
function handleError(error) {
    return function (dispatch) {
        switch (error.type) {
            case _ErrorTypes2.default.CONNECTION_ABORDED:
                dispatch(showError("The server did not respond in a timely fashion. Please try again or check your internet connection."));
                break;

            case _ErrorTypes2.default.NETWORK_ERROR:
                dispatch(showError("The server could not be reached."));
                break;

            case _ErrorTypes2.default.SERVER_ERROR:
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