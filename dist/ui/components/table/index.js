"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRANSFORM_KEYS = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableSortLabel = _interopRequireDefault(require("@material-ui/core/TableSortLabel"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

require("./EISTable.css");

var _reactRouterDom = require("react-router-dom");

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Constants = _interopRequireDefault(require("../../../enums/Constants"));

var _dateFns = require("date-fns");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var whiteBackground = {
  backgroundColor: "#ffffff"
};
var greyBackground = {
  backgroundColor: "#eeeeee"
};
/**
 * Receive as props:
 * data: Containing all the results from the server
 * headers: Headers to display
 * propCodes: Properties of the data to be displayed (In the desired order)
 * linksMap: Information of the columns that will be displayed as links
 */

var EISTable = /*#__PURE__*/function (_Component) {
  _inherits(EISTable, _Component);

  var _super = _createSuper(EISTable);

  function EISTable() {
    var _this;

    _classCallCheck(this, EISTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      windowWidth: window.innerWidth,
      orderBy: -1,
      order: _Constants["default"].SORT_ASC,
      data: []
    };

    _this.onWindowSizeChange = function () {
      _this.setState(function () {
        return {
          windowWidth: window.innerWidth
        };
      });
    };

    _this.resetSort = function () {
      _this.setState(function () {
        return {
          orderBy: -1,
          order: _Constants["default"].SORT_ASC
        };
      });
    };

    _this.createSortHandler = function (property) {
      return function (event) {
        _this.handleRequestSort(event, property);
      };
    };

    _this.createSortHandlerMobile = function (event) {
      _this.handleRequestSort(event, event.target.value);
    };

    _this.handleRequestSort = function (event, property) {
      //By default asc
      var order = _Constants["default"].SORT_ASC;

      if (property >= 0 && property < _this.props.propCodes.length) {
        if (_this.state.orderBy === property && _this.state.order === _Constants["default"].SORT_ASC) {
          order = _Constants["default"].SORT_DESC;
        }
      } else {
        /*It's desc*/
        order = _Constants["default"].SORT_DESC;
      } //Assign final data


      _this.setState({
        order: order,
        orderBy: property
      });
    };

    _this.renderContent = function (propCode, content) {
      //Normal content
      if (!_this.props.linksMap.get(propCode)) {
        if (content[propCode] === 'true' || content[propCode] === 'false') {
          //Checkbox
          return /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
            checked: content[propCode] === 'true',
            value: content[propCode],
            disabled: true
          });
        }

        return content[propCode];
      } //Link


      var link = _this.props.linksMap.get(propCode);

      if (link.linkType === 'fixed') {
        return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
          to: {
            pathname: "".concat(link.linkPrefix).concat(link.linkValue).concat(content[propCode])
          }
        }, content[propCode]);
      } else if (link.linkType === 'absolute') {
        return /*#__PURE__*/_react["default"].createElement("a", {
          href: "".concat(link.linkValue).concat(content[propCode]),
          target: "_blank"
        }, content[propCode]);
      } else {
        /*Dynamic link*/
        return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
          to: {
            pathname: "".concat(link.linkPrefix).concat(content[link.linkValue])
          }
        }, content[propCode]);
      }
    };

    _this.renderSortByValuesMobile = function () {
      // Create list of values
      var listValues = _this.props.headers.map(function (elem) {
        return "".concat(elem, " (Asc)");
      });

      listValues = listValues.concat(_this.props.headers.map(function (elem) {
        return "".concat(elem, " (Desc)");
      }));
      return /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        "native": true,
        value: _this.state.orderBy,
        onChange: _this.createSortHandlerMobile,
        className: "eamTableDropdown"
      }, /*#__PURE__*/_react["default"].createElement("option", {
        value: -1
      }, "Select sort column..."), listValues.map(function (elem, index) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: index,
          value: index
        }, elem);
      }));
    };

    _this.propagateFilterChange = function (e) {
      _this.resetSort();

      _this.props.handleFilterChange(e.target.value);
    };

    _this.getSortedData = function (_ref) {
      var data = _ref.data,
          orderBy = _ref.orderBy,
          order = _ref.order,
          propCode = _ref.propCode,
          keyMap = _ref.keyMap;

      if (orderBy < 0) {
        return data;
      }

      var keyFunction = typeof keyMap[propCode] === 'function' ? keyMap[propCode] : TRANSFORM_KEYS.DEFAULT; // Schwartzian transform

      var sorted = data.map(function (datum) {
        return [datum, keyFunction(datum[propCode])];
      }).sort(function (_ref2, _ref3) {
        var _ref4 = _slicedToArray(_ref2, 2),
            a = _ref4[1];

        var _ref5 = _slicedToArray(_ref3, 2),
            b = _ref5[1];

        return a < b ? -1 : a > b ? 1 : 0;
      }).map(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 1),
            datum = _ref7[0];

        return datum;
      });
      return order === _Constants["default"].SORT_DESC ? sorted.reverse() : sorted;
    };

    return _this;
  }

  _createClass(EISTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.onWindowSizeChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onWindowSizeChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          order = _this$state.order,
          orderBy = _this$state.orderBy,
          windowWidth = _this$state.windowWidth;
      var _this$props = this.props,
          headers = _this$props.headers,
          maxMobileSize = _this$props.maxMobileSize,
          onRowClick = _this$props.onRowClick,
          propCodes = _this$props.propCodes,
          selectedRowIndexes = _this$props.selectedRowIndexes,
          stylesMap = _this$props.stylesMap,
          keyMap = _this$props.keyMap;
      var isMobile = windowWidth < maxMobileSize;
      var rowsSelectable = selectedRowIndexes && onRowClick;
      var tableData = this.getSortedData({
        data: data,
        orderBy: orderBy,
        order: order,
        propCode: propCodes[orderBy],
        keyMap: keyMap
      });

      if (isMobile) {
        return /*#__PURE__*/_react["default"].createElement(_Table["default"], {
          className: "responsiveTable",
          style: {
            overflow: 'visible'
          }
        }, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
          key: "sortby"
        }, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Sort by:"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, this.renderSortByValuesMobile()))), tableData.map(function (content, index) {
          // every second row is grey
          var style = index % 2 === 0 ? whiteBackground : greyBackground;

          if (selectedRowIndexes && selectedRowIndexes.includes(index)) {
            style = _objectSpread({}, style, {
              backgroundColor: "#2b82ff"
            });
          }

          if (rowsSelectable) {
            style = _objectSpread({}, style, {
              cursor: "pointer"
            });
          }
          /**
           * A prop called stylesMap is used to customize the table
           * If items with the property "full" have to be marked red,
           * pass the folowing:
           * stylesMap={{
           *      full: {
           *          backgroundColor: "red"
           *      }
           * }}
           */


          if (stylesMap) {
            Object.keys(stylesMap).forEach(function (key) {
              if (content[key]) {
                style = _objectSpread({}, style, {}, stylesMap[key]);
              }
            });
          }

          return /*#__PURE__*/_react["default"].createElement(_TableBody["default"], {
            key: index,
            style: style,
            onClick: rowsSelectable ? function () {
              return onRowClick(content, index);
            } : function () {}
          }, propCodes.map(function (prop, index) {
            return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
              key: prop,
              style: style
            }, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, headers[index]), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, _this2.renderContent(prop, content)));
          }));
        }));
      } else {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Table["default"], {
          className: "responsiveTable",
          style: {
            overflow: 'visible'
          }
        }, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
          key: "key"
        }, headers.map(function (header, index) {
          return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
            key: header,
            sortDirection: orderBy === index ? order : false
          }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
            title: "Sort",
            placement: 'bottom-end',
            enterDelay: 300
          }, /*#__PURE__*/_react["default"].createElement(_TableSortLabel["default"], {
            active: orderBy === index,
            direction: order,
            onClick: _this2.createSortHandler(index)
          }, header)));
        }))), /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, tableData.map(function (content, index) {
          var style = {};

          if (selectedRowIndexes && selectedRowIndexes.includes(index)) {
            style = _objectSpread({}, style, {
              backgroundColor: "#2196f3"
            });
          }

          if (rowsSelectable) {
            style = _objectSpread({}, style, {
              cursor: "pointer"
            });
          }

          if (stylesMap) {
            Object.keys(stylesMap).forEach(function (key) {
              if (content[key]) {
                style = _objectSpread({}, style, {}, stylesMap[key]);
              }
            });
          }

          return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
            key: index,
            style: style,
            onClick: rowsSelectable ? function () {
              return onRowClick(content, index);
            } : function () {}
          }, propCodes.map(function (propCode) {
            return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
              key: propCode
            }, _this2.renderContent(propCode, content));
          }));
        }))));
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.data !== state.data) {
        return _objectSpread({}, state, {
          data: props.data
        });
      }

      return null;
    }
  }]);

  return EISTable;
}(_react.Component);

