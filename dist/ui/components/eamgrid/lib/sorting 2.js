'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.toggleSortField = toggleSortField;

var _tools = require('./tools');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var sortingTypes = ['ASC', 'DESC', undefined];

/**
 * Get next sorting type after prevSortingType
 */
var _getNextSortingType = function _getNextSortingType(prevSortingType) {
    var i = sortingTypes.indexOf(prevSortingType);
    i = ++i % sortingTypes.length;
    return sortingTypes[i];
};

/**
 * Update State with GridRequest sorting info and reload data
 * @param {object} field
 */
function toggleSortField(sortinfo) {
    var _this = this;

    // update the state with sorting info for fields and gridSort in gridRequest
    this.setState(function (prevState) {

        // get current index of gridSort for this field
        //let sortingIndex = prevState.gridRequest.gridSort.findIndex(f => f.sortBy === sortinfo.sortBy);
        var sortingIndex = (0, _tools.findIndex)(prevState.gridRequest.gridSort, 'sortBy', sortinfo.sortBy);

        // new sorting object
        var newSorting = {};
        if (sortingIndex > -1) {
            newSorting = _extends({}, prevState.gridRequest.gridSort[sortingIndex], sortinfo, {
                // get next sorting type for this field
                sortType: _getNextSortingType(prevState.gridRequest.gridSort[sortingIndex].sortType)
            });
        } else {
            newSorting = _extends({ 'sortType': 'ASC' }, sortinfo);
        }

        // defined new grid sorting
        var newGridSorting = [].concat(_toConsumableArray(prevState.gridRequest.gridSort.slice(0, sortingIndex > 0 ? sortingIndex : 0)), [newSorting], _toConsumableArray(prevState.gridRequest.gridSort.slice(sortingIndex + 1))).filter(function (s) {
            return s.sortType;
        });

        return _extends({}, prevState, {
            'hasMore': true,
            'rows': [],
            'fields': [].concat(_toConsumableArray(prevState.fields)),
            'gridRequest': _extends({}, prevState.gridRequest, {
                'cursorPosition': 1,
                'gridSort': newGridSorting
            })
        });
    }, function () {
        _this.loadMoreData();
    });
}