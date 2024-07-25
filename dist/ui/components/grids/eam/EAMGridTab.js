function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
    objectCode = props.objectCode,
    customRenderers = props.customRenderers,
    paramNames = props.paramNames,
    showGrid = props.showGrid,
    _props$rowCount = props.rowCount,
    rowCount = _props$rowCount === void 0 ? 100 : _props$rowCount,
    gridContainerStyle = props.gridContainerStyle;
  var gridName = screenCode + '_' + tabName;
  var getParams = function getParams() {
    return Object.fromEntries(paramNames.map(function (paramName) {
      return [paramName, objectCode];
    }));
  };
  var gridRequest = {
    rowCount: rowCount,
    cursorPosition: 1,
    params: _objectSpread({}, getParams()),
    gridName: gridName,
    useNative: true,
    includeMetadata: true
  };
  var paramRequestAdapter = function paramRequestAdapter(gridRequest) {
    return _objectSpread({}, gridRequest, {
      userFunctionName: screenCode,
      params: _objectSpread({}, getParams())
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