EISTable.propTypes = {
  linksMap: _propTypes["default"].instanceOf(Map),
  data: _propTypes["default"].array.isRequired,
  headers: _propTypes["default"].array.isRequired,
  propCodes: _propTypes["default"].array.isRequired,
  selectedRowIndexes: _propTypes["default"].array,
  onRowClick: _propTypes["default"].func,
  stylesMap: _propTypes["default"].object,
  keyMap: _propTypes["default"].object
};
EISTable.defaultProps = {
  linksMap: new Map(),
  maxMobileSize: 540,
  keyMap: {}
};

var _default = _react["default"].memo(EISTable);

exports["default"] = _default;

var GENERATE_DATE_PARSER = function GENERATE_DATE_PARSER(parseString) {
  return function (value) {
    return (0, _dateFns.parse)(value, parseString, new Date()).getTime();
  };
};

var TRANSFORM_KEYS = {
  DATE_DD_MMM_YYYY: GENERATE_DATE_PARSER('dd-MMM-yyyy'),
  DATE_DD_MMM_YYYY_HH_MM: GENERATE_DATE_PARSER('dd-MMM-yyyy HH:mm'),
  DEFAULT: function DEFAULT(value) {
    return isNaN(value) ? value : +value;
  },
  GENERATE_DATE_PARSER: GENERATE_DATE_PARSER
};
exports.TRANSFORM_KEYS = TRANSFORM_KEYS;