import queryString from 'query-string';

const FILTER_SEPARATOR = ':::';
const VALUE_SEPARATOR = ':';
const JOINER_SEPARATOR = '^';
const ARRAY_SEPARATOR = '$$';
const OPERATOR_SEPARATOR = '|||';

const parseGridFilters = (gridFiltersString) => {
    const adaptGridFilters = ([code, value]) => {
        const [val, joiner] = value && value.split(JOINER_SEPARATOR);
        const [joinerVal, operator] = joiner && joiner.split(OPERATOR_SEPARATOR);
        return ( {
            fieldName: code,
            fieldValue: val,
            operator: operator || "EQUALS",
            joiner: joinerVal || "AND",
            leftParenthesis: false,
            rightParenthesis: false,
        })
    }

    try {
        return gridFiltersString.split(FILTER_SEPARATOR)
            .filter(Boolean)
            .map(gridFilter => gridFilter.split(VALUE_SEPARATOR))
            .map(adaptGridFilters);
    } catch (err) {
        return [];
    }
}

const stringifyGridFilter = gridFilter => {
    const fieldValue = gridFilter.fieldValue?.join?.(ARRAY_SEPARATOR) ?? gridFilter.fieldValue;
    return fieldValue ? gridFilter.fieldName + VALUE_SEPARATOR + (fieldValue || '') + JOINER_SEPARATOR + (gridFilter.joiner) + OPERATOR_SEPARATOR + (gridFilter.operator || '=') : ''
}

const stringifyGridFilters = (gridFilters = []) => {
    return gridFilters.map(stringifyGridFilter).join(FILTER_SEPARATOR)
}

const replaceUrlParam = (key, val) => {
    const params = queryString.parse(window.location.search);
    params[key] = val;
    const newParams = queryString.stringify(params, { skipEmptyString: true });
    return newParams ? `?${newParams}` : '';
}

const getURLParameterByName = name => {
    return queryString.parse(window.location.search)[name] || ''
};

export default {
    parseGridFilters,
    getURLParameterByName,
    replaceUrlParam,
    stringifyGridFilters,
}