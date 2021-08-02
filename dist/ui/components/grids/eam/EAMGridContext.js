"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EAMGridContextProvider = exports.EAMGridContext = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _react = _interopRequireWildcard(require("react"));

var _GridWS = _interopRequireDefault(require("../../eamgrid/lib/GridWS"));

var _utils = require("./utils");

var _useEAMGridTableInstance = _interopRequireDefault(require("./useEAMGridTableInstance"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createColumns = function createColumns(_ref) {
  var gridField = _ref.gridField,
      cellRenderer = _ref.cellRenderer;
  return (gridField || []).sort(function (a, b) {
    return a.order - b.order;
  }).map(function (field) {
    return {
      id: field.name,
      Header: field.label,
      accessor: field.name,
      width: Number(field.width),
      minWidth: 0,
      maxWidth: 99999,
      dataType: field.dataType,
      Filter: _utils.EAMFilterField,
      Cell: cellRenderer ? cellRenderer : _utils.EAMCellField
    };
  });
};

var processFilters = function processFilters(filters) {
  return filters.map(function (f) {
    var filter = f.value;
    var allowedFilter = Object.keys(filter).filter(function (key) {
      return ['fieldName', 'fieldValue', 'joiner', 'operator'].includes(key);
    }).reduce(function (newFilterObj, key) {
      return _objectSpread({}, newFilterObj, _defineProperty({}, key, filter[key]));
    }, {});
    return allowedFilter;
  }).filter(function (filter) {
    return filter.fieldValue !== undefined || filter.fieldValue !== '' || ['IS EMPTY', 'NOT EMPTY'].includes(filter.operator);
  });
};

var hasCustomFieldColumn = function hasCustomFieldColumn(columns) {
  return columns.map(function (_ref2) {
    var id = _ref2.id;
    return id.toLowerCase();
  }).some(function (id) {
    return id.startsWith('c_') && ['_evnt', '_obj', '_part'].some(function (ending) {
      return id.endsWith(ending);
    });
  });
};

var EAMGridContext = (0, _react.createContext)();
exports.EAMGridContext = EAMGridContext;

var EAMGridContextProvider = function EAMGridContextProvider(props) {
  var gridName = props.gridName,
      gridID = props.gridID,
      _props$useNative = props.useNative,
      useNative = _props$useNative === void 0 ? true : _props$useNative,
      initialRowsPerPage = props.initialRowsPerPage,
      initialFilters = props.initialFilters,
      initialDataspyID = props.initialDataspyID,
      tableInstanceProps = props.tableInstanceProps,
      onChangeSelectedRows = props.onChangeSelectedRows,
      onChangeFilters = props.onChangeFilters,
      onChangeSortBy = props.onChangeSortBy,
      onChangePage = props.onChangePage,
      onChangeRowsPerPage = props.onChangeRowsPerPage,
      onChangeDataspy = props.onChangeDataspy,
      searchOnMount = props.searchOnMount,
      cellRenderer = props.cellRenderer,
      handleError = props.handleError;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      pageIndex = _useState2[0],
      setPageIndex = _useState2[1];

  var _useState3 = (0, _react.useState)(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedDataspy = _useState4[0],
      setSelectedDataspy = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      disableFilters = _useState6[0],
      setDisableFilters = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      dataspies = _useState8[0],
      setDataspies = _useState8[1];

  var _useState9 = (0, _react.useState)(initialRowsPerPage || 50),
      _useState10 = _slicedToArray(_useState9, 2),
      rowsPerPage = _useState10[0],
      setRowsPerPage = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      loading = _useState12[0],
      setLoading = _useState12[1];

  var _useState13 = (0, _react.useState)({}),
      _useState14 = _slicedToArray(_useState13, 2),
      gridResult = _useState14[0],
      setGridResult = _useState14[1];

  var _useState15 = (0, _react.useState)(),
      _useState16 = _slicedToArray(_useState15, 2),
      gridField = _useState16[0],
      setGridField = _useState16[1];

  var _useState17 = (0, _react.useState)({
    gridName: gridName,
    gridID: gridID,
    useNative: useNative,
    dataspyID: initialDataspyID || null,
    countTotal: true,
    includeMetadata: true,
    rowCount: rowsPerPage
  }),
      _useState18 = _slicedToArray(_useState17, 2),
      gridRequest = _useState18[0],
      setGridRequest = _useState18[1];

  var _useState19 = (0, _react.useState)(),
      _useState20 = _slicedToArray(_useState19, 2),
      fetchDataCancelToken = _useState20[0],
      setFetchDataCancelToken = _useState20[1];

  var _useState21 = (0, _react.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      loadingExportToCSV = _useState22[0],
      setLoadingExportToCSV = _useState22[1];

  var columns = (0, _react.useMemo)(function () {
    return createColumns({
      gridField: gridField,
      cellRenderer: cellRenderer
    });
  }, [gridField, cellRenderer]);
  var data = (0, _react.useMemo)(function () {
    return (gridResult?.row || []).map(_utils.getRowAsAnObject);
  }, [gridResult.row]);
  var hasUnkownTotalRecords = (0, _react.useMemo)(function () {
    return (gridResult?.records ?? '').includes('+');
  }, [gridResult]);
  var totalRecords = +(gridResult?.records ?? '').replace('+', '');
  var resetFilters = (0, _react.useMemo)(function () {
    return (initialFilters || []).map(function (filter) {
      return {
        id: filter.fieldName,
        value: filter
      };
    });
  }, [initialFilters]);
  var tableInstance = (0, _useEAMGridTableInstance["default"])(_objectSpread({
    columns: columns,
    data: data,
    initialState: {
      filters: resetFilters
    },
    manualFilters: true,
    manualSortBy: true,
    disableMultiSort: true,
    disableFilters: disableFilters,
    autoResetSortBy: false,
    autoResetFilters: false,
    autoResetSelectedRows: false
  }, tableInstanceProps));
  var _tableInstance$state = tableInstance.state,
      sortBy = _tableInstance$state.sortBy,
      filters = _tableInstance$state.filters,
      selectedFlatRows = tableInstance.selectedFlatRows,
      prepareRow = tableInstance.prepareRow;
  var toggleFilters = (0, _react.useCallback)(function () {
    return setDisableFilters(!disableFilters);
  }, [disableFilters, setDisableFilters]);
  (0, _react.useEffect)(function () {
    fetchData(_objectSpread({}, gridRequest, {
      gridFilter: processFilters(resetFilters),
      gridSort: sortBy || [],
      rowCount: searchOnMount ? rowsPerPage : 0
    }));
    return function () {
      if (fetchDataCancelToken) {
        fetchDataCancelToken.cancel();
      }
    };
  }, []);
  var fetchData = (0, _react.useCallback)(function (gr) {
    setLoading(true);

    if (fetchDataCancelToken) {
      fetchDataCancelToken.cancel();
    }

    var newFetchDataCancelToken = _axios["default"].CancelToken.source();

    setFetchDataCancelToken(newFetchDataCancelToken);

    _GridWS["default"].getGridData(gr, {
      cancelToken: newFetchDataCancelToken.token
    }).then(function (response) {
      var newGridResult = response.body.data;

      if (gr.includeMetadata) {
        var dataspy = newGridResult.gridDataspy.find(function (ds) {
          return ds.code === newGridResult.dataSpyId;
        });
        setDataspies(newGridResult.gridDataspy);
        setSelectedDataspy(dataspy);
        setGridField(newGridResult.gridField);
      }

      setGridResult(newGridResult);
      setLoading(false);
    })["catch"](function (error) {
      handleError && handleError(error);
    });
  }, [fetchDataCancelToken, setFetchDataCancelToken]);
  var handleOnSearch = (0, _react.useCallback)(function () {
    setPageIndex(0);

    var newGridRequest = _objectSpread({}, gridRequest, {
      cursorPosition: 0
    });

    setGridRequest(newGridRequest);
    tableInstance.toggleAllRowsSelected(false);
    fetchData(newGridRequest);
  }, [tableInstance, fetchData, gridRequest]);
  var handleExportToCSV = (0, _react.useCallback)(function () {
    setLoadingExportToCSV(true);
    return _GridWS["default"].exportDataToCSV(gridRequest).then(function (result) {
      var hiddenElement = document.createElement('a'); // utf8BOM used to enable detection of utf-8 encoding by excel when opening the CSV file

      var utf8BOM = "\uFEFF";
      hiddenElement.href = 'data:text/csv;charset=UTF-8,' + encodeURI("".concat(utf8BOM).concat(result.body));
      hiddenElement.target = '_blank';
      hiddenElement.download = "exported_data.csv";
      hiddenElement.click();
    })["finally"](function () {
      setLoadingExportToCSV(false);
    });
  }, []);
  (0, _react.useEffect)(function () {
    var newGridFilters = processFilters(filters);
    if (JSON.stringify(newGridFilters) === JSON.stringify(gridRequest.gridFilter)) return;
    setGridRequest(_objectSpread({}, gridRequest, {
      gridFilter: newGridFilters,
      cursorPosition: 1
    }));
    onChangeFilters && onChangeFilters(newGridFilters);
  }, [filters, gridRequest, onChangeFilters, tableInstance]);
  (0, _react.useEffect)(function () {
    var newGridSort = sortBy.map(function (sort) {
      return {
        sortBy: sort.id,
        sortType: sort.desc === true ? 'DESC' : 'ASC'
      };
    });
    if (JSON.stringify(newGridSort) === JSON.stringify(gridRequest.gridSort) || !newGridSort.length && !gridRequest.gridSort) return;

    var newGridRequest = _objectSpread({}, gridRequest, {
      gridSort: newGridSort,
      cursorPosition: 0
    });

    setPageIndex(0);
    setGridRequest(newGridRequest);
    fetchData(newGridRequest);
    onChangeSortBy && onChangeSortBy(sortBy);
  }, [sortBy, gridRequest, onChangeSortBy, fetchData, tableInstance]);
  var handleChangePage = (0, _react.useCallback)(function (page) {
    setPageIndex(page);
    var newCursorPosition = page * rowsPerPage + 1;
    if (newCursorPosition === gridRequest.cursorPosition && gridRequest.rowCount === rowsPerPage) return;

    var newGridRequest = _objectSpread({}, gridRequest, {
      cursorPosition: newCursorPosition
    });

    tableInstance.toggleAllRowsSelected(false);
    setGridRequest(newGridRequest);
    fetchData(newGridRequest);
    onChangePage && onChangePage(page);
  }, [fetchData, gridRequest, rowsPerPage, tableInstance, onChangePage]);
  var handleChangeRowsPerPage = (0, _react.useCallback)(function (perPage) {
    setPageIndex(0);
    setRowsPerPage(perPage);

    var newGridRequest = _objectSpread({}, gridRequest, {
      cursorPosition: 0,
      rowCount: perPage
    });

    tableInstance.toggleAllRowsSelected(false);
    setGridRequest(newGridRequest);
    fetchData(newGridRequest);
    onChangeRowsPerPage && onChangeRowsPerPage(perPage);
  }, [fetchData, gridRequest, tableInstance, onChangeRowsPerPage]);
  var handleDataspyChange = (0, _react.useCallback)(function (dataspy) {
    if (!dataspy) return;
    setSelectedDataspy(dataspy);

    var newGridRequest = _objectSpread({}, gridRequest, {
      gridFilter: [],
      gridSort: [],
      dataspyID: dataspy?.code,
      includeMetadata: true
    });

    tableInstance.toggleAllRowsSelected(false);
    tableInstance.setAllFilters([]);
    tableInstance.setSortBy([]);
    setGridRequest(newGridRequest);
    fetchData(newGridRequest);
    onChangeDataspy && onChangeDataspy(dataspy);
  }, [fetchData, gridRequest, resetFilters, tableInstance, onChangeDataspy]);
  var handleResetFilters = (0, _react.useCallback)(function () {
    tableInstance.setAllFilters([]);
  }, [resetFilters, tableInstance]);
  (0, _react.useEffect)(function () {
    if (onChangeSelectedRows) {
      selectedFlatRows.forEach(prepareRow);
      onChangeSelectedRows(selectedFlatRows);
    }
  }, [selectedFlatRows, onChangeSelectedRows]);
  (0, _react.useEffect)(function () {
    if (columns.length > 0 && !hasCustomFieldColumn(columns)) {
      setGridRequest(_objectSpread({}, gridRequest, {
        includeMetadata: false
      }));
    }
  }, [columns]);
  var context = {
    columns: columns,
    data: data,
    dataspies: dataspies,
    disableFilters: disableFilters,
    loading: loading,
    pageIndex: pageIndex,
    selectedDataspy: selectedDataspy,
    rowsPerPage: rowsPerPage,
    setDataspies: setDataspies,
    setDisableFilters: setDisableFilters,
    setLoading: setLoading,
    setPageIndex: setPageIndex,
    setSelectedDataspy: setSelectedDataspy,
    setRowsPerPage: setRowsPerPage,
    handleOnSearch: handleOnSearch,
    toggleFilters: toggleFilters,
    tableInstance: tableInstance,
    handleChangePage: handleChangePage,
    handleChangeRowsPerPage: handleChangeRowsPerPage,
    handleDataspyChange: handleDataspyChange,
    hasUnkownTotalRecords: hasUnkownTotalRecords,
    totalRecords: totalRecords,
    initialFilters: initialFilters,
    handleResetFilters: handleResetFilters,
    handleExportToCSV: handleExportToCSV,
    loadingExportToCSV: loadingExportToCSV
  };
  return /*#__PURE__*/_react["default"].createElement(EAMGridContext.Provider, {
    value: context
  }, props.children);
};

exports.EAMGridContextProvider = EAMGridContextProvider;