function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// The local storage key pointing to whether the history is enabled
export var INPUT_HISTORY_SETTING_KEY = 'INPUT_HISTORY_ENABLED';

// The string that precedes each history item's ID (local storage key)
export var HISTORY_ID_PREFIX = 'INPUT_HISTORY_';

/*
 * The history stores the most recent items chronologically.
 * 'MAX_LENGTH' defines the maximum number of stored entries in the history.
 * Type 'H' is used to indicate that a history icon should be shown in
 * each item of the rendered list.
 */
export var saveHistory = function saveHistory(key, option) {
  var MAX_LENGTH = 5;

  // Create item in local storage if it doesn't exist already
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify([]));
  }

  // Get current history
  var history = JSON.parse(localStorage.getItem(key));

  // Check if entry is already in the history
  var existingIndex = history.findIndex(function (elem) {
    return elem.code === option.code;
  });

  // If the entry already existed, update history chronologically
  if (existingIndex !== -1) {
    history.unshift(history.splice(existingIndex, 1)[0]); // move entry to beginning
    localStorage.setItem(key, JSON.stringify(history));
    return;
  }

  // Add new entry to beginning of history structure
  history.unshift(_objectSpread({}, option, {
    type: 'H'
  }));

  // Remove oldest entry from history 
  if (history.length > MAX_LENGTH) {
    history.pop();
  }

  // Add to local storage
  localStorage.setItem(key, JSON.stringify(history));
};
var isHistorySettingEnabled = function isHistorySettingEnabled() {
  return JSON.parse(localStorage.getItem(INPUT_HISTORY_SETTING_KEY)) === true;
};
export var fetchHistory = function fetchHistory(key) {
  var history = JSON.parse(localStorage.getItem(key));
  return history && isHistorySettingEnabled() ? history : [];
};