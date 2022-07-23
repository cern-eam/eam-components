/*
 * The history stores the most recent items chronologically.
 * 'MAX_LENGTH' defines the maximum number of stored entries in the history.
 * Type: 'H' is necessary as it draws the 'history' icon.
 */
export var saveHistory = function saveHistory(key, value, desc) {
  var MAX_LENGTH = 5; // Sanity check

  if (!key || !value || !desc) {
    return;
  } // Create item in local storage if it doesn't exist already


  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify([]));
  } // Get current history


  var history = JSON.parse(localStorage.getItem(key)); // Check if entry is already in the history

  var existingIndex = history.findIndex(function (elem) {
    return elem.code === value;
  }); // If the entry already existed, update history chronologically

  if (existingIndex !== -1) {
    history.unshift(history.splice(existingIndex, 1)[0]); // move entry to beginning

    localStorage.setItem(key, JSON.stringify(history));
    return;
  } // Add new entry to beginning of history structure


  history.unshift({
    code: value,
    desc: desc,
    type: "H"
  }); // Remove oldest entry from history 

  if (history.length > MAX_LENGTH) {
    history.pop();
  } // Add to local storage


  localStorage.setItem(key, JSON.stringify(history));
};
export var fetchHistory = function fetchHistory(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
};