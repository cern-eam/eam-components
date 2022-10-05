function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';

var EAMTableDataAdapter = function EAMTableDataAdapter(props) {
  var equipmentCode = props.equipmentCode,
      fetchData = props.fetchData,
      convertRowData = props.convertRowData,
      convertColumnMetadata = props.convertColumnMetadata;

  var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      requestError = _React$useState4[0],
      setRequestError = _React$useState4[1];

  var _React$useState5 = React.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      rows = _React$useState6[0],
      setRows = _React$useState6[1];

  var _React$useState7 = React.useState([]),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      columnsMetadata = _React$useState8[0],
      setColumnsMetadata = _React$useState8[1];

  React.useEffect(function () {
    (function _callee() {
      var response, responseBody;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return regeneratorRuntime.awrap(fetchData()["catch"](function () {
                setLoading(false);
                setRequestError(true);
                return;
              }));

            case 3:
              response = _context.sent;
              responseBody = response && response.body;

              if (responseBody) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return");

            case 7:
              setRows(convertRowData(responseBody));
              setColumnsMetadata(convertColumnMetadata(responseBody));
              setLoading(false);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    })();
  }, [equipmentCode]);
  var context = {
    loading: loading,
    requestError: requestError,
    rows: rows,
    columnsMetadata: columnsMetadata
  };
  return props.children(context);
};

export default EAMTableDataAdapter;