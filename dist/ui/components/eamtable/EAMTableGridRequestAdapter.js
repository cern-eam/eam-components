"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _GridWS = _interopRequireDefault(require("../eamgrid/lib/GridWS"));

var _EAMTableDataAdapter = _interopRequireDefault(require("./EAMTableDataAdapter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EAMTableGridRequestAdapter = function EAMTableGridRequestAdapter(props) {
  var gridRequest = props.gridRequest,
      headers = props.headers;

  var convertRowData = function convertRowData(responseBody) {
    return flattenGridRow((responseBody.data || {}).row || []);
  };

  var convertColumnMetadata = function convertColumnMetadata(responseBody) {
    return getGridFieldsColumns((responseBody.data || {}).gridField, headers);
  };

  return _react["default"].createElement(_EAMTableDataAdapter["default"], {
    fetchData: function _callee() {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _GridWS["default"].getGridData(gridRequest));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    convertRowData: convertRowData,
    convertColumnMetadata: convertColumnMetadata
  }, function (context) {
    return props.children(context);
  });
};

var _default = EAMTableGridRequestAdapter;
exports["default"] = _default;

var flattenGridRow = function flattenGridRow(row) {
  return row.map(function (row) {
    return row && row.cell && row.cell.reduce(function (acc, cell) {
      return _objectSpread({}, acc, _defineProperty({}, cell.t, cell.value));
    }, {});
  });
};

var getGridFieldsColumns = function getGridFieldsColumns(gridFields, headers) {
  return gridFields.map(function (gf) {
    return {
      id: gf.name,
      header: headers[gf.name],
      width: gf.width
    };
  });
};