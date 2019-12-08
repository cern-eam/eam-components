"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findIndex = findIndex;

/**
 * Implementation of findIndex which is compatible with IE 11
 * @param items, itemLabel, itemToBeFound
 */
function findIndex(items, itemLabel, itemToBeFound) {
  var index = -1;
  items.some(function (el, i) {
    if (el[itemLabel] === itemToBeFound) {
      index = i;
      return true;
    }
  });
  return index;
}