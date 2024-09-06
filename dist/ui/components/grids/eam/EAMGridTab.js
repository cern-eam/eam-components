function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import EAMGrid from './EAMGrid';
import { EAMGridContextProvider } from './EAMGridContext';
import EAMTable from '../../eamtable/EAMTable';
import EAMTableGridRequestAdapter from '../../eamtable/EAMTableGridRequestAdapter';
var captionStyle = {
  paddingLeft: '4px'
};
var customCellStyle = {
  whiteSpace: "nowrap",
  padding: "6px 4px"
};
var customTableCellRenderer = function customTableCellRenderer(_ref) {
  var row = _ref.row,
    columnMetadata = _ref.columnMetadata,
    CellComponent = _ref.CellComponent,
    customRenderers = _ref.customRenderers;
  var customRenderer = customRenderers && customRenderers[columnMetadata.id];
  return customRenderer ? /*#__PURE__*/React.createElement(CellComponent, {
    style: customCellStyle
  }, customRenderer(row[columnMetadata.id], columnMetadata)) : null;
};
var customGridRenderer = function customGridRenderer(_ref2) {
  var value = _ref2.value,
    column = _ref2.column,
    customRenderers = _ref2.customRenderers;
  var customRenderer = customRenderers && customRenderers[column.id];
  return customRenderer ? customRenderer(value) : null;
};
var EAMGridTab = function EAMGridTab(props) {
  var screenCode = props.screenCode,
    tabName = props.tabName,
    additionalParams = props.additionalParams,
    additionalAttributes = props.additionalAttributes,
    objectCode = props.objectCode,
    customRenderers = props.customRenderers,
    paramNames = props.paramNames,
    showGrid = props.showGrid,
    _props$rowCount = props.rowCount,
    rowCount = _props$rowCount === void 0 ? 100 : _props$rowCount,
    gridContainerStyle = props.gridContainerStyle;
  var gridName = props.gridName || screenCode + '_' + tabName;
  var getParams = function getParams() {
    return Object.fromEntries(paramNames.map(function (paramName) {
      return [paramName, objectCode];
    }));
  };
  var gridRequest = _objectSpread({
    rowCount: rowCount,
    cursorPosition: 1,
    params: _objectSpread({}, getParams(), {}, additionalParams),
    gridName: gridName,
    useNative: true,
    includeMetadata: true
  }, additionalAttributes);
  var paramRequestAdapter = function paramRequestAdapter(gridRequest) {
    return _objectSpread({}, gridRequest, {
      params: _objectSpread({}, getParams(), {}, additionalParams)
    });
  };
  return showGrid ? /*#__PURE__*/React.createElement(EAMGridContextProvider, _extends({
    searchOnMount: true,
    gridName: gridName,
    useNative: false,
    gridRequestAdapter: function gridRequestAdapter(gridRequest) {
      return paramRequestAdapter(gridRequest);
    },
    cellRenderer: function cellRenderer(props) {
      return customGridRenderer(_objectSpread({}, props, {
        customRenderers: customRenderers
      }));
    },
    initialShowFilters: false
  }, props), /*#__PURE__*/React.createElement(EAMGrid, {
    gridContainerStyle: _objectSpread({}, gridContainerStyle)
  })) : /*#__PURE__*/React.createElement(EAMTableGridRequestAdapter, {
    gridRequest: gridRequest
  }, function (_ref3) {
    var loading = _ref3.loading,
      requestError = _ref3.requestError,
      rows = _ref3.rows,
      columnsMetadata = _ref3.columnsMetadata,
      totalCount = _ref3.totalCount;
    return /*#__PURE__*/React.createElement(EAMTable, {
      loading: loading,
      rows: rows,
      columnsMetadata: columnsMetadata,
      tableProps: {
        stickyHeader: true
      },
      tableContainerProps: {
        sx: {
          maxHeight: 440
        }
      },
      cellStyle: customCellStyle,
      cellRenderer: function cellRenderer(props) {
        return customTableCellRenderer(_objectSpread({}, props, {
          customRenderers: customRenderers
        }));
      },
      isSortEnabled: function isSortEnabled() {
        return true;
      },
      extraBodyRender: function extraBodyRender() {
        return /*#__PURE__*/React.createElement(React.Fragment, null, !loading && !requestError && !rows.length && /*#__PURE__*/React.createElement("caption", {
          style: _objectSpread({}, captionStyle)
        }, "No data to show."), !loading && requestError && /*#__PURE__*/React.createElement("caption", {
          style: _objectSpread({}, captionStyle)
        }, "Failed to load data"), totalCount > 0 && totalCount > rowCount && /*#__PURE__*/React.createElement("caption", {
          style: _objectSpread({}, captionStyle)
        }, "First ", rowCount, " records. Show grid to see all the records."));
      }
    });
  });
};
export default EAMGridTab;