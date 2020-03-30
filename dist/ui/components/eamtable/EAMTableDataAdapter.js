"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EAMTableDataAdapter = function EAMTableDataAdapter(props) {
  var fetchData = props.fetchData,
      convertRowData = props.convertRowData,
      convertColumnMetadata = props.convertColumnMetadata;

  var _React$useState = _react["default"].useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      requestError = _React$useState4[0],
      setRequestError = _React$useState4[1];

  var _React$useState5 = _react["default"].useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      rows = _React$useState6[0],
      setRows = _React$useState6[1];

  var _React$useState7 = _react["default"].useState([]),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      columnsMetadata = _React$useState8[0],
      setColumnsMetadata = _React$useState8[1];

  _react["default"].useEffect(function () {
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
      });
    })();
  }, [fetchData, convertRowData, convertColumnMetadata]);

  var context = {
    loading: loading,
    requestError: requestError,
    rows: rows,
    columnsMetadata: columnsMetadata
  };
  return props.children(context);
};

var _default = EAMTableDataAdapter;
exports["default"] = _default;