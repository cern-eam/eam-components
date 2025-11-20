function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import Axios from "axios";
import React, { useState, createContext, useCallback, useMemo, useEffect } from "react";
import GridWS from "../../eamgrid/lib/GridWS";
import { EAMCellField, EAMFilterField, getRowAsAnObject } from "./utils";
import useEAMGridTableInstance from "./useEAMGridTableInstance";
import { useAsyncDebounce } from "react-table";
var ARRAY_SEPARATOR = "$$";
var defaultCreateColumns = function defaultCreateColumns(_ref) {
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
      Filter: EAMFilterField,
      Cell: cellRenderer ? cellRenderer : EAMCellField
    };
  });
};
var processFilters = function processFilters(filters, filterProcessor) {
  return filters.map(function (f) {
    var fieldValue = f.value.fieldValue;
    if (fieldValue && fieldValue.includes(ARRAY_SEPARATOR)) {
      fieldValue = fieldValue.split(ARRAY_SEPARATOR);
    }
    var filter = _objectSpread({}, f.value, {
      fieldValue: fieldValue
    });
    return Object.keys(filter).filter(function (key) {
      return ["fieldName", "fieldValue", "joiner", "operator"].includes(key);
    }).reduce(function (newFilterObj, key) {
      return _objectSpread({}, newFilterObj, _defineProperty({}, key, filter[key]));
    }, {});
  }).filter(function (filter) {
    return filter.fieldValue !== undefined || filter.fieldValue !== "" || ["IS EMPTY", "NOT EMPTY"].includes(filter.operator);
  }).map(filterProcessor);
};
var processSortBy = function processSortBy(sortBy, sortByProcessor) {
  return (sortBy || []).map(function (sort) {
    return {
      sortBy: sort.id,
      sortType: sort.desc === true ? "DESC" : "ASC"
    };
  }).map(sortByProcessor);
};
var hasCustomFieldColumn = function hasCustomFieldColumn(columns) {
  return columns.map(function (_ref2) {
    var id = _ref2.id;
    return id.toLowerCase();
  }).some(function (id) {
    return id.startsWith("c_") && ["_evnt", "_obj", "_part"].some(function (ending) {
      return id.endsWith(ending);
    });
  });
};
export var EAMGridContext = createContext();
export var EAMGridContextProvider = function EAMGridContextProvider(props) {
  var gridName = props.gridName,
    userFunctionName = props.userFunctionName,
    gridID = props.gridID,
    _props$useNative = props.useNative,
    useNative = _props$useNative === void 0 ? true : _props$useNative,
    initialRowsPerPage = props.initialRowsPerPage,
    initialFilters = props.initialFilters,
    initialDataspyID = props.initialDataspyID,
    _props$initialSortBy = props.initialSortBy,
    initialSortBy = _props$initialSortBy === void 0 ? [] : _props$initialSortBy,
    tableInstanceProps = props.tableInstanceProps,
    onChangeSelectedRows = props.onChangeSelectedRows,
    onChangeFilters = props.onChangeFilters,
    onChangeSortBy = props.onChangeSortBy,
    onChangePage = props.onChangePage,
    onChangeRowsPerPage = props.onChangeRowsPerPage,
    onChangeDataspy = props.onChangeDataspy,
    searchOnMount = props.searchOnMount,
    cellRenderer = props.cellRenderer,
    handleError = props.handleError,
    createColumns = props.createColumns,
    dataCallback = props.dataCallback,
    processData = props.processData,
    _props$sortByProcesso = props.sortByProcessor,
    sortByProcessor = _props$sortByProcesso === void 0 ? function (e) {
      return e;
    } : _props$sortByProcesso,
    _props$filterProcesso = props.filterProcessor,
    filterProcessor = _props$filterProcesso === void 0 ? function (e) {
      return e;
    } : _props$filterProcesso,
    blockGrid = props.blockGrid;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    pageIndex = _useState2[0],
    setPageIndex = _useState2[1];
  var _useState3 = useState(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedDataspy = _useState4[0],
    setSelectedDataspy = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    disableFilters = _useState6[0],
    setDisableFilters = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    dataspies = _useState8[0],
    setDataspies = _useState8[1];
  var _useState9 = useState(initialRowsPerPage || 50),
    _useState10 = _slicedToArray(_useState9, 2),
    rowsPerPage = _useState10[0],
    setRowsPerPage = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    loading = _useState12[0],
    setLoading = _useState12[1];
  var _useState13 = useState({}),
    _useState14 = _slicedToArray(_useState13, 2),
    gridResult = _useState14[0],
    setGridResult = _useState14[1];
  var _useState15 = useState(),
    _useState16 = _slicedToArray(_useState15, 2),
    gridField = _useState16[0],
    setGridField = _useState16[1];
  var resetFilters = useMemo(function () {
    return (initialFilters || []).map(function (filter) {
      return {
        id: filter.fieldName,
        value: filter
      };
    });
  }, [initialFilters]);
  var _useState17 = useState({
      gridName: gridName,
      userFunctionName: userFunctionName ?? gridName,
      gridID: gridID,
      useNative: useNative,
      dataspyID: initialDataspyID || null,
      countTotal: true,
      includeMetadata: true,
      rowCount: rowsPerPage,
      gridSort: processSortBy(initialSortBy, sortByProcessor),
      gridFilter: processFilters(resetFilters, filterProcessor)
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    gridRequest = _useState18[0],
    setGridRequest = _useState18[1];
  var _useState19 = useState(),
    _useState20 = _slicedToArray(_useState19, 2),
    fetchDataCancelToken = _useState20[0],
    setFetchDataCancelToken = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    loadingExportToCSV = _useState22[0],
    setLoadingExportToCSV = _useState22[1];
  var columnCreator = createColumns ?? defaultCreateColumns;
  var dataCreator = processData ?? function (_ref3) {
    var d = _ref3.data;
    return d;
  };
  var columns = useMemo(function () {
    return columnCreator({
      gridField: gridField,
      cellRenderer: cellRenderer
    });
  }, [gridField, cellRenderer, columnCreator]);
  var data = useMemo(function () {
    return dataCreator({
      data: (gridResult?.row || []).map(getRowAsAnObject)
    });
  }, [gridResult.row]);
  var hasUnkownTotalRecords = useMemo(function () {
    return (gridResult?.records ?? "").includes("+");
  }, [gridResult]);
  var recordsNumber = +(gridResult?.records ?? "").replace("+", "");
  var totalRecords = recordsNumber <= rowsPerPage ? data.length : recordsNumber;
  var tableInstance = useEAMGridTableInstance(_objectSpread({
    columns: columns,
    data: data,
    initialState: {
      filters: resetFilters,
      sortBy: initialSortBy
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
  var toggleFilters = useCallback(function () {
    return setDisableFilters(!disableFilters);
  }, [disableFilters, setDisableFilters]);
  useEffect(function () {
    dataCallback && dataCallback({
      data: data
    });
  }, [data]);
  useEffect(function () {
    fetchDataDebounced(_objectSpread({}, gridRequest, {
      rowCount: searchOnMount ? rowsPerPage : 0
    }));
    return function () {
      if (fetchDataCancelToken) {
        fetchDataCancelToken.cancel();
      }
    };
  }, []);
  var adaptGridFilters = function adaptGridFilters(gr) {
    return _objectSpread({}, gr, {
      gridFilter: gr.gridFilter.map(function (filter) {
        if (Array.isArray(filter?.fieldValue)) {
          return filter.fieldValue.map(function (fieldValue, index) {
            return {
              fieldName: filter.fieldName,
              fieldValue: fieldValue,
              operator: filter.operator || 'EQUALS',
              joiner: index < filter?.fieldValue.length - 1 ? 'OR' : 'AND',
              leftParenthesis: index === 0 ? true : false,
              rightParenthesis: index === filter?.fieldValue.length - 1 ? true : false
            };
          });
        }
        return filter;
      }).flat()
    });
  };
  var fetchData = useCallback(function (gr) {
    setLoading(true);
    if (fetchDataCancelToken) {
      fetchDataCancelToken.cancel();
    }
    var newFetchDataCancelToken = Axios.CancelToken.source();
    setFetchDataCancelToken(newFetchDataCancelToken);
    GridWS.getGridData(adaptGridFilters(gr), {
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
    })["catch"](function (error) {
      handleError && handleError(error);
    })["finally"](function () {
      setLoading(false);
    });
  }, [fetchDataCancelToken, setFetchDataCancelToken]);
  var fetchDataDebounced = useAsyncDebounce(fetchData, 100);
  var handleOnSearch = useCallback(function () {
    setPageIndex(0);
    var newGridRequest = _objectSpread({}, gridRequest, {
      cursorPosition: 0
    });
    setGridRequest(newGridRequest);
    tableInstance.toggleAllRowsSelected(false);
    fetchDataDebounced(newGridRequest);
  }, [tableInstance, fetchDataDebounced, gridRequest]);
  var handleExportToCSV = useCallback(function () {
    setLoading(true);
    setLoadingExportToCSV(true);
    return GridWS.exportDataToCSV(adaptGridFilters(gridRequest)).then(function (result) {
      var hiddenElement = document.createElement("a");
      // utf8BOM used to enable detection of utf-8 encoding by excel when opening the CSV file
      var utf8BOM = "\uFEFF";
      hiddenElement.href = "data:text/csv;charset=UTF-8," + encodeURI("".concat(utf8BOM).concat(result.body)).replaceAll("#", "%23");
      hiddenElement.target = "_blank";
      hiddenElement.download = "exported_data.csv";
      hiddenElement.click();
    })["finally"](function () {
      setLoading(false);
      setLoadingExportToCSV(false);
    });
  }, [gridRequest]);
  useEffect(function () {
    var newGridFilters = processFilters(filters, filterProcessor);
    if (JSON.stringify(newGridFilters) === JSON.stringify(gridRequest.gridFilter)) return;
    setGridRequest(_objectSpread({}, gridRequest, {
      gridFilter: newGridFilters,
      cursorPosition: 0
    }));
    onChangeFilters && onChangeFilters(newGridFilters);
  }, [filters, gridRequest, onChangeFilters, tableInstance]);
  useEffect(function () {
    var newGridSort = processSortBy(sortBy, sortByProcessor);
    if (JSON.stringify(newGridSort) === JSON.stringify(gridRequest.gridSort) || !newGridSort.length && !gridRequest.gridSort) return;
    var newGridRequest = _objectSpread({}, gridRequest, {
      gridSort: newGridSort,
      cursorPosition: 0
    });
    setPageIndex(0);
    setGridRequest(newGridRequest);
    fetchDataDebounced(newGridRequest);
    onChangeSortBy && onChangeSortBy(sortBy);
  }, [sortBy, gridRequest, onChangeSortBy, fetchDataDebounced, tableInstance]);
  var handleChangePage = useCallback(function (page) {
    setPageIndex(page);
    var newCursorPosition = page * rowsPerPage + 1;
    if (newCursorPosition === gridRequest.cursorPosition && gridRequest.rowCount === rowsPerPage) return;
    var newGridRequest = _objectSpread({}, gridRequest, {
      cursorPosition: newCursorPosition
    });
    tableInstance.toggleAllRowsSelected(false);
    setGridRequest(newGridRequest);
    fetchDataDebounced(newGridRequest);
    onChangePage && onChangePage(page);
  }, [fetchDataDebounced, gridRequest, rowsPerPage, tableInstance, onChangePage]);
  var handleChangeRowsPerPage = useCallback(function (perPage) {
    setPageIndex(0);
    setRowsPerPage(perPage);
    var newGridRequest = _objectSpread({}, gridRequest, {
      cursorPosition: 0,
      rowCount: perPage
    });
    tableInstance.toggleAllRowsSelected(false);
    setGridRequest(newGridRequest);
    fetchDataDebounced(newGridRequest);
    onChangeRowsPerPage && onChangeRowsPerPage(perPage);
  }, [fetchDataDebounced, gridRequest, tableInstance, onChangeRowsPerPage]);
  var handleDataspyChange = useCallback(function (dataspy) {
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
    fetchDataDebounced(newGridRequest);
    onChangeDataspy && onChangeDataspy(dataspy);
  }, [fetchDataDebounced, gridRequest, resetFilters, tableInstance, onChangeDataspy]);
  var handleResetFilters = useCallback(function () {
    tableInstance.setAllFilters([]);
  }, [resetFilters, tableInstance]);
  useEffect(function () {
    if (onChangeSelectedRows) {
      selectedFlatRows.forEach(prepareRow);
      onChangeSelectedRows(selectedFlatRows);
    }
  }, [selectedFlatRows, onChangeSelectedRows]);
  useEffect(function () {
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
    loadingExportToCSV: loadingExportToCSV,
    blockGrid: blockGrid
  };
  return /*#__PURE__*/React.createElement(EAMGridContext.Provider, {
    value: context
  }, props.children);
};