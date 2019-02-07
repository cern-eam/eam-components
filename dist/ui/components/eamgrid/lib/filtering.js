'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getFilters = getFilters;
exports.setFilter = setFilter;
exports.clearFilters = clearFilters;
exports.saveGridRequestInLocalStorage = saveGridRequestInLocalStorage;
exports.loadGridRequestFromLocalStorage = loadGridRequestFromLocalStorage;

var _tools = require('./tools');

function getDefaultFilterOperator(dataType) {
    switch (dataType) {
        case 'DATE':
            return 'GREATER_THAN';
        case 'DATETIME':
            return 'GREATER_THAN';
        case 'DECIMAL':
            return 'GREATER_THAN';
        case 'NUMBER':
            return 'GREATER_THAN';
        case 'CHKBOOLEAN':
            return 'SELECTED';
        default:
            return 'BEGINS';
    }
}

function getFilters() {
    var filters = [];
    Object.values(this.filterMap).forEach(function (pendingFilter) {
        return filters.push(pendingFilter);
    });
    return filters;
}

/**
 *
 * @param filter
 */
function setFilter(filter, dataType) {
    var newFilter = void 0;
    var oldFilter = this.filterMap[filter.fieldName];
    if (oldFilter) {
        // Update of existing filter
        newFilter = _extends({}, oldFilter, filter);
    } else {
        // Creation of new filter
        newFilter = _extends({
            operator: getDefaultFilterOperator(dataType),
            fieldValue: '',
            joiner: 'AND'
        }, filter);
    }
    this.filterMap[filter.fieldName] = newFilter;
}

function clearFilters(callback) {
    var _this = this;

    this.setState(function (prevState) {
        return {
            gridRequest: _extends({}, prevState.gridRequest, {
                gridSort: [],
                gridFilter: []
            }),
            selectedRows: {}
        };
    }, function () {
        // update local storage
        _this.saveGridRequestInLocalStorage();
        // execute callback if any
        if (callback && typeof callback === 'function') {
            callback();
        }
    });
}

function saveGridRequestInLocalStorage() {
    // We use local storage unless the user explicitely ask not to
    if (this.props.useLocalStorage !== false) {
        localStorage.setItem('gridRequest' + this.props.gridId, JSON.stringify(this.state.gridRequest));
    }
}

function loadGridRequestFromLocalStorage() {
    // We use local storage unless the user explicitely ask not to
    if (this.props.useLocalStorage !== false) {
        return localStorage.getItem('gridRequest' + this.props.gridId);
    }
}